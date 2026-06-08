#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const BUSINESSES_FILE = path.join(ROOT_DIR, "businesses.js");
const APP_SHELL_FILE = path.join(ROOT_DIR, "index.html");
const PRICEGUIDE_PREFIX = "priceguide";
const CANONICAL_BASE_URL = "https://nunobaja.github.io/priceguide";
const SAFE_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function main() {
  const businesses = loadBusinesses();
  const appShell = fs.readFileSync(APP_SHELL_FILE, "utf8");
  const seenRoutes = new Set();
  let generatedCount = 0;

  businesses.forEach((business, index) => {
    const route = getRoute(business, index);

    if (seenRoutes.has(route)) {
      throw new Error(`Duplicate business route: ${route}`);
    }
    seenRoutes.add(route);

    const html = buildRouteShell(appShell, business, route);
    const routeParts = route.split("/");
    const destinations = [
      path.join(ROOT_DIR, ...routeParts, "index.html"),
      path.join(ROOT_DIR, PRICEGUIDE_PREFIX, ...routeParts, "index.html")
    ];

    destinations.forEach(destination => {
      assertGeneratedDestination(destination);
      fs.mkdirSync(path.dirname(destination), { recursive: true });
      fs.writeFileSync(destination, html, "utf8");
      generatedCount += 1;
    });
  });

  console.log(`Generated ${generatedCount} route shells for ${businesses.length} businesses.`);
}

function loadBusinesses() {
  const source = fs.readFileSync(BUSINESSES_FILE, "utf8");
  const sandbox = {
    window: {},
    console: Object.freeze({
      log() {},
      warn() {},
      error() {}
    })
  };
  sandbox.globalThis = sandbox;

  vm.runInNewContext(source, sandbox, {
    filename: "businesses.js",
    timeout: 1000,
    displayErrors: true
  });

  if (!Array.isArray(sandbox.window.BUSINESSES)) {
    throw new Error("businesses.js must assign an array to window.BUSINESSES.");
  }

  return sandbox.window.BUSINESSES;
}

function getRoute(business, index) {
  const slugs = [business.citySlug, business.categorySlug, business.businessSlug];

  slugs.forEach(slug => {
    if (typeof slug !== "string" || !SAFE_SLUG.test(slug)) {
      throw new Error(`Business at index ${index} has an invalid route slug: ${String(slug)}`);
    }
  });

  return slugs.join("/");
}

function buildRouteShell(appShell, business, route) {
  const fallbackTitle = `${business.name} · Guía de precios · Precios Locales`;
  const fallbackDescription = `Calcula un rango estimado para servicios de ${business.category} en ${business.city} antes de contactar por WhatsApp.`;
  const title = getOptionalText(business.metaTitle) || fallbackTitle;
  const description = getOptionalText(business.metaDescription) || fallbackDescription;
  const shareTitle = getOptionalText(business.shareTitle) || title;
  const shareDescription = getOptionalText(business.shareDescription) || description;
  const canonicalUrl = `${CANONICAL_BASE_URL}/${route}/`;
  const metadata = [
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}">`,
    `<meta property="og:title" content="${escapeAttribute(shareTitle)}">`,
    `<meta property="og:description" content="${escapeAttribute(shareDescription)}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:url" content="${escapeAttribute(canonicalUrl)}">`,
    '<meta name="twitter:card" content="summary">',
    `<meta name="twitter:title" content="${escapeAttribute(shareTitle)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(shareDescription)}">`
  ].join("\n");

  let html = appShell.replace(
    /<meta\b(?=[^>]*\bname\s*=\s*["']description["'])[^>]*>/i,
    `<meta name="description" content="${escapeAttribute(description)}">`
  );
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeText(title)}</title>`);
  html = html.replace(/(<title>[\s\S]*?<\/title>)/i, `$1\n${metadata}`);

  return html;
}

function getOptionalText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeAttribute(value) {
  return escapeText(value)
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function assertGeneratedDestination(destination) {
  const protectedFiles = new Set([
    path.join(ROOT_DIR, "index.html"),
    path.join(ROOT_DIR, PRICEGUIDE_PREFIX, "index.html"),
    path.join(ROOT_DIR, "404.html")
  ]);

  if (protectedFiles.has(destination)) {
    throw new Error(`Refusing to overwrite protected app shell: ${path.relative(ROOT_DIR, destination)}`);
  }
}

main();
