---
last_edited: 2026-09-11
---

# Everything as Code

## Authoritative Definitions in Version Control

### Summary

Source code and all definitions that control system state are kept in version control as the authoritative record.

### Reasoning

Version control provides one place to find the intended state and review its change history. Changes made outside that record can leave the running system in a different state without showing what changed.

Infrastructure, configuration, delivery pipelines, database schemas, and automation scripts control system behaviour just as application code does. Prototypes may also be deployed or become dependencies. Recording all these definitions allows teams to review the intended state and recover it when rebuilding a system.

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

Recreating systems from code gives development, test, and production environments a consistent starting point. It also prevents recovery from depending on knowledge held by one person. When environments differ, engineers can compare their definitions instead of reconstructing manual actions.

Changes made through manual steps are not captured in code. Each step must be repeated correctly whenever the system is recreated and may be missed or applied inconsistently.

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

A generated artifact can be reproduced from its authoritative source and generation process without manual edits.

### Reasoning

Changes made directly to a generated artifact are lost when it is regenerated. Making the change in the authoritative source ensures it appears in future artifacts.

Producing the same output from unchanged inputs makes unexpected differences between builds visible. A difference then indicates that the source, declared inputs, or generation process changed.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)

## Code as the Change Path

### Summary

Changes to system state follow a reviewed, automated process defined in code, and any direct changes to a running system are reflected in that code.

### Reasoning

Changing state through code creates a reviewable record and allows the state to be recreated. Changing a running system directly creates a difference that the code does not record.

Direct changes may be necessary to restore service. Recording them in code keeps the authoritative definition accurate and prevents later automation from reversing them.

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

Secrets are stored in a dedicated secrets management system, and code refers to them without containing their values.

### Reasoning

Putting a secret in code can expose it to people and systems through repository history, generated artifacts, and code review. Removing the value from the latest version does not remove it from existing history or copies.

Referencing a secret at runtime keeps its storage and access within the secrets management system. Credentials can then be rotated or revoked without changing and rebuilding every code-defined artifact that uses them.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Documentation Changes with Behaviour

### Summary

Engineering documentation is version-controlled and updated in the same change as the behaviour it describes.

### Reasoning

Keeping documentation in version control preserves its history alongside the source changes it describes. Updating both in the same change allows reviewers to check that the explanation matches the implementation before the new behaviour is adopted.

Delaying a documentation update leaves engineers working from an outdated description of the system. They may then make changes or respond to incidents based on behaviour that no longer exists.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
