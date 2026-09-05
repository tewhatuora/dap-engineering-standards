# Everything as Code

## Authoritative Version-Controlled Definitions

### Summary

Source code and the definitions that determine system state live in version control as the authoritative record.

### Reasoning

A shared authoritative record makes intended state recoverable, reviewable, and attributable throughout its life. It prevents version-controlled definitions and running systems from presenting competing accounts of how a system is intended to behave.

This applies to application and service code, including prototypes and scripts, and to infrastructure, configuration, delivery pipelines, and database schemas. Excluding short-lived work allows it to become deployed or depended upon without an authoritative source.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Reproducible State

### Summary

Systems and environments reproduce consistently from their code-defined state without undocumented manual steps.

### Reasoning

Recreation from code reduces environment-specific variance across development, test, and production. It also makes recovery independent of knowledge or state held only by an individual.

Removing undocumented post-creation steps means the code definition captures the complete functional state needed to recreate the system or environment.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Code-Defined Change Path

### Summary

Changes to code-defined state pass through its reviewed and automated change path, and direct changes to running state are reconciled back into code.

### Reasoning

Applying a change through the code-defined path preserves its review, traceability, and repeatability. Manual or ad hoc actions create state outside those controls and allow running state to diverge from its authoritative definition.

An exceptional direct change can be necessary to restore service. Incorporating it into code preserves the authority of the definition and gives later reconciliation a defined direction.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Secrets Outside Code

### Summary

Secrets remain in a dedicated secrets mechanism, and code-defined artifacts reference them without containing their values.

### Reasoning

Embedding a secret in code spreads it through repository history, generated artifacts, and review access beyond the people and systems that require it.

Runtime references allow credentials to be rotated independently of code and keep their handling within a dedicated secrets mechanism.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Documentation Changes with Behaviour

### Summary

Engineering documentation stays version-controlled and updated in the same change that alters the behaviour it describes.

### Reasoning

Version-controlled documentation keeps its history and review traceable to the source and behaviour it describes.

Updating documentation with the behaviour change prevents it from describing an earlier system state and directing later work from incorrect information.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
