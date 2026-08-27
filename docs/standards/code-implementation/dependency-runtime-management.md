# Dependency & Runtime Management

## Summary

> Select every dependency and runtime deliberately, source it only through governed channels, and keep it current.

## Standards

### Explicit Dependency Declaration

Every direct dependency is explicitly declared and pinned; nothing is relied on undeclared.

1. A codebase **MUST** explicitly declare every direct dependency in a version-controlled dependency manifest, pinned to a stable version.
2. A codebase **MUST NOT** rely on an undeclared dependency, such as one installed globally, or available only as a transitive dependency of another.

### Dependency Selection

A dependency is chosen for a verifiable publisher, active maintenance, and adoption by the wider community.

1. A dependency **SHOULD** be sourced from a publisher with an established, verifiable identity, such as a recognised open-source project, foundation, or organisation; an anonymous or unverifiable publisher carries materially higher risk.
2. A dependency **SHOULD** show evidence of active maintenance, such as a recent release or responsive issue handling, before it is adopted; one showing no such evidence over a sustained period **SHOULD** be treated as stale.
3. A dependency's adoption by the wider community, such as its download volume or use by other well-established projects, **SHOULD** be weighed before it is adopted; a dependency with minimal external adoption carries materially higher risk if it is abandoned or later found to be compromised.

#### References

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)

### Licence Compatibility

A dependency's licence is checked for compatibility before adoption, and any incompatibility found later is remediated.

1. A dependency's licence **MUST** be reviewed for compatibility with how the service will use it before the dependency is adopted; a dependency whose licence is incompatible or unclear **MUST NOT** be adopted.
2. A licence incompatibility discovered in an already-adopted dependency **MUST** be remediated, whether by replacing the dependency or obtaining a compatible licence.

### Transitive Dependency Responsibility

A team stays responsible for a transitive dependency's impact too, not only what it declares directly.

1. A team **MUST** remain responsible for the operational and security impact of a transitive dependency, not only a dependency it declares directly.
2. A transitive dependency problem **MUST** be remediated: upgrading the direct dependency that introduces it, overriding the affected version where safe, or replacing the dependency path entirely.

#### References

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Governed Dependency Sources

A dependency is sourced only through a governed internal proxy, with its integrity verifiable before it is installed.

1. A dependency **MUST NOT** be resolved directly against the public internet; it **MUST** be sourced only through a governed internal proxy service.
2. This internal proxy **MUST** be configured to allow, restrict, cache, or block a specific registry or package according to organisational policy.
3. A dependency's integrity **MUST** be verifiable before it is installed, whether via a checksum or signature recorded in a lockfile, or automatically verified against the source repository's checksum.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Reproducible Dependency Resolution

A build installs dependencies from a committed lockfile, resolving to the exact same versions everywhere it runs.

1. A codebase's complete resolved dependency set, including every transitive dependency, **MUST** be captured in its lockfile, committed to version control.
2. A build or deployment **MUST** install dependencies from this lockfile, resolving to the exact versions it records; it **MUST NOT** independently re-resolve version ranges at build time.
3. A lockfile **MUST** be regenerated and reviewed as part of the same change that adds, removes, or updates a dependency, so it never drifts from the dependency manifest it locks.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Software Bill of Materials (SBOM)

Every release generates a machine-readable SBOM of its actual resolved dependencies, retained for later inspection.

1. An SBOM reflecting a service's actual resolved dependency versions, including transitive dependencies, **MUST** be generated for every release artifact built.
2. An SBOM **MUST** be generated from the resolved, locked dependency set, not the declared manifest alone, so it reflects what the built artifact actually contains.
3. An SBOM **MUST** be produced in a standard, machine-readable format, such as [SPDX](https://spdx.dev/) or [CycloneDX](https://cyclonedx.org/). An unstructured or bespoke format **MUST NOT** be used.
4. A generated SBOM **MUST** be retained or published in a location accessible for later inspection, for at least as long as the release artifact it describes remains supported.
5. An SBOM **MUST** be available to support rapid identification of an affected service when a new vulnerability in a dependency is disclosed.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Dependency Currency & Removal

A dependency update runs on a routine cadence, and an unreferenced dependency is removed in the same change that drops its use.

1. A dependency update **MUST** be reviewed on a routine cadence, preferably detected and raised as a change by automated tooling, such as Dependabot, over manual effort.
2. A dependency that no longer shows evidence of active maintenance after adoption **SHOULD** be reassessed against the same criteria applied when it was first selected; a dependency that fails this reassessment **SHOULD** be replaced.
3. A routine dependency update **MUST** be tested and merged through the same change process as any other code change.
4. A team **SHOULD** maintain a unit and integration test suite strong enough to give confidence that a dependency update has not introduced a defect.
5. A dependency no longer referenced by a codebase **MUST** be removed from its dependency manifest and lockfile in the same change that removes its last use.
6. A dependency with a known vulnerability **MUST** be remediated within its own risk-proportionate timeframe, and **MUST NOT** be deferred to this routine update cadence.
7. A dependency update **SHOULD** be applied in small, frequent increments; deferring it into an infrequent, large-scale upgrade compounds risk and effort.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Security by Design](../../principles/security-by-design.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Automation First](../../principles/automation-first.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Pipeline & Workflow Dependencies

A pipeline's own workflow dependencies are sourced from a trusted publisher and pinned to an immutable reference.

1. A pipeline's workflow dependencies **MUST** be declared, sourced only from an approved and trusted publisher or repository, and reviewed with the same discipline as any other dependency.
2. A third-party workflow dependency **MUST** be pinned to an immutable reference, such as a full commit hash, not a mutable branch, tag, or version alias.
3. A workflow dependency that cannot meet these requirements but is otherwise justified **MAY** instead be forked and internally governed, with review on a risk-based cadence, not updated automatically from its original source.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Runtime Currency & Retirement

A service runs on a still-supported runtime version, upgraded proactively before it reaches end-of-life.

1. A service **MUST** run on a language or platform runtime version still receiving security updates from its publisher; a version that has reached end-of-life **MUST NOT** be used in production.
2. Where a runtime's publisher offers a long-term-support release channel, a production service **SHOULD** prefer it over a shorter-support release, since it needs a supported upgrade less often.
3. A runtime version approaching the end of its supported life **SHOULD** be upgraded proactively, before it reaches end-of-life.

#### References

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Version Maturity & Soak Period

Production uses only a stable release, and a newly published version waits out a soak period before it is adopted.

1. A dependency or runtime version used in production **MUST** be a stable, generally available release, not a pre-release build such as an alpha, beta, release candidate, or development snapshot; such a build **MAY** still be evaluated in a non-production environment.
2. A newly published stable or generally available version **SHOULD NOT** be adopted until a soak period of at least 7 days has elapsed.

#### References

- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
