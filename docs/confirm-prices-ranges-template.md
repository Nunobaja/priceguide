# Guía interna para confirmar precios y rangos aproximados

> **Uso interno y manual de Precios Locales.** Esta guía sirve para confirmar con una persona cliente los servicios, rangos aproximados y condiciones de una sola página individual antes de publicarla o actualizarla. La página comunica estimaciones; no promete importes definitivos.

## 1. Propósito

Esta guía ayuda a revisar, ordenar y confirmar rangos aproximados antes de publicar o actualizar la página individual de `{businessName}`. La revisión se realiza de manera manual entre `{publisherName}` y `{clientName}`; no se envía información automáticamente ni sustituye una conversación con el negocio.

Este flujo no es un formulario abierto al público, un sistema de gestión comercial, un repositorio de datos de clientes, un medio para recopilar prospectos, un catálogo de negocios, un mercado de servicios, una clasificación, un sistema de opiniones ni un motor que produzca presupuestos. Se usa únicamente para preparar una página individual con información confirmada.

Los importes publicados deben presentarse como **estimación**, **rango aproximado** o **precio aproximado**. El costo real puede cambiar después de conocer medidas, materiales, ubicación, urgencia, acceso, estado del equipo, daños u otras condiciones del servicio. Nunca se debe presentar el rango como importe definitivo.

## 2. Cuándo usarla

Usa esta guía:

- Antes de publicar por primera vez una página individual.
- Antes de actualizar rangos que ya aparecen en una página.
- Cuando la persona cliente proporciona precios vagos o incompletos.
- Cuando los importes parecen demasiado exactos para un servicio variable.
- Cuando uno o más servicios no tienen rango.
- Cuando las condiciones del trabajo pueden modificar el precio.
- Cuando la zona, los traslados o los materiales cambian el precio aproximado.
- Cuando hace falta distinguir lo incluido de lo que se cobra por separado.

Si falta una respuesta, escribe **Pendiente**. No completes datos por intuición ni publiques una cifra sin confirmación.

## 3. Marcadores obligatorios

Usa los siguientes marcadores sin cambiar su escritura:

| Marcador | Información que debe contener |
| --- | --- |
| `{businessName}` | Nombre comercial confirmado del negocio. |
| `{clientName}` | Nombre de la persona cliente que revisará la información. |
| `{businessCategory}` | Categoría principal del negocio. |
| `{businessCity}` | Ciudad principal donde presta el servicio. |
| `{businessState}` | Estado correspondiente a la ubicación principal. |
| `{serviceList}` | Lista de servicios que deben revisarse. |
| `{priceRanges}` | Resumen de rangos aproximados por servicio. |
| `{rangeLow}` | Límite inferior aproximado y realista de un servicio. |
| `{rangeHigh}` | Límite superior aproximado y realista de un servicio. |
| `{rangeUnit}` | Unidad del rango, por ejemplo por visita, equipo, metro, hora o servicio. |
| `{rangeNotes}` | Aclaraciones sobre alcance, casos habituales o condiciones del rango. |
| `{whatAffectsPrice}` | Factores confirmados que pueden subir o bajar el precio aproximado. |
| `{notIncluded}` | Materiales, trabajos, permisos, traslados u otros conceptos no incluidos. |
| `{serviceQuestions}` | Preguntas necesarias para orientar la estimación de cada servicio. |
| `{zonesServed}` | Colonias, municipios, ciudades o zonas atendidas y sus condiciones. |
| `{pendingItems}` | Datos, cifras o correcciones que todavía no están confirmados. |
| `{publisherName}` | Persona responsable de preparar y revisar la página. |
| `{confirmationDate}` | Fecha en que la persona cliente confirma o corrige la información. |

## 4. Mensajes de confirmación para la persona cliente

### WhatsApp breve

```text
Hola, {clientName}. Soy {publisherName}. Antes de publicar o actualizar la página individual de {businessName}, ¿me ayudas a confirmar los rangos aproximados de estos servicios?

Servicios: {serviceList}
Rangos aproximados: {priceRanges}

Estos importes son una estimación y no un precio definitivo. Por favor indícame si el mínimo y máximo son realistas, qué puede cambiar el precio y qué no está incluido. Si algo falta, lo dejamos como Pendiente.

Zonas consideradas: {zonesServed}
Pendientes actuales: {pendingItems}
Fecha de revisión: {confirmationDate}
```

### WhatsApp detallado

