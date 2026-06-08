# Auditoría interna de cobertura de negocios demo

> **Uso interno de QA y validación de producto.** Esta auditoría es una fotografía de los datos actuales. No modifica `businesses.js`, rutas, slugs, rangos, fórmulas ni comportamiento de la aplicación.

## 1. Propósito de la auditoría

Esta auditoría comprueba si los datos actuales de negocios demo cubren suficientes casos y contrastes para validar **Precios Locales como un motor estático reutilizable de guías de precios individuales**.

Responde cuatro preguntas:

1. **¿Qué cobertura ya existe?** Nueve negocios, cinco ciudades/rutas de ciudad, tres estados, cinco slugs de categoría, varios niveles de precio, los cuatro estados de tono y ejemplos en español e inglés.
2. **¿Qué cobertura falta?** Siguen faltando teléfono ausente, WhatsApp confirmado como único contacto y ausencia total de contacto. El fixture interno nuevo cubre WhatsApp ausente con teléfono, un negocio de un solo servicio, una pregunta mínima, una lista de zonas larga y `tone: "professional"` explícito.
3. **¿Qué gaps importan para validar el producto?** Los estados restantes con teléfono ausente son los gaps más importantes porque el fallback sin contacto actual no ofrece copy específico. La estructura mínima del estimador, el tono profesional y la longitud de zonas ya tienen cobertura directa.
4. **¿Qué debe atenderse en PRs posteriores?** Solo deben añadirse fixtures de teléfono ausente cuando exista un contacto confirmado seguro o un fallback sin contacto seguro. Cualquier cambio de comportamiento debe quedar separado y requerir un fallo reproducible.

La auditoría no determina si los negocios, categorías o precios representan el mercado. Solo determina si los fixtures actuales permiten probar el motor.

## 2. Fuentes de datos y método

Fuentes inspeccionadas:

- `businesses.js`, como fuente primaria de identidad, rutas, contacto, zonas, servicios, preguntas, opciones, factores y rangos base;
- `app.js`, únicamente para confirmar cómo se resuelven rutas, contacto, idioma y parámetros URL;
- `scripts/publish-preflight.js` y los shells de rutas existentes, para contrastar publicabilidad y rutas generadas;
- `docs/product-validation-matrix.md` y `docs/source-links-guide.md`, para alinear criterios de QA existentes.

Reglas de lectura usadas en esta auditoría:

- `whatsappConfirmed: false` con un número presente se clasifica como **pendiente/no confirmado**; sin número se clasifica como **WhatsApp ausente**. Un valor de `whatsapp` presente sin ese flag se clasifica como **confirmado según el contrato actual de datos**.
- Un teléfono no vacío se clasifica como **teléfono público disponible**.
- “Español + inglés” exige campos ingleses sustantivos para la experiencia, no solo una nota inglesa de WhatsApp pendiente.
- Para comparar variedad de precios dentro de este corpus, “rango bajo” significa un mínimo base de **$550 MXN o menos** y “rango alto” un máximo base de **$4,000 MXN o más**. Es un umbral interno de cobertura, no una evaluación comercial ni de exactitud.
- “Lista corta de zonas” significa 3 zonas, que es el mínimo entre los fixtures previos; la lista larga del fixture interno contiene 8 zonas y permite estresar wrapping y selección.
- Los estados se normalizan a partir de la ciudad declarada: Baja California Sur, Sinaloa y Jalisco.

El único dato agregado es un fixture ficticio y explícitamente interno de QA, con teléfono simulado; no representa un negocio real ni hace afirmaciones comerciales.

## 3. Resumen cuantitativo

### 3.1 Ciudades, estados y categorías

| Dimensión | Cobertura actual |
|---|---|
| Negocios | 9 |
| Ciudades/slugs de ciudad | 5: Los Cabos, Mazatlán, Guadalajara, Cabo San Lucas y Puerto Vallarta |
| Estados | 3: Baja California Sur (3 negocios), Sinaloa (1) y Jalisco (5) |
| Slugs de categoría | 5: `plomeros`, `aire-acondicionado`, `fumigacion`, `plomeria`, `electricista` |
| Dominios de servicio amplios | 4: plomería, aire acondicionado/refrigeración, fumigación/control de plagas y electricidad/solar |

### 3.2 Conteo por ciudad y categoría de ruta

