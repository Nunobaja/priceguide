# Plantilla interna de incorporación manual

> Copia esta ficha para reunir y confirmar la información mínima de una sola página individual de Precios Locales. Sustituye cada marcador con información aprobada. Si una respuesta falta o no está confirmada, escribe **Pendiente** y agrégala a `{pendingItems}`. La página mostrará estimaciones o rangos aproximados; no presentará un precio definitivo.

## Control interno

- **Persona cliente:** `{clientName}`
- **Responsable de publicación:** `{publisherName}`
- **Fecha de incorporación:** `{intakeDate}`
- **Notas internas confirmadas:** `{businessNotes}`

## Datos del negocio

- **Nombre comercial:** `{businessName}`
- **Categoría:** `{businessCategory}`
- **Ciudad:** `{businessCity}`
- **Estado:** `{businessState}`
- **Segmento del negocio:** `{businessSlug}`
- **Segmento de la categoría:** `{categorySlug}`
- **Segmento de la ciudad:** `{citySlug}`

### Revisión manual de segmentos

- [ ] Están escritos en minúsculas.
- [ ] Usan guiones entre palabras.
- [ ] No tienen acentos ni caracteres especiales.
- [ ] Se mantendrán estables si la página ya está publicada.
- [ ] Cualquier cambio solicitado fue verificado antes de aplicarse.

## Contacto

- **Teléfono público autorizado:** `{publicPhone}`
- **¿El número tiene lada y diez dígitos?:** [Sí / Pendiente]
- **Texto de contacto permitido:** [Llamada / WhatsApp confirmado / Pendiente]

> Si no hay teléfono público confirmado, escribe **Pendiente**. No uses un número supuesto ni uno que el cliente no haya autorizado.

## WhatsApp

- **Número:** `{whatsappNumber}`
- **Estado:** `{whatsappStatus}`
- **Opciones válidas del estado:** [Confirmado / Sin confirmar / Ausente]
- **¿El cliente autorizó mostrarlo?:** [Sí / Pendiente / No aplica]
- **¿Se comprobó que recibe mensajes?:** [Sí / Pendiente / No aplica]

> Crea un enlace de WhatsApp solamente cuando el número y su uso estén confirmados. Si está sin confirmar, anótalo como pendiente. Si está ausente y existe teléfono público, utiliza únicamente una indicación de llamada. Si tampoco existe teléfono público, deja la forma de contacto como pendiente.

## Servicios

**Servicios confirmados:**

`{serviceList}`

**Servicios que no deben aparecer:**

[Escribir aquí o indicar “No aplica”]

**Preguntas breves:**

1. ¿Qué servicios ofrece actualmente el negocio?
2. ¿Qué incluye cada servicio?
3. ¿Hay algún servicio que todavía requiera confirmación?

## Zonas

**Colonias, municipios, ciudades o corredores confirmados:**

`{zonesServed}`

**Condiciones por zona, si existen:**

[Escribir aquí o indicar “No aplica”]

**Zonas que no se atienden:**

[Escribir aquí o indicar “No aplica”]

## Rangos aproximados

**Estimaciones confirmadas por servicio o situación:**

`{priceRanges}`

Para cada rango, completar manualmente:

- **Servicio:** [Nombre confirmado]
- **Rango aproximado:** [Importe mínimo aproximado] a [Importe máximo aproximado]
- **Qué incluye:** [Descripción breve]
- **Qué puede modificar el importe:** [Factores confirmados]
- **Escenario mínimo realista:** [Descripción]
- **Escenario máximo realista:** [Descripción]
- **Estado:** [Confirmado / Pendiente]

> Solicita cifras aproximadas, no inventes importes y no obligues al cliente a fijar un precio definitivo. Todo rango sin confirmar debe quedar en pendientes.

## Preguntas de estimación

**Preguntas confirmadas para los servicios de este negocio:**

`{serviceQuestions}`

Usa preguntas específicas, breves y fáciles de responder. Deben explicar qué puede mover el rango aproximado, sin aparentar que producen un importe definitivo.

- **Tipo de servicio requerido:** [Pregunta y opciones]
- **Cantidad, tamaño o alcance:** [Pregunta y opciones]
- **Estado o urgencia del problema:** [Pregunta y opciones]
- **Tipo de inmueble o espacio:** [Pregunta y opciones]
- **Zona del servicio:** [Pregunta y opciones]
- **Otro factor confirmado:** [Pregunta y opciones / No aplica]

## Pendientes

`{pendingItems}`

Para cada pendiente, indicar:

- **Dato:** [Información faltante]
- **Responsable de confirmar:** [Cliente / responsable de publicación]
- **Fecha esperada:** [AAAA-MM-DD / Por definir]
- **Acción mientras está pendiente:** [No publicar / conservar texto actual / no preparar enlace de contacto]

> Ningún espacio debe quedar vacío. Escribe **Pendiente** o **No aplica**, según corresponda.

## Confirmación del cliente

```text
Hola, {clientName}. Por favor revisa y confirma la información para la página individual de {businessName}:

- Categoría: {businessCategory}
- Ubicación: {businessCity}, {businessState}
- Servicios: {serviceList}
- Zonas: {zonesServed}
- Teléfono público: {publicPhone}
- Estado de WhatsApp: {whatsappStatus}
- Número de WhatsApp, solo si está confirmado: {whatsappNumber}
- Rangos aproximados: {priceRanges}
- Preguntas de estimación: {serviceQuestions}
- Notas del negocio: {businessNotes}
- Correcciones o datos pendientes: {pendingItems}

Los importes se mostrarán como estimaciones o rangos aproximados y pueden cambiar según los detalles del servicio. Responde “Confirmo” si la información es correcta o indícanos qué debemos corregir.

Preparó: {publisherName}
Fecha: {intakeDate}
Referencia interna de la página: {citySlug}/{categorySlug}/{businessSlug}
```

### Registro de respuesta

- **Respuesta del cliente:** [Confirmado / Correcciones solicitadas / Pendiente]
- **Correcciones solicitadas:** `{pendingItems}`
- **Fecha de respuesta:** [AAAA-MM-DD / Pendiente]
- **Revisión realizada por:** `{publisherName}`
