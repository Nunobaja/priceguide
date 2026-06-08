# SOP interno: publicar un negocio en 10 minutos

> **Uso interno de Precios Locales.** Flujo práctico para publicar una guía individual ya aprobada. Tiempo objetivo: aproximadamente 10 minutos si el intake está completo y no hay errores de validación.

## 1. Objetivo

Publicar una guía individual de precios para un negocio después de que el dueño haya aprobado el intake. Este proceso convierte información confirmada en una entrada de `businesses.js`, valida la guía y prepara su entrega; no cambia el comportamiento de la aplicación, las rutas ni la lógica de precios.

## 2. Antes de empezar

Confirma que tienes:

- [ ] Intake del cliente completo.
- [ ] Servicios, zonas, WhatsApp y rangos de precios aprobados por el dueño.
- [ ] Acceso al repositorio.
- [ ] La rama `main` actualizada.
- [ ] Ninguna tarea de Codex pendiente o sin resolver.

Si falta una confirmación, detén la publicación. No completes datos por cuenta propia.

## 3. Paso 1 — Crear la entrada en `businesses.js` (3 minutos)

1. Sigue [`docs/intake-to-businesses-js-guide.md`](intake-to-businesses-js-guide.md).
2. Copia la estructura del negocio existente más parecido; no crees un esquema nuevo.
3. Reemplaza los campos del negocio con los datos aprobados.
4. Agrega los servicios, preguntas, opciones y zonas confirmados.
5. Agrega inglés opcional solo si el texto fue confirmado.
6. No inventes precios, factores, cobertura, experiencia, disponibilidad ni otras afirmaciones.

Revisa que el slug sea correcto y estable antes de continuar.

## 4. Paso 2 — Ejecutar preflight (1 minuto)

Desde la raíz del repositorio, ejecuta:

```sh
node scripts/publish-preflight.js
```

Este comando regenera los *route shells* a partir de la configuración vigente y valida el sitio.

## 5. Paso 3 — Corregir errores (1 minuto)

- Corrige únicamente los errores señalados en `businesses.js` o en la generación de *route shells*.
- No desactives, omitas ni evites el validador.
- No cambies fórmulas, lógica de precios, rutas ni datos de otros negocios para forzar un resultado válido.
- Vuelve a ejecutar `node scripts/publish-preflight.js` hasta que termine correctamente.

Si la corrección requiere información no aprobada, detente y consulta al dueño.

## 6. Paso 4 — Probar URL principal (2 minutos)

Abre la URL principal del negocio y confirma:

- [ ] El nombre del negocio está visible.
- [ ] El teléfono y WhatsApp están visibles y son correctos.
- [ ] Los servicios están visibles.
- [ ] Las zonas están visibles.
- [ ] El resultado estimado aparece al completar una selección.
- [ ] Reiniciar funciona.
- [ ] Copiar enlace funciona.
- [ ] Copiar resumen funciona.
- [ ] La salida a WhatsApp y la llamada funcionan con los datos correctos.

No publiques si un dato visible no coincide con el intake aprobado.

## 7. Paso 5 — Probar links con `source` (1 minuto)

Sustituye `<URL_DEL_NEGOCIO>` por la URL principal final y abre al menos una muestra. Prepara los cinco links para la entrega:

```text
<URL_DEL_NEGOCIO>?source=google-business-profile
<URL_DEL_NEGOCIO>?source=facebook
<URL_DEL_NEGOCIO>?source=instagram
<URL_DEL_NEGOCIO>?source=whatsapp-business
<URL_DEL_NEGOCIO>?source=qr
```

Confirma que la guía abre, que `source` permanece al copiar el enlace y que se incluye en la salida a WhatsApp cuando corresponde.

## 8. Paso 6 — Crear PR (1 minuto)

- Usa un título claro, por ejemplo: `Publicar guía de <NOMBRE_DEL_NEGOCIO>`.
- Escribe un resumen corto de la entrada agregada y los *route shells* generados.
- Indica expresamente que `node scripts/publish-preflight.js` pasó.
- No hagas merge hasta completar la revisión.

## 9. Paso 7 — Merge y entrega (1 minuto)

1. Haz merge únicamente después de que la validación y la revisión estén aprobadas.
2. Guarda la URL principal final.
3. Guarda las cinco URLs con `source`.
4. Envía al dueño el mensaje de entrega con los enlaces correctos.

## 10. Entregables finales al dueño

Entrega:

- URL principal de la guía: `<URL_DEL_NEGOCIO>`
- URL para Google Business Profile: `<URL_DEL_NEGOCIO>?source=google-business-profile`
- URL para Facebook: `<URL_DEL_NEGOCIO>?source=facebook`
- URL para Instagram: `<URL_DEL_NEGOCIO>?source=instagram`
- URL para WhatsApp Business: `<URL_DEL_NEGOCIO>?source=whatsapp-business`
- URL para QR: `<URL_DEL_NEGOCIO>?source=qr`

Instrucción corta para el dueño: **“usa estos links donde ya recibes clientes”**.

## 11. Errores comunes

- Inventar precios, factores o información comercial.
- Cambiar slugs después de publicar.
- Olvidar ejecutar el preflight.
- Publicar con un WhatsApp no confirmado.
- Tratar `/priceguide/` como un directorio público.
- Agregar reseñas, búsqueda, rankings o funciones de directorio.
- Prometer precios exactos en vez de rangos estimados sujetos a confirmación.

## 12. Documentos relacionados

- [`docs/client-intake-template.md`](client-intake-template.md)
- [`docs/client-intake-example-carmona.md`](client-intake-example-carmona.md)
- [`docs/intake-to-businesses-js-guide.md`](intake-to-businesses-js-guide.md)
- [`docs/pre-publish-checklist.md`](pre-publish-checklist.md)
