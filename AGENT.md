# Codex Agent Operating Guide

This repository uses a controlled, sequential backlog for AI-assisted development.

## Required workflow

1. Read [`PRODUCT_RULES.md`](PRODUCT_RULES.md) first. Treat it as the product boundary for every task.
2. Read [`TASK_QUEUE.md`](TASK_QUEUE.md) second.
3. Select only the first unchecked task in queue order.
4. Work only within that task's stated goal and allowed files.
5. Do not invent features, requirements, data, prices, claims, routes, or follow-up work.
6. Do not skip ahead in the queue.
7. Do not combine multiple tasks unless the human requester explicitly instructs you to do so.
8. Keep the change focused and create one clean pull request into `main` for that task.
9. Run every check listed for the task, plus any repository checks relevant to the files changed, before creating the pull request.
10. Include a concise pull request summary and a testing section containing the exact checks run and their results.
11. Mark a queue task complete only when its implementation and required checks are complete.

## Stop conditions

Stop without implementing and ask the human requester for clarification when:

- the next unchecked task is ambiguous;
- its goal conflicts with its allowed files or testing expectations;
- required information or approved business data is missing;
- implementation would violate [`PRODUCT_RULES.md`](PRODUCT_RULES.md);
- completing it would require changing app behavior, routes, pricing logic, estimator formulas, or business data outside the task's explicit authorization; or
- completing it would require skipping or combining queued tasks.

Do not resolve ambiguity by expanding scope or making assumptions.

## Change discipline

- Preserve existing app behavior unless the selected task explicitly authorizes a narrowly defined behavior change.
- Prefer the smallest change that satisfies the selected task.
- Do not perform unrelated cleanup, redesign, refactoring, or dependency changes.
- Do not convert internal QA/demo utilities into public product surfaces.
- Keep generated route shells synchronized only when the selected task requires an app or business-data change and the repository publishing workflow calls for regeneration.
- Review the final diff before committing and confirm that every changed file is allowed by the selected task.