| Ciudad | Estado | Categoría de ruta | Negocios |
|---|---|---|---:|
| Los Cabos | Baja California Sur | `plomeros` | 1 |
| Mazatlán | Sinaloa | `aire-acondicionado` | 1 |
| Guadalajara | Jalisco | `fumigacion` | 2 |
| Cabo San Lucas | Baja California Sur | `aire-acondicionado` | 1 |
| Cabo San Lucas | Baja California Sur | `plomeria` | 1 |
| Puerto Vallarta | Jalisco | `electricista` | 3 |

La repetición de tres negocios en Puerto Vallarta/electricista y dos en Guadalajara/fumigacion permite comparar contenido distinto bajo una misma estructura de ciudad/categoría. `plomeros` frente a `plomeria` demuestra dos slugs para el mismo dominio amplio de plomería.

### 3.3 Resumen de estados de contacto

| Estado | Conteo | Negocios |
|---|---:|---|
| WhatsApp confirmado | 5 | Plomería Mario, Frío Express, Control Total, Carmona Hnos, De la Hoz |
| WhatsApp pendiente/no confirmado | 3 | Instal PV, Servicios Profesionales Martínez, Solara |
| WhatsApp ausente | 1 | Fixture interno de control preventivo |
| Teléfono público disponible | 9 | Todos |
| Teléfono público ausente | 0 | — |
| Ambos campos, WhatsApp y teléfono, presentes | 8 | Los ocho fixtures previos; en 3 el WhatsApp está pendiente |
| WhatsApp confirmado como único contacto | 0 | — |
| Solo WhatsApp presente, sin teléfono | 0 | — |
| Solo teléfono utilizable, con WhatsApp pendiente/ausente | 4 | Instal PV, Servicios Profesionales Martínez, Solara y el fixture interno |
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
| Fixture interno de control preventivo | Guadalajara | Jalisco | Control preventivo de plagas (`fumigacion`) | `/guadalajara/fumigacion/fixture-interno-control-preventivo` | 1 | 8 | Ausente | Disponible; número simulado de QA | Solo español | `professional` | Fixture explícitamente interno: un servicio, una pregunta con dos opciones, rango aproximado bajo y lista larga con acentos y nombres compuestos. |
| Solara Proyectos Eléctricos y Paneles Solares | Puerto Vallarta | Jalisco | Electricista | `/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares` | 3 | 3 | Pendiente/no confirmado | Disponible | Español; nota de contacto también en inglés | Ausente | Mayor máximo base ($7,500); mezcla mantenimiento bajo y solar alto. |

## 5. Tabla B — Matriz de cobertura

