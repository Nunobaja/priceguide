# Informe interno final de validación de producto

> **Uso interno únicamente.** Este informe consolida la validación de producto de la fase cubierta por las Tasks #63–#71. No es material para clientes, ventas, marketing, propuestas, pitch, CRM, captación de leads, analytics ni publicación como roadmap.

## 1. Propósito del informe

Este informe responde una pregunta de producto:

> **¿Precios Locales es actualmente coherente como un motor estático reutilizable de guías de precios aproximados para páginas individuales de negocios locales?**

**Respuesta corta:** sí, para validación interna de demos. La estructura de rutas individuales, configuración por negocio, estimador, lenguaje de rango aproximado, resultado, handoff seguro, parámetros URL y documentación interna forman un producto coherente sin backend. La [corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md) ya documenta viewports, fixtures, checks y criterios de aceptación, pero su existencia no equivale a haber ejecutado las pruebas. La conclusión todavía no aprueba un piloto con un negocio real: cada página o piloto futuro necesita una corrida visual/manual registrada en navegador; el estado sin contacto ya tiene fallback seguro y fixture interno, y Task #76 añade un segundo fixture bilingüe interno, en jardinería, con WhatsApp confirmado como único contacto.

La evaluación resume el estado acumulado después de:

- #63: matriz de validación de producto;
- #64: auditoría de cobertura de negocios demo;
- #65: fixture mínimo interno de cobertura demo;
- #66: checklist E2E del flujo de una guía individual;
- #67: harness de QA para parámetros URL;
- #68: pulido móvil del resultado, handoff y tap targets;
- #69: pulido de claridad del resultado del estimador;
- #70: alineación del wording del repositorio;
- #71: simplificación above the fold;
- #73: fallback seguro sin contacto y fixture interno;
- #74: documentación de la corrida manual visual E2E (pendiente de ejecución por página/piloto).

Este informe valida coherencia y preparación del producto actual. No valida demanda de mercado, exactitud comercial de precios ni readiness de ventas.

## 2. Definición actual del producto

**Precios Locales es una app estática de GitHub Pages para publicar páginas individuales con guías de precios aproximados de negocios locales de Home Services en México.**

Patrón de ruta principal:

```text
/priceguide/{citySlug}/{categorySlug}/{businessSlug}/
```

Reglas esenciales del producto:

- Existe **una página individual por negocio**.
- Los importes son **rangos aproximados**, no cotizaciones ni precios finales.
- El **precio final se confirma directamente con el negocio**.
- `/priceguide/` es una **utilidad interna de QA/demo para revisar rutas**.
- Solo deben compartirse las **URLs individuales de negocios**.
- El motor se publica como archivos estáticos y no necesita backend para renderizar las guías configuradas.

## 3. Límites estrictos del producto

### Precios Locales no es

- Directorio.
- Marketplace.
- Sistema de rankings.
- Motor de búsqueda.
- CRM.
- Sistema de captación de leads.
- Dashboard de analytics.
- Sistema de tracking.
- Sistema de reservas.
- Sistema de pagos.
- Plataforma de reviews o ratings.
- Portal público de navegación.

La ruta `/priceguide/` debe conservar su función interna de QA/demo. No debe evolucionar hacia búsqueda, filtros, comparación, rankings, exploración pública de negocios ni navegación tipo directorio.

## 4. Criterio de estado

- **pass:** existe evidencia suficiente en el repositorio o en checks automatizados para la fase actual.
- **partial:** la capacidad existe, pero falta cobertura completa de fixture o verificación manual/visual en navegador.
- **gap:** falta una capacidad o un estado necesario para cerrar la validación indicada.
- **not applicable:** la capacidad no pertenece al producto definido.

Un estado `partial` no autoriza a inventar datos ni a cambiar fórmulas para convertirlo en `pass`.

## 5. Resumen de validación

