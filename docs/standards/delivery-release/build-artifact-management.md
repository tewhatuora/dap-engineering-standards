---
last_edited: 2026-09-14
---

# Build & Artifact Management

## Automated Builds

### Summary

A deployable artifact comes only from an automated pipeline, traceable back to the specific commit that produced it.

### Standards

1. A deployable artifact **MUST** be produced only by an automated build pipeline. `std-del-automated-builds-01`
2. A deployable artifact **MUST NOT** be assembled or uploaded manually. `std-del-automated-builds-02`
3. A build **MUST** be triggered from, and remain traceable to, a specific, identifiable commit in a codebase's designated repository. `std-del-automated-builds-03`
4. An artifact built from an unreviewed or unmerged change **MUST NOT** be eligible for deployment beyond a development environment. `std-del-automated-builds-04`

### Related Standards

- [Continuous Integration](continuous-integration.md)
- [Version Control](../code-implementation/version-control.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Build Inputs

### Summary

A build runs from declared pipeline steps in a clean, isolated environment with a pinned toolchain and deterministic inputs.

### Standards

1. A build **MUST NOT** depend on a manual step or on state specific to the machine or account that ran it. `std-del-build-inputs-01`
2. Every step required to produce a build **MUST** be captured in the automated pipeline itself. `std-del-build-inputs-02`
3. A build **MUST** run in a clean, isolated environment free of state left over from a previous build, so its result depends only on its declared inputs. `std-del-build-inputs-03`
4. A build's toolchain, such as a compiler, language runtime, or build tool, **MUST** be pinned to a specific version, so building the same source produces a consistent result regardless of when or where it runs. `std-del-build-inputs-04`
5. A build step that introduces non-deterministic content into its own output **SHOULD** be avoided where it would prevent verifying two builds of the same source as identical. `std-del-build-inputs-05`

### Related Standards

- [Continuous Integration](continuous-integration.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Artifact Identity & Immutability

### Summary

A built artifact has an immutable reference and a unique, traceable identifier; changes produce new builds, and pre-release artifacts remain distinguishable from released artifacts.

### Standards

1. An artifact **MUST** be assigned a unique, traceable identifier at build time, linking it back to the source commit and build run that produced it. `std-del-artifact-identity-immutability-01`
2. A released artifact **MUST NOT** be modified, patched, or reassembled after it is built. `std-del-artifact-identity-immutability-02`
3. A required change to a released artifact **MUST** be delivered as a new build carrying a new identifier. `std-del-artifact-identity-immutability-03`
4. A released artifact **MUST NOT** be referenced by a floating or mutable label capable of later resolving to different content. `std-del-artifact-identity-immutability-04`
5. An artifact built for testing or validation ahead of release, such as a snapshot or release candidate build, **MUST** be identifiable as such. `std-del-artifact-identity-immutability-05`
6. An artifact built for testing or validation ahead of release, such as a snapshot or release candidate build, **MUST NOT** be consumed as a released artifact. `std-del-artifact-identity-immutability-06`

### Related Standards

- [Version Control](../code-implementation/version-control.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Artifact Repository

### Summary

A built artifact is published to an approved repository only by the automated pipeline, with write access restricted to the pipeline and read access limited to required consumers.

### Standards

1. A built artifact **MUST** be stored in an approved artifact repository. `std-del-artifact-repository-01`
2. A built artifact **MUST NOT** be distributed solely as a build job's own output or attachment. `std-del-artifact-repository-02`
3. A new artifact version **MUST** be published to the repository only by an automated build pipeline. `std-del-artifact-repository-03`
4. Write access to the repository **MUST** be restricted to the automated pipeline's own identity. `std-del-artifact-repository-04`
5. Read access **SHOULD** be scoped to the teams and services that need it. `std-del-artifact-repository-05`

### Related Standards

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Integrity & Provenance

### Summary

An artifact's checksum and build provenance remain verifiable, and any signature stays verifiable through deployment.

### Standards

1. An artifact **MUST** be verifiable against a checksum or digest recorded at build time, so tampering or corruption after publication is detectable. `std-del-integrity-provenance-01`
2. Where the artifact repository or runtime supports it, an artifact **SHOULD** be cryptographically signed at build time. `std-del-integrity-provenance-02`
3. Where an artifact is signed, its signature **MUST** be preserved through storage and promotion and verified before deployment. `std-del-integrity-provenance-03`
4. An artifact's build provenance, including its source commit, pipeline run, any base runtime image it was built from, and software bill of materials, **MUST** be retained and associated with the artifact it describes. `std-del-integrity-provenance-04`

### Related Standards

- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Artifact Promotion

### Summary

A verified artifact is promoted unchanged through every subsequent environment, with each promotion recorded.

### Standards

1. An artifact that has passed verification in one environment **MUST** be promoted unchanged into every subsequent environment. `std-del-artifact-promotion-01`
2. Each promotion of an artifact into an environment **MUST** be recorded, preserving traceability from the artifact's identifier back to its source and build, and forward to the environment it was promoted into. `std-del-artifact-promotion-02`

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Configuration Management](../code-implementation/configuration-management.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Artifact Versioning

### Summary

A published artifact uses a documented versioning scheme that communicates compatibility, with Semantic Versioning used where suitable.

### Standards

1. An artifact published for another team or service to consume, such as a shared library, package, or base image, **MUST** use a documented versioning scheme that communicates compatibility. `std-del-artifact-versioning-01`
2. Where [Semantic Versioning](https://semver.org/) is used, a breaking change **MUST** be released as a new major version. `std-del-artifact-versioning-02`
3. Where Semantic Versioning is used, a backward-compatible addition of functionality **MUST** be released as a new minor version. `std-del-artifact-versioning-03`
4. Where Semantic Versioning is used, a backward-compatible bug fix **MUST** be released as a new patch version. `std-del-artifact-versioning-04`

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)