| Área de cobertura | ¿Cubierto? | Ejemplo | Por qué importa | Severidad del gap | ¿Follow-up? |
|---|---|---|---|---|---|
| Varias ciudades | Sí | Cinco slugs de ciudad | Detecta supuestos accidentales de copy o ruta ligados a una localidad. | Baja | No |
| Varios estados | Sí, parcial | B.C.S., Sinaloa y Jalisco | Ayuda a probar reutilización geográfica, pero solo en tres estados del país. | Baja | No inmediato |
| Varias categorías | Sí | Plomería, clima, fumigación y electricidad | Reduce el riesgo de que preguntas/UI dependan de una sola categoría. | Baja | No |
| Repetición ciudad/categoría | Sí | Tres electricistas en Puerto Vallarta y dos fixtures de fumigación en Guadalajara | Permite contraste dentro de rutas estructurales sin sumar ciudades o categorías innecesarias. | Baja | No |
| WhatsApp confirmado | Sí | Carmona Hnos | Valida el handoff principal a `wa.me`. | Baja | No |
| WhatsApp pendiente/no confirmado | Sí | Instal PV | Valida que no se publique un handoff no confirmado y que aparezca llamada. | Baja | No |
| WhatsApp ausente | Sí | Fixture interno de control preventivo | Distingue el campo ausente del número presente con flag pendiente. | Baja | No |
| Teléfono disponible | Sí | Todos | Valida enlace `tel:` y fallback de llamada. | Baja | No |
| Teléfono ausente | No | — | No se prueba la presentación cuando WhatsApp sí existe pero no hay llamada. | **Alta** | Sí |
| Ambos contactos presentes | Sí | Todos | Valida el estado más común de datos completos. | Baja | No |
| Solo WhatsApp, sin teléfono | No | — | Falta confirmar que la página permanece segura sin teléfono. | **Alta** | Sí |
| Solo teléfono utilizable | Sí | Instal PV | Cubre WhatsApp pendiente con llamada pública como salida segura. | Baja | No |
| Sin contacto utilizable | No | — | Es el fallback crítico final; no hay fixture que lo ejercite. | **Alta** | Sí |
| Multi-servicio | Sí | Plomería Mario | Valida selección, cambio y reinicio de estado entre servicios. | Baja | No |
| Un solo servicio | Sí | Fixture interno de control preventivo | Valida la estructura mínima del selector/estimador. | Baja | No |
| Lista corta de zonas | Sí | De la Hoz (3) | Valida el mínimo actual, aunque no el mínimo teórico de 1 zona. | Baja | No inmediato |
| Lista larga de zonas | Sí | Fixture interno con 8 zonas | Estresa overflow, wrapping, selección y nombres con acentos o varias palabras. | Baja | No |
| Rangos bajos | Sí | Plomería Mario desde $400 | Valida formato de cifras bajas y factores menores. | Baja | No |
| Rangos altos | Sí | Solara hasta $7,500 | Valida formato y legibilidad de cifras más largas. | Baja | No |
| Mezcla barato/caro | Sí | Instal PV y Solara | Valida cambios grandes de escala dentro del mismo negocio. | Baja | No |
| Solo español | Sí | Plomería Mario | Valida el fallback de copy cuando se solicita inglés sin traducción específica. | Baja | No |
| Campos/copy en inglés | Sí, parcial | Carmona Hnos | Existe un caso bilingüe profundo; otros solo tienen una nota de contacto inglesa. | **Media** | Sí |
| `tone: professional` | Sí | Fixture interno de control preventivo | Valida el branch profesional explícito. | Baja | No |
| `tone: friendly` | Sí | Plomería Mario | Valida copy de voz amigable. | Baja | No |
| `tone: technical` | Sí | Frío Express | Valida copy de voz técnica. | Baja | No |
| `tone` ausente/default | Sí | Seis negocios | Valida el comportamiento por defecto y revela que domina el corpus. | Baja | No |
| Compatibilidad con `source` | Sí | Todos | El parámetro es transversal y debe conservar contexto sin tracking. | Baja | No |
| Preselección `service` | Sí | Todos tienen IDs slug-safe | Valida deep links a un servicio individual. | Baja | No |
| Contexto `campaign` | Sí | Todos | Valida contexto textual permitido; no implica analytics. | Baja | No |
| Preselección `lang` | Sí, parcial | Carmona para inglés completo | El motor alterna UI; el contenido inglés profundo solo se prueba bien en un negocio. | **Media** | Sí |
| Preselección `zone` | Sí | Cualquier zona existente | La app sí soporta `zone`; debe probarse con slug válido e inválido. | Baja | No |
| Preguntas/opciones del estimador | Sí | 23 servicios con preguntas y opciones | Valida el flujo base de selección y cálculo. | Baja | No |
| Estructura mínima o atípica del estimador | Sí | Fixture interno: 1 servicio, 1 pregunta y 2 opciones | Contrasta con el patrón dominante sin cambiar fórmulas. | Baja | No |

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
| Fixture interno de control preventivo | `/guadalajara/fumigacion/fixture-interno-control-preventivo` | `guadalajara` | `fumigacion` | `fixture-interno-control-preventivo` | Sí | Ruta interna explícita que reutiliza ciudad/categoría sin colisión. |

No se observan slugs inválidos con el contrato actual. La concentración de tres rutas bajo Puerto Vallarta/electricista es útil para detectar colisiones; los slugs de negocio son distintos.

## 7. Auditoría de estados de contacto

| Flujo que debe poder probarse | ¿Representado? | Fixture actual | Resultado de cobertura |
|---|---|---|---|
| WhatsApp confirmado | Sí | Cinco negocios | Se puede validar CTA directo, detalle de contacto y handoff del resumen. |
| WhatsApp pendiente/no confirmado | Sí | Tres negocios de Puerto Vallarta | Se puede validar que WhatsApp quede oculto/no utilizable, aparezca la nota pendiente y se ofrezca llamada. |
| WhatsApp ausente | Sí | Fixture interno de control preventivo | El número se omite y el teléfono público queda como salida segura. |
| Fallback a teléfono público | Sí | Instal PV, Martínez, Solara y el fixture interno | Se puede validar `tel:` tanto con WhatsApp pendiente como con el campo ausente. |
| WhatsApp confirmado sin teléfono | No | — | No se valida la ausencia del enlace telefónico con handoff principal disponible. |
| Sin contacto | No | — | No se valida la presentación final cuando no hay WhatsApp confirmado ni teléfono. |

