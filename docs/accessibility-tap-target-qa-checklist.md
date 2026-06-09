# Checklist interno de QA de accesibilidad y tap targets para guías individuales

> **Uso interno únicamente para QA de usabilidad de producto.** Este checklist revisa la experiencia existente de una página individual, con foco en navegación por teclado, foco visible, controles legibles, uso táctil móvil y acciones de contacto seguras. No es material client-facing, de ventas, marketing, CRM, analytics, tracking, lead capture, marketplace, búsqueda, ranking ni directorio.

## 1. Propósito y alcance

Aplicar este checklist al flujo actual de una **guía individual**: entrada, selección de servicio y zona, respuestas del estimador, resultado aproximado, copia, reset, cambio de idioma y handoff de contacto permitido por el fixture.

Este documento observa el producto existente; no autoriza rediseñarlo. No cambiar rutas, slugs, shells generados, precios, rangos, fórmulas, lógica del estimador, comportamiento del estimador ni datos de negocios como parte de una corrida de QA. `/priceguide/` sigue siendo una vista interna de QA/demo y no debe convertirse en un directorio público.

Una revisión de código o un script no sustituye esta corrida manual en navegador. Registrar cada combinación de fixture, viewport y área revisada en la tabla de la sección 8.

## 2. Límites de seguridad obligatorios

- **Do not collect user information.** No recopilar nombres, teléfonos, correos ni ningún otro dato personal.
- **Do not send WhatsApp messages during QA.** Se puede comprobar que el handoff correcto queda preparado, pero se debe cancelar antes de enviar.
- **Do not place real phone calls during QA.** Se puede inspeccionar el enlace `tel:` o cancelar el prompt del dispositivo, sin iniciar la llamada.
- **Do not add forms.** No añadir formularios, campos de contacto ni mecanismos de lead capture.
- **Do not add tracking or analytics.** No añadir analytics, tracking, cookies, píxeles ni registro de eventos o visitas.
- **Do not interpret this checklist as market validation.** No valida demanda, precios de mercado, adquisición ni viabilidad comercial.
- **This is product usability QA only.** No es QA de ventas, marketing, CRM, marketplace, búsqueda, ranking, directorio o client-facing.
- No usar datos de una persona real en el estimador, clipboard o acciones de contacto.
- No añadir reviews, ratings, login, pagos, backend o base de datos para cerrar un hallazgo.

## 3. Fixtures obligatorios

Ejecutar la corrida contra todos los estados siguientes. Si el entorno necesita el prefijo de GitHub Pages, anteponer `/priceguide` a la ruta sin alterar el resto.

