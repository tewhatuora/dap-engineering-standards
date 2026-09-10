---
last_edited: 2026-09-10
---

# Everything as Code

## Authoritative Version-Controlled Definitions

### Summary

Source code and every definition that controls system state are kept in version control as the authoritative record.

### Reasoning

A shared authoritative record gives teams one place to find the intended state, review changes, and establish who changed what. When undocumented operational work also defines state, the version-controlled definitions and the running system can disagree without that difference being visible.

Infrastructure, configuration, delivery pipelines, and database schemas control system behaviour just as application code does. Prototypes and scripts can also become deployed or depended upon, so recording all these definitions allows the intended state to be reviewed and recovered when a system must be rebuilt.

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

Systems and environments can be recreated consistently from code without undocumented manual steps.

### Reasoning

Recreating systems from code gives development, test, and production a consistent starting point and makes recovery independent of knowledge held by one person. Engineers can compare the definitions when environments differ instead of first reconstructing which manual actions may have been performed.

An undocumented step still changes the functional state even though the code does not record it. The next recreation can therefore produce a different system, leaving behaviour dependent on manual knowledge that cannot be reviewed or applied consistently.

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

Manual edits to generated output create a state that neither the source nor the generation process can reproduce. Those edits disappear when the artifact is generated again, while making the change in the source preserves it as part of the authoritative definition.

Stable output from unchanged inputs also makes meaningful changes easier to distinguish from incidental differences. Engineers can compare artifacts generated in different places and determine whether both came from the same source and process.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)

## Code-Defined Change Path

### Summary

Code-defined state changes through its reviewed and automated path, and any direct change to a running system is then recorded in code.

### Reasoning

Applying a change through the code-defined path records what changed, who reviewed it, and how the same state can be produced again. A direct change to a running system bypasses that record and allows the system to diverge from its authoritative definition.

Direct intervention may still be necessary to restore service quickly. Recording the resulting state in code preserves the correction, makes it available for later review, and prevents a subsequent automated change from unintentionally reversing it.

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

Putting a secret in code exposes its value through repository history, generated artifacts, and code review to people and systems that may not need it. Removing the value from the latest version does not remove it from existing history or copies.

Referencing a secret at runtime keeps storage and access within the secrets management system. It also allows credentials to be rotated or revoked without changing, reviewing, and rebuilding every code-defined artifact that uses them.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Documentation Changes with Behaviour

### Summary

Engineering documentation is version-controlled and updated in the same change as the behaviour it describes.

### Reasoning

Keeping documentation in version control preserves its history alongside the source changes it describes. Updating both in the same change allows reviewers to check that the explanation matches the implementation before the new behaviour is adopted.

When documentation is deferred, it can continue to describe an earlier system state and direct later work from incorrect information. Treating the documentation update as part of the behaviour change prevents that temporary mismatch from becoming established.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
