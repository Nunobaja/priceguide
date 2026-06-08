# Matriz interna de validación de producto

> **Uso interno únicamente.** Esta matriz sirve para QA y validación de producto de Precios Locales. No es un documento para clientes, una lista de ventas, una propuesta comercial, un pitch deck ni un roadmap público.

## 1. Propósito de la matriz

El objetivo es validar que Precios Locales funcione como un motor estático, reutilizable e interno de guías de precios para **páginas individuales de negocios**, sin convertir el producto en un directorio público. La validación debe comprobar que una misma experiencia puede representar correctamente distintos negocios de Home Services en México sin cambiar la lógica de precios para acomodar cada caso.

Esta matriz debe probar el producto a través de:

- diferentes ciudades mexicanas;
- diferentes categorías de Home Services;
- diferentes estados de contacto del negocio;
- distintas estructuras de servicios;
- listas cortas y largas de zonas;
- rangos de precios bajos y altos;
- español y comportamiento opcional en inglés;
- parámetros URL `source`, `service`, `zone`, `lang` y `campaign`;
- combinaciones de parámetros URL;
- el flujo completo del estimador, desde abrir la guía individual hasta copiar o usar un handoff seguro.

La matriz valida el motor y sus límites. No autoriza cambios en rangos, fórmulas, rutas, slugs ni datos de negocios.

## 2. Qué no debe convertirse esta validación

Esta validación:

- **no es un directorio**;
- **no es un marketplace**;
- **no es un sistema de rankings**;
- **no es un buscador**;
- **no es un CRM**;
- **no es lead capture**;
- **no es analytics ni tracking**;
- **no es material de ventas o marketing**;
- **no es una propuesta para clientes**;
- **no es un pitch deck**;
- **no es una página pública de navegación**.

No se deben agregar reseñas, ratings, filtros, pagos, login, cookies, base de datos, dashboard ni comportamiento de directorio como resultado de completar esta matriz.

## 3. Cómo usar la matriz

1. Elegir una página individual que represente la dimensión a probar.
2. Registrar la URL exacta, viewport, idioma y datos usados en **Notas**.
3. Ejecutar el flujo descrito en **Qué probar** sin alterar `businesses.js` ni las fórmulas.
4. Marcar una sola opción en **Pass/fail**: `PASS`, `FAIL` o `N/A`.
5. Marcar **Gap found?** como `Sí` únicamente cuando exista una diferencia reproducible entre el comportamiento esperado y el observado.
6. Marcar **Follow-up PR needed?** como `Sí` solo después de clasificar el gap y confirmar que no puede resolverse con documentación, datos aprobados o una mejor prueba.

`N/A` no equivale a `PASS`: indica que la cobertura actual no permite ejecutar el caso. Los gaps de cobertura se registran en la sección de demos y no se corrigen agregando negocios en este PR.

## 4. Matriz de dimensiones de validación

