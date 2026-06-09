# Harness interno de QA para parámetros URL

## Propósito

`scripts/qa-url-params.js` es una comprobación interna, determinista y sin navegador para validar que las páginas individuales de Precios Locales procesan de forma segura el contexto URL de `source`, `service`, `campaign`, `lang` y `zone`.

El harness carga una copia aislada de `window.BUSINESSES` desde `businesses.js`, selecciona un conjunto pequeño de fixtures existentes, genera URLs de páginas individuales y comprueba el resultado con `URL` y `URLSearchParams`. No muta los objetos de negocio ni escribe archivos.

La lógica pura de parsing del script replica de manera mínima el comportamiento privado actual de `app.js`; no exporta helpers de la aplicación ni cambia el runtime. Si ese comportamiento cambia, el harness y este contrato deben actualizarse en el mismo PR enfocado o en un follow-up explícito.

## Qué valida

El script comprueba, sin automatización de navegador:

- que cada URL mantiene la ruta de una guía individual y tiene su shell estático bajo `/priceguide/`;
- que `URLSearchParams` puede interpretar cada combinación;
- que los valores esperados de `source` se conservan como etiquetas de contexto manual seguras;
- que un `source` desconocido pero compuesto solo por texto seguro se conserva según el comportamiento actual, mientras que contenido con HTML/script se rechaza;
- que un `service` válido coincide con un servicio configurado y uno inválido no coincide;
- que `campaign` acepta valores en minúsculas con letras ASCII, números, guion o guion bajo, y rechaza valores vacíos, demasiado largos o con contenido script-like;
- que `lang=es` usa español, `lang=en` solicita inglés y solo lo activa si el negocio tiene copy inglés, y cualquier otro idioma cae de forma segura a español;
- que `zone` se marca explícitamente como soportado cuando existe `getZoneFromUrl()` en `app.js`, que una zona válida coincide con datos configurados y que una zona desconocida se ignora;
- que, si el soporte de `zone` desaparece en una rama futura, el valor se ignora de forma segura y se emite la advertencia: **“Zone param not currently supported — expected behavior is safe ignore.”**;
- que el orden de parámetros combinados no hace que un parámetro sobrescriba otro;
- que valores hostiles no se aceptan como etiquetas seguras ni coinciden con servicios o zonas;
- que ninguna URL generada introduce parámetros o rutas de búsqueda, comparación, ranking, marketplace o directorio.

## Qué no valida

Este harness no reemplaza una corrida E2E manual. En particular, no valida:

- renderizado, layout, wrapping o legibilidad móvil;
- texto visible, interacción con botones, reset o estado del DOM;
- contenido final copiado al portapapeles;
- apertura real de WhatsApp o llamada;
- apariencia bilingüe completa ni fallback visual de traducciones parciales;
- cálculos, rangos, factores o fórmulas del estimador;
- comportamiento de red, hosting o servicios externos.

Para esas comprobaciones se debe usar el [checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md).

## Cómo ejecutarlo

Desde la raíz del repositorio:

```bash
node scripts/qa-url-params.js
```

No existe `package.json` en este repositorio, por lo que no se agrega un alias npm. El comando usa únicamente módulos integrados de Node, no instala paquetes, no requiere browser automation y no llama servicios externos.

Comprobación de sintaxis independiente:

```bash
node --check scripts/qa-url-params.js
```

## Salida esperada

Cada fixture muestra su ruta individual y una línea `PASS` o `FAIL` por caso. El resumen final incluye:

- número de negocios comprobados;
- número de casos URL comprobados;
- total aprobado;
- total fallido;
- total de advertencias o casos omitidos;
- lista de advertencias/skips, si existe;
- lista de fallos con fixture, caso y razón;
- recordatorio de que la herramienta es exclusivamente QA interno.

Una corrida exitosa termina con código `0`. Cualquier aserción fallida termina con código distinto de cero.

Ejemplo resumido, sin fijar cantidades futuras:

```text
Summary
  Businesses checked: 3
  URL cases checked: 72
  Passed: 72
  Failed: 0
  Skipped/warnings: 0

Internal QA only: no analytics, tracking, storage, lead capture, or public directory behavior.
```

## Selección de fixtures

La selección se hace por capacidad, no por promoción del negocio, y elimina duplicados cuando un fixture cubre varios estados:

