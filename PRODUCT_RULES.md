# Precios Locales Product Rules

These rules define the product boundary for all repository work.

## Product identity

- Precios Locales is a static price-guide engine for individual local business pages in Mexico.
- It is not a directory, marketplace, ranking site, search engine, CRM, analytics product, or lead capture system.
- `/priceguide/` is an internal QA/demo view. It is not a public directory and must not be presented or promoted as one.
- Real individual business pages use `/priceguide/{citySlug}/{categorySlug}/{businessSlug}/`.

## Prohibited capabilities

Do not add a backend, database, login, payments, cookies, analytics, reviews, ratings, search, rankings, or public listing behavior.

Do not introduce directory, marketplace, CRM, lead-capture, tracking, or behavioral-profiling behavior under another name.

## Pricing and claims

- Pricing language must describe an **estimación** or **rango aproximado**.
- Never promise or imply a final price. The business confirms the final price directly.
- Do not invent prices, business facts, service claims, coverage claims, availability, credentials, guarantees, or validation results.
- Pricing logic, estimator formulas, and business data may change only when a specifically authorized task supplies the required approved inputs.

## Contact behavior

- A business's WhatsApp status may be confirmed, unconfirmed, or missing.
- Never turn unconfirmed or missing WhatsApp data into an active WhatsApp link.
- Never create a broken contact link.
- Preserve safe fallback behavior when a confirmed contact method is unavailable.

## URL context parameters

- `source` and `campaign` parameters may mark context in generated messages or links only.
- They are not analytics, tracking, attribution reporting, visit storage, or user profiling.
- Do not persist, aggregate, transmit, dashboard, or interpret these parameters as behavioral data.
