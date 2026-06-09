# Checklist interno final de smoke test para una guía de negocio real

> **Uso interno únicamente para producto y QA.** Completar este checklist sobre el deployment candidato antes de compartir la URL individual de un negocio real.

## 1. Propósito y alcance mínimo

Este checklist define los pasos mínimos de QA necesarios antes de compartir **una sola página individual de guía de precios aproximados** para un negocio real.

- Este checklist **no publica ni aprueba un directorio**.
- Este checklist **no valida demanda de mercado**.
- Este checklist **no crea una página de ventas**.
- Este checklist **no recolecta leads ni datos de usuarios**.
- Este checklist **solo valida una página individual de guía para un único negocio**.

No usar esta corrida para rediseñar el producto, ampliar su alcance ni agregar marketing, ventas, CRM, analytics, tracking, lead capture, marketplace, search, rankings, reviews, backend, base de datos, login, pagos o cookies. Tampoco autoriza cambios de precios, fórmulas, lógica del estimador, rutas, slugs o datos ya aprobados.

## 2. Registro de la corrida

| Campo | Valor |
|---|---|
| Negocio |  |
| URL individual candidata |  |
| Commit / PR / deployment |  |
| Fecha |  |
| Tester |  |
| Navegador y sistema operativo |  |
| Estado de contacto esperado | Confirmed WhatsApp / Public phone fallback / No-contact fallback |
| Idiomas esperados | Español / Español + English |
| Servicio válido usado en parámetros |  |
| Zona válida usada en parámetros |  |

## 3. Checks de datos antes de publicar

Marcar cada dato contra la fuente aprobada del negocio. No completar huecos con inferencias, copy promocional ni información inventada.

- [ ] El **nombre del negocio** está aprobado y escrito correctamente.
- [ ] El `citySlug` está aprobado.
- [ ] El `categorySlug` está aprobado.
- [ ] El `businessSlug` está aprobado.
- [ ] Los nombres de los servicios están aprobados.
- [ ] Las preguntas del estimador están aprobadas.
- [ ] Todas las opciones de respuesta están aprobadas.
- [ ] Las zonas están aprobadas y corresponden al negocio.
- [ ] Los rangos de precio fueron revisados y siguen presentándose como **aproximados**.
- [ ] Se revisó y documentó exactamente uno de estos estados de contacto:
  - [ ] **Confirmed WhatsApp:** el número fue confirmado para uso público por el negocio.
  - [ ] **Public phone fallback:** existe un teléfono público válido cuando WhatsApp no está confirmado o no existe.
  - [ ] **No-contact fallback:** no existe contacto utilizable y debe mostrarse el estado seguro sin CTA.
- [ ] Si English está habilitado, se revisaron el modo de idioma y todo el copy visible en inglés.
- [ ] No hay afirmaciones inventadas sobre el negocio, sus servicios, experiencia o cobertura.
- [ ] No hay garantías de precio, resultado, disponibilidad, tiempo o calidad.
- [ ] No aparece lenguaje de “best”, “top”, “mejor”, ranking, posición o superioridad.
- [ ] No hay reviews, ratings, testimonios ni puntuaciones.
- [ ] No hay asesoría legal o fiscal.
- [ ] No existe una promesa de precio final; el negocio confirma el precio final directamente.

**Bloqueo:** cualquier dato no aprobado, contacto dudoso, afirmación inventada, garantía o promesa de precio final impide compartir la URL.

## 4. Checks de ruta y publicación

- [ ] La URL cumple exactamente el patrón `/priceguide/{citySlug}/{categorySlug}/{businessSlug}/`.
- [ ] El route shell individual fue generado por `node scripts/publish-preflight.js`; no fue creado o editado para introducir comportamiento distinto.
- [ ] La ruta directa carga el negocio correcto y no cae en otra guía, en un 404 o en la vista raíz.
- [ ] La raíz `/priceguide/` permanece como utilidad **interna de QA/demo** y revisión de rutas.
- [ ] Solo se comparte la URL individual del negocio; no se comparte `/priceguide/` como portal.
- [ ] No se agregó navegación pública, directorio, listado, búsqueda, filtros, comparación, ranking ni discovery de negocios.

## 5. Checks del estimador

Completar el flujo al menos una vez de principio a fin. Si hay varios servicios, confirmar cada servicio y ejecutar un flujo completo representativo; registrar cobertura parcial cuando no se prueben todas las combinaciones.

