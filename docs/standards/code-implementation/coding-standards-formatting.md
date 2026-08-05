# Coding Standards & Formatting

## Objective

Coding Standards & Formatting establishes the naming, formatting, and layout conventions applied when writing code, so a codebase reads consistently regardless of who wrote a given part of it or whether it was produced with AI assistance.

## Standards

### Adoption of a Documented Style Guide

These requirements govern which style guide a codebase adopts and how it is documented.

1. A codebase must adopt a single, defined style guide for each programming language in use.
2. A widely recognised, published style guide, such as `PEP 8` for Python or the `Google Style Guides` for Java, should be preferred over a bespoke or self-written one for a language it already covers.
3. The adopted style guide must be documented and discoverable, such as through a repository's `README` or a location linked from it.

### Consistent Formatting & Layout

These requirements define how a codebase is formatted and laid out, so its presentation remains consistent throughout.

1. A formatting or layout concern defined by the adopted style guide, such as indentation, line length, or whitespace, must be applied consistently throughout a codebase.
2. Where an individual author's formatting or layout preference conflicts with the adopted style guide, the style guide must take precedence.
3. Formatting applied by an automated tool must be deterministic.

### Repository-Controlled Formatting Configuration

These requirements govern where formatting configuration lives and how much of it a codebase should carry.

1. Formatting behaviour must be defined in a versioned configuration held within a codebase, such as an `.editorconfig` file, not left to an individual contributor's local editor or workstation settings.
2. A codebase should define formatting configuration for each in-scope file type it holds.
3. Formatting configuration should be simple and stable; it should not carry customisation beyond what an actual, current engineering need justifies.

#### References

[Everything as Code](../../principles/everything-as-code.md)\
[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Consistent Application Across a Codebase

These requirements extend the adopted style guide to every part of a codebase and every language it contains.

1. The adopted style guide must apply uniformly across a codebase, regardless of whether a given part of it was authored by an engineer or produced with AI assistance.
2. Coding standards must be applied to every kind of code a repository holds, including application code, infrastructure code, and pipeline definitions.

#### References

[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)\
[AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)\
[Everything as Code](../../principles/everything-as-code.md)

### Code Comments & Inline Documentation

These requirements guide how comments and inline documentation are used, so they add genuine clarity rather than noise.

1. A comment should explain why a piece of code exists or behaves as it does, rather than restate what the code already makes clear.
2. Commented-out code must not be left in a codebase; code no longer required must be deleted.
3. A publicly exposed interface should be documented using the appropriate convention for its type, such as a language's doc-comment convention or an API specification.

#### References

[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)\
[API Design & Standards](../architecture-system-design/api-design-standards.md)

### Formatting of Generated Files

These requirements address the formatting of a file produced by an automated generation process rather than authored directly.

1. A generated file should not be manually reformatted; where it must conform to the adopted style guide, its generation process should be adjusted instead.
2. Where a generated file is committed to a codebase, regenerating it without an underlying change should not produce an unnecessary formatting difference.

### Automated Application of Coding Standards

These requirements keep coding standards applied through automated tooling as engineering work proceeds.

1. Coding standards should be applied through automated tooling, such as an IDE-integrated tool or a pre-commit hook.
2. Formatting applied or modified by an AI tool must still conform to the adopted style guide through the same automated mechanism used for other content, not applied ad hoc by the tool itself.

#### References

[Automation First](../../principles/automation-first.md)\
[Linting & Style Enforcement](linting-style-enforcement.md)\
[AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Formatting Scrutiny in Code Review

These requirements focus review attention on what automated formatting tooling cannot assess.

1. A reviewer should not be expected to identify or comment on a formatting concern that automated tooling could address instead.
2. A formatting concern that recurs across multiple reviews should be treated as a signal that automation needs improvement.

#### References

[Code Review](code-review.md)

### Separating Formatting Changes From Functional Changes

These requirements distinguish a formatting-only change from a functional one.

1. A formatting-only change should be kept separate from a functional change, so the two remain distinguishable in the change history.
2. A broad or codebase-wide reformatting change should not be combined with a refactor, feature change, or dependency upgrade in the same change.

#### References

[Version Control](version-control.md)
