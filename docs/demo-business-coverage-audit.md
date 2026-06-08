# Auditoría interna de cobertura de negocios demo

> **Uso interno de QA y validación de producto.** Esta auditoría es una fotografía de los datos actuales. No modifica `businesses.js`, rutas, slugs, rangos, fórmulas ni comportamiento de la aplicación.

## 1. Propósito de la auditoría

Esta auditoría comprueba si los datos actuales de negocios demo cubren suficientes casos y contrastes para validar **Precios Locales como un motor estático reutilizable de guías de precios individuales**.

Responde cuatro preguntas:

1. **¿Qué cobertura ya existe?** Ocho negocios, cinco ciudades/rutas de ciudad, tres estados, cinco slugs de categoría, varios niveles de precio, tres estados de tono/dato y ejemplos en español e inglés.
2. **¿Qué cobertura falta?** Faltan, entre otros casos, WhatsApp ausente, teléfono ausente, ausencia total de contacto, un negocio de un solo servicio, una lista de zonas realmente larga y `tone: "professional"` explícito.
3. **¿Qué gaps importan para validar el producto?** Los estados de contacto ausentes y las estructuras mínimas/no representadas son los gaps más importantes porque pueden ocultar fallos del handoff o del estimador. Las variaciones de tono, idioma y longitud de zonas son importantes, pero secundarias.
4. **¿Qué debe atenderse en PRs posteriores?** Primero, un PR interno y data-only de fixtures de validación que represente los estados faltantes sin crear navegación pública. Cualquier cambio de comportamiento debe quedar separado y requerir un fallo reproducible.

La auditoría no determina si los negocios, categorías o precios representan el mercado. Solo determina si los fixtures actuales permiten probar el motor.

## 2. Fuentes de datos y método

Fuentes inspeccionadas:

- `businesses.js`, como fuente primaria de identidad, rutas, contacto, zonas, servicios, preguntas, opciones, factores y rangos base;
- `app.js`, únicamente para confirmar cómo se resuelven rutas, contacto, idioma y parámetros URL;
- `scripts/publish-preflight.js` y los shells de rutas existentes, para contrastar publicabilidad y rutas generadas;
- `docs/product-validation-matrix.md` y `docs/source-links-guide.md`, para alinear criterios de QA existentes.

Reglas de lectura usadas en esta auditoría:

- `whatsappConfirmed: false` se clasifica como **pendiente/no confirmado**. Un valor de `whatsapp` presente sin ese flag se clasifica como **confirmado según el contrato actual de datos**.
- Un teléfono no vacío se clasifica como **teléfono público disponible**.
- “Español + inglés” exige campos ingleses sustantivos para la experiencia, no solo una nota inglesa de WhatsApp pendiente.
- Para comparar variedad de precios dentro de este corpus, “rango bajo” significa un mínimo base de **$550 MXN o menos** y “rango alto” un máximo base de **$4,000 MXN o más**. Es un umbral interno de cobertura, no una evaluación comercial ni de exactitud.
- “Lista corta de zonas” significa 3 zonas, que es el mínimo actual; “lista más larga actual” significa 4. Ningún fixture estresa una lista verdaderamente larga.
- Los estados se normalizan a partir de la ciudad declarada: Baja California Sur, Sinaloa y Jalisco.

No se inventaron negocios, valores ni estados de datos ausentes.

## 3. Resumen cuantitativo

### 3.1 Ciudades, estados y categorías

| Dimensión | Cobertura actual |
|---|---|
| Negocios | 8 |
| Ciudades/slugs de ciudad | 5: Los Cabos, Mazatlán, Guadalajara, Cabo San Lucas y Puerto Vallarta |
| Estados | 3: Baja California Sur (3 negocios), Sinaloa (1) y Jalisco (4) |
| Slugs de categoría | 5: `plomeros`, `aire-acondicionado`, `fumigacion`, `plomeria`, `electricista` |
| Dominios de servicio amplios | 4: plomería, aire acondicionado/refrigeración, fumigación/control de plagas y electricidad/solar |

