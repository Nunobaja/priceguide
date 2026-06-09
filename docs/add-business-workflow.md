# Add a business: intake-to-Codex workflow

Use this workflow when a non-technical person needs to provide the approved information for one business and ask Codex to add it to Precios Locales.

This is a documentation-first handoff. The person completing the intake does not need to edit code. Codex must treat the completed intake as the only source of business data, add one entry to `businesses.js`, run the required checks and return the final individual URL.

## Product and data boundaries

- Add one individual business guide; do not create directory, search, ranking, review or lead-capture behavior.
- Do not redesign or change application behavior, estimator formulas, pricing logic, scripts or existing business data.
- Do not invent or infer prices, claims, services, service areas, phone numbers, WhatsApp status, calculation rules, translations or any other business data.
- A blank, ambiguous or `[POR CONFIRMAR]` field is not approval. Codex must stop and request the missing information instead of guessing.
- The completed intake is the only approved source for the new `businesses.js` entry. Existing businesses may be used to understand structure, never as a source of facts for the new business.
- Only `businesses.js` should be edited by hand. The publish preflight may generate the expected static route shells; do not hand-edit those generated files.
- `/priceguide/` is an internal QA/demo view, not a public directory. The deliverable is the new individual business URL.

## Workflow at a glance

1. Make a copy of the simple intake below.
2. Ask the owner or authorized contact to complete every required field and mark the WhatsApp status explicitly.
3. Resolve every blank and `[POR CONFIRMAR]` value needed for publication.
4. Paste the completed intake below the reusable Codex prompt in this document.
5. Codex adds exactly one business to `businesses.js`, using only the completed intake.
6. Codex runs all four required commands and verifies the generated individual route shell.
7. Codex reviews the diff to ensure there are no unrelated or hand-written runtime changes.
8. Codex returns the exact final individual URL:

   ```text
   /priceguide/{citySlug}/{categorySlug}/{businessSlug}/
   ```

---

## Simple business intake template

Copy everything in this section into a new document. Replace every bracketed instruction. If a required answer is unknown, write `[POR CONFIRMAR]`; do not estimate it.

```md
# Business intake

## 1. Approval

- Business name: [public name]
- Person approving this information: [name and role]
- Approval date: [YYYY-MM-DD]
- This information is approved for publication: [YES / NO]

## 2. Identity and final route

- City shown to visitors: [city, state]
- City slug: [lowercase words separated by hyphens]
- Category shown to visitors: [category]
- Category slug: [lowercase words separated by hyphens]
- Business slug: [lowercase words separated by hyphens]
- Currency: [for example, MXN]
- Currency label: [for example, pesos mexicanos]
- Tone: [professional / friendly / technical / omit for default]

## 3. Public contact

- Public phone: [digits only / NONE]
- WhatsApp status: [CONFIRMED / UNCONFIRMED / ABSENT]
- WhatsApp number: [country code + number, digits only / NONE]
- If UNCONFIRMED, public pending note: [exact approved text]

## 4. Service areas

List every approved zone and its exact calculation factor. Use `1.0` when the zone does not change the base range. Do not use words such as “a little more”; provide the approved number.

1. Zone: [public label]
   - Factor: [number]
2. Zone: [public label]
   - Factor: [number]

## 5. Services and calculation rules

Copy this service block for every approved service. Every base range, factor and fixed addition must be supplied explicitly. Use `0` when there is no fixed addition.

### Service 1

- Service ID: [stable lowercase ID with hyphens]
- Public service name: [name]
- Base minimum: [number, no currency symbol]
- Base maximum: [number, no currency symbol]

#### Question 1

- Question ID: [stable lowercase ID with hyphens]
- Public question: [text]

Options:
1. Label: [text]
   - Factor: [number]
   - Fixed addition: [number]
2. Label: [text]
   - Factor: [number]
   - Fixed addition: [number]

#### Question 2

- Question ID: [stable lowercase ID with hyphens]
- Public question: [text]

Options:
1. Label: [text]
   - Factor: [number]
   - Fixed addition: [number]
2. Label: [text]
   - Factor: [number]
   - Fixed addition: [number]

## 6. Optional approved public copy

Write `OMIT` for anything not supplied. Codex must not create marketing copy to fill an omitted field.

- Category label: [text / OMIT]
- Hero headline: [exact text / OMIT]
- Hero subheadline: [exact text / OMIT]
- Estimate introduction: [exact text / OMIT]
- Price disclaimer: [exact text / OMIT]
- Category disclaimer: [exact text / OMIT]
- Service-area note: [exact text / OMIT]
- Pricing notes: [exact text / OMIT]
- Metadata title: [exact text / OMIT]
- Metadata description: [exact text / OMIT]
- Share title: [exact text / OMIT]
- Share description: [exact text / OMIT]
- Brand initial: [exact text / OMIT]
- Brand accent color: [approved hex color / OMIT]
- Brand logo text: [exact text / OMIT]
- English content or translations: [exact approved fields / OMIT]

## 7. Final confirmation

- [ ] Names and slugs are approved.
- [ ] Phone and WhatsApp status are accurate.
- [ ] Every service, question and option is approved.
- [ ] Every base range, factor and fixed addition is approved.
- [ ] Every service area and zone factor is approved.
- [ ] No required value is blank or marked `[POR CONFIRMAR]`.
- [ ] The guide presents estimated ranges; the business confirms the final price.
```

