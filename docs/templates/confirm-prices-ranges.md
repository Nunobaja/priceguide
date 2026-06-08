# Plantilla interna para confirmar precios y rangos aproximados

> Copia y completa esta plantilla manualmente para una sola página individual. Usa únicamente datos confirmados por la persona cliente. Todo dato sin respuesta debe marcarse como **Pendiente**. Los importes son estimaciones o rangos aproximados; pueden cambiar según los detalles y condiciones del servicio.

## Datos del negocio

- **Nombre comercial:** `{businessName}`
- **Persona cliente:** `{clientName}`
- **Categoría:** `{businessCategory}`
- **Ciudad:** `{businessCity}`
- **Estado:** `{businessState}`
- **Servicios por confirmar:** `{serviceList}`
- **Responsable de publicación:** `{publisherName}`
- **Fecha de confirmación:** `{confirmationDate}`

## Rango por servicio

**Resumen de rangos aproximados:** `{priceRanges}`

Duplica la tabla para cada servicio. Si falta un dato, escribe **Pendiente**.

| Dato | Respuesta |
| --- | --- |
| Servicio | [Nombre del servicio / Pendiente] |
| Rango mínimo aproximado | `{rangeLow}` |
| Rango máximo aproximado | `{rangeHigh}` |
| Unidad | `{rangeUnit}` |
| Notas del rango | `{rangeNotes}` |
| Estado | [Confirmado / Pendiente / Necesita corrección] |

> No inventes importes ni conviertas un servicio variable en un precio fijo. Confirma un mínimo y un máximo realistas.

## Qué afecta el precio

`{whatAffectsPrice}`

Confirmar para cada servicio:

- [ ] Tamaño, cantidad o alcance.
- [ ] Materiales, piezas o equipo.
- [ ] Urgencia, daños o estado actual.
- [ ] Acceso, altura o dificultad.
- [ ] Zona, distancia o traslado.
- [ ] Otro factor confirmado: [Escribir / Pendiente / No aplica].

## Qué no está incluido

`{notIncluded}`

- **Materiales o piezas no incluidos:** [Escribir / Pendiente / No aplica]
- **Trabajos adicionales no incluidos:** [Escribir / Pendiente / No aplica]
- **Traslados, permisos o equipo especial no incluidos:** [Escribir / Pendiente / No aplica]
- **Otra exclusión confirmada:** [Escribir / Pendiente / No aplica]

## Preguntas de estimación

`{serviceQuestions}`

1. ¿Qué detalles necesita conocer el negocio antes de orientar un rango aproximado?
2. ¿Qué caso representa el mínimo aproximado?
3. ¿Qué caso representa el máximo aproximado?
4. ¿Qué haría que el servicio costara más?
5. ¿Qué requiere revisión o inspección antes de conocer el importe real?

**Respuestas confirmadas:**

[Escribir aquí / Pendiente]

## Zonas

- **Zonas atendidas:** `{zonesServed}`
- **Zonas con traslado o condición distinta:** [Escribir / Pendiente / No aplica]
- **Zonas no atendidas:** [Escribir / Pendiente / No aplica]
- **¿La ubicación modifica el rango?:** [Sí, explicar / No / Pendiente]

## Pendientes

`{pendingItems}`

Para cada pendiente:

- **Dato o servicio:** [Escribir]
- **Qué falta confirmar:** [Escribir]
- **Quién confirma:** [`{clientName}` / `{publisherName}`]
- **Fecha esperada:** [AAAA-MM-DD / Pendiente]
- **Acción:** [No publicar / conservar información actual / solicitar corrección]

> No dejes espacios vacíos. Usa **Pendiente** cuando no exista una respuesta confirmada y **No aplica** cuando el punto no corresponda.

## Confirmación del cliente

```text
Hola, {clientName}. Por favor revisa la información de rangos aproximados para la página individual de {businessName}:

- Categoría: {businessCategory}
- Ubicación: {businessCity}, {businessState}
- Servicios: {serviceList}
- Rangos aproximados: {priceRanges}
- Mínimo aproximado: {rangeLow}
- Máximo aproximado: {rangeHigh}
- Unidad: {rangeUnit}
- Notas: {rangeNotes}
- Qué afecta el precio: {whatAffectsPrice}
- Qué no está incluido: {notIncluded}
- Preguntas necesarias para estimar: {serviceQuestions}
- Zonas: {zonesServed}
- Pendientes o correcciones: {pendingItems}

Los importes son estimaciones o rangos aproximados. El costo real depende de los detalles, la revisión y las condiciones del servicio.

Responde “Confirmo” si apruebas los servicios, rangos, unidades, factores, conceptos no incluidos y zonas. Si algo debe corregirse, indica el servicio y el dato correspondiente; si todavía no tienes la respuesta, indícalo como Pendiente.

Preparó: {publisherName}
Fecha de confirmación: {confirmationDate}
```

### Registro manual

- **Respuesta de la persona cliente:** [Confirmado / Necesita corrección / Pendiente]
- **Correcciones:** `{pendingItems}`
- **Fecha:** `{confirmationDate}`
- **Revisó:** `{publisherName}`
