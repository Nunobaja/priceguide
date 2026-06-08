#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const BUSINESSES_FILE = path.join(ROOT_DIR, "businesses.js");
const BASE_URL = "https://nunobaja.github.io/priceguide";
const REQUIRED_SLUG_FIELDS = ["citySlug", "categorySlug", "businessSlug"];
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const CAMPAIGN_PATTERN = /^[a-z0-9_-]+$/;
const SOURCES = [
  ["Google Business Profile", "google-business-profile"],
  ["Facebook", "facebook"],
  ["Instagram", "instagram"],
  ["WhatsApp Business", "whatsapp-business"],
  ["QR", "qr"],
  ["Direct", "direct"]
];

function loadBusinesses() {
  const source = fs.readFileSync(BUSINESSES_FILE, "utf8");
  const sandbox = { window: Object.create(null) };
  const context = vm.createContext(sandbox, {
    codeGeneration: { strings: false, wasm: false }
  });

  vm.runInContext(source, context, {
    filename: "businesses.js",
    timeout: 1000,
    displayErrors: true
  });

  if (!Array.isArray(sandbox.window.BUSINESSES)) {
    throw new Error("businesses.js must assign an array to window.BUSINESSES.");
  }

  return sandbox.window.BUSINESSES;
}

function normalizeCampaign(value) {
  const campaign = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (!campaign || campaign.length > 60 || !CAMPAIGN_PATTERN.test(campaign)) return "";
  return campaign;
}

function appendParams(baseUrl, params) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([name, value]) => {
    if (value) searchParams.set(name, value);
  });
  const query = searchParams.toString();
  return query ? `${baseUrl}?${query}` : baseUrl;
}

function parseArgs(args) {
  let requestedSlug = "";
  let campaign = "";

  args.forEach(arg => {
    if (arg.startsWith("--campaign=")) {
      campaign = normalizeCampaign(arg.slice("--campaign=".length));
      return;
    }

    if (!requestedSlug) requestedSlug = arg;
  });

  return { requestedSlug, campaign };
}

function getBusinessBaseUrl(business, index) {
  const slugs = REQUIRED_SLUG_FIELDS.map(field => {
    const value = business && business[field];

    if (typeof value !== "string" || !SLUG_PATTERN.test(value)) {
      const identity = business && (business.name || business.businessSlug);
      const description = identity ? ` (${identity})` : "";
      throw new Error(
        `Business at index ${index}${description} is missing or has an invalid ${field}: ${String(value)}`
      );
    }

    return value;
  });

  return `${BASE_URL}/${slugs.join("/")}/`;
}

function printCampaignExamples(baseUrl, business, campaign) {
  if (!campaign) return;

  console.log("Campaign examples:");
  console.log(`- Source only: ${appendParams(baseUrl, { source: "google-business-profile" })}`);

  const firstService = Array.isArray(business.services) && business.services[0]
    ? String(business.services[0].id || "")
    : "";

  if (firstService) {
    console.log(`- Source + service: ${appendParams(baseUrl, { source: "direct", service: firstService })}`);
  }

  console.log(`- Source + campaign: ${appendParams(baseUrl, { source: "whatsapp-business", campaign })}`);

  if (firstService) {
    console.log(`- Source + service + campaign: ${appendParams(baseUrl, {
      source: "qr",
      service: firstService,
      campaign
    })}`);
  }
}

function printBusiness(business, index, campaign = "") {
  const baseUrl = getBusinessBaseUrl(business, index);
  const name = typeof business.name === "string" && business.name.trim()
    ? business.name.trim()
    : business.businessSlug;

  console.log(name);
  console.log(`Main: ${baseUrl}`);

  SOURCES.forEach(([label, source]) => {
    console.log(`${label}: ${appendParams(baseUrl, { source })}`);
  });

  if (Array.isArray(business.services) && business.services.length > 0) {
    console.log("Services:");
    business.services.forEach(service => {
      const serviceId = service && service.id;
      console.log(`- ${String(serviceId)}: ${appendParams(baseUrl, {
        service: String(serviceId),
        source: "direct"
      })}`);
    });
  }

  printCampaignExamples(baseUrl, business, campaign);
}

function main() {
  const businesses = loadBusinesses();
  const { requestedSlug, campaign } = parseArgs(process.argv.slice(2));
  let selectedBusinesses = businesses;

  if (requestedSlug) {
    const match = businesses.find(business => business && business.businessSlug === requestedSlug);

    if (!match) {
      throw new Error(`No business found with businessSlug "${requestedSlug}".`);
    }

    selectedBusinesses = [match];
  }

  selectedBusinesses.forEach((business, index) => {
    if (index > 0) {
      console.log("");
    }

    const originalIndex = businesses.indexOf(business);
    printBusiness(business, originalIndex, campaign);
  });
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exitCode = 1;
}
