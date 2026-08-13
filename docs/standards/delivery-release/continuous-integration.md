# Continuous Integration

## Objective

This standard defines requirements for how a change is automatically built, tested, scanned for security and quality issues, and integrated into a shared branch through the delivery pipeline. It keeps the shared branch continuously in a working, verified state, so a defect or security weakness is found and fixed before it compounds into a costlier failure.

## Standards

### Automated Build & Test Execution

These requirements set out how a change is built and its automated test suite executed without manual intervention.

1. A change pushed to a shared branch, or proposed through a merge request, must trigger an automated build and execution of the automated test suite defined for the repository.
2. A build or test run must not depend on a manual step to start once its trigger condition is met.
3. A build must fail whenever the source does not compile, package, or otherwise assemble cleanly, and whenever an executed test does not pass.
4. Where a repository holds multiple independently deployable components, each component must be built and tested individually, so a failure is attributable to the component that caused it.

#### References

- [Automation First](../../principles/automation-first.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Minimum Pipeline Checks

These requirements cover how a pipeline's required checks are scoped before a deployable artifact is produced.

1. A required check must run automatically as part of the pipeline, without depending on a manual step to start it.
2. A pipeline that builds a deployable artifact must include static application security testing (SAST) of the source it builds.
3. A pipeline that builds a deployable artifact must include static analysis of the source it builds.
4. A pipeline that builds a deployable artifact must include scanning of the source it builds for a committed secret or credential, such as an API key, access token, or password.
5. A pipeline that builds a deployable artifact must include scanning of its declared dependencies for a known vulnerability.
6. Where a change includes infrastructure-as-code, that code must be scanned for a security misconfiguration before the change is merged.
7. Where a pipeline builds a container image, the file defining that image must be linted before the image is built.
8. Where a pipeline builds a container image, that image must be scanned for a known vulnerability before it is published.

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

These requirements describe how a pipeline's own definition is held and reviewed as version-controlled code.

1. A build pipeline's definition must be held as version-controlled configuration in the repository it builds.
2. A change to a build pipeline's definition must go through the same review required for a code change.
3. A build pipeline should be built from a standard, shared collection of templates and patterns, where a suitable one is available.
4. A pipeline's build logic should be maintained as separate, reusable units rather than embedded as large, undivided inline scripts.
5. A pipeline should be structured into distinct stages scoped to a single purpose, such as build, test, or publish, rather than combining unrelated work into one stage.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
- [Code Review](../code-implementation/code-review.md)

### Pipeline as Merge Gate

These requirements address how a change's merge into a shared branch depends on a passing pipeline run against its final state.

1. A merge request must not be merged into a shared branch until its pipeline run has completed and passed.
2. Where a shared branch changes after a merge request's pipeline run started, that run must be repeated against the merge request's final state before the merge is permitted.
3. A shared branch's build must be kept in a passing state at all times; where it fails, restoring it to a passing state must take priority over other work targeting that branch.
4. A change must not be merged into a shared branch whose build is already failing, other than a change whose specific purpose is to fix that failure.

#### References

- [Branching Strategy](../code-implementation/branching-strategy.md)

### Build Environment Integrity

These requirements describe how a pipeline run executes in a clean, isolated, and consistently configured environment.

1. A pipeline run must execute in a freshly provisioned environment, so a prior run's leftover state cannot influence its result.
2. A pipeline run's toolchain, including its compiler, runtime, and package manager versions, must be pinned to a known, consistent version.
3. A pipeline run's configuration and environment assumptions must be declared explicitly and held as version-controlled configuration; it must not depend on undeclared state particular to an individual machine.
4. A pipeline run must not have access to another concurrent or subsequent pipeline run's environment or state.
5. A pipeline run should execute in an ephemeral environment, such as a container or virtual machine instance, provisioned for that run alone and discarded afterward.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Build & Artifact Management](build-artifact-management.md)

### Pipeline Cost Efficiency

These requirements guide how a pipeline is designed to keep its compute and storage consumption efficient.

1. A pipeline should persist a dependency cache between runs, keyed to a hash of the manifest or lock file that declares those dependencies, so unchanged dependencies are not re-downloaded or re-resolved on every run.
2. A pipeline should measure the compute cost of its stages, so a disproportionately expensive stage, such as a long-running integration test suite, is identified and optimised.
3. A pipeline job should not be allocated compute resource that materially exceeds its typical workload.
4. A pipeline's cached or stored artifacts should be retained only as long as they remain useful, with a defined expiry, so storage cost does not grow unbounded.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Sustainability by Design](../../principles/sustainability-by-design.md)
- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)
- [Cost Monitoring & Attribution](../cost-sustainability/cost-monitoring-attribution.md)

### Pipeline Performance & Check Ordering

These requirements cover how a pipeline's checks are ordered and kept fast enough to return an early result.

1. A pipeline should run its fastest, highest-signal checks before a slower or more resource-intensive check, so an early failure is reported without waiting for the full pipeline to complete.
2. A pipeline must halt at the stage that fails; it must not continue executing a later stage whose outcome depends on the failed stage having passed.
3. A pipeline stage that is consistently slow or unreliable must be identified and remediated; it must not be tolerated indefinitely as a fixed cost of integration.
4. A test that fails intermittently without a change in the code it exercises must be quarantined from the pipeline's pass or fail result and tracked as a defect for remediation; it must not be handled solely by retrying it until it passes.
5. Independent pipeline stages should execute in parallel, where the tooling and available execution capacity support it.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Build & Test Feedback Loops](../developer-experience/build-test-feedback-loops.md)

### Build Status Visibility

These requirements guide how a pipeline's outcome stays visible to the team responsible for a change, with prompt notice of a failure.

1. A pipeline's current and historical run status must be visible to every team member responsible for the branch or change it validates.
2. A pipeline failure must be signalled to the individual whose change triggered it, through a notification mechanism that does not require actively checking the pipeline to discover it.
3. A pipeline's status for the current state of a shared branch should be visible in a shared, at-a-glance location, such as a status badge.
4. A pipeline run's result must remain retrievable and traceable to the specific change it validated, so a reviewer or maintainer can confirm what was checked and its outcome.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Single Verified Build Artifact

These requirements set out how a single build artifact, once verified, is promoted unchanged through later environments.

1. A pipeline run that passes its required validation must produce exactly one build artifact for the change it validates.
2. That artifact must be uniquely identified and stored so it can be retrieved unchanged for every later environment it is promoted to.
3. A build artifact must not be rebuilt from source for a later environment; the same artifact validated earlier in the pipeline must be the one promoted and deployed.
4. Where a later environment requires environment-specific configuration, that configuration must be applied externally to the build artifact, without altering its verified contents.

#### References

- [Build & Artifact Management](build-artifact-management.md)
- [Configuration Management](../code-implementation/configuration-management.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Pipeline Execution Security

These requirements address how a pipeline run's credentials and third-party components stay protected against untrusted or malicious use.

1. A pipeline run must execute with only the minimum credentials and access required for the specific job it performs; a credential granting broader access must not be provided to every job by default.
2. A secret or credential must not be hardcoded in a pipeline's definition or source; it must be supplied to a pipeline run through a mechanism designed to store and inject it securely.
3. A pipeline run triggered by a change from an external contributor must not be granted access to a protected secret or credential, unless that change has first been reviewed and approved by an authorised team member.
4. A third-party component used to define or extend a pipeline, such as a reusable action or plugin, must be pinned to a specific commit SHA.
5. A secret or credential used by a pipeline must not be written to a build log or other output.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
