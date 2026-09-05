# Software Supply Chain Security

## Summary

> Protect the supply chain by isolating internal namespaces, pinning build dependencies immutably, and quarantining compromised packages.

## Standards

### Namespace Isolation & Dependency Confusion

> Internal packages and container images are published under organisation-owned namespaces and resolved exclusively from governed proxies.

1. An internal package, library, or container image **SHOULD** be published and consumed under an organisation-owned namespace, scope, or registry repository.
2. Package manager and container registry configurations **MUST** resolve internal artifacts exclusively from the governed internal proxy service, preventing fallback to public registries for internal namespaces.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Containerisation](../platform-infrastructure/containerisation.md)

### Pipeline Dependencies & Build Tooling

> Pipeline extensions and build tools are sourced through governed proxies, pinned to immutable references, and maintained responsibly if forked.

1. Third-party pipeline extensions, utilities, and build tooling **MUST** be sourced through the governed internal proxy service or an internally maintained fork.
2. Third-party pipeline extensions, utilities, and build tooling **MUST** be pinned to an immutable reference, such as a full commit SHA or cryptographic checksum, and **MUST NOT** rely on a mutable version tag or branch reference.
3. A third-party component or pipeline extension **MAY** be forked where upstream cannot meet security or immutable pinning requirements; forked repositories **MUST NOT** automatically synchronize from upstream.
4. A forked component or pipeline extension **MUST** have an assigned owning team responsible for evaluating upstream changes, applying security patches, and merging updates through standard code review.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Release Maturity & Soak Period

> Production uses stable, generally available dependencies, and newly published releases observe a minimum soak period before adoption.

1. A dependency or runtime version used in production **MUST** be a stable, generally available release, not a pre-release build such as an alpha, beta, release candidate, or development snapshot; such a build **MAY** still be evaluated in a non-production environment.
2. A newly published stable or generally available version **SHOULD NOT** be adopted in production until a soak period of at least 7 days has elapsed, except where it remediates a vulnerability whose risk-proportionate timeframe requires faster action.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Containerisation](../platform-infrastructure/containerisation.md)
- [Vulnerability & Dependency Management](vulnerability-dependency-management.md)

### Compromise Response

> Confirmed upstream compromises are immediately quarantined in the internal proxy and remediated out-of-band across affected services and pipelines.

1. A third-party component confirmed compromised at its source **MUST** be blocked and quarantined in the governed internal proxy service.
2. Where a dependency is confirmed compromised, affected services and built artifacts **MUST** be identified using their software bill of materials (SBOM) and remediated out-of-band ahead of standard vulnerability timelines.
3. Where a pipeline extension or build tool is confirmed compromised, affected pipelines and repositories **MUST** be identified via code search or central template inventories and updated out-of-band ahead of standard maintenance cycles.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Vulnerability & Dependency Management](vulnerability-dependency-management.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
