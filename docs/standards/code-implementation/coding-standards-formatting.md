# Coding Standards & Formatting

## Summary

> One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

## Standards

### Style Guide Adoption

> A codebase adopts one defined, discoverable style guide per language, preferring a widely recognised one.

1. A codebase **MUST** adopt a single, defined style guide for each programming language in use.
2. A widely recognised, published style guide, such as `PEP 8` for Python or the `Google Style Guides` for Java, **SHOULD** be preferred over a bespoke or self-written one for a language it already covers.
3. The adopted style guide **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it.

### Consistent Formatting & Layout

> Formatting and layout follow the adopted style guide consistently, applied deterministically by automated tooling.

1. A formatting or layout concern defined by the adopted style guide, such as indentation, line length, or whitespace, **MUST** be applied consistently throughout a codebase.
2. Where an individual author's formatting or layout preference conflicts with the adopted style guide, the style guide **MUST** take precedence.
3. Formatting applied by an automated tool **MUST** be deterministic.

### Repository-Controlled Formatting Configuration

> Formatting configuration lives in a codebase's own versioned settings, not an individual's local editor.

1. Formatting behaviour **MUST** be defined in a versioned configuration held within a codebase, such as an `.editorconfig` file, not left to an individual contributor's local editor or workstation settings.
2. A codebase **SHOULD** define formatting configuration for each in-scope file type it holds.
3. Formatting configuration **SHOULD** be simple and stable; it **SHOULD NOT** carry customisation beyond what an actual, current engineering need justifies.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Consistent Application Across a Codebase

> The adopted style guide applies uniformly, whether code was written by an engineer or produced with AI assistance.

1. The adopted style guide **MUST** apply uniformly across a codebase, regardless of whether a given part of it was authored by an engineer or produced with AI assistance.
2. Coding standards **MUST** be applied to every kind of code a repository holds, including application code, infrastructure code, and pipeline definitions.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Code Comments & Inline Documentation

> A comment explains why code exists, not what it already makes clear, and commented-out code is deleted, not kept.

1. A comment **SHOULD** explain why a piece of code exists or behaves as it does, rather than restate what the code already makes clear.
2. Commented-out code **MUST NOT** be left in a codebase; code no longer required **MUST** be deleted.
3. A publicly exposed interface **SHOULD** be documented using the appropriate convention for its type, such as a language's doc-comment convention or an API specification.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [API Design & Standards](../architecture-system-design/api-design-standards.md)

### Formatting of Generated Files

> A generated file's formatting comes from its generation process, never a manual hand-edit.

1. A generated file **SHOULD NOT** be manually reformatted; where it must conform to the adopted style guide, its generation process **SHOULD** be adjusted instead.
2. Where a generated file is committed to a codebase, regenerating it without an underlying change **SHOULD NOT** produce an unnecessary formatting difference.

### Standards Automation

> Coding standards are applied through automated tooling as work proceeds, including code an AI tool formats.

1. Coding standards **SHOULD** be applied through automated tooling, such as an IDE-integrated tool or a pre-commit hook.
2. Formatting applied or modified by an AI tool **MUST** still conform to the adopted style guide through the same automated mechanism used for other content, not applied ad hoc by the tool itself.

#### References

- [Automation First](../../principles/automation-first.md)
- [Linting & Style Enforcement](linting-style-enforcement.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Formatting in Code Review

> A formatting concern is automated tooling's job to catch, not a reviewer's.

1. A reviewer **SHOULD NOT** be expected to identify or comment on a formatting concern that automated tooling could address instead.
2. A formatting concern that recurs across multiple reviews **SHOULD** be treated as a signal that automation needs improvement.

#### References

- [Code Review](code-review.md)

### Formatting Change Separation

> A formatting-only change stays separate from a functional one, so each remains distinguishable in the history.

1. A formatting-only change **SHOULD** be kept separate from a functional change, so the two remain distinguishable in the change history.
2. A broad or codebase-wide reformatting change **SHOULD NOT** be combined with a refactor, feature change, or dependency upgrade in the same change.

#### References

- [Version Control](version-control.md)