```text
Hola, {clientName}. Soy {publisherName}. Estamos revisando la página individual de {businessName}, de la categoría {businessCategory}, en {businessCity}, {businessState}.

Antes de publicar o actualizar, necesitamos confirmar manualmente:

1. Servicios: {serviceList}
2. Rangos aproximados: {priceRanges}
3. Mínimo aproximado: {rangeLow}
4. Máximo aproximado: {rangeHigh}
5. Unidad: {rangeUnit}
6. Notas del rango: {rangeNotes}
7. Qué puede cambiar el precio: {whatAffectsPrice}
8. Qué no está incluido: {notIncluded}
9. Preguntas necesarias para estimar: {serviceQuestions}
10. Zonas atendidas y condiciones: {zonesServed}

La página mostrará estimaciones o precios aproximados. El importe real dependerá de los detalles y condiciones de cada servicio. Por favor confirma si los rangos son realistas, qué situaciones aumentan el costo y qué conceptos se cobran por separado.

Si algún dato todavía no está confirmado, indícalo para registrarlo en {pendingItems}. Fecha de revisión: {confirmationDate}.
```

### Correo

**Asunto:** Confirmación de rangos aproximados de {businessName}

```text
Hola, {clientName}:

Soy {publisherName}. Antes de publicar o actualizar la página individual de {businessName}, necesitamos tu confirmación manual de los servicios y rangos aproximados.

Datos de referencia:
- Categoría: {businessCategory}
- Ubicación: {businessCity}, {businessState}
- Servicios: {serviceList}
- Rangos aproximados: {priceRanges}
- Límite inferior aproximado: {rangeLow}
- Límite superior aproximado: {rangeHigh}
- Unidad: {rangeUnit}
- Notas: {rangeNotes}
- Factores que modifican el precio: {whatAffectsPrice}
- Conceptos no incluidos: {notIncluded}
- Preguntas necesarias para estimar: {serviceQuestions}
- Zonas atendidas: {zonesServed}
- Datos pendientes: {pendingItems}

Estos importes se presentarán como estimaciones o rangos aproximados. No representan un precio definitivo, ya que el costo real depende de los detalles, materiales, ubicación y condiciones del servicio.

Por favor responde confirmando:
1. Si cada servicio es correcto.
2. Si el mínimo y máximo son realistas.
3. Qué factores pueden cambiar el precio.
4. Qué conceptos no están incluidos.
5. Si la unidad y las zonas son correctas.
6. Qué dato debe quedar como Pendiente o corregirse.

Gracias,
{publisherName}
Fecha de revisión: {confirmationDate}
```

### Recordatorio de seguimiento

```text
Hola, {clientName}. Te recuerdo que está pendiente confirmar los rangos aproximados de {businessName} antes de publicar o actualizar su página individual.

Por favor revisa {priceRanges} y confírmanos si los mínimos, máximos y unidades son realistas; qué cambia el precio; qué no está incluido; y si {zonesServed} tiene alguna condición especial. Son estimaciones, no importes definitivos.

Pendientes: {pendingItems}
Preparó: {publisherName}
Fecha de seguimiento: {confirmationDate}
```

## 5. Tabla de confirmación de precios y rangos

Duplica una fila por cada servicio. Si una cifra o condición no está confirmada, escribe **Pendiente** y usa el estado correspondiente.

| Servicio | Rango mínimo aproximado | Rango máximo aproximado | Unidad | Qué afecta el precio | Qué no está incluido | Notas | Estado |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [Servicio] | `{rangeLow}` | `{rangeHigh}` | `{rangeUnit}` | `{whatAffectsPrice}` | `{notIncluded}` | `{rangeNotes}` | Confirmado / Pendiente / Necesita corrección |
| [Servicio] | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |

**Resumen para copiar:** `{priceRanges}`

## 6. Reglas para rangos seguros

- No inventes precios, condiciones, materiales ni alcances.
- No uses lenguaje que presente una cifra como importe definitivo.
- No obligues a usar un solo precio fijo cuando el servicio varía.
- Usa rangos cuando cambien las condiciones, el alcance o los insumos.
- Marca cualquier número incierto como **Pendiente**.
- Solicita un mínimo y un máximo realistas, no extremos improbables.
- Confirma qué está incluido y qué no está incluido.
- Pregunta qué haría que el trabajo costara más.
- Confirma si la zona, materiales, urgencia, tamaño, daños, equipo o acceso cambian el precio.
- Usa expresiones como **estimación**, **rango aproximado** o **precio aproximado**.
- Si el negocio necesita revisar el sitio o equipo, indícalo en `{rangeNotes}`.
- Si no existe un máximo útil sin inspección, registra el punto como **Pendiente** y explica qué información falta.

## 7. Preguntas de confirmación por servicio

### Aire acondicionado

**Cinco preguntas**