| Área de validación | Estado actual | Evidencia | Riesgo | ¿Follow-up necesario? |
|---|---|---|---|---|
| Individual route rendering | pass | El renderer admite el prefijo `/priceguide`; existen shells de rutas y el preflight/validador comprueba las rutas configuradas. | Bajo: una ruta nueva aún debe pasar el flujo normal de publicación. | Sí, smoke test por cada alta real. |
| `/priceguide/` internal QA behavior | pass | README, renderer y documentación lo definen como vista interna de QA/demo y revisión de rutas. | Bajo: un cambio futuro de wording o navegación podría hacerlo parecer directorio. | Sí, conservar esta restricción en QA. |
| Business metadata | pass | `businesses.js` centraliza identidad, ubicación, contacto, zonas, servicios, preguntas y rangos; la auditoría documenta once fixtures actuales, incluido uno interno sin contacto. | Medio: la calidad de una página nueva depende de datos revisados. | Sí, validación de datos por alta. |
| Above-the-fold clarity | partial | Task #71 redujo contenido inicial y enfocó identidad, propósito aproximado y comienzo del estimador. | Falta confirmación visual final en viewports reales. | Sí, QA manual en navegador. |
| Service selection | partial | El renderer genera opciones desde servicios configurados y el harness valida preselección válida/inválida por URL. | No se ejecutó interacción manual de todos los fixtures en browser en esta fase. | Sí, checklist E2E manual. |
| Estimator questions | partial | Los fixtures cubren estructuras múltiples y una estructura mínima de una pregunta con dos opciones. | Pueden quedar problemas visuales o de reset no detectados sin navegador. | Sí, checklist E2E manual. |
| Zone selection | partial | Las zonas son obligatorias en el flujo; existe fixture de ocho zonas y el harness confirma `zone` soportado. | Wrapping, overflow y tap behavior requieren QA visual móvil. | Sí, QA manual móvil. |
| Estimate calculation | pass | El flujo calcula desde rangos y factores configurados; validadores comprueban estructura numérica. Tasks #63–#71 no cambiaron la lógica como parte de este informe. | La validación no certifica exactitud de mercado ni sustituye confirmación del negocio. | Sí, confirmar datos antes de publicar cada negocio. |
| Approximate price language | pass | README y UI alinean el resultado como rango aproximado y remiten el precio final al negocio. | Bajo: copy futuro podría volver a sonar definitivo. | Sí, mantenerlo en smoke tests. |
| Result clarity | partial | Task #69 reforzó jerarquía, resumen, explicación del rango y siguiente paso. | Falta validación visual manual final en navegador. | Sí, QA visual. |
| Mobile result readability | partial | Tasks #68 y #69 mejoraron acciones móviles, legibilidad y handoff. | La ejecución actual no dispone de evidencia de browser/viewports reales. | Sí, QA en móvil o emulación. |
| Copy summary | partial | Existe acción separada para copiar el resumen y feedback de estado. | Clipboard, contenido final y feedback no se verificaron manualmente en browser en esta fase. | Sí, E2E manual. |
| Copy link | partial | Existe acción separada para copiar la URL individual y feedback de estado. | Clipboard y preservación visual de contexto necesitan prueba manual. | Sí, E2E manual. |
| Confirmed WhatsApp handoff | partial | Hay seis fixtures con WhatsApp confirmado; el código usa `wa.me` solo cuando el contacto está confirmado. | No se abrió el handoff real en navegador durante esta validación documental. | Sí, prueba manual sin enviar mensaje. |
| Pending/unconfirmed WhatsApp fallback | pass | Tres fixtures representan WhatsApp pendiente; el CTA activo se oculta y se ofrece llamada cuando hay teléfono público. | Bajo mientras el contrato `whatsappConfirmed: false` se mantenga. | Sí, regresión E2E periódica. |
| Public phone fallback | pass | Los fixtures con WhatsApp pendiente o ausente y teléfono público mantienen la llamada por `tel:`. | Task #76 cubre WhatsApp confirmado como único contacto con un número ficticio reservado para QA. | Sí, conservar la regresión de llamada. |
| No-contact fallback | pass | Task #73 oculta WhatsApp, `tel:` y campos opcionales cuando no existe contacto; muestra copy neutral y mantiene resumen, enlace y reset. El fixture interno dedicado cubre el estado. | Bajo mientras no se reintroduzca una acción rota o captura de contacto. | Sí, regresión E2E periódica. |
| `source` URL param | pass | El harness cubre cuatro fuentes permitidas, fuente desconocida y valores hostiles. | Bajo; no debe transformarse en analytics o atribución almacenada. | No para esta fase. |
| `service` URL param | pass | El harness valida servicio válido, inválido y combinación con otros parámetros. | Bajo; los IDs/slugs nuevos deben seguir siendo estables. | Sí, corrida automatizada tras cambios de datos. |
| `campaign` URL param | pass | El harness valida valores permitidos, vacío, longitud excesiva y contenido hostil. | Bajo; debe seguir siendo contexto efímero, no tracking. | No para esta fase. |
| `lang` URL param | pass | El harness valida `es`, `en` y fallback seguro para idioma no soportado. | La profundidad real del inglés depende del fixture. | Sí, ampliar fixture bilingüe solo si QA lo requiere. |
| `zone` URL param | pass | El soporte actual se detecta y valida con zona configurada y zona desconocida ignorada de forma segura. | Una regresión futura podría retirar soporte o desalinear slugs. | Sí, mantener documentación y harness sincronizados. |
| Combined URL params | pass | El harness cubre combinaciones de fuente, servicio, campaña, idioma y valores hostiles; 100/100 casos pasan actualmente. | Bajo mientras no se agregue persistencia o comportamiento analítico. | No para esta fase. |
| Spanish copy | pass | Español es la experiencia base y todos los fixtures permanecen utilizables en español. | Bajo; revisar copy por negocio al publicar. | Sí, revisión editorial por alta. |
| English behavior where available | partial | Carmona y el fixture interno bilingüe de jardinería ofrecen cobertura inglesa sustantiva en dos categorías; otros fixtures prueban traducción parcial o fallback seguro a español. | La cobertura ya no depende solo de Carmona, pero esto no significa que todos los fixtures estén completamente traducidos. | Sí, mantener regresión bilingüe en ambos fixtures y documentar fallbacks restantes. |
| Tone variants | pass | La cobertura demo incluye los cuatro estados de tono, incluido `professional` explícito en el fixture interno. | Bajo; la diferenciación visual/textual aún puede requerir revisión manual. | Opcional, dentro de QA de copy. |
| Demo fixture coverage | partial | Once fixtures cubren ciudades, categorías, rangos, servicios múltiples/mínimos, zonas largas, idiomas y estados de contacto confirmado, pendiente, solo teléfono y sin contacto. | La traducción completa sigue limitada a fixtures concretos y requiere QA visual. | Sí, conservar el fixture ficticio interno sin reutilizarlo como contacto real. |
| Internal QA documentation | pass | Existen matriz, auditoría, fixture documentado, checklist E2E, harness URL y este informe consolidado. | Bajo: los documentos pueden divergir si no se enlazan y actualizan juntos. | Sí, mantener cross-links y estados. |
| Repo wording consistency | pass | Task #70 alineó README, UI y matriz con páginas individuales, rangos aproximados y límites del producto. | Un documento histórico todavía podría introducir lenguaje comercial fuera de esta validación; no cambia la definición actual. | Sí, revisar wording en PRs de producto. |
| Prohibited feature avoidance | pass | La app permanece estática y no añade búsqueda, filtros, reviews, ratings, rankings, marketplace, directorio público, backend, CRM, login, pagos, analytics, cookies, tracking ni lead capture. | Scope creep futuro. | Sí, mantener como criterio bloqueante. |

