# Code Implementation Overview

## [Version Control](version-control.md)

_Hold all code in one authoritative, attributable repository, and never let a secret enter its history._

## [Branching Strategy](branching-strategy.md)

_Every repository follows one defined branching model, with short-lived branches merged only through reviewed changes._

## [Coding Standards & Formatting](coding-standards-formatting.md)

_One style guide per language, applied consistently regardless of whether a person or an AI wrote the code._

## [Linting & Style Enforcement](linting-style-enforcement.md)

_A linter checks every codebase continuously, and a blocking violation must be fixed, not silently suppressed._

## [Static Code Analysis](static-code-analysis.md)

_Static analysis continuously inspects code for defects, security weaknesses, and maintainability decline, not just style._

## [Code Review](code-review.md)

_Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk._

## [Configuration Management](configuration-management.md)

_Externalise a setting that varies by environment, and never let a secret live in configuration._

## [Dependency & Runtime Management](dependency-runtime-management.md)

_Select every dependency and runtime deliberately, source it only through governed channels, and keep it current._

## [Data Access & Transaction Management](data-access-transaction-management.md)

_Access a data store only through a defined layer, using parameterised queries and bounded, explicit transactions._

## [Database Migration Tooling](database-migration-tooling.md)

_Define every schema or data change as version-controlled migration code, never as an ad hoc query._
