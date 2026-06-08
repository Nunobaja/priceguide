# Guía interna: enlaces por fuente

> **Uso interno de Precios Locales.** Guía práctica para generar y guardar los enlaces finales de cada negocio.

## 1. Propósito

Cada guía de negocio debe entregarse con varias URLs específicas por fuente. Así, cuando una persona termine una estimación y envíe la solicitud por WhatsApp, el negocio puede saber si llegó desde Google, Facebook, Instagram, WhatsApp Business, un código QR o un enlace directo.

## Generar enlaces automáticamente

Ejecuta el generador interno desde la raíz del proyecto para imprimir los enlaces de todos los negocios sin crear ni modificar archivos:

```sh
node scripts/generate-source-links.js
```

Para imprimir solamente un negocio, agrega su `businessSlug`:

```sh
node scripts/generate-source-links.js carmona-hnos-climas-refrigeracion
```

Para incluir ejemplos opcionales con un contexto de campaña, agrega `--campaign=`. Sin esta opción, la salida existente no cambia:

```sh
node scripts/generate-source-links.js carmona-hnos-climas-refrigeracion --campaign=promo-verano
```

El generador muestra ejemplos de fuente sola, fuente con servicio, fuente con campaña y fuente con servicio y campaña. La campaña no es obligatoria.

## 2. Formato de la URL base

Usa la URL pública final del negocio:

```text
https://nunobaja.github.io/priceguide/{citySlug}/{categorySlug}/{businessSlug}/
```

Guárdala como `{baseUrl}` para construir los demás enlaces.

## 3. Fuentes estándar

Usa estos valores sin modificarlos:

- `google-business-profile`
- `facebook`
- `instagram`
- `whatsapp-business`
- `qr`
- `direct`

## 4. Enlaces por fuente

```text
{baseUrl}?source=google-business-profile
{baseUrl}?source=facebook
{baseUrl}?source=instagram
{baseUrl}?source=whatsapp-business
{baseUrl}?source=qr
{baseUrl}?source=direct
```

## 5. Abrir un servicio desde el enlace

En una página individual de negocio, agrega `service` para abrir el estimador con un servicio ya seleccionado:

```text
{baseUrl}?service=instalacion-de-minisplit
{baseUrl}?service=destape-de-drenaje
```

El valor es el nombre visible del servicio convertido a slug:

- Usa minúsculas.
- Quita acentos.
- Sustituye espacios por guiones.
- Reduce espacios o guiones repetidos a un solo guion.
- No cambies el nombre visible ni los datos del servicio.

Por ejemplo, `Instalación de minisplit` se convierte en `instalacion-de-minisplit`. Los identificadores estables que ya imprime el generador interno continúan siendo compatibles.

Si `service` está vacío, mal formado o no corresponde a un servicio del negocio, la página lo ignora sin mostrar un error ni crear un servicio nuevo. Este parámetro funciona únicamente en páginas individuales; no cambia la vista madre de QA ni crea rutas, búsqueda o directorio.

## 6. Combinar `service` y `source`

`service` no reemplaza ni modifica `source`. Los parámetros pueden aparecer en cualquier orden y se separan con `&`:

```text
{baseUrl}?source=google-business-profile&service=instalacion-de-minisplit
{baseUrl}?service=destape-de-drenaje&source=whatsapp-business
{baseUrl}?service=instalacion-de-minisplit&zone={zoneSlug}&source=qr
{baseUrl}?lang=en&service=instalacion-de-minisplit&source=google-business-profile
```

El servicio se selecciona dentro del mismo estimador y los rangos siguen siendo aproximados. Usa únicamente servicios y zonas existentes del negocio. No cambies servicios, precios, zonas, rutas ni datos para crear estos enlaces.

`service` no es tracking, analítica, ranking, recomendación, búsqueda ni una función de directorio público.


## 7. Contexto manual con `campaign`

En una página individual, `campaign` agrega una etiqueta corta al resumen copiado y al mensaje de WhatsApp:

```text
{baseUrl}?campaign=promo-verano
{baseUrl}?source=google-business-profile&campaign=promo-verano
{baseUrl}?campaign=promo-verano&source=whatsapp-business
{baseUrl}?source=qr-physical&service=limpieza-de-minisplit&campaign=volante-junio
{baseUrl}?service=limpieza-de-minisplit&campaign=volante-junio&source=direct-link
```

Cuando el valor es válido, el texto de entrega incluye una línea como `Campaña: promo-verano`. Es únicamente contexto manual dentro del mensaje o resumen. No se almacena, no cuenta visitas y no cambia servicios, preguntas, precios, rangos ni fórmulas. Tampoco crea analítica, tracking, reporting, dashboard, CRM, base de datos, lead capture ni atribución.

Formato recomendado:

- Usa minúsculas.
- Separa palabras con guiones.
- Mantén la etiqueta corta y descriptiva.
- No uses acentos ni espacios.
- Solo usa letras `a-z`, números, guiones y guiones bajos.
- No excedas 60 caracteres.

Si `campaign` está vacío, excede 60 caracteres o contiene otro tipo de carácter, la página lo ignora sin mostrar errores. Un valor desconocido no crea ni modifica datos del negocio. El parámetro solo se lee en páginas individuales; la vista madre de QA conserva su función interna.

`campaign` funciona junto con `source` y `service` en cualquier orden. Un valor de campaña inválido no impide que la fuente se incluya ni que un servicio válido se seleccione. **Copiar enlace** conserva los parámetros válidos que ya estén en la URL.

## 8. Reglas para nombrar fuentes

- Usa minúsculas.
- Separa palabras con guiones.
- No uses espacios.
- No uses acentos.
- Mantén estables los nombres de las fuentes.
- Usa etiquetas cortas y legibles.

## 9. Qué hace y qué no hace `source`

`source`:

- Aparece en el mensaje de WhatsApp después de generar una estimación.
- Aparece en el resumen copiado.
- Se conserva al usar **Copiar enlace**.

`source` no:

- Es analítica.
- Se almacena.
- Es un dashboard.
- Cuenta visitas.

## 10. Checklist de entrega

Para cada negocio, crea y guarda:

- [ ] URL principal.
- [ ] URL de Google Business Profile.
- [ ] URL de Facebook.
- [ ] URL de Instagram.
- [ ] URL de WhatsApp Business.
- [ ] URL de QR.
- [ ] URL directa (`source=direct`).

## 11. Explicación para el dueño

> “Cada enlace lleva el mismo estimador, pero marca el origen para que cuando alguien te escriba por WhatsApp puedas ver si vino de Google, Facebook, Instagram, WhatsApp Business o QR.”

## 12. Documentos relacionados

- [`docs/publish-business-in-10-minutes.md`](publish-business-in-10-minutes.md)
- [`docs/pre-publish-checklist.md`](pre-publish-checklist.md)
