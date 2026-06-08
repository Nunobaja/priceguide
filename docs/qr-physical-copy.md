# Plantillas internas para copias físicas con código QR

> **Uso interno de Precios Locales.** Copia práctica para materiales impresos de un negocio local de servicios para el hogar. Usa únicamente información aprobada y dirige siempre el código QR a la página individual del negocio.

## 1. Propósito

Estas plantillas ayudan al negocio a colocar un código QR físico que envíe a sus clientes a su página individual de guía de precios de Precios Locales. Al escanear, la persona puede revisar una estimación o un rango aproximado antes de contactar al negocio.

Esto no es analítica, un panel de seguimiento, un CRM, un directorio ni un sistema de captación de prospectos. El parámetro `source=qr-physical` solamente marca el origen dentro del mensaje preparado para WhatsApp, el resumen copiado y el enlace copiado. No registra visitas, no crea perfiles de clientes y no cambia el funcionamiento de la página.

## 2. Formato de la URL

La URL individual del negocio debe usar exactamente este formato:

```text
{baseUrl}?source=qr-physical
```

Estructura de ejemplo, sin datos de un negocio inventado:

```text
{businessPageUrl}?source=qr-physical
```

En este documento, el marcador `{qrPhysicalUrl}` significa la URL completa de la página individual de Precios Locales con `?source=qr-physical`:

```text
{qrPhysicalUrl} = {baseUrl}?source=qr-physical
```

No generes el código QR con la página madre ni con una URL sin el parámetro de fuente.

## 3. Recomendaciones de colocación del QR

Estas son solamente ideas de copia y colocación para materiales físicos; no representan funciones de la aplicación.

- Tarjeta de mostrador.
- Calcomanía para vehículo.
- Calcomanía para caja de herramientas.
- Pie de recibo o factura.
- Colgante para puerta.
- Tarjeta para entregar después de una visita de servicio.
- Volante local.
- Letrero en recepción o sala de espera.
- Etiqueta de producto o equipo.
- Tarjeta de seguimiento que deja el técnico.

Antes de imprimir, revisa que el tamaño, el contraste y el espacio libre alrededor del QR permitan escanearlo fácilmente desde un teléfono.

## 4. Plantillas de encabezados cortos para QR

1. Consulta una estimación de tu servicio
2. Revisa un rango aproximado de precio
3. Conoce un precio aproximado antes de contactar
4. Obtén una estimación inicial en minutos
5. Escanea para ver un rango estimado
6. Consulta una guía de precios aproximados
7. Revisa una estimación antes de pedir visita
8. Conoce un rango aproximado para tu servicio
9. Escanea y calcula una estimación inicial
10. Ve un precio estimado según tu servicio
11. Consulta un rango de precio aproximado
12. Calcula una estimación con tus datos
13. Revisa una guía aproximada de costos
14. Conoce una estimación antes de escribirnos
15. Escanea para consultar un precio aproximado

## 5. Plantillas de texto de apoyo para QR

1. Escanea, responde unas preguntas y consulta un rango aproximado; el negocio confirmará el precio final.
2. Al escanear verás una guía de precio aproximado según los detalles que selecciones, no una cotización final.
3. Cuéntanos qué servicio necesitas y revisa una estimación inicial antes de contactar al negocio.
4. El QR abre una guía rápida para calcular un rango estimado; el costo final depende de la revisión del servicio.
5. Responde unas preguntas sencillas y conoce un precio aproximado, sujeto a los detalles de tu caso.
6. Escanea para consultar una estimación orientativa; el negocio revisará las condiciones antes de confirmar el costo.
7. La guía muestra un rango aproximado según tus respuestas y no sustituye la evaluación del trabajo.
8. Al abrir el QR podrás elegir el servicio y obtener una estimación, no un precio final.
9. Consulta una referencia inicial de precio; materiales, zona y condiciones pueden cambiar el costo.
10. Usa la guía para conocer un rango estimado antes de solicitar una visita o enviar un mensaje.
11. Escanea y selecciona los detalles del servicio para ver una estimación aproximada.
12. La página te dará una guía de costos aproximados; la confirmación final corresponde al negocio.
13. Revisa un rango de precio según el tipo de trabajo y después consulta los detalles con el negocio.
14. El QR te lleva a una estimación rápida basada en tus respuestas, sujeta a revisión.
15. Consulta un precio aproximado como referencia antes de pedir la confirmación del servicio.

## 6. Plantillas de llamada a la acción

1. Escanea y revisa un rango aproximado
2. Consulta una estimación antes de pedir visita
3. Ve una guía rápida de precios
4. Escanea para obtener una estimación inicial
5. Revisa un precio aproximado aquí
6. Consulta el rango estimado de tu servicio
7. Escanea y responde unas preguntas
8. Conoce una estimación antes de contactarnos
9. Abre la guía de precios aproximados
10. Calcula un rango estimado para tu servicio
11. Escanea para consultar una referencia de precio
12. Revisa una estimación según tus necesidades
13. Consulta una guía aproximada antes de escribir
14. Ve el rango de precio estimado
15. Escanea y conoce un costo aproximado

## 7. Ejemplos por formato físico

### 7.1 Calcomanía pequeña

**Encabezado:** Escanea para ver un precio aproximado
**Texto breve:** Responde unas preguntas y consulta una estimación; el precio final se confirma después.
**Llamada a la acción:** Revisa tu rango estimado
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.2 Tarjeta de mostrador

**Encabezado:** Consulta una estimación antes de pedir servicio
**Texto breve:** Escanea para elegir el tipo de trabajo y ver un rango aproximado según tus respuestas.
**Llamada a la acción:** Abre la guía rápida de precios
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.3 Calcomanía para vehículo

