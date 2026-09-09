---
last_edited: 2026-09-09
---

# Code Implementation

## Overview

Code implementation standards require software to be consistent, maintainable, traceable, and secure.

Choose a standard below to read it in full.

## Standards

### Version Control

Every codebase is held in one authoritative, traceable repository that excludes secrets from its history.

[Read more](version-control.md).

### Branching Strategy

Every repository follows one defined branching model, with short-lived branches merged through reviewed and verified changes.

[Read more](branching-strategy.md).

### Code Style & Formatting

One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

[Read more](code-style-formatting.md).

### Linting & Style Enforcement

Automated linting is applied consistently, with blocking violations resolved through the normal engineering process.

[Read more](linting-style-enforcement.md).

### Static Code Analysis

Static analysis continuously checks code for defects, security weaknesses, and maintainability issues, beyond style and formatting.

[Read more](static-code-analysis.md).

### Code Review

Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

[Read more](code-review.md).

### Configuration Management

Settings that vary by environment are externalised, and secrets are excluded from configuration.

[Read more](configuration-management.md).

### Dependency & Runtime Management

Every dependency and runtime is deliberately selected, sourced through governed channels, and kept current.

[Read more](dependency-runtime-management.md).

### Data Access & Transaction Management

Data access uses a defined layer, safe queries, and explicit, bounded transactions.

[Read more](data-access-transaction-management.md).

### Database Migration Tooling

Every planned schema or data change is defined as version-controlled migration code and applied consistently through dedicated tooling.

[Read more](database-migration-tooling.md).