| Dimensión | Qué probar | Por qué importa | Comportamiento esperado | Pass/fail | Notas | Gap found? | Follow-up PR needed? |
|---|---|---|---|---|---|---|---|
| Cobertura de ciudades | Abrir páginas individuales de al menos tres ciudades y completar una estimación en cada una. | Confirma que el motor no depende de una ciudad específica. | Cada ruta carga el negocio y ciudad correctos; no mezcla contenido entre ciudades. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Cobertura de categorías | Probar al menos cuatro categorías de Home Services. | Detecta supuestos de UI o estimador ligados a una sola categoría. | Etiquetas, servicios, preguntas y disclaimers corresponden a cada categoría sin cambiar fórmulas. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Estado de contacto del negocio | Comparar páginas con contacto confirmado, pendiente y ausente cuando haya datos para ello. | El siguiente paso debe ser seguro en todos los estados. | Solo aparecen acciones que los datos permiten; nunca se fabrica un canal de contacto. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| WhatsApp confirmado | Completar el estimador y abrir el CTA de WhatsApp de un negocio confirmado. | Es el handoff principal cuando está autorizado. | Se abre `wa.me` con el número correcto y un mensaje con negocio, servicio, respuestas, rango y contexto válido. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| WhatsApp pendiente | Probar un negocio con `whatsappConfirmed: false`. | Evita presentar como confirmado un canal no verificado. | No aparece un enlace activo de WhatsApp; se muestra la nota pendiente y una llamada si existe teléfono público. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Sin WhatsApp | Probar una configuración sin número de WhatsApp cuando exista cobertura. | Verifica que WhatsApp no sea una dependencia obligatoria. | No hay enlace roto o CTA engañoso; se ofrece llamada o fallback seguro según los datos. | ☐ PASS ☐ FAIL ☐ N/A | Cobertura actual por confirmar. | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Teléfono público disponible | En un caso sin WhatsApp confirmado, activar la opción de llamada. | Asegura una salida útil sin inventar WhatsApp. | El enlace `tel:` usa el teléfono público correcto y la etiqueta explica que es llamada. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Sin teléfono público | Probar una configuración sin teléfono ni WhatsApp cuando exista cobertura. | Un dato faltante no debe producir un enlace inválido. | Se muestra un fallback neutral y seguro; no aparece `tel:`, `wa.me` ni promesa de contacto inexistente. | ☐ PASS ☐ FAIL ☐ N/A | Cobertura actual por confirmar. | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Múltiples servicios | Seleccionar distintos servicios del mismo negocio y completar cada variante. | Valida la reutilización del estimador dentro de una página individual. | Cambian preguntas y rango según la configuración seleccionada; no se mezclan respuestas previas. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Un solo servicio | Abrir una página con un único servicio cuando exista cobertura. | Detecta fricción o UI innecesaria en la estructura mínima. | El único servicio se entiende y el flujo se completa sin navegación de directorio. | ☐ PASS ☐ FAIL ☐ N/A | Cobertura actual por confirmar. | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Zonas cortas | Probar un negocio con pocas zonas y seleccionar cada opción. | Confirma que la selección mínima sigue siendo clara. | Las zonas caben, se seleccionan y actualizan el estimador sin espacios o estados vacíos confusos. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Zonas largas | Probar el negocio con la lista y/o etiquetas de zona más largas, especialmente en móvil. | Detecta wrapping, desbordamiento y pérdida de legibilidad. | Todas las zonas siguen legibles y seleccionables; no hay overflow horizontal. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Rangos económicos | Completar un servicio con el rango base más bajo disponible. | Valida formato, redondeo y lenguaje aproximado en montos pequeños. | Se muestra moneda y rango aproximado; nunca se presenta como precio final exacto. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Rangos costosos | Completar un servicio con el rango base más alto disponible y opciones de mayor factor. | Detecta problemas de formato y claridad con cifras mayores. | El rango permanece legible, razonable según la configuración y explícitamente aproximado. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Solo español | Abrir una guía sin copy inglés, incluyendo `?lang=en`. | El idioma opcional debe fallar de forma segura. | La guía permanece usable; no aparecen cadenas vacías, traducciones parciales rotas ni contenido inventado. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Español + inglés | En una guía bilingüe, alternar idioma y repetir el flujo completo. | Verifica que el idioma no cambie datos ni cálculo. | UI, resumen y handoff usan el idioma elegido cuando existe copy; servicio, zona y rango siguen siendo los mismos datos. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetro `source` | Abrir fuentes válidas y valores inválidos; completar y copiar el resultado. | Conserva contexto manual sin analytics. | Una fuente válida aparece en resumen/handoff y se conserva al copiar enlace; una inválida se ignora sin romper el flujo. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetro `service` | Abrir un slug válido y uno desconocido. | Reduce pasos desde un enlace específico sin crear rutas nuevas. | El válido preselecciona el servicio; el desconocido se ignora y permite selección manual. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetro `zone` | Abrir un slug de zona válido y uno desconocido. | Valida contexto geográfico dentro de la guía individual. | Actualmente soportado: el válido preselecciona la zona; el desconocido se ignora de forma segura. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetro `lang` | Probar `es`, `en`, otro valor, vacío y variaciones de mayúsculas. | El idioma debe ser determinista y seguro. | Solo `lang=en` solicita inglés; cualquier otro valor usa español. La opción inglesa solo se muestra cuando hay copy inglés. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetro `campaign` | Probar una etiqueta válida, vacía, mayor a 60 caracteres y con caracteres no permitidos. | Conserva contexto manual sin introducir tracking. | Una campaña válida aparece en resumen/handoff; una inválida se ignora y no altera cálculo ni selección. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Parámetros combinados | Combinar `source`, `service`, `zone`, `lang` y `campaign` en distinto orden. | Detecta interferencias entre contextos independientes. | Cada valor válido conserva su función; un valor inválido no elimina ni rompe los demás. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Lectura del resultado en móvil | Ejecutar el flujo a 320 px, 375 px y 430 px de ancho. | La guía está orientada a handoff móvil. | Rango, disclaimer, botones y resumen son legibles sin scroll horizontal ni contenido cortado. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Copiar resumen | Generar un resultado y usar **Copiar resumen** con y sin parámetros. | El texto copiado es una salida principal del flujo. | Copia negocio, servicio, zona, respuestas, rango aproximado y contexto válido; no incluye datos incorrectos. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Copiar enlace | Usar **Copiar enlace** antes y después de cambiar idioma, servicio y zona. | Permite compartir el mismo estado sin backend. | Copia una URL válida y conserva parámetros presentes/actualizados sin crear rutas nuevas. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Handoff de WhatsApp | Completar todos los campos y abrir WhatsApp. | Confirma continuidad entre estimación y contacto. | Número y mensaje son correctos, codificados y coherentes con el resumen; no promete precio final. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Handoff de llamada | Usar la llamada en un caso con WhatsApp no confirmado o ausente. | Mantiene un siguiente paso cuando existe teléfono público. | El enlace `tel:` funciona y no se etiqueta como WhatsApp. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Fallback sin contacto | Probar ausencia de WhatsApp y teléfono cuando haya fixture válido. | Evita enlaces rotos y expectativas falsas. | Aparece un mensaje seguro de contacto pendiente/no disponible, sin CTA roto. | ☐ PASS ☐ FAIL ☐ N/A | Cobertura actual por confirmar. | ☐ Sí ☐ No | ☐ Sí ☐ No |
| Vista madre de QA interna | Abrir `/` y `/priceguide/` y revisar enlaces/documentación de publicación. | La vista madre no debe evolucionar a navegación pública del producto. | Permanece identificada y usada solo como apoyo interno de QA/demo; no agrega búsqueda, filtros, rankings ni señales de directorio. | ☐ PASS ☐ FAIL ☐ N/A | — | ☐ Sí ☐ No | ☐ Sí ☐ No |

