# Checklist interno E2E del flujo de una guía individual

> **Uso interno únicamente para QA y validación de producto.** Este documento valida si una página individual de Precios Locales funciona de principio a fin para una persona real. No es un guion de ventas, material client-facing, página pública del producto ni validación de demanda de mercado.

## 1. Propósito y alcance

Este checklist valida el recorrido real de una persona desde que entra a la URL de **un negocio individual** hasta que obtiene un rango estimado, copia el resumen o enlace y continúa por WhatsApp o llamada cuando los datos permiten ese handoff.

La prueba cubre:

- carga de página y contexto correcto del negocio;
- claridad del rango aproximado;
- selección de servicio y preguntas del estimador;
- claridad y seguridad del resultado;
- copia del resumen y del enlace;
- handoff a WhatsApp o fallback de llamada;
- fallback seguro cuando falta contacto;
- comportamiento de `source`, `service`, `campaign`, `lang` y `zone`;
- legibilidad móvil;
- ausencia de señales de directorio, marketplace, búsqueda o ranking.

Este checklist observa el comportamiento existente. No autoriza rediseños, cambios de rangos, fórmulas, rutas, slugs ni datos de negocios.

## 2. Preparación de una corrida

1. Servir la aplicación con el método local habitual o abrir el deployment que se desea validar.
2. Elegir uno o más fixtures de la tabla siguiente según la cobertura necesaria.
3. Abrir directamente la ruta individual; no usar ni crear una página pública para navegar negocios.
4. Registrar URL completa, parámetros, viewport, idioma y estado de contacto en la plantilla de la sección 8.
5. Completar primero el flujo sin parámetros y después las variantes URL aplicables.
6. Registrar `PASS`, `FAIL` o `N/A` para cada caso. `N/A` significa que no existe cobertura, no que el comportamiento pasó.
7. Para cada `FAIL`, conservar pasos mínimos para reproducir, comportamiento esperado/observado y captura solo si el fallo es visual.

## 3. Fixtures internos recomendados

No agregar ni modificar fixtures al ejecutar este checklist.

| Cobertura | Fixture y ruta recomendada | Qué valida |
|---|---|---|
| WhatsApp confirmado | **Carmona Hnos Climas y Refrigeración** — `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | Handoff principal a `wa.me`, contenido bilingüe y flujo multi-servicio. |
| Fallback con teléfono público | **Instal PV** — `/puerto-vallarta/electricista/instal-pv` | WhatsApp pendiente/no confirmado, ausencia de enlace `wa.me` utilizable y fallback `tel:`. |
| Fixture interno agregado en PR #65 | **Fixture interno de control preventivo** — `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Un servicio, una pregunta, dos opciones, WhatsApp ausente, teléfono simulado de QA, ocho zonas y tono profesional. |
| Negocio multi-servicio | **Plomería Mario** — `/los-cabos/plomeros/plomeria-mario` | Cuatro servicios, cantidades variables de preguntas/opciones, cambio de servicio y nombres con puntuación. |
| Zonas largas | **Fixture interno de control preventivo** — `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Ocho zonas, nombres compuestos, wrapping y selección móvil. |
| Comportamiento en inglés | **Carmona Hnos Climas y Refrigeración** — `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion?lang=en` | Campos ingleses sustantivos y fallback seguro a español donde corresponda. |
| `tone: "professional"` | **Fixture interno de control preventivo** — `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Branch explícito de tono profesional. |
| `tone: "friendly"` | **Plomería Mario** — `/los-cabos/plomeros/plomeria-mario` | Branch explícito de tono amistoso. |
| `tone: "technical"` | **Frío Express** — `/mazatlan/aire-acondicionado/frio-express` | Branch explícito de tono técnico. |
| Sin contacto utilizable | **Fixture interno QA sin contacto** — `/guadalajara/electricista/fixture-interno-sin-contacto` | Fallback neutral sin WhatsApp, `tel:`, acción rota ni campos de contacto; conserva estimador, copias y reset. |
| WhatsApp confirmado sin teléfono | **Missing fixture — do not block checklist; record as product validation gap.** | Handoff de WhatsApp sin depender de un fallback de llamada. No inventar datos para probarlo. |

Para una corrida mínima, probar Carmona, Instal PV, los fixtures internos de PR #65 y Task #73, y Plomería Mario. Añadir Frío Express cuando se requiera cobertura explícita del tono técnico.

## 4. Checklist principal del flujo de usuario

### A. Entrada

