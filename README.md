# Precios Locales

Hosted price guides for Home Services businesses in Mexico that do not have a website.

Each business gets its own public page with an interactive price estimator and WhatsApp handoff, designed primarily for traffic from its Google Business Profile. Lead capture is intentionally reserved for a later phase.

The root URL is a small platform/demo landing page. It is not a consumer search directory and does not include search, reviews, rankings, or category discovery.

## Customer-facing demo pages

- `/los-cabos/plomeros/plomeria-mario`
- `/mazatlan/aire-acondicionado/frio-express`
- `/guadalajara/fumigacion/control-total`

Business identity, service areas, pricing, and estimator questions live in `businesses.js`. The shared page reads `window.location.pathname` and renders the matching configuration.

## Static hosting

Configure the static host to serve `index.html` as the fallback for nested URLs. The application keeps the requested pathname, resolves it against `businesses.js`, and shows a not-found state when there is no matching business.

### GitHub Pages

`404.html` is a GitHub Pages fallback containing the same static application shell as `index.html`. The shared loader explicitly detects the GitHub Pages project path `/priceguide/` and loads `businesses.js` and `app.js` from that prefix. Outside `/priceguide/`, it loads the same assets from the site root, so custom-domain routes continue to work.

Each advertised business route also has a real static `index.html` file, so GitHub Pages serves known customer-facing pages with a successful HTTP status instead of relying on the 404 fallback. The route resolver still matches the final three pathname segments, and `404.html` remains the fallback for unknown URLs.

- `/priceguide/los-cabos/plomeros/plomeria-mario`
- `/priceguide/mazatlan/aire-acondicionado/frio-express`
- `/priceguide/guadalajara/fumigacion/control-total`