1. fixture interno de PR #65: `/priceguide/guadalajara/fumigacion/fixture-interno-control-preventivo/`;
2. negocio con WhatsApp presente y no marcado como pendiente;
3. negocio con más de un servicio;
4. negocio con copy inglés disponible;
5. negocio con una lista larga de ocho o más zonas.

La selección usa solo datos existentes. No crea negocios, servicios, zonas, rutas ni slugs. Si falta una capacidad, se registra como advertencia o skip en lugar de modificar `businesses.js` o convertir automáticamente el gap en fallo de producto.

## Casos URL cubiertos

Para cada fixture seleccionado se generan estos casos:

- sin parámetros;
- `?source=google-business-profile`;
- `?source=whatsapp-business`;
- `?source=qr-physical`;
- `?source=direct-link`;
- `?source=unknown-source`;
- `?service={validServiceSlug}`;
- `?service=unknown-service`;
- `?campaign=promo-verano`;
- `?campaign=volante_junio`;
- `?campaign=`;
- una campaña de 61 caracteres;
- `?campaign=<script>alert(1)</script>`;
- `?lang=es`;
- `?lang=en`;
- `?lang=fr`;
- `?zone={validZoneSlug}`;
- `?zone=unknown-zone`;
- `?source=google-business-profile&service={validServiceSlug}`;
- `?service={validServiceSlug}&source=whatsapp-business`;
- `?source=qr-physical&service={validServiceSlug}&campaign=volante-junio`;
- `?lang=en&source=direct-link&service={validServiceSlug}`;
- `?lang=es&source=whatsapp-business&service={validServiceSlug}&campaign=promo-junio`;
- una mezcla hostil con valores script-like en todos los parámetros relevantes.

`{validServiceSlug}` y `{validZoneSlug}` se derivan del primer servicio y la primera zona ya configurados en cada fixture. Esto hace la corrida determinista y evita escribir o alterar datos.

## Interpretación de advertencias y skips

Una advertencia significa que la cobertura de fixture esperada no está disponible o que una capacidad, como `zone`, ya no está soportada por la aplicación actual. No significa por sí sola que el producto esté roto.

- Fixture faltante: registrar el gap exacto y confirmar si la matriz vigente exige esa cobertura.
- Zona no soportada: confirmar safe ignore; no implementar soporte desde el harness.
- Servicio o zona faltante en un fixture seleccionado: omitir el caso afectado y revisar si el problema es de datos o de selección.
- Shell de ruta faltante, parser inseguro o pérdida de contexto entre parámetros válidos: tratar como fallo reproducible.

No se deben “resolver” warnings inventando datos, cambiando rangos o ampliando el producto dentro del mismo PR.

## Reglas para follow-ups

Los hallazgos deben convertirse en PRs pequeños y enfocados:

- parsing roto o pérdida de contexto → PR de bug de producto;
- fixture faltante → PR de fixture demo exclusivamente de datos;
- comportamiento confuso que requiere navegador → checklist E2E y prueba manual en browser;
- fricción de lectura en móvil o resultado → PR posterior de pulido;
- fallos no relacionados → PRs separados, sin agrupar arreglos.

No cambiar fórmulas, rangos, rutas, slugs o datos para ocultar un fallo de parsing. No añadir refactors amplios solo para que el harness pueda importar helpers privados.

## Informe final relacionado

Los resultados de este harness se consolidan, junto con la matriz, la auditoría de fixtures y el checklist E2E, en el [informe interno final de validación de producto](final-product-validation-report.md).

## Límites internos obligatorios

Este harness y su salida son exclusivamente para QA y validación interna de páginas de guía individuales.

- No es analytics ni tracking.
- No es un dashboard ni reporte de rendimiento.
- No registra, cuenta ni almacena visitas.
- No usa cookies, base de datos, backend o servicios externos.
- No valida rendimiento comercial, marketing, campañas o atribución.
- No crea CRM, lead capture, login o pagos.
- No cambia el comportamiento del usuario ni de la aplicación.
- No crea rutas públicas nuevas.
- No convierte `/priceguide/` en un directorio público.
- No habilita búsqueda, filtros, reviews, ratings, rankings, comparación o marketplace.
- No es material comercial, propuesta, pitch ni documento client-facing.

El alcance sigue siendo una página individual por negocio y la verificación segura de su contexto URL existente.