## 6. Hallazgos por task

### #63: Product validation matrix

- **Qué añadió o mejoró:** creó una matriz reutilizable para revisar rutas individuales, estados de contacto, servicios, zonas, rangos, idiomas, parámetros URL, móvil y flujo completo.
- **Por qué importa:** convirtió la validación en criterios explícitos y repetibles sin redefinir el producto como directorio o plataforma.
- **Riesgo restante:** la matriz es un instrumento; varios checks visuales e interactivos siguen necesitando una corrida manual documentada.

### #64: Demo business coverage audit

- **Qué añadió o mejoró:** inventarió los fixtures y comparó ciudades, categorías, servicios, zonas, idiomas, tonos, rangos y estados de contacto.
- **Por qué importa:** separó defects de producto de simples gaps de datos y evitó “resolver” cobertura inventando negocios o cambiando fórmulas.
- **Riesgo restante:** Task #73 cubre teléfono ausente sin contacto y Task #76 cubre WhatsApp confirmado como único contacto con datos ficticios de QA.

### #65: Minimal internal demo coverage fixture

- **Qué añadió o mejoró:** incorporó un fixture ficticio e interno con un servicio, una pregunta mínima, ocho zonas, WhatsApp ausente, teléfono simulado y tono profesional explícito.
- **Por qué importa:** cerró gaps de estructura mínima, lista larga de zonas, WhatsApp ausente con teléfono y branch de tono profesional sin usar un negocio real.
- **Riesgo restante:** Task #76 cubre después WhatsApp confirmado como único contacto; Task #73 cubre ausencia total de contacto.

