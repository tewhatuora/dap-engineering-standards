# Code Style & Formatting

## Style Guide

### Summary

A codebase adopts one defined, discoverable style guide per language, preferring a widely recognised one.

### Standards

1. `std-code-style-guide-01` A codebase **MUST** adopt a single, defined style guide for each programming language in use.
2. `std-code-style-guide-02` A widely recognised, published style guide, such as `PEP 8` for Python or the `Google Style Guides` for Java, **SHOULD** be preferred over a bespoke or self-written one for a language it already covers.
3. `std-code-style-guide-03` The adopted style guide **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Formatting & Layout

### Summary

Formatting and layout follow the adopted style guide consistently, applied deterministically by automated tooling.

### Standards

1. `std-code-formatting-layout-01` A formatting or layout concern defined by the adopted style guide, such as indentation, line length, or whitespace, **MUST** be applied consistently throughout a codebase.
2. `std-code-formatting-layout-02` Where an individual author's formatting or layout preference conflicts with the adopted style guide, the style guide **MUST** take precedence.
3. `std-code-formatting-layout-03` Formatting applied by an automated tool **MUST** be deterministic.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Formatting Configuration

### Summary

Formatting behaviour is defined in simple, stable, version-controlled codebase configuration for every in-scope file type, with customisation limited to current engineering needs.

### Standards

1. `std-code-formatting-configuration-01` Formatting behaviour **MUST** be defined in versioned configuration held within a codebase, such as an `.editorconfig` file.
2. `std-code-formatting-configuration-02` A codebase **SHOULD** define formatting configuration for each in-scope file type it holds.
3. `std-code-formatting-configuration-03` Formatting configuration **SHOULD** be simple and stable.
4. `std-code-formatting-configuration-04` Formatting configuration **SHOULD NOT** carry customisation beyond what an actual, current engineering need justifies.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Codebase Coverage

### Summary

The adopted style guide applies uniformly, whether code was written by an engineer or produced with AI assistance.

### Standards

1. `std-code-codebase-coverage-01` The adopted style guide **MUST** apply uniformly across a codebase, regardless of whether a given part of it was authored by an engineer or produced with AI assistance.
2. `std-code-codebase-coverage-02` Coding standards **MUST** be applied to every kind of code a repository holds, including application code, infrastructure code, and pipeline definitions.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Comments & Documentation

### Summary

A comment explains why code exists or behaves as it does, obsolete code is deleted, and public interfaces use the appropriate documentation convention.

### Standards

1. `std-code-comments-documentation-01` A comment **SHOULD** explain why a piece of code exists or behaves as it does.
2. `std-code-comments-documentation-02` Commented-out code **MUST NOT** be left in a codebase.
3. `std-code-comments-documentation-03` Code no longer required **MUST** be deleted.
4. `std-code-comments-documentation-04` A publicly exposed interface **SHOULD** be documented using the appropriate convention for its type, such as a language's doc-comment convention or an API specification.

### Related Standards

- [API Design](../architecture-system-design/api-design.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Generated Files

### Summary

A generated file's formatting is controlled by its generation process and remains stable when its source is unchanged.

### Standards

1. `std-code-generated-files-01` A generated file **SHOULD NOT** be manually reformatted.
2. `std-code-generated-files-02` Where a generated file must conform to the adopted style guide, its generation process **SHOULD** be adjusted instead.
3. `std-code-generated-files-03` Where a generated file is committed to a codebase, regenerating it without an underlying change **SHOULD NOT** produce an unnecessary formatting difference.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Automated Enforcement

### Summary

Coding standards are applied through automated tooling as work proceeds, including code an AI tool formats.

### Standards

1. `std-code-automated-enforcement-01` Coding standards **SHOULD** be applied through automated tooling, such as an IDE-integrated tool or a pre-commit hook.
2. `std-code-automated-enforcement-02` Formatting applied or modified by an AI tool **MUST** conform to the adopted style guide through the same automated mechanism used for other content.

### Related Standards

- [Linting & Style Enforcement](linting-style-enforcement.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Code Review

### Summary

Automated tooling identifies formatting concerns, and recurring concerns trigger improvements to that automation.

### Standards

1. `std-code-code-review-01` A reviewer **SHOULD NOT** be expected to identify or comment on a formatting concern that automated tooling could address instead.
2. `std-code-code-review-02` A formatting concern that recurs across multiple reviews **SHOULD** be treated as a signal that automation needs improvement.

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Formatting-Only Changes

### Summary

A formatting-only change stays separate from a functional one, so each remains distinguishable in the history.

### Standards

1. `std-code-formatting-only-changes-01` A formatting-only change **SHOULD** be kept separate from a functional change, so the two remain distinguishable in the change history.
2. `std-code-formatting-only-changes-02` A broad or codebase-wide reformatting change **SHOULD NOT** be combined with a refactor, feature change, or dependency upgrade in the same change.

### Related Standards

- [Version Control](version-control.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
