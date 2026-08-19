# Build & Artifact Management

## Summary

> Build once, and run that same artifact everywhere.

## Objective

This standard defines requirements for how a service's source code is built into a deployable artifact and how that artifact is managed throughout its lifecycle. It keeps every artifact traceable to the source and build that produced it, and unchanged from the point it is built.

## Standards

### Automated, Traceable Builds

These requirements set out how a deployable artifact is produced only through an automated pipeline tied to a specific, identifiable source commit.

1. A deployable artifact **MUST** be produced only by an automated build pipeline; it **MUST NOT** be assembled or uploaded manually.
2. A build **MUST** be triggered from, and remain traceable to, a specific, identifiable commit in a codebase's designated repository.
3. An artifact built from an unreviewed or unmerged change **MUST NOT** be eligible for deployment beyond a development environment.

#### References

- [Version Control](../code-implementation/version-control.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Automation First](../../principles/automation-first.md)
- [Continuous Integration](continuous-integration.md)

### Reproducible Build Inputs

These requirements describe how a build's environment and toolchain are held constant so the same source produces a functionally identical artifact.

1. A build **MUST NOT** depend on a manual step or on state specific to the machine or account that ran it; every step required to produce it **MUST** be captured in the automated pipeline itself.
2. A build **MUST** run in a clean, isolated environment free of state left over from a previous build, so its result depends only on its declared inputs.
3. A build's toolchain, such as a compiler, language runtime, or build tool, **MUST** be pinned to a specific version, so building the same source produces a consistent result regardless of when or where it runs.
4. A build step that introduces non-deterministic content into its own output **SHOULD** be avoided where it would prevent verifying two builds of the same source as identical.

#### References

- [Continuous Integration](continuous-integration.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Artifact Immutability & Identity

These requirements cover how a built artifact is uniquely identified and never altered after it is produced.

1. An artifact **MUST** be assigned a unique, traceable identifier at build time, linking it back to the source commit and build run that produced it.
2. A released artifact **MUST NOT** be modified, patched, or reassembled after it is built; a required change **MUST** instead be delivered as a new build carrying a new identifier.
3. A released artifact **MUST NOT** be referenced by a floating or mutable label capable of later resolving to different content; a consumer **MUST** be able to rely on a given reference always resolving to the same artifact.
4. An artifact built for testing or validation ahead of release, such as a snapshot or release candidate build, **MUST** be identifiable as such and **MUST NOT** be consumed as a released artifact.

#### References

- [Version Control](../code-implementation/version-control.md)

### Governed Artifact Repository

These requirements describe how a built artifact is stored only in an approved repository, and how publishing to it is restricted to an automated pipeline.

1. A built artifact **MUST** be stored in an approved artifact repository; it **MUST NOT** be distributed solely as a build job's own output or attachment.
2. Only an automated build pipeline **MAY** publish a new artifact version to the repository; an artifact **MUST NOT** be published manually.
3. Write access to the repository **MUST** be restricted to the automated pipeline's own identity; read access **SHOULD** be scoped to the teams and services that need it.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Artifact Integrity & Provenance

These requirements set out how an artifact's integrity and origin remain verifiable after it is produced.

1. An artifact **MUST** be verifiable against a checksum or digest recorded at build time, so tampering or corruption after publication is detectable.
2. Where the artifact repository or runtime supports it, an artifact **SHOULD** be cryptographically signed at build time; its signature **MUST** be preserved through storage and promotion, and verified before deployment.
3. An artifact's build provenance, including its source commit, pipeline run, any base runtime image it was built from, and software bill of materials, **MUST** be retained and associated with the artifact it describes.

#### References

- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Unmodified Artifact Promotion

These requirements address how a verified artifact is carried forward through every subsequent environment without being rebuilt or altered.

1. An artifact that has passed verification in one environment **MUST** be promoted unchanged into every subsequent environment; it **MUST NOT** be rebuilt, recompiled, or reassembled to reach a later stage.
2. Each promotion of an artifact into an environment **MUST** be recorded, preserving traceability from the artifact's identifier back to its source and build, and forward to the environment it was promoted into.

#### References

- [Configuration Management](../code-implementation/configuration-management.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Published Artifact Versioning

These requirements set out how an artifact published for another team or service to consume is versioned as it changes over time.

1. An artifact published for another team or service to consume, such as a shared library, package, or base image, **MUST** be versioned using a [Semantic Versioning](https://semver.org/) scheme, so a consumer can reason about compatibility before upgrading.
2. A breaking change to a published artifact **MUST** be released as a new major version.
3. A backward-compatible addition of functionality to a published artifact **MUST** be released as a new minor version.
4. A backward-compatible bug fix to a published artifact **MUST** be released as a new patch version.

#### References

- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
