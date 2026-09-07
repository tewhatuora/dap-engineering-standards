# Containerisation

## Summary

> A container image is kept minimal, current, and operated with least privilege by default.

## Standards

### Minimal Image Footprint

> A container image includes only what its runtime needs, with build-time content excluded from the production image.

1. A base image **MUST** be sourced only through a governed internal proxy service, and limited to the packages and tools the service's runtime requires.
2. A production image **MUST NOT** include build-time tooling or source artifacts beyond what the service requires to run.
3. A production image **SHOULD** exclude a package manager unnecessary at runtime.
4. A multi-stage build **SHOULD** be used where it keeps build-time content out of the image that is deployed.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Base Image Currency

> A base image is pinned to an immutable version, kept current, and rebuilt promptly after a critical disclosure that affects it.

1. A base image **MUST** be referenced by a fixed, immutable version or digest, not a floating or partial tag capable of later resolving to different content.
2. A production image **SHOULD** be rebuilt on a routine cadence so it receives upstream base-image security patches even where the service's own code has not changed.
3. A production image **MUST** be rebuilt promptly following disclosure of a critical vulnerability affecting its base image and **MUST NOT** wait for the routine cadence.
4. A base image or runtime approaching its upstream end-of-life **MUST** be migrated to a supported version before that date.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Image Build Hygiene

> A container image's build stays free of unpinned packages, stray files, and a credential supplied any way other than a build-time secret.

1. A package installed into a container image **MUST** be pinned to a specific version, where the package manager supports it.
2. A package manager's cache or index data **MUST NOT** remain in the production image.
3. A container image's build context **MUST** exclude a secret or sensitive file not required to build the image, such as a local credential or environment file.
4. A credential needed only during the build, such as a private package registry token, **MUST** be supplied through a build-time secret mechanism that does not persist it in the image or build metadata.
5. A container image's layers **SHOULD** be ordered from least to most frequently changing, such as an installed package before the service's own application code, so an unchanged layer is not invalidated or retransferred on a rebuild.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

### Minimal Runtime Privilege

> A container runs as a non-root user, unprivileged, with only the capabilities its function requires, on a read-only filesystem.

1. A container **MUST** run as a non-root user by default.
2. A container **SHOULD NOT** run in privileged mode.
3. A container **MUST** be granted only the kernel capabilities its function requires, rather than the runtime's full default set.
4. A container's root filesystem **MUST** be mounted read-only by default; any path that requires write access **MUST** be explicitly declared and narrowly scoped.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

### Image Tagging & Immutability

> A container image carries a unique, immutable tag traceable to its build, never referenced by a floating tag like latest.

1. Beyond local development, a container image **MUST** carry a unique, immutable tag traceable to the build that produced it.
2. Beyond local development, a container image **MUST NOT** be published, deployed, or referenced by a floating tag, such as `latest`, capable of later resolving to different content.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Container Runtime Contract

> A long-running container reports its health where the runtime needs that signal and shuts down safely within a bounded period.

1. A long-running container whose process state does not establish its health **SHOULD** expose a defined health check mechanism.
2. A long-running container's process **MUST** handle a termination signal and complete or safely stop its work within a bounded period.

#### References

- [Container Orchestration](container-orchestration.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
