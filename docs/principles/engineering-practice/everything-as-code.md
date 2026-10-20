---
last_edited: 2026-10-21
---

# Everything as Code

## Authoritative Definitions in Version Control

### Summary

Source code and all definitions that control system state are kept in version control as the authoritative record.

### Reasoning

Version control gives engineers one place to find the intended system state and review its history. Changes made outside that record can leave the running system out of sync with its definitions, with no record of what changed.

Infrastructure, configuration, delivery pipelines, database schemas, and automation scripts control system behaviour just as application code does. Prototypes may also be deployed or become dependencies. Keeping these definitions in version control lets teams review the intended state and restore it when rebuilding a system.

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

Systems and environments can be recreated consistently from code without manual steps.

### Reasoning

Recreating systems from code gives development, test, and production environments a consistent starting point. Recovery then does not depend on one person's knowledge. When environments differ, engineers can compare their definitions rather than work out which manual changes were made.

Manual changes are not captured in code. Engineers have to repeat each step correctly whenever they recreate the system, with a risk of missing a step or carrying it out differently.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Deterministic Generation

### Summary

A generated artifact can be recreated from its authoritative source using the same generation process, without manual edits.

### Reasoning

Direct edits to a generated artifact are lost when it is regenerated. Changing the authoritative source carries the change through to future artifacts.

Producing the same output from unchanged inputs makes unexpected differences between builds visible. Engineers can then trace a difference to a change in the source, declared inputs, or generation process.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)

## Code as the Change Path

### Summary

Changes to system state follow a reviewed, automated process defined in code, and any changes made directly to a running system are also incorporated into that code.

### Reasoning

Changing system state through code gives engineers a record they can review and use to recreate that state. Direct changes to a running system leave the code out of sync with the system.

Direct changes may be needed to restore service. Recording them in code keeps the authoritative definition accurate and prevents later automation from undoing them.

### Implemented By These Standards

- [Branching Strategy](../../standards/code-implementation/branching-strategy.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Secrets Outside Code

### Summary

Secrets are stored in a dedicated secrets management system, and code references them without including their values.

### Reasoning

Putting a secret in code can expose it through repository history, generated artifacts, and code review. Removing the value from the latest version does not remove it from history or existing copies.

Referencing a secret at runtime keeps its storage and access within the secrets management system. Engineers can then rotate or revoke credentials without changing and rebuilding every code-defined artifact that uses them.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Documentation Changes with Behaviour

### Summary

Engineering documentation is version-controlled and updated in the same change as the behaviour it describes.

### Reasoning

Version control keeps documentation history alongside the source changes it describes. Updating both together lets reviewers check that the explanation matches the implementation before the new behaviour is adopted.

Delaying a documentation update leaves engineers with an outdated description of the system. They may make changes or respond to incidents based on behaviour that no longer exists.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
