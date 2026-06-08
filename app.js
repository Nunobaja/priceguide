(() => {
  const STYLE_ID = "precios-locales-style";
  const ROOT_SEGMENT = "priceguide";
  const css = ':root{\n    --ink:#16120D;\n    --ink-soft:#4A4238;\n    --paper:#F6F1E8;\n    --card:#FFFDF8;\n    --line:#E4DACA;\n    --amber:#E08A2B;\n    --amber-deep:#B96A12;\n    --wa:#1FAE5A;\n    --wa-deep:#168B47;\n    --shadow:0 1px 0 rgba(22,18,13,.04), 0 18px 40px -22px rgba(22,18,13,.35);\n  }\n  *{box-sizing:border-box;margin:0;padding:0}\n  html{-webkit-text-size-adjust:100%}\n  body{\n    font-family:\'Hanken Grotesk\',system-ui,sans-serif;\n    color:var(--ink);\n    background:var(--paper);\n    background-image:\n      radial-gradient( at 100% 0%, rgba(224,138,43,.10), transparent 45%),\n      radial-gradient(at 0% 100%, rgba(31,174,90,.06), transparent 40%);\n    background-attachment:fixed;\n    line-height:1.45;\n    -webkit-font-smoothing:antialiased;\n    min-height:100vh;\n  }\n  /* subtle grain */\n  body::before{\n    content:"";position:fixed;inset:0;pointer-events:none;opacity:.4;z-index:0;\n    background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.035\'/%3E%3C/svg%3E");\n  }\n  .wrap{position:relative;z-index:1;max-width:560px;margin:0 auto;padding:0 18px 64px}\n\n  /* HEADER */\n  header{padding:28px 0 18px;display:flex;align-items:center;gap:14px}\n  .logo{\n    width:52px;height:52px;border-radius:14px;flex:none;\n    background:linear-gradient(150deg,var(--amber),var(--amber-deep));\n    display:grid;place-items:center;color:#fff;\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:24px;\n    box-shadow:0 8px 20px -8px rgba(185,106,18,.6);\n  }\n  .biz h1{font-family:\'Fraunces\',serif;font-weight:600;font-size:22px;letter-spacing:-.01em;line-height:1.1}\n  .biz p{font-size:13px;color:var(--ink-soft);margin-top:3px;font-weight:500}\n  .biz .cat{color:var(--amber-deep)}\n\n  /* HERO */\n  .hero{margin:6px 0 22px}\n  .hero h2{\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:30px;\n    line-height:1.08;letter-spacing:-.02em;\n  }\n  .hero h2 em{font-style:italic;color:var(--amber-deep)}\n  .hero p{margin-top:10px;color:var(--ink-soft);font-size:15px;max-width:42ch}\n\n  /* CARD */\n  .card{\n    background:var(--card);border:1px solid var(--line);border-radius:20px;\n    padding:22px 20px;box-shadow:var(--shadow);margin-bottom:16px;\n  }\n  .step-label{\n    font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;\n    color:var(--amber-deep);margin-bottom:12px;display:flex;align-items:center;gap:8px;\n  }\n  .step-label .num{\n    width:20px;height:20px;border-radius:50%;background:var(--amber);color:#fff;\n    display:grid;place-items:center;font-size:11px;letter-spacing:0;\n  }\n\n  /* OPTION CHIPS */\n  .opts{display:flex;flex-wrap:wrap;gap:9px}\n  .opt{\n    border:1.5px solid var(--line);background:#fff;border-radius:12px;\n    padding:11px 15px;font-size:14px;font-weight:600;color:var(--ink);\n    cursor:pointer;transition:all .16s ease;user-select:none;\n  }\n  .opt:hover{border-color:var(--amber)}\n  .opt.sel{border-color:var(--amber);background:#FFF6EA;box-shadow:inset 0 0 0 1px var(--amber)}\n  .linked-service-note{font-size:12.5px;color:var(--ink-soft);line-height:1.4;margin:12px 0 0;padding:9px 10px;border-left:2px solid var(--amber);background:#FFF9F0}\n\n  .service-helper{font-size:13.5px;color:var(--ink-soft);line-height:1.5;margin-bottom:20px}\n  .service-helper.with-sales-copy{margin-bottom:8px}\n  .service-sales-copy{font-size:13px;color:var(--ink);line-height:1.5;margin-bottom:20px;padding-left:10px;border-left:2px solid var(--amber)}\n  .estimator-guidance{font-size:12.5px;color:var(--ink-soft);line-height:1.4;margin:0 0 14px;padding:9px 10px;border:1px solid var(--line);border-radius:10px;background:#FFF9F0}\n  .q{margin-top:20px}\n  .q:first-child{margin-top:0}\n  .q-label{font-size:14px;font-weight:600;margin-bottom:9px}\n  .q-helper{font-size:12.5px;color:var(--ink-soft);line-height:1.45;margin:-4px 0 9px;max-width:48ch}\n\n  /* dynamic block reveal */\n  .reveal{animation:rise .4s cubic-bezier(.2,.7,.2,1) both}\n  @keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\n  .hidden{display:none}\n\n  /* CALC BUTTON */\n  .btn{\n    width:100%;border:none;border-radius:14px;padding:16px;font-size:16px;\n    font-weight:700;font-family:\'Hanken Grotesk\',sans-serif;cursor:pointer;\n    transition:transform .12s ease,box-shadow .2s ease,opacity .2s;\n  }\n  .btn:active{transform:translateY(1px)}\n  .btn-amber{background:linear-gradient(150deg,var(--amber),var(--amber-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(185,106,18,.7)}\n  .btn-amber:disabled{opacity:.4;cursor:not-allowed;box-shadow:none}\n  .btn-secondary{width:auto;display:block;margin:14px auto 0;padding:8px 10px;border:0;background:transparent;color:var(--amber-deep);font-size:13px;box-shadow:none}\n  .btn-secondary:hover{text-decoration:underline}\n  .btn-wa{background:linear-gradient(150deg,var(--wa),var(--wa-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(22,139,71,.7);display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}\n  .btn-wa svg{width:22px;height:22px;fill:#fff}\n  .handoff-fallback{font-size:13px;color:var(--ink-soft);line-height:1.5;text-align:center;margin-top:10px}\n  .handoff-fallback a{color:var(--amber-deep);font-weight:700;text-decoration:underline;text-underline-offset:2px}\n\n  /* RESULT */\n  .result{text-align:center;padding:8px 4px 4px}\n  .result .tag{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft)}\n  .range{\n    font-family:\'Fraunces\',serif;font-weight:600;letter-spacing:-.02em;\n    font-size:clamp(34px,11vw,52px);line-height:1;margin:10px 0 4px;\n    color:var(--ink);overflow-wrap:anywhere;\n  }\n  .range-value{display:inline-block;white-space:nowrap}\n  .range .cur{color:var(--amber-deep);font-size:.55em;vertical-align:super}\n  .range .dash{color:var(--line);font-weight:400}\n  .moneda{font-size:13px;color:var(--ink-soft);font-weight:600}\n  .range-note{font-size:12.5px;color:var(--ink-soft);line-height:1.45;margin:12px auto 0;max-width:48ch}\n  .request-summary{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:16px 0;margin:18px 0;text-align:left}\n  .request-summary h3{font-size:14px;margin-bottom:10px}\n  .summary-list{display:grid;gap:7px}\n  .summary-row{display:grid;grid-template-columns:88px 1fr;gap:10px;font-size:13px;line-height:1.4}\n  .summary-row dt{color:var(--ink-soft);font-weight:600}\n  .summary-row dd{font-weight:600;min-width:0;overflow-wrap:anywhere}\n  .summary-row--estimate dd{color:var(--amber-deep);font-size:14px}\n  .summary-details{display:grid;gap:5px;list-style:none;font-weight:500}\n  .summary-details li{position:relative;padding-left:12px}\n  .summary-details li::before{content:"•";position:absolute;left:0;color:var(--amber-deep)}\n  .summary-details strong{font-weight:700}\n  .handoff-intro{margin:2px 0 16px}\n  .handoff-intro h3{font-family:\'Fraunces\',serif;font-size:20px;line-height:1.2;margin-bottom:5px}\n  .handoff-intro p{font-size:13px;color:var(--ink-soft)}\n  .aviso{\n    font-size:12.5px;color:var(--ink-soft);background:#FBF6ED;border:1px dashed var(--line);\n    border-radius:12px;padding:12px 14px;margin:16px 0;line-height:1.4;text-align:left;\n  }\n  .aviso b{color:var(--ink)}\n  .category-disclaimer{font-size:12px;background:transparent;border-style:solid;margin-top:-8px}\n\n  /* LEAD */\n  .field{margin-bottom:12px}\n  .field label{font-size:13px;font-weight:600;display:block;margin-bottom:6px}\n  .field input{\n    width:100%;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;\n    font-size:15px;font-family:\'Hanken Grotesk\',sans-serif;background:#fff;color:var(--ink);\n  }\n  .field input:focus{outline:none;border-color:var(--amber);box-shadow:0 0 0 3px rgba(224,138,43,.15)}\n  .helper{font-size:12px;color:var(--ink-soft);margin-top:6px}\n\n  /* FOOTER biz info */\n  .bizinfo{display:flex;flex-direction:column;gap:8px;font-size:14px}\n  .bizinfo a{color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:10px;font-weight:500}\n  .btn-wa.hidden,.bizinfo a.hidden{display:none}\n  .bizinfo .ic{width:34px;height:34px;border-radius:10px;background:#FFF6EA;display:grid;place-items:center;flex:none;color:var(--amber-deep);font-size:16px}\n  .legal{text-align:center;font-size:11.5px;color:var(--ink-soft);margin-top:26px;line-height:1.5}\n  .legal strong{color:var(--ink-soft)}\n  .landing-list{display:grid;gap:8px;margin-top:16px}\n  .landing-link{display:block;border:1px solid var(--line);background:transparent;border-radius:10px;padding:11px 12px;color:var(--ink);text-decoration:none;font-weight:600;transition:all .16s ease}\n  .landing-link:hover{border-color:var(--amber);background:#FFF9F0}\n  .landing-route{display:block;font-size:13px;overflow-wrap:anywhere}\n  .landing-link small{display:block;color:var(--ink-soft);font-weight:400;margin-top:4px}\n  .landing-action{display:block;color:var(--amber-deep);font-size:12px;font-weight:700;margin-top:7px}\n  .qa-label{display:inline-block;border:1px solid var(--line);border-radius:999px;color:var(--ink-soft);font-size:9px;font-weight:700;letter-spacing:.1em;margin-right:7px;padding:2px 5px;vertical-align:1px}\n  .internal-note{border-left:2px solid var(--line);color:var(--ink-soft);font-size:13px;line-height:1.5;margin-top:12px;padding-left:10px}\n  .muted{color:var(--ink-soft)}\n  .page-actions{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin:-5px 0 14px}\n  .language-toggle{display:flex;align-items:center;gap:3px}\n  .language-toggle.hidden{display:none}\n  .language-toggle button{border:0;background:transparent;color:var(--ink-soft);font:600 12px/1.2 \'Hanken Grotesk\',sans-serif;padding:5px 7px;border-radius:7px;cursor:pointer}\n  .language-toggle button[aria-pressed=\"true\"]{background:#FFF6EA;color:var(--amber-deep)}\n  .language-toggle .divider{color:var(--line);font-size:12px}\n  .copy-link{border:1px solid var(--line);background:var(--card);color:var(--ink-soft);font:600 12px/1.2 \'Hanken Grotesk\',sans-serif;padding:6px 9px;border-radius:8px;cursor:pointer}\n  .copy-link:hover{border-color:var(--amber);color:var(--amber-deep)}\n  .copy-summary{margin:12px auto 0}\n\n  @media (max-width:480px){\n    .wrap{padding-left:14px;padding-right:14px}\n    .card{padding:20px 16px}\n    #cardResultado{padding-top:22px}\n    .result{padding:4px 0 2px}\n    .result .tag{font-size:12px;line-height:1.4}\n    .range{font-size:clamp(30px,9vw,39px);line-height:1.12;margin:12px auto 6px;max-width:100%}\n    .range .dash{display:inline-block;margin:0 .08em}\n    .moneda{font-size:13.5px;line-height:1.45}\n    .range-note{font-size:14px;line-height:1.58;margin-top:14px;max-width:36ch}\n    .request-summary{padding:20px 0;margin:20px 0}\n    .request-summary h3{font-size:16px;line-height:1.35;margin-bottom:14px}\n    .summary-list{gap:0}\n    .summary-row{display:block;font-size:14px;line-height:1.55;padding:10px 0;border-top:1px solid rgba(228,218,202,.7)}\n    .summary-row:first-child{padding-top:0;border-top:0}\n    .summary-row:last-child{padding-bottom:0}\n    .summary-row dt{font-size:12px;letter-spacing:.04em;text-transform:uppercase;margin-bottom:3px}\n    .summary-row dd{font-weight:600}\n    .summary-row--estimate dd{font-family:\'Fraunces\',serif;font-size:19px;line-height:1.3}\n    .summary-details{gap:7px}\n    .summary-details li{padding-left:14px}\n    .copy-summary{min-height:44px;margin-top:16px;padding:10px 13px;font-size:13px}\n    .aviso{font-size:14px;line-height:1.58;padding:14px;margin:18px 0}\n    .category-disclaimer{font-size:13.5px;margin-top:-8px}\n    .handoff-intro{margin-bottom:18px}\n    .handoff-intro h3{font-size:21px;line-height:1.25;margin-bottom:7px}\n    .handoff-intro p,.handoff-fallback,.helper{font-size:13.5px;line-height:1.55}\n    .btn-secondary{min-height:44px;padding:11px 12px}\n  }\n';
  const businessTemplate = `<header>
    <div class="logo" id="logoInit">P</div>
    <div class="biz">
      <h1 id="bizName">Precios Locales</h1>
      <p><span id="bizCity">México</span> · <span class="cat" id="bizCat">Servicios para el hogar</span></p>
    </div>
  </header>

  <div class="page-actions">
    <div class="language-toggle hidden" id="languageToggle" aria-label="Idioma / Language">
      <button type="button" data-language="es" aria-pressed="true">Español</button>
      <span class="divider" aria-hidden="true">/</span>
      <button type="button" data-language="en" aria-pressed="false">English</button>
    </div>
    <button class="copy-link" id="copyLink" type="button" data-ui="copyLink" aria-live="polite"></button>
  </div>

  <div class="hero">
    <h2 id="heroHeadline"></h2>
    <p id="heroSubheadline"></p>
  </div>

  <!-- PASO 1: servicio -->
  <div class="card" id="cardServicios">
    <div class="step-label"><span class="num">1</span> <span data-ui="servicePrompt"></span></div>
    <p class="muted" id="estimateIntro" style="margin-bottom:16px"></p>
    <div class="opts" id="servicios"></div>
    <p class="linked-service-note hidden" id="linkedServiceNote" data-ui="linkedServiceNote"></p>
  </div>

  <!-- PASO 2: preguntas (dinámico) -->
  <div class="card hidden" id="cardPreguntas">
    <div class="step-label"><span class="num">2</span> <span data-ui="moreDetails"></span></div>
    <p class="service-helper hidden" id="serviceHelper"></p>
    <p class="service-sales-copy hidden" id="serviceSalesCopy"></p>
    <p class="estimator-guidance hidden" id="estimatorGuidance" aria-live="polite"></p>
    <div id="preguntas"></div>
    <button class="btn btn-amber" id="btnCalcular" style="margin-top:22px" disabled data-ui="showEstimate"></button>
  </div>

  <!-- PASO 3: resultado -->
  <div class="card hidden" id="cardResultado">
    <div class="result">
      <div class="tag" data-ui="estimatedRange"></div>
      <div class="range" id="rangeOut"></div>
      <div class="moneda" id="monedaOut"></div>
      <p class="range-note" data-ui="initialEstimateNote"></p>
    </div>

    <section class="request-summary" aria-labelledby="summaryTitle">
      <h3 id="summaryTitle" data-ui="requestSummary"></h3>
      <dl class="summary-list" id="requestSummary"></dl>
    </section>

    <div class="aviso">
      <b data-ui="important"></b> <span id="priceDisclaimer"></span>
    </div>
    <div class="aviso category-disclaimer hidden" id="categoryDisclaimer"></div>
    <div class="aviso hidden" id="pricingNotes"></div>

    <div class="step-label" style="margin-top:6px"><span class="num">3</span> <span data-ui="nextStep"></span></div>
    <div class="handoff-intro">
      <h3 data-ui="sendSummary"></h3>
      <p data-ui="handoffExplanation"></p>
    </div>
    <div class="field">
      <label for="leadName"><span data-ui="yourName"></span> <span style="font-weight:400;color:var(--ink-soft)">(<span data-ui="optional"></span>)</span></label>
      <input type="text" id="leadName" autocomplete="name" data-placeholder-ui="namePlaceholder">
    </div>
    <div class="field">
      <label for="leadTel"><span data-ui="yourPhone"></span> <span style="font-weight:400;color:var(--ink-soft)">(<span data-ui="optional"></span>)</span></label>
      <input type="tel" id="leadTel" autocomplete="tel" inputmode="tel" data-placeholder-ui="phonePlaceholder">
    </div>

    <p class="hidden" id="handoffTrust" data-ui="handoffTrust" style="font-size:13px;color:var(--ink-soft);line-height:1.5;margin:0 0 12px;padding:10px 12px;border-left:2px solid var(--amber);background:#FFF9F0;text-align:left;overflow-wrap:anywhere"></p>
    <a class="btn btn-wa" id="btnWa" href="#" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.692.626.711.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span id="whatsappCtaLabel"></span>
    </a>
    <p class="helper" id="whatsappHelperText" style="text-align:center;margin-top:10px"></p>
    <p class="handoff-fallback hidden" id="whatsappFallback">
      <span id="whatsappFallbackMessage"></span>
      <a class="hidden" id="whatsappFallbackPhone" href="#"></a>
    </p>
    <button class="copy-link copy-summary" id="copySummary" type="button" data-ui="copySummary" aria-live="polite"></button>
    <button class="btn btn-secondary" id="btnReset" type="button" data-ui="resetEstimate"></button>
  </div>

  <!-- datos del negocio -->
  <div class="card">
    <div class="step-label"><span class="num">i</span> <span data-ui="businessDetails"></span></div>
    <div class="bizinfo">
      <a href="#" id="lnkTel"><span class="ic">📞</span> <span id="telText"></span></a>
      <a href="#" id="lnkWa"><span class="ic">💬</span> <span id="lnkWaLabel" data-ui="directWhatsApp"></span></a>
      <p class="helper hidden" id="whatsappPendingNote"></p>
      <div style="display:flex;align-items:center;gap:10px;font-weight:500"><span class="ic">📍</span> <span id="serviceAreaNote"></span></div>
    </div>
  </div>

  <p class="legal">
    <span data-ui="legalPrefix"></span> <strong id="legalName">este negocio</strong> · <span data-ui="legalSuffix"></span>
  </p>`;
  const $ = selector => document.querySelector(selector);
  const businesses = Array.isArray(window.BUSINESSES) ? window.BUSINESSES : [];
  const fallbackCopy = {
    heroHeadline: "Calcula un precio estimado antes de contactarnos.",
    heroSubheadline: "Responde unas preguntas rápidas y te mostramos un rango aproximado. Sin compromiso.",
    estimateIntro: "Elige el servicio que necesitas para calcular un rango inicial.",
    priceDisclaimer: "Este es un rango estimado. El precio final puede variar según revisión, materiales, condiciones del lugar y alcance real del servicio.",
    whatsappCtaLabel: "Cotizar por WhatsApp",
    whatsappHelperText: "Te abrimos WhatsApp con tu cotización ya escrita. Solo das enviar."
  };
  const toneCopy = {
    friendly: {
      heroSubheadline: "Cuéntanos qué necesitas y te mostramos un rango aproximado, sin compromiso.",
      estimateIntro: "Elige el servicio y responde unas preguntas para conocer un precio aproximado.",
      priceDisclaimer: "Esta estimación es una guía. El precio final depende de los detalles del servicio, como materiales, condiciones del lugar y alcance real.",
      initialEstimateNote: "Este rango aproximado es una estimación inicial. El negocio confirmará el precio final por WhatsApp según los detalles del servicio.",
      handoffExplanation: "Comparte tu solicitud con el negocio para que revise los detalles y confirme el precio final contigo.",
      handoffTrust: "Este es un rango aproximado, no un precio final. El precio final depende de los detalles del servicio, como fotos, zona y materiales."
    },
    technical: {
      heroSubheadline: "Responde unas preguntas sobre el servicio para obtener un rango aproximado según las condiciones indicadas.",
      estimateIntro: "Selecciona el servicio y sus condiciones para calcular un precio aproximado.",
      priceDisclaimer: "Esta estimación usa la información seleccionada. El precio final depende de los detalles del servicio, la revisión técnica, los materiales y las condiciones del lugar.",
      initialEstimateNote: "Este rango aproximado es una estimación inicial basada en los datos seleccionados. El negocio confirmará el precio final tras revisar los detalles del servicio.",
      handoffExplanation: "El negocio recibirá las condiciones seleccionadas y podrá revisar los detalles antes de confirmar el precio final.",
      handoffTrust: "Este es un rango aproximado, no un diagnóstico ni un precio final. El precio final depende de los detalles del servicio, la zona, los materiales y la revisión técnica."
    }
  };
  const uiCopy = {
    es: {
      servicePrompt: "¿Qué servicio necesitas?",
      moreDetails: "Cuéntanos un poco más",
      showEstimate: "Ver precio estimado",
      resetEstimate: "Calcular otra vez",
      zoneQuestion: "¿En qué zona estás?",
      guidanceAnswersMissing: "Responde las preguntas para calcular tu rango estimado.",
      guidanceZoneMissing: "Selecciona la zona de servicio para completar la estimación.",
      guidanceAnswersAndZoneMissing: "Responde las preguntas y selecciona la zona de servicio para calcular tu rango estimado.",
      linkedServiceNote: "Servicio seleccionado desde el enlace. El rango seguirá siendo aproximado.",
      estimatedRange: "Tu rango estimado",
      mexicanPesos: "pesos mexicanos",
      initialEstimateNote: "Este rango es una estimación inicial. El negocio confirmará el precio final por WhatsApp según las condiciones reales del servicio.",
      requestSummary: "Resumen de solicitud",
      service: "Servicio",
      zone: "Zona",
      details: "Detalles",
      estimate: "Estimado",
      important: "Importante:",
      nextStep: "Siguiente paso",
      sendSummary: "Envía este resumen por WhatsApp",
      handoffExplanation: "El negocio recibirá los datos de tu solicitud y podrá confirmar el precio final contigo.",
      handoffTrust: "Este es un rango aproximado. El precio final depende de fotos, zona, materiales y detalles del servicio; el negocio puede confirmarlo.",
      yourName: "Tu nombre",
      yourPhone: "Tu teléfono",
      optional: "opcional",
      namePlaceholder: "Ej. Carlos Méndez",
      phonePlaceholder: "Ej. 624 123 4567",
      businessDetails: "Datos del negocio",
      directWhatsApp: "WhatsApp directo",
      pendingWhatsApp: "WhatsApp por confirmar",
      whatsappUnavailable: "WhatsApp no disponible. Llama al teléfono público del negocio para confirmar tu estimación.",
      copyLink: "Copiar enlace",
      linkCopied: "Enlace copiado",
      copySummary: "Copiar resumen",
      summaryCopied: "Resumen copiado",
      copyFallbackPrompt: "Copia este enlace:",
      copySummaryFallbackPrompt: "Copia este resumen:",
      business: "Negocio",
      link: "Enlace",
      legalPrefix: "Guía de precios para",
      legalSuffix: "Los rangos son estimados y no constituyen una cotización formal."
    },
    en: {
      servicePrompt: "What service do you need?",
      moreDetails: "Tell us a little more",
      showEstimate: "See estimated price",
      resetEstimate: "Calculate again",
      zoneQuestion: "What area are you in?",
      guidanceAnswersMissing: "Answer the questions to calculate your estimated range.",
      guidanceZoneMissing: "Select the service area to complete the estimate.",
      guidanceAnswersAndZoneMissing: "Answer the questions and select the service area to calculate your estimated range.",
      linkedServiceNote: "Service selected from the link. The range will remain approximate.",
      estimatedRange: "Your estimated range",
      mexicanPesos: "Mexican pesos",
      initialEstimateNote: "This is an initial estimate. The business will confirm the final price via WhatsApp based on the actual service conditions.",
      requestSummary: "Request summary",
      service: "Service",
      zone: "Area",
      details: "Details",
      estimate: "Estimate",
      important: "Important:",
      nextStep: "Next step",
      sendSummary: "Send this summary by WhatsApp",
      handoffExplanation: "The business will receive your request details and can confirm the final price with you.",
      handoffTrust: "This is an estimated range. The final price depends on photos, area, materials, and service details; the business can confirm it.",
      yourName: "Your name",
      yourPhone: "Your phone",
      optional: "optional",
      namePlaceholder: "E.g. Carlos Méndez",
      phonePlaceholder: "E.g. 624 123 4567",
      businessDetails: "Business details",
      directWhatsApp: "Direct WhatsApp",
      pendingWhatsApp: "WhatsApp to confirm",
      whatsappUnavailable: "WhatsApp is not available. Call the business public phone to confirm your estimate.",
      copyLink: "Copy link",
      linkCopied: "Link copied",
      copySummary: "Copy summary",
      summaryCopied: "Summary copied",
      copyFallbackPrompt: "Copy this link:",
      copySummaryFallbackPrompt: "Copy this summary:",
      business: "Business",
      link: "Link",
      legalPrefix: "Price guide for",
      legalSuffix: "Ranges are estimates and do not constitute a formal quote."
    }
  };
  const state = { service: null, answers: {}, zone: null, range: null, language: "es" };
  let business = null;
  let linkedService = null;
  let copyLinkFeedbackTimer = null;
  let copySummaryFeedbackTimer = null;

  init();

  function init() {
    injectStyles();
    const route = getRoute(window.location.pathname);
    business = businesses.find(item => businessPath(item) === route.path);

    if (business) {
      renderBusiness();
      return;
    }

    if (route.path === "/") {
      renderLanding(route.prefix);
      return;
    }

    renderNotFound(route.prefix);
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function normalizePath(pathname) {
    const clean = "/" + pathname.split("/").filter(Boolean).join("/").toLowerCase();
    return clean === "/" ? "/" : clean.replace(/\/$/, "");
  }

  function getRoute(pathname) {
    const segments = pathname.split("/").filter(Boolean);
    const hasPrefix = segments[0] && segments[0].toLowerCase() === ROOT_SEGMENT;
    const routeSegments = hasPrefix ? segments.slice(1) : segments;
    const path = routeSegments.length ? "/" + routeSegments.join("/").toLowerCase() : "/";
    return { prefix: hasPrefix ? "/" + ROOT_SEGMENT : "", path: normalizePath(path) };
  }

  function businessPath(item) {
    return `/${item.citySlug}/${item.categorySlug}/${item.businessSlug}`;
  }

  function withPrefix(path, prefix) {
    return (prefix || "") + path;
  }

  function renderLanding(prefix) {
    document.title = "Vista interna de QA — Precios Locales";
    updateMetaTag("name", "description", "Vista interna de QA para verificar páginas individuales de Precios Locales antes de compartir sus enlaces.");
    const links = businesses.map(item => {
      const routePath = `${withPrefix(businessPath(item), prefix)}/`;
      return `
        <a class="landing-link" href="${routePath}">
          <span class="landing-route"><span class="qa-label">QA</span>${routePath}</span>
          <small>Metadatos de revisión: ${item.name} · ${item.city} · ${item.categoryLabel || item.category}</small>
          <span class="landing-action">Revisar página individual →</span>
        </a>`;
    }).join("") || '<p class="muted">No hay rutas publicadas configuradas para revisión en esta vista interna de QA.</p>';

    $("#app").innerHTML = `
      <header>
        <div class="logo">P</div>
        <div class="biz">
          <h1>Precios Locales</h1>
          <p>Vista interna de QA · Demo de páginas individuales</p>
        </div>
      </header>
      <div class="hero">
        <h2>Verificación interna de páginas de precios guía.</h2>
        <p>Esta utilidad interna permite verificar rutas y estimadores antes de entregar cada página individual. El único activo destinado a compartirse es la URL individual correspondiente.</p>
      </div>
      <div class="card">
        <div class="step-label"><span class="qa-label">QA</span> Rutas publicadas para revisión</div>
        <p class="muted">Checklist interno para abrir cada ruta y comprobar su página individual.</p>
        <p class="internal-note">Esta vista sirve para revisar rutas publicadas. No se comparte como página pública.<br>Comparte únicamente la URL individual del negocio.</p>
        <div class="landing-list">${links}</div>
      </div>
      <p class="legal">Los precios son rangos aproximados. El precio final depende de los detalles del servicio.</p>
      <p class="legal">Esta vista interna es únicamente una utilidad de control de calidad y no se comparte como página pública.</p>`;
  }

  function renderNotFound(prefix) {
    document.title = "Ruta de página no disponible — Precios Locales";
    $("#app").innerHTML = `
      <header>
        <div class="logo">P</div>
        <div class="biz">
          <h1>Precios Locales</h1>
          <p>Vista interna de QA · Revisión de páginas individuales</p>
        </div>
      </header>
      <div class="card">
        <div class="step-label">Ruta no disponible</div>
        <h2 style="font-family:'Fraunces',serif;margin-bottom:8px">Esta página individual no está disponible para revisión.</h2>
        <p style="color:var(--ink-soft);margin-bottom:14px">Verifica la dirección publicada o vuelve a la vista interna de QA.</p>
        <a class="btn btn-amber" style="display:block;text-align:center;text-decoration:none" href="${withPrefix("/", prefix)}">Volver a la vista interna de QA</a>
      </div>`;
  }

  function updateMetaTag(attribute, key, content) {
    let tag = document.querySelector(`meta[${attribute}="${key}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attribute, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  }

  function updateBusinessMetadata() {
    const fallbackTitle = `${business.name} · Guía de precios · Precios Locales`;
    const fallbackDescription = `Calcula un rango estimado para servicios de ${business.category} en ${business.city} antes de contactar por WhatsApp.`;
    const metaTitle = business.metaTitle || fallbackTitle;
    const metaDescription = business.metaDescription || fallbackDescription;
    const shareTitle = business.shareTitle || metaTitle;
    const shareDescription = business.shareDescription || metaDescription;

    document.title = metaTitle;
    updateMetaTag("name", "description", metaDescription);
    updateMetaTag("property", "og:title", shareTitle);
    updateMetaTag("property", "og:description", shareDescription);
    updateMetaTag("property", "og:type", "website");
    updateMetaTag("property", "og:url", window.location.href);
    updateMetaTag("name", "twitter:card", "summary");
    updateMetaTag("name", "twitter:title", shareTitle);
    updateMetaTag("name", "twitter:description", shareDescription);
  }

  function renderBusiness() {
    updateBusinessMetadata();
    $("#app").innerHTML = businessTemplate;
    applyBusinessAccentColor();
    $("#bizName").textContent = getBrandLogoText();
    $("#legalName").textContent = business.name;
    $("#bizCity").textContent = business.city;
    $("#bizCat").textContent = business.categoryLabel || business.category;
    $("#logoInit").textContent = getBrandInitial();
    const phone = getPhoneValue();
    $("#telText").textContent = formatPhone(phone);
    $("#lnkTel").href = phone ? getPhoneHref(phone) : "#";
    $("#lnkTel").classList.toggle("hidden", !phone);
    updateWhatsAppContactDetails();

    if (hasEnglishCopy()) {
      $("#languageToggle").classList.remove("hidden");
      $("#languageToggle").querySelectorAll("button").forEach(button => {
        button.onclick = () => setLanguage(button.dataset.language, true);
      });
    }

    business.services.forEach(service => {
      const button = document.createElement("div");
      button.className = "opt";
      button.textContent = getLocalizedLabel(service, "name");
      button.dataset.id = service.id;
      button.onclick = () => selectService(
        service,
        button,
        true,
        state.service ? null : state.zone
      );
      $("#servicios").appendChild(button);
    });

    $("#btnCalcular").onclick = calculate;
    $("#btnReset").onclick = resetEstimate;
    $("#copyLink").onclick = copyCurrentPageLink;
    $("#copySummary").onclick = copyEstimateSummary;
    $("#leadName").addEventListener("input", buildWhatsAppUrl);
    $("#leadTel").addEventListener("input", buildWhatsAppUrl);
    setLanguage(getLanguageFromUrl());

    const initialService = getServiceFromUrl();
    const initialZone = getZoneFromUrl();
    state.zone = initialZone;
    if (initialService) {
      linkedService = initialService;
      const button = document.querySelector(`#servicios [data-id="${initialService.id}"]`);
      selectService(initialService, button, false, initialZone);
    }
  }

  function getLanguageFromUrl() {
    return new URL(window.location.href).searchParams.get("lang") === "en" ? "en" : "es";
  }

  function getServiceFromUrl() {
    const serviceParam = new URL(window.location.href).searchParams.get("service");
    const trimmedService = typeof serviceParam === "string" ? serviceParam.trim() : "";
    if (!trimmedService || !/^[\p{L}\p{N}\s-]+$/u.test(trimmedService)) return null;

    const requestedService = slugify(trimmedService);
    return business.services.find(service => slugify(service.id) === requestedService) ||
      business.services.find(service =>
        slugify(service.name) === requestedService || slugify(service.nameEn) === requestedService
      ) || null;
  }

  function updateLinkedServiceNote() {
    const note = $("#linkedServiceNote");
    if (!note) return;

    note.classList.toggle("hidden", !linkedService || state.service !== linkedService);
  }

  function getSourceFromUrl() {
    const source = new URL(window.location.href).searchParams.get("source");
    if (typeof source !== "string") return "";

    const trimmedSource = source.trim();
    if (!trimmedSource || !/^[\p{L}\p{N} _-]+$/u.test(trimmedSource)) return "";

    return trimmedSource
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 60)
      .trim();
  }

  function slugify(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/[\s-]+/g, "-");
  }

  function getZoneSlug(zone) {
    return slugify(zone.label);
  }

  function getZoneFromUrl() {
    const requestedZone = slugify(new URL(window.location.href).searchParams.get("zone"));
    if (!requestedZone) return null;

    return business.zones.find(zone =>
      getZoneSlug(zone) === requestedZone || slugify(zone.labelEn) === requestedZone
    ) || null;
  }

  async function copyCurrentPageLink() {
    const url = window.location.href;
    const copied = await copyPlainText(url);

    if (!copied) {
      window.prompt(uiCopy[state.language].copyFallbackPrompt, url);
      return;
    }

    showCopyLinkFeedback();
  }

  async function copyEstimateSummary() {
    if (!state.range) return;
    const summary = buildEstimateSummary();
    const copied = await copyPlainText(summary);

    if (!copied) {
      window.prompt(uiCopy[state.language].copySummaryFallbackPrompt, summary);
      return;
    }

    showCopySummaryFeedback();
  }

  async function copyPlainText(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (error) {
        return copyTextWithSelection(text);
      }
    }

    return copyTextWithSelection(text);
  }

  function copyTextWithSelection(text) {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, input.value.length);

    let copied = false;
    try {
      if (typeof document.execCommand === "function") {
        copied = document.execCommand("copy");
      }
    } catch (error) {
      copied = false;
    }
    input.remove();
    return copied;
  }

  function showCopyLinkFeedback() {
    window.clearTimeout(copyLinkFeedbackTimer);
    $("#copyLink").textContent = uiCopy[state.language].linkCopied;
    copyLinkFeedbackTimer = window.setTimeout(() => {
      $("#copyLink").textContent = uiCopy[state.language].copyLink;
    }, 1800);
  }

  function showCopySummaryFeedback() {
    window.clearTimeout(copySummaryFeedbackTimer);
    $("#copySummary").textContent = uiCopy[state.language].summaryCopied;
    copySummaryFeedbackTimer = window.setTimeout(() => {
      $("#copySummary").textContent = uiCopy[state.language].copySummary;
    }, 1800);
  }

  function resetCopyFeedbackLabels() {
    window.clearTimeout(copyLinkFeedbackTimer);
    window.clearTimeout(copySummaryFeedbackTimer);
    $("#copyLink").textContent = uiCopy[state.language].copyLink;
    $("#copySummary").textContent = uiCopy[state.language].copySummary;
  }

  function updateLanguageInUrl(language) {
    updateQueryParameter("lang", language);
  }

  function updateZoneInUrl(zone) {
    updateQueryParameter("zone", zone ? getZoneSlug(zone) : null);
  }

  function updateSelectionInUrl(serviceId, zone) {
    updateQueryParameters({
      service: serviceId,
      zone: zone ? getZoneSlug(zone) : null
    });
  }

  function updateQueryParameter(name, value) {
    updateQueryParameters({ [name]: value });
  }

  function updateQueryParameters(parameters) {
    const url = new URL(window.location.href);
    Object.entries(parameters).forEach(([name, value]) => {
      if (value) {
        url.searchParams.set(name, value);
      } else {
        url.searchParams.delete(name);
      }
    });
    window.history.replaceState(window.history.state, "", url.href);
    updateMetaTag("property", "og:url", url.href);
  }

  function hasEnglishCopy() {
    return business.english && Object.values(business.english).some(value =>
      typeof value === "string" && value.trim()
    );
  }

  function getOptionalBusinessText(field) {
    const value = business[field];
    return typeof value === "string" && value.trim() ? value.trim() : "";
  }

  function getBrandInitial() {
    return getOptionalBusinessText("brandInitial") || business.name.charAt(0);
  }

  function getBrandLogoText() {
    return getOptionalBusinessText("brandLogoText") || business.name;
  }

  function applyBusinessAccentColor() {
    const color = getOptionalBusinessText("brandAccentColor");
    if (!color) return;
    document.documentElement.style.setProperty("--amber", color);
    document.documentElement.style.setProperty("--amber-deep", color);
  }

  function setLanguage(language, updateUrl = false) {
    state.language = language === "en" && hasEnglishCopy() ? "en" : "es";
    window.clearTimeout(copyLinkFeedbackTimer);
    window.clearTimeout(copySummaryFeedbackTimer);
    if (updateUrl) updateLanguageInUrl(state.language);
    const labels = uiCopy[state.language];
    document.documentElement.lang = state.language === "en" ? "en" : "es-MX";

    document.querySelectorAll("[data-ui]").forEach(element => {
      element.textContent = getUiCopy(element.dataset.ui, labels);
    });
    document.querySelectorAll("[data-placeholder-ui]").forEach(element => {
      element.placeholder = labels[element.dataset.placeholderUi];
    });
    document.querySelectorAll("#languageToggle button").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
    });

    $("#heroHeadline").textContent = getCopy("heroHeadline");
    $("#heroSubheadline").textContent = getCopy("heroSubheadline");
    $("#estimateIntro").textContent = getCopy("estimateIntro");
    $("#priceDisclaimer").textContent = getCopy("priceDisclaimer");
    const categoryDisclaimer = getCategoryDisclaimer();
    $("#categoryDisclaimer").textContent = categoryDisclaimer;
    $("#categoryDisclaimer").classList.toggle("hidden", !categoryDisclaimer);
    $("#whatsappCtaLabel").textContent = getCopy("whatsappCtaLabel");
    updateWhatsAppContactDetails();
    $("#serviceAreaNote").textContent = getCopy(
      "serviceAreaNote",
      "Atendemos toda la zona de " + business.city
    );

    const pricingNotes = getCopy("pricingNotes", "");
    $("#pricingNotes").textContent = pricingNotes;
    $("#pricingNotes").classList.toggle("hidden", !pricingNotes);
    $("#monedaOut").textContent = state.language === "en"
      ? labels.mexicanPesos
      : business.currencyLabel;

    business.services.forEach(service => {
      const button = document.querySelector(`#servicios [data-id="${service.id}"]`);
      if (button) button.textContent = getLocalizedLabel(service, "name");
    });
    if (state.service) renderQuestions(state.service);
    if (state.range) {
      renderRequestSummary();
      buildWhatsAppUrl();
    }
  }

  function getLocalizedLabel(item, field = "label", language = state.language) {
    const englishField = field === "name" ? "nameEn" : "labelEn";
    const translatedValue = language === "en" ? item[englishField] : null;
    return typeof translatedValue === "string" && translatedValue.trim()
      ? translatedValue.trim()
      : item[field];
  }

  function getBusinessTone() {
    return ["professional", "friendly", "technical"].includes(business.tone)
      ? business.tone
      : "professional";
  }

  function getToneCopy(field, fallback) {
    if (state.language !== "es") return fallback;
    const copy = toneCopy[getBusinessTone()];
    return copy && copy[field] ? copy[field] : fallback;
  }

  function getUiCopy(field, labels = uiCopy[state.language]) {
    return getToneCopy(field, labels[field]);
  }

  function getCopy(field, fallback = fallbackCopy[field]) {
    const translatedValue = state.language === "en" && business.english
      ? business.english[field]
      : null;
    const value = typeof translatedValue === "string" && translatedValue.trim()
      ? translatedValue
      : business[field];
    return typeof value === "string" && value.trim()
      ? value.trim()
      : getToneCopy(field, fallback);
  }

  function getCategoryDisclaimer() {
    const spanishText = getOptionalBusinessText("categoryDisclaimer");
    const englishText = getOptionalBusinessText("categoryDisclaimerEn");
    return state.language === "en" ? englishText || spanishText : spanishText;
  }

  function getPhoneValue() {
    return typeof business.phone === "string" || typeof business.phone === "number"
      ? String(business.phone).trim()
      : "";
  }

  function getPhoneHref(phone) {
    const normalizedPhone = phone.replace(/[^\d+]/g, "");
    if (!normalizedPhone) return "#";
    if (normalizedPhone.startsWith("+")) return "tel:" + normalizedPhone;
    return "tel:+" + (normalizedPhone.startsWith("52") ? normalizedPhone : "52" + normalizedPhone);
  }

  function getWhatsAppValue() {
    return typeof business.whatsapp === "string" || typeof business.whatsapp === "number"
      ? String(business.whatsapp).trim()
      : "";
  }

  function isWhatsAppPending() {
    return business.whatsappConfirmed === false;
  }

  function getConfirmedWhatsAppValue() {
    return isWhatsAppPending() ? "" : getWhatsAppValue();
  }

  function getWhatsAppPendingNote() {
    const spanishNote = getOptionalBusinessText("whatsappPendingNote");
    const englishNote = getOptionalBusinessText("whatsappPendingNoteEn");
    return state.language === "en" ? englishNote || spanishNote : spanishNote;
  }

  function updateWhatsAppContactDetails() {
    const labels = uiCopy[state.language];
    const whatsapp = getWhatsAppValue();
    const confirmedWhatsApp = getConfirmedWhatsAppValue();
    const phone = getPhoneValue();
    const pending = Boolean(whatsapp) && isWhatsAppPending();
    const contactLink = $("#lnkWa");
    const contactLabel = $("#lnkWaLabel");
    const pendingNote = $("#whatsappPendingNote");
    const helperText = $("#whatsappHelperText");
    const trustMessage = $("#handoffTrust");
    const fallback = $("#whatsappFallback");
    const fallbackMessage = $("#whatsappFallbackMessage");
    const fallbackPhone = $("#whatsappFallbackPhone");

    if (contactLabel) {
      contactLabel.textContent = pending ? labels.pendingWhatsApp : labels.directWhatsApp;
    }

    if (contactLink) {
      contactLink.href = confirmedWhatsApp ? "https://wa.me/" + confirmedWhatsApp : "#";
      contactLink.classList.toggle("hidden", !confirmedWhatsApp);
    }

    if (pendingNote) {
      const note = pending ? getWhatsAppPendingNote() : "";
      pendingNote.textContent = note;
      pendingNote.classList.toggle("hidden", !note);
    }

    if (helperText) {
      helperText.textContent = confirmedWhatsApp ? getCopy("whatsappHelperText") : "";
      helperText.classList.toggle("hidden", !confirmedWhatsApp);
    }

    if (trustMessage) {
      trustMessage.classList.toggle("hidden", !confirmedWhatsApp && !phone);
    }

    if (fallback && fallbackMessage && fallbackPhone) {
      fallbackMessage.textContent = labels.whatsappUnavailable;
      fallbackPhone.textContent = phone ? formatPhone(phone) : "";
      fallbackPhone.href = phone ? getPhoneHref(phone) : "#";
      fallbackPhone.classList.toggle("hidden", !phone);
      fallback.classList.toggle("hidden", Boolean(confirmedWhatsApp));
    }
  }

  function getHelperText(item) {
    const spanishText = typeof item.helperText === "string" ? item.helperText.trim() : "";
    const englishText = typeof item.helperTextEn === "string" ? item.helperTextEn.trim() : "";
    return state.language === "en" ? englishText || spanishText : spanishText;
  }

  function getSalesCopy(service) {
    const spanishCopy = typeof service.salesCopy === "string" ? service.salesCopy.trim() : "";
    const englishCopy = typeof service.salesCopyEn === "string" ? service.salesCopyEn.trim() : "";
    return state.language === "en" ? englishCopy || spanishCopy : spanishCopy;
  }

  function formatPhone(phone) {
    return phone ? phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3") : "";
  }

  function selectService(service, button, updateUrl = true, selectedZone = null) {
    if (updateUrl) linkedService = null;
    state.service = service;
    state.answers = {};
    state.zone = selectedZone;
    state.range = null;
    if (updateUrl) updateSelectionInUrl(service.id, selectedZone);
    document.querySelectorAll("#servicios .opt").forEach(option => option.classList.remove("sel"));
    button.classList.add("sel");
    updateLinkedServiceNote();
    renderQuestions(service);
    $("#cardResultado").classList.add("hidden");
  }

  function renderQuestions(service) {
    const helperText = getHelperText(service);
    const salesCopy = getSalesCopy(service);
    const helper = $("#serviceHelper");
    helper.textContent = helperText;
    helper.classList.toggle("hidden", !helperText);
    helper.classList.toggle("with-sales-copy", Boolean(helperText && salesCopy));
    const salesCopyElement = $("#serviceSalesCopy");
    salesCopyElement.textContent = salesCopy;
    salesCopyElement.classList.toggle("hidden", !salesCopy);

    const container = $("#preguntas");
    container.innerHTML = "";

    service.questions.forEach(question => {
      const wrapper = document.createElement("div");
      wrapper.className = "q";
      const label = document.createElement("div");
      label.className = "q-label";
      label.textContent = getLocalizedLabel(question);
      const questionHelperText = getHelperText(question);
      const questionHelper = document.createElement("div");
      questionHelper.className = "q-helper";
      questionHelper.textContent = questionHelperText;
      const options = document.createElement("div");
      options.className = "opts";

      question.options.forEach(option => {
        const choice = document.createElement("div");
        choice.className = "opt";
        choice.textContent = getLocalizedLabel(option);
        choice.classList.toggle("sel", state.answers[question.id] === option);
        choice.onclick = () => {
          state.answers[question.id] = option;
          options.querySelectorAll(".opt").forEach(item => item.classList.remove("sel"));
          choice.classList.add("sel");
          checkComplete(service);
        };
        options.appendChild(choice);
      });

      wrapper.appendChild(label);
      if (questionHelperText) wrapper.appendChild(questionHelper);
      wrapper.appendChild(options);
      container.appendChild(wrapper);
    });

    const zoneWrapper = document.createElement("div");
    zoneWrapper.className = "q";
    const zoneLabel = document.createElement("div");
    zoneLabel.className = "q-label";
    zoneLabel.dataset.ui = "zoneQuestion";
    zoneLabel.textContent = uiCopy[state.language].zoneQuestion;
    const zoneOptions = document.createElement("div");
    zoneOptions.className = "opts";

    business.zones.forEach(zone => {
      const choice = document.createElement("div");
      choice.className = "opt";
      choice.textContent = getLocalizedLabel(zone);
      choice.dataset.zone = getZoneSlug(zone);
      choice.classList.toggle("sel", state.zone === zone);
      choice.onclick = () => {
        state.zone = zone;
        updateZoneInUrl(zone);
        zoneOptions.querySelectorAll(".opt").forEach(item => item.classList.remove("sel"));
        choice.classList.add("sel");
        checkComplete(service);
      };
      zoneOptions.appendChild(choice);
    });

    zoneWrapper.appendChild(zoneLabel);
    zoneWrapper.appendChild(zoneOptions);
    container.appendChild(zoneWrapper);

    const card = $("#cardPreguntas");
    card.classList.remove("hidden");
    card.classList.add("reveal");
    checkComplete(service);
  }

  function isEstimateComplete(service = state.service) {
    return Boolean(
      service &&
      state.zone &&
      service.questions.every(question => state.answers[question.id])
    );
  }

  function getEstimatorGuidanceText(service = state.service) {
    if (!service || state.range || isEstimateComplete(service)) return "";

    const missingAnswers = service.questions.some(question => !state.answers[question.id]);
    const missingZone = !state.zone;
    const labels = uiCopy[state.language];

    if (missingAnswers && missingZone) return labels.guidanceAnswersAndZoneMissing;
    if (missingZone) return labels.guidanceZoneMissing;
    if (missingAnswers) return labels.guidanceAnswersMissing;
    return "";
  }

  function updateEstimatorGuidance(service = state.service) {
    const guidance = $("#estimatorGuidance");
    if (!guidance) return;

    const text = getEstimatorGuidanceText(service);
    guidance.textContent = text;
    guidance.classList.toggle("hidden", !text);
  }

  function checkComplete(service) {
    $("#btnCalcular").disabled = !isEstimateComplete(service);
    updateEstimatorGuidance(service);
  }

  function resetEstimate() {
    linkedService = null;
    state.service = null;
    state.answers = {};
    state.zone = null;
    state.range = null;
    updateSelectionInUrl(null, null);

    document.querySelectorAll("#servicios .opt").forEach(option => option.classList.remove("sel"));
    updateLinkedServiceNote();
    $("#serviceHelper").textContent = "";
    $("#serviceHelper").classList.add("hidden");
    $("#serviceHelper").classList.remove("with-sales-copy");
    $("#serviceSalesCopy").textContent = "";
    $("#serviceSalesCopy").classList.add("hidden");
    $("#estimatorGuidance").textContent = "";
    $("#estimatorGuidance").classList.add("hidden");
    $("#preguntas").innerHTML = "";
    $("#rangeOut").innerHTML = "";
    $("#requestSummary").innerHTML = "";
    $("#btnCalcular").disabled = true;
    $("#btnWa").href = "#";
    $("#btnWa").classList.remove("hidden");
    updateWhatsAppContactDetails();
    $("#cardPreguntas").classList.add("hidden");
    $("#cardResultado").classList.add("hidden");
    resetCopyFeedbackLabels();
    $("#cardServicios").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function calculate() {
    const service = state.service;
    if (!isEstimateComplete(service)) return;

    let [min, max] = service.base;
    let multiplier = 1;
    let addition = 0;

    service.questions.forEach(question => {
      const answer = state.answers[question.id];
      if (answer) {
        multiplier *= answer.factor || 1;
        addition += answer.add || 0;
      }
    });

    if (state.zone) multiplier *= state.zone.factor;
    min = Math.round((min * multiplier + addition) / 50) * 50;
    max = Math.round((max * multiplier + addition) / 50) * 50;
    state.range = [min, max];

    $("#rangeOut").innerHTML =
      `<span class="range-value"><span class="cur">$</span>${formatPrice(min)}</span> ` +
      `<span class="dash">–</span> ` +
      `<span class="range-value"><span class="cur">$</span>${formatPrice(max)}</span>`;
    const card = $("#cardResultado");
    card.classList.remove("hidden");
    card.classList.remove("reveal");
    void card.offsetWidth;
    card.classList.add("reveal");
    renderRequestSummary();
    updateEstimatorGuidance(service);
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    buildWhatsAppUrl();
  }

  function formatPrice(value) {
    return value.toLocaleString("es-MX");
  }

  function buildEstimateSummary() {
    const details = getHandoffDetails();
    const isEnglish = state.language === "en";
    const summaryLabels = isEnglish
      ? {
        business: "Business",
        service: "Service",
        zone: "Zone",
        details: "Selected options",
        estimate: "Estimated range",
        important: "Important reminder",
        source: "Source",
        link: "Link"
      }
      : {
        business: uiCopy.es.business,
        service: uiCopy.es.service,
        zone: uiCopy.es.zone,
        details: "Opciones seleccionadas",
        estimate: "Rango estimado",
        important: "Recordatorio importante",
        source: "Origen",
        link: uiCopy.es.link
      };
    const lines = [summaryLabels.business + ": " + details.businessName];

    lines.push(summaryLabels.service + ": " + details.service);
    lines.push(summaryLabels.zone + ": " + details.zone);
    lines.push("");
    lines.push(summaryLabels.details + ":");
    details.answers.forEach(item => {
      lines.push("- " + item.question + ": " + item.answer);
    });
    lines.push("");
    lines.push(
      summaryLabels.estimate + ": $" + formatPrice(details.range[0]) +
      " – $" + formatPrice(details.range[1]) + " " + details.currency
    );
    lines.push(
      summaryLabels.important + ": " +
      (isEnglish
        ? "This is an initial estimate. The final price depends on the service details."
        : "Esta es una estimación inicial. El precio final depende de los detalles del servicio.")
    );
    if (details.source) {
      lines.push("");
      lines.push(summaryLabels.source + ": " + details.source);
    }
    lines.push(summaryLabels.link + ": " + window.location.href);
    return lines.join("\n");
  }

  function renderRequestSummary() {
    const details = getHandoffDetails();
    const labels = uiCopy[state.language];
    const rows = [
      [labels.service, details.service, "service"],
      [labels.zone, details.zone, "zone"],
      [labels.details, details.answers, "details"],
      [labels.estimate, "$" + formatPrice(details.range[0]) + " – $" +
        formatPrice(details.range[1]) + " " + details.currency, "estimate"]
    ];
    if (details.source) {
      rows.push([state.language === "en" ? "Source" : "Origen", details.source, "source"]);
    }
    const summary = $("#requestSummary");
    summary.innerHTML = "";

    rows.forEach(([label, value, type]) => {
      const row = document.createElement("div");
      row.className = "summary-row summary-row--" + type;
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");

      if (type === "details") {
        const list = document.createElement("ul");
        list.className = "summary-details";
        value.forEach(item => {
          const detail = document.createElement("li");
          const question = document.createElement("strong");
          question.textContent = item.question + ": ";
          detail.appendChild(question);
          detail.appendChild(document.createTextNode(item.answer));
          list.appendChild(detail);
        });
        description.appendChild(list);
      } else {
        description.textContent = value;
      }

      row.appendChild(term);
      row.appendChild(description);
      summary.appendChild(row);
    });
  }

  // This object is the handoff boundary where lead capture can be added later.
  function getHandoffDetails(language = state.language) {
    return {
      businessPath: businessPath(business),
      businessName: business.name,
      service: getLocalizedLabel(state.service, "name", language),
      answers: state.service.questions.map(question => ({
        question: getLocalizedLabel(question, "label", language),
        answer: getLocalizedLabel(state.answers[question.id], "label", language)
      })),
      zone: getLocalizedLabel(state.zone, "label", language),
      range: state.range,
      currency: business.currency,
      source: getSourceFromUrl(),
      customerName: $("#leadName").value.trim(),
      customerPhone: $("#leadTel").value.trim()
    };
  }

  function buildWhatsAppUrl() {
    if (!state.range) return;
    const whatsapp = getConfirmedWhatsAppValue();
    const button = $("#btnWa");

    updateWhatsAppContactDetails();
    if (!whatsapp) {
      button.href = "#";
      button.classList.add("hidden");
      return;
    }

    button.classList.remove("hidden");
    const useEnglish = state.language === "en" && hasEnglishCopy();
    const details = getHandoffDetails(useEnglish ? "en" : "es");
    const lines = useEnglish
      ? buildEnglishWhatsAppMessage(details)
      : buildSpanishWhatsAppMessage(details);

    button.href =
      "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  function buildSpanishWhatsAppMessage(details) {
    const lines = [
      "Hola, quiero cotizar.",
      "Servicio: " + details.service,
      "Ciudad: " + business.city
    ];

    if (details.source) lines.push("Origen: " + details.source);
    details.answers.forEach(item => lines.push(item.question + " " + item.answer));
    lines.push("Zona: " + details.zone);
    lines.push(
      "Rango estimado mostrado: $" + formatPrice(details.range[0]) +
      " – $" + formatPrice(details.range[1]) + " " + details.currency
    );
    if (details.customerName) lines.push("Mi nombre es: " + details.customerName);
    if (details.customerPhone) lines.push("Mi teléfono: " + details.customerPhone);
    return lines;
  }

  function buildEnglishWhatsAppMessage(details) {
    const lines = [
      "Hello, I'd like a quote.",
      "Service: " + details.service,
      "City: " + business.city
    ];

    if (details.source) lines.push("Source: " + details.source);
    lines.push("Details:");
    details.answers.forEach(item => lines.push(item.question + " " + item.answer));
    lines.push("Zone: " + details.zone);
    lines.push(
      "Estimated range: $" + formatPrice(details.range[0]) +
      " – $" + formatPrice(details.range[1]) + " " + details.currency
    );
    if (details.customerName) lines.push("Name: " + details.customerName);
    if (details.customerPhone) lines.push("Phone: " + details.customerPhone);
    return lines;
  }
})();