## 5. Validación de parámetros URL

Usar una página individual existente. Sustituir `{validServiceSlug}` y `{validZoneSlug}` por valores que pertenezcan al negocio elegido. Registrar la URL final y el resultado observado. El orden de los parámetros no debe cambiar su significado.

Antes de la validación manual, ejecutar el [harness interno de QA para parámetros URL](url-parameter-qa-harness.md) para cubrir parsing, fixtures y combinaciones deterministas sin navegador. Sus resultados no sustituyen las comprobaciones visuales o E2E de esta matriz.

| Caso | URL de prueba | Validación esperada | Resultado | Notas / gap |
|---|---|---|---|---|
| Sin parámetros | `{businessPageUrl}` | Carga en español, sin fuente/campaña y sin preselección proveniente de URL; el flujo manual funciona. | ☐ PASS ☐ FAIL | — |
| Fuente Google Business Profile | `?source=google-business-profile` | La fuente legible se conserva en resumen, handoff y enlace copiado; no se almacena ni cuenta. | ☐ PASS ☐ FAIL | — |
| Fuente WhatsApp Business | `?source=whatsapp-business` | La fuente aparece como contexto manual y no cambia servicio, rango o contacto. | ☐ PASS ☐ FAIL | — |
| Fuente QR físico | `?source=qr-physical` | La fuente aparece como contexto manual y el flujo sigue completo. | ☐ PASS ☐ FAIL | — |
| Servicio válido | `?service={validServiceSlug}` | Preselecciona el servicio existente, muestra la nota del enlace y conserva lenguaje de rango aproximado. | ☐ PASS ☐ FAIL | — |
| Servicio desconocido | `?service=unknown-service` | Se ignora; no crea servicio, error, ruta ni estado roto. | ☐ PASS ☐ FAIL | — |
| Campaña válida | `?campaign=promo-verano` | Incluye `promo-verano` en resumen/handoff; no crea analytics ni cambia el cálculo. | ☐ PASS ☐ FAIL | — |
| Español explícito | `?lang=es` | Usa español. | ☐ PASS ☐ FAIL | — |
| Inglés explícito | `?lang=en` | Usa inglés cuando la guía tiene copy inglés; si no lo tiene, permanece usable con fallback seguro. | ☐ PASS ☐ FAIL | — |
| Zona válida | `?zone={validZoneSlug}` | **Actualmente soportado:** preselecciona una zona existente sin cambiar datos ni crear una zona. | ☐ PASS ☐ FAIL | — |
| Zona desconocida | `?zone=unknown-zone` | **Actualmente soportado:** ignora el valor desconocido y permite elegir una zona manualmente. | ☐ PASS ☐ FAIL | — |
| Fuente + servicio | `?source=google-business-profile&service={validServiceSlug}` | Conserva la fuente y preselecciona el servicio; ambos llegan al resumen/handoff cuando corresponde. | ☐ PASS ☐ FAIL | — |
| Fuente + servicio + campaña | `?source=qr-physical&service={validServiceSlug}&campaign=volante-junio` | Los tres contextos válidos conviven sin alterar preguntas, rango ni fórmula. | ☐ PASS ☐ FAIL | — |
| Inglés + fuente + servicio | `?lang=en&source=direct-link&service={validServiceSlug}` | Idioma, fuente y preselección funcionan de forma independiente; fallback seguro si no hay copy inglés. | ☐ PASS ☐ FAIL | — |
| Español + fuente + servicio + campaña | `?lang=es&source=whatsapp-business&service={validServiceSlug}&campaign=promo-junio` | El flujo queda en español y conserva los tres contextos válidos. | ☐ PASS ☐ FAIL | — |
| Valor `source` vacío | `?source=` | Se ignora; resumen/handoff no muestran una etiqueta vacía. | ☐ PASS ☐ FAIL | — |
| Valor `source` malformado | `?source=%3Cscript%3E` | Se ignora sin ejecutar contenido ni romper el flujo. | ☐ PASS ☐ FAIL | — |
| Valor `service` malformado | `?service=%3Cscript%3E` | Se ignora; queda disponible la selección manual. | ☐ PASS ☐ FAIL | — |
| Valor `zone` malformado | `?zone=%3Cscript%3E` | No encuentra coincidencia y se ignora de forma segura. | ☐ PASS ☐ FAIL | — |
| Valor `lang` desconocido | `?lang=fr` | Usa español; no intenta crear una tercera traducción. | ☐ PASS ☐ FAIL | — |
| Valor `campaign` con espacios | `?campaign=promo%20verano` | Se ignora por formato inválido; los demás parámetros siguen funcionando. | ☐ PASS ☐ FAIL | — |
| Valor `campaign` demasiado largo | `?campaign={moreThan60Characters}` | Se ignora sin truncarlo silenciosamente dentro del resumen/handoff y sin romper el flujo. | ☐ PASS ☐ FAIL | — |
| Mezcla de válido e inválido | `?source=google-business-profile&service=unknown-service&campaign=promo-junio` | Conserva fuente y campaña; ignora solo el servicio desconocido. | ☐ PASS ☐ FAIL | — |
| Parámetro repetido | `?service={validServiceSlug}&service=unknown-service` | La página no se rompe; documentar el valor que el navegador/app aplica y confirmar que el estado resultante es seguro. | ☐ PASS ☐ FAIL | — |
| Parámetro sin relación | `?unexpected=value` | No cambia la experiencia ni crea comportamiento nuevo. | ☐ PASS ☐ FAIL | — |