### How to record WhatsApp safely

Use exactly one of these cases:

| Intake status | What Codex should put in `businesses.js` | Expected behavior |
|---|---|---|
| `CONFIRMED` | Add `whatsapp` in Mexico format (`52` plus 10 digits). Do not set `whatsappConfirmed: false`. | The WhatsApp action may open `wa.me` with the confirmed number. |
| `UNCONFIRMED` | If a candidate number was supplied, add it as `whatsapp`; always add `whatsappConfirmed: false` and the supplied `whatsappPendingNote`. | No active WhatsApp link. The interface may show the approved pending note and use a phone fallback if one exists. |
| `ABSENT` | Omit `whatsapp` and add `whatsappConfirmed: false`. Do not invent or copy a number from `phone`. | No active WhatsApp link. Use the existing safe phone or no-contact fallback. |

A phone number and a WhatsApp number are not automatically interchangeable. Never mark WhatsApp confirmed because the public phone exists.

---

## Filled reference example: Plomería Mario

This example is a transcription of the existing `Plomería Mario` configuration in `businesses.js`. It demonstrates the intake format only; it is not a request to add or modify that business, and it must not be treated as proof of external owner approval.

```md
# Business intake

## 1. Approval

- Business name: Plomería Mario
- Person approving this information: Existing repository reference only
- Approval date: Existing repository reference only
- This information is approved for publication: Existing repository reference only

## 2. Identity and final route

- City shown to visitors: Los Cabos
- City slug: los-cabos
- Category shown to visitors: Plomería profesional
- Category slug: plomeros
- Business slug: plomeria-mario
- Currency: MXN
- Currency label: pesos mexicanos
- Tone: friendly

## 3. Public contact

- Public phone: 6241234567
- WhatsApp status: CONFIRMED (as represented by the existing configuration)
- WhatsApp number: 526241234567
- If UNCONFIRMED, public pending note: Not applicable

## 4. Service areas

1. Zone: Centro / San José
   - Factor: 1.0
2. Zone: Cabo San Lucas
   - Factor: 1.0
3. Zone: Corredor turístico
   - Factor: 1.15
4. Zone: Afueras
   - Factor: 1.2

## 5. Services and calculation rules

### Service 1

- Service ID: fuga
- Public service name: Reparación de fuga
- Base minimum: 450
- Base maximum: 900

#### Question 1

- Question ID: lugar
- Public question: ¿Dónde es la fuga?

Options:
1. Label: Llave o regadera
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Tubería visible
   - Factor: 1.2
   - Fixed addition: 0
3. Label: Dentro de muro o piso
   - Factor: 1.8
   - Fixed addition: 0

#### Question 2

- Question ID: urgencia
- Public question: ¿Qué tan urgente es?

Options:
1. Label: Puede esperar unos días
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Esta semana
   - Factor: 1.1
   - Fixed addition: 0
3. Label: Hoy / emergencia
   - Factor: 1.4
   - Fixed addition: 0

#### Question 3

- Question ID: tipo
- Public question: ¿Es casa o negocio?

Options:
1. Label: Casa
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Negocio / edificio
   - Factor: 1.25
   - Fixed addition: 0

### Service 2

- Service ID: calentador
- Public service name: Calentador / boiler
- Base minimum: 600
- Base maximum: 1400

#### Question 1

- Question ID: trabajo
- Public question: ¿Qué necesitas?

Options:
1. Label: Mantenimiento
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Reparación
   - Factor: 1.4
   - Fixed addition: 0
3. Label: Instalación nueva
   - Factor: 1.9
   - Fixed addition: 0

#### Question 2

- Question ID: tipo-equipo
- Public question: ¿Qué tipo de calentador?

Options:
1. Label: De paso
   - Factor: 1.0
   - Fixed addition: 0
2. Label: De depósito
   - Factor: 1.15
   - Fixed addition: 0
3. Label: Solar
   - Factor: 1.5
   - Fixed addition: 0

#### Question 3

- Question ID: urgencia
- Public question: ¿Qué tan urgente?

Options:
1. Label: Esta semana
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Hoy / emergencia
   - Factor: 1.35
   - Fixed addition: 0

### Service 3

- Service ID: destape
- Public service name: Destape de drenaje
- Base minimum: 400
- Base maximum: 850

#### Question 1

- Question ID: punto
- Public question: ¿Qué está tapado?

Options:
1. Label: Lavabo / fregadero
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Inodoro / WC
   - Factor: 1.2
   - Fixed addition: 0
3. Label: Drenaje principal
   - Factor: 1.7
   - Fixed addition: 0

#### Question 2

- Question ID: acceso
- Public question: ¿Hay registro accesible?

Options:
1. Label: Sí, fácil acceso
   - Factor: 1.0
   - Fixed addition: 0
2. Label: No estoy seguro
   - Factor: 1.15
   - Fixed addition: 0
3. Label: No hay registro
   - Factor: 1.4
   - Fixed addition: 0

#### Question 3

- Question ID: urgencia
- Public question: ¿Qué tan urgente?

Options:
1. Label: Esta semana
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Hoy / emergencia
   - Factor: 1.35
   - Fixed addition: 0

### Service 4

- Service ID: instalacion
- Public service name: Instalación (WC, llaves, tarja)
- Base minimum: 500
- Base maximum: 1100

#### Question 1

- Question ID: pieza
- Public question: ¿Qué vas a instalar?

Options:
1. Label: Llave / mezcladora
   - Factor: 1.0
   - Fixed addition: 0
2. Label: WC / inodoro
   - Factor: 1.4
   - Fixed addition: 0
3. Label: Tarja / lavabo
   - Factor: 1.3
   - Fixed addition: 0
4. Label: Varias piezas
   - Factor: 1.8
   - Fixed addition: 0

#### Question 2

- Question ID: material
- Public question: ¿Quién pone el material?

Options:
1. Label: Yo ya lo tengo
   - Factor: 1.0
   - Fixed addition: 0
2. Label: Quiero que lo consigan
   - Factor: 1.3
   - Fixed addition: 0

## 6. Optional approved public copy

- Category label: OMIT
- Hero headline: OMIT
- Hero subheadline: OMIT
- Estimate introduction: OMIT
- Price disclaimer: OMIT
- Category disclaimer: OMIT
- Service-area note: OMIT
- Pricing notes: OMIT
- Metadata title: OMIT
- Metadata description: OMIT
- Share title: OMIT
- Share description: OMIT
- Brand initial: OMIT
- Brand accent color: OMIT
- Brand logo text: OMIT
- English content or translations: OMIT

## 7. Final confirmation

- Existing repository reference; do not use this example as approval for a future business.
```

