# Gate de validación de claridad del resultado estimado

> **QA interno únicamente.** Este registro define el gate previo a Task #72. No inicia ni autoriza cambios de copy, jerarquía, markup, estilos o comportamiento. Task #72 permanece cerrada mientras no exista evidencia reproducible de ambigüedad en un resultado del estimador.

## Decisión actual

**Gate: CERRADO — no hay evidencia reproducible registrada que autorice Task #72.**

La existencia de este documento, una opinión general, una preferencia de redacción o una revisión aislada de código no cuentan como evidencia de ambigüedad. Tampoco se debe interpretar la ausencia de evidencia como un `PASS` de claridad: significa únicamente que todavía no se ha demostrado la condición necesaria para abrir el trabajo de polish.

## Objetivo

Determinar, mediante una corrida observada en navegador real o emulado, si una persona puede interpretar correctamente el resultado de una guía individual sin confundir:

- el rango aproximado con un precio final, una cotización o una garantía;
- el monto estimado con otro dato del resumen;
- el servicio, la zona o las respuestas que produjeron el resultado;
- la acción siguiente con una promesa de contacto o confirmación automática;
- el resultado mostrado con el texto copiado o preparado para el handoff.

Este gate evalúa **comprensión y jerarquía semántica**. Problemas exclusivamente de wrapping, overflow, tamaño o crowding móvil pertenecen al gate de Task #71, salvo que además produzcan una interpretación ambigua demostrable.

## Condición necesaria para abrir Task #72

Task #72 solo puede proceder si al menos un caso registra todos estos elementos:

1. **Entorno exacto:** fecha, tester, branch y commit, navegador, sistema operativo, viewport y URL completa.
2. **Estado reproducible:** fixture, idioma, servicio, zona, respuestas y parámetros URL necesarios para obtener el mismo resultado.
3. **Ambigüedad observada:** descripción concreta de dos o más interpretaciones plausibles del copy o de la jerarquía actual.
4. **Evidencia:** captura sin datos personales y/o transcripción breve del texto visible, indicando el elemento exacto que causa la ambigüedad.
5. **Repetición:** el mismo problema se reproduce desde una recarga limpia al menos dos veces con los mismos pasos.
6. **Control:** se confirma que no lo causa zoom no estándar, traducción automática, extensión, CSS inyectado, caché obsoleta o una ruta distinta del commit registrado.
7. **Límite del cambio:** se identifica una corrección mínima de presentación o wording que no altere cifras, rangos, factores, fórmulas, datos de negocio, rutas ni comportamiento de contacto.

Si falta cualquiera de estos elementos, el caso queda como `PARTIAL` y **no autoriza** Task #72.

## Casos que no abren el gate

No constituyen evidencia suficiente por sí solos:

- “podría ser más claro”, “no me gusta el texto” o feedback equivalente sin pasos de reproducción;
- una propuesta de copy o diseño presentada antes de observar un fallo;
- diferencias de preferencia editorial que conservan una sola interpretación razonable;
- revisión estática de `app.js`, snapshots de markup o scripts sin navegador;
- un problema puramente visual que no cambia la interpretación del resultado;
- falta de navegador, captura o datos completos de la corrida;
- una confusión causada únicamente por precios o datos no aprobados;
- evidencia de otra rama, commit o deployment que no pueda identificarse.

## Cobertura mínima de la corrida

Antes de concluir el gate, completar y comparar estos estados representativos siguiendo la [corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md):

