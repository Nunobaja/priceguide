#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "..");

const steps = [
  {
    label: "Checking app.js syntax",
    args: ["--check", path.join(ROOT_DIR, "app.js")]
  },
  {
    label: "Checking businesses.js syntax",
    args: ["--check", path.join(ROOT_DIR, "businesses.js")]
  },
  {
    label: "Checking route shell generator syntax",
    args: ["--check", path.join(__dirname, "generate-route-shells.js")]
  },
  {
    label: "Checking site validator syntax",
    args: ["--check", path.join(__dirname, "validate-site.js")]
  },
  {
    label: "Generating route shells",
    args: [path.join(__dirname, "generate-route-shells.js")]
  },
  {
    label: "Validating site configuration",
    args: [path.join(__dirname, "validate-site.js")]
  }
];

console.log("Precios Locales publish preflight");

for (const [index, step] of steps.entries()) {
  console.log(`\n[${index + 1}/${steps.length}] ${step.label}`);

  const result = spawnSync(process.execPath, step.args, {
    cwd: ROOT_DIR,
    stdio: "inherit"
  });

  if (result.error) {
    console.error(`FAILED: ${step.label}`);
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`FAILED: ${step.label}`);
    process.exit(result.status || 1);
  }

  console.log(`OK: ${step.label}`);
}

console.log("\nPreflight passed.");
console.log("Business guides are ready to commit/publish.");