1. ¿El rango cambia entre mantenimiento, reparación, instalación y reemplazo?
2. ¿Qué capacidad, tipo, marca o cantidad de equipos cubre el rango?
3. ¿El mínimo considera acceso sencillo y un equipo en condiciones habituales?
4. ¿El máximo considera materiales, refacciones o maniobras especiales, o se cobran por separado?
5. ¿La urgencia, altura, distancia o diagnóstico previo cambia el precio aproximado?

**Tres factores que pueden afectar el precio**

- Capacidad, tipo y cantidad de equipos.
- Estado del equipo, falla y refacciones necesarias.
- Altura, acceso, distancia y urgencia.

**Tres conceptos que podrían no estar incluidos**

- Refacciones o equipo nuevo.
- Obra eléctrica, albañilería o adecuaciones adicionales.
- Maniobras especiales, retiro de equipo o traslado fuera de zona.

**Recordatorio seguro:** el importe real depende del diagnóstico, acceso, capacidad del equipo y condiciones del servicio; comunica únicamente una estimación o rango aproximado.

### Plomería

**Cinco preguntas**

1. ¿El rango corresponde a visita, diagnóstico, reparación o sustitución?
2. ¿Cambia según el tipo de fuga, tubería, mueble o instalación?
3. ¿El mínimo supone acceso visible y una reparación sencilla?
4. ¿El máximo incluye materiales y apertura de muros o pisos?
5. ¿La urgencia, ubicación de la fuga o necesidad de equipo especializado modifica el rango?

**Tres factores que pueden afectar el precio**

- Ubicación, profundidad y accesibilidad de la falla.
- Tipo de tubería, pieza y materiales requeridos.
- Urgencia, daño existente y equipo necesario.

**Tres conceptos que podrían no estar incluidos**

- Materiales, muebles o piezas especiales.
- Reparación de acabados, muros, pisos o pintura.
- Desazolve especializado o trabajos fuera de la zona habitual.

**Recordatorio seguro:** el precio aproximado depende de localizar la causa, revisar el acceso y confirmar materiales y alcance.

### Electricidad

**Cinco preguntas**

1. ¿El rango cubre revisión, reparación, instalación o reemplazo?
2. ¿Cuántos puntos, circuitos, equipos o metros considera?
3. ¿El mínimo supone una instalación accesible y sin daños ocultos?
4. ¿Incluye cable, protecciones, tablero, canalización o accesorios?
5. ¿La carga, altura, urgencia o estado de la instalación modifica el rango aproximado?

**Tres factores que pueden afectar el precio**

- Cantidad de puntos, distancia y capacidad requerida.
- Estado del cableado, tablero y protecciones.
- Altura, acceso y necesidad de equipo especial.

**Tres conceptos que podrían no estar incluidos**

- Material eléctrico, luminarias o equipos.
- Obra civil, resanes o pintura.
- Trámites, dictámenes o correcciones adicionales no identificadas.

**Recordatorio seguro:** el importe real depende de la revisión de la instalación, la carga, los materiales y las condiciones de seguridad.

### Jardinería

**Cinco preguntas**

1. ¿El rango se calcula por visita, hora, metro cuadrado, jornada o servicio?
2. ¿Qué tamaño y estado del jardín cubren el mínimo y el máximo?
3. ¿Incluye poda, corte, limpieza y retiro de residuos?
4. ¿Cambian el rango la altura de árboles, maleza, riego o acceso?
5. ¿Las plantas, tierra, fertilizante, traslado o maquinaria se cobran por separado?

**Tres factores que pueden afectar el precio**

- Superficie, cantidad de plantas y estado del área.
- Altura, acceso y volumen de residuos.
- Herramientas, maquinaria, materiales y frecuencia.

**Tres conceptos que podrían no estar incluidos**

- Plantas, tierra, fertilizantes o sistemas de riego.
- Retiro extraordinario de ramas, troncos o residuos.
- Poda de alto riesgo o renta de maquinaria especial.

**Recordatorio seguro:** el precio aproximado depende de la superficie, el estado del jardín, el acceso y el trabajo solicitado.

### Control de plagas

**Cinco preguntas**

1. ¿El rango cambia según el tipo de plaga y nivel de infestación?
2. ¿Qué tamaño y tipo de inmueble cubren el mínimo y el máximo?
3. ¿Cuántas aplicaciones, visitas o áreas incluye el rango?
4. ¿El tratamiento interior, exterior, especializado o preventivo tiene condiciones distintas?
5. ¿La ubicación, urgencia, seguimiento o preparación del lugar modifica el precio?

**Tres factores que pueden afectar el precio**

- Tipo de plaga, nivel de infestación y áreas afectadas.
- Tamaño, uso y condiciones del inmueble.
- Número de visitas, tratamiento y dificultad de acceso.