### Reglas específicas para parámetros

- `source` es contexto de texto manual, no tracking ni analytics.
- `campaign` es contexto manual validado, no atribución, reporting ni almacenamiento.
- `service` solo puede seleccionar un servicio ya configurado en la página individual.
- `zone` **sí está soportado actualmente** y solo puede seleccionar una zona ya configurada; esta matriz no solicita ampliar esa función.
- `lang=en` solicita inglés; cualquier otro valor usa español. El inglés sigue siendo opcional por negocio.
- Un valor inválido debe fallar de forma aislada y segura: no debe bloquear el estimador ni invalidar parámetros correctos.
- Ningún parámetro debe cambiar rangos base, factores, fórmulas, rutas, slugs o datos del negocio.

## 6. Checklist end-to-end del flujo real

Registrar negocio, URL, dispositivo/viewport e idioma antes de comenzar.

- [ ] El usuario abre una página de guía individual.
- [ ] El usuario entiende que los precios son rangos aproximados.
- [ ] El usuario entiende que esta es la página de un negocio, no un directorio.
- [ ] El usuario ve el contexto del negocio y del servicio.
- [ ] El usuario elige o confirma un servicio.
- [ ] El usuario responde todas las preguntas requeridas del estimador.
- [ ] El usuario ve un rango estimado.
- [ ] El usuario entiende que el precio final depende de los detalles reales del servicio.
- [ ] El usuario ve un siguiente paso seguro.
- [ ] El usuario copia el resumen.
- [ ] El usuario copia el enlace, si la acción está disponible.
- [ ] El usuario usa el handoff de WhatsApp cuando está confirmado.
- [ ] El usuario usa la llamada como fallback cuando WhatsApp no está disponible o confirmado.
- [ ] El usuario ve un fallback seguro si no existe contacto.
- [ ] La etiqueta de `source` se conserva en resumen/handoff cuando está presente y es válida.
- [ ] La preselección de `service` sigue funcionando cuando está presente y es válida.
- [ ] El contexto de `campaign` sigue funcionando cuando está presente y es válido.
- [ ] La preselección de `zone` sigue funcionando cuando está presente y es válida.
- [ ] El comportamiento de `lang` coincide con la disponibilidad de copy inglés.
- [ ] No hay enlaces rotos.
- [ ] No existe ninguna promesa de precio final exacto.
- [ ] No aparecen búsqueda, filtros, reviews, ratings, rankings, marketplace, directorio ni lead capture.