- [ ] Se puede seleccionar cada servicio visible aplicable.
- [ ] Todas las preguntas esperadas se renderizan en el orden correcto.
- [ ] Todos los botones de respuesta funcionan y muestran un estado seleccionado comprensible.
- [ ] La selección de zona funciona.
- [ ] El resultado aparece después de completar las selecciones requeridas.
- [ ] El rango estimado tiene formato claro y legible.
- [ ] El resultado está enmarcado explícitamente como aproximado.
- [ ] El resultado no se presenta como cotización formal, precio definitivo o garantía.
- [ ] Reset restaura el flujo de forma segura y permite comenzar de nuevo.
- [ ] Copy summary funciona y copia un resumen correcto sin datos inventados.
- [ ] Copy link funciona y conserva una URL individual válida.

## 6. Checks de contacto y handoff seguro

Probar únicamente el estado configurado para el negocio. Inspeccionar el destino sin completar la acción externa.

- [ ] **Confirmed WhatsApp:** el CTA produce un enlace `https://wa.me/...` válido con el número confirmado.
- [ ] **Public phone fallback:** el CTA produce un enlace `tel:` válido con el teléfono público aprobado.
- [ ] **No-contact fallback:** se ocultan WhatsApp y llamada, y aparece un mensaje neutral y seguro.
- [ ] En no-contact no aparecen campos opcionales de nombre o teléfono para intentar capturar un lead.
- [ ] No aparece ningún CTA de contacto vacío, roto, `#`, no confirmado o correspondiente a otro negocio.
- [ ] La página no recolecta, transmite ni almacena datos del usuario.
- [ ] Durante QA **no se envía realmente ningún mensaje de WhatsApp**.
- [ ] Durante QA **no se realiza ninguna llamada telefónica**.

Si una acción externa se abre, detenerse antes de enviar el mensaje o iniciar la llamada. Un CTA roto o un canal no confirmado es bloqueante.

## 7. Checks de parámetros URL

Usar el [harness interno de QA para parámetros URL](url-parameter-qa-harness.md) y después confirmar en navegador el comportamiento visible sobre la URL individual. Sustituir los placeholders solo con slugs válidos y aprobados de esta guía.

| Caso | URL / variante | Resultado esperado | Status: pass / partial / fail | Evidencia / nota |
|---|---|---|---|---|
| Sin parámetros | URL individual limpia | Carga normal, sin preselección inesperada |  |  |
| Google Business Profile | `?source=google-business-profile` | La guía carga sin alterar el producto |  |  |
| QR físico | `?source=qr-physical` | La guía carga sin alterar el producto |  |  |
| Facebook | `?source=facebook` | La guía carga sin alterar el producto |  |  |
| WhatsApp Business | `?source=whatsapp-business` | La guía carga sin alterar el producto |  |  |
| Servicio válido | `?service={validServiceSlug}` | Preselección segura del servicio válido |  |  |
| Servicio inválido | `?service=invalid-service-smoke` | Se ignora de forma segura; el flujo sigue utilizable |  |  |
| Campaign | `?campaign=real-business-smoke` | La guía carga sin tracking ni UI inesperada |  |  |
| Español | `?lang=es` | Copy español correcto |  |  |
| English, si está habilitado | `?lang=en` | Copy inglés aplicable sin romper layout; si no está habilitado, registrar `N/A` |  |  |
| Zona válida | `?zone={validZoneSlug}` | Preselección segura de la zona válida |  |  |
| Zona inválida | `?zone=invalid-zone-smoke` | Se ignora de forma segura; el selector sigue utilizable |  |  |
| Parámetros combinados | `?source=google-business-profile&service={validServiceSlug}&campaign=real-business-smoke&lang=es&zone={validZoneSlug}` | Todas las selecciones válidas conviven sin romper estimador, resultado o handoff |  |  |

Los parámetros son contexto de URL y estado inicial; esta prueba no crea analytics, tracking, atribución, reporting ni almacenamiento de visitas.

## 8. Checks móviles y visuales

Ejecutar la [corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md) y registrar, como mínimo, los siguientes viewports sobre la misma URL individual candidata:

- [ ] Desktop, anotando el ancho exacto.
- [ ] Mobile `360px`.
- [ ] Mobile `390px`.
- [ ] Mobile `430px`.

En cada viewport aplicable, verificar:

- [ ] La propuesta de la guía y el carácter aproximado del precio son claros above the fold.
- [ ] El nombre del negocio aparece **una sola vez de forma prominente**.
- [ ] La información de contacto es compacta y no domina la página.
- [ ] Los botones de servicio son visibles y comprensibles.
- [ ] Los botones de respuesta son fáciles de tocar.
- [ ] El selector de zona es utilizable.
- [ ] El resultado es legible.
- [ ] No existe scroll horizontal.
- [ ] El disclaimer del footer es corto y legible.

