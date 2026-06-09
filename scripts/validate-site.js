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
  "citySlug",
  "categorySlug",
  "businessSlug",
  "zones",
  "services"
];

const REQUIRED_SERVICE_FIELDS = ["id", "name", "questions"];
const REQUIRED_QUESTION_FIELDS = ["id", "label", "options"];
const REQUIRED_OPTION_FIELDS = ["label", "factor"];
const SLUG_FIELDS = ["citySlug", "categorySlug", "businessSlug"];
const OPTIONAL_COPY_LIMITS = {
  helperText: 240,
  helperTextEn: 240,
  salesCopy: 240,
  salesCopyEn: 240,
  categoryDisclaimer: 240,
  categoryDisclaimerEn: 240,
  whatsappPendingNote: 240,
  whatsappPendingNoteEn: 240
};
const METADATA_LIMITS = {
  metaTitle: 70,
  metaDescription: 160,
  shareTitle: 90,
  shareDescription: 200
};
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ALLOWED_TONES = new Set(["professional", "friendly", "technical"]);
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

    if (!business || typeof business !== "object" || Array.isArray(business)) {
      errors.push(`${businessLabel} must be a business object; replace the current value with a valid business configuration.`);
      return;
    }

    REQUIRED_BUSINESS_FIELDS.forEach(field => {
      if (isMissing(business[field])) {
        errors.push(`${businessLabel} field "${field}" is required; add a non-empty value.`);
      }
    });

    SLUG_FIELDS.forEach(field => validateSlug(business[field], field, businessLabel, errors));
    validatePhone(business, businessLabel, errors);
    validateWhatsApp(business, businessLabel, errors);
    validateTone(business, businessLabel, errors);
    validateUniqueRoute(business, businessLabel, businessIndex, seenRoutes, errors);
    validateOptionalStrings(business, businessLabel, OPTIONAL_COPY_LIMITS, errors);
    validateOptionalStrings(business, businessLabel, METADATA_LIMITS, errors);
    validateBilingualFallbacks(business, businessLabel, errors);
    validateZones(business, businessLabel, errors);

    if (!Array.isArray(business.services)) {
      errors.push(`${businessLabel} field "services" must be an array; add at least one valid service.`);
      return;
    }

    if (business.services.length === 0) {
      errors.push(`${businessLabel} field "services" must contain at least one service.`);
    }

    const seenServiceIds = new Map();
    business.services.forEach((service, serviceIndex) => {
      const serviceLabel = getServiceLabel(businessLabel, service, serviceIndex);
      validateService(service, serviceLabel, serviceIndex, seenServiceIds, errors);
    });
  });
}

function validateService(service, serviceLabel, serviceIndex, seenServiceIds, errors) {
  if (!service || typeof service !== "object" || Array.isArray(service)) {
    errors.push(`${serviceLabel} must be a service object; replace the current value with a valid service configuration.`);
    return;
  }

  REQUIRED_SERVICE_FIELDS.forEach(field => {
    if (isMissing(service[field])) {
      errors.push(`${serviceLabel} field "${field}" is required; add a non-empty value.`);
    }
  });

  validateSlug(service.id, "service.id", serviceLabel, errors);
  validateUniqueId(service.id, "service.id", serviceLabel, serviceIndex, seenServiceIds, errors);
  validateOptionalStrings(service, serviceLabel, OPTIONAL_COPY_LIMITS, errors);
  validateBaseRange(service, serviceLabel, errors);

  if (!Array.isArray(service.questions)) {
    errors.push(`${serviceLabel} field "questions" must be an array; add the service's question configurations.`);
    return;
  }

  const seenQuestionIds = new Map();
  service.questions.forEach((question, questionIndex) => {
    const questionLabel = getQuestionLabel(serviceLabel, question, questionIndex);
    validateQuestion(question, questionLabel, questionIndex, seenQuestionIds, errors);
  });
}

