---
last_edited: 2026-09-14
---

# Code Review

## Reviewable Changes

### Summary

A change remains scoped to the smallest reviewable unit and provides enough context to assess without consulting its author, using the organisation's shared description template.

### Standards

1. A change **SHOULD** be scoped to the smallest coherent unit of work that can be reviewed and merged independently. `std-code-reviewable-changes-01`
2. A change description **SHOULD** give a reviewer enough context to understand its purpose, effect, and validation without needing to consult the author directly. `std-code-reviewable-changes-02`
3. An unusually large or broad change **SHOULD** be split into smaller, independently reviewable changes where practical. `std-code-reviewable-changes-03`
4. A repository **SHOULD** use the organisation's shared change-description template. `std-code-reviewable-changes-04`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Independent Review

### Summary

Every change is reviewed and approved by someone other than its author before it merges, regardless of size or urgency.

### Standards

1. A change **MUST** be reviewed and approved by at least one reviewer, other than its author, familiar with the affected code, system, or domain, before it is merged into a shared or protected branch. `std-code-independent-review-01`
2. Approval **MUST NOT** be granted as part of a reciprocal arrangement in which reviewers approve each other's changes without applying meaningful scrutiny. `std-code-independent-review-02`
3. Where a path's ownership is declared in a `CODEOWNERS` file, review from the designated owner **MUST** be enforced before a change to that path can merge. `std-code-independent-review-03`
4. The independent review requirement **MUST** apply regardless of a change's size, the seniority of its author, or the outcome of any automated check. `std-code-independent-review-04`

### Related Standards

- [Branching Strategy](branching-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Risk-Based Review

### Summary

A higher-risk change receives broader scrutiny and a reviewer with expertise matching that risk.

### Standards

1. A change **MUST** be classified as higher-risk if it is security-relevant, makes a breaking schema change, spans multiple services or components, or is hard to roll back. `std-code-risk-based-review-01`
2. Review scrutiny for a higher-risk change **MUST** be broader than for a routine change, covering its impact and reversibility. `std-code-risk-based-review-02`
3. A higher-risk change **MUST** be reviewed by someone with expertise matching the risk factor involved. `std-code-risk-based-review-03`
4. A repository **MAY** document and apply review requirements stricter than the organisation's minimum review requirements. `std-code-risk-based-review-04`

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Review Scope

### Summary

The same review process applies to every kind of code a repository holds.

### Standards

1. The review and approval process **MUST** apply equally to application code, infrastructure code, configuration, pipeline definitions, and documentation held in the same repository. `std-code-review-scope-01`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Code Quality & Security

### Summary

A reviewer checks a change's correctness, simplicity, maintainability, and security, incorporating automated tooling output and applying judgement where tooling cannot.

### Standards

1. A reviewer **MUST** confirm a change is functionally correct and meets its stated requirement before approving it. `std-code-code-quality-security-01`
2. A reviewer **MUST** assess whether a change introduces unnecessary complexity or departs from adopted coding and style conventions. `std-code-code-quality-security-02`
3. Where multiple implementations meet a change's stated requirement equally well, the implementation simplest to understand and maintain **SHOULD** be selected. `std-code-code-quality-security-03`
4. Where a more concise implementation would be less readable, the more readable implementation **SHOULD** be selected. `std-code-code-quality-security-04`
5. Refactoring **SHOULD** be performed as part of routine engineering work where code's structure impairs its maintainability. `std-code-code-quality-security-05`
6. A security-relevant change, such as one that introduces new attack surface or handles sensitive data, **MUST** be reviewed for security weaknesses relevant to the change. `std-code-code-quality-security-06`
7. Review **SHOULD** incorporate relevant output from static analysis or AI-assisted review tooling. `std-code-code-quality-security-07`
8. A reviewer's own scrutiny **SHOULD** focus on aspects that static analysis and AI-assisted review tooling cannot reliably assess. `std-code-code-quality-security-08`

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

1. A reviewer **SHOULD** consider whether a change can be rolled back if it does not behave as expected. `std-code-operational-readiness-01`
2. A reviewer **SHOULD** consider whether a change meets its observability requirements, such as logging, metrics, or alerting adequate to detect a problem with it after release. `std-code-operational-readiness-02`
3. A reviewer **SHOULD** consider whether a change could degrade performance or resource consumption at expected scale. `std-code-operational-readiness-03`
4. A reviewer **SHOULD** confirm a breaking change is intentional and its impact on consumers has been considered. `std-code-operational-readiness-04`
5. A reviewer **SHOULD** consider whether operational documentation, such as a runbook, needs updating to reflect the change. `std-code-operational-readiness-05`
6. A reviewer **SHOULD** consider whether a higher-risk change should be released behind a feature flag, enabling it to be disabled quickly or rolled out progressively. `std-code-operational-readiness-06`

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

1. A reviewer **MUST** distinguish feedback that must be resolved before approval (blocking feedback) from feedback that is advisory or optional. `std-code-review-feedback-01`
2. Advisory feedback deferred until after merge **SHOULD** be recorded in a tracking system so it is not lost. `std-code-review-feedback-02`
3. A change **MUST NOT** be merged while unresolved blocking feedback remains outstanding. `std-code-review-feedback-03`
4. A change materially revised after approval, such as a behaviour-changing commit or conflict resolution, **MUST** be re-reviewed. `std-code-review-feedback-04`
5. A change's prior approval **SHOULD** be marked stale after the change is materially revised. `std-code-review-feedback-05`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Review Conduct

### Summary

Review feedback stays specific enough to act on, and rigorous without becoming adversarial.

### Standards

1. Review feedback **MUST** be specific enough that the author understands both the concern and the change needed to resolve it. `std-code-review-conduct-01`
2. Review **SHOULD** remain rigorous and non-adversarial, with the purpose of improving the change and the shared codebase. `std-code-review-conduct-02`

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Review Turnaround

### Summary

A review request is actioned within an agreed timeframe, or reassigned to a reviewer who can.

### Standards

1. A review request **SHOULD** be actioned within an agreed, reasonable timeframe appropriate to the repository or team. `std-code-review-turnaround-01`
2. A reviewer unable to review a request within its agreed timeframe **SHOULD** reassign or flag it so another reviewer can act on it. `std-code-review-turnaround-02`

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Emergency Change Review

### Summary

An emergency change may merge through an expedited, auditable review path and receives risk-proportionate post-implementation review after the incident is resolved.

### Standards

1. A change **MAY** merge under an expedited review path only where normal review would materially increase operational or safety risk. `std-code-emergency-change-review-01`
2. A change **MAY** merge under an expedited review path only through an approved, auditable emergency process. `std-code-emergency-change-review-02`
3. Review **MUST** still be performed to the greatest extent practical before an emergency change merges. `std-code-emergency-change-review-03`
4. A change merged under expedited review **SHOULD** receive a post-implementation review once the incident is resolved, with any corrective follow-up identified and tracked. `std-code-emergency-change-review-04`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Approval Records

### Summary

An approval is recorded through the merge request mechanism, attributable to its reviewer and traceable to the change.

### Standards

1. Approval **MUST** be recorded through the repository's merge request review mechanism, attributable to the reviewer who granted it. `std-code-approval-records-01`
2. An approval record **MUST** remain traceable to the change it covers for as long as the change's history is retained. `std-code-approval-records-02`

### Related Standards

- [Branching Strategy](branching-strategy.md)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