- [ ] Abrir la URL de una guía individual directamente.
- [ ] Confirmar que la página carga sin error, pantalla vacía ni redirección incorrecta.
- [ ] Confirmar que muestra el nombre correcto del negocio.
- [ ] Confirmar que ciudad y categoría corresponden a la ruta y al negocio.
- [ ] Confirmar que el contenido se entiende como la página de **un solo negocio individual**.
- [ ] Confirmar que no parece directorio, listado, marketplace, página de ranking, buscador ni página de filtros.
- [ ] Confirmar que no compara, recomienda, califica ni ordena negocios.

### B. Expectativa de precio

- [ ] Confirmar que la página usa lenguaje como estimación, rango o precio aproximado.
- [ ] Confirmar que no promete un precio final exacto.
- [ ] Confirmar que no aparece “cotización garantizada” ni una promesa equivalente.
- [ ] Confirmar que una persona entiende que el precio depende de los detalles del servicio.
- [ ] Confirmar que el copy no presenta el rango como sustituto de la confirmación final del negocio.

### C. Selección de servicio

- [ ] Confirmar que todos los servicios del negocio se muestran con nombres legibles.
- [ ] Confirmar que se puede seleccionar un servicio.
- [ ] Abrir la página con `?service={validServiceSlug}` y confirmar la preselección correcta.
- [ ] Abrirla con `?service=unknown-service` y confirmar que falla de forma segura, sin romper ni seleccionar un servicio incorrecto.
- [ ] Confirmar que una preselección válida no oculta los demás servicios.
- [ ] Cambiar del servicio preseleccionado a otro y confirmar que el nuevo flujo corresponde al servicio elegido.

### D. Preguntas del estimador

- [ ] Confirmar que las preguntas del servicio seleccionado aparecen completas.
- [ ] Confirmar que cada opción es visible, clickeable y tappable.
- [ ] Completar todas las preguntas hasta obtener un resultado.
- [ ] Cambiar una respuesta durante el flujo y confirmar que no aparece un estado roto, duplicado o incoherente.
- [ ] Cambiar de servicio después de responder y confirmar que no se mezclan respuestas incompatibles.
- [ ] Completar un ejemplo de un solo servicio con el fixture interno de PR #65.
- [ ] Completar un ejemplo multi-servicio con Plomería Mario o Carmona.

### E. Resultado

- [ ] Confirmar que el resultado aparece al completar las respuestas requeridas.
- [ ] Confirmar que el rango es legible y que mínimo/máximo no se confunden.
- [ ] Confirmar que servicio seleccionado y respuestas elegidas quedan claros.
- [ ] Confirmar que existe un mensaje de confianza/seguridad que explica el carácter aproximado, que el precio final depende de los detalles del servicio y que el negocio lo confirma directamente con el cliente.
- [ ] Confirmar que el lenguaje del resultado continúa siendo estimación, rango aproximado o precio aproximado.
- [ ] Confirmar que el resultado no implica una cotización final, exacta o garantizada.
- [ ] Confirmar que el siguiente paso corresponde al contacto disponible: enviar por WhatsApp confirmado, llamar al teléfono público o conservar el resumen/enlace cuando no hay contacto público.
- [ ] Confirmar que el resultado no cambió por `source`, `campaign` o `lang` salvo presentación/contexto permitido.
- [ ] Cuando existen `source` o `campaign`, confirmar que sus etiquetas se entienden como contexto manual del origen/enlace y no como atribución automática.

### F. Copiar resumen

- [ ] Pulsar el botón de copiar resumen y confirmar que funciona.
- [ ] Pegar el contenido en un campo de texto temporal para inspeccionarlo.
- [ ] Confirmar que incluye el nombre del negocio.
- [ ] Confirmar que incluye el servicio seleccionado.
- [ ] Confirmar que incluye las respuestas seleccionadas.
- [ ] Confirmar que incluye el rango estimado mostrado.
- [ ] Confirmar que incluye un disclaimer de precio aproximado y confirmación/precio final.
- [ ] Confirmar que incluye la etiqueta de fuente cuando `source` está presente y es reconocible.
- [ ] Confirmar que incluye contexto de campaña cuando `campaign` está presente y se conserva de forma segura.
- [ ] Confirmar que no incluye lenguaje de analytics, tracking, atribución automática, lead capture o CRM.
- [ ] Confirmar que valores hostiles o desconocidos no se interpretan como HTML o script ejecutable.

### G. Copiar enlace

