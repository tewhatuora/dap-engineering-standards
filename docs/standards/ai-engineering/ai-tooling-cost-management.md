# AI Tooling Cost Management

## Summary

> Match context size, model choice, and session length to what the task actually needs.

## Standards

### Context Scoping

> An AI tool request is scoped to the minimum context a task actually needs, not a whole repository.

1. AI tool requests **MUST** be scoped to the minimum context necessary to complete the task, such as a specific file or selection, rather than an entire repository.
2. Broad, whole-repository context **SHOULD** be reserved for cases where narrower, targeted context has already failed.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Model Selection & Reasoning Effort

> Model choice and reasoning effort match a task's actual complexity, not a default maximum.

1. AI tools **SHOULD** default to automatic or cost-aware model selection, rather than a fixed, higher-cost model for all tasks.
2. Maximum reasoning effort or extended-thinking modes **SHOULD** be reserved for genuinely complex or ambiguous tasks, not routine work.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Custom Instructions & Tooling Hygiene

> Custom instructions stay concise and stable, and unused tools stay disabled, so a request stays cheap to process.

1. Organisation-wide and project-level custom instructions **MUST** be concise and **SHOULD** remain stable between requests, to benefit from provider-side caching and avoid repeated cost.
2. Tools, extensions, or integrations not required for the current project **SHOULD** be disabled, as their definitions may be included in every request regardless of use.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Session & Context Management

> An AI tool session is started fresh for a new task, and reset before its context grows unbounded.

1. A new AI tool session **SHOULD** be started when switching between unrelated tasks, rather than continuing a session whose history is no longer relevant.
2. Developers **SHOULD** periodically reset or summarise long-running sessions to prevent unbounded context accumulation.

### Cost Monitoring & Billing Awareness

> AI tooling cost stays monitored and attributed, and personnel stay informed of vendor pricing changes.

1. Cost or usage attributable to AI tooling **SHOULD** be monitored and attributed.
2. Personnel responsible for AI tooling adoption **MUST** stay informed of material changes to a vendor's billing or pricing model and reassess usage practices accordingly.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Periodic Cost-Optimisation Review

> A cost-optimisation practice is periodically re-measured in the team's own context, not assumed to still work.

1. Teams **SHOULD** periodically measure their AI tool usage and cost against this standard's practices, rather than assuming a practice remains effective indefinitely.
2. A cost-optimisation practice's effectiveness may vary by model, workload, and codebase, and **SHOULD** be evaluated in the team's own context rather than assumed from general guidance.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
