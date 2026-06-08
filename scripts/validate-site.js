#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");
const BUSINESSES_FILE = path.join(ROOT_DIR, "businesses.js");
const PRICEGUIDE_PREFIX = "priceguide";

const REQUIRED_BUSINESS_FIELDS = [
  "name",
  "city",
  "category",
  "phone",
  "whatsapp",
  "citySlug",
  "categorySlug",
  "businessSlug",
  "zones",
  "services"
];

const REQUIRED_SERVICE_FIELDS = ["id", "name", "questions"];
const REQUIRED_QUESTION_FIELDS = ["id", "label", "options"];
const REQUIRED_OPTION_FIELDS = ["label", "factor"];
const SPANISH_FALLBACK_FIELDS = [
  "heroHeadline",
  "heroSubheadline",
  "estimateIntro",
  "priceDisclaimer",
  "whatsappCtaLabel",
  "whatsappHelperText",
  "serviceAreaNote",
  "pricingNotes"
];
const REQUIRED_ROUTE_META = [
  { label: "title", pattern: /<title>\s*[^<\s][^<]*<\/title>/i },
  { label: "meta description", pattern: /<meta\b(?=[^>]*\bname\s*=\s*["']description["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i },
  { label: "og:title", pattern: /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:title["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i },
  { label: "og:description", pattern: /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:description["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i },
  { label: "og:url", pattern: /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:url["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i },
  { label: "twitter:title", pattern: /<meta\b(?=[^>]*\bname\s*=\s*["']twitter:title["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i },
  { label: "twitter:description", pattern: /<meta\b(?=[^>]*\bname\s*=\s*["']twitter:description["'])(?=[^>]*\bcontent\s*=\s*["'][^"']+["'])[^>]*>/i }
];

function main() {
  const errors = [];
  const businesses = loadBusinesses(errors);

  if (Array.isArray(businesses)) {
    validateBusinesses(businesses, errors);
    validateRoutes(businesses, errors);
  }

  if (errors.length > 0) {
    console.error("Precios Locales validation failed:");
    errors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Precios Locales validation passed: ${businesses.length} businesses and ${businesses.length * 2} route shells are ready to publish.`);
}

function loadBusinesses(errors) {
  if (!fs.existsSync(BUSINESSES_FILE)) {
    errors.push("businesses.js was not found at the repository root.");
    return [];
  }

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

  try {
    vm.runInNewContext(source, sandbox, {
      filename: "businesses.js",
      timeout: 1000,
      displayErrors: true
    });
  } catch (error) {
    errors.push(`businesses.js could not be loaded safely in Node: ${error.message}`);
    return [];
  }

  if (!Array.isArray(sandbox.window.BUSINESSES)) {
    errors.push("businesses.js must assign an array to window.BUSINESSES.");
    return [];
  }

  return sandbox.window.BUSINESSES;
}

function validateBusinesses(businesses, errors) {
  const seenRoutes = new Map();

  businesses.forEach((business, businessIndex) => {
    const businessLabel = getBusinessLabel(business, businessIndex);

    REQUIRED_BUSINESS_FIELDS.forEach(field => {
      if (isMissing(business[field])) {
        errors.push(`${businessLabel} is missing required business field \"${field}\".`);
      }
    });

    validatePhone(business, businessLabel, errors);
    validateWhatsApp(business, businessLabel, errors);
    validateUniqueRoute(business, businessLabel, businessIndex, seenRoutes, errors);
    validateBilingualFallbacks(business, businessLabel, errors);

    if (!Array.isArray(business.zones)) {
      errors.push(`${businessLabel} must define zones as an array.`);
    }

    if (!Array.isArray(business.services)) {
      errors.push(`${businessLabel} must define services as an array.`);
      return;
    }

    if (business.services.length === 0) {
      errors.push(`${businessLabel} must have at least one service.`);
    }

    business.services.forEach((service, serviceIndex) => {
      const serviceLabel = `${businessLabel} service[${serviceIndex}]${service && service.id ? ` (${service.id})` : ""}`;
      validateService(service, serviceLabel, errors);
    });
  });
}

function validateService(service, serviceLabel, errors) {
  REQUIRED_SERVICE_FIELDS.forEach(field => {
    if (isMissing(service[field])) {
      errors.push(`${serviceLabel} is missing required service field \"${field}\".`);
    }
  });

  validateBaseRange(service, serviceLabel, errors);

  if (!Array.isArray(service.questions)) {
    errors.push(`${serviceLabel} must define questions as an array.`);
    return;
  }

  service.questions.forEach((question, questionIndex) => {
    const questionLabel = `${serviceLabel} question[${questionIndex}]${question && question.id ? ` (${question.id})` : ""}`;
    validateQuestion(question, questionLabel, errors);
  });
}

function validateBaseRange(service, serviceLabel, errors) {
  if (service.base && typeof service.base === "object" && !Array.isArray(service.base)) {
    if (!isFiniteNumber(service.base.min)) {
      errors.push(`${serviceLabel} must define numeric base.min.`);
    }
    if (!isFiniteNumber(service.base.max)) {
      errors.push(`${serviceLabel} must define numeric base.max.`);
    }
    if (isFiniteNumber(service.base.min) && isFiniteNumber(service.base.max) && service.base.min > service.base.max) {
      errors.push(`${serviceLabel} must have base.min less than or equal to base.max.`);
    }
    return;
  }

  // Current static app data stores the same min/max pair as [min, max].
  // Validate it as the required base range without changing app behavior.
  if (Array.isArray(service.base) && service.base.length === 2) {
    const [min, max] = service.base;
    if (!isFiniteNumber(min) || !isFiniteNumber(max)) {
      errors.push(`${serviceLabel} must define numeric base.min and base.max values.`);
    } else if (min > max) {
      errors.push(`${serviceLabel} must have base.min less than or equal to base.max.`);
    }
    return;
  }

  errors.push(`${serviceLabel} must define base.min and base.max.`);
}

function validateQuestion(question, questionLabel, errors) {
  REQUIRED_QUESTION_FIELDS.forEach(field => {
    if (isMissing(question[field])) {
      errors.push(`${questionLabel} is missing required question field \"${field}\".`);
    }
  });

  if (!Array.isArray(question.options)) {
    errors.push(`${questionLabel} must define options as an array.`);
    return;
  }

  question.options.forEach((option, optionIndex) => {
    const optionLabel = `${questionLabel} option[${optionIndex}]`;
    REQUIRED_OPTION_FIELDS.forEach(field => {
      if (isMissing(option[field])) {
        errors.push(`${optionLabel} is missing required option field \"${field}\".`);
      }
    });
  });
}

function validatePhone(business, businessLabel, errors) {
  if (typeof business.phone !== "string" && typeof business.phone !== "number") return;
  const normalized = String(business.phone).replace(/[\s().+-]/g, "");
  if (!/^\d+$/.test(normalized)) {
    errors.push(`${businessLabel} phone must contain only digits after normalization. Current value: ${JSON.stringify(business.phone)}.`);
  }
}

function validateWhatsApp(business, businessLabel, errors) {
  const whatsapp = String(business.whatsapp || "");
  if (!/^52\d{10}$/.test(whatsapp)) {
    errors.push(`${businessLabel} whatsapp must use Mexico format: 52 plus 10 digits, digits only, total length 12. Current value: ${JSON.stringify(business.whatsapp)}.`);
  }
}

function validateUniqueRoute(business, businessLabel, businessIndex, seenRoutes, errors) {
  const route = getBusinessRoute(business);
  if (!route) return;

  if (seenRoutes.has(route)) {
    errors.push(`${businessLabel} duplicates route ${route} already used by business[${seenRoutes.get(route)}].`);
    return;
  }

  seenRoutes.set(route, businessIndex);
}

function validateBilingualFallbacks(business, businessLabel, errors) {
  if (!business.english || typeof business.english !== "object") return;
  const hasEnglishCopy = Object.values(business.english).some(value => typeof value === "string" && value.trim());
  if (!hasEnglishCopy) return;

  SPANISH_FALLBACK_FIELDS.forEach(field => {
    if (Object.prototype.hasOwnProperty.call(business.english, field) && isMissing(business[field])) {
      errors.push(`${businessLabel} has english.${field} but is missing the Spanish fallback field \"${field}\".`);
    }
  });

  (business.zones || []).forEach((zone, index) => {
    if (zone && !isMissing(zone.labelEn) && isMissing(zone.label)) {
      errors.push(`${businessLabel} zone[${index}] has labelEn but is missing Spanish label.`);
    }
  });

  (business.services || []).forEach((service, serviceIndex) => {
    if (service && !isMissing(service.nameEn) && isMissing(service.name)) {
      errors.push(`${businessLabel} service[${serviceIndex}] has nameEn but is missing Spanish name.`);
    }

    (service.questions || []).forEach((question, questionIndex) => {
      if (question && !isMissing(question.labelEn) && isMissing(question.label)) {
        errors.push(`${businessLabel} service[${serviceIndex}] question[${questionIndex}] has labelEn but is missing Spanish label.`);
      }

      (question.options || []).forEach((option, optionIndex) => {
        if (option && !isMissing(option.labelEn) && isMissing(option.label)) {
          errors.push(`${businessLabel} service[${serviceIndex}] question[${questionIndex}] option[${optionIndex}] has labelEn but is missing Spanish label.`);
        }
      });
    });
  });
}

function validateRoutes(businesses, errors) {
  businesses.forEach((business, businessIndex) => {
    const businessLabel = getBusinessLabel(business, businessIndex);
    const route = getBusinessRoute(business);
    if (!route) {
      errors.push(`${businessLabel} cannot validate route shells until citySlug, categorySlug, and businessSlug are present.`);
      return;
    }

    const routeShells = [
      path.join(ROOT_DIR, business.citySlug, business.categorySlug, business.businessSlug, "index.html"),
      path.join(ROOT_DIR, PRICEGUIDE_PREFIX, business.citySlug, business.categorySlug, business.businessSlug, "index.html")
    ];

    routeShells.forEach(routeShell => validateRouteShell(routeShell, businessLabel, errors));
  });
}

function validateRouteShell(routeShell, businessLabel, errors) {
  const relativePath = path.relative(ROOT_DIR, routeShell).split(path.sep).join("/");

  if (!fs.existsSync(routeShell)) {
    errors.push(`${businessLabel} is missing static route shell ${relativePath}.`);
    return;
  }

  const html = fs.readFileSync(routeShell, "utf8");
  REQUIRED_ROUTE_META.forEach(({ label, pattern }) => {
    if (!pattern.test(html)) {
      errors.push(`${relativePath} is missing required ${label}.`);
    }
  });
}

function getBusinessRoute(business) {
  if (isMissing(business.citySlug) || isMissing(business.categorySlug) || isMissing(business.businessSlug)) {
    return "";
  }

  return `/${business.citySlug}/${business.categorySlug}/${business.businessSlug}`;
}

function getBusinessLabel(business, index) {
  if (business && business.name) return `business[${index}] (${business.name})`;
  return `business[${index}]`;
}

function isMissing(value) {
  return value === undefined || value === null || (typeof value === "string" && value.trim() === "");
}

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

main();