- [ ] Confirmar que la acción de copiar enlace aparece cuando está disponible.
- [ ] Pulsarla, pegar el resultado en un campo temporal y abrirlo en una pestaña nueva.
- [ ] Confirmar que conserva la ruta individual actual del negocio.
- [ ] Confirmar que los parámetros soportados incluidos permanecen seguros y no rompen la página.
- [ ] Confirmar que el enlace copiado no crea navegación de directorio, búsqueda, filtros o marketplace.
- [ ] Si la acción no está disponible en el estado probado, marcar `N/A` y registrar el estado exacto; no agregar comportamiento desde este checklist.

### H. Handoff a WhatsApp o llamada

- [ ] En Carmona u otro fixture confirmado, pulsar WhatsApp y confirmar un enlace `https://wa.me/{numero}` válido.
- [ ] Confirmar que el número de `wa.me` corresponde al negocio y no está vacío o mal formado.
- [ ] Confirmar que WhatsApp pendiente, no confirmado o ausente no genera un enlace `wa.me` roto o engañoso.
- [ ] En Instal PV y en el fixture interno de PR #65, confirmar que aparece el fallback al teléfono público esperado.
- [ ] Confirmar que el enlace de llamada usa un `tel:` válido y el número del negocio.
- [ ] En el fixture interno de Task #73, confirmar que no aparecen botón de WhatsApp, enlace `tel:` ni acción `#` presentada como activa.
- [ ] Confirmar que aparece el mensaje neutral para guardar el resumen y contactar directamente al negocio solo cuando exista un canal válido.
- [ ] Confirmar que no aparecen campos de nombre, teléfono, email ni formulario; el estado no captura, envía ni almacena contacto.
- [ ] Confirmar que el mensaje de handoff mantiene lenguaje de estimación/rango aproximado y no promete un precio final.
- [ ] Confirmar que `source` y `campaign`, cuando están presentes, aparecen solo como contexto manual legible; no como analytics, tracking o reporte automático.
- [ ] Confirmar que el handoff no captura datos en la aplicación ni crea una ficha de lead.

### I. Reinicio

- [ ] Pulsar reset/reiniciar después de obtener un resultado.
- [ ] Confirmar que se limpia el estado de respuestas y resultado.
- [ ] Confirmar que se puede iniciar y completar otra estimación.
- [ ] Confirmar que no quedan respuestas de un servicio anterior.
- [ ] Confirmar que `source`, `service`, `campaign`, `lang` o `zone` no dejan el reset en un estado roto o incoherente.
- [ ] Si un servicio válido permanece preseleccionado por URL después del reset, confirmar que el comportamiento es consistente y que los demás servicios siguen disponibles.

## 5. Checklist de parámetros URL

Usar `{validServiceSlug}` y `{validZoneSlug}` del negocio elegido. Para el fixture interno de PR #65 se recomiendan `inspeccion-preventiva` y `san-juan-de-ocotan`.

Ejecutar primero el [harness interno de QA para parámetros URL](url-parameter-qa-harness.md). Después usar esta sección para validar en navegador el renderizado, la interacción, las copias y el handoff que el script sin browser no puede observar.

En todos los casos confirmar: carga segura, ruta individual intacta, ausencia de ejecución de HTML/script, rango/formulación sin cambios indebidos y posibilidad de completar el flujo.

| Variante | Verificación esperada | Resultado |
|---|---|---|
| Sin parámetros | Estado inicial normal de la guía individual. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=google-business-profile` | La fuente reconocida se conserva como contexto manual permitido. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=whatsapp-business` | La fuente reconocida se conserva sin crear tracking. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=qr-physical` | La fuente reconocida se conserva sin cambiar precios ni flujo. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=direct-link` | La fuente directa se conserva de forma segura. | ☐ PASS ☐ FAIL ☐ N/A |
| `?service={validServiceSlug}` | Preselecciona el servicio correcto; los demás continúan visibles. | ☐ PASS ☐ FAIL ☐ N/A |
| `?service=unknown-service` | Se ignora o falla de forma segura sin romper el flujo. | ☐ PASS ☐ FAIL ☐ N/A |
| `?campaign=promo-verano` | Conserva contexto manual seguro sin afectar el cálculo. | ☐ PASS ☐ FAIL ☐ N/A |
| `?campaign=<script>alert(1)</script>` | No ejecuta ni renderiza HTML/script; la página y el handoff permanecen seguros. Usar codificación URL si el navegador la requiere. | ☐ PASS ☐ FAIL ☐ N/A |
| `?lang=es` | Presenta la experiencia en español. | ☐ PASS ☐ FAIL ☐ N/A |
| `?lang=en` | Presenta inglés donde existe y fallback seguro donde falten campos traducidos. | ☐ PASS ☐ FAIL ☐ N/A |
| `?zone={validZoneSlug}` | Preselecciona la zona válida actualmente soportada. | ☐ PASS ☐ FAIL ☐ N/A |
| `?zone=unknown-zone` | Ignora la zona desconocida o falla de forma segura. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=google-business-profile&service={validServiceSlug}` | Conserva fuente y preselecciona servicio sin interferencia. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=qr-physical&service={validServiceSlug}&campaign=volante-junio` | Conserva los tres contextos soportados sin alterar cálculo ni seguridad. | ☐ PASS ☐ FAIL ☐ N/A |
| `?lang=en&source=direct-link&service={validServiceSlug}` | Aplica idioma, fuente y servicio juntos con fallback de traducción seguro. | ☐ PASS ☐ FAIL ☐ N/A |
| `?lang=es&source=whatsapp-business&service={validServiceSlug}&campaign=promo-junio` | Mantiene idioma, fuente, servicio y campaña durante resultado, copia y handoff. | ☐ PASS ☐ FAIL ☐ N/A |
| `?source=qr-physical&service=revision-electrica-demo&campaign=qa-no-contact&lang=en&zone=centro` | En el fixture sin contacto conserva contexto, preselecciones e inglés sin crear un canal de contacto. | ☐ PASS ☐ FAIL ☐ N/A |

