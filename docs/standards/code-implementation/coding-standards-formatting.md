# Coding Standards & Formatting

## Summary

> One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

## Standards

### Style Guide Adoption

These requirements set out how a style guide is chosen for a codebase and made discoverable.

1. A codebase **MUST** adopt a single, defined style guide for each programming language in use.
2. A widely recognised, published style guide, such as `PEP 8` for Python or the `Google Style Guides` for Java, **SHOULD** be preferred over a bespoke or self-written one for a language it already covers.
3. The adopted style guide **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it.

### Consistent Formatting & Layout

These requirements address how formatting and layout stay consistent across a codebase.

1. A formatting or layout concern defined by the adopted style guide, such as indentation, line length, or whitespace, **MUST** be applied consistently throughout a codebase.
2. Where an individual author's formatting or layout preference conflicts with the adopted style guide, the style guide **MUST** take precedence.
3. Formatting applied by an automated tool **MUST** be deterministic.

### Repository-Controlled Formatting Configuration

These requirements describe how formatting configuration is held and scoped within a codebase, rather than left to individual tooling.

1. Formatting behaviour **MUST** be defined in a versioned configuration held within a codebase, such as an `.editorconfig` file, not left to an individual contributor's local editor or workstation settings.
2. A codebase **SHOULD** define formatting configuration for each in-scope file type it holds.
3. Formatting configuration **SHOULD** be simple and stable; it **SHOULD NOT** carry customisation beyond what an actual, current engineering need justifies.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Consistent Application Across a Codebase

These requirements cover how the adopted style guide is applied uniformly across every kind of code in a codebase.

1. The adopted style guide **MUST** apply uniformly across a codebase, regardless of whether a given part of it was authored by an engineer or produced with AI assistance.
2. Coding standards **MUST** be applied to every kind of code a repository holds, including application code, infrastructure code, and pipeline definitions.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Code Comments & Inline Documentation

These requirements guide how comments and inline documentation are used, so they add genuine clarity rather than noise.

1. A comment **SHOULD** explain why a piece of code exists or behaves as it does, rather than restate what the code already makes clear.
2. Commented-out code **MUST NOT** be left in a codebase; code no longer required **MUST** be deleted.
3. A publicly exposed interface **SHOULD** be documented using the appropriate convention for its type, such as a language's doc-comment convention or an API specification.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [API Design & Standards](../architecture-system-design/api-design-standards.md)

### Formatting of Generated Files

These requirements set out how a generated file's formatting is kept consistent with its generation process, rather than adjusted by hand.

1. A generated file **SHOULD NOT** be manually reformatted; where it must conform to the adopted style guide, its generation process **SHOULD** be adjusted instead.
2. Where a generated file is committed to a codebase, regenerating it without an underlying change **SHOULD NOT** produce an unnecessary formatting difference.

### Standards Automation

These requirements address how coding standards are applied through automated tooling as engineering work proceeds, including when a tool is AI-assisted.

1. Coding standards **SHOULD** be applied through automated tooling, such as an IDE-integrated tool or a pre-commit hook.
2. Formatting applied or modified by an AI tool **MUST** still conform to the adopted style guide through the same automated mechanism used for other content, not applied ad hoc by the tool itself.

#### References

- [Automation First](../../principles/automation-first.md)
- [Linting & Style Enforcement](linting-style-enforcement.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Formatting in Code Review

These requirements describe how a formatting concern is kept out of code review's focus, since automated tooling addresses it instead.

1. A reviewer **SHOULD NOT** be expected to identify or comment on a formatting concern that automated tooling could address instead.
2. A formatting concern that recurs across multiple reviews **SHOULD** be treated as a signal that automation needs improvement.

#### References

- [Code Review](code-review.md)

### Formatting Change Separation

These requirements cover how a formatting-only change is kept separate from a functional one, so each stays distinguishable in a codebase's history.

1. A formatting-only change **SHOULD** be kept separate from a functional change, so the two remain distinguishable in the change history.
2. A broad or codebase-wide reformatting change **SHOULD NOT** be combined with a refactor, feature change, or dependency upgrade in the same change.

#### References

- [Version Control](version-control.md)