**Encabezado:** ¿Necesitas un precio aproximado?
**Texto breve:** Escanea y consulta una estimación inicial para el servicio que necesitas.
**Llamada a la acción:** Conoce un rango aproximado
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.4 Pie de recibo

**Encabezado:** Guarda nuestra guía de precios aproximados
**Texto breve:** Escanea para consultar una estimación en tu próximo servicio; el costo final depende de los detalles.
**Llamada a la acción:** Revisa la guía aquí
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.5 Colgante para puerta

**Encabezado:** Consulta un rango estimado para tu servicio
**Texto breve:** Responde unas preguntas para obtener una referencia inicial antes de solicitar una visita.
**Llamada a la acción:** Escanea y calcula una estimación
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.6 Tarjeta del técnico

**Encabezado:** Revisa una estimación para tu próximo servicio
**Texto breve:** Usa esta guía para conocer un precio aproximado; la revisión del trabajo define el costo final.
**Llamada a la acción:** Escanea para consultar tu rango
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.7 Volante local

**Encabezado:** Conoce un precio aproximado antes de contactarnos
**Texto breve:** Selecciona el servicio y sus detalles para consultar un rango estimado de referencia.
**Llamada a la acción:** Abre la guía de precios
**QR:** `[QR a {qrPhysicalUrl}]`

### 7.8 Inserto para carpeta de servicio

**Encabezado:** Tu guía rápida de costos aproximados
**Texto breve:** Escanea para revisar una estimación de futuros servicios. El negocio confirmará el precio según cada caso.
**Llamada a la acción:** Consulta una estimación aquí
**QR:** `[QR a {qrPhysicalUrl}]`

## 8. Ejemplos por tipo de servicio

### 8.1 Aire acondicionado

**Encabezado:** Estima tu servicio de aire acondicionado
**Texto de apoyo:** Consulta un rango aproximado según el tipo de equipo y trabajo. El precio final depende del diagnóstico, la zona, los materiales y las condiciones de instalación.
**Llamada a la acción:** Escanea y revisa una estimación
**QR:** `[QR a {qrPhysicalUrl}]`

### 8.2 Plomería

**Encabezado:** Consulta un rango aproximado de plomería
**Texto de apoyo:** Obtén una guía inicial según el servicio. El precio final depende de la inspección, el acceso, los materiales y las condiciones encontradas.
**Llamada a la acción:** Escanea para ver un precio aproximado
**QR:** `[QR a {qrPhysicalUrl}]`

### 8.3 Electricidad

**Encabezado:** Revisa una estimación para tu trabajo eléctrico
**Texto de apoyo:** Conoce un rango estimado antes de solicitar el servicio. El precio final depende de la revisión, la zona, los materiales y las condiciones eléctricas.
**Llamada a la acción:** Consulta tu rango estimado
**QR:** `[QR a {qrPhysicalUrl}]`

### 8.4 Jardinería

**Encabezado:** Estima tu servicio de jardinería
**Texto de apoyo:** Revisa un precio aproximado según el trabajo. El costo final depende del tamaño del área, la zona, los materiales y las condiciones del servicio.
**Llamada a la acción:** Escanea y consulta una estimación
**QR:** `[QR a {qrPhysicalUrl}]`

### 8.5 Control de plagas

**Encabezado:** Consulta un rango estimado para control de plagas
**Texto de apoyo:** Obtén una guía aproximada según tus necesidades. El precio final depende de la inspección, la zona, el área y las condiciones del servicio.
**Llamada a la acción:** Escanea para revisar un rango aproximado
**QR:** `[QR a {qrPhysicalUrl}]`

## 9. Reglas de seguridad antes de imprimir

- [ ] El QR apunta a la página individual del negocio, no a `/priceguide/`.
- [ ] La URL del QR incluye `?source=qr-physical`.
- [ ] No imprimir hasta confirmar la URL de la página individual del negocio.
- [ ] No prometer un precio final ni presentar la estimación como definitiva.
- [ ] No usar expresiones que garanticen una cotización.
- [ ] No mencionar posiciones comparativas, reseñas, descuentos ni disponibilidad de emergencia salvo que cada dato esté confirmado expresamente.
- [ ] Confirmar el estado de WhatsApp antes de insinuar que habrá continuidad por ese medio.
- [ ] Usar expresiones como “estimación”, “rango aproximado” o “precio aproximado”.
- [ ] Mantener el texto legible, breve y separado del área libre del código QR.
- [ ] Hacer una prueba de escaneo sobre una muestra al tamaño real de impresión.

## 10. Lista interna de entrega

- [ ] Confirmar la URL individual del negocio.
- [ ] Confirmar que el parámetro de fuente sea `source=qr-physical`.
- [ ] Generar el QR desde `{qrPhysicalUrl}`.
- [ ] Probar el escaneo del QR en un teléfono.
- [ ] Confirmar que la página abra correctamente.
- [ ] Confirmar que el enlace de WhatsApp no esté roto.
- [ ] Confirmar que la copia no prometa precios finales exactos.
- [ ] Confirmar que la copia física sea suficientemente corta para leerse con rapidez.
- [ ] Confirmar que el material no haga parecer que la página madre es un directorio público.
- [ ] Guardar la URL final aprobada junto con el archivo listo para impresión.

## 11. Documentos relacionados

- [Plantillas internas para Google Business Profile](google-business-profile-copy.md)
- [Plantillas internas para WhatsApp Business](whatsapp-business-copy.md)
- [Guía interna de enlaces por fuente y uso del generador](source-links-guide.md)
- [SOP interno para publicar un negocio en 10 minutos](publish-business-in-10-minutes.md)
- [Lista interna de prepublicación](pre-publish-checklist.md)
