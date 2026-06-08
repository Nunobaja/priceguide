# Guía interna: del intake a `businesses.js`

> **Uso interno de Precios Locales.** Esta guía explica cómo convertir un intake de cliente completo y aprobado en una entrada válida de `businesses.js`. No sustituye la confirmación del dueño ni autoriza inventar información.

## 1. Propósito

El objetivo es tomar los datos aprobados en un intake completado —por ejemplo, [`client-intake-template.md`](client-intake-template.md)— y convertirlos de forma consistente en un objeto dentro de `window.BUSINESSES` en `businesses.js`.

Esta tarea es de configuración editorial: transcribir, normalizar y estructurar información confirmada. No implica cambiar rutas existentes, lógica de precios, comportamiento de la aplicación ni datos de otros negocios.

Flujo recomendado:

1. Verificar que el intake esté completo y aprobado.
2. Marcar cualquier dato faltante como `[POR CONFIRMAR]` en el documento de trabajo; no publicarlo como si estuviera confirmado.
3. Crear el objeto del negocio siguiendo el esquema existente de `businesses.js`.
4. Ejecutar el preflight de publicación.
5. Probar la URL, el estimador, WhatsApp y los enlaces con origen.
6. Obtener la aprobación final del dueño antes de publicar.

## 2. Tabla de mapeo de campos

| Campo del intake | Campo en `businesses.js` | Cómo convertirlo |
|---|---|---|
| Nombre comercial | `name` | Copiar el nombre público aprobado, conservando acentos, mayúsculas y razón comercial visible. |
| Ciudad y estado | `city` | Copiar la ubicación en formato público, por ejemplo, `Cabo San Lucas, B.C.S.`. No usar este texto directamente como slug. |
| Categoría | `category` | Usar la categoría pública principal aprobada. Es el texto de respaldo cuando no existe `categoryLabel`. |
| Subcategoría visible | `categoryLabel` o `subcategory`, si aplica | En el esquema actual, usar `categoryLabel` para una etiqueta pública más específica. `subcategory` solo debe usarse si el esquema y el consumidor vigentes lo admiten; no agregar un campo sin uso. Si no hay subcategoría confirmada, omitir el campo opcional y dejar que se muestre `category`. |
| Teléfono público | `phone` | Guardar únicamente los 10 dígitos nacionales, sin `+52`, espacios, guiones ni paréntesis. |
| WhatsApp confirmado | `whatsapp` | Guardar código de país más número, solo dígitos; para México: `52` + 10 dígitos. No asumir que el teléfono recibe WhatsApp. |
| Zonas que atiende | `zones` | Convertir cada zona en `{ label, factor }`; agregar `labelEn` solo si existe traducción aprobada. Cada factor debe estar confirmado o claramente identificado como demo. |
| Servicios | `services` | Crear un objeto por servicio aprobado con `id`, nombre, rango base, preguntas y opciones. |
| Headline principal | `heroHeadline` | Copiar el encabezado principal en español. Debe describir la utilidad de la guía sin promesas exageradas. |
| Subheadline | `heroSubheadline` | Copiar el texto secundario breve en español. |
| Texto introductorio | `estimateIntro` | Explicar qué debe seleccionar el usuario y qué variables pueden modificar el rango. |
| Disclaimer | `priceDisclaimer` | Aclarar que el resultado es estimado y que el precio final depende de la revisión real. |
| CTA WhatsApp | `whatsappCtaLabel` | Texto visible del botón, por ejemplo, `Enviar solicitud por WhatsApp`. |
| Texto auxiliar WhatsApp | `whatsappHelperText` | Explicar que se abrirá WhatsApp con la solicitud preparada para revisión del negocio. |
| Identidad visual | `brandInitial`, `brandAccentColor`, `brandLogoText` | Usar la inicial, color hexadecimal y nombre corto aprobados. Si no hay logo gráfico, estos campos forman la identidad textual existente; no inventar activos. |
| Metadata | `metaTitle`, `metaDescription`, `shareTitle`, `shareDescription` | Convertir los textos SEO y para compartir sin afirmaciones no comprobadas. |
| Inglés | `english` y campos con sufijo `En` | Los textos generales van dentro de `english`; servicios usan `nameEn` y `helperTextEn`; preguntas usan `labelEn` y `helperTextEn`; opciones y zonas usan `labelEn`. Todos son opcionales. |
| Orígenes de uso | Ejemplos de URL con `source`; **no son campos de `businesses.js`** | Preparar enlaces como `/cabo-san-lucas/aire-acondicionado/negocio/?source=google-business-profile`, `?source=facebook`, `?source=instagram` o `?source=qr-fisico`. Usar solo letras, números, espacios, guiones o guiones bajos en el valor. |