**Conclusión de contacto:** el happy path, WhatsApp pendiente y WhatsApp ausente con teléfono están cubiertos. Siguen sin cobertura el caso de WhatsApp confirmado sin teléfono y la ausencia total de contacto. No se agrega un fixture sin contacto porque el copy compartido actual presupone que existe un teléfono; cualquier cambio de ese comportamiento debe ir en un PR separado respaldado por un fallo reproducible.

## 8. Auditoría de servicios y estimador

Todos los servicios actuales tienen `id`, nombre, rango `base`, preguntas y opciones con factores. Los 26 servicios tienen rangos de dos extremos y lenguaje de resultado aproximado proporcionado por la app. No se encontró un servicio sin preguntas, sin opciones o sin rango.

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
| Fixture interno de control preventivo | 1 | Sí; 1 pregunta con 2 opciones | Sí, $350–$700 | Sí, por UI compartida | Sí; `inspeccion-preventiva` | Cubre cardinalidad mínima válida, WhatsApp ausente, tono profesional y ocho zonas sin tocar fórmulas. |

### Estructuras que estresan el estimador

- **Cardinalidad variable:** Plomería Mario combina servicios de 2 y 3 preguntas y preguntas de 2, 3 y 4 opciones.
- **Factores por debajo y muy por encima de 1:** existen opciones reductoras y multiplicadores altos, además de factores de zona, lo que prueba redondeo y amplitud de resultado.
- **Escala mixta dentro de un negocio:** Instal PV y Solara combinan servicios de cientos y miles de pesos.
- **Nombres complejos:** acentos, `/`, paréntesis, siglas, nombres largos y `nameEn` ejercitan la normalización de `service`.
- **Categoría frente a servicio:** Martínez y Carmona incluyen servicios que amplían o cruzan la etiqueta principal de categoría.

### Gaps del estimador

- Ya existe un negocio de un solo servicio.
- Ya existe un fixture mínimo con una pregunta válida y dos opciones.
- Casi todos los servicios usan la matriz uniforme de 3 preguntas × 3 opciones, por lo que la diversidad estructural real se concentra en Plomería Mario.
- La lista de ocho zonas del fixture interno permite estresar el bloque obligatorio del estimador.

Los gaps restantes no prueban un defecto. La cardinalidad mínima y la lista larga ya pueden validarse sin considerar cambios de fórmula o UI.

## 9. Auditoría de preparación para QA por URL

| Parámetro | Estado actual | Ejemplo recomendado | Qué permite validar | Límite/gap |
|---|---|---|---|---|
| `source` | Compatible en todos los negocios | `?source=google-business-profile` | Normalización, conservación en resumen/handoff y fallo seguro | No depende de campos por negocio; el corpus no aporta contrastes de datos. No debe interpretarse como tracking. |
| `service` | Compatible en todos | `?service=inspeccion-preventiva` en el fixture interno | Preselección por ID en un negocio de un solo servicio; también por nombre slugificado y `nameEn` cuando existe | Los nombres complejos deben seguir probándose explícitamente en fixtures existentes. |
| `campaign` | Compatible en todos | `?campaign=qa-junio` | Conservación de contexto válido y rechazo seguro de valores inválidos | Es contexto de enlace, no analytics ni atribución automática. |
| `lang` | Compatible; inglés profundo parcial | `?lang=en` en Carmona | UI inglesa y campos ingleses con fallback a español | Solo Carmona ofrece cobertura bilingüe sustantiva. Otros fixtures prueban principalmente fallback. |
| `zone` | **Soportado actualmente** | `?service=inspeccion-preventiva&zone=san-juan-de-ocotan` en el fixture interno | Preselección de zona por slug ES o EN y combinación con servicio | No se debe documentar como “no soportado”. Ocho zonas permiten probar una selección larga. |

Combinaciones mínimas recomendadas para QA actual:

1. `source + service + campaign` en Solara, para servicio de alto rango y contacto pendiente.
2. `service + zone + lang=en` en Carmona, para preselección bilingüe completa.
3. `source + service` con un nombre que incluya puntuación en Plomería Mario, además del ID canónico.
4. Valores inválidos de cada parámetro junto a uno válido, para comprobar fallo aislado y seguro.

Ningún parámetro debe cambiar rangos base, factores, fórmulas, rutas, slugs o valores del negocio.

## 10. Clasificación de gaps por severidad

### Alta

