# Precios Locales

Hosted price guide directory for Home Services businesses in Mexico without a website.

Each business gets a public URL with an interactive price estimator and WhatsApp handoff for Google Business Profile traffic. Lead capture is intentionally reserved for a later phase.

## Demo businesses

- `/los-cabos/plomeros/plomeria-mario` or `/priceguide/los-cabos/plomeros/plomeria-mario`
- `/mazatlan/aire-acondicionado/frio-express` or `/priceguide/mazatlan/aire-acondicionado/frio-express`
- `/guadalajara/fumigacion/control-total` or `/priceguide/guadalajara/fumigacion/control-total`
- `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` or `/priceguide/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion`

Business identity, service areas, pricing, and estimator questions live in `businesses.js`. The shared renderer in `app.js` reads `window.location.pathname`, supports the optional `/priceguide` GitHub Pages prefix, renders `/` and `/priceguide/` as a small demo landing page, and renders matching business pages as the primary product.

## Static hosting

Configure the static host to serve `index.html` as the fallback for nested URLs. For GitHub Pages, keep `404.html` in sync with `index.html` so direct visits to nested business URLs load the same app shell. The demo business routes also have static `index.html` files so the four sample URLs can be served directly.

## Alta de nuevos negocios

Usa [`docs/business-intake-template.md`](docs/business-intake-template.md) para recopilar, validar y convertir la información de un negocio de Servicios para el Hogar al formato de `businesses.js`. La plantilla incluye el cuestionario para el propietario, criterios para normalizar precios y zonas, un bloque técnico listo para copiar y una lista de control de publicación.
