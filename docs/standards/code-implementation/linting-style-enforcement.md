# Linting & Style Enforcement

## Objective

Linting & Style Enforcement treats checking a codebase against its adopted coding conventions as a continuous, automated part of engineering work. This ensures a deviation is caught early and resolved through a disciplined, reviewed process.

## Standards

### Linting Coverage

These requirements set out the scope of automated linting across a codebase.

1. Each language in use within a codebase, including one used to define infrastructure or a pipeline, must be checked by an automated linter appropriate to it.
2. Generated code should be excluded from linting scope, rather than tracked as a violation.
3. An established, actively maintained linter should be preferred over a custom-built or unmaintained one for a language it already covers.
4. The linters in use for a codebase must be documented and discoverable, such as through a repository's `README` or a location linked from it.

#### References
[Coding Standards & Formatting](coding-standards-formatting.md)

### Linter Configuration

These requirements address how a linter's configuration is controlled across a codebase.

1. A linter's ruleset must be defined as version-controlled configuration, whether declared directly within the codebase it governs or extended from a version-controlled shared baseline.
2. The same ruleset and linter version must be applied wherever linting runs, whether locally, at pre-commit, or in the delivery pipeline.
3. A linter's default ruleset should be adopted wherever it meets a codebase's needs; a customisation should be added only where an actual need justifies it.

#### References
[Everything as Code](../../principles/everything-as-code.md)\
[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Severity-Based Pipeline Gate

These requirements describe how a change's progression through the delivery pipeline is gated according to a lint violation's severity.

1. A lint check must run as part of the delivery pipeline.
2. Each lint rule must be classified by severity, distinguishing a violation that must block progression from one that is advisory only.
3. A change must not merge or deploy while a non-baselined violation at blocking severity remains outstanding.

#### References
[Automation First](../../principles/automation-first.md)

### Local Detection

These requirements cover how a lint violation is surfaced locally, before a change is submitted for review.

1. Linting should be available to run locally, through IDE integration, or as a pre-commit hook, so a violation is visible before a change is submitted for review.
2. A local lint run should check only the files affected by a change where practical, rather than the entire codebase, to keep local feedback fast.

#### References
[Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Suppression & Exception Discipline

These requirements address how a lint violation is suppressed without weakening a codebase's overall linting discipline.

1. A lint violation must not be suppressed by disabling a rule broadly, such as file-wide or project-wide, to silence a single occurrence.
2. A suppression must be scoped to the specific line and rule it addresses, and must include a documented reason.
3. A suppression must receive the same review scrutiny as the change it appears in.
4. A suppression or exception list, including one held in a dedicated file rather than inline, must be version-controlled within the codebase it applies to.

#### References
[Code Review](code-review.md)\
[Everything as Code](../../principles/everything-as-code.md)

### Ruleset Governance

These requirements guide how a change to the adopted ruleset is governed.

1. A change to the adopted ruleset, including adding, removing, or weakening a rule, must go through the same review process required for a code change.
2. A ruleset must not be weakened unilaterally to let a specific failing change pass.
3. The ruleset should be reviewed periodically, so it stays current with the codebase's adopted conventions and evolving engineering practice.

#### References
[Code Review](code-review.md)\
[Everything as Code](../../principles/everything-as-code.md)

### Baselining Pre-Existing Violations

These requirements set out the baseline available for a pre-existing violation when adopting a linter or a new rule on an existing codebase.

1. Adopting a linter or a new rule on an existing codebase may add its existing violations to the exception list as a baseline exempt from the pipeline gate.
2. A violation introduced after a baseline is established must not be added to that baseline.
3. A baselined violation must be tracked and remediated as technical debt.

#### References
[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
