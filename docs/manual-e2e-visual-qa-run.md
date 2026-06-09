# Corrida manual interna de QA visual E2E para guías individuales

> **Uso interno únicamente para QA y validación de producto.** Este documento define cómo ejecutar y registrar una corrida visual manual de las páginas individuales actuales después del fallback seguro sin contacto y de la simplificación above the fold. No es material client-facing, de ventas, marketing, CRM, analytics, tracking, captación de leads, marketplace, búsqueda, ranking ni directorio.

## 1. Propósito y límites

Esta corrida valida en un navegador real o emulado que una persona puede usar **una guía individual** desde la entrada hasta el resultado, las acciones de copia, el reset y el handoff permitido por el estado de contacto, sin romper el layout en desktop o móvil.

La corrida observa el producto existente. No autoriza:

- rediseños ni cambios de comportamiento;
- cambios de rutas, slugs, shells de rutas o datos de negocios;
- cambios de precios, rangos, factores, fórmulas o lógica del estimador;
- formularios, campos de contacto, lead capture, CRM, backend o base de datos;
- analytics, tracking, cookies, login o pagos;
- reviews, ratings, búsqueda, filtros, rankings, marketplace o directorio;
- convertir `/priceguide/` en una experiencia pública de discovery.

Los resultados deben pertenecer a una URL individual. La corrida no certifica exactitud de mercado ni precio final: solo valida que el rango se presenta como aproximado y que el negocio confirma el precio final.

## 2. Herramientas, seguridad y preparación

1. Servir la rama o abrir el deployment exacto que se desea validar.
2. Usar browser DevTools con emulación responsive o un dispositivo real.
3. Registrar fecha, tester, commit/PR, navegador, sistema operativo y URL base.
4. Desactivar extensiones que puedan alterar layout, clipboard, links o idioma.
5. Empezar cada fixture sin parámetros; después ejecutar las variantes URL de la sección 7.
6. No enviar ni recolectar información de una persona usuaria.
7. No escribir nombres, teléfonos ni otros datos personales en ningún control.
8. No enviar mensajes de WhatsApp y no colocar llamadas telefónicas.
9. En los handoffs, confirmar únicamente que aparece la acción correcta y que el destino/link esperado se prepara. Cancelar antes de enviar un mensaje o iniciar una llamada.
10. Para clipboard, verificar el feedback visible para la persona usuaria y, donde el navegador lo permita, pegar el contenido en un editor local temporal para confirmar el texto copiado. No pegarlo en chats, formularios ni servicios externos.
11. Capturar evidencia solo cuando ayude a documentar un fallo visual. No incluir información personal.
12. Usar `PASS`, `PARTIAL` o `FAIL` según la sección 9; no marcar como ejecutado un viewport que solo fue revisado en código o por un script sin navegador.

### Viewports obligatorios

Ejecutar cada página de la sección 3 en estos cuatro tamaños. La altura puede adaptarse al dispositivo, pero debe registrarse.

| Perfil | Viewport recomendado | Objetivo |
|---|---:|---|
| Desktop | `1280 × 800` o mayor, registrando el ancho exacto | Jerarquía above the fold, ancho de contenido, resultado y acciones sin crowding. |
| Mobile 360 | `360 × 800` aprox. | Ancho móvil estrecho, wrapping, tap targets y ausencia de overflow horizontal. |
| Mobile 390 | `390 × 844` aprox. | Viewport móvil intermedio común y legibilidad general. |
| Mobile 430 | `430 × 932` aprox. | Móvil ancho, distribución de tarjetas, acciones y resultado. |

En móvil, hacer scroll por toda la página y repetir el flujo con touch emulado o interacción táctil real. Confirmar que ningún elemento requerido queda oculto, superpuesto o fuera del viewport.

## 3. Páginas y fixtures exactos

Usar las rutas individuales siguientes. Si el entorno requiere el prefijo de GitHub Pages, anteponer `/priceguide` sin cambiar el resto de la ruta.

