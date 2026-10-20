---
last_edited: 2026-10-21
---

# Immutable Artifacts

## Immutable Artifact Identity

### Summary

Every built artifact has a unique, immutable identity, and any change produces a new artifact.

### Reasoning

Changing an artifact after it is built breaks the link between its identity, source, verification and security results, and deployed content. The same reference can then point to different content over time or across environments. This makes deployments harder to reproduce and failures harder to investigate.

An immutable identity guarantees that a reference always points to the content originally built and verified. Creating a new artifact for every change preserves the earlier version and lets engineers trace each version to the build that created it.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Unmodified Artifact Promotion

### Summary

An artifact verified in one environment is promoted unchanged through all later environments.

### Reasoning

Promoting an artifact unchanged preserves its provenance and keeps verification and security results tied to exactly what is deployed. Engineers can then trace differences between environments to configuration or runtime conditions rather than untracked changes to the artifact.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)