function validateBaseRange(service, serviceLabel, errors) {
  let min;
  let max;

  if (service.base && typeof service.base === "object" && !Array.isArray(service.base)) {
    min = service.base.min;
    max = service.base.max;
  } else if (Array.isArray(service.base) && service.base.length === 2) {
    // The static app stores the same min/max pair as [min, max].
    [min, max] = service.base;
  } else {
    errors.push(`${serviceLabel} field "base" must define base.min and base.max (or the existing [min, max] format); add a complete price range.`);
    return;
  }

  if (!isFiniteNumber(min)) {
    errors.push(`${serviceLabel} field "base.min" must be a finite number; replace ${JSON.stringify(min)} with a numeric minimum greater than 0.`);
  } else if (min <= 0) {
    errors.push(`${serviceLabel} field "base.min" must be greater than 0; increase the current value ${min}.`);
  }

  if (!isFiniteNumber(max)) {
    errors.push(`${serviceLabel} field "base.max" must be a finite number; replace ${JSON.stringify(max)} with a numeric maximum.`);
  }

  if (isFiniteNumber(min) && isFiniteNumber(max) && max < min) {
    errors.push(`${serviceLabel} field "base.max" must be greater than or equal to base.min; increase ${max} to at least ${min}.`);
  }
}

function validateQuestion(question, questionLabel, questionIndex, seenQuestionIds, errors) {
  if (!question || typeof question !== "object" || Array.isArray(question)) {
    errors.push(`${questionLabel} must be a question object; replace the current value with a valid question configuration.`);
    return;
  }

  REQUIRED_QUESTION_FIELDS.forEach(field => {
    if (isMissing(question[field])) {
      errors.push(`${questionLabel} field "${field}" is required; add a non-empty value.`);
    }
  });

  validateSlug(question.id, "question.id", questionLabel, errors);
  validateUniqueId(question.id, "question.id", questionLabel, questionIndex, seenQuestionIds, errors);
  validateOptionalStrings(question, questionLabel, OPTIONAL_COPY_LIMITS, errors);

  if (!Array.isArray(question.options)) {
    errors.push(`${questionLabel} field "options" must be an array; add the question's answer options.`);
    return;
  }

  question.options.forEach((option, optionIndex) => {
    const optionLabel = `${questionLabel} option[${optionIndex}]`;
    validateOption(option, optionLabel, errors);
  });
}

function validateOption(option, optionLabel, errors) {
  if (!option || typeof option !== "object" || Array.isArray(option)) {
    errors.push(`${optionLabel} must be an option object; replace the current value with a valid option configuration.`);
    return;
  }

  REQUIRED_OPTION_FIELDS.forEach(field => {
    if (isMissing(option[field])) {
      errors.push(`${optionLabel} field "${field}" is required; add a non-empty value.`);
    }
  });

  validateOptionalStrings(option, optionLabel, OPTIONAL_COPY_LIMITS, errors);

  if (!isFiniteNumber(option.factor)) {
    errors.push(`${optionLabel} field "factor" must be a finite number; replace ${JSON.stringify(option.factor)} with a numeric factor greater than 0.`);
    return;
  }

  if (option.factor <= 0) {
    errors.push(`${optionLabel} field "factor" must be greater than 0; increase the current value ${option.factor}.`);
    return;
  }

  if ((option.factor < 0.3 || option.factor > 3) && !hasFactorExplanation(option)) {
    errors.push(`${optionLabel} field "factor" is ${option.factor}, outside the expected 0.3–3 range; adjust it or add a non-empty "note" or "comment" field explaining the exception.`);
  }
}

function validateSlug(value, field, contextLabel, errors) {
  if (isMissing(value)) return;

  if (typeof value !== "string" || !SLUG_PATTERN.test(value)) {
    errors.push(`${contextLabel} field "${field}" must use lowercase letters, numbers, and single hyphens only, with no spaces, underscores, accents, or leading/trailing hyphens; replace ${JSON.stringify(value)} with a valid slug.`);
  }
}

function validateUniqueId(value, field, contextLabel, index, seenIds, errors) {
  if (isMissing(value)) return;
  const key = String(value);

  if (seenIds.has(key)) {
    errors.push(`${contextLabel} field "${field}" duplicates ${JSON.stringify(key)} from item[${seenIds.get(key)}]; choose a unique id within this ${field === "service.id" ? "business" : "service"}.`);
    return;
  }

  seenIds.set(key, index);
}

