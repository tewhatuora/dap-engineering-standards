# Code Implementation

## Overview

How software is implemented affects how easily it can be understood, reviewed, maintained, and changed. This section defines the engineering standards for consistent, maintainable, traceable, and secure implementation.

Choose a standard below to read it in full.

## Standards

### Version Control

Keep every codebase in one authoritative, traceable repository, and keep secrets out of its history.

[Read more](version-control.md).

### Branching Strategy

Every repository follows one defined branching model, with short-lived branches merged through reviewed and verified changes.

[Read more](branching-strategy.md).

### Code Style & Formatting

One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

[Read more](code-style-formatting.md).

### Linting & Style Enforcement

Apply automated linting consistently, with blocking violations resolved through the normal engineering process.

[Read more](linting-style-enforcement.md).

### Static Code Analysis

Static analysis continuously checks code for defects, security weaknesses, and maintainability issues, beyond style and formatting.

[Read more](static-code-analysis.md).

### Code Review

Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

[Read more](code-review.md).

### Configuration Management

Externalise a setting that varies by environment, and never let a secret live in configuration.

[Read more](configuration-management.md).

### Dependency & Runtime Management

Select every dependency and runtime deliberately, source it only through governed channels, and keep it current.

[Read more](dependency-runtime-management.md).

### Data Access & Transaction Management

Centralise data access behind a defined layer, with safe queries and explicit, bounded transactions.

[Read more](data-access-transaction-management.md).

### Database Migration Tooling

Define every schema or data change as version-controlled migration code, applied consistently through dedicated tooling.

[Read more](database-migration-tooling.md).
