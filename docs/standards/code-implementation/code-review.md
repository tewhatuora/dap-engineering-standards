# Code Review

## Objective

Code Review establishes the process by which a change to a version-controlled repository is evaluated by other engineers before it takes effect. It directs review effort toward catching defects, security weaknesses, and unnecessary complexity while a change is still easy to correct, and establishes clear accountability for the decision to merge it.

## Standards

### Mandatory, Independent Review Before Merge

These requirements make independent review and approval a mandatory condition of merging any change.

1. A change must be reviewed and approved by at least one reviewer, other than its author, familiar with the affected code, system, or domain, before it is merged into a shared or protected branch.
2. Approval must not be granted as part of a reciprocal arrangement in which reviewers approve each other's changes without applying meaningful scrutiny.
3. Where a path's ownership is declared in a `CODEOWNERS` file, review from the designated owner must be enforced before a change to that path can merge.
4. This requirement applies regardless of a change's size, urgency, the seniority of its author, or the outcome of any automated check.

#### References

[Branching Strategy](branching-strategy.md)

### Risk-Proportionate Review Rigor

These requirements scale review rigor to the risk a change carries, rather than treating every change identically.

1. A change must be classified as higher-risk if it is security-relevant, makes a breaking schema change, spans multiple services or components, or is hard to roll back.
2. Review scrutiny for a higher-risk change must be broader than for a routine change, covering its impact and reversibility.
3. A higher-risk change must be reviewed by someone with expertise matching the risk factor involved.
4. A repository may apply a stricter review requirement than this baseline, documented in its `README` or a location linked from it.

### Consistent Review Discipline Across Code Types

This requirement applies the same review process to every kind of code a repository holds.

1. The review and approval process must apply equally to application code, infrastructure code, configuration, pipeline definitions, and documentation held in the same repository.

#### References

[Everything as Code](../../principles/everything-as-code.md)

### Assessing Correctness, Complexity & Security

These requirements define what a reviewer must evaluate beyond whether a change merely functions as intended.

1. A reviewer must confirm a change is functionally correct and meets its stated requirement before approving it.
2. A reviewer must assess whether a change introduces unnecessary complexity or departs from adopted coding and style conventions.
3. A security-relevant change, such as one that introduces new attack surface or handles sensitive data, must be reviewed for security weaknesses relevant to the change.
4. Review should take static analysis or AI-assisted review tooling output into account rather than duplicate it; a reviewer's own scrutiny should then focus on what such tooling cannot reliably assess.

#### References

[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)\
[Coding Standards & Formatting](coding-standards-formatting.md)\
[Security by Design](../../principles/security-by-design.md)\
[Static Code Analysis](static-code-analysis.md)\
[AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)

### Assessing Operational Readiness

These requirements extend review scope to how a change behaves after release, beyond its immediate correctness.

1. A reviewer should consider whether a change can be rolled back if it does not behave as expected.
2. A reviewer should consider whether a change meets its observability requirements, such as logging, metrics, or alerting adequate to detect a problem with it after release.
3. A reviewer should consider whether a change could degrade performance or resource consumption at expected scale.
4. A reviewer should confirm a breaking change is intentional and its impact on consumers has been considered.
5. A reviewer should consider whether operational documentation, such as a runbook, needs updating to reflect the change.
6. A reviewer should consider whether a higher-risk change should be released behind a feature flag, enabling it to be disabled quickly or rolled out progressively.

#### References

[Reliability & Resilience](../../principles/reliability-resilience.md)\
[Observability by Default](../../principles/observability-by-default.md)\
[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)\
[Interoperability by Design](../../principles/interoperability-by-design.md)\
[Runbooks](../operations-observability/runbooks.md)\
[Feature Flagging](../delivery-release/feature-flagging.md)\
[Progressive Delivery Strategies (Blue/Green, Canary)](../delivery-release/progressive-delivery-strategies.md)

### Right-Sized, Reviewable Changes

These requirements shape a change so it remains scoped and described well enough for a reviewer to assess its effect.

1. A change should be scoped to the smallest coherent unit of work that can be reviewed and merged independently.
2. A change description should give a reviewer enough context to understand its purpose, effect, and validation without needing to consult the author directly.
3. An unusually large or broad change should be split into smaller, independently reviewable changes where practical.
4. A repository should use the organisation's shared change-description template rather than defining its own.

#### References

[Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)

### Resolving Review Feedback Before Merge

These requirements distinguish feedback that must be resolved from feedback that is advisory, and require re-review after a material change.

1. A reviewer must distinguish feedback that must be resolved before approval (blocking feedback) from feedback that is advisory or optional.
2. Advisory feedback deferred rather than addressed before merge should be recorded in a tracking system so it is not lost.
3. A change must not be merged while unresolved blocking feedback remains outstanding.
4. A change materially revised after approval, such as a behaviour-changing commit or conflict resolution, must be re-reviewed; its prior approval should be marked stale.

### Constructive Review Conduct

These requirements keep review feedback specific and constructive, without letting rigor become friction.

1. Review feedback must be specific enough that the author understands both the concern and the change needed to resolve it.
2. Review should remain rigorous without being adversarial; its purpose is to improve the change and the shared codebase, not to create friction between the author and reviewer.

### Timely Review Turnaround

These requirements prevent a review request from sitting idle long enough to delay the change it blocks.

1. A review request should be actioned within an agreed, reasonable timeframe appropriate to the repository or team.
2. A reviewer unable to review a request within that timeframe should reassign or flag it so another reviewer can act on it.

#### References

[Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Emergency Change Review

These requirements allow a change to merge under an expedited path during a genuine emergency, without this becoming a routine shortcut around normal review.

1. A change may merge under an expedited review path only where normal review would materially increase operational or safety risk, and only through an approved, auditable emergency process.
2. Review must still be performed to the greatest extent practical before an emergency change merges.
3. A change merged under expedited review must receive a postmortem once the incident is resolved, with any corrective follow-up identified and tracked.

#### References

[Reliability & Resilience](../../principles/reliability-resilience.md)

### Approval Recording & Traceability

These requirements ensure an approval decision is explicit, attributable, and traceable to the change it covers.

1. Approval must be recorded through the repository's merge request review mechanism, attributable to the reviewer who granted it.
2. An approval record must remain traceable to the change it covers for as long as the change's history is retained.

#### References

[Branching Strategy](branching-strategy.md)\
[AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)