### 3.2 Conteo por ciudad y categoría de ruta

| Ciudad | Estado | Categoría de ruta | Negocios |
|---|---|---|---:|
| Los Cabos | Baja California Sur | `plomeros` | 1 |
| Mazatlán | Sinaloa | `aire-acondicionado` | 1 |
| Guadalajara | Jalisco | `fumigacion` | 1 |
| Cabo San Lucas | Baja California Sur | `aire-acondicionado` | 1 |
| Cabo San Lucas | Baja California Sur | `plomeria` | 1 |
| Puerto Vallarta | Jalisco | `electricista` | 3 |

La repetición de tres negocios en Puerto Vallarta/electricista permite comparar contenido distinto bajo la misma estructura de ciudad/categoría. Sin embargo, no existe repetición equivalente en las demás categorías, y `plomeros` frente a `plomeria` demuestra dos slugs para el mismo dominio amplio de plomería.

### 3.3 Resumen de estados de contacto

| Estado | Conteo | Negocios |
|---|---:|---|
| WhatsApp confirmado | 5 | Plomería Mario, Frío Express, Control Total, Carmona Hnos, De la Hoz |
| WhatsApp pendiente/no confirmado | 3 | Instal PV, Servicios Profesionales Martínez, Solara |
| WhatsApp ausente | 0 | — |
| Teléfono público disponible | 8 | Todos |
| Teléfono público ausente | 0 | — |
| Ambos campos, WhatsApp y teléfono, presentes | 8 | Todos; en 3 el WhatsApp está pendiente |
| WhatsApp confirmado como único contacto | 0 | — |
| Solo WhatsApp presente, sin teléfono | 0 | — |
| Solo teléfono utilizable, con WhatsApp pendiente/ausente | 3 | Instal PV, Servicios Profesionales Martínez, Solara |
| Sin ruta de contacto utilizable | 0 | — |

## 4. Tabla A — Inventario de negocios

