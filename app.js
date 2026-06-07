(() => {
  const STYLE_ID = "precios-locales-style";
  const ROOT_SEGMENT = "priceguide";
  const css = ':root{\n    --ink:#16120D;\n    --ink-soft:#4A4238;\n    --paper:#F6F1E8;\n    --card:#FFFDF8;\n    --line:#E4DACA;\n    --amber:#E08A2B;\n    --amber-deep:#B96A12;\n    --wa:#1FAE5A;\n    --wa-deep:#168B47;\n    --shadow:0 1px 0 rgba(22,18,13,.04), 0 18px 40px -22px rgba(22,18,13,.35);\n  }\n  *{box-sizing:border-box;margin:0;padding:0}\n  html{-webkit-text-size-adjust:100%}\n  body{\n    font-family:\'Hanken Grotesk\',system-ui,sans-serif;\n    color:var(--ink);\n    background:var(--paper);\n    background-image:\n      radial-gradient( at 100% 0%, rgba(224,138,43,.10), transparent 45%),\n      radial-gradient(at 0% 100%, rgba(31,174,90,.06), transparent 40%);\n    background-attachment:fixed;\n    line-height:1.45;\n    -webkit-font-smoothing:antialiased;\n    min-height:100vh;\n  }\n  /* subtle grain */\n  body::before{\n    content:"";position:fixed;inset:0;pointer-events:none;opacity:.4;z-index:0;\n    background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.9\' numOctaves=\'2\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'.035\'/%3E%3C/svg%3E");\n  }\n  .wrap{position:relative;z-index:1;max-width:560px;margin:0 auto;padding:0 18px 64px}\n\n  /* HEADER */\n  header{padding:28px 0 18px;display:flex;align-items:center;gap:14px}\n  .logo{\n    width:52px;height:52px;border-radius:14px;flex:none;\n    background:linear-gradient(150deg,var(--amber),var(--amber-deep));\n    display:grid;place-items:center;color:#fff;\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:24px;\n    box-shadow:0 8px 20px -8px rgba(185,106,18,.6);\n  }\n  .biz h1{font-family:\'Fraunces\',serif;font-weight:600;font-size:22px;letter-spacing:-.01em;line-height:1.1}\n  .biz p{font-size:13px;color:var(--ink-soft);margin-top:3px;font-weight:500}\n  .biz .cat{color:var(--amber-deep)}\n\n  /* HERO */\n  .hero{margin:6px 0 22px}\n  .hero h2{\n    font-family:\'Fraunces\',serif;font-weight:600;font-size:30px;\n    line-height:1.08;letter-spacing:-.02em;\n  }\n  .hero h2 em{font-style:italic;color:var(--amber-deep)}\n  .hero p{margin-top:10px;color:var(--ink-soft);font-size:15px;max-width:42ch}\n\n  /* CARD */\n  .card{\n    background:var(--card);border:1px solid var(--line);border-radius:20px;\n    padding:22px 20px;box-shadow:var(--shadow);margin-bottom:16px;\n  }\n  .step-label{\n    font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;\n    color:var(--amber-deep);margin-bottom:12px;display:flex;align-items:center;gap:8px;\n  }\n  .step-label .num{\n    width:20px;height:20px;border-radius:50%;background:var(--amber);color:#fff;\n    display:grid;place-items:center;font-size:11px;letter-spacing:0;\n  }\n\n  /* OPTION CHIPS */\n  .opts{display:flex;flex-wrap:wrap;gap:9px}\n  .opt{\n    border:1.5px solid var(--line);background:#fff;border-radius:12px;\n    padding:11px 15px;font-size:14px;font-weight:600;color:var(--ink);\n    cursor:pointer;transition:all .16s ease;user-select:none;\n  }\n  .opt:hover{border-color:var(--amber)}\n  .opt.sel{border-color:var(--amber);background:#FFF6EA;box-shadow:inset 0 0 0 1px var(--amber)}\n\n  .q{margin-top:20px}\n  .q:first-child{margin-top:0}\n  .q-label{font-size:14px;font-weight:600;margin-bottom:9px}\n\n  /* dynamic block reveal */\n  .reveal{animation:rise .4s cubic-bezier(.2,.7,.2,1) both}\n  @keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}\n  .hidden{display:none}\n\n  /* CALC BUTTON */\n  .btn{\n    width:100%;border:none;border-radius:14px;padding:16px;font-size:16px;\n    font-weight:700;font-family:\'Hanken Grotesk\',sans-serif;cursor:pointer;\n    transition:transform .12s ease,box-shadow .2s ease,opacity .2s;\n  }\n  .btn:active{transform:translateY(1px)}\n  .btn-amber{background:linear-gradient(150deg,var(--amber),var(--amber-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(185,106,18,.7)}\n  .btn-amber:disabled{opacity:.4;cursor:not-allowed;box-shadow:none}\n  .btn-wa{background:linear-gradient(150deg,var(--wa),var(--wa-deep));color:#fff;box-shadow:0 12px 24px -10px rgba(22,139,71,.7);display:flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}\n  .btn-wa svg{width:22px;height:22px;fill:#fff}\n\n  /* RESULT */\n  .result{text-align:center;padding:8px 4px 4px}\n  .result .tag{font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-soft)}\n  .range{\n    font-family:\'Fraunces\',serif;font-weight:600;letter-spacing:-.02em;\n    font-size:clamp(34px,11vw,52px);line-height:1;margin:10px 0 4px;\n    color:var(--ink);\n  }\n  .range .cur{color:var(--amber-deep);font-size:.55em;vertical-align:super}\n  .range .dash{color:var(--line);font-weight:400}\n  .moneda{font-size:13px;color:var(--ink-soft);font-weight:600}\n  .aviso{\n    font-size:12.5px;color:var(--ink-soft);background:#FBF6ED;border:1px dashed var(--line);\n    border-radius:12px;padding:12px 14px;margin:16px 0;line-height:1.4;text-align:left;\n  }\n  .aviso b{color:var(--ink)}\n\n  /* LEAD */\n  .field{margin-bottom:12px}\n  .field label{font-size:13px;font-weight:600;display:block;margin-bottom:6px}\n  .field input{\n    width:100%;border:1.5px solid var(--line);border-radius:12px;padding:13px 14px;\n    font-size:15px;font-family:\'Hanken Grotesk\',sans-serif;background:#fff;color:var(--ink);\n  }\n  .field input:focus{outline:none;border-color:var(--amber);box-shadow:0 0 0 3px rgba(224,138,43,.15)}\n  .helper{font-size:12px;color:var(--ink-soft);margin-top:6px}\n\n  /* FOOTER biz info */\n  .bizinfo{display:flex;flex-direction:column;gap:8px;font-size:14px}\n  .bizinfo a{color:var(--ink);text-decoration:none;display:flex;align-items:center;gap:10px;font-weight:500}\n  .bizinfo .ic{width:34px;height:34px;border-radius:10px;background:#FFF6EA;display:grid;place-items:center;flex:none;color:var(--amber-deep);font-size:16px}\n  .legal{text-align:center;font-size:11.5px;color:var(--ink-soft);margin-top:26px;line-height:1.5}\n  .legal strong{color:var(--ink-soft)}\n  .landing-list{display:grid;gap:10px;margin-top:16px}\n  .landing-link{display:block;border:1.5px solid var(--line);background:#fff;border-radius:14px;padding:14px 15px;color:var(--ink);text-decoration:none;font-weight:700;transition:all .16s ease}\n  .landing-link:hover{border-color:var(--amber);background:#FFF6EA}\n  .landing-link small{display:block;color:var(--ink-soft);font-weight:500;margin-top:3px}\n  .muted{color:var(--ink-soft)}\n';
  const businessTemplate = '<header>\n    <div class="logo" id="logoInit">P</div>\n    <div class="biz">\n      <h1 id="bizName">Precios Locales</h1>\n      <p><span id="bizCity">México</span> · <span class="cat" id="bizCat">Servicios para el hogar</span></p>\n    </div>\n  </header>\n\n  <div class="hero">\n    <h2>Calcula un <em>precio estimado</em> antes de contactarnos.</h2>\n    <p>Responde unas preguntas rápidas y te mostramos un rango aproximado. Sin compromiso.</p>\n  </div>\n\n  <!-- PASO 1: servicio -->\n  <div class="card">\n    <div class="step-label"><span class="num">1</span> ¿Qué servicio necesitas?</div>\n    <div class="opts" id="servicios"></div>\n  </div>\n\n  <!-- PASO 2: preguntas (dinámico) -->\n  <div class="card hidden" id="cardPreguntas">\n    <div class="step-label"><span class="num">2</span> Cuéntanos un poco más</div>\n    <div id="preguntas"></div>\n    <button class="btn btn-amber" id="btnCalcular" style="margin-top:22px" disabled>Ver precio estimado</button>\n  </div>\n\n  <!-- PASO 3: resultado -->\n  <div class="card hidden" id="cardResultado">\n    <div class="result">\n      <div class="tag">Tu rango estimado</div>\n      <div class="range" id="rangeOut"></div>\n      <div class="moneda" id="monedaOut">pesos mexicanos</div>\n    </div>\n\n    <div class="aviso">\n      <b>Importante:</b> este es un rango estimado. El precio final puede variar según revisión, materiales, condiciones del lugar y alcance real del servicio.\n    </div>\n\n    <div class="step-label" style="margin-top:6px"><span class="num">3</span> ¿A quién le cotizamos?</div>\n    <div class="field">\n      <label for="leadName">Tu nombre</label>\n      <input type="text" id="leadName" placeholder="Ej. Carlos Méndez" autocomplete="name">\n    </div>\n    <div class="field">\n      <label for="leadTel">Tu teléfono <span style="font-weight:400;color:var(--ink-soft)">(opcional)</span></label>\n      <input type="tel" id="leadTel" placeholder="Ej. 624 123 4567" autocomplete="tel" inputmode="tel">\n    </div>\n\n    <a class="btn btn-wa" id="btnWa" href="#" target="_blank" rel="noopener">\n      <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.512 5.26l-.999 3.648 3.736-.98zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.692.626.711.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>\n      Cotizar por WhatsApp\n    </a>\n    <p class="helper" style="text-align:center;margin-top:10px">Te abrimos WhatsApp con tu cotización ya escrita. Solo das enviar.</p>\n  </div>\n\n  <!-- datos del negocio -->\n  <div class="card">\n    <div class="step-label"><span class="num">i</span> Datos del negocio</div>\n    <div class="bizinfo">\n      <a href="#" id="lnkTel"><span class="ic">📞</span> <span id="telText"></span></a>\n      <a href="#" id="lnkWa"><span class="ic">💬</span> WhatsApp directo</a>\n      <div style="display:flex;align-items:center;gap:10px;font-weight:500"><span class="ic">📍</span> <span id="zonaText"></span></div>\n    </div>\n  </div>\n\n  <p class="legal">\n    Guía de precios para <strong id="legalName">este negocio</strong> · Los rangos son estimados y no constituyen una cotización formal.\n  </p>';
  const $ = selector => document.querySelector(selector);
  const businesses = Array.isArray(window.BUSINESSES) ? window.BUSINESSES : [];
  const state = { service: null, answers: {}, zone: null, range: null };
  let business = null;

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
        <small>${item.city} · ${item.category}</small>
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

  function renderBusiness() {
    document.title = `Guía de Precios — ${business.name}`;
    $("#app").innerHTML = businessTemplate;
    $("#bizName").textContent = business.name;
    $("#legalName").textContent = business.name;
    $("#bizCity").textContent = business.city;
    $("#bizCat").textContent = business.category;
    $("#logoInit").textContent = business.name.charAt(0);
    $("#monedaOut").textContent = business.currencyLabel;
    $("#telText").textContent = formatPhone(business.phone);
    $("#lnkTel").href = "tel:+52" + business.phone;
    $("#lnkWa").href = "https://wa.me/" + business.whatsapp;
    $("#zonaText").textContent = "Atendemos toda la zona de " + business.city;

    business.services.forEach(service => {
      const button = document.createElement("div");
      button.className = "opt";
      button.textContent = service.name;
      button.dataset.id = service.id;
      button.onclick = () => selectService(service, button);
      $("#servicios").appendChild(button);
    });

    $("#btnCalcular").onclick = calculate;
    $("#leadName").addEventListener("input", buildWhatsAppUrl);
    $("#leadTel").addEventListener("input", buildWhatsAppUrl);
  }

  function formatPhone(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  }

  function selectService(service, button) {
    state.service = service;
    state.answers = {};
    state.zone = null;
    state.range = null;
    document.querySelectorAll("#servicios .opt").forEach(option => option.classList.remove("sel"));
    button.classList.add("sel");
    renderQuestions(service);
    $("#cardResultado").classList.add("hidden");
  }

  function renderQuestions(service) {
    const container = $("#preguntas");
    container.innerHTML = "";

    service.questions.forEach(question => {
      const wrapper = document.createElement("div");
      wrapper.className = "q";
      const label = document.createElement("div");
      label.className = "q-label";
      label.textContent = question.label;
      const options = document.createElement("div");
      options.className = "opts";

      question.options.forEach(option => {
        const choice = document.createElement("div");
        choice.className = "opt";
        choice.textContent = option.label;
        choice.onclick = () => {
          state.answers[question.id] = {
            label: option.label,
            factor: option.factor || 1,
            add: option.add || 0
          };
          options.querySelectorAll(".opt").forEach(item => item.classList.remove("sel"));
          choice.classList.add("sel");
          checkComplete(service);
        };
        options.appendChild(choice);
      });

      wrapper.appendChild(label);
      wrapper.appendChild(options);
      container.appendChild(wrapper);
    });

    const zoneWrapper = document.createElement("div");
    zoneWrapper.className = "q";
    const zoneLabel = document.createElement("div");
    zoneLabel.className = "q-label";
    zoneLabel.textContent = "¿En qué zona estás?";
    const zoneOptions = document.createElement("div");
    zoneOptions.className = "opts";

    business.zones.forEach(zone => {
      const choice = document.createElement("div");
      choice.className = "opt";
      choice.textContent = zone.label;
      choice.onclick = () => {
        state.zone = zone;
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
    $("#btnCalcular").disabled = true;
  }

  function checkComplete(service) {
    const allQuestionsAnswered = service.questions.every(question => state.answers[question.id]);
    $("#btnCalcular").disabled = !(allQuestionsAnswered && state.zone);
  }

  function calculate() {
    const service = state.service;
    let [min, max] = service.base;
    let multiplier = 1;
    let addition = 0;

    service.questions.forEach(question => {
      const answer = state.answers[question.id];
      if (answer) {
        multiplier *= answer.factor;
        addition += answer.add;
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
    card.scrollIntoView({ behavior: "smooth", block: "start" });
    buildWhatsAppUrl();
  }

  function formatPrice(value) {
    return value.toLocaleString("es-MX");
  }

  // This object is the handoff boundary where lead capture can be added later.
  function getHandoffDetails() {
    return {
      businessPath: businessPath(business),
      businessName: business.name,
      service: state.service.name,
      answers: state.service.questions.map(question => ({
        question: question.label,
        answer: state.answers[question.id].label
      })),
      zone: state.zone.label,
      range: state.range,
      currency: business.currency,
      customerName: $("#leadName").value.trim(),
      customerPhone: $("#leadTel").value.trim()
    };
  }

  function buildWhatsAppUrl() {
    if (!state.range) return;
    const details = getHandoffDetails();
    const lines = [
      "Hola, quiero cotizar.",
      "Servicio: " + details.service,
      "Ciudad: " + business.city
    ];

    details.answers.forEach(item => lines.push(item.question + " " + item.answer));
    lines.push("Zona: " + details.zone);
    lines.push(
      "Rango estimado mostrado: $" + formatPrice(details.range[0]) +
      " – $" + formatPrice(details.range[1]) + " " + details.currency
    );
    if (details.customerName) lines.push("Mi nombre es: " + details.customerName);
    if (details.customerPhone) lines.push("Mi teléfono: " + details.customerPhone);

    $("#btnWa").href =
      "https://wa.me/" + business.whatsapp + "?text=" + encodeURIComponent(lines.join("\n"));
  }
})();
