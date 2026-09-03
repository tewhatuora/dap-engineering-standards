# Containerisation Standards

## Summary

> A container image is kept minimal, current, and operated with least privilege by default.

## Standards

### Minimal Image Footprint

> A container image includes only what its runtime actually needs, with build-time content kept out through a multi-stage build.

1. A base image **MUST** be sourced only through a governed internal proxy service, and limited to the packages and tools the service's runtime requires.
2. A production image **MUST NOT** include build-time tooling or source artifacts beyond what the service requires to run.
3. A production image **SHOULD** exclude a package manager unnecessary at runtime.
4. A multi-stage build **MUST** be used to keep build-time content out of the image that is deployed.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Base Image Currency

> A base image is pinned to an immutable version, rebuilt on a routine cadence, and rebuilt promptly after a critical disclosure.

1. A base image **MUST** be referenced by a fixed, immutable version or digest, not a floating or partial tag capable of later resolving to different content.
2. A base image **MUST** be rebuilt automatically on a routine cadence, so it remains current with upstream security patches even where the service's own code has not changed.
3. A base image **MUST** be rebuilt promptly following a critical vulnerability disclosure, and **MUST NOT** be deferred to a routine cadence.
4. A base image or runtime approaching its upstream end-of-life **MUST** be migrated to a supported version before that date.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Image Build Hygiene

> A container image's build stays free of unpinned packages, stray files, and a credential supplied any way other than a build-time secret.

1. A package installed into a container image **MUST** be pinned to a specific version, where the package manager supports it.
2. The package manager's own cache or index data **MUST** be removed in the same build layer that installs the package.
3. A container image's build context **MUST** exclude a file not required to build the image, such as a local credential, environment file, or version control metadata.
4. A credential needed only during the build, such as a private package registry token, **MUST** be supplied through a build-time secret mechanism, not a build argument, environment variable, or copied file.
5. A container image's layers **SHOULD** be ordered from least to most frequently changing, such as an installed package before the service's own application code, so an unchanged layer is not invalidated or retransferred on a rebuild.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Security by Design](../../principles/security-by-design.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Minimal Runtime Privilege

> A container runs as a non-root user, unprivileged, with only the capabilities its function requires, on a read-only filesystem.

1. A container **MUST** run as a non-root user by default.
2. A container **MUST NOT** run in privileged mode.
3. A container **MUST** be granted only the kernel capabilities its function requires, rather than the runtime's full default set.
4. A container's root filesystem **MUST** be mounted read-only by default; any path that requires write access **MUST** be explicitly declared and narrowly scoped.

#### References

- [Security by Design](../../principles/security-by-design.md)

### Image Tagging & Immutability

> A container image carries a unique, immutable tag traceable to its build, never referenced by a floating tag like latest.

1. Beyond local development, a container image **MUST** carry a unique, immutable tag traceable to the build that produced it.
2. Beyond local development, a container image **MUST NOT** be published, deployed, or referenced by a floating tag, such as `latest`, capable of later resolving to different content.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Container Runtime Contract

> A container reports its own health through a defined check, and shuts down gracefully within a bounded period.

1. A container **MUST** expose a defined mechanism, such as a health check endpoint, that reports whether its process is functioning correctly.
2. A container's process **MUST** handle a termination signal and complete a graceful shutdown within a bounded period, rather than being forcibly stopped while work is still in progress.

#### References

- [Container Orchestration](container-orchestration.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
