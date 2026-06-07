# Precios Locales

Hosted price guide directory for Home Services businesses in Mexico without a website.

Each business gets a public URL with an interactive price estimator and WhatsApp handoff for Google Business Profile traffic. Lead capture is intentionally reserved for a later phase.

## Demo businesses

- `/los-cabos/plomeros/plomeria-mario`
- `/mazatlan/aire-acondicionado/frio-express`
- `/guadalajara/fumigacion/control-total`

Business identity, service areas, pricing, and estimator questions live in `businesses.js`. The shared page reads `window.location.pathname` and renders the matching configuration.

## Static hosting

Configure the static host to serve `index.html` as the fallback for nested URLs. The application keeps the requested pathname, resolves it against `businesses.js`, and shows a not-found state when there is no matching business.
