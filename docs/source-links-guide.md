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

## 5. Enlaces combinados

`source` se puede combinar con `lang`, `service` y `zone`. Separa cada parámetro con `&`:

```text
{baseUrl}?lang=en&source=google-business-profile
{baseUrl}?service={serviceId}&source=facebook
{baseUrl}?service={serviceId}&zone={zoneSlug}&source=qr
{baseUrl}?lang=en&service={serviceId}&zone={zoneSlug}&source=google-business-profile
```

Usa únicamente identificadores y slugs existentes del negocio. No cambies servicios, zonas, rutas ni datos para crear estos enlaces.

## 6. Reglas para nombrar fuentes

- Usa minúsculas.
- Separa palabras con guiones.
- No uses espacios.
- No uses acentos.
- Mantén estables los nombres de las fuentes.
- Usa etiquetas cortas y legibles.

## 7. Qué hace y qué no hace `source`

`source`:

- Aparece en el mensaje de WhatsApp después de generar una estimación.
- Aparece en el resumen copiado.
- Se conserva al usar **Copiar enlace**.

`source` no:

- Es analítica.
- Se almacena.
- Es un dashboard.
- Cuenta visitas.

## 8. Checklist de entrega

Para cada negocio, crea y guarda:

- [ ] URL principal.
- [ ] URL de Google Business Profile.
- [ ] URL de Facebook.
- [ ] URL de Instagram.
- [ ] URL de WhatsApp Business.
- [ ] URL de QR.
- [ ] URL directa (`source=direct`).

## 9. Explicación para el dueño

> “Cada enlace lleva el mismo estimador, pero marca el origen para que cuando alguien te escriba por WhatsApp puedas ver si vino de Google, Facebook, Instagram, WhatsApp Business o QR.”

## 10. Documentos relacionados

- [`docs/publish-business-in-10-minutes.md`](publish-business-in-10-minutes.md)
- [`docs/pre-publish-checklist.md`](pre-publish-checklist.md)