### #66: E2E guide user-flow checklist

- **Qué añadió o mejoró:** documentó el recorrido desde entrada a una URL individual hasta selección, estimación, resultado, copias y handoff seguro, incluyendo móvil y parámetros.
- **Por qué importa:** ofrece una forma consistente de validar la experiencia real que los checks Node no pueden observar.
- **Riesgo restante:** el checklist todavía debe ejecutarse en un navegador real o emulado para cerrar los estados `partial` visuales e interactivos.

### #67: URL parameter QA harness

- **Qué añadió o mejoró:** creó un check Node determinista para `source`, `service`, `campaign`, `lang`, `zone` y combinaciones seguras sobre fixtures existentes.
- **Por qué importa:** detecta regresiones de parsing y contexto sin almacenar visitas, añadir analytics ni depender de browser automation.
- **Riesgo restante:** no prueba DOM, layout, clipboard, apertura de WhatsApp/llamada ni cálculo visual completo.

### #68: Mobile result handoff/tap target polish

- **Qué añadió o mejoró:** ajustó el área de acciones del resultado para mejorar sus tap targets y uso móvil.
- **Por qué importa:** reduce errores al copiar o elegir el siguiente paso después de obtener el rango.
- **Riesgo restante:** falta evidencia manual en dispositivos/viewports reales.

### #69: Estimator result clarity polish

- **Qué añadió o mejoró:** aclaró la jerarquía del resultado, el carácter aproximado, el resumen, las acciones de copia y el handoff.
- **Por qué importa:** ayuda a evitar que el usuario interprete el rango como precio final y separa mejor resultado de acción de contacto.
- **Riesgo restante:** falta validación visual y de clipboard/handoff en navegador.

### #70: Repo wording alignment

- **Qué añadió o mejoró:** alineó wording de README, UI y QA con una página individual por negocio, rangos aproximados y confirmación final directa.
- **Por qué importa:** elimina señales que podían empujar el producto hacia directorio, lead capture o promesa de precio definitivo.
- **Riesgo restante:** cualquier documento o copy futuro debe conservar la misma definición y límites.

### #71: Above-the-fold simplification

- **Qué añadió o mejoró:** simplificó el encabezado y el contenido inicial de las guías individuales para llegar antes al propósito y al estimador.
- **Por qué importa:** mejora foco y coherencia sin rediseñar el producto ni añadir comportamiento.
- **Riesgo restante:** falta confirmar visualmente la jerarquía final en móvil y desktop.


### #73: Safe no-contact fallback and internal fixture

- La guía individual ahora muestra un mensaje neutral cuando no hay WhatsApp confirmado ni teléfono público.
- No presenta botón de WhatsApp, enlace `tel:`, acción `#` activa ni campos para nombre/teléfono en ese estado.
- El fixture interno `/priceguide/guadalajara/electricista/fixture-interno-sin-contacto/` valida estimador, zonas, idiomas, resumen, enlace, reset y parámetros URL.
- Este flujo no es lead capture, CRM, analytics, tracking ni recolección de contacto; no envía ni almacena información.

## 7. Fortalezas actuales

- El motor estático funciona sin backend.
- El patrón de ruta de página individual es claro.
- La experiencia above the fold es más limpia.
- El posicionamiento de rango aproximado es más claro.
- El flujo de resultado y handoff es más seguro.
- Existe QA de parámetros URL.
- La documentación interna ya guía la validación.
- La cobertura demo incluye más edge cases.
- El wording del repositorio ya no apunta hacia una dirección de directorio o lead capture.

## 8. Gaps restantes de producto

