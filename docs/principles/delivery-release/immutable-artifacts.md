---
last_edited: 2026-09-10
---

# Immutable Artifacts

## Immutable Artifact Identity

### Summary

Every built artifact has a unique, immutable identity, and any change produces a new artifact.

### Reasoning

Changing an artifact after it has been built breaks the relationship between its identity, source, verification results, and deployed content. The same reference can then describe different content depending on when or where it is used, making failures and deployments difficult to reproduce.

An immutable identity guarantees that a reference continues to identify the content that was originally built and verified. Producing a new artifact for every change preserves the earlier version and keeps both versions traceable to the builds that created them.

### Implemented By These Standards

- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Unmodified Artifact Promotion

### Summary

An artifact verified in one environment is promoted unchanged through all later environments.

### Reasoning

Rebuilding or modifying an artifact between environments creates new content that did not pass the earlier verification, even when it was produced from the same source. Production can then receive a difference that the preceding environments never exercised.

Promoting the same artifact preserves the evidence gathered about its behaviour and contents. It also makes differences between environments attributable to configuration or runtime conditions rather than to an untracked change in the artifact itself.

### Implemented By These Standards

- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)