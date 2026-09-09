---
last_edited: 2026-09-09
---

# Containerisation

## Minimal Images

### Summary

A container image uses a governed minimal base and includes only runtime content, with build-time tools and artifacts excluded.

### Standards

1. `std-plat-minimal-images-01` A base image **MUST** be sourced only through a governed internal proxy service, and limited to the packages and tools the service's runtime requires.
2. `std-plat-minimal-images-02` A production image **MUST NOT** include build-time tooling or source artifacts beyond what the service requires to run.
3. `std-plat-minimal-images-03` A production image **SHOULD** exclude a package manager unnecessary at runtime.
4. `std-plat-minimal-images-04` A multi-stage build **SHOULD** be used where it keeps build-time content out of the image that is deployed.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Base Image Maintenance

### Summary

A base image uses an immutable reference, remains current, and is rebuilt promptly after a critical disclosure that affects it.

### Standards

1. `std-plat-base-image-maintenance-01` A base image **MUST** be referenced by a digest or registry-enforced immutable version.
2. `std-plat-base-image-maintenance-02` A production image **SHOULD** be rebuilt on a routine cadence so it receives upstream base-image security patches even where the service's own code has not changed.
3. `std-plat-base-image-maintenance-03` A production image **MUST** be rebuilt promptly following disclosure of a critical vulnerability affecting its base image, without waiting for the routine rebuild cadence.
4. `std-plat-base-image-maintenance-04` A base image or runtime approaching its upstream end-of-life **MUST** be migrated to a supported version before that date.

### Related Standards

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Image Builds

### Summary

A container image build pins packages, excludes caches and unrelated sensitive files, supplies temporary credentials through build-time secrets, and orders layers to preserve reusable content.

### Standards

1. `std-plat-image-builds-01` A package installed into a container image **MUST** be pinned to a specific version, where the package manager supports it.
2. `std-plat-image-builds-02` A package manager's cache or index data **MUST NOT** remain in the production image.
3. `std-plat-image-builds-03` A container image's build context **MUST** exclude a secret or sensitive file not required to build the image, such as a local credential or environment file.
4. `std-plat-image-builds-04` A credential needed only during the build, such as a private package registry token, **MUST** be supplied through a build-time secret mechanism that does not persist it in the image or build metadata.
5. `std-plat-image-builds-05` A container image's layers **SHOULD** be ordered from least to most frequently changing, such as an installed package before the service's own application code, so an unchanged layer is not invalidated or retransferred on a rebuild.

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Runtime Privileges

### Summary

A container runs as a non-root user by default, avoids privileged mode, receives only required capabilities, and uses a read-only root filesystem by default.

### Standards

1. `std-plat-runtime-privileges-01` A container **MUST** run as a non-root user by default.
2. `std-plat-runtime-privileges-02` A container **SHOULD NOT** run in privileged mode.
3. `std-plat-runtime-privileges-03` A container **MUST** be granted only the kernel capabilities its function requires.
4. `std-plat-runtime-privileges-04` A container's root filesystem **MUST** be mounted read-only by default.
5. `std-plat-runtime-privileges-05` Any path that requires write access **MUST** be explicitly declared and narrowly scoped.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Immutable Image References

### Summary

A container image beyond local development uses a unique, immutable reference traceable to its build.

### Standards

1. `std-plat-immutable-image-references-01` Beyond local development, a container image **MUST** have a unique, immutable reference, such as a digest or registry-enforced immutable tag, traceable to the build that produced it.
2. `std-plat-immutable-image-references-02` Beyond local development, a container image **MUST NOT** be published, deployed, or referenced by a floating tag, such as `latest`, capable of later resolving to different content.

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Runtime Behaviour

### Summary

A long-running container reports its health where the runtime needs that signal and shuts down safely within a bounded period.

### Standards

1. `std-plat-runtime-behaviour-01` A long-running container whose process state does not establish its health **SHOULD** expose a defined health check mechanism.
2. `std-plat-runtime-behaviour-02` A long-running container's process **MUST** handle a termination signal and complete or safely stop its work within a bounded period.

### Related Standards

- [Container Orchestration](container-orchestration.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
