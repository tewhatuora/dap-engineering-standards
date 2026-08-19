# Code Implementation

## Overview
The way software is implemented affects how consistently it can be understood, reviewed, maintained, and changed, and this section sets out the standards that ensure implementation remains consistent, controlled, and secure.

Choose a standard below to see its full requirements.

## Directory

#### Version Control

> Hold all code in one authoritative, attributable repository, and never let a secret enter its history.

[Read more](version-control.md).

#### Branching Strategy

> Every repository follows one defined branching model, with short-lived branches merged only through reviewed changes.

[Read more](branching-strategy.md).

#### Coding Standards & Formatting

> One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

[Read more](coding-standards-formatting.md).

#### Linting & Style Enforcement

> A linter checks every codebase continuously, and a blocking violation **MUST** be fixed, not silently suppressed.

[Read more](linting-style-enforcement.md).

#### Static Code Analysis

> Static analysis continuously inspects code for defects, security weaknesses, and maintainability decline, not just style.

[Read more](static-code-analysis.md).

#### Code Review

> Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

[Read more](code-review.md).

#### Configuration Management

> Externalise a setting that varies by environment, and never let a secret live in configuration.

[Read more](configuration-management.md).

#### Dependency & Runtime Management

> Select every dependency and runtime deliberately, source it only through governed channels, and keep it current.

[Read more](dependency-runtime-management.md).

#### Data Access & Transaction Management

> Access a data store only through a defined layer, using parameterised queries and bounded, explicit transactions.

[Read more](data-access-transaction-management.md).

#### Database Migration Tooling

> Define every schema or data change as version-controlled migration code, never as an ad hoc query.

[Read more](database-migration-tooling.md).