No usar esta sección como autorización para rediseñar. Registrar cualquier defecto reproducible como follow-up de producto pequeño y enfocado.

## 9. Smoke checks de accesibilidad y tap targets

Completar también el [checklist interno de QA de accesibilidad y tap targets](accessibility-tap-target-qa-checklist.md). Para este smoke test, los mínimos bloqueantes son:

- [ ] El orden de tabulación con teclado permite recorrer el flujo de forma utilizable.
- [ ] El foco es visible en los controles interactivos.
- [ ] Los botones tienen labels comprensibles en contexto.
- [ ] Los tap targets no están apretados ni provocan activaciones accidentales.
- [ ] El contraste es aceptable por inspección visual; cualquier duda requiere revisión enfocada antes de aprobar.
- [ ] Si English está habilitado, el copy inglés no rompe layout, wrapping, targets o legibilidad.

## 10. Tabla final de sign-off

Usar exactamente `pass`, `partial` o `fail` en **Status**. `Partial` exige una nota clara y no puede ocultar un bloqueo. Agregar filas si hace falta.

| Item | Status: pass / partial / fail | Evidence / note | Blocker? | Follow-up PR? |
|---|---|---|---|---|
| Datos aprobados y límites de copy |  |  | Yes / No | Yes / No / TBD |
| Ruta individual y route shell |  |  | Yes / No | Yes / No / TBD |
| `/priceguide/` permanece interno |  |  | Yes / No | Yes / No / TBD |
| Flujo completo del estimador |  |  | Yes / No | Yes / No / TBD |
| Resultado aproximado y disclaimer |  |  | Yes / No | Yes / No / TBD |
| Copy summary / copy link / reset |  |  | Yes / No | Yes / No / TBD |
| Contacto o fallback seguro |  |  | Yes / No | Yes / No / TBD |
| Parámetros URL |  |  | Yes / No | Yes / No / TBD |
| Desktop visual |  |  | Yes / No | Yes / No / TBD |
| Mobile `360px` |  |  | Yes / No | Yes / No / TBD |
| Mobile `390px` |  |  | Yes / No | Yes / No / TBD |
| Mobile `430px` |  |  | Yes / No | Yes / No / TBD |
| Accesibilidad y tap targets mínimos |  |  | Yes / No | Yes / No / TBD |
| Ausencia de features prohibidas |  |  | Yes / No | Yes / No / TBD |

## 11. Decisión de publicación controlada

Seleccionar **una sola** decisión y explicar la evidencia. `Partial` no equivale automáticamente a aprobación: cualquier blocker obliga a elegir una opción distinta de “Ready”.

- [ ] **Ready to share individual URL** — todos los checks bloqueantes pasan; cualquier follow-up restante es menor, documentado y no afecta seguridad, exactitud aprobada ni operación.
- [ ] **Needs product fix before sharing** — existe un defecto de comportamiento, layout, accesibilidad, ruta, estimador, parámetros o handoff.
- [ ] **Needs data/copy correction before sharing** — existe un dato, slug, servicio, pregunta, opción, zona, rango, traducción, contacto o afirmación que requiere aprobación/corrección.
- [ ] **Do not share** — existe un riesgo no resuelto, un estado de contacto inseguro, un fallo bloqueante o una violación de alcance.

**Decisión:**

**Aprobado por:**

**Fecha:**

**Evidencia / blockers / follow-up PR:**

## 12. Límites del resultado

- Pasar este checklist **no aprueba un directorio público**.
- Pasar este checklist **no aprueba lead capture**.
- Pasar este checklist **no aprueba analytics ni tracking**.
- Pasar este checklist **no valida ROI, demanda, conversión, ranking ni precios finales de mercado**.
- Pasar este checklist **solo significa que la URL individual de esta única guía es suficientemente segura para compartir en una validación controlada**.

La aprobación no se transfiere automáticamente a otro negocio, otra URL, otro deployment o una futura edición de datos. Cada guía real debe conservar su propia evidencia de smoke test.

## 13. Documentos internos relacionados

- [Informe interno final de validación de producto](final-product-validation-report.md)
- [Corrida manual interna de QA visual E2E](manual-e2e-visual-qa-run.md)
- [Checklist interno de QA de accesibilidad y tap targets](accessibility-tap-target-qa-checklist.md)
- [Checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md)
- [Checklist interno de prepublicación](pre-publish-checklist.md)
- [Harness interno de QA para parámetros URL](url-parameter-qa-harness.md)
