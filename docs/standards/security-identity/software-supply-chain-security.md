# Software Supply Chain Security

## Namespace Isolation

### Summary

Internal packages and container images use organisation-owned namespaces that cannot resolve from untrusted public sources.

### Standards

1. `std-sec-namespace-isolation-01` An internal package, library, or container image **SHOULD** be published and consumed under an organisation-owned namespace, scope, or registry repository.
2. `std-sec-namespace-isolation-02` Package manager and container registry configurations **MUST** prevent an internal artifact name from resolving to an artifact from an untrusted public source.

### Related Standards

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Containerisation](../platform-infrastructure/containerisation.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Build Tooling

### Summary

Pipeline extensions and build tools come from approved sources, have verified integrity, and use immutable references; changes to maintained forks are reviewed before use.

### Standards

1. `std-sec-build-tooling-01` Third-party pipeline extensions, utilities, and build tooling **MUST** be obtained from an approved source and have their integrity verified before execution.
2. `std-sec-build-tooling-02` Third-party pipeline extensions, utilities, and build tooling **MUST** be pinned to an immutable reference, such as a full commit SHA or cryptographic checksum.
3. `std-sec-build-tooling-03` Third-party pipeline extensions, utilities, and build tooling **MUST NOT** rely on a mutable version tag or branch reference.
4. `std-sec-build-tooling-04` A third-party component or pipeline extension **MAY** be forked where upstream cannot meet security or immutable pinning requirements.
5. `std-sec-build-tooling-05` A change from upstream **MUST NOT** enter a maintained fork automatically without review.
6. `std-sec-build-tooling-06` An upstream change to a forked component or pipeline extension **MUST** be evaluated for security impact and pass code review before it is merged.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Release Maturity

### Summary

Production ordinarily uses supported stable dependencies; pre-release evaluation remains in non-production, and new versions undergo a defined risk-based soak period unless vulnerability remediation requires faster adoption.

### Standards

1. `std-sec-release-maturity-01` A dependency or runtime version used in production **SHOULD** be a supported stable release.
2. `std-sec-release-maturity-02` A pre-release build **MAY** be evaluated in a non-production environment.
3. `std-sec-release-maturity-03` A newly published version **SHOULD** complete a defined soak period proportionate to its risk before production adoption, except where vulnerability remediation requires faster action.

### Related Standards

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Containerisation](../platform-infrastructure/containerisation.md)
- [Vulnerability & Dependency Management](vulnerability-dependency-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Compromise Response

### Summary

Confirmed upstream compromises are blocked from further use, traced to affected services and pipelines, and remediated outside routine maintenance timelines.

### Standards

1. `std-sec-compromise-response-01` A third-party component confirmed compromised at its source **MUST** be prevented from further acquisition or use.
2. `std-sec-compromise-response-02` Where a dependency is confirmed compromised, affected services and built artifacts **MUST** be identified through a current component inventory and remediated outside standard vulnerability timelines.
3. `std-sec-compromise-response-03` Where a pipeline extension or build tool is confirmed compromised, affected pipelines and repositories **MUST** be identified and updated outside standard maintenance cycles.

### Related Standards

- [Vulnerability & Dependency Management](vulnerability-dependency-management.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
