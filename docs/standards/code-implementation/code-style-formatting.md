---
last_edited: 2026-09-14
---

# Code Style & Formatting

## Style Guide

### Summary

A codebase adopts one defined, discoverable style guide per language, preferring a widely recognised one.

### Standards

1. A codebase **MUST** adopt a single, defined style guide for each programming language in use. `std-code-style-guide-01`
2. A widely recognised, published style guide, such as `PEP 8` for Python or the `Google Style Guides` for Java, **SHOULD** be preferred over a bespoke or self-written one for a language it already covers. `std-code-style-guide-02`
3. The adopted style guide **MUST** be documented and discoverable, such as through a repository's `README` or a location linked from it. `std-code-style-guide-03`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Formatting & Layout

### Summary

Formatting and layout follow the adopted style guide consistently, applied deterministically by automated tooling.

### Standards

1. A formatting or layout concern defined by the adopted style guide, such as indentation, line length, or whitespace, **MUST** be applied consistently throughout a codebase. `std-code-formatting-layout-01`
2. Where an individual author's formatting or layout preference conflicts with the adopted style guide, the style guide **MUST** take precedence. `std-code-formatting-layout-02`
3. Formatting applied by an automated tool **MUST** be deterministic. `std-code-formatting-layout-03`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Formatting Configuration

### Summary

Formatting behaviour is defined in simple, stable, version-controlled codebase configuration for every in-scope file type, with customisation limited to current engineering needs.

### Standards

1. Formatting behaviour **MUST** be defined in versioned configuration held within a codebase, such as an `.editorconfig` file. `std-code-formatting-configuration-01`
2. A codebase **SHOULD** define formatting configuration for each in-scope file type it holds. `std-code-formatting-configuration-02`
3. Formatting configuration **SHOULD** be simple and stable. `std-code-formatting-configuration-03`
4. Formatting configuration **SHOULD NOT** carry customisation beyond what an actual, current engineering need justifies. `std-code-formatting-configuration-04`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Codebase Coverage

### Summary

The adopted style guide applies uniformly, whether code was written by an engineer or produced with AI assistance.

### Standards

1. The adopted style guide **MUST** apply uniformly across a codebase, regardless of whether a given part of it was authored by an engineer or produced with AI assistance. `std-code-codebase-coverage-01`
2. Coding standards **MUST** be applied to every kind of code a repository holds, including application code, infrastructure code, and pipeline definitions. `std-code-codebase-coverage-02`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Comments & Documentation

### Summary

A comment explains why code exists or behaves as it does, obsolete code is deleted, and public interfaces use the appropriate documentation convention.

### Standards

1. A comment **SHOULD** explain why a piece of code exists or behaves as it does. `std-code-comments-documentation-01`
2. Commented-out code **MUST NOT** be left in a codebase. `std-code-comments-documentation-02`
3. Code no longer required **MUST** be deleted. `std-code-comments-documentation-03`
4. A publicly exposed interface **SHOULD** be documented using the appropriate convention for its type, such as a language's doc-comment convention or an API specification. `std-code-comments-documentation-04`

### Related Standards

- [API Design](../architecture-system-design/api-design.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Generated Files

### Summary

A generated file's formatting is controlled by its generation process and remains stable when its source is unchanged.

### Standards

1. A generated file **SHOULD NOT** be manually reformatted. `std-code-generated-files-01`
2. Where a generated file must conform to the adopted style guide, its generation process **SHOULD** be adjusted instead. `std-code-generated-files-02`
3. Where a generated file is committed to a codebase, regenerating it without an underlying change **SHOULD NOT** produce an unnecessary formatting difference. `std-code-generated-files-03`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Automated Enforcement

### Summary

Coding standards are applied through automated tooling as work proceeds, including code an AI tool formats.

### Standards

1. Coding standards **SHOULD** be applied through automated tooling, such as an IDE-integrated tool or a pre-commit hook. `std-code-automated-enforcement-01`
2. Formatting applied or modified by an AI tool **MUST** conform to the adopted style guide through the same automated mechanism used for other content. `std-code-automated-enforcement-02`

### Related Standards

- [Linting & Style Enforcement](linting-style-enforcement.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Code Review

### Summary

Automated tooling identifies formatting concerns, and recurring concerns trigger improvements to that automation.

### Standards

1. A reviewer **SHOULD NOT** be expected to identify or comment on a formatting concern that automated tooling could address instead. `std-code-code-review-01`
2. A formatting concern that recurs across multiple reviews **SHOULD** be treated as a signal that automation needs improvement. `std-code-code-review-02`

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Formatting-Only Changes

### Summary

A formatting-only change stays separate from a functional one, so each remains distinguishable in the history.

### Standards

1. A formatting-only change **SHOULD** be kept separate from a functional change, so the two remain distinguishable in the change history. `std-code-formatting-only-changes-01`
2. A broad or codebase-wide reformatting change **SHOULD NOT** be combined with a refactor, feature change, or dependency upgrade in the same change. `std-code-formatting-only-changes-02`

### Related Standards

- [Version Control](version-control.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
