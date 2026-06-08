# Guía interna de incorporación manual de clientes

## 1. Propósito

Esta guía ayuda al equipo de publicación a reunir la información mínima necesaria para publicar o actualizar una sola página individual de precios guía de Precios Locales para un negocio de servicios para el hogar en México.

La incorporación se realiza de forma interna y manual entre la persona responsable de publicar y el cliente. No es un formulario abierto al público ni un sistema de gestión de clientes, almacenamiento de registros, captación de prospectos, catálogo público de negocios, mercado de proveedores o sistema de posiciones. Su único fin es preparar una página individual con información confirmada.

La página presenta una **estimación**, un **rango aproximado** o un **precio aproximado** para orientar al cliente. El importe real depende de los detalles que confirme el negocio y no debe presentarse como un precio definitivo.

Para copiar y llenar la ficha, usa la [plantilla reutilizable de incorporación](templates/client-onboarding-intake.md).

## 2. Datos mínimos requeridos

Reúne únicamente estos datos para la página individual:

- Nombre del negocio.
- Categoría.
- Ciudad y estado.
- Teléfono público.
- Número de WhatsApp, solamente si está confirmado.
- Estado de WhatsApp: **confirmado**, **sin confirmar** o **ausente**.
- Servicios ofrecidos.
- Zonas atendidas.
- Rangos aproximados de precios.
- Preguntas básicas que ayuden a preparar una estimación.
- Notas del negocio o datos pendientes.

Si una respuesta no está disponible o no ha sido aprobada por el cliente, anótala en pendientes. No completes datos por suposición.

## 3. Marcadores obligatorios

Usa los siguientes marcadores sin cambiar su escritura:

| Marcador | Uso manual |
| --- | --- |
| `{businessName}` | Nombre comercial confirmado que aparecerá en la página. |
| `{businessCategory}` | Categoría principal del servicio para el hogar. |
| `{businessCity}` | Ciudad principal confirmada. |
| `{businessState}` | Estado de México confirmado. |
| `{businessSlug}` | Segmento estable que identifica al negocio en la dirección de la página. |
| `{categorySlug}` | Segmento estable de la categoría en la dirección de la página. |
| `{citySlug}` | Segmento estable de la ciudad en la dirección de la página. |
| `{publicPhone}` | Teléfono autorizado para mostrarse públicamente. |
| `{whatsappNumber}` | Número que recibe WhatsApp; se usa solamente cuando está confirmado. |
| `{whatsappStatus}` | Estado: confirmado, sin confirmar o ausente. |
| `{serviceList}` | Lista breve de servicios confirmados. |
| `{zonesServed}` | Colonias, municipios, ciudades o zonas confirmadas. |
| `{priceRanges}` | Rangos aproximados confirmados por servicio o situación. |
| `{serviceQuestions}` | Preguntas simples que orientan la estimación. |
| `{businessNotes}` | Aclaraciones internas y datos relevantes confirmados. |
| `{pendingItems}` | Información faltante, dudosa o pendiente de aprobación. |
| `{publisherName}` | Persona responsable de preparar o actualizar la página. |
| `{intakeDate}` | Fecha de recepción o revisión de los datos. |
| `{clientName}` | Nombre de la persona cliente que confirma la información. |

## 4. Mensajes para solicitar la información

### WhatsApp breve

```text
Hola, {clientName}. Soy {publisherName}. Para preparar o actualizar la página individual de {businessName} en Precios Locales, ¿me compartes por favor la categoría, ciudad y estado, teléfono público, si ese u otro número recibe WhatsApp, servicios, zonas que atienden, rangos aproximados y las preguntas básicas que hacen para estimar cada servicio? La página mostrará orientación aproximada, no un precio definitivo. Si algo falta por confirmar, lo dejamos como pendiente. Gracias.
```

### WhatsApp detallado

```text
Hola, {clientName}. Soy {publisherName}. Estamos reuniendo la información mínima para preparar o actualizar una sola página individual de {businessName} en Precios Locales.

Por favor compárteme:
1. Nombre comercial, categoría, ciudad y estado.
2. Teléfono autorizado para mostrarse.
3. Número de WhatsApp y confirmación de que sí recibe mensajes; si no tienen o no está confirmado, indícalo.
4. Servicios que ofrecen.
5. Colonias, municipios o zonas que atienden.
6. Rango aproximado de cada servicio, sin necesidad de fijar un precio definitivo.
7. Factores que pueden cambiar el importe y escenarios mínimos o máximos realistas.
8. Preguntas sencillas que normalmente hacen para entender el servicio y preparar una estimación.
9. Cualquier dato que todavía esté pendiente.

La página servirá como guía con estimaciones y rangos aproximados. No presentará importes definitivos. Fecha de recepción: {intakeDate}.
```

### Correo

**Asunto:** Información para la página individual de {businessName}

