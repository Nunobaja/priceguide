# Guía interna para preparar el reporte manual de un cliente

> **Uso interno de Precios Locales.** Completa este reporte de forma manual para una sola página individual y revisa cada dato antes de enviarlo al cliente.

## 1. Propósito

Esta guía sirve para preparar una actualización sencilla sobre la página individual de `{businessName}`. El reporte no se genera de forma automática: `{publisherName}` debe completar, revisar y enviar cada apartado para `{clientName}`.

No es un informe de analítica ni un panel de resultados. La página informada corresponde únicamente a un negocio y no forma parte de un listado para buscar, comparar o clasificar negocios.

La página muestra estimaciones y rangos aproximados. No promete un precio final: el importe definitivo depende de los detalles, materiales, zona y condiciones reales del servicio que confirme el negocio.

## 2. Cuándo usar este reporte

Úsalo en cualquiera de estos momentos:

- Después de la primera entrega de la página.
- Después de actualizar datos del negocio.
- Después de actualizar servicios o zonas.
- Después de confirmar correcciones de precios aproximados o rangos.
- Después de entregar al cliente sus enlaces para Google Business Profile, WhatsApp Business o código QR.
- Como seguimiento mensual sencillo y manual, si el cliente lo solicita.

## 3. Marcadores requeridos

Sustituye todos los marcadores antes de enviar el reporte:

- `{businessName}`: nombre público confirmado del negocio.
- `{businessPageUrl}`: URL pública de la página individual, sin parámetros adicionales.
- `{directLinkUrl}`: enlace para compartir directamente. Debe ser `{businessPageUrl}?source=direct-link`.
- `{googleBusinessProfileUrl}`: enlace destinado a Google Business Profile. Debe ser `{businessPageUrl}?source=google-business-profile`.
- `{whatsappBusinessUrl}`: enlace destinado a WhatsApp Business. Debe ser `{businessPageUrl}?source=whatsapp-business`.
- `{qrPhysicalUrl}`: enlace destinado al código QR de un material físico. Debe ser `{businessPageUrl}?source=qr-physical`.
- `{reportDate}`: fecha en la que se prepara y revisa el reporte.
- `{reportPeriod}`: periodo que cubre la actualización manual, por ejemplo, “entrega inicial” o “mayo de 2026”.
- `{publisherName}`: nombre de la persona que preparó el reporte.
- `{clientName}`: nombre de la persona que recibirá y confirmará la información.
- `{manualNotes}`: notas escritas manualmente sobre lo publicado o corregido.
- `{pendingItems}`: datos, materiales o confirmaciones todavía pendientes.
- `{nextActions}`: pasos recomendados después de la entrega.

### Definición de las URL por origen

Usa exactamente estas construcciones:

```text
{directLinkUrl} = {businessPageUrl}?source=direct-link
{googleBusinessProfileUrl} = {businessPageUrl}?source=google-business-profile
{whatsappBusinessUrl} = {businessPageUrl}?source=whatsapp-business
{qrPhysicalUrl} = {businessPageUrl}?source=qr-physical
```

El parámetro `source` solamente marca el origen dentro del mensaje preparado para WhatsApp, el resumen copiado y el enlace copiado. No genera conteos, registros de visitas ni informes automáticos.

## 4. Secciones del reporte

La [plantilla reutilizable](templates/manual-client-report.md) debe conservar estas secciones:

1. **Encabezado:** nombre del negocio, cliente, fecha, periodo y responsable de preparación.
2. **Enlace de la página del negocio:** URL individual principal.
3. **Versiones de enlace entregadas:** enlaces directo, de Google Business Profile, de WhatsApp Business y de QR físico.
4. **Estado de la página:** indicación manual de lo que se publicó, revisó o corrigió.
5. **Servicios incluidos:** lista confirmada de servicios visibles.
6. **Zonas incluidas:** lista confirmada de zonas visibles.
7. **Recordatorio sobre estimaciones y rangos:** explicación breve y segura sobre los precios aproximados.
8. **Notas manuales:** observaciones específicas preparadas por la persona responsable.
9. **Pendientes:** datos o confirmaciones que aún hacen falta.
10. **Siguientes acciones recomendadas:** pasos concretos para el cliente o para Precios Locales.
11. **Solicitud de confirmación al cliente:** petición clara para revisar datos, servicios, zonas, rangos y enlaces.
12. **Pie:** aviso de preparación manual y alcance del reporte.