`zone` está soportado actualmente. Si ese soporte cambia en una rama futura, registrar exactamente: **“Zone param not currently supported — expected behavior is safe ignore.”** No implementar soporte desde una corrida documental.

Además, para cada combinación:

- [ ] Confirmar que un parámetro inválido no invalida los demás parámetros válidos.
- [ ] Confirmar que ningún parámetro modifica rangos base, factores o fórmulas.
- [ ] Confirmar que los valores se tratan como contexto manual, no como medición o tracking.
- [ ] Confirmar que copy summary, copy link y handoff no exponen contenido ejecutable.

## 6. Checklist móvil

Ejecutar el flujo completo, no solo una inspección estática, en cada ancho:

- [ ] `360px`
- [ ] `390px`
- [ ] `430px`

En cada viewport validar:

- [ ] No existe scroll horizontal en entrada, selector, preguntas ni resultado.
- [ ] El resultado completo es legible sin zoom.
- [ ] El rango de precio hace wrapping seguro y no se corta ni se superpone.
- [ ] El resumen visible y el contenido pegado después de copiar son legibles.
- [ ] Opciones y botones son tappable y no se solapan.
- [ ] El orden de WhatsApp, llamada, copiar resumen, copiar enlace y reset/reinicio es claro según las acciones disponibles.
- [ ] Las ocho zonas del fixture interno de PR #65 no rompen el layout.
- [ ] Nombres largos de zonas no desbordan sus controles.
- [ ] Nombres largos de servicios, como los de Plomería Mario o Servicios Profesionales Martínez, no rompen el layout.
- [ ] El mensaje de confianza no desplaza, tapa ni satura visualmente el resultado.
- [ ] Los controles permanecen distinguibles en español e inglés.

## 7. Criterios generales de pass/fail

Un flujo obtiene `PASS` cuando la persona puede entrar a una guía individual, entender el contexto y carácter aproximado del precio, seleccionar y completar un servicio, leer el resultado, copiar resumen/enlace cuando estén disponibles y usar un handoff seguro permitido por los datos.

Un flujo obtiene `FAIL` cuando se rompe una acción requerida, se presenta información o contacto incorrecto, se promete un precio final, un parámetro rompe la experiencia, el móvil impide completar el recorrido o la aplicación adquiere señales de directorio/marketplace/ranking/búsqueda.

Usar `N/A` únicamente si el fixture o la acción no existe. Registrar la falta como gap cuando corresponda; no inventar datos ni cambiar el producto para convertir `N/A` en `PASS`.

## 8. Plantilla reutilizable de corrida

Copiar este bloque por cada negocio, viewport o combinación relevante:

```md
### Corrida E2E

- Fecha:
- Tester:
- Branch/PR:
- Ruta del negocio probada:
- Dispositivo/viewport:
- Parámetros URL probados:
- Estado de contacto: WhatsApp confirmado / WhatsApp pendiente / WhatsApp ausente / teléfono público / sin contacto / otro
- Idioma:
- Servicio probado:
- Rango de resultado mostrado:
- Copiar resumen: PASS / FAIL / N/A
- Copiar enlace: PASS / FAIL / N/A
- Handoff: PASS / FAIL / N/A
- Móvil: PASS / FAIL / N/A
- Issues encontrados:
- Severidad: High / Medium / Low / N/A
- ¿Se necesita PR de follow-up?: Sí / No / Por decidir
- Notas:
```

