# Dependency & Runtime Management

Every dependency and runtime is deliberately selected, sourced through governed channels, and kept current.

## Dependency Selection

### Summary

A dependency is chosen for a verifiable publisher, active maintenance, and adoption by the wider community.

### Standards

1. `std-code-dependency-selection-01` A dependency **SHOULD** be sourced from a publisher with an established, verifiable identity, such as a recognised open-source project, foundation, or organisation; an anonymous or unverifiable publisher carries materially higher risk.
2. `std-code-dependency-selection-02` A dependency **SHOULD** show evidence of active maintenance, such as a recent release or responsive issue handling, before it is adopted; one showing no such evidence over a sustained period **SHOULD** be treated as stale.
3. `std-code-dependency-selection-03` A dependency's adoption by the wider community, such as its download volume or use by other well-established projects, **SHOULD** be weighed before it is adopted; a dependency with minimal external adoption carries materially higher risk if it is abandoned or later found to be compromised.

### Related Standards

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Licence Compatibility

### Summary

A dependency's licence is checked for compatibility before adoption, and any incompatibility found later is remediated.

### Standards

1. `std-code-licence-compatibility-01` A dependency's licence **MUST** be reviewed for compatibility with how the service will use it before the dependency is adopted.
2. `std-code-licence-compatibility-02` A dependency whose licence is incompatible or unclear **MUST NOT** be adopted.
3. `std-code-licence-compatibility-03` A licence incompatibility discovered in an already-adopted dependency **MUST** be remediated, whether by replacing the dependency or obtaining a compatible licence.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Dependency Sources

### Summary

A dependency is sourced only through a governed internal proxy, with its integrity verifiable before it is installed.

### Standards

1. `std-code-dependency-sources-01` A dependency **MUST NOT** be resolved directly against the public internet.
2. `std-code-dependency-sources-02` A dependency **MUST** be sourced only through a governed internal proxy service.
3. `std-code-dependency-sources-03` A governed internal proxy **MUST** be configured to allow, restrict, cache, or block a specific registry or package according to organisational policy.
4. `std-code-dependency-sources-04` A dependency's integrity **MUST** be verifiable before it is installed, whether via a checksum or signature recorded in a lockfile, or automatically verified against the source repository's checksum.

### Related Standards

- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Dependency Declaration

### Summary

Every direct dependency is explicitly declared with an appropriate version constraint, and undeclared dependencies are excluded.

### Standards

1. `std-code-dependency-declaration-01` A codebase **MUST** explicitly declare every direct dependency in a version-controlled dependency manifest using a version constraint appropriate to its package ecosystem.
2. `std-code-dependency-declaration-02` A codebase **MUST NOT** rely on an undeclared dependency, such as one installed globally, or available only as a transitive dependency of another.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Reproducible Resolution

### Summary

A build uses its package ecosystem's reproducible resolution mechanism so dependencies resolve consistently everywhere it runs.

### Standards

1. `std-code-reproducible-resolution-01` Where a package ecosystem supports a lockfile, a codebase's complete resolved dependency set, including every transitive dependency, **MUST** be captured in that lockfile and committed to version control.
2. `std-code-reproducible-resolution-02` Where a lockfile is used, a build or deployment **MUST** install the exact dependency versions it records.
3. `std-code-reproducible-resolution-03` A build or deployment **MUST NOT** resolve to dependency versions that differ between equivalent runs.
4. `std-code-reproducible-resolution-04` A lockfile **MUST** be regenerated and reviewed as part of the same change that adds, removes, or updates a dependency.

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Transitive Dependencies

### Summary

A team remains responsible for the operational and security impact of direct and transitive dependencies.

### Standards

1. `std-code-transitive-dependencies-01` A team **MUST** remain responsible for the operational and security impact of each direct and transitive dependency.
2. `std-code-transitive-dependencies-02` A transitive dependency problem **MUST** be remediated: upgrading the direct dependency that introduces it, overriding the affected version where safe, or replacing the dependency path entirely.

### Related Standards

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Software Bill of Materials (SBOM)

### Summary

Every release generates a machine-readable SBOM of its actual resolved dependencies, retained for later inspection.

### Standards

1. `std-code-software-bill-of-materials-sbom-01` An SBOM reflecting a service's actual resolved dependency versions, including transitive dependencies, **MUST** be generated for every release artifact built.
2. `std-code-software-bill-of-materials-sbom-02` An SBOM **MUST** be generated from the resolved dependency set so it reflects what the built artifact actually contains.
3. `std-code-software-bill-of-materials-sbom-03` An SBOM **MUST** be produced in a standard, machine-readable format, such as [SPDX](https://spdx.dev/) or [CycloneDX](https://cyclonedx.org/).
4. `std-code-software-bill-of-materials-sbom-04` An unstructured or bespoke format **MUST NOT** be used.
5. `std-code-software-bill-of-materials-sbom-05` A generated SBOM **MUST** be retained or published in a location accessible for later inspection, for at least as long as the release artifact it describes remains supported.
6. `std-code-software-bill-of-materials-sbom-06` An SBOM **MUST** be available to support rapid identification of an affected service when a new vulnerability in a dependency is disclosed.

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Dependency Maintenance

### Summary

Dependencies are updated in small, tested increments on a routine cadence, reassessed when maintenance lapses, removed when their last use is removed, and remediated on risk-proportionate timelines when vulnerable.

### Standards

1. `std-code-dependency-maintenance-01` Available dependency updates **SHOULD** be reviewed on a routine cadence, with automated tooling used to detect and raise them where available.
2. `std-code-dependency-maintenance-02` A dependency that no longer shows evidence of active maintenance after adoption **SHOULD** be reassessed against the same criteria applied when it was first selected.
3. `std-code-dependency-maintenance-03` A dependency that fails this reassessment **SHOULD** be replaced.
4. `std-code-dependency-maintenance-04` A routine dependency update **MUST** be tested and merged through the same change process as any other code change.
5. `std-code-dependency-maintenance-05` A team **SHOULD** maintain a unit and integration test suite strong enough to give confidence that a dependency update has not introduced a defect.
6. `std-code-dependency-maintenance-06` A dependency no longer referenced by a codebase **SHOULD** be removed from its dependency manifest and lockfile in the same change that removes its last use.
7. `std-code-dependency-maintenance-07` A dependency with a known vulnerability **MUST** be remediated within its own risk-proportionate timeframe.
8. `std-code-dependency-maintenance-08` A dependency with a known vulnerability **MUST NOT** be deferred to this routine update cadence.
9. `std-code-dependency-maintenance-09` A dependency update **SHOULD** be applied in small, frequent increments; deferring it into an infrequent, large-scale upgrade compounds risk and effort.

### Related Standards

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Runtime Maintenance

### Summary

A service uses a supported runtime version, prefers a long-term-support channel where available, and upgrades before end-of-life.

### Standards

1. `std-code-runtime-maintenance-01` A service **MUST** run on a language or platform runtime version still receiving security updates from its publisher.
2. `std-code-runtime-maintenance-02` A version that has reached end-of-life **MUST NOT** be used in production.
3. `std-code-runtime-maintenance-03` Where a runtime's publisher offers a long-term-support release channel, a production service **SHOULD** use it because it requires supported upgrades less often.
4. `std-code-runtime-maintenance-04` A runtime version approaching the end of its supported life **SHOULD** be upgraded proactively, before it reaches end-of-life.

### Related Standards

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