## 5. Lenguaje seguro para el reporte

Puedes copiar estos bloques sin cambiar su sentido:

> La página muestra rangos aproximados.

> El precio final depende de los detalles del servicio.

> Este reporte fue preparado manualmente.

> No representa métricas automáticas, ranking, reseñas ni resultados garantizados.

También puedes usar esta versión unificada:

> La página muestra una estimación o un rango aproximado para orientar al cliente. El precio final depende de los detalles y condiciones reales del servicio. Este reporte fue preparado manualmente y no presenta resultados garantizados.

No uses afirmaciones de superioridad, posiciones frente a otros negocios, promesas de resultados ni precios finales exactos.

## 6. Versiones de enlace

### Enlace directo

- **Marcador:** `{directLinkUrl}`
- **Formato:** `{businessPageUrl}?source=direct-link`
- **Uso:** compartir la página individual directamente con una persona por mensaje, correo o conversación uno a uno.

### Enlace para Google Business Profile

- **Marcador:** `{googleBusinessProfileUrl}`
- **Formato:** `{businessPageUrl}?source=google-business-profile`
- **Uso:** colocarlo en el perfil o en una publicación aprobada de Google Business Profile del negocio.

### Enlace para WhatsApp Business

- **Marcador:** `{whatsappBusinessUrl}`
- **Formato:** `{businessPageUrl}?source=whatsapp-business`
- **Uso:** colocarlo en el perfil o respuestas guardadas de WhatsApp Business, o compartirlo desde esa aplicación.

### Enlace para QR físico

- **Marcador:** `{qrPhysicalUrl}`
- **Formato:** `{businessPageUrl}?source=qr-physical`
- **Uso:** convertirlo en el código QR de una tarjeta, volante, mostrador u otro material impreso del negocio.

Las cuatro versiones abren la misma página individual. La etiqueta de origen solamente aparece en el mensaje preparado para WhatsApp, en el resumen copiado y al copiar el enlace.

## 7. Notas de actualización manual

Completa estos campos con información confirmada. Si algo no aplica, escribe “No aplica”; no inventes datos.

- **Qué se publicó:** [Describe la página, servicio, zona, texto o enlace entregado.]
- **Qué se corrigió:** [Describe cada corrección confirmada.]
- **Qué datos siguen pendientes:** `{pendingItems}`
- **Qué debe confirmar el cliente:** [Nombre, contacto, servicios, zonas, rangos aproximados, enlaces o materiales.]
- **Qué versiones de enlace se entregaron:** [Indica cuáles de `{directLinkUrl}`, `{googleBusinessProfileUrl}`, `{whatsappBusinessUrl}` y `{qrPhysicalUrl}` se enviaron.]
- **Qué plantillas de texto se compartieron:** [Indica los textos para entrega, Google Business Profile, WhatsApp Business o QR físico que se enviaron.]
- **Notas adicionales preparadas manualmente:** `{manualNotes}`
- **Siguientes acciones:** `{nextActions}`

## 8. Reporte completo listo para copiar