Para un fallo, añadir debajo:

```md
- Pasos mínimos para reproducir:
- Comportamiento esperado:
- Comportamiento observado:
- Evidencia/captura (solo si aplica):
- Fixture gap o product bug:
```

## 9. Niveles de severidad

### High

- Ruta o página rota.
- Estimador roto o imposible de completar.
- Enlace de WhatsApp roto o dirigido al número incorrecto.
- Falta de fallback de contacto seguro cuando el estado está representado.
- Promesa de precio final exacto o cotización garantizada.
- `source`, `service` o `campaign` rompe el flujo.
- La aplicación parece directorio, marketplace, ranking o búsqueda.

### Medium

- Resultado confuso o difícil de relacionar con las respuestas.
- Resultado móvil difícil de leer.
- Resumen copiado sin contexto útil.
- Enlace copiado confuso o que pierde contexto soportado importante.
- Copy de confianza poco claro.
- Zonas o nombres de servicio largos generan fricción de layout.

### Low

- Pulido menor de copy.
- Problemas pequeños de espaciado.
- Desajuste de documentación interna.
- Gap de fixture que no bloquea el flujo cubierto.

Si un hallazgo encaja en más de un nivel, usar el más alto según el impacto reproducible sobre la persona usuaria.

## 10. Reglas para follow-ups

1. Abrir un issue o PR por problema cuando sea posible; no agrupar fallos no relacionados.
2. Priorizar bugs de producto antes que pulido visual o de copy.
3. Resolver gaps de datos/fixtures antes de proponer cambios de comportamiento, siempre que el problema sea realmente de cobertura.
4. No crear documentos comerciales, materiales de ventas, propuestas, pitches ni guiones client-facing.
5. No agregar funciones prohibidas: directorio, marketplace, rankings, búsqueda, filtros, reviews, ratings, lead capture, analytics, tracking, dashboard, CRM, login, pagos, cookies o base de datos.
6. No cambiar fórmulas ni rangos salvo que un fallo reproducible de validación demuestre específicamente un problema de fórmula y el cambio se apruebe en un PR separado.
7. No cambiar rutas, slugs o datos para ocultar un fallo de UI o de estado.
8. Documentar URL, fixture, viewport, pasos, esperado y observado antes de proponer un cambio.
9. Si el arreglo convertiría `/priceguide/` en navegación pública, directorio o discovery de negocios, rechazar o reformular el follow-up.

## 11. Límites internos obligatorios

- Este checklist es **QA interno**.
- No es un guion de ventas.
- No es client-facing.
- No es una página pública del producto.
- No valida demanda de mercado.
- No crea analytics, tracking, CRM, reporting ni lead capture.
- No autoriza reviews, ratings, rankings, search, filters, marketplace o directory behavior.
- No autoriza backend, dashboard, login, pagos, cookies ni base de datos.
- No añade rutas públicas ni convierte `/priceguide/` en un directorio.
- No modifica precios, fórmulas, lógica del estimador, negocios o canales de contacto.

La salida esperada de una corrida es evidencia interna de calidad y, solo cuando existe un fallo reproducible, un follow-up pequeño y enfocado.

## 12. Documentos internos relacionados

- [Corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md): instrucciones, viewports, fixtures y tabla `PASS`/`PARTIAL`/`FAIL` para ejecutar y registrar la validación visual en navegador.
- [Checklist interno de QA de accesibilidad y tap targets](accessibility-tap-target-qa-checklist.md): validación enfocada de teclado, foco, claridad de controles, targets móviles, resultado, wrapping y handoff seguro.
- [Informe interno final de validación de producto](final-product-validation-report.md): usa este checklist como evidencia para cerrar los estados visuales e interactivos que permanecen parciales.
- [Matriz interna de validación de producto](product-validation-matrix.md): dimensiones generales, reglas de pass/fail y límites de producto.
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md): validación determinista sin navegador para parámetros individuales, combinados y hostiles.
- [Auditoría interna de cobertura de negocios demo](demo-business-coverage-audit.md): inventario vigente de fixtures y gaps de cobertura.
- [Guía interna de enlaces por fuente](source-links-guide.md): contrato esperado para parámetros URL y contexto manual.
- [Checklist interno de prepublicación](pre-publish-checklist.md): controles antes de publicar una guía individual.