```text
Hola, {clientName}:

Soy {publisherName}. Para preparar o actualizar la página individual de {businessName} en Precios Locales, necesitamos confirmar únicamente la información básica del negocio:

- Nombre comercial, categoría, ciudad y estado.
- Teléfono público autorizado.
- Número de WhatsApp y si está confirmado, sin confirmar o ausente.
- Servicios ofrecidos.
- Zonas atendidas.
- Rangos aproximados por servicio.
- Factores que modifican el importe y escenarios mínimos o máximos realistas.
- Preguntas sencillas que ayudan a entender el trabajo y preparar una estimación.
- Notas o datos pendientes.

La página mostrará estimaciones o precios aproximados para orientar al cliente. El importe real dependerá de los detalles que revise y confirme el negocio.

Si algún dato todavía no está confirmado, por favor indícalo como pendiente en lugar de estimarlo.

Gracias,
{publisherName}
Fecha: {intakeDate}
```

## 5. Preguntas de incorporación

### Identidad del negocio

1. ¿Cuál es el nombre comercial exacto que debemos mostrar?
2. ¿Cuál es la categoría principal del negocio?
3. ¿En qué ciudad y estado presta sus servicios?
4. ¿Quién confirma estos datos y en qué fecha?

### Datos de contacto

1. ¿Qué teléfono está autorizado para mostrarse públicamente?
2. ¿El número tiene lada y diez dígitos?
3. ¿Hay alguna corrección pendiente en el teléfono?

### Estado de WhatsApp

1. ¿El teléfono público recibe mensajes por WhatsApp?
2. Si usan otro número, ¿cuál es y está autorizado para publicarse?
3. ¿El estado es confirmado, sin confirmar o ausente?

### Servicios

1. ¿Qué servicios específicos ofrecen actualmente?
2. ¿Qué servicios no deben aparecer?
3. ¿Algún servicio está pendiente de confirmación?

### Zonas

1. ¿Qué colonias, municipios, ciudades o corredores atienden?
2. ¿Hay zonas con condiciones o cargos distintos?
3. ¿Qué zonas no atienden?

### Información de rangos

1. ¿Cuál es el rango aproximado habitual de cada servicio?
2. ¿Qué incluye normalmente ese rango?
3. ¿Qué factores pueden aumentar o reducir el importe?
4. ¿Qué caso mínimo y qué caso máximo son realistas?
5. ¿Qué rangos siguen sin confirmar?

### Preguntas de estimación

1. ¿Qué necesita saber el negocio antes de orientar al cliente?
2. ¿Qué opciones sencillas puede responder una persona sin conocimientos técnicos?
3. ¿Qué pregunta cambia de manera importante el rango aproximado?

### Confirmaciones pendientes

1. ¿Qué dato falta recibir?
2. ¿Qué dato requiere aprobación del cliente?
3. ¿Quién dará la confirmación y cuándo se espera?

## 6. Reglas para el estado de WhatsApp

### WhatsApp confirmado

- Registra `{whatsappStatus}` como **confirmado**.
- Usa `{whatsappNumber}` solamente después de confirmar que recibe mensajes y que el negocio autoriza mostrarlo.
- Antes de publicar, comprueba manualmente el número, la lada y el código de país.

### WhatsApp sin confirmar

- Registra `{whatsappStatus}` como **sin confirmar**.
- Agrega el número y la confirmación a `{pendingItems}`.
- No crees ni entregues un enlace de WhatsApp mientras siga sin confirmar.

### Sin WhatsApp

- Registra `{whatsappStatus}` como **ausente**.
- Deja `{whatsappNumber}` como **Pendiente: no aplica; el negocio indicó que no usa WhatsApp**.
- Si existe `{publicPhone}`, usa únicamente texto prudente para invitar a llamar al negocio.
- No crees un enlace de WhatsApp.

### Solo teléfono público

- Confirma que `{publicPhone}` está autorizado.
- Usa únicamente una indicación de llamada; no sugieras que el número recibe mensajes.
- Registra en `{businessNotes}` que el contacto disponible es por llamada.

### Falta el teléfono

- Registra el teléfono y la entrega del contacto en `{pendingItems}`.
- No inventes ni reutilices un número no aprobado.
- Si tampoco hay WhatsApp confirmado, marca la forma de contacto como pendiente y no prepares ningún enlace de contacto.

## 7. Reglas para reunir rangos de precios

- Solicita solamente estimaciones o rangos aproximados.
- No inventes importes ni completes huecos con precios de otros negocios.
- No obligues al cliente a establecer un importe definitivo cuando depende de una revisión.
- Pregunta qué incluye el rango y qué factores pueden cambiarlo.
- Pregunta qué escenario mínimo y qué escenario máximo son realistas.
- Separa los rangos por servicio o situación cuando sea necesario.
- Marca cualquier rango sin confirmar dentro de `{pendingItems}` y no lo presentes como aprobado.
- Usa expresiones como **estimación**, **rango aproximado** o **precio aproximado**.
- Conserva la moneda y la unidad indicadas por el cliente; pide aclaración si faltan.

## 8. Recopilación de preguntas de estimación

