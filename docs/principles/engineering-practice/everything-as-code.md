# Everything as Code

## Authoritative Version-Controlled Definitions

### Summary

Source code and the definitions that determine system state live in version control as the authoritative record.

### Reasoning

A shared authoritative record makes intended state recoverable, reviewable, and attributable. Without it, version-controlled definitions and operational practices can define conflicting system behaviour.

Application and service code, infrastructure, configuration, delivery pipelines, and database schemas all determine system state. Prototypes and scripts can also become deployed or depended upon, so treating them as short-lived work does not remove the need for an authoritative source.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Reproducible State

### Summary

Systems and environments can be recreated consistently from their code-defined state without undocumented manual steps.

### Reasoning

Recreating systems from code reduces environment-specific variance across development, test, and production. It also makes recovery independent of knowledge or state held only by an individual.

Undocumented post-creation steps leave part of the functional state outside the code definition and prevent consistent recreation.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Code-Defined Change Path

### Summary

Code-defined state changes through its reviewed and automated change path, with direct changes to running state subsequently incorporated into code.

### Reasoning

Applying a change through the code-defined path preserves its review history, traceability, and repeatability. Manual or ad hoc actions create state outside those controls and allow running state to diverge from its authoritative definition.

Direct intervention can be necessary to restore service. Recording the resulting change in code keeps the definition authoritative and prevents the divergence from persisting.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Secrets Outside Code

### Summary

Secrets remain in a dedicated secrets management system, and code-defined artifacts reference them without containing their values.

### Reasoning

Embedding a secret in code exposes it through repository history, generated artifacts, and code review to people and systems that do not require it.

Referencing secrets at runtime allows credentials to be rotated independently of code and keeps their handling within the secrets management system.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Documentation Changes with Behaviour

### Summary

Engineering documentation stays version-controlled and updated in the same change that alters the behaviour it describes.

### Reasoning

Version control makes documentation changes reviewable and preserves their history alongside the source changes they describe.

Updating documentation with the behaviour change prevents it from describing an earlier system state and directing later work from incorrect information.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