## 7. Cobertura actual de demos/datos

Esta evaluación describe los datos existentes después del fixture interno de cobertura. Es una foto de cobertura; `partial` significa que existe una aproximación útil, pero no un caso de contraste suficientemente claro.

| Área de cobertura | ¿Cubierto actualmente? yes/no/partial/unknown | Negocio de ejemplo, si existe | Riesgo si falta | Seguimiento recomendado |
|---|---|---|---|---|
| Al menos 3 ciudades | yes | Plomería Mario (Los Cabos), Frío Express (Mazatlán), Control Total (Guadalajara); también Cabo San Lucas y Puerto Vallarta | Dependencia accidental de contenido local | Mantener regresión en tres o más ciudades. |
| Al menos 4 categorías | yes | Plomería, aire acondicionado, fumigación y electricista | Supuestos ligados a una categoría | Probar una página por categoría en cada ciclo mayor. |
| WhatsApp confirmado | yes | Carmona Hnos Climas y Refrigeración; también los demos sin `whatsappConfirmed: false` | Handoff principal sin cobertura | Validar número y mensaje preparado. |
| WhatsApp pendiente/no confirmado | yes | Instal PV; Servicios Profesionales de Electricidad y Plomería Martínez; Solara | CTA de WhatsApp engañoso | Confirmar nota pendiente y fallback de llamada. |
| Sin WhatsApp | yes | Fixture interno de control preventivo | Dependencia no detectada del campo `whatsapp` | Validar que el teléfono público sea el único handoff y que no exista enlace `wa.me`. |
| Fallback con teléfono público | yes | Instal PV y fixture interno de control preventivo | Usuarios sin siguiente paso cuando WhatsApp está pendiente o ausente | Probar tanto número pendiente como campo ausente. |
| Fallback sin teléfono público | no | — | Enlace vacío o CTA roto ante contacto ausente | Diseñar primero una prueba/fixture interno; cambiar comportamiento solo si falla. |
| Negocio multi-servicio | yes | Plomería Mario (4 servicios); la mayoría tiene 3 | Estado compartido incorrecto entre servicios | Probar cambio y reinicio entre servicios. |
| Negocio de un servicio | yes | Fixture interno de control preventivo | UI mínima no validada | Probar flujo completo y `service=inspeccion-preventiva`. |
| Lista larga de zonas | yes | Fixture interno de control preventivo (8 zonas) | Overflow o wrapping no observado con listas realmente largas | Probar móvil y `zone=san-juan-de-ocotan`. |
| Lista corta de zonas | partial | De la Hoz, Instal PV y Solara tienen 3 zonas | Estructura mínima no totalmente representada | Validar 3 zonas; no inventar un negocio para reducir la lista. |
| Rangos bajos | yes | Fixture interno parte de $350 MXN; Plomería Mario parte de $400 MXN | Formato confuso en cifras pequeñas | Probar mínimo y factores más bajos. |
| Rangos altos | yes | Solara llega a $7,500 MXN base; Carmona e Instal PV llegan a $4,200 MXN | Wrapping o lectura ambigua en cifras altas | Probar máximo con factores altos y viewport móvil. |
| Solo español | yes | Plomería Mario, Frío Express, Control Total y otros | Fallback de idioma no validado | Abrir con y sin `lang=en`. |
| Español + inglés | yes | Carmona Hnos Climas y Refrigeración | Traducción parcial o cambio de cálculo | Ejecutar el flujo completo en ambos idiomas. |
| Tono amigable | yes | Plomería Mario (`friendly`) | Motor demasiado rígido en voz | Revisar copy sin convertirlo en material comercial. |
| Tono profesional | yes | Fixture interno de control preventivo (`professional`) | Cobertura difícil de demostrar | Validar el branch explícito y conservar también regresión del fallback sin `tone`. |
| Tono técnico | yes | Frío Express (`technical`) | Preguntas o ayudas técnicas poco claras | Probar comprensión y legibilidad móvil. |
| Enlaces con fuente | yes | Todas las páginas individuales aceptan `source`; usar Carmona como caso bilingüe | Pérdida de contexto manual | Probar fuente en resumen, enlace y handoff. |
| Preselección de servicio | yes | Cualquier demo con un `services[].id` válido | Fricción desde enlaces específicos | Probar slug válido, desconocido y combinado. |
| Contexto de campaña | yes | Cualquier página individual con `campaign=promo-verano` | Etiqueta perdida o confundida con analytics | Probar valor válido/inválido y combinación con fuente/servicio. |

