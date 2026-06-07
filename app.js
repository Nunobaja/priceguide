const $ = selector => document.querySelector(selector);
const normalizePath = pathname => {
  const segments = pathname.split("/").filter(Boolean);
  return "/" + segments.slice(-3).join("/").toLowerCase();
};
const businessPath = business => `/${business.citySlug}/${business.categorySlug}/${business.businessSlug}`;
const pathnameSegments = window.location.pathname.split("/").filter(Boolean);
const currentPath = normalizePath(window.location.pathname);
const business = BUSINESSES.find(item => businessPath(item) === currentPath);
const isLandingPage = pathnameSegments.length === 0 ||
  (pathnameSegments.length === 1 && pathnameSegments[0].toLowerCase() === "priceguide");
const sitePrefix = pathnameSegments[0]?.toLowerCase() === "priceguide" ? "/priceguide" : "";
const state = { service: null, answers: {}, zone: null, range: null };

if (business) {
  renderBusiness();
} else if (isLandingPage) {
  renderLanding();
} else {
  renderNotFound();
}

function renderLanding() {
  document.title = "Precios Locales — Guías de precios para negocios de servicios";
  const demoLinks = BUSINESSES.map(item => `
    <a class="btn btn-amber" style="display:block;text-decoration:none;margin-top:10px" href="${sitePrefix}${businessPath(item)}">
      Ver demo: ${item.name}
    </a>`).join("");

  $("#app").innerHTML = `
    <header>
      <div class="logo">P</div>
      <div class="biz">
        <h1>Precios Locales</h1>
        <p>Guías de precios alojadas para servicios del hogar</p>
      </div>
    </header>
    <div class="hero">
      <h2>Tu guía de precios, <em>sin necesitar sitio web.</em></h2>
      <p>Creamos una página sencilla para que clientes de tu Perfil de Negocio de Google consulten precios estimados y te contacten por WhatsApp.</p>
    </div>
    <div class="card">
      <div class="step-label">Página de demostración</div>
      <p style="color:var(--ink-soft)">Cada negocio recibe su propia página pública con servicios, preguntas, rangos estimados y contacto directo.</p>
      ${demoLinks}
    </div>
    <p class="legal">Precios Locales aloja guías de precios para negocios de servicios del hogar en México.</p>`;
}

function renderNotFound() {
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
      <p style="color:var(--ink-soft)">Revisa que la dirección esté escrita correctamente.</p>
    </div>`;
}

function renderBusiness() {
  document.title = `Guía de Precios — ${business.name}`;
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
