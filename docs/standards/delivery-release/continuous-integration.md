# Continuous Integration

## Summary

> Build, test, and scan every change before it merges, catching security and quality issues early.

## Standards

### Automated Build & Test Execution

> Every change automatically triggers a build and its full test suite, and a failing build or test always fails the pipeline.

1. A change pushed to a shared branch, or proposed through a merge request, **MUST** trigger an automated build and execution of the automated test suite defined for the repository.
2. A build or test run **MUST NOT** depend on a manual step to start once its trigger condition is met.
3. A build **MUST** fail whenever the source does not compile, package, or otherwise assemble cleanly, and whenever an executed test does not pass.
4. Where a repository holds multiple independently deployable components, each component **MUST** be built and tested individually, so a failure is attributable to the component that caused it.

#### References

- [Automation First](../../principles/automation-first.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Minimum Pipeline Checks

> A pipeline building a deployable artifact scans it for security weaknesses, secrets, and vulnerable dependencies.

1. A required check **MUST** run automatically as part of the pipeline, without depending on a manual step to start it.
2. A pipeline that builds a deployable artifact **MUST** include static application security testing (SAST) of the source it builds.
3. A pipeline that builds a deployable artifact **MUST** include static analysis of the source it builds.
4. A pipeline that builds a deployable artifact **MUST** include scanning of the source it builds for a committed secret or credential, such as an API key, access token, or password.
5. A pipeline that builds a deployable artifact **MUST** include scanning of its declared dependencies for a known vulnerability.
6. Where a change includes infrastructure-as-code, that code **MUST** be scanned for a security misconfiguration before the change is merged.
7. Where a pipeline builds a container image, the file defining that image **MUST** be linted before the image is built.
8. Where a pipeline builds a container image, that image **MUST** be scanned for a known vulnerability before it is published.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Application Security Testing](../quality-engineering/application-security-testing.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Containerisation Standards](../platform-infrastructure/containerisation-standards.md)

### Pipeline Defined as Code

> A pipeline's own definition is version-controlled code, reviewed like any other change and built from shared templates.

1. A build pipeline's definition **MUST** be held as version-controlled configuration in the repository it builds.
2. A change to a build pipeline's definition **MUST** go through the same review required for a code change.
3. A build pipeline **SHOULD** be built from a standard, shared collection of templates and patterns, where a suitable one is available.
4. A pipeline's build logic **SHOULD** be maintained as separate, reusable units rather than embedded as large, undivided inline scripts.
5. A pipeline **SHOULD** be structured into distinct stages scoped to a single purpose, such as build, test, or publish, rather than combining unrelated work into one stage.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
- [Code Review](../code-implementation/code-review.md)

### Pipeline as Merge Gate

> A change only merges once its pipeline has passed against its final state, and a failing shared branch is fixed first.

1. A merge request **MUST NOT** be merged into a shared branch until its pipeline run has completed and passed.
2. Where a shared branch changes after a merge request's pipeline run started, that run **MUST** be repeated against the merge request's final state before the merge is permitted.
3. A shared branch's build **MUST** be kept in a passing state at all times; where it fails, restoring it to a passing state **MUST** take priority over other work targeting that branch.
4. A change **MUST NOT** be merged into a shared branch whose build is already failing, other than a change whose specific purpose is to fix that failure.

#### References

- [Branching Strategy](../code-implementation/branching-strategy.md)

### Build Environment Integrity

> A pipeline run executes in a freshly provisioned, isolated environment with a pinned, version-controlled toolchain.

1. A pipeline run **MUST** execute in a freshly provisioned environment, so a prior run's leftover state cannot influence its result.
2. A pipeline run's toolchain, including its compiler, runtime, and package manager versions, **MUST** be pinned to a known, consistent version.
3. A pipeline run's configuration and environment assumptions **MUST** be declared explicitly and held as version-controlled configuration; it **MUST NOT** depend on undeclared state particular to an individual machine.
4. A pipeline run **MUST NOT** have access to another concurrent or subsequent pipeline run's environment or state.
5. A pipeline run **SHOULD** execute in an ephemeral environment, such as a container or virtual machine instance, provisioned for that run alone and discarded afterward.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Build & Artifact Management](build-artifact-management.md)