| Cobertura requerida | Fixture/página | Ruta individual | Enfoque adicional |
|---|---|---|---|
| WhatsApp confirmado | **Carmona Hnos Climas y Refrigeración** | `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | Handoff de WhatsApp, controles bilingües y expansión de texto en inglés. |
| WhatsApp pendiente/no confirmado + teléfono fallback | **Instal PV** | `/puerto-vallarta/electricista/instal-pv` | No mostrar WhatsApp utilizable; mantener claro y seguro el fallback de llamada. |
| Solo teléfono / WhatsApp ausente | **Fixture interno de control preventivo** | `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Enlace de llamada sin botón falso de WhatsApp. |
| Sin contacto, fixture interno de #73 | **Fixture interno QA sin contacto** | `/guadalajara/electricista/fixture-interno-sin-contacto` | Mensaje neutral; ninguna CTA falsa de WhatsApp o llamada. |
| Carmona para comportamiento bilingüe | **Carmona Hnos Climas y Refrigeración** | `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion?lang=en` | Toggle alcanzable, traducciones disponibles, wrapping y expansión en inglés. |
| Multi-servicio | **Plomería Mario** | `/los-cabos/plomeros/plomeria-mario` | Nombres y selección de cuatro servicios; cambiar de servicio sin perder claridad. |
| Zonas largas | **Fixture interno de control preventivo** | `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Revisar las ocho zonas y seleccionar una de nombre largo, por ejemplo `san-juan-de-ocotan`. |

Un mismo fixture puede cubrir más de un estado, pero cada cobertura requerida debe aparecer explícitamente en el registro. No inventar ni modificar datos para crear otro estado de contacto.

## 4. Viewports obligatorios

Ejecutar cada fixture en los cuatro anchos siguientes. Registrar el ancho desktop exacto y una altura suficiente para recorrer toda la página.

| Perfil | Ancho obligatorio | Referencia de altura | Qué observar |
|---|---:|---:|---|
| Mobile 360 | `360px` | `800px` aprox. | Caso estrecho, wrapping, separación y ausencia de scroll horizontal. |
| Mobile 390 | `390px` | `844px` aprox. | Legibilidad y uso táctil en un móvil intermedio. |
| Mobile 430 | `430px` | `932px` aprox. | Distribución de opciones, resultado y acciones en móvil ancho. |
| Desktop | `1280px` o mayor | `800px` aprox. | Orden de teclado, foco, jerarquía, lectura y separación de controles. |

En los tres anchos móviles, usar touch emulado o un dispositivo real además del recorrido por teclado cuando el entorno lo permita. Hacer scroll por la página completa y confirmar que ningún control requerido queda oculto, superpuesto o fuera del viewport.

## 5. Checklist de accesibilidad e interacción

### A. Navegación por teclado y foco visible

- [ ] Desde la parte superior, `Tab` alcanza todos los controles interactivos en un orden lógico y predecible.
- [ ] `Shift+Tab` permite volver por los mismos controles sin saltos inesperados ni trampas de foco.
- [ ] Servicio, zona, respuestas, idioma, copiar enlace, copiar resumen, reset y contacto son operables con teclado cuando están disponibles.
- [ ] Botones se activan con `Enter` y, cuando corresponde al elemento nativo, con `Space`; los enlaces se activan con `Enter`.
- [ ] El foco actual siempre tiene un indicador visible, distinguible y no recortado.
- [ ] El foco no depende únicamente de un cambio de color difícil de percibir.
- [ ] El estado seleccionado y el estado enfocado siguen siendo distinguibles entre sí.
- [ ] Ningún overlay, scroll o actualización del resultado deja el foco perdido o en un elemento que ya no existe.
- [ ] La selección de una respuesta o servicio no provoca un salto de foco que impida continuar el flujo.

### B. Claridad de botones, enlaces y nombres accesibles

- [ ] Cada botón y enlace tiene un texto visible o nombre accesible que explica su acción fuera de contexto.
- [ ] Los elementos interactivos se reconocen como interactivos; texto estático no parece botón y un botón no parece texto decorativo.
- [ ] Las etiquetas de **Copiar enlace**, **Copiar resumen**, **Reiniciar**, cambio de idioma y contacto no son ambiguas.
- [ ] El feedback después de copiar confirma qué se copió sin depender solo del color.
- [ ] No hay botones vacíos, labels truncados hasta ser incomprensibles, destinos `#` falsos ni acciones rotas.
- [ ] El texto visible y el nombre accesible no se contradicen.

### C. Tap targets, separación y uso con el pulgar

- [ ] Los controles principales son fáciles de tocar sin precisión excesiva; usar aproximadamente `44 × 44px` como objetivo práctico de QA, sin tratarlo como autorización para rediseñar.
- [ ] El área activable corresponde al control visible y no solo a una parte pequeña de su texto o icono.
- [ ] Botones y enlaces adyacentes tienen separación suficiente para evitar activar el vecino por error.
- [ ] Ningún target se solapa con otro ni queda tapado por contenido, footer o borde del viewport.
- [ ] Los controles más usados pueden alcanzarse y activarse razonablemente con el pulgar en móvil, permitiendo scroll normal cuando sea necesario.
- [ ] Las acciones secundarias no quedan tan cerca de la acción de contacto o reset que aumenten el riesgo de activación accidental.
- [ ] El zoom o tamaño de texto del navegador no convierte los controles en targets recortados o superpuestos.

### D. Botones de servicio y respuestas del estimador

- [ ] Todos los botones de servicio son visibles, legibles, distinguibles y fáciles de tocar.
- [ ] Los nombres largos de servicios envuelven en varias líneas sin truncarse, solaparse ni reducir excesivamente el target.
- [ ] Cambiar de servicio deja claro cuál está seleccionado y no rompe el orden del flujo.
- [ ] Cada pregunta del estimador y sus opciones se entienden juntas sin depender de posición o color únicamente.
- [ ] Todos los botones de respuesta son legibles y fáciles de tocar, incluso cuando hay varias opciones.
- [ ] Las respuestas adyacentes no están apretadas y el estado seleccionado es claro.
- [ ] La actualización entre preguntas no oculta el siguiente control ni genera scroll horizontal.

### E. Selector de zona e idioma

- [ ] El selector de zona tiene label comprensible y es alcanzable por teclado y tacto.
- [ ] Se puede abrir, recorrer y seleccionar una zona con teclado sin perder el foco.
- [ ] Los nombres largos de zona se leen completos o envuelven de forma comprensible; no quedan cortados de manera ambigua.
- [ ] El selector no desborda a `360px`, `390px` o `430px` y la selección visible no provoca scroll horizontal.
- [ ] El toggle de idioma permanece visible, alcanzable y fácil de tocar en todos los viewports.
- [ ] El estado/idioma activo se entiende sin depender únicamente del color.
- [ ] En Carmona, cambiar a inglés conserva el orden, los labels, el foco y la operabilidad del flujo.
- [ ] La expansión de texto en inglés, donde exista traducción, envuelve sin solapar controles, ocultar texto o provocar scroll horizontal.

