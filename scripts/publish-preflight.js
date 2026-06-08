#!/usr/bin/env node

const path = require("path");
const { spawnSync } = require("child_process");

const ROOT_DIR = path.resolve(__dirname, "..");

const steps = [
  {
    label: "Syntax check app.js",
    args: ["--check", path.join(ROOT_DIR, "app.js")]
  },
  {
    label: "Syntax check businesses.js",
    args: ["--check", path.join(ROOT_DIR, "businesses.js")]
  },
  {
    label: "Syntax check scripts/generate-route-shells.js",
    args: ["--check", path.join(__dirname, "generate-route-shells.js")]
  },
  {
    label: "Syntax check scripts/validate-site.js",
    args: ["--check", path.join(__dirname, "validate-site.js")]
  },
  {
    label: "Generate route shells",
    args: [path.join(__dirname, "generate-route-shells.js")]
  },
  {
    label: "Validate site",
    args: [path.join(__dirname, "validate-site.js")]
  }
];

for (const [index, step] of steps.entries()) {
  console.log(`\n[${index + 1}/${steps.length}] ${step.label}`);

  const result = spawnSync(process.execPath, step.args, {
    cwd: ROOT_DIR,
    stdio: "inherit"
  });

  if (result.error) {
    console.error(`\nPublish preflight failed during: ${step.label}`);
    console.error(result.error.message);
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(`\nPublish preflight failed during: ${step.label}`);
    process.exit(result.status || 1);
  }
}

console.log("\nPublish preflight passed: route shells regenerated and site validation completed successfully.");
