# Code Review

Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

## Reviewable Changes

### Summary

A change remains scoped to the smallest reviewable unit and provides enough context to assess without consulting its author, using the organisation's shared description template.

### Standards

1. `std-code-reviewable-changes-01` A change **SHOULD** be scoped to the smallest coherent unit of work that can be reviewed and merged independently.
2. `std-code-reviewable-changes-02` A change description **SHOULD** give a reviewer enough context to understand its purpose, effect, and validation without needing to consult the author directly.
3. `std-code-reviewable-changes-03` An unusually large or broad change **SHOULD** be split into smaller, independently reviewable changes where practical.
4. `std-code-reviewable-changes-04` A repository **SHOULD** use the organisation's shared change-description template.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Independent Review

### Summary

Every change is reviewed and approved by someone other than its author before it merges, regardless of size or urgency.

### Standards

1. `std-code-independent-review-01` A change **MUST** be reviewed and approved by at least one reviewer, other than its author, familiar with the affected code, system, or domain, before it is merged into a shared or protected branch.
2. `std-code-independent-review-02` Approval **MUST NOT** be granted as part of a reciprocal arrangement in which reviewers approve each other's changes without applying meaningful scrutiny.
3. `std-code-independent-review-03` Where a path's ownership is declared in a `CODEOWNERS` file, review from the designated owner **MUST** be enforced before a change to that path can merge.
4. `std-code-independent-review-04` The independent review requirement **MUST** apply regardless of a change's size, the seniority of its author, or the outcome of any automated check.

### Related Standards