function validateZones(business, businessLabel, errors) {
  if (!Array.isArray(business.zones)) {
    errors.push(`${businessLabel} field "zones" must be a non-empty array of zone names.`);
    return;
  }

  if (business.zones.length === 0) {
    errors.push(`${businessLabel} field "zones" must contain at least one zone name.`);
    return;
  }

  const seenZones = new Map();
  business.zones.forEach((zone, zoneIndex) => {
    const field = typeof zone === "string" ? `zones[${zoneIndex}]` : `zones[${zoneIndex}].label`;
    const zoneName = typeof zone === "string" ? zone : zone && !Array.isArray(zone) ? zone.label : undefined;

    if (typeof zoneName !== "string" || zoneName.trim() === "") {
      errors.push(`${businessLabel} field "${field}" must be a non-empty string; add a readable zone name.`);
      return;
    }

    if (zoneName.length > 80) {
      errors.push(`${businessLabel} field "${field}" is ${zoneName.length} characters; shorten the zone name to 80 characters or fewer.`);
    }

    const normalizedZone = normalizeZoneName(zoneName);
    if (seenZones.has(normalizedZone)) {
      errors.push(`${businessLabel} field "${field}" duplicates the normalized zone name from zones[${seenZones.get(normalizedZone)}]; remove or rename ${JSON.stringify(zoneName)}.`);
      return;
    }

    seenZones.set(normalizedZone, zoneIndex);
  });
}

function validateOptionalStrings(target, contextLabel, limits, errors) {
  Object.entries(limits).forEach(([field, maxLength]) => {
    if (!Object.prototype.hasOwnProperty.call(target, field)) return;
    const value = target[field];

    if (typeof value !== "string") {
      errors.push(`${contextLabel} field "${field}" is optional but must be a string when present; replace ${JSON.stringify(value)} with text or remove the field.`);
      return;
    }

    if (value.length > maxLength) {
      errors.push(`${contextLabel} field "${field}" is ${value.length} characters; shorten it to ${maxLength} characters or fewer.`);
    }
  });
}

function hasFactorExplanation(option) {
  return [option.note, option.comment].some(value => typeof value === "string" && value.trim() !== "");
}

function normalizeZoneName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function validateTone(business, businessLabel, errors) {
  if (!Object.prototype.hasOwnProperty.call(business, "tone")) return;

  if (typeof business.tone !== "string" || !ALLOWED_TONES.has(business.tone)) {
    errors.push(`${businessLabel} field "tone" is optional but must be one of "professional", "friendly", or "technical"; replace ${JSON.stringify(business.tone)} or remove the field to use the professional default.`);
  }
}

function validatePhone(business, businessLabel, errors) {
  if (typeof business.phone !== "string" && typeof business.phone !== "number") return;
  const normalized = String(business.phone).replace(/[\s().+-]/g, "");
  if (!/^\d+$/.test(normalized)) {
    errors.push(`${businessLabel} phone must contain only digits after normalization. Current value: ${JSON.stringify(business.phone)}.`);
  }
}

function validateWhatsApp(business, businessLabel, errors) {
  if (isMissing(business.whatsapp)) {
    if (business.whatsappConfirmed !== false) {
      errors.push(`${businessLabel} field "whatsapp" is required unless whatsappConfirmed is exactly false; add a Mexico-format number or set whatsappConfirmed: false while confirmation is pending.`);
    }
    return;
  }

  const whatsapp = String(business.whatsapp);
  if (!/^52\d{10}$/.test(whatsapp)) {
    errors.push(`${businessLabel} field "whatsapp" must use Mexico format (52 plus 10 digits, digits only, 12 digits total); replace ${JSON.stringify(business.whatsapp)} with a valid number.`);
  }
}

function validateUniqueRoute(business, businessLabel, businessIndex, seenRoutes, errors) {
  const route = getBusinessRoute(business);
  if (!route) return;

  if (seenRoutes.has(route)) {
    const original = seenRoutes.get(route);
    errors.push(`${businessLabel} fields "citySlug/categorySlug/businessSlug" produce duplicate route key ${JSON.stringify(route.slice(1))}, already used by ${original.businessLabel}; change at least one slug so every business route is unique.`);
    return;
  }

  seenRoutes.set(route, { businessIndex, businessLabel });
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
    if (!service || typeof service !== "object") return;

    if (!isMissing(service.nameEn) && isMissing(service.name)) {
      errors.push(`${businessLabel} service[${serviceIndex}] has nameEn but is missing Spanish name.`);
    }

    (service.questions || []).forEach((question, questionIndex) => {
      if (!question || typeof question !== "object") return;

      if (!isMissing(question.labelEn) && isMissing(question.label)) {
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

function getServiceLabel(businessLabel, service, index) {
  const id = service && !isMissing(service.id) ? ` (${service.id})` : "";
  return `${businessLabel} service[${index}]${id}`;
}

function getQuestionLabel(serviceLabel, question, index) {
  const id = question && !isMissing(question.id) ? ` (${question.id})` : "";
  return `${serviceLabel} question[${index}]${id}`;
}

function isMissing(value) {
  return value === undefined || value === null || (typeof value === "string" && value.trim() === "");
}

function isFiniteNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

main();
