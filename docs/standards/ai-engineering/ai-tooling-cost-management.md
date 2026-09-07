# AI Tooling Cost Management

Context size, model choice, and session length match the needs of the task.

## Context Scoping

### Summary

An AI tool request is limited to the minimum context required for the task.

### Standards

1. `std-ai-context-scoping-01` AI tool requests **SHOULD** contain only context relevant and reasonably necessary to complete the task.
2. `std-ai-context-scoping-02` Broad, whole-repository context **SHOULD** be reserved for cases where narrower, targeted context has already failed.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Session Management

### Summary

A new AI tool session is used for each unrelated task, and long-running sessions are reset or summarised before their context grows unbounded.

### Standards

1. `std-ai-session-management-01` A new AI tool session **SHOULD** be started when switching to an unrelated task if the existing session history is no longer relevant.
2. `std-ai-session-management-02` Developers **SHOULD** periodically reset or summarise long-running sessions to prevent unbounded context accumulation.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Model Selection & Reasoning

### Summary

Model choice and reasoning effort are proportionate to the task's complexity.

### Standards

1. `std-ai-model-selection-reasoning-01` AI tools **SHOULD** use automatic or cost-aware model selection by default.
2. `std-ai-model-selection-reasoning-02` Maximum reasoning effort or extended-thinking modes **SHOULD** be reserved for genuinely complex or ambiguous tasks.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Custom Instructions & Tooling

### Summary

Custom instructions contain only reusable context, and tools not required by the project remain disabled.

### Standards

1. `std-ai-custom-instructions-tooling-01` Organisation-wide and project-level custom instructions **SHOULD** contain only context that applies across the requests that receive them.
2. `std-ai-custom-instructions-tooling-02` Organisation-wide and project-level custom instructions **SHOULD** remain stable between requests to benefit from provider-side caching and avoid repeated cost.
3. `std-ai-custom-instructions-tooling-03` Tools, extensions, or integrations not required for the current project **SHOULD** be disabled because their definitions may be included in every request regardless of use.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Cost Monitoring & Pricing

### Summary

AI tooling cost and usage are monitored and attributed, and responsible personnel reassess practices after material vendor pricing changes.

### Standards

1. `std-ai-cost-monitoring-pricing-01` Cost or usage attributable to AI tooling **SHOULD** be monitored.
2. `std-ai-cost-monitoring-pricing-02` Cost or usage attributable to AI tooling **SHOULD** be attributed.
3. `std-ai-cost-monitoring-pricing-03` AI tooling cost estimates **SHOULD** use current vendor billing and pricing models.
4. `std-ai-cost-monitoring-pricing-04` Personnel responsible for AI tooling adoption **MUST** reassess usage practices after a material change to a vendor's billing or pricing model.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Cost Optimisation Review

### Summary

Teams periodically re-measure cost-optimisation practices in their own context.

### Standards

1. `std-ai-cost-optimisation-review-01` Teams **SHOULD** periodically measure the effect of AI cost-optimisation practices on their AI tool usage and cost.
2. `std-ai-cost-optimisation-review-02` Teams **SHOULD** evaluate each cost-optimisation practice in their own context because its effectiveness may vary by model, workload, and codebase.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
