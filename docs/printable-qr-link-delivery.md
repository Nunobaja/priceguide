# Entrega imprimible de enlace y código QR

> **Uso interno de Precios Locales.** Esta versión sirve para preparar y entregar una hoja impresa al dueño de un negocio. Debe apuntar únicamente a la página individual aprobada para ese negocio.

## 1. Propósito

Esta entrega ayuda a dar al dueño una hoja sencilla de una página con el enlace de su guía individual de Precios Locales, un código QR y recomendaciones prácticas para compartirla con sus clientes.

La página enlazada es una guía de precios aproximados de un solo negocio; no es un listado para buscar o comparar negocios. Permite que el cliente consulte una estimación o un rango aproximado antes de comunicarse con el negocio.

La guía no confirma un precio exacto. El precio final depende de los detalles del servicio, la zona, los materiales, la inspección y las condiciones reales del trabajo.

## 2. Marcadores requeridos

Reemplaza todos los marcadores antes de imprimir:

- `{businessName}`: nombre aprobado del negocio que recibirá la hoja.
- `{businessPageUrl}`: URL final de la página individual del negocio en Precios Locales, sin parámetros de fuente.
- `{qrPhysicalUrl}`: URL que se codificará en el QR. Debe ser `{businessPageUrl}?source=qr-physical`.
- `{directLinkUrl}`: URL que se mostrará para copiar, guardar o compartir. Debe ser `{businessPageUrl}?source=direct-link`.
- `{generatedQrImage}`: imagen del código QR generada a partir de `{qrPhysicalUrl}`.
- `{publisherName}`: nombre de la persona que preparó o entregó la hoja.
- `{deliveryDate}`: fecha de preparación o entrega al cliente.

## 3. Reglas de URL

- La página del cliente debe ser la página individual del negocio; nunca uses `/priceguide/` como destino por sí solo.
- Define la URL del QR así: `{qrPhysicalUrl}` = `{businessPageUrl}?source=qr-physical`.
- Define el enlace directo así: `{directLinkUrl}` = `{businessPageUrl}?source=direct-link`.
- No imprimas la hoja hasta confirmar que ambas URL abren la página individual correcta.
- Los parámetros de fuente solamente marcan el origen dentro del mensaje preparado para WhatsApp, el resumen copiado y el enlace copiado. No registran visitas ni crean informes de rendimiento.
- Si WhatsApp falta o no está confirmado, no generes ni insinúes un enlace de WhatsApp. Entrega únicamente las URL aprobadas de la página individual.

## 4. Texto imprimible de una página

Copia este contenido en la plantilla imprimible y reemplaza cada marcador.

### Título

**Guía de precios aproximados**

### Nombre del negocio

**{businessName}**

### Explicación breve

Consulta esta guía para obtener una estimación inicial o un rango aproximado según el servicio, la zona y los detalles seleccionados. Es una referencia práctica de la página individual de {businessName}; no confirma el precio final del trabajo.

### Área del código QR

**Escanea para abrir la guía**

`{generatedQrImage}`

URL incluida en el código QR:

`{qrPhysicalUrl}`

### Área del enlace directo

**También puedes abrir o compartir este enlace:**

`{directLinkUrl}`

### Cómo usar este enlace

- Coloca el código QR cerca del mostrador o la recepción, si aplica.
- Agrega el enlace a WhatsApp Business cuando el número y el uso de WhatsApp estén confirmados.
- Usa el enlace en respuestas a clientes que soliciten un precio aproximado.
- Incluye el código QR en materiales impresos del negocio.
- Pide al cliente los detalles del servicio antes de confirmar un precio final.

### Recordatorio de estimación

Esta página es una guía. Muestra una estimación o un rango aproximado para orientar la conversación. El precio final depende de los detalles del servicio, la zona, los materiales, la inspección y las condiciones reales del trabajo. No prometas un precio exacto con base únicamente en la guía.

### Pie interno

- Preparado por: `{publisherName}`
- Fecha de entrega: `{deliveryDate}`

## 5. Instrucciones de uso para el cliente

- Coloca el QR cerca del mostrador o la recepción cuando sea útil y seguro hacerlo.
- Agrega `{directLinkUrl}` a WhatsApp Business solo si el canal y el número están confirmados.
- Usa el enlace en respuestas cuando una persona pregunte por una estimación, un rango aproximado o un precio aproximado.
- Usa el QR en tarjetas, volantes, recibos u otros materiales impresos aprobados.
- Antes de confirmar el precio final, pide los detalles necesarios del servicio, la ubicación y las condiciones del trabajo.
- No prometas un precio final exacto basándote solamente en la guía.

## 6. Lista interna de entrega

- [ ] Confirmar la URL individual del negocio.
- [ ] Confirmar que `{qrPhysicalUrl}` incluye `source=qr-physical`.
- [ ] Confirmar que `{directLinkUrl}` incluye `source=direct-link`.
- [ ] Generar el código QR a partir de `{qrPhysicalUrl}`.
- [ ] Probar el escaneo del QR en un teléfono.
- [ ] Probar el enlace directo en un teléfono.
- [ ] Confirmar el estado de WhatsApp.
- [ ] Confirmar que no se haya creado un enlace de WhatsApp roto.
- [ ] Confirmar que la página se presenta como la guía individual de un negocio y no como un sitio para buscar negocios.
- [ ] Confirmar que el texto no promete precios finales exactos.
- [ ] Confirmar que la versión impresa cabe en una sola página.

## 7. Documentos relacionados

- [Plantillas internas para copias físicas con código QR](qr-physical-copy.md)
- [Plantillas internas para WhatsApp Business](whatsapp-business-copy.md)
- [Plantillas internas para Google Business Profile](google-business-profile-copy.md)
- [Guía interna de enlaces por fuente y generador](source-links-guide.md)
- [Procedimiento interno para publicar un negocio en 10 minutos](publish-business-in-10-minutes.md)
- [Lista interna antes de publicar un negocio real](pre-publish-checklist.md)