Las preguntas deben ayudar a la persona usuaria a comprender por qué puede variar el rango del servicio. No deben aparentar que producen un importe definitivo. Cada pregunta debe ser específica para el servicio, breve y fácil de responder sin conocimientos técnicos.

Elige únicamente las preguntas que correspondan a los servicios confirmados del negocio.

### Aire acondicionado

- ¿Qué servicio necesita: revisión, mantenimiento, reparación o instalación?
- ¿Cuántos equipos requieren atención?
- ¿Qué tipo o capacidad aproximada tiene el equipo?
- ¿El equipo enciende y enfría actualmente?
- ¿En qué zona se realizará el servicio?

### Plomería

- ¿Qué necesita: revisión, reparación, instalación o destape?
- ¿Dónde está el problema: cocina, baño, patio, tinaco u otra área?
- ¿Hay fuga activa o falta total de agua?
- ¿Cuántas piezas o puntos requieren trabajo?
- ¿En qué zona se encuentra el domicilio?

### Electricidad

- ¿Qué necesita: revisión, reparación, instalación o reemplazo?
- ¿Cuántos contactos, lámparas, circuitos o equipos están involucrados?
- ¿Hay energía parcial, falla total, chispas u olor a quemado?
- ¿El trabajo es en casa, departamento, local u otro espacio?
- ¿En qué zona se realizará el servicio?

### Jardinería

- ¿Qué servicio necesita: poda, limpieza, mantenimiento, retiro o instalación?
- ¿Cuál es el tamaño aproximado del área?
- ¿Cuántos árboles, plantas o secciones requieren atención?
- ¿Se necesita retirar residuos verdes?
- ¿Con qué frecuencia se requiere el servicio?

### Control de plagas

- ¿Qué tipo de plaga ha observado?
- ¿El servicio es preventivo o existe actividad visible?
- ¿Qué tipo y tamaño aproximado tiene el inmueble?
- ¿Cuántas áreas requieren atención?
- ¿Hay mascotas, niñas, niños o condiciones que deban considerarse?

## 9. Guía manual para segmentos de dirección

- Escribe `{businessSlug}`, `{categorySlug}` y `{citySlug}` en minúsculas.
- Separa las palabras con guiones.
- Evita acentos.
- Evita espacios y caracteres especiales.
- Mantén cada segmento estable una vez publicada la página.
- No cambies segmentos existentes salvo que el cambio sea solicitado expresamente y verificado antes de publicar.
- Registra cualquier corrección pendiente en `{pendingItems}`.
- Esta revisión es manual; no agregues automatización para generar segmentos.

## 10. Lista interna de incorporación

- [ ] Confirmar el nombre del negocio.
- [ ] Confirmar la categoría.
- [ ] Confirmar la ciudad y el estado.
- [ ] Confirmar el teléfono público.
- [ ] Confirmar el estado de WhatsApp.
- [ ] Confirmar los servicios.
- [ ] Confirmar las zonas.
- [ ] Confirmar los rangos aproximados.
- [ ] Confirmar las preguntas de estimación.
- [ ] Confirmar los datos pendientes.
- [ ] Confirmar que no se inventaron afirmaciones, servicios, zonas o importes.
- [ ] Confirmar que no se promete un precio definitivo exacto.
- [ ] Confirmar que el texto no presenta posiciones, reseñas ni un catálogo de negocios.
- [ ] Confirmar que la incorporación corresponde a una sola página individual.

## 11. Bloque de confirmación para el cliente

```text
Hola, {clientName}. Gracias por compartir la información de {businessName}. Antes de preparar o actualizar su página individual, por favor confirma este resumen:

- Nombre del negocio: {businessName}
- Servicios: {serviceList}
- Zonas atendidas: {zonesServed}
- Teléfono público: {publicPhone}
- Estado de WhatsApp: {whatsappStatus}
- Número de WhatsApp, solo si está confirmado: {whatsappNumber}
- Rangos aproximados: {priceRanges}
- Correcciones o datos pendientes: {pendingItems}

Las cifras se mostrarán como estimaciones o rangos aproximados; el importe real dependerá de los detalles del servicio. Por favor responde “Confirmo” si todo es correcto o indícanos las correcciones pendientes.

Preparó: {publisherName}
Fecha: {intakeDate}
```

## 12. Documentos relacionados

- [Formulario existente para reunir información con el cliente](client-intake-template.md).
- [Guía interna para pasar la información aprobada a `businesses.js`](intake-to-businesses-js-guide.md).
- [Lista interna antes de publicar](pre-publish-checklist.md).
- [Procedimiento interno de publicación](publish-business-in-10-minutes.md).
- [Texto alternativo cuando WhatsApp todavía no está confirmado](client-delivery-message-copy.md#pendiente-1--whatsapp-sin-confirmar).
- [Texto alternativo cuando falta WhatsApp o el teléfono público](client-delivery-message-copy.md#pendiente-2--teléfono-faltante).
- [Mensajes para entregar la página al cliente](client-delivery-message-copy.md).
- [Guía del reporte manual para clientes](manual-report-template.md).
- [Plantilla reutilizable del reporte manual](templates/manual-client-report.md).
