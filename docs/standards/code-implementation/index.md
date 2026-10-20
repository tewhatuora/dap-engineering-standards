---
last_edited: 2026-10-20
---

# Code Implementation

## Overview

Code implementation standards require software to be consistent, maintainable, traceable, and secure.

Choose a standard below to read it in full.

## Standards

### [Version Control](version-control.md)

Every codebase is held in one authoritative, traceable repository that excludes secrets from its history.

### [Branching Strategy](branching-strategy.md)

Every repository follows one defined branching model, with short-lived branches merged through reviewed and verified changes.

### [Code Style & Formatting](code-style-formatting.md)

One style guide per language, applied consistently regardless of whether a person or an AI wrote the code.

### [Linting & Style Enforcement](linting-style-enforcement.md)

Automated linting is applied consistently, with blocking violations resolved through the normal engineering process.

### [Static Code Analysis](static-code-analysis.md)

Static analysis continuously checks code for defects, security weaknesses, and maintainability issues, beyond style and formatting.

### [Code Review](code-review.md)

Every change is reviewed and approved by someone other than its author, with scrutiny proportionate to its risk.

### [Configuration Management](configuration-management.md)

Settings that vary by environment are externalised, and secrets are excluded from configuration.

### [Dependency & Runtime Management](dependency-runtime-management.md)

Every dependency and runtime is deliberately selected, sourced through governed channels, and kept current.

### [Data Access & Transaction Management](data-access-transaction-management.md)

Data access uses a defined layer, safe queries, and explicit, bounded transactions.

### [Database Migration Tooling](database-migration-tooling.md)

Every planned schema or data change is defined as version-controlled migration code and applied consistently through dedicated tooling.