**Tres conceptos que podrían no estar incluidos**

- Visitas adicionales o tratamientos de seguimiento.
- Reparaciones, sellado de accesos o retiro de objetos.
- Tratamientos especializados no confirmados en la revisión inicial.

**Recordatorio seguro:** el importe real depende de identificar la plaga, revisar el inmueble y confirmar el tratamiento y número de visitas.

## 8. Lista de señales de alerta

Detén la publicación y solicita aclaración si:

- [ ] La persona cliente proporciona un solo precio fijo para todos los servicios y condiciones.
- [ ] La persona cliente afirma que el importe nunca cambiará.
- [ ] La persona cliente quiere publicar una cifra exacta como importe definitivo.
- [ ] Los precios dependen mucho de una inspección, pero no se quieren explicar las condiciones.
- [ ] Los materiales o las zonas todavía no están confirmados.
- [ ] Se presenta una promoción como si fuera el precio principal permanente.
- [ ] Se quiere afirmar atención de emergencia o disponibilidad continua sin confirmación.
- [ ] Se quieren afirmar posiciones destacadas, opiniones o resultados asegurados.

## 9. Lista interna de aprobación

- [ ] Cada servicio tiene rango mínimo y máximo, o está marcado como **Pendiente**.
- [ ] La unidad de cada rango está clara.
- [ ] Los factores que afectan el precio están documentados.
- [ ] Los conceptos no incluidos están documentados.
- [ ] Las zonas y sus posibles condiciones están consideradas.
- [ ] No se inventó ningún precio.
- [ ] No se promete un importe exacto y definitivo.
- [ ] No se usa lenguaje que asegure un presupuesto invariable.
- [ ] No se usa lenguaje de posiciones, opiniones o catálogo de negocios.
- [ ] Los puntos pendientes están claramente marcados.
- [ ] La persona cliente aprobó los rangos.
- [ ] `{publisherName}` registró la aprobación con fecha `{confirmationDate}`.

## 10. Bloque de aprobación de la persona cliente

```text
Hola, {clientName}. Antes de publicar o actualizar la página individual de {businessName}, por favor confirma que esta información es correcta:

- Categoría: {businessCategory}
- Ubicación: {businessCity}, {businessState}
- Servicios: {serviceList}
- Rangos aproximados: {priceRanges}
- Mínimo aproximado: {rangeLow}
- Máximo aproximado: {rangeHigh}
- Unidad: {rangeUnit}
- Notas del rango: {rangeNotes}
- Qué afecta el precio: {whatAffectsPrice}
- Qué no está incluido: {notIncluded}
- Preguntas para orientar la estimación: {serviceQuestions}
- Zonas atendidas y condiciones: {zonesServed}
- Correcciones o datos pendientes: {pendingItems}

Estos datos se mostrarán como estimaciones o rangos aproximados. El importe real puede cambiar según los detalles, la inspección y las condiciones del servicio.

Responde “Confirmo” si apruebas los servicios, rangos, unidades, factores, conceptos no incluidos y zonas. Si hay una corrección, indica el servicio y el dato que debemos cambiar o dejar como Pendiente.

Preparó: {publisherName}
Fecha de confirmación: {confirmationDate}
```

### Registro interno de aprobación

- **Respuesta:** [Confirmado / Necesita corrección / Pendiente]
- **Nombre de la persona cliente:** `{clientName}`
- **Negocio:** `{businessName}`
- **Correcciones solicitadas:** `{pendingItems}`
- **Responsable de publicación:** `{publisherName}`
- **Fecha:** `{confirmationDate}`

## 11. Documentos relacionados

- [Guía interna de incorporación manual](onboarding-template.md).
- [Plantilla ampliada de información de la persona cliente](client-intake-template.md).
- [Guía para llevar la información confirmada a `businesses.js`](intake-to-businesses-js-guide.md).
- [Lista interna antes de publicar](pre-publish-checklist.md).
- [Procedimiento interno de publicación](publish-business-in-10-minutes.md).
- [Avisos de precio por categoría dentro de la plantilla ampliada](client-intake-template.md#5-textos-de-la-página).
- [Copias de servicios por categoría para el Perfil de Negocio de Google](google-business-profile-copy.md#5-plantillas-de-descripción-de-servicios-en-gbp).
- [Copias de servicios por categoría para WhatsApp para negocios](whatsapp-business-copy.md#8-ejemplos-por-servicio).
- [Mensajes de entrega de la página a la persona cliente](client-delivery-message-copy.md).
- [Guía del reporte manual](manual-report-template.md).
- [Plantilla reutilizable para confirmar rangos](templates/confirm-prices-ranges.md).