| Cobertura obligatoria | Página / fixture | Ruta exacta | Datos de prueba recomendados |
|---|---|---|---|
| WhatsApp confirmado; Carmona; bilingüe; above the fold | **Carmona Hnos Climas y Refrigeración** | `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | Servicio `instalacion-climas`; zona `cabo-san-lucas`; repetir con `?lang=en`. |
| Segundo bilingüe interno; WhatsApp-only | **Fixture interno QA Jardín Bilingüe** | `/guadalajara/jardineria/fixture-interno-jardineria-bilingue` | Servicio `mantenimiento-jardin-demo`; repetir en `lang=es` y `lang=en`, incluido `zone=jardines-del-pais` y `campaign=qa-bilingual`. |
| WhatsApp pendiente/no confirmado + teléfono fallback | **Instal PV** | `/puerto-vallarta/electricista/instal-pv` | Servicio `diagnostico-reparacion-fallas`; zona `puerto-vallarta`. |
| WhatsApp ausente + teléfono fallback; zonas largas | **Fixture interno de control preventivo** | `/guadalajara/fumigacion/fixture-interno-control-preventivo` | Servicio `inspeccion-preventiva`; zona `san-juan-de-ocotan`; revisar las ocho zonas. |
| Sin contacto, fixture interno de Task #73 | **Fixture interno QA sin contacto** | `/guadalajara/electricista/fixture-interno-sin-contacto` | Servicio `revision-electrica-demo`; zona `centro`; repetir con parámetros combinados e inglés. |
| Multi-servicio | **Plomería Mario** | `/los-cabos/plomeros/plomeria-mario` | Cambiar entre `fuga`, `calentador`, `destape` e `instalacion`; completar al menos un cálculo. |

Carmona cubre el fixture confirmado, una validación bilingüe y la revisión above the fold; el fixture interno de jardinería repite el bilingüe en otra categoría y cubre WhatsApp-only. El fixture de control preventivo cubre a la vez el fallback de teléfono sin WhatsApp y la variante de zonas largas. Estas coincidencias no eliminan ningún check: deben registrarse ambas coberturas en las notas de la corrida.

## 4. Checklist visual y funcional por cada página y viewport

Aplicar **todos** los checks de esta sección a cada combinación página/viewport. Marcar `N/A` solo cuando el estado no existe en ese fixture y explicar por qué; `N/A` no equivale a `PASS`.

### A. Entrada, header y above the fold

- [ ] La ruta individual carga sin error, redirección inesperada ni pantalla vacía.
- [ ] El header es claro, compacto y no compite con el contenido principal.
- [ ] El nombre correcto del negocio es visible al entrar.
- [ ] La ciudad/categoría y la información de contacto visible corresponden al fixture.
- [ ] La información de contacto es compacta y no causa crowding above the fold.
- [ ] El hero headline explica con claridad el propósito de estimar un rango aproximado.
- [ ] El primer contenido no está saturado, cortado, superpuesto ni desbordado.
- [ ] La tarjeta de selección de servicio es simple y fácil de identificar.
- [ ] Los botones de servicio requeridos son visibles, distinguibles y tappable/clickable.
- [ ] En móvil no existe scroll horizontal ni texto importante truncado.
- [ ] La página representa un solo negocio; no muestra búsqueda, filtros, ranking, comparaciones, reviews, marketplace ni navegación de directorio.

### B. Identidad y footer

- [ ] El nombre del negocio permanece reconocible durante el recorrido.
- [ ] El disclaimer del footer explica el carácter aproximado sin repetir redundantemente el nombre del negocio.
- [ ] No aparece una promesa de precio final, cotización garantizada ni lenguaje equivalente.
- [ ] No aparece un formulario, campo opcional de nombre/teléfono ni otra captación de datos.

### C. Servicio, zona y preguntas

- [ ] Seleccionar un servicio actualiza el estado correcto sin ocultar indebidamente los demás servicios.
- [ ] Cambiar de servicio funciona y no conserva respuestas incompatibles del servicio anterior.
- [ ] La selección de zona abre, muestra las opciones configuradas y permite elegir la zona deseada.
- [ ] Las zonas largas hacen wrap de forma legible y no rompen controles ni layout.
- [ ] Las preguntas del estimador aparecen en orden y son comprensibles.
- [ ] Todas las opciones de respuesta son visibles, seleccionables y tienen un área táctil usable.
- [ ] Los estados seleccionado, foco y disabled/required, cuando apliquen, se entienden visualmente.
- [ ] Es posible completar el estimador sin quedar bloqueado.

### D. Resultado y lenguaje de rango

- [ ] La tarjeta de resultado aparece después de completar las selecciones requeridas.
- [ ] El resultado se relaciona claramente con el servicio, zona y respuestas elegidos.
- [ ] El rango tiene jerarquía visual suficiente en desktop y móvil.
- [ ] El resultado usa lenguaje de estimación, rango o precio aproximado.
- [ ] Se entiende que el precio final se confirma directamente con el negocio.
- [ ] Ningún texto presenta la estimación como precio final o garantizado.
- [ ] El resultado, disclaimer y acciones no se superponen ni generan crowding.

### E. Copiar resumen, copiar enlace y reset

- [ ] **Copiar resumen** produce feedback visible para la persona usuaria.
- [ ] Cuando sea posible inspeccionarlo, el resumen copiado contiene negocio, servicio, zona, respuestas/contexto útil, rango aproximado y el carácter no definitivo del precio.
- [ ] **Copiar enlace** produce feedback visible para la persona usuaria.
- [ ] Cuando sea posible inspeccionarlo, el enlace copiado conserva la ruta individual correcta y los parámetros soportados pertinentes.
- [ ] Ninguna copia incluye datos personales ingresados o inventados.
- [ ] **Reset** limpia resultado y respuestas del flujo anterior.
- [ ] Después del reset se puede iniciar y completar otra estimación.
- [ ] El reset no deja servicio, zona, idioma ni acciones en un estado roto.

### F. Handoff según estado de contacto

- [ ] En WhatsApp confirmado, aparece el CTA de WhatsApp y su link usa el destino `wa.me` correcto.
- [ ] En WhatsApp confirmado, el texto preparado conserva el contexto útil de servicio, zona, rango e idioma/parámetros aplicables.
- [ ] En WhatsApp pendiente/no confirmado, no aparece un CTA `wa.me` utilizable y sí aparece el fallback de teléfono público.
- [ ] En WhatsApp ausente con teléfono público, aparece el fallback `tel:` correcto sin inventar WhatsApp.
- [ ] No enviar mensajes de WhatsApp ni iniciar llamadas; cancelar después de confirmar el link/action.
- [ ] En el fixture sin contacto, aplicar además todos los checks específicos de la sección 6.

### G. Parámetros e inglés

- [ ] `source`, `service`, `zone`, `campaign` y `lang` aceptados no rompen la ruta, el layout ni el estimador.
- [ ] Un servicio válido se preselecciona correctamente y los otros servicios siguen disponibles.
- [ ] Una zona válida se preselecciona correctamente.
- [ ] El contexto soportado se conserva en copia de enlace/resumen y handoff cuando corresponda, sin convertirse en analytics o tracking.
- [ ] En Carmona y en el fixture sin contacto, `?lang=en` activa inglés donde existe y hace fallback seguro donde falte traducción.
- [ ] El modo inglés conserva legibilidad, tap targets, carácter aproximado, resultado, copias, reset y handoff/fallback correcto.

## 5. Enfoque específico por fixture

Además del checklist universal, confirmar estas expectativas en cada página.

### Carmona Hnos Climas y Refrigeración

- Header, nombre, contacto y hero permanecen claros sin crowding en los cuatro anchos.
- Los tres servicios son visibles y tappable; cambiar de servicio no rompe preguntas ni resultado.
- El CTA confirmado prepara `wa.me`; no se envía el mensaje.
- `?lang=en` cambia el contenido disponible a inglés y conserva el lenguaje de rango aproximado.
- El footer no repite redundantemente “Carmona Hnos Climas y Refrigeración” en el disclaimer.

### Instal PV

- El estado pendiente/no confirmado no presenta un WhatsApp utilizable.
- El fallback de llamada muestra el teléfono público y prepara un `tel:` correcto; no se coloca la llamada.
- Servicio, zona, preguntas, resultado, copias y reset siguen funcionando sin depender de WhatsApp.

### Fixture interno de control preventivo

- No aparece WhatsApp cuando está ausente.
- Aparece el fallback de teléfono público y prepara `tel:`; no se coloca la llamada.
- Las ocho zonas, especialmente “San Juan de Ocotán” y otros nombres compuestos, no desbordan en `360px`, `390px` ni `430px`.
- El servicio único y su tarjeta permanecen simples; preguntas, resultado, copias y reset funcionan.

### Fixture interno QA sin contacto

- Ejecutar todos los checks de la sección 6 en cada viewport.
- Repetir al menos una corrida con el ejemplo combinado de la sección 7.
- Repetir en inglés y confirmar que no aparece un canal de contacto como efecto secundario del idioma o parámetros.

### Plomería Mario

- Los cuatro botones de servicio son visibles y tappable en cada viewport.
- Cambiar entre los cuatro servicios actualiza preguntas y limpia estado incompatible.
- Completar al menos un flujo hasta resultado y verificar resumen, enlace, reset y handoff según el contacto confirmado.
- Nombres de servicios, preguntas y opciones no desbordan ni hacen crowding.

## 6. QA obligatorio del estado sin contacto

Ruta: `/guadalajara/electricista/fixture-interno-sin-contacto`

En desktop, `360px`, `390px` y `430px`, confirmar explícitamente:

- [ ] No aparece botón de WhatsApp.
- [ ] No aparece link `wa.me` utilizable.
- [ ] No aparece link `tel:`.
- [ ] No aparecen campos opcionales de nombre o teléfono.
- [ ] No aparece formulario de lead capture ni solicitud para dejar datos.
- [ ] Aparece un mensaje seguro para guardar/copiar la estimación y confirmar más tarde cuando exista un canal válido.
- [ ] El mensaje no promete que alguien contactará a la persona usuaria.
- [ ] Copiar resumen funciona y presenta feedback visible.
- [ ] Copiar enlace funciona y presenta feedback visible.
- [ ] El estimador completo sigue funcionando.
- [ ] El resultado conserva lenguaje de rango aproximado.
- [ ] Reset funciona y permite repetir el flujo.
- [ ] `source`, `service`, `zone`, `campaign` y `lang` no crean ni revelan una acción de contacto.

Cualquier CTA roto, `href="#"`, `wa.me`, `tel:`, campo de contacto o promesa de seguimiento en este fixture es `FAIL` y bloquea el avance indicado en la sección 10.

## 7. QA manual de parámetros URL

Ejecutar los ejemplos sobre una ruta individual, sustituyendo placeholders por IDs/slugs válidos del fixture. Confirmar visualmente preselección, idioma, continuidad del estimador, resultado, copias, reset y handoff/fallback. Los parámetros son contexto efímero: no deben almacenar visitas ni producir analytics/tracking.

| Ejemplo requerido | Ruta sugerida | Verificación principal |
|---|---|---|
| `?source=google-business-profile` | Carmona | Carga normal; fuente soportada no cambia layout, precio ni contacto. |
| `?source=qr-physical` | Fixture de control preventivo | Carga normal y fallback de teléfono intacto. |
| `?service={validServiceSlug}` | Carmona: `?service=instalacion-climas` | Servicio válido preseleccionado; los demás siguen visibles. |
| `?campaign=qa-manual-e2e` | Instal PV | Campaña segura no cambia cálculo ni habilita WhatsApp pendiente. |
| `?lang=en` | Carmona | Inglés disponible, fallback seguro y layout legible. |
| `?zone={validZoneSlug}` | Control preventivo: `?zone=san-juan-de-ocotan` | Zona válida preseleccionada sin overflow. |
| Combinación | No-contact: `?source=qr-physical&service=revision-electrica-demo&campaign=qa-manual-e2e&lang=en&zone=centro` | Todos los contextos conviven; estimador, copias y reset funcionan; no aparece contacto. |

También se pueden usar estos ejemplos completos:

```text
/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion?source=google-business-profile
/guadalajara/fumigacion/fixture-interno-control-preventivo?source=qr-physical
/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion?service=instalacion-climas
/puerto-vallarta/electricista/instal-pv?campaign=qa-manual-e2e
/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion?lang=en
/guadalajara/fumigacion/fixture-interno-control-preventivo?zone=san-juan-de-ocotan
/guadalajara/electricista/fixture-interno-sin-contacto?source=qr-physical&service=revision-electrica-demo&campaign=qa-manual-e2e&lang=en&zone=centro
```

Si el deployment usa `/priceguide`, insertar ese prefijo antes de la ciudad. No cambiar rutas ni slugs para ejecutar la prueba.

## 8. Registro simple de la corrida

Duplicar filas si se prueban varios navegadores, servicios o combinaciones de parámetros. No completar esta tabla con inferencias de código: registrar únicamente checks manuales realmente ejecutados.

| Page / fixture | Viewport | Flow tested | Result | Issue found | Follow-up PR needed? |
|---|---|---|---|---|---|
| Carmona Hnos Climas y Refrigeración | Desktop `____ × ____` | Base + WhatsApp confirmado + multi-servicio + above the fold | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Carmona Hnos Climas y Refrigeración | Mobile `360 × ____` | Base + English + WhatsApp confirmado | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Carmona Hnos Climas y Refrigeración | Mobile `390 × ____` | Base + English + WhatsApp confirmado | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Carmona Hnos Climas y Refrigeración | Mobile `430 × ____` | Base + English + WhatsApp confirmado | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Instal PV | Desktop `____ × ____` | Pending WhatsApp + phone fallback + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Instal PV | Mobile `360 × ____` | Pending WhatsApp + phone fallback + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Instal PV | Mobile `390 × ____` | Pending WhatsApp + phone fallback + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Instal PV | Mobile `430 × ____` | Pending WhatsApp + phone fallback + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno de control preventivo | Desktop `____ × ____` | Phone-only fallback + long zones + URL params | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno de control preventivo | Mobile `360 × ____` | Phone-only fallback + eight zones + tap/wrap | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno de control preventivo | Mobile `390 × ____` | Phone-only fallback + eight zones + tap/wrap | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno de control preventivo | Mobile `430 × ____` | Phone-only fallback + eight zones + tap/wrap | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno QA sin contacto | Desktop `____ × ____` | No-contact checklist + combined params + English | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno QA sin contacto | Mobile `360 × ____` | No-contact checklist + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno QA sin contacto | Mobile `390 × ____` | No-contact checklist + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Fixture interno QA sin contacto | Mobile `430 × ____` | No-contact checklist + estimate/copy/reset | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Plomería Mario | Desktop `____ × ____` | Four-service switching + full estimate/copy/reset/handoff | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Plomería Mario | Mobile `360 × ____` | Four-service visibility/tap + full flow | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Plomería Mario | Mobile `390 × ____` | Four-service visibility/tap + full flow | PASS / PARTIAL / FAIL |  | Yes / No / TBD |
| Plomería Mario | Mobile `430 × ____` | Four-service visibility/tap + full flow | PASS / PARTIAL / FAIL |  | Yes / No / TBD |

### Metadata y notas de evidencia

```md
- Fecha:
- Tester:
- Branch / commit / PR:
- URL base o deployment:
- Navegador y versión:
- Sistema operativo / dispositivo:
- Parámetros adicionales probados:
- Evidencia visual (si hubo fallo):
- Notas:
```

## 9. Definición de PASS, PARTIAL y FAIL

- **PASS:** el flujo aplicable se completó manualmente en el viewport registrado; no hubo acción rota, crowding que impida uso, precio presentado como final, contacto incorrecto ni feature prohibida.
- **PARTIAL:** parte de la fila fue ejecutada, pero una comprobación quedó bloqueada por el entorno o no pudo observarse (por ejemplo, permiso de clipboard). Registrar exactamente qué faltó. Un issue reproducible de producto no debe ocultarse como `PARTIAL`.
- **FAIL:** una acción requerida se rompe, el layout impide entender o completar el flujo, aparece un contacto incorrecto/roto, el estado sin contacto captura datos, el rango parece precio final, o surge comportamiento de directorio/búsqueda/ranking/lead capture.

Para cada `FAIL`, registrar URL, viewport, pasos mínimos, esperado, observado, severidad y si requiere un PR separado. No corregir datos, rutas, fórmulas o comportamiento dentro de la propia corrida documental.

## 10. Criterios de aceptación para avanzar de fase

La página puede moverse de validación interna de demo hacia un piloto limitado con un negocio real **solo si la corrida manual aplicable está ejecutada y registrada** y se cumplen todos estos criterios:

- no aparece ningún CTA de contacto roto, incorrecto o no confirmado;
- no existe crowding above the fold que rompa layout, jerarquía, lectura o interacción en desktop, `360px`, `390px` o `430px`;
- ninguna estimación se presenta como precio final, garantizado o cotización definitiva;
- no aparece comportamiento de directorio, búsqueda, filtros, ranking, comparación, reviews o marketplace;
- no aparece lead capture, formulario o recolección de nombre/teléfono;
- el estimador, selección de servicio, selección de zona, resultado, copiar resumen, copiar enlace y reset funcionan;
- el handoff confirmado o fallback aplicable funciona sin enviar mensaje ni colocar llamada durante QA;
- el estado sin contacto conserva estimador y copias sin inventar un canal de contacto;
- los parámetros soportados y el modo inglés aplicable no rompen el flujo.

La existencia de este documento no equivale a haber ejecutado la corrida. Cada página real o piloto futuro necesita su propia evidencia manual sobre el deployment candidato antes de compartirse.

## 11. Documentos internos relacionados

- [Checklist interno final de smoke test para una guía de negocio real](real-business-smoke-test-checklist.md): sign-off mínimo antes de compartir una URL individual real.
- [Checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md)
- [Checklist interno de QA de accesibilidad y tap targets](accessibility-tap-target-qa-checklist.md): recorrido específico de teclado, foco visible, legibilidad, targets táctiles, wrapping y acciones de contacto seguras.
- [Informe interno final de validación de producto](final-product-validation-report.md)
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md)
- [Matriz interna de validación de producto](product-validation-matrix.md)
- [Checklist interno de prepublicación](pre-publish-checklist.md)