Además de los campos del intake, una entrada normalmente conserva `currency: "MXN"` y `currencyLabel: "pesos mexicanos"`, de acuerdo con el esquema actual. Copiar el patrón existente; no cambiar la moneda ni su comportamiento como parte del alta.

### Ejemplo mínimo de identidad y contenido

```js
{
  name: "Nombre aprobado",
  brandInitial: "N",
  brandAccentColor: "#A65A12",
  brandLogoText: "Nombre aprobado",
  city: "Ciudad, Estado",
  category: "Categoría aprobada",
  categoryLabel: "Subcategoría visible aprobada",
  phone: "0000000000",
  whatsapp: "520000000000",
  currency: "MXN",
  currencyLabel: "pesos mexicanos"
}
```

Los números anteriores son marcadores estructurales, no datos para publicar.

## 3. Reglas para slugs e identificadores

La ruta de un negocio se forma así:

```text
/{citySlug}/{categorySlug}/{businessSlug}/
```

Aplicar las mismas reglas a `citySlug`, `categorySlug`, `businessSlug` y al `id` de cada servicio:

- usar minúsculas;
- eliminar acentos y diacríticos: `Mazatlán` → `mazatlan`;
- convertir espacios en guiones: `Cabo San Lucas` → `cabo-san-lucas`;
- eliminar puntuación y caracteres decorativos;
- evitar guiones repetidos o al inicio/final;
- elegir valores claros y únicos dentro de su contexto;
- mantenerlos estables una vez publicados.

No cambiar un slug o `service.id` publicado solo para “mejorarlo”: puede romper enlaces compartidos, rutas guardadas o URLs con selecciones. Si un cambio fuera imprescindible, debe tratarse como una decisión de publicación separada, no como parte de una transcripción rutinaria.

### `citySlug`

Derivarlo de la ciudad que define la ruta, sin incluir abreviaturas innecesarias del estado.

```js
city: "Cabo San Lucas, B.C.S.",
citySlug: "cabo-san-lucas"
```

### `categorySlug`

Usar la categoría de ruta vigente y consistente con negocios comparables. No derivarla automáticamente de una subcategoría visible.

```js
category: "Aire acondicionado y refrigeración",
categorySlug: "aire-acondicionado"
```

### `businessSlug`

Derivarlo del nombre comercial, eliminando puntuación y palabras que no sean necesarias, pero conservando suficiente identidad para evitar colisiones.

```js
name: "Carmona Hnos Climas y Refrigeración",
businessSlug: "carmona-hnos-climas-refrigeracion"
```

### `service.id`

Usar un identificador breve, descriptivo y único dentro del negocio. El `id` no es el texto visible y no debe traducirse.

```js
id: "mantenimiento-aire-acondicionado"
```

Los `id` de preguntas siguen las mismas reglas y deben ser únicos dentro de su servicio.

## 4. Estructura de un servicio

Cada elemento de `services` representa un servicio seleccionable. Ejemplo completo:

```js
{
  id: "mantenimiento-aire-acondicionado",
  name: "Mantenimiento de aire acondicionado",
  nameEn: "AC maintenance", // opcional
  helperText: "Para limpieza y revisión preventiva de uno o más equipos.", // opcional
  helperTextEn: "For cleaning and preventive inspection of one or more units.", // opcional
  base: [650, 1100], // [mínimo, máximo] en MXN
  questions: [
    {
      id: "equipos",
      label: "¿Cuántos equipos necesitan mantenimiento?",
      labelEn: "How many units need maintenance?",
      helperText: "Selecciona cuántos equipos necesitan revisión o limpieza.",
      helperTextEn: "Select how many units need inspection or cleaning.",
      options: [
        { label: "1 equipo", labelEn: "1 unit", factor: 1.0 },
        { label: "2 equipos", labelEn: "2 units", factor: 1.75 },
        { label: "3 o más equipos", labelEn: "3 or more units", factor: 2.4 }
      ]
    }
  ]
}
```

Reglas operativas:

- `id` es obligatorio y estable.
- `name` es obligatorio y siempre va en español.
- `nameEn`, `helperText` y `helperTextEn` son opcionales.
- `base` siempre tiene dos números: `[mínimo, máximo]`, con el mínimo menor o igual al máximo.
- `questions` contiene las preguntas necesarias para ajustar el rango, sin pedir conocimientos técnicos innecesarios.

## 5. Estructura de una pregunta

Cada pregunta debe ayudar a distinguir una variación real del trabajo. Ejemplo completo:

```js
{
  id: "acceso",
  label: "¿Dónde se instalará la unidad exterior?",
  labelEn: "Where will the outdoor unit be installed?", // opcional
  helperText: "Esto ayuda a estimar dificultad, altura, materiales y tiempo.", // opcional
  helperTextEn: "This helps estimate difficulty, height, materials, and time.", // opcional
  options: [
    {
      label: "Planta baja y fácil acceso",
      labelEn: "Ground floor with easy access",
      factor: 1.0
    },
    {
      label: "Segundo piso",
      labelEn: "Second floor",
      factor: 1.2
    },
    {
      label: "Azotea o acceso especial",
      labelEn: "Rooftop or special access",
      factor: 1.4
    }
  ]
}
```

Reglas operativas:

- `id` es obligatorio, estable y único dentro del servicio.
- `label` es obligatorio y debe ser una pregunta clara en español.
- `labelEn`, `helperText` y `helperTextEn` son opcionales.
- `options` debe ofrecer respuestas que el cliente pueda reconocer sin una inspección técnica.
- Evitar opciones que se traslapen o dejen fuera el caso más común.

## 6. Estructura de una opción y significado de `factor`

Una opción contiene:

```js
{
  label: "Segundo piso",
  labelEn: "Second floor", // opcional
  factor: 1.2
}
```

- `label`: respuesta visible obligatoria en español.
- `labelEn`: traducción opcional al inglés.
- `factor`: multiplicador aplicado al rango estimado.

Interpretación sencilla:

- `1.0` = mantiene el rango base;
- menor que `1.0` = reduce el estimado;
- mayor que `1.0` = aumenta el estimado;
- evitar multiplicadores extremos salvo que estén confirmados por el dueño.

Los factores de todas las respuestas seleccionadas y de la zona se combinan con el rango base. Por eso un factor aparentemente moderado puede producir un cambio mayor al combinarse con otros. Revisar el resultado completo, no solo cada factor de forma aislada.

## 7. Reglas de precios

- Usar únicamente rangos base confirmados por el dueño.
- Si los rangos son valores demo, indicarlo claramente en `pricingNotes`.
- No inventar precios exactos para llenar campos faltantes.
- Mantener rangos suficientemente amplios para reflejar variaciones reales de equipo, materiales, acceso, distancia y alcance.
- El mínimo no debe superar al máximo.
- Confirmar con el dueño los factores de preguntas y zonas, además del rango base.
- El precio final siempre se confirma por WhatsApp.
- El estimador ofrece una orientación inicial; no debe presentarse como cotización formal ni garantía.

Ejemplo de nota para valores no confirmados:

```js
pricingNotes: "Los rangos son demostrativos y deben ajustarse con precios reales del negocio antes de usar esta guía comercialmente."
```

No publicar una guía comercial real con valores demo sin aprobación explícita.

## 8. Reglas bilingües

- El español es obligatorio para todos los textos publicados.
- El inglés es opcional.
- Si una traducción al inglés está incompleta o vacía, la aplicación debe usar el texto en español como respaldo.
- No usar traducción dinámica ni servicios automáticos de traducción en tiempo de ejecución.
- Mantener los slugs y los `id` iguales en ambos idiomas.
- Obtener aprobación del negocio para las traducciones antes de tratarlas como finales.

### Ubicación de los textos en inglés

Textos generales del negocio:

```js
english: {
  heroHeadline: "...",
  heroSubheadline: "...",
  estimateIntro: "...",
  priceDisclaimer: "...",
  whatsappCtaLabel: "...",
  whatsappHelperText: "...",
  serviceAreaNote: "...",
  pricingNotes: "..."
}
```

Textos dentro de listas:

- servicio: `nameEn`, `helperTextEn`;
- pregunta: `labelEn`, `helperTextEn`;
- opción: `labelEn`;
- zona: `labelEn`.

No crear una segunda entrada de negocio para inglés.

## 9. Reglas de metadata

- Hacer los títulos específicos para el negocio y la ciudad.
- Mantener las descripciones cortas, claras y descriptivas.
- Evitar repetir palabras clave de forma artificial.
- No usar afirmaciones exageradas.
- No usar “el mejor”, “#1”, garantías ni resultados asegurados, salvo que el dueño aporte prueba válida y apruebe el texto.
- Describir la guía como estimación o rango inicial, no como precio final.
- Verificar que `metaTitle`/`metaDescription` y `shareTitle`/`shareDescription` sean coherentes con los servicios realmente publicados.

Patrón recomendado, no obligatorio:

```js
metaTitle: "[Negocio] · Guía de precios en [Ciudad]",
metaDescription: "Calcula un rango estimado para [servicios] antes de contactar por WhatsApp.",
shareTitle: "Guía de precios · [Negocio]",
shareDescription: "Responde unas preguntas y obtén un rango inicial para [servicio] en [Ciudad]."
```