- Falta teléfono ausente y, por consecuencia, faltan los casos “solo WhatsApp” y “sin contacto”.
- El estado sin contacto no debe añadirse hasta que exista copy de fallback seguro que no presuponga un teléfono.
- La reutilización de rutas está demostrada en cinco ciudades y cinco slugs de categoría; no se identifica una ciudad/categoría obligatoria adicional. El riesgo alto no es cantidad geográfica, sino no cubrir nuevos patrones estructurales cuando se introduzcan.

### Media

- Solo un negocio tiene cobertura inglesa sustantiva.
- La variedad de precios bajos/altos sí existe; no hay gap de rango prioritario con los umbrales de esta auditoría.

### Baja

- Puerto Vallarta/electricista y Guadalajara/fumigacion tienen repetición interna; las demás categorías conservan un solo ejemplo, sin que esto sea un gap prioritario.
- No hay ejemplos en más estados, pero tres estados y cinco ciudades son suficientes para la validación estructural actual.
- Hay pequeñas diferencias cosméticas de longitud y copy que pueden probarse con los datos actuales.

## 11. Tabla C — Follow-ups recomendados

| Gap | Por qué importa | Próximo PR recomendado | ¿Data-only o cambio de comportamiento? | Prioridad |
|---|---|---|---|---|
| WhatsApp ausente + teléfono presente | Distingue campo ausente de un número pendiente. | Cubierto por el fixture interno de control preventivo. | Data-only completado | Cerrado |
| WhatsApp presente + teléfono ausente | Valida el happy path sin depender del campo telefónico. | Mantener pendiente hasta disponer de un WhatsApp confirmado y seguro para un fixture interno; no inventar un contacto utilizable. | Data-only cuando exista dato seguro | Alta |
| Sin WhatsApp ni teléfono | Valida el fallback seguro final. | El copy actual presupone un teléfono; corregir comportamiento en un PR separado antes de publicar el fixture sin contacto. | Comportamiento separado, luego data-only | Alta |
| Estructura mínima válida del estimador | Detecta supuestos de 3 servicios, 3 preguntas o 3 opciones. | Cubierto con 1 servicio, 1 pregunta y 2 opciones. | Data-only completado | Cerrado |
| Lista de zonas larga | Prueba overflow, wrapping y selección móvil. | Cubierto con ocho zonas realistas en el fixture interno. | Data-only completado | Cerrado |
| `tone: "professional"` explícito | Permite demostrar el branch profesional en vez de inferirlo del default. | Cubierto por el fixture interno de control preventivo. | Data-only completado | Cerrado |
| Segundo negocio bilingüe sustantivo | Reduce dependencia de Carmona para toda regresión inglesa. | Crear/ajustar fixture interno con campos ingleses completos en otra categoría. | Data-only de fixture interno | Media |
| Repetición en otra categoría | Ayuda a detectar colisiones o inferencias por ciudad/categoría. | Solo considerar cuando exista otra necesidad de fixture; no agregar por volumen. | Data-only, opcional | Baja |

### Recomendación para el próximo PR

Este PR interno y data-only cubre WhatsApp ausente con teléfono, un negocio de un solo servicio con estructura mínima válida, una lista larga de zonas y tono profesional explícito. Los estados con teléfono ausente permanecen fuera porque requieren un WhatsApp confirmado seguro o copy específico de ausencia total de contacto.

Cualquier PR posterior debe:

- agregar o ajustar únicamente fixtures internos necesarios para validación;
- mantener las páginas como guías individuales;
- evitar crear navegación pública o comportamiento de directorio;
- no cambiar fórmulas, rangos existentes ni lógica del estimador;
- no incluir materiales comerciales o de marketing;
- separar cualquier corrección de comportamiento en un PR posterior respaldado por un caso reproducible.

## 12. Checklist E2E relacionado

Usar el [checklist interno E2E del flujo de una guía individual](e2e-guide-user-flow-checklist.md) para convertir esta cobertura de fixtures en corridas completas de entrada, estimador, resultado, copias, handoff, parámetros URL y móvil. Los gaps de contacto ausente registrados en esta auditoría deben marcarse como gaps de validación sin inventar fixtures.

## 13. Límites de producto

- Esta auditoría es **QA interno**.
- No es un documento de ventas.
- No es client-facing.
- No es un listado o directorio de negocios.
- No clasifica, califica, compara ni recomienda negocios.
- No valida demanda de mercado.
- Solo valida cobertura de datos y capacidad de prueba del producto.
- No autoriza reviews, ratings, rankings, search, filters, marketplace, lead capture, analytics, tracking, dashboard, CRM, login, payments, cookies, database ni rutas públicas nuevas.