- [Branching Strategy](branching-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Risk-Based Review

### Summary

A higher-risk change receives broader scrutiny and a reviewer with expertise matching that risk.

### Standards

1. `std-code-risk-based-review-01` A change **MUST** be classified as higher-risk if it is security-relevant, makes a breaking schema change, spans multiple services or components, or is hard to roll back.
2. `std-code-risk-based-review-02` Review scrutiny for a higher-risk change **MUST** be broader than for a routine change, covering its impact and reversibility.
3. `std-code-risk-based-review-03` A higher-risk change **MUST** be reviewed by someone with expertise matching the risk factor involved.
4. `std-code-risk-based-review-04` A repository **MAY** apply a stricter review requirement than this baseline, documented in its `README` or a location linked from it.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Review Scope

### Summary

The same review process applies to every kind of code a repository holds.

### Standards

1. `std-code-review-scope-01` The review and approval process **MUST** apply equally to application code, infrastructure code, configuration, pipeline definitions, and documentation held in the same repository.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Code Quality & Security

### Summary

A reviewer checks a change's correctness, simplicity, maintainability, and security, incorporating automated tooling output and applying judgement where tooling cannot.

### Standards

1. `std-code-code-quality-security-01` A reviewer **MUST** confirm a change is functionally correct and meets its stated requirement before approving it.
2. `std-code-code-quality-security-02` A reviewer **MUST** assess whether a change introduces unnecessary complexity or departs from adopted coding and style conventions.
3. `std-code-code-quality-security-03` Where multiple implementations meet a change's stated requirement equally well, the implementation simplest to understand and maintain **SHOULD** be selected.
4. `std-code-code-quality-security-04` Where a more concise implementation would be less readable, the more readable implementation **SHOULD** be selected.
5. `std-code-code-quality-security-05` Refactoring **SHOULD** be performed as part of routine engineering work where code's structure impairs its maintainability.
6. `std-code-code-quality-security-06` A security-relevant change, such as one that introduces new attack surface or handles sensitive data, **MUST** be reviewed for security weaknesses relevant to the change.
7. `std-code-code-quality-security-07` Review **SHOULD** incorporate relevant output from static analysis or AI-assisted review tooling.
8. `std-code-code-quality-security-08` A reviewer's own scrutiny **SHOULD** then focus on what such tooling cannot reliably assess.

### Related Standards

- [Code Style & Formatting](code-style-formatting.md)
- [Static Code Analysis](static-code-analysis.md)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Operational Readiness

### Summary

A reviewer considers a change's rollback, observability, performance, consumer, documentation, and release-control implications.

### Standards

1. `std-code-operational-readiness-01` A reviewer **SHOULD** consider whether a change can be rolled back if it does not behave as expected.
2. `std-code-operational-readiness-02` A reviewer **SHOULD** consider whether a change meets its observability requirements, such as logging, metrics, or alerting adequate to detect a problem with it after release.
3. `std-code-operational-readiness-03` A reviewer **SHOULD** consider whether a change could degrade performance or resource consumption at expected scale.
4. `std-code-operational-readiness-04` A reviewer **SHOULD** confirm a breaking change is intentional and its impact on consumers has been considered.
5. `std-code-operational-readiness-05` A reviewer **SHOULD** consider whether operational documentation, such as a runbook, needs updating to reflect the change.
6. `std-code-operational-readiness-06` A reviewer **SHOULD** consider whether a higher-risk change should be released behind a feature flag, enabling it to be disabled quickly or rolled out progressively.

### Related Standards

- [Runbooks](../operations-observability/runbooks.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Progressive Delivery](../delivery-release/progressive-delivery.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Review Feedback

### Summary

Blocking feedback is resolved before merge, deferred advisory feedback is tracked, and a materially revised change is re-reviewed with its prior approval marked stale.

### Standards

1. `std-code-review-feedback-01` A reviewer **MUST** distinguish feedback that must be resolved before approval (blocking feedback) from feedback that is advisory or optional.
2. `std-code-review-feedback-02` Advisory feedback deferred until after merge **SHOULD** be recorded in a tracking system so it is not lost.
3. `std-code-review-feedback-03` A change **MUST NOT** be merged while unresolved blocking feedback remains outstanding.
4. `std-code-review-feedback-04` A change materially revised after approval, such as a behaviour-changing commit or conflict resolution, **MUST** be re-reviewed.
5. `std-code-review-feedback-05` The change's prior approval **SHOULD** be marked stale.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Review Conduct

### Summary

Review feedback stays specific enough to act on, and rigorous without becoming adversarial.

### Standards

1. `std-code-review-conduct-01` Review feedback **MUST** be specific enough that the author understands both the concern and the change needed to resolve it.
2. `std-code-review-conduct-02` Review **SHOULD** remain rigorous and non-adversarial, with the purpose of improving the change and the shared codebase.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Review Turnaround

### Summary

A review request is actioned within an agreed timeframe, or reassigned to a reviewer who can.

### Standards

1. `std-code-review-turnaround-01` A review request **SHOULD** be actioned within an agreed, reasonable timeframe appropriate to the repository or team.
2. `std-code-review-turnaround-02` A reviewer unable to review a request within that timeframe **SHOULD** reassign or flag it so another reviewer can act on it.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Emergency Change Review

### Summary

An emergency change may merge through an expedited, auditable review path and receives risk-proportionate post-implementation review after the incident is resolved.

### Standards

1. `std-code-emergency-change-review-01` A change **MAY** merge under an expedited review path only where normal review would materially increase operational or safety risk.
2. `std-code-emergency-change-review-02` A change **MAY** merge under an expedited review path only through an approved, auditable emergency process.
3. `std-code-emergency-change-review-03` Review **MUST** still be performed to the greatest extent practical before an emergency change merges.
4. `std-code-emergency-change-review-04` A change merged under expedited review **SHOULD** receive a post-implementation review once the incident is resolved, with any corrective follow-up identified and tracked.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Approval Records

### Summary

An approval is recorded through the merge request mechanism, attributable to its reviewer and traceable to the change.

### Standards

1. `std-code-approval-records-01` Approval **MUST** be recorded through the repository's merge request review mechanism, attributable to the reviewer who granted it.
2. `std-code-approval-records-02` An approval record **MUST** remain traceable to the change it covers for as long as the change's history is retained.

### Related Standards

- [Branching Strategy](branching-strategy.md)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