## 10. Checklist antes de publicar

- [ ] Completar el intake del cliente.
- [ ] Confirmar que teléfono, WhatsApp, zonas, servicios, precios, factores y textos tienen aprobación.
- [ ] Convertir la información en una entrada válida de `businesses.js`.
- [ ] Confirmar que todos los slugs e `id` cumplen las reglas y no chocan con entradas existentes.
- [ ] Ejecutar `node scripts/publish-preflight.js`.
- [ ] Confirmar que se generaron los route shells para las dos rutas soportadas.
- [ ] Probar la URL del negocio, incluyendo una visita directa a la ruta.
- [ ] Probar cada servicio, pregunta, opción y zona.
- [ ] Probar el enlace y el mensaje de WhatsApp con el número aprobado.
- [ ] Probar los enlaces con `?source=...` preparados para Google Business Profile, redes o QR.
- [ ] Revisar español y, si existe, inglés; comprobar el respaldo a español donde falten traducciones.
- [ ] Obtener aprobación final del dueño antes de publicar.

## 11. Ejemplo corto de mapeo: Carmona

Este ejemplo usa únicamente valores que ya existen en el intake y la configuración actuales de Carmona. Lo que no está confirmado se conserva como `[POR CONFIRMAR]`; no debe convertirse en un dato aprobado por inferencia.

| Intake de Carmona | Campo de configuración | Valor mapeado |
|---|---|---|
| Nombre comercial | `name` | `Carmona Hnos Climas y Refrigeración` |
| Ciudad y estado | `city` | `Cabo San Lucas, B.C.S.` |
| Ciudad para ruta | `citySlug` | `cabo-san-lucas` |
| Categoría | `category` | `Aire acondicionado y refrigeración` |
| Categoría para ruta | `categorySlug` | `aire-acondicionado` |
| Nombre para ruta | `businessSlug` | `carmona-hnos-climas-refrigeracion` |
| Subcategoría visible | `categoryLabel` | `[POR CONFIRMAR]`; omitir mientras no esté confirmada |
| Teléfono público | `phone` | `6241152835` |
| WhatsApp indicado | `whatsapp` | `526241152835`, pero su confirmación sigue `[POR CONFIRMAR]` |
| Zonas que atiende | `zones` / `serviceAreaNote` | `Cabo San Lucas` y `Corredor turístico de Los Cabos`; factores `[POR CONFIRMAR]` si no han sido aprobados |
| Headline principal | `heroHeadline` | `Calcula un rango estimado para servicio de aire acondicionado en Cabo San Lucas.` |
| Inicial visible | `brandInitial` | `C` |
| Color principal | `brandAccentColor` | `#C87516` |
| Nombre corto de marca | `brandLogoText` | `Carmona Hnos Climas y Refrigeración` |
| Título SEO | `metaTitle` | `Carmona Hnos Climas y Refrigeración · Guía de precios en Cabo San Lucas` |
| Descripción SEO | `metaDescription` | `Calcula un rango estimado para instalación, mantenimiento o reparación de aire acondicionado antes de contactar por WhatsApp.` |
| Rango de instalación de climas | `services[].base` | `[2200, 4200]`, marcado como demo y pendiente de confirmación comercial |
| Nota interna de precios | `pricingNotes` | `Los rangos son demostrativos y deben ajustarse con precios reales del negocio antes de usar esta guía comercialmente.` |
| Uso en Google/Facebook/Instagram/QR | URLs con `?source=...` | `[POR CONFIRMAR]`; no agregar estos orígenes como campos del negocio |
| Aprobación de traducciones | campos `english` y `*En` | `[POR CONFIRMAR]` |

Ejemplo parcial de estructura, **no listo para publicación mientras existan confirmaciones pendientes**:

```js
{
  citySlug: "cabo-san-lucas",
  categorySlug: "aire-acondicionado",
  businessSlug: "carmona-hnos-climas-refrigeracion",
  name: "Carmona Hnos Climas y Refrigeración",
  brandInitial: "C",
  brandAccentColor: "#C87516",
  brandLogoText: "Carmona Hnos Climas y Refrigeración",
  city: "Cabo San Lucas, B.C.S.",
  category: "Aire acondicionado y refrigeración",
  phone: "6241152835",
  whatsapp: "526241152835", // [POR CONFIRMAR]
  pricingNotes: "Los rangos son demostrativos y deben ajustarse con precios reales del negocio antes de usar esta guía comercialmente."
}
```

Antes de reutilizar este ejemplo, volver al intake de Carmona y resolver cada `[POR CONFIRMAR]`. El hecho de que un valor exista en una configuración demo no equivale a aprobación comercial del dueño.