### F. Resultado y legibilidad

- [ ] La tarjeta de resultado se distingue claramente del resto del contenido y mantiene un orden de lectura comprensible.
- [ ] El rango aproximado es prominente, legible y se entiende como aproximado, no como precio final garantizado.
- [ ] Moneda, números, separadores y rango se leen sin recorte ni ambigüedad.
- [ ] El rango y la tarjeta completa caben sin scroll horizontal en `360px`, `390px` y `430px`.
- [ ] El texto de contexto, la zona y el servicio elegidos no compiten visualmente con el rango.
- [ ] La tarjeta conserva legibilidad con nombres largos de servicio o zona y con expansión de texto en inglés.
- [ ] El footer y su disclaimer son legibles, envuelven correctamente y no quedan demasiado pequeños, cortados o cubiertos.
- [ ] La página completa no presenta overflow horizontal por resultado, footer, controles o texto largo.

### G. Copiar enlace, copiar resumen y reset

- [ ] **Copiar enlace** es alcanzable, fácil de tocar y comunica feedback comprensible.
- [ ] El enlace copiado corresponde a la guía individual y no convierte `/priceguide/` en una experiencia de directorio.
- [ ] **Copiar resumen** es alcanzable, fácil de tocar y sigue siendo comprensible antes y después del resultado.
- [ ] El resumen copiado mantiene la naturaleza aproximada del rango y no recopila información personal.
- [ ] **Reiniciar** tiene una etiqueta clara, no se confunde con contacto y no está tan cerca de otra acción que se active por accidente.
- [ ] Después de reset, el estado visual, el foco y las etiquetas permiten empezar otra vez sin confusión.
- [ ] Copy/reset permanecen comprensibles en español e inglés donde esas traducciones estén disponibles.

### H. Acciones de contacto seguras

#### WhatsApp confirmado

- [ ] El botón de WhatsApp tiene label claro, target cómodo y foco visible.
- [ ] El control prepara el destino esperado sin enviar automáticamente ningún mensaje.
- [ ] La acción no se solapa con copiar, reset u otra acción y no aparece rota.
- [ ] Cancelar el handoff permite volver a la guía sin estado confuso.

#### WhatsApp pendiente/no confirmado + teléfono fallback

- [ ] No se presenta el WhatsApp pendiente como acción utilizable o confirmada.
- [ ] El fallback de llamada tiene label claro, target cómodo, foco visible y un destino `tel:` coherente.
- [ ] El texto explica el estado sin crear un botón falso o una promesa de WhatsApp.
- [ ] Cancelar antes de llamar no rompe el flujo.

#### Solo teléfono / WhatsApp ausente

- [ ] No aparece una CTA de WhatsApp vacía, deshabilitada sin explicación o con destino roto.
- [ ] El enlace de llamada es legible, alcanzable, fácil de tocar y no queda pegado a otro control.
- [ ] La ausencia de WhatsApp no deja espacios, labels o ayudas huérfanas que confundan.

#### Sin contacto

- [ ] El estado muestra un fallback neutral, comprensible y legible.
- [ ] No muestra CTA falsa de WhatsApp, enlace `tel:`, botón `#`, formulario ni campo de contacto.
- [ ] El estimador, resultado, copiar enlace, copiar resumen, reset e idioma siguen utilizables.
- [ ] El mensaje sin contacto no tapa, desplaza de forma problemática ni se confunde con un error del estimador.

### I. Contraste, texto y adaptación visual

- [ ] Texto, controles, bordes importantes, estados seleccionados y foco tienen contraste suficiente contra su fondo.
- [ ] No se usa el color como único medio para comunicar selección, foco, éxito de copia, error o disponibilidad de contacto.
- [ ] Texto secundario, helper text, rango aproximado y disclaimer del footer siguen siendo legibles; anotar cualquier contraste dudoso para medición posterior.
- [ ] A `360px`, todo el texto y los controles envuelven sin superposición, recorte ni scroll horizontal.
- [ ] A `390px` y `430px`, el espacio adicional no crea targets demasiado separados de su label ni agrupaciones ambiguas.
- [ ] En desktop, el contenido no queda tan extendido que dificulte asociar labels, opciones y acciones.
- [ ] Nombres largos de servicios y zonas no rompen tarjetas, selectores, botones ni resultado.
- [ ] El modo inglés disponible no rompe botones, ayudas, tarjeta de resultado, acciones de contacto ni footer por expansión de texto.

## 6. Procedimiento mínimo por fixture y viewport