| Negocio | Ciudad | Estado | Categoría | Slug/path | Servicios | Zonas | Estado WhatsApp | Teléfono público | Cobertura de idioma | Tono | Notas |
|---|---|---|---|---|---:|---:|---|---|---|---|---|
| Plomería Mario | Los Cabos | Baja California Sur | Plomería profesional (`plomeros`) | `/los-cabos/plomeros/plomeria-mario` | 4 | 4 | Confirmado por contrato actual | Disponible | Solo español | `friendly` | Único fixture con 4 servicios; incluye un servicio de 2 preguntas y nombres con `/` y paréntesis. |
| Frío Express | Mazatlán | Sinaloa | Aire acondicionado | `/mazatlan/aire-acondicionado/frio-express` | 3 | 4 | Confirmado por contrato actual | Disponible | Solo español | `technical` | Cubre mantenimiento, reparación e instalación; llega a $3,200 base. |
| Control Total | Guadalajara | Jalisco | Fumigación y control de plagas | `/guadalajara/fumigacion/control-total` | 3 | 4 | Confirmado por contrato actual | Disponible | Solo español | Ausente | Categoría distinta de instalaciones/reparaciones; incluye una opción con solo 2 respuestas. |
| Carmona Hnos Climas y Refrigeración | Cabo San Lucas | Baja California Sur | Aire acondicionado y refrigeración | `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | 3 | 4 | Confirmado por contrato actual | Disponible | Español + inglés sustantivo | Ausente | Principal fixture bilingüe; máximo base de $4,200. |
| De la Hoz Plomería | Cabo San Lucas | Baja California Sur | Plomería residencial | `/cabo-san-lucas/plomeria/de-la-hoz-plomeria` | 3 | 3 | Confirmado por contrato actual | Disponible | Solo español | Ausente | Lista corta actual; prueba el slug de categoría `plomeria`. |
| Instal PV | Puerto Vallarta | Jalisco | Electricista | `/puerto-vallarta/electricista/instal-pv` | 3 | 3 | Pendiente/no confirmado | Disponible | Español; nota de contacto también en inglés | Ausente | Fallback de llamada; mezcla servicio bajo ($450) y proyecto alto ($4,200). |
| Servicios Profesionales de Electricidad y Plomería Martínez | Puerto Vallarta | Jalisco | Electricista | `/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez` | 3 | 4 | Pendiente/no confirmado | Disponible | Español; nota de contacto también en inglés | Ausente | Nombre/ruta muy largos y servicios de dos dominios bajo una categoría. |
| Solara Proyectos Eléctricos y Paneles Solares | Puerto Vallarta | Jalisco | Electricista | `/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares` | 3 | 3 | Pendiente/no confirmado | Disponible | Español; nota de contacto también en inglés | Ausente | Mayor máximo base ($7,500); mezcla mantenimiento bajo y solar alto. |

## 5. Tabla B — Matriz de cobertura

| Área de cobertura | ¿Cubierto? | Ejemplo | Por qué importa | Severidad del gap | ¿Follow-up? |
|---|---|---|---|---|---|
| Varias ciudades | Sí | Cinco slugs de ciudad | Detecta supuestos accidentales de copy o ruta ligados a una localidad. | Baja | No |
| Varios estados | Sí, parcial | B.C.S., Sinaloa y Jalisco | Ayuda a probar reutilización geográfica, pero solo en tres estados del país. | Baja | No inmediato |
| Varias categorías | Sí | Plomería, clima, fumigación y electricidad | Reduce el riesgo de que preguntas/UI dependan de una sola categoría. | Baja | No |
| Repetición ciudad/categoría | Parcial | Tres electricistas en Puerto Vallarta | Permite contraste dentro de una ruta estructural; las demás categorías tienen un solo ejemplo. | Baja | No inmediato |
| WhatsApp confirmado | Sí | Carmona Hnos | Valida el handoff principal a `wa.me`. | Baja | No |
| WhatsApp pendiente/no confirmado | Sí | Instal PV | Valida que no se publique un handoff no confirmado y que aparezca llamada. | Baja | No |
| WhatsApp ausente | No | — | El campo ausente podría exponer supuestos distintos al flag pendiente. | **Alta** | Sí |
| Teléfono disponible | Sí | Todos | Valida enlace `tel:` y fallback de llamada. | Baja | No |
| Teléfono ausente | No | — | No se prueba la presentación cuando WhatsApp sí existe pero no hay llamada. | **Alta** | Sí |
| Ambos contactos presentes | Sí | Todos | Valida el estado más común de datos completos. | Baja | No |
| Solo WhatsApp, sin teléfono | No | — | Falta confirmar que la página permanece segura sin teléfono. | **Alta** | Sí |
| Solo teléfono utilizable | Sí | Instal PV | Cubre WhatsApp pendiente con llamada pública como salida segura. | Baja | No |
| Sin contacto utilizable | No | — | Es el fallback crítico final; no hay fixture que lo ejercite. | **Alta** | Sí |
| Multi-servicio | Sí | Plomería Mario | Valida selección, cambio y reinicio de estado entre servicios. | Baja | No |
| Un solo servicio | No | — | La estructura mínima del selector/estimador no está validada. | **Media** | Sí |
| Lista corta de zonas | Sí | De la Hoz (3) | Valida el mínimo actual, aunque no el mínimo teórico de 1 zona. | Baja | No inmediato |
| Lista larga de zonas | Parcial | Cuatro zonas en varios negocios | Cuatro opciones no estresan overflow, wrapping o escaneo de una lista extensa. | **Media** | Sí |
| Rangos bajos | Sí | Plomería Mario desde $400 | Valida formato de cifras bajas y factores menores. | Baja | No |
| Rangos altos | Sí | Solara hasta $7,500 | Valida formato y legibilidad de cifras más largas. | Baja | No |
| Mezcla barato/caro | Sí | Instal PV y Solara | Valida cambios grandes de escala dentro del mismo negocio. | Baja | No |
| Solo español | Sí | Plomería Mario | Valida el fallback de copy cuando se solicita inglés sin traducción específica. | Baja | No |
| Campos/copy en inglés | Sí, parcial | Carmona Hnos | Existe un caso bilingüe profundo; otros solo tienen una nota de contacto inglesa. | **Media** | Sí |
| `tone: professional` | No | — | No se puede validar el branch explícito de tono profesional con datos actuales. | **Media** | Sí |
| `tone: friendly` | Sí | Plomería Mario | Valida copy de voz amigable. | Baja | No |
| `tone: technical` | Sí | Frío Express | Valida copy de voz técnica. | Baja | No |
| `tone` ausente/default | Sí | Seis negocios | Valida el comportamiento por defecto y revela que domina el corpus. | Baja | No |
| Compatibilidad con `source` | Sí | Todos | El parámetro es transversal y debe conservar contexto sin tracking. | Baja | No |
| Preselección `service` | Sí | Todos tienen IDs slug-safe | Valida deep links a un servicio individual. | Baja | No |
| Contexto `campaign` | Sí | Todos | Valida contexto textual permitido; no implica analytics. | Baja | No |
| Preselección `lang` | Sí, parcial | Carmona para inglés completo | El motor alterna UI; el contenido inglés profundo solo se prueba bien en un negocio. | **Media** | Sí |
| Preselección `zone` | Sí | Cualquier zona existente | La app sí soporta `zone`; debe probarse con slug válido e inválido. | Baja | No |
| Preguntas/opciones del estimador | Sí | 23 servicios con preguntas y opciones | Valida el flujo base de selección y cálculo. | Baja | No |
| Estructura mínima o atípica del estimador | Parcial | Servicio de 2 preguntas en Plomería Mario | No hay servicio con 0/1 pregunta, 1 opción o un solo servicio de negocio. | **Alta** | Sí, como fixture válido mínimo |

## 6. Auditoría de rutas y paths

El patrón actual derivado de los datos es:

```text
/{citySlug}/{categorySlug}/{businessSlug}
/priceguide/{citySlug}/{categorySlug}/{businessSlug}
```

La segunda variante es el prefijo opcional para GitHub Pages. Los shells existentes usan barra final, pero la normalización de la app compara la ruta sin depender de ella.

| Negocio | Ruta esperada sin prefijo | City slug | Category slug | Business slug | ¿Válida desde datos? | Preocupación obvia |
|---|---|---|---|---|---|---|
| Plomería Mario | `/los-cabos/plomeros/plomeria-mario` | `los-cabos` | `plomeros` | `plomeria-mario` | Sí | `plomeros` difiere del slug `plomeria` usado por otro fixture; debe tratarse como dato intencional, no normalizarse silenciosamente. |
| Frío Express | `/mazatlan/aire-acondicionado/frio-express` | `mazatlan` | `aire-acondicionado` | `frio-express` | Sí | Sin preocupación estructural visible. |
| Control Total | `/guadalajara/fumigacion/control-total` | `guadalajara` | `fumigacion` | `control-total` | Sí | Sin preocupación estructural visible. |
| Carmona Hnos | `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` | `cabo-san-lucas` | `aire-acondicionado` | `carmona-hnos-climas-refrigeracion` | Sí | Slug largo, útil para wrapping/copia de URL. |
| De la Hoz | `/cabo-san-lucas/plomeria/de-la-hoz-plomeria` | `cabo-san-lucas` | `plomeria` | `de-la-hoz-plomeria` | Sí | Comparte ciudad con otra categoría y contrasta `plomeria` con `plomeros`. |
| Instal PV | `/puerto-vallarta/electricista/instal-pv` | `puerto-vallarta` | `electricista` | `instal-pv` | Sí | Sin preocupación estructural visible. |
| Servicios Profesionales Martínez | `/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez` | `puerto-vallarta` | `electricista` | `servicios-profesionales-electricidad-plomeria-martinez` | Sí | Ruta excepcionalmente larga; útil para QA de copia y móvil. |
| Solara | `/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares` | `puerto-vallarta` | `electricista` | `solara-proyectos-electricos-paneles-solares` | Sí | Ruta larga y categoría amplia frente al servicio solar. |

No se observan slugs inválidos con el contrato actual. La concentración de tres rutas bajo Puerto Vallarta/electricista es útil para detectar colisiones; los slugs de negocio son distintos.

## 7. Auditoría de estados de contacto

| Flujo que debe poder probarse | ¿Representado? | Fixture actual | Resultado de cobertura |
|---|---|---|---|
| WhatsApp confirmado | Sí | Cinco negocios | Se puede validar CTA directo, detalle de contacto y handoff del resumen. |
| WhatsApp pendiente/no confirmado | Sí | Tres negocios de Puerto Vallarta | Se puede validar que WhatsApp quede oculto/no utilizable, aparezca la nota pendiente y se ofrezca llamada. |
| WhatsApp ausente | No | — | Gap distinto al estado pendiente; requiere fixture futuro. |
| Fallback a teléfono público | Sí | Instal PV, Martínez y Solara | Se puede validar el enlace `tel:` cuando WhatsApp no está confirmado. |
| WhatsApp confirmado sin teléfono | No | — | No se valida la ausencia del enlace telefónico con handoff principal disponible. |
| Sin contacto | No | — | No se valida la presentación final cuando no hay WhatsApp confirmado ni teléfono. |

**Conclusión de contacto:** el happy path y el fallback por WhatsApp pendiente están cubiertos. Los estados basados en campos realmente ausentes no lo están. Esta es una brecha **alta** porque afecta el siguiente paso seguro de una página individual. El follow-up debe empezar como fixture interno de datos; solo un fallo observado justificaría tocar comportamiento en otro PR.

## 8. Auditoría de servicios y estimador

Todos los servicios actuales tienen `id`, nombre, rango `base`, preguntas y opciones con factores. Los 25 servicios tienen rangos de dos extremos y lenguaje de resultado aproximado proporcionado por la app. No se encontró un servicio sin preguntas, sin opciones o sin rango.

| Negocio | Servicios | Preguntas/opciones requeridas | Rangos presentes | Lenguaje aproximado | Slugs para `service` | Riesgo estructural |
|---|---:|---|---|---|---|---|
| Plomería Mario | 4 | Sí; 3/3/3/2 preguntas, opciones de 2 a 4 | Sí, $400–$1,400 en extremos base del negocio | Sí, por UI compartida | Sí; IDs simples y nombres slugificables | Mayor variación interna. `/`, paréntesis y siglas en nombres prueban slugificación por nombre; servicio de 2 preguntas prueba un flujo más corto. |
| Frío Express | 3 | Sí; 3 preguntas por servicio, opciones de 2 a 4 | Sí, $500–$3,200 | Sí | Sí | Instalación tiene escala mayor que mantenimiento; una opción usa factor menor a 1, útil para cálculo. |
| Control Total | 3 | Sí; 3 preguntas por servicio, opciones de 2 a 3 | Sí, $550–$2,400 | Sí | Sí | Categoría no basada en instalación eléctrica/plomería; una pregunta con 2 opciones da contraste limitado. |
| Carmona Hnos | 3 | Sí; 3 preguntas y 3 opciones por servicio | Sí, $650–$4,200 | Sí | Sí, por ID, nombre ES y nombre EN | Único estrés profundo bilingüe; traducciones parciales deben caer a español sin alterar cálculo. |
| De la Hoz | 3 | Sí; 3 preguntas y 3 opciones por servicio | Sí, $500–$2,200 | Sí | Sí | Nombres largos, pero estructura uniforme 3×3; aporta poco contraste de cardinalidad. |
| Instal PV | 3 | Sí; 3 preguntas y 3 opciones por servicio | Sí, $450–$4,200 | Sí | Sí | Gran salto entre reparación y proyecto residencial; útil para detectar estado/rango arrastrado. |
| Servicios Profesionales Martínez | 3 | Sí; 3 preguntas y 3 opciones por servicio | Sí, $500–$1,900 | Sí | Sí | Mezcla electricidad y plomería bajo categoría eléctrica; útil para comprobar que el motor usa el servicio seleccionado, no inferencias de categoría. |
| Solara | 3 | Sí; 3 preguntas y 3 opciones por servicio | Sí, $500–$7,500 | Sí | Sí | Mayor rango base; paneles solares y mantenimiento prueban escalas muy distintas en un mismo fixture. |

### Estructuras que estresan el estimador

- **Cardinalidad variable:** Plomería Mario combina servicios de 2 y 3 preguntas y preguntas de 2, 3 y 4 opciones.
- **Factores por debajo y muy por encima de 1:** existen opciones reductoras y multiplicadores altos, además de factores de zona, lo que prueba redondeo y amplitud de resultado.
- **Escala mixta dentro de un negocio:** Instal PV y Solara combinan servicios de cientos y miles de pesos.
- **Nombres complejos:** acentos, `/`, paréntesis, siglas, nombres largos y `nameEn` ejercitan la normalización de `service`.
- **Categoría frente a servicio:** Martínez y Carmona incluyen servicios que amplían o cruzan la etiqueta principal de categoría.

### Gaps del estimador

- No existe negocio de un solo servicio.
- No existe un fixture mínimo con una sola pregunta válida, ni contraste documentado para el mínimo permitido de opciones.
- Casi todos los servicios usan la matriz uniforme de 3 preguntas × 3 opciones, por lo que la diversidad estructural real se concentra en Plomería Mario.
- No existe una lista de zonas suficientemente larga para estresar el bloque adicional obligatorio del estimador.

Estos gaps no prueban un defecto. Sí limitan la confianza de reutilización y deben tratarse como cobertura de fixtures antes de considerar cambios de fórmula o UI.

## 9. Auditoría de preparación para QA por URL

| Parámetro | Estado actual | Ejemplo recomendado | Qué permite validar | Límite/gap |
|---|---|---|---|---|
| `source` | Compatible en todos los negocios | `?source=google-business-profile` | Normalización, conservación en resumen/handoff y fallo seguro | No depende de campos por negocio; el corpus no aporta contrastes de datos. No debe interpretarse como tracking. |
| `service` | Compatible en todos | `?service=paneles-solares` en Solara | Preselección por ID; también por nombre slugificado y `nameEn` cuando existe | No hay negocio de un solo servicio; nombres complejos deben probarse explícitamente. |
| `campaign` | Compatible en todos | `?campaign=qa-junio` | Conservación de contexto válido y rechazo seguro de valores inválidos | Es contexto de enlace, no analytics ni atribución automática. |
| `lang` | Compatible; inglés profundo parcial | `?lang=en` en Carmona | UI inglesa y campos ingleses con fallback a español | Solo Carmona ofrece cobertura bilingüe sustantiva. Otros fixtures prueban principalmente fallback. |
| `zone` | **Soportado actualmente** | `?service=paneles-solares&zone=marina-vallarta` con una zona real del fixture | Preselección de zona por slug ES o EN y combinación con servicio | No se debe documentar como “no soportado”. La lista máxima de 4 zonas no estresa una selección larga. |

Combinaciones mínimas recomendadas para QA actual:

1. `source + service + campaign` en Solara, para servicio de alto rango y contacto pendiente.
2. `service + zone + lang=en` en Carmona, para preselección bilingüe completa.
3. `source + service` con un nombre que incluya puntuación en Plomería Mario, además del ID canónico.
4. Valores inválidos de cada parámetro junto a uno válido, para comprobar fallo aislado y seguro.

Ningún parámetro debe cambiar rangos base, factores, fórmulas, rutas, slugs o valores del negocio.

## 10. Clasificación de gaps por severidad

### Alta

- Falta WhatsApp ausente como estado real de datos.
- Falta teléfono ausente y, por consecuencia, faltan los casos “solo WhatsApp” y “sin contacto”.
- Falta una estructura mínima válida del estimador que contraste con el patrón dominante y pueda revelar dependencias de cardinalidad.
- La reutilización de rutas está demostrada en cinco ciudades y cinco slugs de categoría; no se identifica una ciudad/categoría obligatoria adicional. El riesgo alto no es cantidad geográfica, sino no cubrir nuevos patrones estructurales cuando se introduzcan.

### Media

- Falta `tone: "professional"` explícito.
- Solo un negocio tiene cobertura inglesa sustantiva.
- Falta una lista de zonas verdaderamente larga.
- Falta un negocio de un solo servicio.
- La variedad de precios bajos/altos sí existe; no hay gap de rango prioritario con los umbrales de esta auditoría.

### Baja

- Las categorías fuera de Puerto Vallarta/electricista no tienen repetición interna.
- No hay ejemplos en más estados, pero tres estados y cinco ciudades son suficientes para la validación estructural actual.
- Hay pequeñas diferencias cosméticas de longitud y copy que pueden probarse con los datos actuales.

## 11. Tabla C — Follow-ups recomendados

| Gap | Por qué importa | Próximo PR recomendado | ¿Data-only o cambio de comportamiento? | Prioridad |
|---|---|---|---|---|
| WhatsApp ausente + teléfono presente | Distingue campo ausente de `whatsappConfirmed: false`. | Agregar un fixture interno mínimo que omita WhatsApp y conserve teléfono. | Data-only de fixture interno | Alta |
| WhatsApp presente + teléfono ausente | Valida el happy path sin depender del campo telefónico. | Incluir el estado en el mismo conjunto interno de fixtures, sin navegación pública. | Data-only de fixture interno | Alta |
| Sin WhatsApp ni teléfono | Valida el fallback seguro final. | Agregar un fixture interno sin contacto y ejecutar QA; abrir PR de comportamiento separado solo si falla. | Data-only primero; comportamiento solo con evidencia | Alta |
| Estructura mínima válida del estimador | Detecta supuestos de 3 servicios, 3 preguntas o 3 opciones. | Fixture interno con 1 servicio y la cardinalidad mínima aceptada por el validador. | Data-only de fixture interno | Alta |
| Lista de zonas larga | Prueba overflow, wrapping y selección móvil. | Ampliar únicamente un fixture interno de QA con etiquetas realistas aprobadas o crear fixture aislado. | Data-only de fixture interno | Media |
| `tone: "professional"` explícito | Permite demostrar el branch profesional en vez de inferirlo del default. | Agregar tono profesional a un fixture interno diseñado para esa cobertura. | Data-only de fixture interno | Media |
| Segundo negocio bilingüe sustantivo | Reduce dependencia de Carmona para toda regresión inglesa. | Crear/ajustar fixture interno con campos ingleses completos en otra categoría. | Data-only de fixture interno | Media |
| Repetición en otra categoría | Ayuda a detectar colisiones o inferencias por ciudad/categoría. | Solo considerar cuando exista otra necesidad de fixture; no agregar por volumen. | Data-only, opcional | Baja |

### Recomendación para el próximo PR

El siguiente PR debe ser un **PR interno, data-only, de cobertura de fixtures demo/QA**. Debe priorizar los cuatro estados faltantes: WhatsApp ausente, teléfono ausente, ausencia total de contacto y negocio de un solo servicio con estructura mínima válida. Puede incluir una lista de zonas larga si no vuelve el cambio difícil de revisar.

Ese PR debe:

- agregar o ajustar únicamente fixtures internos necesarios para validación;
- mantener las páginas como guías individuales;
- evitar crear navegación pública o comportamiento de directorio;
- no cambiar fórmulas, rangos existentes ni lógica del estimador;
- no incluir materiales comerciales o de marketing;
- separar cualquier corrección de comportamiento en un PR posterior respaldado por un caso reproducible.

## 12. Límites de producto

- Esta auditoría es **QA interno**.
- No es un documento de ventas.
- No es client-facing.
- No es un listado o directorio de negocios.
- No clasifica, califica, compara ni recomienda negocios.
- No valida demanda de mercado.
- Solo valida cobertura de datos y capacidad de prueba del producto.
- No autoriza reviews, ratings, rankings, search, filters, marketplace, lead capture, analytics, tracking, dashboard, CRM, login, payments, cookies, database ni rutas públicas nuevas.
