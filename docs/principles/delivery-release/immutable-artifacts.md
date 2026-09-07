# Immutable Artifacts

## Immutable Artifact Identity

### Summary

A built artifact has a unique, immutable identity, and a change to it produces a new artifact.

### Reasoning

Changing an artifact after it has been built breaks the relationship between its identifier, source, verification result, and deployed content. An immutable identity allows a consumer to determine exactly which build it is using and to rely on that reference continuing to identify the same content.

Producing a new artifact for every change preserves the earlier artifact and keeps each version traceable to the build that created it.

### Implemented By These Standards

- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Unmodified Artifact Promotion

### Summary

An artifact verified in one environment is promoted unchanged through every later environment.

### Reasoning

Rebuilding or modifying an artifact between environments means production receives content that did not pass the earlier verification. Promoting the same artifact preserves the evidence gathered about it and makes differences between environments attributable to configuration or runtime conditions rather than an untracked rebuild.

### Implemented By These Standards

- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)