### Pipeline Cost Efficiency

> A pipeline caches dependencies between runs, and its compute and storage cost stays measured and bounded.

1. A pipeline **SHOULD** persist a dependency cache between runs, keyed to a hash of the manifest or lock file that declares those dependencies, so unchanged dependencies are not re-downloaded or re-resolved on every run.
2. A pipeline **SHOULD** measure the compute cost of its stages, so a disproportionately expensive stage, such as a long-running integration test suite, is identified and optimised.
3. A pipeline job **SHOULD NOT** be allocated compute resource that materially exceeds its typical workload.
4. A pipeline's cached or stored artifacts **SHOULD** be retained only as long as they remain useful, with a defined expiry, so storage cost does not grow unbounded.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Sustainability by Design](../../principles/sustainability-by-design.md)
- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)
- [Cost Monitoring & Attribution](../cost-sustainability/cost-monitoring-attribution.md)

### Pipeline Performance & Check Ordering

> A pipeline runs its fastest, highest-signal checks first, and halts immediately at the stage that fails.

1. A pipeline **SHOULD** run its fastest, highest-signal checks before a slower or more resource-intensive check, so an early failure is reported without waiting for the full pipeline to complete.
2. A pipeline **MUST** halt at the stage that fails; it **MUST NOT** continue executing a later stage whose outcome depends on the failed stage having passed.
3. A pipeline stage that is consistently slow or unreliable **MUST** be identified and remediated; it **MUST NOT** be tolerated indefinitely as a fixed cost of integration.
4. A test that fails intermittently without a change in the code it exercises **MUST** be quarantined from the pipeline's pass or fail result and tracked as a defect for remediation; it **MUST NOT** be handled solely by retrying it until it passes.
5. Independent pipeline stages **SHOULD** execute in parallel, where the tooling and available execution capacity support it.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Build & Test Feedback Loops](../developer-experience/build-test-feedback-loops.md)

### Build Status Visibility

> A pipeline's status stays visible to the team responsible for it, with a failure signalled promptly to whoever caused it.

1. A pipeline's current and historical run status **MUST** be visible to every team member responsible for the branch or change it validates.
2. A pipeline failure **MUST** be signalled to the individual whose change triggered it, through a notification mechanism that does not require actively checking the pipeline to discover it.
3. A pipeline's status for the current state of a shared branch **SHOULD** be visible in a shared, at-a-glance location, such as a status badge.
4. A pipeline run's result **MUST** remain retrievable and traceable to the specific change it validated, so a reviewer or maintainer can confirm what was checked and its outcome.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Single Verified Build Artifact

> A pipeline produces exactly one build artifact, promoted unchanged and never rebuilt for a later environment.

1. A pipeline run that passes its required validation **MUST** produce exactly one build artifact for the change it validates.
2. That artifact **MUST** be uniquely identified and stored so it can be retrieved unchanged for every later environment it is promoted to.
3. A build artifact **MUST NOT** be rebuilt from source for a later environment; the same artifact validated earlier in the pipeline **MUST** be the one promoted and deployed.
4. Where a later environment requires environment-specific configuration, that configuration **MUST** be applied externally to the build artifact, without altering its verified contents.

#### References

- [Build & Artifact Management](build-artifact-management.md)
- [Configuration Management](../code-implementation/configuration-management.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Pipeline Execution Security

> A pipeline run receives only the minimum credentials its job needs, and a third-party component is pinned to a specific commit.

1. A pipeline run **MUST** execute with only the minimum credentials and access required for the specific job it performs; a credential granting broader access **MUST NOT** be provided to every job by default.
2. A secret or credential **MUST NOT** be hardcoded in a pipeline's definition or source; it **MUST** be supplied to a pipeline run through a mechanism designed to store and inject it securely.
3. A pipeline run triggered by a change from an external contributor **MUST NOT** be granted access to a protected secret or credential, unless that change has first been reviewed and approved by an authorised team member.
4. A third-party component used to define or extend a pipeline, such as a reusable action or plugin, **MUST** be pinned to a specific commit SHA.
5. A secret or credential used by a pipeline **MUST NOT** be written to a build log or other output.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