1. **WhatsApp confirmado como único contacto:** sigue sin fixture; no debe inventarse un número utilizable para cerrar el gap.
2. **QA visual/manual:** ya existe la [corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md), y el fallback sin contacto de Task #73 forma parte obligatoria de sus checks en desktop y móvil; aún debe ejecutarse y registrarse por página o piloto.
3. **QA visual en navegador:** esta validación automatizada/documental no confirma por sí sola layout, wrapping, tap targets, clipboard, preparación real de `wa.me`/`tel:` ni legibilidad en viewports móviles y desktop.
4. **Cobertura bilingüe aún parcial:** Carmona y el fixture interno de jardinería cubren inglés sustantivo en dos categorías, por lo que la regresión ya no depende de Carmona sola; varios fixtures siguen usando traducción parcial o fallback a español.
5. **Cobertura de ciudades/categorías:** la diversidad actual es suficiente para demo interno, pero algunas categorías solo tienen un ejemplo. Solo debe añadirse otro fixture si responde a un riesgo de engine concreto, no por volumen.
6. **Comportamiento de `zone`:** está soportado actualmente y pasa el harness. La documentación debe seguir diciendo explícitamente que una zona desconocida se ignora de forma segura y que, si el soporte cambia, el harness debe reportarlo sin implementar funcionalidad nueva.

Estos gaps son de producto/QA. No justifican tareas de ventas, marketing, analytics, tracking, CRM, marketplace, búsqueda o directorio.

## 9. Recomendación final de producto

### Ready for internal demo validation

Precios Locales es coherente en la fase actual como motor estático reutilizable de páginas individuales de guías de precios aproximados. Las rutas, datos configurables, estimador, lenguaje de precio aproximado, resultado, handoff, parámetros URL y límites de alcance están suficientemente alineados para ejecutar demos y validación interna controlada.

Esta recomendación **no** aprueba todavía un piloto con un negocio real. Antes de elevar la recomendación a “Ready for limited real-business pilot”, debe ejecutarse y registrarse como mínimo la [corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md) en navegador sobre desktop y los anchos móviles definidos, incluido el fallback seguro sin contacto. La disponibilidad del runbook no cambia por sí sola los estados visuales `partial`.

La recomendación es exclusivamente de producto. No considera demanda, adquisición, ventas, marketing ni viabilidad comercial.

## 10. Siguientes PRs sugeridos de producto/QA

1. **Ejecutar y registrar la corrida E2E visual/manual del fallback sin contacto** en desktop y los anchos móviles definidos, sin enviar ni recolectar datos.
2. **Ejecutar y registrar la corrida E2E visual/manual** por página/piloto para above the fold, zonas largas, resultado, copias y handoff; adjuntar screenshots solo cuando documenten un hallazgo visual.
3. **Ejecutar QA de accesibilidad y tap targets** sobre selección, resultado y acciones móviles sin rediseñar la interfaz.
4. **Mantener la regresión bilingüe cruzada** sobre Carmona y el fixture interno de jardinería, declarando con honestidad los fallbacks de los demás fixtures.
5. **Crear un smoke-test final para una página de negocio real** que confirme ruta individual, datos aprobados, rango aproximado, copy, contacto y publicación antes de compartir su URL.

No se recomiendan PRs de ventas, marketing, pitch, landing pages, CRM, lead capture, analytics, tracking, marketplace, directorio, búsqueda, filtros, rankings, reviews o ratings.

## 11. Límites internos de este informe

- Este informe es interno.
- No es client-facing.
- No es un documento de ventas.
- No es un roadmap público.
- No valida demanda de mercado.
- Solo valida la preparación actual del producto como motor estático de páginas individuales de guía.
- No certifica precios finales ni exactitud de mercado; los rangos siguen siendo aproximados y el negocio confirma el precio final.
- No autoriza publicar `/priceguide/` como portal de navegación pública.

## 12. Evidencia interna relacionada

- [Checklist interno final de smoke test para una guía de negocio real](real-business-smoke-test-checklist.md)
- [Matriz interna de validación de producto](product-validation-matrix.md)
- [Auditoría interna de cobertura de negocios demo](demo-business-coverage-audit.md)
- [Checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md)
- [Corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md)
- [Checklist interno de QA de accesibilidad y tap targets](accessibility-tap-target-qa-checklist.md)
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md)
