# Linting & Style Enforcement

## Summary

> Apply automated linting consistently, with blocking violations resolved through the normal engineering process.

## Standards

### Linting Coverage

Every language in a codebase is checked by an appropriate, actively maintained linter, documented and discoverable.

1. Each language in use within a codebase, including one used to define infrastructure or a pipeline, **MUST** be checked by an automated linter appropriate to it.
2. Generated code **MUST** be excluded from linting scope, rather than tracked as a violation.
3. An established, actively maintained linter **SHOULD** be preferred over a custom-built or unmaintained one for a language it already covers.
4. The linters in use for a codebase **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it.

#### References

- [Coding Standards & Formatting](coding-standards-formatting.md)

### Linter Configuration

A linter's ruleset is version-controlled configuration, applied identically wherever linting runs.

1. A linter's ruleset **MUST** be defined as version-controlled configuration, whether declared directly within the codebase it governs or extended from a version-controlled shared baseline.
2. The same ruleset and linter version **MUST** be applied wherever linting runs, whether locally, at pre-commit, or in the delivery pipeline.
3. A linter's default ruleset **SHOULD** be adopted wherever it meets a codebase's needs; a customisation **SHOULD** be added only where an actual need justifies it.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Severity-Based Pipeline Gate

A lint violation's severity decides whether it merely advises or blocks a change from merging or deploying.

1. A lint check **MUST** run as part of the delivery pipeline.
2. Each lint rule **MUST** be classified by severity, where supported by the linter, distinguishing a violation that must block progression from one that is advisory only.
3. A lint rule not classified by severity **MUST** be treated as advisory only.
4. A change **MUST NOT** merge or deploy while a non-baselined violation at blocking severity remains outstanding.

#### References

- [Automation First](../../principles/automation-first.md)

### Local Detection

A lint violation surfaces locally, through an IDE or pre-commit hook, before a change is ever submitted for review.

1. Linting **SHOULD** be available to run locally, through IDE integration, or as a pre-commit hook, so a violation is visible before a change is submitted for review.
2. A local lint run **SHOULD** check only the files affected by a change where practical, rather than the entire codebase, to keep local feedback fast.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Suppression & Exception Discipline

A lint suppression is scoped to one line with a documented reason, and reviewed with the same scrutiny as any change.

1. A lint violation **MUST NOT** be suppressed by disabling a rule broadly, such as file-wide or project-wide, to silence a single occurrence.
2. A suppression **MUST** be scoped to the specific line and rule it addresses, and **MUST** include a documented reason.
3. A suppression **MUST** receive the same review scrutiny as the change it appears in.
4. A suppression or exception list, including one held in a dedicated file rather than inline, **MUST** be version-controlled within the codebase it applies to.

#### References

- [Code Review](code-review.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Ruleset Governance

A change to the linting ruleset goes through the same review as a code change, and is never weakened to pass one failure.

1. A change to the adopted ruleset, including adding, removing, or weakening a rule, **MUST** go through the same review process required for a code change.
2. A ruleset **MUST NOT** be weakened unilaterally to let a specific failing change pass.
3. The ruleset **SHOULD** be reviewed periodically, so it stays current with the codebase's adopted conventions and evolving engineering practice.

#### References

- [Code Review](code-review.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Baselining Pre-Existing Violations

A pre-existing violation can be baselined when a linter is adopted, but stays tracked and remediated as technical debt.

1. Adopting a linter or a new rule on an existing codebase **MAY** treat its existing violations as a baseline, recorded either as an explicit exception list or as a fixed point in the codebase's history.
2. A violation introduced after a baseline is established, whether as an exception list or a fixed point in the codebase's history, **MUST NOT** be treated as baselined.
3. A baselined violation **MUST** be tracked and remediated as technical debt.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
