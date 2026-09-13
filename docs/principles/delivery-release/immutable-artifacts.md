---
last_edited: 2026-09-14
---

# Immutable Artifacts

## Immutable Artifact Identity

### Summary

Every built artifact has a unique, immutable identity, and any change produces a new artifact.

### Reasoning

Changing an artifact after it has been built breaks the relationship between its identity, source, verification and security results, and what is deployed. The reference no longer identifies a consistent artifact over time or across environments, making deployments difficult to reproduce and failures difficult to investigate.

An immutable identity guarantees that a reference continues to identify the content that was originally built and verified. Producing a new artifact for every change preserves the earlier version and keeps both versions traceable to the builds that created them.

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

Promoting an artifact unchanged preserves its provenance and keeps verification and security results tied to exactly what is deployed. It also makes differences between environments attributable to configuration or runtime conditions rather than to an untracked change in the artifact itself.

### Implemented By These Standards

- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)