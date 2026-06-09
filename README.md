# Precios Locales

A static engine for publishing individual approximate price-guide pages for local Home Services businesses in Mexico.

Each business gets its own individual URL using the route pattern `/priceguide/{citySlug}/{categorySlug}/{businessSlug}/`. Prices are approximate ranges, and the final price is confirmed directly by the business.

`/priceguide/` is an internal QA/demo view and route review utility, not a public directory and not intended for client sharing. Only individual business URLs should be shared.

The product is a static GitHub Pages app with no backend, database, CRM, login, payments, analytics, tracking, cookies, reviews, ratings, search, rankings, filters, marketplace, directory behavior, or lead capture.

## Internal demo business routes

- `/los-cabos/plomeros/plomeria-mario` or `/priceguide/los-cabos/plomeros/plomeria-mario`
- `/mazatlan/aire-acondicionado/frio-express` or `/priceguide/mazatlan/aire-acondicionado/frio-express`
- `/guadalajara/fumigacion/control-total` or `/priceguide/guadalajara/fumigacion/control-total`
- `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` or `/priceguide/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion`
- `/cabo-san-lucas/plomeria/de-la-hoz-plomeria` or `/priceguide/cabo-san-lucas/plomeria/de-la-hoz-plomeria`
- `/puerto-vallarta/electricista/instal-pv` or `/priceguide/puerto-vallarta/electricista/instal-pv`
- `/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez` or `/priceguide/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez`
- `/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares` or `/priceguide/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares`

Business identity, service areas, pricing, and estimator questions live in `businesses.js`. The shared renderer in `app.js` reads `window.location.pathname`, supports the optional `/priceguide` GitHub Pages prefix, renders `/` and `/priceguide/` as internal QA/demo route review views, and renders matching individual business pages as the primary product.

## Static hosting

Configure the static host to serve `index.html` as the fallback for nested URLs. For GitHub Pages, keep `404.html` in sync with `index.html` so direct visits to nested business URLs load the same app shell. The demo business routes also have static `index.html` files so all eight sample URLs can be served directly.

## Alta de nuevos negocios

Antes de agregar un negocio real, usa la [`guía interna de incorporación manual`](docs/onboarding-template.md) y copia la [`plantilla reutilizable de incorporación`](docs/templates/client-onboarding-intake.md) para reunir la información mínima de una sola página individual. Si se necesita el formulario ampliado, completa [`docs/client-intake-template.md`](docs/client-intake-template.md) con el dueño. Después usa [`docs/business-intake-template.md`](docs/business-intake-template.md) para validar la información aprobada y la [`guía interna de mapeo a businesses.js`](docs/intake-to-businesses-js-guide.md) para convertirla al formato de configuración.

## Internal QA and product validation

Use the [`final internal product validation report`](docs/final-product-validation-report.md) for the consolidated Tasks #63–#71 product-readiness conclusion, current pass/partial/gap statuses, remaining QA risks, and product-only recommendation for the reusable static individual-guide engine.

Use the [`internal end-to-end guide user-flow checklist`](docs/e2e-guide-user-flow-checklist.md) to validate a real user's path through one individual business guide, from page entry and estimation through summary/link copy and a safe WhatsApp or call handoff.

Use the [`internal manual E2E visual QA runbook`](docs/manual-e2e-visual-qa-run.md) to execute and record browser checks at desktop, 360px, 390px, and 430px widths across confirmed WhatsApp, phone fallback, no-contact, bilingual, multi-service, and long-zone individual-guide fixtures. The runbook is documentation for future manual runs; its existence does not mean those browser checks have been completed.

Use the [`internal URL parameter QA harness`](docs/url-parameter-qa-harness.md) to run deterministic Node checks for safe `source`, `service`, `campaign`, `lang`, and `zone` behavior on existing individual guide fixtures. The harness is internal-only, stores no visits, and does not provide analytics or tracking.

Use the [`internal product validation matrix`](docs/product-validation-matrix.md) to validate the reusable static engine across individual business pages, contact states, services, zones, languages, URL parameters, and the complete estimator flow. This matrix is internal-only and must not be used as a public directory, sales checklist, commercial proposal, or client-facing roadmap.

Use the [`internal demo business coverage audit`](docs/demo-business-coverage-audit.md) to review which current `businesses.js` fixtures cover reusable-engine edge cases, which validation states are still missing, and which gaps belong in a future data-only QA fixture PR.

## Publishing

Para validar las primeras ventas de forma manual, usa el [`SOP interno para vender Precios Locales a 5 negocios reales`](docs/sell-to-5-businesses-sop.md) y copia su [`plantilla manual de seguimiento`](docs/templates/sell-to-5-businesses-tracker.md). Para presentar, cotizar y entregar el producto a un negocio local, consulta el [`paquete comercial interno de Precios Locales`](docs/commercial-package.md). Después de una conversación de venta, prepara la oferta escrita con la [`guía interna de propuestas comerciales`](docs/client-proposal-template.md) y su [`plantilla reutilizable`](docs/templates/client-proposal.md).

Para el flujo completo de publicación, usa el [`SOP interno para publicar un negocio en 10 minutos`](docs/publish-business-in-10-minutes.md). Antes de publicar o actualizar rangos, usa la [`guía interna para confirmar precios y rangos aproximados`](docs/confirm-prices-ranges-template.md) y copia su [`plantilla reutilizable`](docs/templates/confirm-prices-ranges.md). Antes de publicar cualquier negocio real, completa el [`checklist interno de prepublicación`](docs/pre-publish-checklist.md). Para preparar los enlaces finales por canal, consulta la [`guía interna de enlaces por fuente`](docs/source-links-guide.md). Para entregar textos de Google Business Profile, usa las [`plantillas internas de copia para GBP`](docs/google-business-profile-copy.md). Para entregar textos de WhatsApp Business, usa las [`plantillas internas de copia para WhatsApp Business`](docs/whatsapp-business-copy.md). Para preparar materiales impresos con código QR, usa las [`plantillas internas de copias físicas con QR`](docs/qr-physical-copy.md). Para entregar al cliente una hoja imprimible con su enlace individual y código QR, usa la [`plantilla interna de entrega imprimible`](docs/printable-qr-link-delivery.md). Para enviar al dueño el mensaje final de entrega de su página individual, usa las [`plantillas internas de mensajes de entrega al cliente`](docs/client-delivery-message-copy.md). Para preparar una actualización manual sobre una página individual, usa la [`guía interna del reporte manual para clientes`](docs/manual-report-template.md) y su [`plantilla reutilizable`](docs/templates/manual-client-report.md).

Static business route shells are generated from the existing `index.html` app shell and the business metadata in `businesses.js`. Before committing changes for publication, run:

```sh
node scripts/publish-preflight.js
```

This regenerates both supported GitHub Pages route shells for every business and validates the site before committing. The generator does not overwrite `index.html`, `priceguide/index.html`, or `404.html`.