The example's individual URL is:

```text
/priceguide/los-cabos/plomeros/plomeria-mario/
```

---

## Reusable Codex prompt

Copy this prompt, then paste the completed intake where indicated.

```text
Add exactly one new business to Precios Locales from the filled intake sheet below.

Source-of-truth rules:
- Use only the filled intake sheet as the source of the new business data.
- Do not invent, infer, rewrite, improve or copy prices, claims, service details, zones, phone numbers, WhatsApp data, factors, fixed additions, translations or other business facts.
- Do not copy business facts from another entry. Existing entries may be inspected only to follow the established JavaScript structure.
- If any required value is blank, ambiguous, contradictory, marked [POR CONFIRMAR], or lacks an exact calculation rule, stop and list what must be confirmed. Do not change files.
- Do not change any existing business data.

Implementation scope:
- Add exactly one entry to businesses.js.
- Manually edit only businesses.js. Do not hand-edit app.js, styles, routes, scripts, pricing logic, estimator formulas or generated route shells.
- The publish preflight is allowed to generate the new route shells from businesses.js.
- Do not redesign or add reviews, search, rankings, directory behavior, backend, database, CRM, login, payments, analytics, cookies or lead capture.
- Do not update TASK_QUEUE.md.

WhatsApp safety:
- CONFIRMED: use the supplied Mexico-format WhatsApp number and allow the existing confirmed WhatsApp behavior.
- UNCONFIRMED: set whatsappConfirmed: false. Use a supplied candidate WhatsApp number only if it appears in the intake, and include only the supplied pending note. Ensure no active WhatsApp link is created.
- ABSENT: omit whatsapp and set whatsappConfirmed: false. Do not copy the phone number into WhatsApp. Ensure the existing phone or no-contact fallback is used safely.

Validation and route steps:
1. Run: node --check businesses.js
2. Run: node --check app.js
3. Run: node scripts/publish-preflight.js
4. Run: node scripts/validate-site.js
5. Build the final route from the exact intake slugs:
   /priceguide/{citySlug}/{categorySlug}/{businessSlug}/
6. Verify the generated route shell exists at:
   priceguide/{citySlug}/{categorySlug}/{businessSlug}/index.html
7. Confirm the final diff contains only the intended businesses.js entry and route shells generated by the preflight. Report any unexpected change instead of keeping it.
8. Confirm WhatsApp behavior matches the intake status without opening or sending a real message.

Final response:
- Summarize the new businesses.js entry.
- Report each required command and whether it passed.
- Report the WhatsApp status and expected safe behavior.
- Return the exact final individual URL with a trailing slash:
  /priceguide/{citySlug}/{categorySlug}/{businessSlug}/
- Do not call /priceguide/ a public directory.

FILLED INTAKE SHEET
[PASTE THE COMPLETED INTAKE HERE]
END FILLED INTAKE SHEET
```