### Gaps de cobertura conocidos

La cobertura actual ya demuestra WhatsApp ausente con teléfono, un negocio con exactamente un servicio, una pregunta con dos opciones, una lista de ocho zonas y tono profesional explícito. Siguen faltando WhatsApp confirmado sin teléfono y ausencia total de contacto. No debe agregarse un fixture sin contacto hasta que exista un fallback seguro que no presuponga un teléfono; cualquier cambio de comportamiento pertenece a otro PR.

## 8. Reglas de pass/fail

### Un caso pasa cuando

- la página individual carga;
- la ruta es correcta;
- la app no parece un directorio;
- el estimador funciona de principio a fin;
- el lenguaje del rango es aproximado;
- no cambió ninguna fórmula de precios;
- no hay enlace de WhatsApp roto;
- el fallback de llamada funciona cuando corresponde;
- el fallback sin contacto es seguro;
- el resumen copia los datos correctos;
- `source`, `service`, `campaign` y `lang` funcionan o fallan de forma segura;
- `zone`, que actualmente está soportado, funciona o falla de forma segura;
- el resultado móvil permanece legible;
- no aparece ninguna función prohibida.

### Un caso falla cuando

- la página o ruta está rota;
- un enlace de handoff está roto;
- se promete un precio final exacto;
- aparece una señal de directorio, búsqueda, ranking o marketplace;
- `source` se pierde en el resumen/handoff después de una estimación válida;
- un parámetro URL inválido rompe el flujo;
- el resultado móvil es ilegible;
- el resultado del estimador es confuso o contradice sus respuestas;
- la falta de contacto crea un enlace roto;
- aparece backend, analytics, tracking, CRM o lead capture;
- se agregan reviews, ratings, filtros, dashboard, login, pagos, cookies o base de datos;
- el caso solo puede “pasar” alterando precios, fórmulas, rutas, slugs o datos sin aprobación.

