---
last_edited: 2026-09-14
---

# Static Code Analysis

## Analysis Coverage

### Summary

Every language with suitable maintained tooling is checked by static analysis for bugs, maintainability issues, and security weaknesses, with type checking used where appropriate and generated or untracked paths excluded by default.

### Standards

1. Each language in use within a codebase, including one used to define infrastructure, **MUST** be checked using appropriate static analysis where a maintained analyser is available. `std-code-analysis-coverage-01`
2. Generated code and a path not held under version control, such as a build output directory, **SHOULD** be excluded from static analysis scope. `std-code-analysis-coverage-02`
3. Static analysis **MUST** check for a likely bug pattern, such as a null dereference, a resource leak, or an unreachable code path; a maintainability issue or code smell; and a known class of security weakness. `std-code-analysis-coverage-03`
4. Where a language supports static type checking, type checking **SHOULD** be enabled and treated as part of a codebase's static analysis coverage. `std-code-analysis-coverage-04`

### Related Standards

- [Linting & Style Enforcement](linting-style-enforcement.md)
- [Application Security Testing](../quality-engineering/application-security-testing.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Maintainability Analysis

### Summary

Static analysis measures a maintainability indicator continuously, so a degrading trend is visible as it happens.

### Standards

1. Static analysis **SHOULD** be used to measure a maintainability indicator, such as complexity or duplication, for code as it is written. `std-code-maintainability-analysis-01`
2. A degrading trend in a measured indicator **SHOULD** be visible to the team responsible for the code, so it can be addressed before it materially affects maintainability. `std-code-maintainability-analysis-02`
3. Static analysis **SHOULD** be used to identify unused or dead code, so it can be removed. `std-code-maintainability-analysis-03`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Ruleset Configuration

### Summary

A static analysis ruleset is centrally managed or version-controlled and applied consistently across the organisation, locally and in the pipeline.

### Standards

1. A ruleset **MUST** be configured and managed either within the analysis tool itself or as version-controlled configuration, whichever the tool supports, so the same ruleset can be shared consistently across the organisation. `std-code-ruleset-configuration-01`
2. The same effective rule definitions **MUST** apply locally, where supported by the tool, and in the delivery pipeline. `std-code-ruleset-configuration-02`
3. The analysis tool's default ruleset **SHOULD** be adopted wherever it meets a codebase's needs; a customisation **SHOULD** be added only where an actual need justifies it. `std-code-ruleset-configuration-03`

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Local Analysis Detection

### Summary

A static analysis finding is available locally and incrementally as code is written, before a change is submitted for review.

### Standards

1. Static analysis **SHOULD** be available to run locally through IDE integration, where supported by the tool, so a finding is visible before a change is submitted for review. `std-code-local-analysis-detection-01`
2. Static analysis running through IDE integration **SHOULD** analyse a file incrementally as it is written so feedback remains immediate. `std-code-local-analysis-detection-02`

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Existing Finding Baseline

### Summary

A pre-existing finding may be baselined when static analysis is adopted and remains tracked for remediation as technical debt.

### Standards

1. Adopting static analysis or a new rule on an existing codebase **MAY** treat its existing violations as a baseline, recorded either as an explicit exception list or as a fixed point in the codebase's history. `std-code-existing-finding-baseline-01`
2. A violation introduced after a baseline is established, whether as an exception list or a fixed point in the codebase's history, **MUST NOT** be treated as baselined. `std-code-existing-finding-baseline-02`
3. A baselined violation **SHOULD** be tracked and remediated as technical debt. `std-code-existing-finding-baseline-03`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Analysis Pipeline Gate

### Summary

Static analysis runs in the delivery pipeline, classifies findings by severity, blocks progression for non-baselined findings at blocking severity, exposes findings to reviewers, and reports them in a standard, machine-readable format.

### Standards

1. Static analysis **MUST** run as part of the delivery pipeline. `std-code-analysis-pipeline-gate-01`
2. Each finding **MUST** be classified by severity, distinguishing one that must block progression from one that is advisory only. `std-code-analysis-pipeline-gate-02`
3. A change **MUST NOT** merge or deploy while a non-baselined finding at blocking severity remains outstanding. `std-code-analysis-pipeline-gate-03`
4. A finding **SHOULD** be visible within the review interface used to assess the change. `std-code-analysis-pipeline-gate-04`
5. A finding **MUST** be reported in a standard, machine-readable format, such as SARIF. `std-code-analysis-pipeline-gate-05`
6. A proprietary or tool-specific format **MUST NOT** be the only format produced. `std-code-analysis-pipeline-gate-06`

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Analysis Suppressions & Exceptions

### Summary

A static analysis suppression identifies its finding, documents its reason, remains auditable, and receives review or authorised dismissal.

### Standards

1. A finding **MUST NOT** be suppressed by disabling a rule broadly, unless a genuine investigation shows every occurrence it would otherwise flag is a false positive. `std-code-analysis-suppressions-exceptions-01`
2. A suppression **MUST** identify the specific finding it addresses. `std-code-analysis-suppressions-exceptions-02`
3. A suppression **MUST** include a documented reason. `std-code-analysis-suppressions-exceptions-03`
4. A suppression or exception **MUST** be tracked through the analysis tool's own dismissal mechanism or a version-controlled list, so it remains auditable. `std-code-analysis-suppressions-exceptions-04`
5. A suppression recorded in a version-controlled list **MUST** be reviewed alongside the change it appears in. `std-code-analysis-suppressions-exceptions-05`
6. A suppression tracked through the analysis tool's own dismissal mechanism **MUST** be restricted to an authorised role. `std-code-analysis-suppressions-exceptions-06`

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Analysis Ruleset Governance

### Summary

A static analysis ruleset change is restricted to an authorised role, remains auditable, receives the same rigor as code review, and is periodically reviewed.

### Standards

1. A change to the adopted ruleset, including adding, removing, or weakening a rule, **MUST** be restricted to an authorised role. `std-code-analysis-ruleset-governance-01`
2. A change made as version-controlled configuration **MUST** be reviewed with the same rigor as a code change. `std-code-analysis-ruleset-governance-02`
3. A change made within the analysis tool itself **MUST** remain visible in the tool's own audit trail. `std-code-analysis-ruleset-governance-03`
4. A ruleset **MUST NOT** be weakened unilaterally to let a specific failing change pass. `std-code-analysis-ruleset-governance-04`
5. The ruleset **SHOULD** be reviewed periodically, so it keeps pace with a newly identified bug pattern, language feature, or evolving engineering practice. `std-code-analysis-ruleset-governance-05`

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
