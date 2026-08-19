# Static Code Analysis

## Summary

> Static analysis continuously inspects code for defects, security weaknesses, and maintainability decline, not just style.

## Objective

This standard defines requirements for automated inspection of source code for defects, security weaknesses, and maintainability decline as a continuous part of engineering work. It keeps each visible and addressed before it materially affects the codebase.

## Standards

### Static Analysis Coverage

These requirements set out how static analysis coverage is scoped across a codebase, distinct from a narrower style or formatting check.

1. Each language in use within a codebase, including one used to define infrastructure, **MUST** be checked using static analysis appropriate to it.
2. Generated code and a path not held under version control, such as a build output directory, **MUST** be excluded from static analysis scope.
3. Static analysis **MUST** check for a likely bug pattern, such as a null dereference, a resource leak, or an unreachable code path; a maintainability issue or code smell; and a known class of security weakness.
4. Where a language supports static type checking, type checking **MUST** be enabled and treated as part of a codebase's static analysis coverage.

#### References
- [Linting & Style Enforcement](linting-style-enforcement.md)
- [Application Security Testing](../quality-engineering/application-security-testing.md)
- [Security by Design](../../principles/security-by-design.md)

### Maintainability Analysis

These requirements describe how a codebase's maintainability is assessed through static analysis, so a decline is identified as it occurs.

1. Static analysis **MUST** be used to measure a maintainability indicator, such as complexity or duplication, for code as it is written.
2. A degrading trend in a measured indicator **MUST** be visible to the team responsible for the code, so it can be addressed before it materially affects maintainability.
3. Static analysis **SHOULD** be used to identify unused or dead code, so it can be removed.

#### References
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Ruleset Configuration

These requirements address how static analysis tooling's configuration is controlled and shared across the organisation.

1. A ruleset **MUST** be configured and managed either within the analysis tool itself or as version-controlled configuration, whichever the tool supports, so the same ruleset can be shared consistently across the organisation.
2. The same rule definitions and tool version **MUST** apply locally, where supported by the tool, and in the delivery pipeline.
3. The analysis tool's default ruleset **SHOULD** be adopted wherever it meets a codebase's needs; a customisation **SHOULD** be added only where an actual need justifies it.

#### References
- [Platform Alignment](../../principles/platform-alignment.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Severity-Based Pipeline Gate

These requirements describe how a change's progression through the delivery pipeline is gated according to a static analysis finding's severity.

1. Static analysis **MUST** run as part of the delivery pipeline.
2. Each finding **MUST** be classified by severity, distinguishing one that must block progression from one that is advisory only.
3. A change **MUST NOT** merge or deploy while a non-baselined finding at blocking severity remains outstanding.
4. A finding **SHOULD** be visible to a reviewer as part of reviewing the change, not only in a separate location requiring an extra step to check.
5. A finding **MUST** be reported in a standard, machine-readable format, such as SARIF. A proprietary or tool-specific format **MUST NOT** be the only format produced.

#### References
- [Automation First](../../principles/automation-first.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Code Review](code-review.md)
- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Local Detection

These requirements cover how a static analysis finding is surfaced locally, before a change is submitted for review.

1. Static analysis **SHOULD** be available to run locally through IDE integration, where supported by the tool, so a finding is visible before a change is submitted for review.
2. Static analysis running through IDE integration **SHOULD** analyse a file incrementally as it is written, rather than only through a manual, whole-codebase scan, so feedback remains immediate.

#### References
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Suppression & Exception Discipline

These requirements address how a static analysis finding is suppressed without weakening a codebase's overall static analysis discipline.

1. A finding **MUST NOT** be suppressed by disabling a rule broadly, unless a genuine investigation shows every occurrence it would otherwise flag is a false positive.
2. A suppression **MUST** identify the specific finding it addresses, and **MUST** include a documented reason.
3. A suppression or exception **MUST** be tracked through the analysis tool's own dismissal mechanism or a version-controlled list, so it remains auditable.
4. A suppression recorded in a version-controlled list **MUST** be reviewed alongside the change it appears in; a suppression tracked through the analysis tool's own dismissal mechanism **MUST** be restricted to an authorised role.

#### References
- [Code Review](code-review.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Ruleset Governance

These requirements guide how a change to the adopted ruleset is governed.

1. A change to the adopted ruleset, including adding, removing, or weakening a rule, **MUST** be restricted to an authorised role.
2. A change made as version-controlled configuration **MUST** be reviewed with the same rigor as a code change; a change made within the analysis tool itself **MUST** remain visible in the tool's own audit trail.
3. A ruleset **MUST NOT** be weakened unilaterally to let a specific failing change pass.
4. The ruleset **SHOULD** be reviewed periodically, so it keeps pace with a newly identified bug pattern, language feature, or evolving engineering practice.

#### References
- [Code Review](code-review.md)

### Baselining Pre-Existing Findings

These requirements set out how a pre-existing finding is baselined when adopting static analysis or a new rule on an existing codebase.

1. Adopting static analysis or a new rule on an existing codebase **MAY** treat its existing violations as a baseline, recorded either as an explicit exception list or as a fixed point in the codebase's history.
2. A violation introduced after a baseline is established, whether as an exception list or a fixed point in the codebase's history, **MUST NOT** be treated as baselined.
3. A baselined violation **MUST** be tracked and remediated as technical debt.

#### References
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
