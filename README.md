# Precios Locales

Hosted price guide directory for Home Services businesses in Mexico without a website.

Each business gets a public URL with an interactive price estimator and WhatsApp handoff for Google Business Profile traffic. Lead capture is intentionally reserved for a later phase.

## Demo businesses

- `/los-cabos/plomeros/plomeria-mario` or `/priceguide/los-cabos/plomeros/plomeria-mario`
- `/mazatlan/aire-acondicionado/frio-express` or `/priceguide/mazatlan/aire-acondicionado/frio-express`
- `/guadalajara/fumigacion/control-total` or `/priceguide/guadalajara/fumigacion/control-total`
- `/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion` or `/priceguide/cabo-san-lucas/aire-acondicionado/carmona-hnos-climas-refrigeracion`
- `/cabo-san-lucas/plomeria/de-la-hoz-plomeria` or `/priceguide/cabo-san-lucas/plomeria/de-la-hoz-plomeria`
- `/puerto-vallarta/electricista/instal-pv` or `/priceguide/puerto-vallarta/electricista/instal-pv`
- `/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez` or `/priceguide/puerto-vallarta/electricista/servicios-profesionales-electricidad-plomeria-martinez`
- `/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares` or `/priceguide/puerto-vallarta/electricista/solara-proyectos-electricos-paneles-solares`

Business identity, service areas, pricing, and estimator questions live in `businesses.js`. The shared renderer in `app.js` reads `window.location.pathname`, supports the optional `/priceguide` GitHub Pages prefix, renders `/` and `/priceguide/` as a small demo landing page, and renders matching business pages as the primary product.

## Static hosting

Configure the static host to serve `index.html` as the fallback for nested URLs. For GitHub Pages, keep `404.html` in sync with `index.html` so direct visits to nested business URLs load the same app shell. The demo business routes also have static `index.html` files so all eight sample URLs can be served directly.

## Alta de nuevos negocios

Antes de agregar un negocio real, completa [`docs/client-intake-template.md`](docs/client-intake-template.md) con el dueño. Después usa [`docs/business-intake-template.md`](docs/business-intake-template.md) para validar la información aprobada y la [`guía interna de mapeo a businesses.js`](docs/intake-to-businesses-js-guide.md) para convertirla al formato de configuración.

## Publishing

Para el flujo completo de publicación, usa el [`SOP interno para publicar un negocio en 10 minutos`](docs/publish-business-in-10-minutes.md). Antes de publicar cualquier negocio real, completa el [`checklist interno de prepublicación`](docs/pre-publish-checklist.md). Para preparar los enlaces finales por canal, consulta la [`guía interna de enlaces por fuente`](docs/source-links-guide.md). Para entregar textos de Google Business Profile, usa las [`plantillas internas de copia para GBP`](docs/google-business-profile-copy.md). Para entregar textos de WhatsApp Business, usa las [`plantillas internas de copia para WhatsApp Business`](docs/whatsapp-business-copy.md). Para preparar materiales impresos con código QR, usa las [`plantillas internas de copias físicas con QR`](docs/qr-physical-copy.md). Para entregar al cliente una hoja imprimible con su enlace individual y código QR, usa la [`plantilla interna de entrega imprimible`](docs/printable-qr-link-delivery.md). Para enviar al dueño el mensaje final de entrega de su página individual, usa las [`plantillas internas de mensajes de entrega al cliente`](docs/client-delivery-message-copy.md). Para preparar una actualización manual sobre una página individual, usa la [`guía interna del reporte manual para clientes`](docs/manual-report-template.md) y su [`plantilla reutilizable`](docs/templates/manual-client-report.md).

Static business route shells are generated from the existing `index.html` app shell and the business metadata in `businesses.js`. Before committing changes for publication, run:

```sh
node scripts/publish-preflight.js
```

This regenerates both supported GitHub Pages route shells for every business and validates the site before committing. The generator does not overwrite `index.html`, `priceguide/index.html`, or `404.html`.
