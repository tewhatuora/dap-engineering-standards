# Dependency & Runtime Management

## Objective

This standard defines requirements for how a service's dependencies and runtimes are selected, sourced, and kept current throughout their lifecycle. It keeps the risk a dependency or runtime carries visible and actively managed for as long as a service relies on it.

## Standards

### Explicit Dependency Declaration

These requirements set out how a codebase's dependencies are declared and pinned.

1. A codebase must explicitly declare every direct dependency in a version-controlled dependency manifest, pinned to a stable version.
2. A codebase must not rely on an undeclared dependency, such as one installed globally, or available only as a transitive dependency of another.

### Dependency Selection

These requirements guide how a dependency is selected for adoption.

1. A dependency should be sourced from a publisher with an established, verifiable identity, such as a recognised open-source project, foundation, or organisation; an anonymous or unverifiable publisher carries materially higher risk.
2. A dependency should show evidence of active maintenance, such as a recent release or responsive issue handling, before it is adopted; one showing no such evidence over a sustained period should be treated as stale.
3. A dependency's adoption by the wider community, such as its download volume or use by other well-established projects, should be weighed before it is adopted; a dependency with minimal external adoption carries materially higher risk if it is abandoned or later found to be compromised.

#### References

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)

### Licence Compatibility

These requirements address how a dependency's licence compatibility is reviewed and maintained.

1. A dependency's licence must be reviewed for compatibility with how the service will use it before the dependency is adopted; a dependency whose licence is incompatible or unclear must not be adopted.
2. A licence incompatibility discovered in an already-adopted dependency must be remediated, whether by replacing the dependency or obtaining a compatible licence.

### Transitive Dependency Responsibility

These requirements cover how a team's responsibility extends beyond a codebase's direct dependencies to the transitive dependencies those direct dependencies introduce.

1. A team must remain responsible for the operational and security impact of a transitive dependency, not only a dependency it declares directly.
2. A transitive dependency problem must be remediated: upgrading the direct dependency that introduces it, overriding the affected version where safe, or replacing the dependency path entirely.

#### References

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Governed Dependency Sources

These requirements describe how a dependency is sourced only through a governed proxy, so its integrity stays verifiable before use.

1. A dependency must not be resolved directly against the public internet; it must be sourced only through a governed internal proxy service.
2. This internal proxy must be configured to allow, restrict, cache, or block a specific registry or package according to organisational policy.
3. A dependency's integrity must be verifiable before it is installed, whether via a checksum or signature recorded in a lockfile, or automatically verified against the source repository's checksum.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Reproducible Dependency Resolution

Where a codebase's package ecosystem supports a lockfile, these requirements set out how a build's dependencies are held to the versions it captures, so a build resolves identically everywhere it runs.

1. A codebase's complete resolved dependency set, including every transitive dependency, must be captured in its lockfile, committed to version control.
2. A build or deployment must install dependencies from this lockfile, resolving to the exact versions it records; it must not independently re-resolve version ranges at build time.
3. A lockfile must be regenerated and reviewed as part of the same change that adds, removes, or updates a dependency, so it never drifts from the dependency manifest it locks.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Software Bill of Materials (SBOM)

These requirements set out how a software bill of materials (SBOM) is generated, formatted, and retained for a service's actual resolved dependencies.

1. An SBOM reflecting a service's actual resolved dependency versions, including transitive dependencies, must be generated for every release artifact built.
2. An SBOM must be generated from the resolved, locked dependency set, not the declared manifest alone, so it reflects what the built artifact actually contains.
3. An SBOM must be produced in a standard, machine-readable format, such as [SPDX](https://spdx.dev/) or [CycloneDX](https://cyclonedx.org/). An unstructured or bespoke format must not be used.
4. A generated SBOM must be retained or published in a location accessible for later inspection, for at least as long as the release artifact it describes remains supported.
5. An SBOM must be available to support rapid identification of an affected service when a new vulnerability in a dependency is disclosed.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Dependency Currency & Removal

These requirements guide how a codebase's dependencies are kept current on a routine cadence and removed once no longer needed, distinct from vulnerability-driven remediation.

1. A dependency update must be reviewed on a routine cadence, preferably detected and raised as a change by automated tooling, such as Dependabot, over manual effort.
2. A dependency that no longer shows evidence of active maintenance after adoption should be reassessed against the same criteria applied when it was first selected; a dependency that fails this reassessment should be replaced.
3. A routine dependency update must be tested and merged through the same change process as any other code change.
4. A team should maintain a unit and integration test suite strong enough to give confidence that a dependency update has not introduced a defect.
5. A dependency no longer referenced by a codebase must be removed from its dependency manifest and lockfile in the same change that removes its last use.
6. A dependency with a known vulnerability must be remediated within its own risk-proportionate timeframe, and must not be deferred to this routine update cadence.
7. A dependency update should be applied in small, frequent increments; deferring it into an infrequent, large-scale upgrade compounds risk and effort.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Security by Design](../../principles/security-by-design.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Automation First](../../principles/automation-first.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Pipeline & Workflow Dependencies

These requirements address how a build or deployment pipeline's own workflow dependencies are declared and sourced, such as a reusable component, action, template, or include, distinct from a service's application dependencies.

1. A pipeline's workflow dependencies must be declared, sourced only from an approved and trusted publisher or repository, and reviewed with the same discipline as any other dependency.
2. A third-party workflow dependency must be pinned to an immutable reference, such as a full commit hash, not a mutable branch, tag, or version alias.
3. A workflow dependency that cannot meet these requirements but is otherwise justified may instead be forked and internally governed, with review on a risk-based cadence, not updated automatically from its original source.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Runtime Currency & Retirement

These requirements describe how a service's runtime version is held to one still supported by its publisher, upgraded proactively before support lapses.

1. A service must run on a language or platform runtime version still receiving security updates from its publisher; a version that has reached end-of-life must not be used in production.
2. Where a runtime's publisher offers a long-term-support release channel, a production service should prefer it over a shorter-support release, since it needs a supported upgrade less often.
3. A runtime version approaching the end of its supported life should be upgraded proactively, before it reaches end-of-life.

#### References

- [Technology Stack Governance](../architecture-system-design/technology-stack-governance.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Version Maturity & Soak Period

These requirements cover how mature a dependency or runtime version's release is and how long it has been available before a service adopts it.

1. A dependency or runtime version used in production must be a stable, generally available release, not a pre-release build such as an alpha, beta, release candidate, or development snapshot; such a build may still be evaluated in a non-production environment.
2. A newly published stable or generally available version should not be adopted until a soak period of at least 7 days has elapsed.

#### References

- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
