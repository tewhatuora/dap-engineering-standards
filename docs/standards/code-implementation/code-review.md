# Code Review

## Summary

> Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

## Standards

### Mandatory, Independent Review

Every change is reviewed and approved by someone other than its author before it merges, regardless of size or urgency.

1. A change **MUST** be reviewed and approved by at least one reviewer, other than its author, familiar with the affected code, system, or domain, before it is merged into a shared or protected branch.
2. Approval **MUST NOT** be granted as part of a reciprocal arrangement in which reviewers approve each other's changes without applying meaningful scrutiny.
3. Where a path's ownership is declared in a `CODEOWNERS` file, review from the designated owner **MUST** be enforced before a change to that path can merge.
4. This requirement applies regardless of a change's size, urgency, the seniority of its author, or the outcome of any automated check.

#### References

- [Branching Strategy](branching-strategy.md)

### Risk-Proportionate Review Rigor

A higher-risk change receives broader scrutiny and a reviewer with expertise matching that risk.

1. A change **MUST** be classified as higher-risk if it is security-relevant, makes a breaking schema change, spans multiple services or components, or is hard to roll back.
2. Review scrutiny for a higher-risk change **MUST** be broader than for a routine change, covering its impact and reversibility.
3. A higher-risk change **MUST** be reviewed by someone with expertise matching the risk factor involved.
4. A repository **MAY** apply a stricter review requirement than this baseline, documented in its `README` or a location linked from it.

### Review Across Code Types

The same review process applies to every kind of code a repository holds, not just its application code.

1. The review and approval process **MUST** apply equally to application code, infrastructure code, configuration, pipeline definitions, and documentation held in the same repository.

#### References

- [Everything as Code](../../principles/everything-as-code.md)

### Assessing Correctness, Complexity & Security

A reviewer checks a change's correctness, complexity, and security, building on what automated tooling already found.

1. A reviewer **MUST** confirm a change is functionally correct and meets its stated requirement before approving it.
2. A reviewer **MUST** assess whether a change introduces unnecessary complexity or departs from adopted coding and style conventions.
3. A security-relevant change, such as one that introduces new attack surface or handles sensitive data, **MUST** be reviewed for security weaknesses relevant to the change.
4. Review **SHOULD** take static analysis or AI-assisted review tooling output into account rather than duplicate it; a reviewer's own scrutiny **SHOULD** then focus on what such tooling cannot reliably assess.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Coding Standards & Formatting](coding-standards-formatting.md)
- [Security by Design](../../principles/security-by-design.md)
- [Static Code Analysis](static-code-analysis.md)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)

### Assessing Operational Readiness

A reviewer also considers a change's rollback, observability, performance, and documentation impact, not just its correctness.

1. A reviewer **SHOULD** consider whether a change can be rolled back if it does not behave as expected.
2. A reviewer **SHOULD** consider whether a change meets its observability requirements, such as logging, metrics, or alerting adequate to detect a problem with it after release.
3. A reviewer **SHOULD** consider whether a change could degrade performance or resource consumption at expected scale.
4. A reviewer **SHOULD** confirm a breaking change is intentional and its impact on consumers has been considered.
5. A reviewer **SHOULD** consider whether operational documentation, such as a runbook, needs updating to reflect the change.
6. A reviewer **SHOULD** consider whether a higher-risk change should be released behind a feature flag, enabling it to be disabled quickly or rolled out progressively.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [Runbooks](../operations-observability/runbooks.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Progressive Delivery Strategies](../delivery-release/progressive-delivery-strategies.md)

### Right-Sized, Reviewable Changes

A change stays scoped to the smallest reviewable unit, described well enough to assess without consulting its author.

1. A change **SHOULD** be scoped to the smallest coherent unit of work that can be reviewed and merged independently.
2. A change description **SHOULD** give a reviewer enough context to understand its purpose, effect, and validation without needing to consult the author directly.
3. An unusually large or broad change **SHOULD** be split into smaller, independently reviewable changes where practical.
4. A repository **SHOULD** use the organisation's shared change-description template rather than defining its own.

#### References

- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)

### Resolving Review Feedback Before Merge

A change does not merge while blocking feedback remains open, and a materially revised change is re-reviewed.

1. A reviewer **MUST** distinguish feedback that must be resolved before approval (blocking feedback) from feedback that is advisory or optional.
2. Advisory feedback deferred rather than addressed before merge **SHOULD** be recorded in a tracking system so it is not lost.
3. A change **MUST NOT** be merged while unresolved blocking feedback remains outstanding.
4. A change materially revised after approval, such as a behaviour-changing commit or conflict resolution, **MUST** be re-reviewed; its prior approval **SHOULD** be marked stale.

### Constructive Review Conduct

Review feedback stays specific enough to act on, and rigorous without becoming adversarial.

1. Review feedback **MUST** be specific enough that the author understands both the concern and the change needed to resolve it.
2. Review **SHOULD** remain rigorous without being adversarial; its purpose is to improve the change and the shared codebase, not to create friction between the author and reviewer.

### Timely Review Turnaround

A review request is actioned within an agreed timeframe, or reassigned to a reviewer who can.

1. A review request **SHOULD** be actioned within an agreed, reasonable timeframe appropriate to the repository or team.
2. A reviewer unable to review a request within that timeframe **SHOULD** reassign or flag it so another reviewer can act on it.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Emergency Change Review

An emergency change can merge through an expedited, auditable review path, and always receives a postmortem afterwards.

1. A change **MAY** merge under an expedited review path only where normal review would materially increase operational or safety risk, and only through an approved, auditable emergency process.
2. Review **MUST** still be performed to the greatest extent practical before an emergency change merges.
3. A change merged under expedited review **MUST** receive a postmortem once the incident is resolved, with any corrective follow-up identified and tracked.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Approval Recording & Traceability

An approval is recorded through the merge request mechanism, attributable to its reviewer and traceable to the change.

1. Approval **MUST** be recorded through the repository's merge request review mechanism, attributable to the reviewer who granted it.
2. An approval record **MUST** remain traceable to the change it covers for as long as the change's history is retained.

#### References

- [Branching Strategy](branching-strategy.md)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)
