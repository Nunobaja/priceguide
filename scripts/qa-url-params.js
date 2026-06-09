#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const BUSINESS_DATA_PATH = path.join(ROOT, "businesses.js");
const APP_PATH = path.join(ROOT, "app.js");
const BASE_URL = "https://qa.invalid";
const SUPPORTED_SOURCE_VALUES = [
  "google-business-profile",
  "whatsapp-business",
  "qr-physical",
  "direct-link"
];
const FORBIDDEN_DISCOVERY_PARAMS = new Set([
  "directory",
  "filter",
  "marketplace",
  "rank",
  "ranking",
  "rating",
  "review",
  "search"
]);

function loadBusinesses() {
  const source = fs.readFileSync(BUSINESS_DATA_PATH, "utf8");
  const sandbox = { window: {} };
  vm.runInNewContext(source, sandbox, { filename: BUSINESS_DATA_PATH });
  if (!Array.isArray(sandbox.window.BUSINESSES)) {
    throw new Error("businesses.js did not define window.BUSINESSES as an array");
  }
  return sandbox.window.BUSINESSES;
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

// These pure parsers intentionally mirror the private helpers in app.js.
function parseLanguage(params, business) {
  const requested = params.get("lang") === "en" ? "en" : "es";
  return requested === "en" && hasEnglishCopy(business) ? "en" : "es";
}

function parseService(params, business) {
  const serviceParam = params.get("service");
  const trimmedService = typeof serviceParam === "string" ? serviceParam.trim() : "";
  if (!trimmedService || !/^[\p{L}\p{N}\s-]+$/u.test(trimmedService)) return null;

  const requestedService = slugify(trimmedService);
  return business.services.find(service => slugify(service.id) === requestedService) ||
    business.services.find(service =>
      slugify(service.name) === requestedService || slugify(service.nameEn) === requestedService
    ) || null;
}

function parseSource(params) {
  const source = params.get("source");
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

function parseCampaign(params) {
  const campaign = params.get("campaign");
  if (typeof campaign !== "string") return "";

  const trimmedCampaign = campaign.trim().toLowerCase();
  if (
    !trimmedCampaign ||
    trimmedCampaign.length > 60 ||
    !/^[a-z0-9_-]+$/.test(trimmedCampaign)
  ) {
    return "";
  }

  return trimmedCampaign;
}

function parseZone(params, business, zoneSupported) {
  if (!zoneSupported) return null;
  const requestedZone = slugify(params.get("zone"));
  if (!requestedZone) return null;

  return business.zones.find(zone =>
    slugify(zone.label) === requestedZone || slugify(zone.labelEn) === requestedZone
  ) || null;
}

function hasEnglishCopy(business) {
  return Boolean(business.english && Object.values(business.english).some(value =>
    typeof value === "string" && value.trim()
  ));
}

function businessRoute(business) {
  return `/priceguide/${business.citySlug}/${business.categorySlug}/${business.businessSlug}/`;
}

function routeShellPath(business) {
  return path.join(
    ROOT,
    "priceguide",
    business.citySlug,
    business.categorySlug,
    business.businessSlug,
    "index.html"
  );
}

function isConfirmedWhatsAppBusiness(business) {
  const value = typeof business.whatsapp === "string" || typeof business.whatsapp === "number"
    ? String(business.whatsapp).trim()
    : "";
  return Boolean(value) && business.whatsappConfirmed !== false;
}

function selectFixtures(businesses, warnings) {
  const fixturePath = "/priceguide/guadalajara/fumigacion/fixture-interno-control-preventivo/";
  const noContactFixturePath = "/priceguide/guadalajara/electricista/fixture-interno-sin-contacto/";
  const bilingualFixturePath = "/priceguide/guadalajara/jardineria/fixture-interno-jardineria-bilingue/";
  const selectors = [
    {
      role: "PR #65 internal QA fixture",
      find: business => businessRoute(business) === fixturePath
    },
    {
      role: "Task #73 internal no-contact fixture",
      find: business => businessRoute(business) === noContactFixturePath &&
        !business.phone && !business.whatsapp && business.whatsappConfirmed === false
    },
    {
      role: "Task #76 internal bilingual cross-category fixture",
      find: business => businessRoute(business) === bilingualFixturePath &&
        hasEnglishCopy(business) && isConfirmedWhatsAppBusiness(business)
    },
    {
      role: "confirmed WhatsApp business",
      find: isConfirmedWhatsAppBusiness
    },
    {
      role: "multi-service business",
      find: business => Array.isArray(business.services) && business.services.length > 1
    },
    {
      role: "business with English behavior",
      find: hasEnglishCopy
    },
    {
      role: "business with long zones",
      find: business => Array.isArray(business.zones) && business.zones.length >= 8
    }
  ];

  const selected = [];
  for (const selector of selectors) {
    const fixture = businesses.find(selector.find);
    if (!fixture) {
      warnings.push(`Fixture not available: ${selector.role}`);
      continue;
    }
    if (!selected.includes(fixture)) selected.push(fixture);
  }
  return selected;
}

function buildCases(validServiceSlug, validZoneSlug, zoneSupported) {
  const cases = [
    { name: "no params", query: "", expect: {} },
    ...SUPPORTED_SOURCE_VALUES.map(source => ({
      name: `supported source: ${source}`,
      query: `?source=${source}`,
      expect: { source: source.replace(/-/g, " ") }
    })),
    {
      name: "unknown safe source",
      query: "?source=unknown-source",
      expect: { source: "unknown source" }
    },
    {
      name: "valid service",
      query: `?service=${validServiceSlug}`,
      expect: { service: validServiceSlug }
    },
    {
      name: "invalid service",
      query: "?service=unknown-service",
      expect: { service: null }
    },
    {
      name: "valid hyphen campaign",
      query: "?campaign=promo-verano",
      expect: { campaign: "promo-verano" }
    },
    {
      name: "valid underscore campaign",
      query: "?campaign=volante_junio",
      expect: { campaign: "volante_junio" }
    },
    { name: "empty campaign", query: "?campaign=", expect: { campaign: "" } },
    {
      name: "overlong campaign",
      query: `?campaign=${"a".repeat(61)}`,
      expect: { campaign: "" }
    },
    {
      name: "script-like campaign",
      query: "?campaign=<script>alert(1)</script>",
      expect: { campaign: "" }
    },
    { name: "Spanish language", query: "?lang=es", expect: { requestedLanguage: "es" } },
    { name: "English language", query: "?lang=en", expect: { requestedLanguage: "en" } },
    { name: "unsupported language", query: "?lang=fr", expect: { requestedLanguage: "es" } },
    {
      name: zoneSupported ? "valid zone" : "zone safely ignored (unsupported)",
      query: `?zone=${validZoneSlug}`,
      expect: { zone: zoneSupported ? validZoneSlug : null }
    },
    {
      name: "unknown zone",
      query: "?zone=unknown-zone",
      expect: { zone: null }
    },
    {
      name: "source then service",
      query: `?source=google-business-profile&service=${validServiceSlug}`,
      expect: { source: "google business profile", service: validServiceSlug }
    },
    {
      name: "service then source",
      query: `?service=${validServiceSlug}&source=whatsapp-business`,
      expect: { source: "whatsapp business", service: validServiceSlug }
    },
    {
      name: "source, service, and campaign",
      query: `?source=qr-physical&service=${validServiceSlug}&campaign=volante-junio`,
      expect: { source: "qr physical", service: validServiceSlug, campaign: "volante-junio" }
    },
    {
      name: "English, source, and service",
      query: `?lang=en&source=direct-link&service=${validServiceSlug}`,
      expect: { requestedLanguage: "en", source: "direct link", service: validServiceSlug }
    },
    {
      name: "Spanish, source, service, and campaign",
      query: `?lang=es&source=whatsapp-business&service=${validServiceSlug}&campaign=promo-junio`,
      expect: {
        requestedLanguage: "es",
        source: "whatsapp business",
        service: validServiceSlug,
        campaign: "promo-junio"
      }
    },
    {
      name: "no-contact combined QA context",
      query: `?source=qr-physical&service=${validServiceSlug}&campaign=qa-no-contact&lang=en&zone=${validZoneSlug}`,
      expect: {
        requestedLanguage: "en",
        source: "qr physical",
        service: validServiceSlug,
        campaign: "qa-no-contact",
        zone: zoneSupported ? validZoneSlug : null
      }
    },
    {
      name: "bilingual combined QA context",
      query: `?lang=en&service=${validServiceSlug}&source=google-business-profile&campaign=qa-bilingual&zone=${validZoneSlug}`,
      expect: {
        requestedLanguage: "en",
        source: "google business profile",
        service: validServiceSlug,
        campaign: "qa-bilingual",
        zone: zoneSupported ? validZoneSlug : null
      }
    },
    {
      name: "hostile mixed values",
      query: "?source=<img%20src=x%20onerror=alert(1)>&service=<script>&campaign=ok<script>&lang=<svg>&zone=javascript:alert(1)",
      expect: { source: "", service: null, campaign: "", requestedLanguage: "es", zone: null }
    }
  ];

  return cases;
}

function assertCase(condition, reason, failures) {
  if (!condition) failures.push(reason);
}

function runCase(testCase, business, zoneSupported) {
  const route = businessRoute(business);
  const url = new URL(route + testCase.query, BASE_URL);
  const params = new URLSearchParams(url.search);
  const service = parseService(params, business);
  const source = parseSource(params);
  const campaign = parseCampaign(params);
  const zone = parseZone(params, business, zoneSupported);
  const requestedLanguage = params.get("lang") === "en" ? "en" : "es";
  const effectiveLanguage = parseLanguage(params, business);
  const failures = [];

  assertCase(url.pathname === route, `route changed to ${url.pathname}`, failures);
  assertCase(fs.existsSync(routeShellPath(business)), "prefixed static route shell is missing", failures);
  assertCase(
    url.pathname.split("/").filter(Boolean).length === 4,
    "route is not an individual /priceguide/{city}/{category}/{business}/ page",
    failures
  );
  assertCase(
    [...params.keys()].every(key => !FORBIDDEN_DISCOVERY_PARAMS.has(key.toLowerCase())),
    "URL implies forbidden directory/search/ranking behavior",
    failures
  );

  if (Object.hasOwn(testCase.expect, "source")) {
    assertCase(source === testCase.expect.source, `source parsed as ${JSON.stringify(source)}`, failures);
  }
  if (Object.hasOwn(testCase.expect, "service")) {
    const actualService = service ? slugify(service.id) : null;
    assertCase(actualService === testCase.expect.service, `service parsed as ${JSON.stringify(actualService)}`, failures);
  }
  if (Object.hasOwn(testCase.expect, "campaign")) {
    assertCase(campaign === testCase.expect.campaign, `campaign parsed as ${JSON.stringify(campaign)}`, failures);
  }
  if (Object.hasOwn(testCase.expect, "requestedLanguage")) {
    assertCase(
      requestedLanguage === testCase.expect.requestedLanguage,
      `language request resolved as ${requestedLanguage}`,
      failures
    );
    assertCase(
      effectiveLanguage === (requestedLanguage === "en" && hasEnglishCopy(business) ? "en" : "es"),
      `effective language resolved as ${effectiveLanguage}`,
      failures
    );
  }
  if (Object.hasOwn(testCase.expect, "zone")) {
    const actualZone = zone ? slugify(zone.label) : null;
    assertCase(actualZone === testCase.expect.zone, `zone parsed as ${JSON.stringify(actualZone)}`, failures);
  }

  const hasScriptLikeInput = [...params.values()].some(value => /<|>|javascript:|onerror|script/i.test(value));
  if (hasScriptLikeInput) {
    assertCase(!/[<>]/.test(source), "script-like source was accepted as a safe label", failures);
    assertCase(!/[<>]/.test(campaign), "script-like campaign was accepted as a safe label", failures);
    assertCase(service === null, "script-like service matched a configured service", failures);
    assertCase(zone === null, "script-like zone matched a configured zone", failures);
  }

  for (const [key, expected] of Object.entries(testCase.expect)) {
    if (!params.has(key) && ["source", "campaign", "service", "zone"].includes(key)) continue;
    if (key === "requestedLanguage") continue;
    if (expected && testCase.query.includes("&")) {
      assertCase(params.has(key), `combined parameter ${key} was overwritten`, failures);
    }
  }

  return failures;
}

function main() {
  const warnings = [];
  const failures = [];
  let businesses;

  try {
    businesses = loadBusinesses();
  } catch (error) {
    console.error(`FAIL setup: ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const appSource = fs.readFileSync(APP_PATH, "utf8");
  const zoneSupported = /function\s+getZoneFromUrl\s*\(/.test(appSource);
  const selectedBusinesses = selectFixtures(businesses, warnings);
  if (!zoneSupported) {
    warnings.push("Zone param not currently supported — expected behavior is safe ignore.");
  }
  if (selectedBusinesses.length === 0) {
    failures.push("No business fixtures were available for URL parameter QA");
  }

  let checkedCases = 0;
  let passedCases = 0;

  console.log("Internal URL parameter QA harness");
  console.log(`Zone behavior: ${zoneSupported ? "supported; valid configured zones are matched" : "unsupported; values must be ignored safely"}`);
  console.log("");

  for (const business of selectedBusinesses) {
    const validService = business.services && business.services[0];
    const validZone = business.zones && business.zones[0];
    if (!validService) {
      warnings.push(`${business.name}: no service fixture available; URL cases skipped`);
      continue;
    }
    if (zoneSupported && !validZone) {
      warnings.push(`${business.name}: no zone fixture available; zone cases use an empty slug`);
    }

    const validServiceSlug = slugify(validService.id);
    const validZoneSlug = validZone ? slugify(validZone.label) : "missing-zone-fixture";
    const testCases = buildCases(validServiceSlug, validZoneSlug, zoneSupported);
    console.log(`Fixture: ${business.name} (${businessRoute(business)})`);

    for (const testCase of testCases) {
      checkedCases += 1;
      const caseFailures = runCase(testCase, business, zoneSupported);
      if (caseFailures.length === 0) {
        passedCases += 1;
        console.log(`  PASS ${testCase.name}`);
      } else {
        console.log(`  FAIL ${testCase.name}`);
        for (const reason of caseFailures) {
          failures.push(`${business.name} / ${testCase.name}: ${reason}`);
        }
      }
    }
    console.log("");
  }

  console.log("Summary");
  console.log(`  Businesses checked: ${selectedBusinesses.length}`);
  console.log(`  URL cases checked: ${checkedCases}`);
  console.log(`  Passed: ${passedCases}`);
  console.log(`  Failed: ${checkedCases - passedCases + (checkedCases === 0 ? failures.length : 0)}`);
  console.log(`  Skipped/warnings: ${warnings.length}`);

  if (warnings.length) {
    console.log("Warnings/skips:");
    for (const warning of warnings) console.log(`  WARN ${warning}`);
  }

  if (failures.length) {
    console.log("Failures:");
    for (const failure of failures) console.log(`  FAIL ${failure}`);
  }

  console.log("");
  console.log("Internal QA only: no analytics, tracking, storage, lead capture, or public directory behavior.");
  if (failures.length) process.exitCode = 1;
}

main();
