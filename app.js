(() => {
  const STYLE_ID = "precios-locales-style";
  const ROOT_SEGMENT = "priceguide";
  const css = ':root{\n    --ink:#16120D;\n    --ink-soft:#4A4238;\n    --paper:#F6F1E8;\n    --card:#FFFDF8;\n    --line:#E4DACA;\n    --amber:#E08A2B;\n    --amber-deep:#B96A12;\n    --wa:#1FAE5A;\n    --wa-deep:#168B47;\n    --shadow:0 1px 0 rgba(22,18,13,.04), 0 18px 40px -22px rgba(22,18,13,.35);\n  }\n  *{box-sizing:border-box;margin:0;padding:0}\n  html{-webkit-text-size-adjust:100%}\n  body{\n    font-family:\'Hanken Grotesk\',system-ui,sans-serif;\n    color:var(--ink);\n    background:var(--paper);\n    background-image:\n      radial-gradient( at 100% 0%, rgba(224,138,43,.10), transparent 45%),\n      radial-gradient(at 0% 100%, rgba(31,174,90,.06), transparent 40%);\n    background-attachment:fixed;\n    line-height:1.45;\n    -webkit-font-smoothing:antialiased;\n    min-height:100vh;\n  }\n  /* subtle grain */\n  body::before{\n    content:"";position:fixed;inset:0;pointer-events:none;opacity:.4;z-index:0;\n    background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.035\'/%3E%3C/svg%3E");\n  }\n  .wrap{position:relative;z-index:1;max-width:560px;margin:0 auto;padding:0 18px 64px}\n\n  /* HEADER */\n  header{padding:28px 0 18px;display:flex;align-items:center;gap:14px}\n  .logo{\n    width:52px;height:52px;border-radius:14px;flex:none;\n    background:linear-gradient(150deg,var(--amber),var(--amber-deep));\n    display:grid;place-items:center;color:#fff;\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:24px;\n    box-shadow:0 8px 20px -8px rgba(185,106,18,.6);\n  }\n  .biz h1{font-family:\'Fraunces\',serif;font-weight:600;font-size:22px;letter-spacing:-.01em;line-height:1.1}\n  .biz p{font-size:13px;color:var(--ink-soft);margin-top:3px;font-weight:500}\n  .biz .cat{color:var(--amber-deep)}\n\n  /* HERO */\n  .hero{margin:6px 0 22px}\n  .hero h2{\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:30px;\n    line-height:1.08;letter-spacing:-.02em;\n  }\n  .hero h2 em{font-style:italic;color:var(--amber-deep)}\n  .hero p{margin-top:10px;color:var(--ink-soft);font-size:15px;max-width:42ch}\n\n  /* CARD */\n  .card{\n    background:var(--card);border:1px solid var(--line);border-radius:20px;\n    padding:22px 20px;box-shadow:var(--shadow);margin-bottom:16px;\n  }\n  .step-label{\n    font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;\n    color:var(--amber-deep);margin-bottom:12px;display:flex;align-items:center;gap:8px;\n  }\n  .step-label .num{\n    width:20px;height:20px;border-radius:50%;background:var(--amber);color:#fff;\n    display:grid;place-items:center;font-size:11px;letter-spacing:0;\n  }\n\n  /* OPTION CHIPS */\n  .opts{display:flex;flex-wrap:wrap;gap:9px}\n  .opt{\n    border:1.5px solid var(--line);background:#fff;border-radius:12px;\n    padding:11px 15px;font-size:14px;font-weight:600;color:var(--ink);\n    cursor:pointer;transition:all .16s ease;user-select:none;\n  }\n  .opt:hover{border-color:var(--amber)}\n  .opt.sel{border-color:var(--amber);background:#FFF6EA;box-shadow:inset 0 0 0 1px var(--amber)}\n\n  .service-helper{font-size:13.5px;color:var(--ink-soft);line-height:1.5;margin-bottom:20px}\n  .service-helper.with-sales-copy{margin-bottom:8px}\n  .service-sales-copy{font-size:13px;color:var(--ink);line-height:1.5;margin-bottom:20px;padding-left:10px;border-left:2px solid var(--amber)}\n  .estimator-guidance{font-size:12.5px;color:var(--ink-soft);line-height:1.4;margin:0 0 14px;padding:9px 10px;border:1px solid var(--line);border-radius:10px;background:#FFF9F0}\n  .q{margin-top:20px}\n  .q:first-child{margin-top:0}\n  .q-label{font-size:14px;font-weight:600;margin-bottom:9px}\n  .q-helper{font-size:12.5px;color:var(--ink-soft);line-height:1.45;margin:-4px 0 9px;max-width:48ch}\n\n  /* dynamic block reveal */\n  .reveal{animation:rise .4s cubic-bezier(.2,.7,.2,1) both}\n  @keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\n  .hidden{display:none}\n\n  /* CALC BUTTON */\n  .btn{\n    width:100%;border:none;border-radius:14px;padding:16px;font-size:16px;\n    font-weight:700;font-family:\'Hanken Grotesk\',sans-serif;cursor:pointer;\n    transition:transform .12s ease,box-shadow .2s ease,opacity .2s;\n  }\n  .btn:active{transform:translateY(1px)}\n  .btn-amber{background:linear-gradient(150deg,var(--amber),var(--amber-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(185,106,18,.7)}\n  .btn-amber:disabled{opacity:.4;cursor:not-allowed;box-shadow:none}\n  .btn-secondary{width:auto;display:block;margin:14px auto 0;padding:8px 10px;border:0;background:transparent;color:var(--amber-deep);font-size:13px;box-shadow:none}\n  .btn-secondary:hover{text-decoration:underline}\n  .btn-wa{background:linear-gradient(150deg,var(--wa),var(--wa-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(22,139,71,.7);display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}\n  .btn-wa svg{width:22px;height:22px;fill:#fff}\n\n  /* RESULT */\n  .result{text-align:center;padding:8px 4px 4px}\n  .result .tag{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft)}\n  .range{\n    font-family:\'Fraunces\',serif;font-weight:600;letter-spacing:-.02em;\n    font-size:clamp(34px,11vw,52px);line-height:1;margin:10px 0 4px;\n    color:var(--ink);\n  }\n  .range .cur{color:var(--amber-deep);font-size:.55em;vertical-align:super}\n  .range .dash{color:var(--line);font-weight:400}\n  .moneda{font-size:13px;color:var(--ink-soft);font-weight:600}\n  .range-note{font-size:12.5px;color:var(--ink-soft);line-height:1.45;margin:12px auto 0;max-width:48ch}\n  .request-summary{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:16px 0;margin:18px 0;text-align:left}\n  .request-summary h3{font-size:14px;margin-bottom:10px}\n  .summary-list{display:grid;gap:7px}\n  .summary-row{display:grid;grid-template-columns:88px 1fr;gap:10px;font-size:13px;line-height:1.4}\n  .summary-row dt{color:var(--ink-soft);font-weight:600}\n  .summary-row dd{font-weight:600;min-width:0}\n  .summary-details{display:grid;gap:5px;list-style:none;font-weight:500}\n  .summary-details li{position:relative;padding-left:12px}\n  .summary-details li::before{content:"•";position:absolute;left:0;color:var(--amber-deep)}\n  .summary-details strong{font-weight:700}\n  .handoff-intro{margin:2px 0 16px}\n  .handoff-intro h3{font-family:\'Fraunces\',serif;font-size:20px;line-height:1.2;margin-bottom:5px}\n  .handoff-intro p{font-size:13px;color:var(--ink-soft)}\n  .aviso{\n    font-size:12.5px;color:var(--ink-soft);background:#FBF6ED;border:1px dashed var(--line);\n    border-radius:12px;padding:12px 14px;margin:16px 0;line-height:1.4;text-align:left;\n  }\n  .aviso b{color:var(--ink)}\n\n  /* LEAD */\n  .field{margin-bottom:12px}\n  .field label{font-size:13px;font-weight:600;display:block;margin-bottom:6px}\n  .field input{\n    width:100%;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;\n    font-size:15px;font-family:\'Hanken Grotesk\',sans-serif;background:#fff;color:var(--ink);\n  }\n  .field input:focus{outline:none;border-color:var(--amber);box-shadow:0 0 0 3px rgba(224,138,43,.15)}\n  .helper{font-size:12px;color:var(--ink-soft);margin-top:6px}\n\n  /* FOOTER biz info */\n  .bizinfo{display:flex;flex-direction:column;gap:8px;font-size:14px}\n  .bizinfo a{color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:10px;font-weight:500}\n  .bizinfo .ic{width:34px;height:34px;border-radius:10px;background:#FFF6EA;display:grid;place-items:center;flex:none;color:var(--amber-deep);font-size:16px}\n  .legal{text-align:center;font-size:11.5px;color:var(--ink-soft);margin-top:26px;line-height:1.5}\n  .legal strong{color:var(--ink-soft)}\n  .landing-list{display:grid;gap:10px;margin-top:16px}\n  .landing-link{display:block;border:1.5px solid var(--line);background:#fff;border-radius:14px;padding:14px 15px;color:var(--ink);text-decoration:none;font-weight:700;transition:all .16s ease}\n  .landing-link:hover{border-color:var(--amber);background:#FFF6EA}\n  .landing-link small{display:block;color:var(--ink-soft);font-weight:500;margin-top:3px}\n  .muted{color:var(--ink-soft)}\n  .page-actions{display:flex;justify-content:flex-end;align-items:center;gap:8px;margin:-5px 0 14px}\n  .language-toggle{display:flex;align-items:center;gap:3px}\n  .language-toggle.hidden{display:none}\n  .language-toggle button{border:0;background:transparent;color:var(--ink-soft);font:600 12px/1.2 \'Hanken Grotesk\',sans-serif;padding:5px 7px;border-radius:7px;cursor:pointer}\n  .language-toggle button[aria-pressed=\"true\"]{background:#FFF6EA;color:var(--amber-deep)}\n  .language-toggle .divider{color:var(--line);font-size:12px}\n  .copy-link{border:1px solid var(--line);background:var(--card);color:var(--ink-soft);font:600 12px/1.2 \'Hanken Grotesk\',sans-serif;padding:6px 9px;border-radius:8px;cursor:pointer}\n  .copy-link:hover{border-color:var(--amber);color:var(--amber-deep)}\n  .copy-summary{margin:12px auto 0}\n';
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
      <button class="btn btn-secondary" id="btnReset" type="button" data-ui="resetEstimate"></button>
    </div>

    <section class="request-summary" aria-labelledby="summaryTitle">
      <h3 id="summaryTitle" data-ui="requestSummary"></h3>
      <dl class="summary-list" id="requestSummary"></dl>
      <button class="copy-link copy-summary" id="copySummary" type="button" data-ui="copySummary" aria-live="polite"></button>
    </section>

    <div class="aviso">
      <b data-ui="important"></b> <span id="priceDisclaimer"></span>
    </div>
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

    <a class="btn btn-wa" id="btnWa" href="#" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.692.626.711.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      <span id="whatsappCtaLabel"></span>
    </a>
    <p class="helper" id="whatsappHelperText" style="text-align:center;margin-top:10px"></p>
  </div>

  <!-- datos del negocio -->
  <div class="card">
    <div class="step-label"><span class="num">i</span> <span data-ui="businessDetails"></span></div>
    <div class="bizinfo">
      <a href="#" id="lnkTel"><span class="ic">📞</span> <span id="telText"></span></a>
      <a href="#" id="lnkWa"><span class="ic">💬</span> <span data-ui="directWhatsApp"></span></a>
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
      yourName: "Tu nombre",
      yourPhone: "Tu teléfono",
      optional: "opcional",
      namePlaceholder: "Ej. Carlos Méndez",
      phonePlaceholder: "Ej. 624 123 4567",
      businessDetails: "Datos del negocio",
      directWhatsApp: "WhatsApp directo",
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
      yourName: "Your name",
      yourPhone: "Your phone",
      optional: "optional",
      namePlaceholder: "E.g. Carlos Méndez",
      phonePlaceholder: "E.g. 624 123 4567",
      businessDetails: "Business details",
      directWhatsApp: "Direct WhatsApp",
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
    document.title = "Precios Locales — Demo";
    const links = businesses.map(item => `
      <a class="landing-link" href="${withPrefix(businessPath(item), prefix)}/">
        ${item.name}
        <small>${item.city} · ${item.categoryLabel || item.category}</small>
      </a>`).join("");

    $("#app").innerHTML = `
      <header>
        <div class="logo">P</div>
        <div class="biz">
          <h1>Precios Locales</h1>
          <p>MVP demo · Guías de precios para servicios del hogar</p>
        </div>
      </header>
      <div class="hero">
        <h2>Guías de precio simples para negocios locales.</h2>
        <p>Esta landing existe solo para orientar el demo. Las páginas de negocio siguen siendo el producto principal.</p>
      </div>
      <div class="card">
        <div class="step-label"><span class="num">1</span> Demos disponibles</div>
        <p class="muted">Abre una guía para probar el estimador y el handoff por WhatsApp.</p>
        <div class="landing-list">${links}</div>
      </div>
      <p class="legal">Precios Locales · Demo estático sin búsqueda, reseñas, backend, login, CRM ni base de datos.</p>`;
  }

  function renderNotFound(prefix) {
    document.title = "Negocio no encontrado — Precios Locales";
    $("#app").innerHTML = `
      <header>
        <div class="logo">P</div>
        <div class="biz">
          <h1>Precios Locales</h1>
          <p>Servicios para el hogar en México</p>
        </div>
      </header>
      <div class="card">
        <div class="step-label">Negocio no encontrado</div>
        <h2 style="font-family:'Fraunces',serif;margin-bottom:8px">Esta guía de precios no está disponible.</h2>
        <p style="color:var(--ink-soft);margin-bottom:14px">Revisa que la dirección esté escrita correctamente.</p>
        <a class="btn btn-amber" style="display:block;text-align:center;text-decoration:none" href="${withPrefix("/", prefix)}">Ver demos disponibles</a>
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
    $("#telText").textContent = formatPhone(business.phone);
    $("#lnkTel").href = "tel:+52" + business.phone;
    $("#lnkWa").href = "https://wa.me/" + business.whatsapp;

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
      const button = document.querySelector(`#servicios [data-id="${initialService.id}"]`);
      selectService(initialService, button, false, initialZone);
    }
  }

  function getLanguageFromUrl() {
    return new URL(window.location.href).searchParams.get("lang") === "en" ? "en" : "es";
  }

  function getServiceFromUrl() {
    const serviceId = new URL(window.location.href).searchParams.get("service");
    return business.services.find(service => service.id === serviceId) || null;
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
      element.textContent = labels[element.dataset.ui];
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
    $("#whatsappCtaLabel").textContent = getCopy("whatsappCtaLabel");
    $("#whatsappHelperText").textContent = getCopy("whatsappHelperText");
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

  function getCopy(field, fallback = fallbackCopy[field]) {
    const translatedValue = state.language === "en" && business.english
      ? business.english[field]
      : null;
    const value = typeof translatedValue === "string" && translatedValue.trim()
      ? translatedValue
      : business[field];
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
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
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  }

  function selectService(service, button, updateUrl = true, selectedZone = null) {
    state.service = service;
    state.answers = {};
    state.zone = selectedZone;
    state.range = null;
    if (updateUrl) updateSelectionInUrl(service.id, selectedZone);
    document.querySelectorAll("#servicios .opt").forEach(option => option.classList.remove("sel"));
    button.classList.add("sel");
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
    state.service = null;
    state.answers = {};
    state.zone = null;
    state.range = null;
    updateSelectionInUrl(null, null);

    document.querySelectorAll("#servicios .opt").forEach(option => option.classList.remove("sel"));
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
      `<span class="cur">$</span>${formatPrice(min)} <span class="dash">–</span> <span class="cur">$</span>${formatPrice(max)}`;
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
    const summaryLabels = state.language === "en"
      ? {
        business: "Business",
        service: "Service",
        zone: "Zone",
        details: "Details",
        estimate: "Estimated range",
        link: "Link"
      }
      : {
        service: uiCopy.es.service,
        zone: uiCopy.es.zone,
        details: uiCopy.es.details,
        estimate: uiCopy.es.estimate,
        link: uiCopy.es.link
      };
    const lines = state.language === "en"
      ? [summaryLabels.business + ": " + details.businessName]
      : [details.businessName];

    lines.push(summaryLabels.service + ": " + details.service);
    lines.push(summaryLabels.zone + ": " + details.zone);
    if (details.source) {
      lines.push((state.language === "en" ? "Source" : "Origen") + ": " + details.source);
    }
    lines.push(summaryLabels.details + ":");
    details.answers.forEach(item => {
      lines.push("- " + item.question + ": " + item.answer);
    });
    lines.push(
      summaryLabels.estimate + ": $" + formatPrice(details.range[0]) +
      " – $" + formatPrice(details.range[1]) + " " + details.currency
    );
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
    const summary = $("#requestSummary");
    summary.innerHTML = "";

    rows.forEach(([label, value, type]) => {
      const row = document.createElement("div");
      row.className = "summary-row";
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
    const useEnglish = state.language === "en" && hasEnglishCopy();
    const details = getHandoffDetails(useEnglish ? "en" : "es");
    const lines = useEnglish
      ? buildEnglishWhatsAppMessage(details)
      : buildSpanishWhatsAppMessage(details);

    $("#btnWa").href =
      "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
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