| Estado | Fixture / ruta | Variante mínima | Pregunta de claridad |
|---|---|---|---|
| Español + WhatsApp confirmado | Carmona Hnos Climas y Refrigeración — `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | `instalacion-climas`, zona `cabo-san-lucas` | ¿Se distingue el rango aproximado del precio final y del CTA? |
| Inglés + WhatsApp confirmado | Misma ruta de Carmona | `?lang=en`, mismo servicio y zona | ¿La traducción conserva una interpretación única del estimate y de la confirmación final? |
| Teléfono fallback | Instal PV — `/puerto-vallarta/electricista/instal-pv` | `diagnostico-reparacion-fallas`, zona `puerto-vallarta` | ¿El resultado no implica que WhatsApp esté disponible o confirmado? |
| Sin contacto | Fixture interno QA sin contacto — `/guadalajara/electricista/fixture-interno-sin-contacto` | `revision-electrica-demo`, zona `centro` | ¿La acción segura posterior no parece promesa de seguimiento? |
| Multi-servicio | Plomería Mario — `/los-cabos/plomeros/plomeria-mario` | Completar dos servicios distintos desde reset limpio | ¿Cada resultado se atribuye inequívocamente al servicio y respuestas actuales? |

Ejecutar al menos un viewport desktop y uno móvil. Registrar `360px`, `390px` y `430px` cuando la supuesta ambigüedad dependa del ancho o de la jerarquía responsive.

## Procedimiento de validación

1. Servir el commit exacto y registrar la metadata antes de interactuar.
2. Abrir la ruta sin parámetros, hacer una recarga limpia y completar el estado indicado.
3. Sin consultar el código, leer la tarjeta de resultado y anotar qué significa el monto, quién confirma el precio final y cuál es el siguiente paso.
4. Inspeccionar el resumen visible, **Copiar resumen**, **Copiar enlace** y el handoff disponible sin enviar mensajes ni iniciar llamadas.
5. Repetir desde reset o recarga limpia usando exactamente las mismas selecciones.
6. Ejecutar el estado de control más cercano para determinar si el problema es específico del idioma, contacto, servicio, viewport o parámetros.
7. Clasificar el caso conforme a la tabla siguiente y adjuntar evidencia solo si no contiene información personal.

## Clasificación y decisión

| Estado | Criterio | Decisión sobre Task #72 |
|---|---|---|
| `PASS` | El resultado tiene una interpretación consistente; se entiende como rango aproximado y el precio final queda sujeto a confirmación directa del negocio. | No abrir. |
| `PARTIAL` | La corrida quedó incompleta, bloqueada, no repetida o sin evidencia suficiente. | No abrir; repetir validación. |
| `FAIL — AMBIGÜEDAD REPRODUCIBLE` | Se documentan interpretaciones plausibles en conflicto y se cumplen los siete requisitos del gate. | Puede proponerse abrir #72 con alcance mínimo ligado a esa evidencia. |
| `FAIL — FUERA DE ALCANCE` | El fallo es real, pero corresponde a datos, cálculo, contacto, ruta, legibilidad pura u otra área. | No abrir #72; registrar el problema en el flujo autorizado correspondiente. |

Un `FAIL` aislado no autoriza cambios generales. El PR eventual de #72 deberá citar el registro exacto, limitarse al elemento demostrado y comparar el mismo caso antes/después sin cambiar resultados numéricos.

## Plantilla obligatoria de evidencia

Copiar una fila por intento. No completar campos por inferencia.

| Campo | Registro |
|---|---|
| Fecha / tester |  |
| Branch / commit / deployment |  |
| Navegador / SO / viewport |  |
| URL completa |  |
| Fixture / idioma |  |
| Servicio / zona / respuestas |  |
| Parámetros URL |  |
| Pasos desde carga limpia |  |
| Texto o jerarquía ambigua |  |
| Interpretación A |  |
| Interpretación B |  |
| Repetición 1 | PASS / FAIL / BLOCKED |
| Repetición 2 | PASS / FAIL / BLOCKED |
| Control ejecutado |  |
| Evidencia adjunta | Ruta local o `N/A` |
| Clasificación | PASS / PARTIAL / FAIL — AMBIGÜEDAD REPRODUCIBLE / FAIL — FUERA DE ALCANCE |
| ¿Autoriza proponer #72? | Sí / No |
| Alcance mínimo sugerido |  |

## Registro de corridas

No hay corridas registradas en este documento a la fecha. Hasta que una ejecución complete la plantilla y satisfaga la condición necesaria, la decisión permanece: **no abrir Task #72**.
