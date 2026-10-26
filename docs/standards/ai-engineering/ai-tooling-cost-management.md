---
last_edited: 2026-10-27
---

# AI Tooling Cost Management {: .standard-references }

## Context Scoping

### Summary

AI session context should be proportionate to the scope of the task.

### Standards

1. AI tool requests **SHOULD** contain only context relevant and reasonably necessary to complete the task. `std-ai-context-scoping-01`
2. Broad, whole-repository context **SHOULD** be reserved for repository-wide analysis or cases where narrower, targeted context has already failed. `std-ai-context-scoping-02`

### Implements These Principles

- [Spend Aligned with Demand and Value](../../principles/cost-sustainability/cost-awareness.md#spend-aligned-with-demand-and-value)

## Session Management

### Summary

AI tool sessions should maintain bounded context relevant to their current task.

### Standards

1. A new AI tool session **SHOULD** be started when switching to an unrelated task if the existing session history is no longer relevant. `std-ai-session-management-01`
2. Developers **SHOULD** periodically reset or summarise long-running sessions to prevent unbounded context accumulation. `std-ai-session-management-02`

### Implements These Principles

- [Spend Aligned with Demand and Value](../../principles/cost-sustainability/cost-awareness.md#spend-aligned-with-demand-and-value)

## Model Selection & Reasoning

### Summary

Model choice and reasoning effort should be proportionate to the task's complexity.

### Standards

1. AI tools **SHOULD** use automatic or cost-aware model selection by default. `std-ai-model-selection-reasoning-01`
2. Maximum reasoning effort or extended-thinking modes **SHOULD** be reserved for complex or ambiguous tasks. `std-ai-model-selection-reasoning-02`

### Implements These Principles

- [Spend Aligned with Demand and Value](../../principles/cost-sustainability/cost-awareness.md#spend-aligned-with-demand-and-value)

## Custom Instructions & Tooling

### Summary

AI tooling configuration should reduce repeated processing of custom instructions and tool definitions.

### Standards

1. Organisation-wide and project-level custom instructions **SHOULD** contain only context that applies across the requests that receive them. `std-ai-custom-instructions-tooling-01`
2. Organisation-wide and project-level custom instructions **SHOULD** remain stable between requests to benefit from provider-side caching and avoid repeated cost. `std-ai-custom-instructions-tooling-02`
3. Tools, extensions, or integrations not required for the current task **SHOULD** be disabled because their definitions may be included in every request regardless of use. `std-ai-custom-instructions-tooling-03`

### Implements These Principles

- [Spend Aligned with Demand and Value](../../principles/cost-sustainability/cost-awareness.md#spend-aligned-with-demand-and-value)

## Cost Monitoring & Pricing

### Summary

AI tooling cost or usage should be monitored and attributed to the responsible team, and usage practices are reassessed after material pricing changes.

### Standards

1. Cost or usage attributable to AI tooling **SHOULD** be monitored. `std-ai-cost-monitoring-pricing-01`
2. Cost or usage attributable to AI tooling **SHOULD** be attributed to the team responsible for incurring it. `std-ai-cost-monitoring-pricing-02`
3. The team responsible for AI tooling adoption **SHOULD** reassess usage practices after a material change to a vendor's billing or pricing model. `std-ai-cost-monitoring-pricing-03`

### Implements These Principles

- [Cost Visibility and Attribution](../../principles/cost-sustainability/cost-awareness.md#cost-visibility-and-attribution)
- [Cost Reassessment](../../principles/cost-sustainability/cost-awareness.md#cost-reassessment)

## Cost Optimisation Review

### Summary

Teams should periodically measure and evaluate cost-optimisation practices in their own context.

### Standards

1. Teams **SHOULD** periodically measure the effect of AI cost-optimisation practices on their AI tool usage and cost. `std-ai-cost-optimisation-review-01`
2. Teams **SHOULD** evaluate each cost-optimisation practice in their own context because its effectiveness may vary by model, workload, and codebase. `std-ai-cost-optimisation-review-02`

### Implements These Principles

- [Cost Reassessment](../../principles/cost-sustainability/cost-awareness.md#cost-reassessment)