1. Abrir directamente la URL individual sin parámetros y confirmar que pertenece a un solo negocio.
2. Recorrer todos los controles con `Tab` y `Shift+Tab`; registrar orden y foco visible.
3. Repetir el flujo con touch o emulación táctil en móvil.
4. Seleccionar servicio y zona; en los fixtures correspondientes usar un nombre largo.
5. Contestar el estimador completo y revisar cada botón de respuesta.
6. Revisar tarjeta, rango aproximado, wrapping y ausencia de scroll horizontal.
7. Probar copiar resumen, copiar enlace y reset sin pegar contenido en servicios externos.
8. Revisar únicamente la preparación del handoff permitido; no enviar WhatsApp ni realizar llamadas.
9. En Carmona, repetir en inglés y observar expansión de texto, toggle y labels.
10. Registrar cada área como `pass`, `partial` o `fail`; no asumir un resultado por otro viewport.

## 7. Criterios de aceptación

Una página individual pasa esta QA **solo si se cumplen todos** los puntos siguientes:

- Las acciones primarias son fáciles de tocar.
- Los botones adyacentes no están apretados.
- El estado de foco es visible al usar teclado.
- Las opciones de servicio y respuestas son legibles.
- El rango del resultado se lee sin scroll horizontal.
- La acción de contacto no crea botones rotos.
- El estado sin contacto no muestra CTAs de contacto falsas.
- Las acciones de copiar y reset permanecen comprensibles.
- El toggle de idioma permanece alcanzable.
- No aparece comportamiento de búsqueda, directorio, ranking o lead capture.

Además, no puede marcarse `pass` si existe una barrera que impide completar el estimador, leer el resultado, entender el carácter aproximado del rango o reconocer el estado seguro de contacto.

### Definición de estados

- **pass:** el área cumple los checks aplicables en el fixture y viewport, sin barrera ni ambigüedad relevante.
- **partial:** el flujo se completa, pero existe un problema reproducible de legibilidad, foco, target, separación, wrapping, contraste o claridad que necesita seguimiento.
- **fail:** una barrera impide operar o entender una acción esencial, produce overflow que oculta contenido, presenta una acción de contacto rota/insegura o viola los límites del producto.

`N/A` puede escribirse en notas cuando un control no existe por diseño en ese fixture, pero no reemplaza el estado global del área revisada.

## 8. Tabla reutilizable de pass/fail

Copiar filas según sea necesario para cubrir todos los fixtures, viewports y áreas. Usar exactamente `pass`, `partial` o `fail` en **Status**.

| Fixture/page | Viewport | Check area | Status: pass / partial / fail | Issue observed | Follow-up PR needed? | Notes |
|---|---|---|---|---|---|---|
|  | `360px` |  |  |  | Yes / No / TBD |  |
|  | `390px` |  |  |  | Yes / No / TBD |  |
|  | `430px` |  |  |  | Yes / No / TBD |  |
|  | Desktop `____px` |  |  |  | Yes / No / TBD |  |

Áreas sugeridas para filas separadas: `keyboard/focus`, `service/answers`, `zone/language`, `result/readability`, `copy/reset`, `contact state`, `contrast/wrapping` y `scope boundaries`.

## 9. Regla para fixes opcionales

Este checklist es documentación de QA, no una autorización general para cambiar UI. Si una corrida descubre un problema pequeño, inequívoco y seguro, un follow-up puede limitarse a:

- corregir un `aria-label`;
- aclarar el label de un botón;
- preservar o restaurar un outline de foco;
- hacer un ajuste menor de CSS al tamaño o separación de un tap target.

No se permite usar un hallazgo para introducir rediseño, secciones nuevas, features nuevas, cambios de rutas, estimator changes, pricing changes o data changes. Tampoco se permiten cambios en fórmulas, slugs, shells generados o `businesses.js`.

Todo cambio de código opcional debe:

1. estar documentado explícitamente en el body de su PR;
2. ser verificable como un fix pequeño y enfocado;
3. conservar el comportamiento actual del estimador y las rutas;
4. ejecutar las validaciones automatizadas existentes además de repetir el check manual afectado.

## 10. Evidencia y seguimiento

Registrar fecha, tester, commit/PR, navegador, sistema operativo, URL base y viewport exacto. Las capturas son opcionales y solo deben documentar un hallazgo visual; no deben contener información personal.

Un follow-up debe describir el fixture, viewport, control, pasos de reproducción, resultado esperado, resultado observado y severidad. Mantenerlo en producto/QA. No convertir resultados de este checklist en market validation, material de ventas, analytics o una solicitud de nuevas features.

## 11. Documentos internos relacionados

- [Corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md)
- [Checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md)
- [Informe interno final de validación de producto](final-product-validation-report.md)
- [Matriz interna de validación de producto](product-validation-matrix.md)
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md)
