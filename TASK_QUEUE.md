# Controlled Task Queue

Tasks #30–#62 were completed before this file was created.

Follow [`AGENT.md`](AGENT.md) before taking work from this queue. Take only the first unchecked task, do not skip ahead, and do not combine tasks unless explicitly instructed.

## Product-validation backlog

- [x] **#64 Align repo language away from directory/lead-capture wording**
  - **Goal:** Audit and narrowly revise repository wording that incorrectly frames the product as a directory or lead-capture system, while preserving accurate historical, prohibition, and internal-QA context.
  - **Allowed files:** `README.md`, `docs/**/*.md`, `docs/templates/**/*`, and text-only copy in existing HTML or JavaScript files when the wording is user-visible and no behavior or data changes.
  - **Testing expectations:** Search for directory and lead-capture terminology; review every changed occurrence in context; run `node --check app.js`, `node --check businesses.js`, and `node scripts/publish-preflight.js` if app-shell copy changes.
  - **Product-rule reminder:** Precios Locales is an individual static price-guide engine, not a directory, marketplace, CRM, analytics product, or lead-capture system.

- [x] **#65 Simplify above-the-fold business guide UX**
  - **Goal:** Reduce first-screen friction on an individual business guide without redesigning the product or changing estimator behavior.
  - **Allowed files:** `index.html`, `404.html`, `priceguide/index.html`, `app.js`, and existing stylesheet files or generated route shells only when required by the established publishing workflow.
  - **Testing expectations:** Run JavaScript syntax checks and `node scripts/publish-preflight.js`; manually inspect at least one individual guide at desktop and representative mobile widths; confirm routes and estimator output are unchanged.
  - **Product-rule reminder:** Keep the experience focused on one business's approximate price guide; do not add discovery, listings, search, rankings, reviews, lead capture, or new claims.

- [x] **#66 Create internal product validation matrix** — Completed by PR #82.
  - **Goal:** Create or update one internal matrix that maps product rules and supported guide states to explicit validation evidence and gaps.
  - **Allowed files:** `docs/product-validation-matrix.md` and `README.md` only if its documentation link needs correction.
  - **Testing expectations:** Check every matrix row against current repository behavior and data; verify links and terminology; confirm the change is documentation only.
  - **Product-rule reminder:** The matrix is internal QA documentation, not a public directory, sales artifact, analytics report, or source of invented validation claims.

- [x] **#67 Audit demo business coverage** — Completed by PR #82.
  - **Goal:** Document which existing demo businesses cover required product states and identify genuine validation gaps without changing business data.
  - **Allowed files:** `docs/demo-business-coverage-audit.md` and `README.md` only if its documentation link needs correction.
  - **Testing expectations:** Compare the audit against `businesses.js`, routes, and existing QA fixtures; distinguish observed coverage from untested gaps; confirm the change is documentation only.
  - **Product-rule reminder:** Do not invent business facts, prices, coverage, contact status, or claims, and do not present demo fixtures as public listings.

- [x] **#68 Add/adjust demo coverage only where product gaps exist** — Not needed; PR #82 confirmed the existing demo coverage is already sufficient.
  - **Goal:** Make the smallest data or fixture adjustment needed to cover gaps proven by task #67, and make no unrelated demo expansion.
  - **Allowed files:** `businesses.js`, generated route shells, and the specific QA documentation or scripts needed to register and verify the approved fixture change.
  - **Testing expectations:** Run `node --check businesses.js`, `node --check app.js`, `node scripts/publish-preflight.js`, and relevant QA scripts; verify every changed value is explicitly supported by the prior audit or marked as an internal fixture.
  - **Product-rule reminder:** Demo coverage exists only for internal validation; do not invent real-business prices or claims, add public listing behavior, or alter pricing formulas.

- [ ] **#69 End-to-end QA checklist for guide user flow**
  - **Goal:** Create or refine an internal checklist for the complete individual-guide flow from entry through approximate estimate and safe contact handoff.
  - **Allowed files:** `docs/e2e-guide-user-flow-checklist.md` and `README.md` only if its documentation link needs correction.
  - **Testing expectations:** Trace the checklist against the current app and representative contact states; verify all steps are reproducible; confirm the change is documentation only.
  - **Product-rule reminder:** Validate one-business guide behavior only; do not add lead capture, analytics, reviews, search, rankings, or directory flows.

- [ ] **#70 Source/service/zone/campaign URL QA script or harness**
  - **Goal:** Add or refine deterministic internal QA for supported URL context parameters without storing, reporting, or tracking visits.
  - **Allowed files:** `scripts/qa-url-params.js`, directly related QA documentation, and minimal test fixtures required by the harness; app files only if an observed defect is separately authorized before implementation.
  - **Testing expectations:** Run the harness, `node --check` on every changed JavaScript file, and `node scripts/publish-preflight.js`; cover valid, missing, and invalid parameter cases without network calls or persistence.
  - **Product-rule reminder:** `source` and `campaign` mark message/link context only and are never analytics; do not add storage, attribution reporting, user profiling, or lead capture.

- [ ] **#71 Mobile result readability polish if validation shows friction**
  - **Goal:** Apply minimal mobile readability changes to estimate results only when recorded validation evidence shows a concrete friction point.
  - **Allowed files:** Existing app markup, renderer, and stylesheet files that control result presentation, plus generated route shells when required; relevant validation documentation may record evidence and outcome.
  - **Testing expectations:** Cite the validation evidence; run syntax checks and `node scripts/publish-preflight.js`; manually inspect result states at 360px, 390px, and 430px widths; verify estimator values and routes are unchanged.
  - **Product-rule reminder:** This is conditional polish, not a redesign; do not change formulas, prices, business data, contact behavior, or add prohibited product capabilities.

- [ ] **#72 Estimate result clarity polish if validation shows friction**
  - **Goal:** Clarify estimate-result wording or hierarchy only when recorded validation evidence identifies ambiguity.
  - **Allowed files:** Existing result copy, markup, renderer, and stylesheet files, plus generated route shells when required; relevant validation documentation may record evidence and outcome.
  - **Testing expectations:** Cite the validation evidence; run syntax checks and `node scripts/publish-preflight.js`; compare representative estimate states before and after; verify numeric results and formulas are unchanged.
  - **Product-rule reminder:** Always use estimación/rango aproximado language, never promise a final price, and never invent prices or claims.

- [ ] **#73 Final demo-ready product validation report**
  - **Goal:** Produce a final internal report summarizing verified readiness, remaining gaps, and evidence from tasks #64–#72 without making unsupported claims.
  - **Allowed files:** `docs/final-product-validation-report.md` and `README.md` only if its documentation link needs correction.
  - **Testing expectations:** Re-run or reference current results for all required repository and QA checks; verify every conclusion links to recorded evidence; confirm the change is documentation only.
  - **Product-rule reminder:** Report only verified product behavior; do not claim market validation, analytics, lead performance, final-price accuracy, or capabilities outside the static individual-guide product.
