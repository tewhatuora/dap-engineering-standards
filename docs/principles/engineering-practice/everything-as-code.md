# Everything as Code

## Version-Controlled Source Code

### Summary

All application and service code lives in version control as its authoritative source, with no exception for a prototype or script.

### Reasoning

A shared authoritative repository makes source recoverable, reviewable, and attributable throughout its life.

Refusing a carve-out for prototypes, scripts, or short-lived work prevents code from becoming deployed or depended upon without an authoritative source.

### Implemented By These Standards

- [Version Control](../../standards/code-implementation/version-control.md)

### Related Principles

- [Code as the Single Source of Truth](#code-as-the-single-source-of-truth)

## Infrastructure as Code

### Summary

Infrastructure, environments, and platform resources are defined as code, never created or changed through a manual action.

### Reasoning

Declarative definitions make intended infrastructure state repeatable and reviewable.

Manual, ad hoc actions create state without a reproducible definition and bypass the controls applied to code-defined changes.

### Implemented By These Standards

- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

### Related Principles

- [Code as the Single Source of Truth](#code-as-the-single-source-of-truth)
- [Reproducible Environments](#reproducible-environments)

## Code as the Single Source of Truth

### Summary

A system's version-controlled code is the single source of truth; its running state is derived from it, never the reverse.

### Reasoning

One authoritative source prevents disagreement between version-controlled definitions and running state about the system's intended state.

Deriving running state from code makes drift identifiable and gives reconciliation a defined direction.

### Implemented By These Standards

- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

### Related Principles

- [Automation First](automation-first.md)
- [Infrastructure as Code](#infrastructure-as-code)

## Same Review Discipline as Application Code

### Summary

Infrastructure, configuration, pipeline, and policy code go through the same review as application code.

### Reasoning

Infrastructure, configuration, pipeline, and policy code can change the same running systems and behaviour as application code.

Applying the same review discipline gives these changes equivalent scrutiny and accountability before they affect a running system.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)

### Related Principles

- [Version-Controlled Source Code](#version-controlled-source-code)
- [Documentation as Code](#documentation-as-code)

## Reproducible Environments

### Summary

An environment reproduces consistently from its code definition, without a manual step after creation.

### Reasoning

Recreation from code reduces environment-specific variance across development, test, and production instances.

Removing manual post-creation steps means the code definition captures the environment's complete functional state.

### Implemented By These Standards

- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)

### Related Principles

- [Infrastructure as Code](#infrastructure-as-code)

## As Code Beyond Infrastructure

### Summary

The as-code approach extends to application configuration, delivery pipelines, and database schema, not only infrastructure.

### Reasoning

Application configuration, delivery pipelines, and database schema change system behaviour and benefit from the same traceability and repeatability as infrastructure definitions.

Manually maintained definitions create state that cannot be reviewed, reproduced, or changed through the code-defined path.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)

### Related Principles

- [Infrastructure as Code](#infrastructure-as-code)

## Externalised Secrets

### Summary

A secret never lives inside code; a code-defined artifact instead references it from a dedicated secrets mechanism.

### Reasoning

Embedding a secret in code spreads it through repository history, generated artifacts, and review access beyond the people and systems that require it.

Runtime references allow credentials to be rotated independently of code and keep their handling within a dedicated secrets mechanism.

### Related Principles

- [Security by Design](../security-privacy/security-by-design.md)

## Documentation as Code

### Summary

Engineering documentation stays version-controlled and updated in the same change that alters the behaviour it describes.

### Reasoning

Version-controlled documentation keeps its history and review traceable to the source and behaviour it describes.

Updating documentation with the behaviour change prevents it from describing an earlier system state and directing later work from incorrect information.

### Implemented By These Standards

- [Engineering Documentation Standards](../../standards/documentation-collaboration/engineering-documentation.md)

### Related Principles

- [Same Review Discipline as Application Code](#same-review-discipline-as-application-code)