### Why validation runs in this order

`node scripts/publish-preflight.js` checks syntax, generates the route shells and validates the complete site. The standalone `node scripts/validate-site.js` command then confirms the post-generation state. All four required commands must pass and be reported.

---

## Post-add validation checklist

### Intake fidelity

- [ ] Exactly one new business was added.
- [ ] Every new value can be traced directly to the filled intake.
- [ ] No price, claim, service, zone, phone number, factor, fixed addition or translation was invented.
- [ ] Existing business entries are unchanged.
- [ ] No estimator formula or shared pricing logic changed.

### Contact safety

- [ ] `CONFIRMED`: `whatsapp` is the supplied `52` plus 10-digit number and the active action points to that exact number.
- [ ] `UNCONFIRMED`: `whatsappConfirmed: false` is present, the WhatsApp action is inactive and only the supplied pending note is shown.
- [ ] `ABSENT`: `whatsapp` is omitted, `whatsappConfirmed: false` is present and no number was copied or invented.
- [ ] If confirmed WhatsApp is unavailable, the existing phone fallback or no-contact fallback behaves safely.
- [ ] No real WhatsApp message was sent during validation.

### Required commands

Run and record all four commands:

```sh
node --check businesses.js
node --check app.js
node scripts/publish-preflight.js
node scripts/validate-site.js
```

- [ ] `node --check businesses.js` passes.
- [ ] `node --check app.js` passes.
- [ ] `node scripts/publish-preflight.js` passes and ends with `Preflight passed.`
- [ ] `node scripts/validate-site.js` passes after shell generation.

### Route and final URL

Using the exact intake slugs, set:

```text
citySlug = [CITY SLUG]
categorySlug = [CATEGORY SLUG]
businessSlug = [BUSINESS SLUG]
```

The final individual URL is:

```text
/priceguide/[CITY SLUG]/[CATEGORY SLUG]/[BUSINESS SLUG]/
```

The required route shell is:

```text
priceguide/[CITY SLUG]/[CATEGORY SLUG]/[BUSINESS SLUG]/index.html
```

Confirm it from the repository root with:

```sh
test -f "priceguide/[CITY SLUG]/[CATEGORY SLUG]/[BUSINESS SLUG]/index.html"
```

- [ ] The shell exists.
- [ ] The URL uses the exact `citySlug/categorySlug/businessSlug` values from `businesses.js`.
- [ ] The returned URL starts with `/priceguide/` and ends with `/`.
- [ ] A direct visit loads the individual business guide.
- [ ] The page shows the correct business, services, zones and contact fallback.

### Scope and diff review

- [ ] Hand-written changes are limited to the new `businesses.js` entry.
- [ ] Any other changed files are only route shells generated by `node scripts/publish-preflight.js` for the new business.
- [ ] No app, styles, scripts, shared routes, pricing logic or existing route shells were manually changed.
- [ ] No prohibited product capability was added.
- [ ] The final response includes the exact URL and every validation result.

## Final handoff format

Codex should end with a concise handoff like this:

```text
Business added: [BUSINESS NAME]
WhatsApp: [CONFIRMED — active for supplied number / UNCONFIRMED — inactive with safe fallback / ABSENT — safe fallback only]
Checks: [list each required command and result]
Route shell: priceguide/[CITY SLUG]/[CATEGORY SLUG]/[BUSINESS SLUG]/index.html
Final individual URL: /priceguide/[CITY SLUG]/[CATEGORY SLUG]/[BUSINESS SLUG]/
```
