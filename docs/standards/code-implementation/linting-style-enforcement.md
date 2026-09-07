# Linting & Style Enforcement

Automated linting is applied consistently, with blocking violations resolved through the normal engineering process.

## Linting Coverage

### Summary

Every language with suitable maintained tooling is checked by a documented and discoverable linter, with generated code excluded by default.

### Standards

1. `std-code-linting-coverage-01` Each language in use within a codebase, including one used to define infrastructure or a pipeline, **MUST** be checked by an appropriate automated linter where a maintained one is available.
2. `std-code-linting-coverage-02` Generated code **SHOULD** be excluded from linting scope.
3. `std-code-linting-coverage-03` An established, actively maintained linter **SHOULD** be preferred over a custom-built or unmaintained one for a language it already covers.
4. `std-code-linting-coverage-04` The linters in use for a codebase **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it.

### Related Standards

- [Code Style & Formatting](code-style-formatting.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Linter Configuration

### Summary

A linter's ruleset is version-controlled configuration, applied identically wherever linting runs.

### Standards

1. `std-code-linter-configuration-01` A linter's ruleset **MUST** be defined as version-controlled configuration, whether declared directly within the codebase it governs or extended from a version-controlled shared baseline.
2. `std-code-linter-configuration-02` The same effective ruleset **MUST** be applied wherever linting runs, whether locally, at pre-commit, or in the delivery pipeline.
3. `std-code-linter-configuration-03` A linter's default ruleset **SHOULD** be adopted wherever it meets a codebase's needs; a customisation **SHOULD** be added only where an actual need justifies it.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Local Lint Detection

### Summary

A lint violation is available locally through an IDE or pre-commit hook before a change is submitted for review.

### Standards

1. `std-code-local-lint-detection-01` Linting **SHOULD** be available to run locally, through IDE integration, or as a pre-commit hook, so a violation is visible before a change is submitted for review.
2. `std-code-local-lint-detection-02` A local lint run **SHOULD** check only the files affected by a change where practical to keep local feedback fast.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Existing Violation Baseline

### Summary

A pre-existing violation may be baselined when a linter is adopted and remains tracked for remediation as technical debt.

### Standards

1. `std-code-existing-violation-baseline-01` Adopting a linter or a new rule on an existing codebase **MAY** treat its existing violations as a baseline, recorded either as an explicit exception list or as a fixed point in the codebase's history.
2. `std-code-existing-violation-baseline-02` A violation introduced after a baseline is established, whether as an exception list or a fixed point in the codebase's history, **MUST NOT** be treated as baselined.
3. `std-code-existing-violation-baseline-03` A baselined violation **SHOULD** be tracked and remediated as technical debt.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Linting Pipeline Gate

### Summary

A lint check runs in the delivery pipeline, where classified severity determines whether a violation advises or blocks progression and an unclassified rule remains advisory.

### Standards

1. `std-code-linting-pipeline-gate-01` A lint check **MUST** run as part of the delivery pipeline.
2. `std-code-linting-pipeline-gate-02` Each lint rule **MUST** be classified by severity, where supported by the linter, distinguishing a violation that must block progression from one that is advisory only.
3. `std-code-linting-pipeline-gate-03` A lint rule not classified by severity **MUST** be treated as advisory only.
4. `std-code-linting-pipeline-gate-04` A change **MUST NOT** merge or deploy while a non-baselined violation at blocking severity remains outstanding.

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Lint Suppressions & Exceptions

### Summary

A lint suppression is scoped to one line and rule, documents its reason, receives normal review scrutiny, and is version-controlled where maintained in a list.

### Standards

1. `std-code-lint-suppressions-exceptions-01` A lint violation **MUST NOT** be suppressed by disabling a rule broadly, such as file-wide or project-wide, to silence a single occurrence.
2. `std-code-lint-suppressions-exceptions-02` A suppression **MUST** be scoped to the narrowest location and rule supported by the linter.
3. `std-code-lint-suppressions-exceptions-03` A suppression **MUST** include a documented reason.
4. `std-code-lint-suppressions-exceptions-04` A suppression **MUST** receive the same review scrutiny as the change it appears in.
5. `std-code-lint-suppressions-exceptions-05` A suppression or exception list held in a dedicated file **MUST** be version-controlled within the codebase it applies to.

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Lint Ruleset Governance

### Summary

A linting ruleset change receives the same review as a code change, and the ruleset is periodically reviewed and cannot be weakened unilaterally for a specific failure.

### Standards

1. `std-code-lint-ruleset-governance-01` A change to the adopted ruleset, including adding, removing, or weakening a rule, **MUST** go through the same review process required for a code change.
2. `std-code-lint-ruleset-governance-02` A ruleset **MUST NOT** be weakened unilaterally to let a specific failing change pass.
3. `std-code-lint-ruleset-governance-03` The ruleset **SHOULD** be reviewed periodically, so it stays current with the codebase's adopted conventions and evolving engineering practice.

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