### Evidencia mínima

Para cada `FAIL`, guardar:

- URL exacta y parámetros;
- negocio y servicio;
- viewport/dispositivo e idioma;
- pasos mínimos para reproducir;
- comportamiento esperado y observado;
- captura de pantalla solo cuando el problema sea visual;
- confirmación de que el fallo existe en una página individual y no requiere convertir la vista madre en una página pública.

## 9. Reglas para convertir fallos en PRs futuros

1. Corregir **un solo gap de producto por PR**.
2. No agrupar fixes no relacionados.
3. No agregar materiales comerciales, de ventas, propuestas o pitches.
4. No agregar funciones prohibidas: directorio, marketplace, rankings, búsqueda, filtros, reviews, ratings, CRM, lead capture, analytics, tracking, dashboard, login, pagos, cookies o base de datos.
5. Preferir mejoras de documentación, test harness o validación antes de cambiar comportamiento.
6. Cambiar comportamiento de la app únicamente cuando un gap reproducible demuestre fricción real en el flujo de una página individual.
7. No cambiar fórmulas o rangos para resolver un problema de presentación o cobertura.
8. Si el fallo depende de datos ausentes, separar la decisión de fixture/datos de cualquier cambio del motor.
9. Cada PR debe incluir el caso de matriz que falló, evidencia mínima, criterio de aceptación y pruebas de regresión relacionadas.
10. Si la solución empuja el producto hacia una función prohibida o una página pública de browsing, cerrar o reformular el follow-up en lugar de implementarlo.

## 10. Uso interno únicamente

Esta matriz es exclusivamente para QA y validación interna de producto. No es client-facing, no es un checklist de ventas, no es una propuesta comercial, no es un roadmap público y no debe publicarse como página de navegación. Su salida esperada es evidencia de calidad y, cuando corresponda, PRs pequeños y enfocados sobre gaps reales de páginas individuales.

## 11. Documentos internos relacionados

- [Checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md): recorrido ejecutable desde la entrada hasta el resultado, copias, handoff y regresión móvil.
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md): comprobación determinista con Node de `source`, `service`, `campaign`, `lang`, `zone` y valores hostiles.
- [Auditoría interna de cobertura de negocios demo](demo-business-coverage-audit.md): inventario actual de `businesses.js`, cobertura de rutas/contacto/estimador y gaps recomendados para fixtures futuros.
- [Guía interna de enlaces por fuente](source-links-guide.md): comportamiento esperado de `source`, `service`, `zone`, `lang` y `campaign`.
- [Checklist interno de prepublicación](pre-publish-checklist.md): controles técnicos y visuales antes de publicar una guía.
- [Guía interna de incorporación manual](onboarding-template.md): datos mínimos de una página individual.
- [Plantilla reutilizable de incorporación](templates/client-onboarding-intake.md): captura estructurada de servicios, zonas e información de contacto.
- [Guía interna para confirmar precios y rangos](confirm-prices-ranges-template.md): validación de lenguaje aproximado y datos aprobados.
- [Plantilla para confirmar precios y rangos](templates/confirm-prices-ranges.md): registro reusable de rangos y preguntas.
- [Guía interna del reporte manual](manual-report-template.md): comprobación manual de enlaces y estado de una página individual.
- [Plantilla de reporte manual](templates/manual-client-report.md): formato reusable para registrar verificaciones sin analytics.

Los documentos comerciales o de ventas quedan fuera de esta fase de validación de producto.