```text
REPORTE MANUAL DE PÁGINA INDIVIDUAL

Negocio: {businessName}
Cliente: {clientName}
Fecha del reporte: {reportDate}
Periodo: {reportPeriod}
Preparado por: {publisherName}

Hola, {clientName}:

Te comparto la actualización manual de la página individual de {businessName}.

ENLACE DE LA PÁGINA
{businessPageUrl}

VERSIONES DE ENLACE ENTREGADAS
- Enlace directo, para compartirlo de persona a persona: {directLinkUrl}
- Enlace para Google Business Profile: {googleBusinessProfileUrl}
- Enlace para WhatsApp Business: {whatsappBusinessUrl}
- Enlace para el código QR de materiales físicos: {qrPhysicalUrl}

Estas versiones abren la misma página. La etiqueta de origen solamente se conserva en el mensaje preparado para WhatsApp, en el resumen copiado y en el enlace copiado.

ESTADO DE LA PÁGINA
[Escribe manualmente qué se publicó, revisó o corrigió.]

SERVICIOS INCLUIDOS
[Escribe los servicios confirmados que aparecen en la página.]

ZONAS INCLUIDAS
[Escribe las zonas confirmadas que aparecen en la página.]

RECORDATORIO SOBRE LA ESTIMACIÓN
La página muestra rangos aproximados. El precio final depende de los detalles del servicio. No se promete un precio final exacto.

NOTAS MANUALES
{manualNotes}

PENDIENTES
{pendingItems}

SIGUIENTES ACCIONES RECOMENDADAS
{nextActions}

CONFIRMACIÓN SOLICITADA
Por favor confirma que el nombre, los datos de contacto, los servicios, las zonas, los rangos aproximados y los enlaces son correctos. Si necesitas una corrección, indícala por escrito antes de volver a compartir los materiales.

Este reporte fue preparado manualmente. No representa mediciones automáticas, clasificaciones, reseñas ni resultados garantizados.
```

## 9. Resúmenes cortos para WhatsApp

### Primera entrega

```text
Hola, {clientName}. Te comparto el reporte manual de la primera entrega de la página de {businessName}: {businessPageUrl}. Incluye los enlaces preparados y los datos que necesitamos confirmar. Fecha: {reportDate}. Pendientes: {pendingItems}.
```

### Actualización terminada

```text
Hola, {clientName}. Ya quedó lista la actualización manual de {businessName} para el periodo {reportPeriod}. Página: {businessPageUrl}. Notas: {manualNotes}. Siguiente paso: {nextActions}.
```

### Confirmación pendiente

```text
Hola, {clientName}. La actualización manual de {businessName} está preparada, pero falta tu confirmación. Página: {businessPageUrl}. Pendientes: {pendingItems}. En cuanto lo confirmes, seguimos con: {nextActions}.
```

## 10. Lista interna antes de enviar

- [ ] Confirmar la URL individual de `{businessName}`.
- [ ] Confirmar que `{businessPageUrl}` no sea `/priceguide/`.
- [ ] Confirmar que `{directLinkUrl}` use `?source=direct-link`.
- [ ] Confirmar que `{googleBusinessProfileUrl}` use `?source=google-business-profile`.
- [ ] Confirmar que `{whatsappBusinessUrl}` use `?source=whatsapp-business`.
- [ ] Confirmar que `{qrPhysicalUrl}` use `?source=qr-physical`.
- [ ] Confirmar el estado actual de WhatsApp del negocio.
- [ ] Confirmar que no se creó un enlace roto de WhatsApp.
- [ ] Confirmar que el lenguaje de servicios, estimaciones y rangos sea prudente.
- [ ] Confirmar que no se prometa un precio final exacto.
- [ ] Confirmar que no haya lenguaje de posiciones, reseñas, comparaciones ni listados de negocios.
- [ ] Confirmar que el reporte no mencione sistemas automáticos de medición, paneles, gestión de clientes, almacenamiento de datos, archivos de navegación, seguimiento de personas ni captura de contactos.
- [ ] Confirmar que `{pendingItems}` identifique claramente cada pendiente.
- [ ] Confirmar que todos los demás marcadores fueron sustituidos antes del envío.

## 11. Documentos relacionados

- [Plantillas de mensajes para entregar la página al cliente](client-delivery-message-copy.md)
- [Entrega imprimible del enlace y código QR](printable-qr-link-delivery.md)
- [Plantillas para materiales físicos con código QR](qr-physical-copy.md)
- [Plantillas para WhatsApp Business](whatsapp-business-copy.md)
- [Plantillas para Google Business Profile](google-business-profile-copy.md)
- [Guía de enlaces por fuente y uso del generador interno](source-links-guide.md)
- [Procedimiento interno para publicar un negocio en 10 minutos](publish-business-in-10-minutes.md)
- [Lista interna antes de publicar un negocio real](pre-publish-checklist.md)
- [Plantilla reutilizable del reporte manual para clientes](templates/manual-client-report.md)
