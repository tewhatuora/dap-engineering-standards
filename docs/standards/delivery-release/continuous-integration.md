# Continuous Integration

## Pipeline as Code

### Summary

A pipeline definition is version-controlled and reviewed like code, uses shared templates where available, and separates reusable build logic into purpose-specific stages.

### Standards

1. `std-del-pipeline-as-code-01` A build pipeline's definition **MUST** be held as version-controlled configuration in the repository it builds.
2. `std-del-pipeline-as-code-02` A change to a build pipeline's definition **MUST** go through the same review required for a code change.
3. `std-del-pipeline-as-code-03` A build pipeline **SHOULD** be built from a standard, shared collection of templates and patterns, where a suitable one is available.
4. `std-del-pipeline-as-code-04` A pipeline's build logic **SHOULD** be maintained as separate, reusable units.
5. `std-del-pipeline-as-code-05` A pipeline **SHOULD** be structured into distinct stages scoped to a single purpose, such as build, test, or publish.

### Related Standards

- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Build Environment

### Summary

A pipeline run executes in a clean, isolated environment with a version-controlled toolchain.

### Standards

1. `std-del-build-environment-01` A pipeline run **MUST** execute in a clean, isolated environment so a prior run's leftover state cannot influence its result.
2. `std-del-build-environment-02` A pipeline run's toolchain, including its compiler, runtime, and package manager versions, **MUST** resolve consistently from version-controlled definitions.
3. `std-del-build-environment-03` A pipeline run's configuration and environment assumptions **MUST** be declared explicitly and held as version-controlled configuration.
4. `std-del-build-environment-04` A pipeline run **MUST NOT** depend on undeclared state particular to an individual machine.
5. `std-del-build-environment-05` A pipeline run **MUST NOT** have access to another concurrent or subsequent pipeline run's environment or state.
6. `std-del-build-environment-06` A pipeline run **SHOULD** execute in an ephemeral environment, such as a container or virtual machine instance, provisioned for that run alone and discarded afterward.

### Related Standards

- [Build & Artifact Management](build-artifact-management.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
- [Testability](../../principles/quality/testability.md)

## Pipeline Security

### Summary

A pipeline job receives only the credentials it requires, obtains secrets through a secure mechanism without exposing them, restricts secrets from unreviewed external changes, and pins third-party components to immutable references.

### Standards

1. `std-del-pipeline-security-01` A pipeline run **MUST** execute with only the minimum credentials and access required for the specific job it performs.
2. `std-del-pipeline-security-02` A credential granting broader access **MUST NOT** be provided to every job by default.
3. `std-del-pipeline-security-03` A secret or credential **MUST NOT** be hardcoded in a pipeline's definition or source.
4. `std-del-pipeline-security-04` A secret or credential **MUST** be supplied to a pipeline run through a mechanism designed to store and inject it securely.
5. `std-del-pipeline-security-05` A pipeline run triggered by a change from an external contributor **MUST NOT** be granted access to a protected secret or credential, unless that change has first been reviewed and approved by an authorised team member.
6. `std-del-pipeline-security-06` A third-party component used to define or extend a pipeline, such as a reusable action or plugin, **MUST** be pinned to an immutable reference.
7. `std-del-pipeline-security-07` A secret or credential used by a pipeline **MUST NOT** be written to a build log or other output.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Software Supply Chain Security](../security-identity/software-supply-chain-security.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Build & Test Execution

### Summary

A change affecting a deployable component automatically builds and tests that component, and any build or test failure fails the pipeline.

### Standards

1. `std-del-build-test-execution-01` A change affecting a deployable component, pushed to a shared branch or proposed through a merge request, **MUST** trigger its automated build and test suite.
2. `std-del-build-test-execution-02` A build or test run **MUST NOT** depend on a manual step to start once its trigger condition is met.
3. `std-del-build-test-execution-03` A build **MUST** fail whenever the source does not compile, package, or otherwise assemble cleanly, and whenever an executed test does not pass.
4. `std-del-build-test-execution-04` Where a repository holds multiple independently deployable components, each affected component **MUST** be built and tested so a failure is attributable to the component that caused it.

### Related Standards

- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Required Checks

### Summary

A pipeline automatically performs required static analysis, security, secret, dependency, infrastructure, and container checks before publishing a deployable artifact.

### Standards

1. `std-del-required-checks-01` A required check **MUST** run automatically as part of the pipeline, without depending on a manual step to start it.
2. `std-del-required-checks-02` A pipeline that builds a deployable artifact **MUST** include static application security testing (SAST) of the source it builds.
3. `std-del-required-checks-03` A pipeline that builds a deployable artifact **MUST** include static analysis of the source it builds.
4. `std-del-required-checks-04` A pipeline that builds a deployable artifact **MUST** include scanning of the source it builds for a committed secret or credential, such as an API key, access token, or password.
5. `std-del-required-checks-05` A pipeline that builds a deployable artifact **MUST** include scanning of its declared dependencies for a known vulnerability.
6. `std-del-required-checks-06` Where a change includes infrastructure-as-code, that code **MUST** be scanned for a security misconfiguration before the change is merged.
7. `std-del-required-checks-07` Where a pipeline builds a container image, the file defining that image **SHOULD** be linted before the image is built.
8. `std-del-required-checks-08` Where a pipeline builds a container image, that image **MUST** be scanned for a known vulnerability before it is published.

### Related Standards

- [Application Security Testing](../quality-engineering/application-security-testing.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Containerisation](../platform-infrastructure/containerisation.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Check Ordering & Performance

### Summary

A pipeline runs its fastest, highest-signal checks first, stops dependent work after a failure, and remediates slow or unreliable stages.

### Standards

1. `std-del-check-ordering-performance-01` A pipeline **SHOULD** run its fastest, highest-signal checks before a slower or more resource-intensive check, so an early failure is reported without waiting for the full pipeline to complete.
2. `std-del-check-ordering-performance-02` A pipeline **MUST** halt at the stage that fails.
3. `std-del-check-ordering-performance-03` A pipeline **MUST NOT** continue executing a later stage whose outcome depends on the failed stage having passed.
4. `std-del-check-ordering-performance-04` A pipeline stage that is consistently slow or unreliable **SHOULD** be identified and remediated.
5. `std-del-check-ordering-performance-05` A test that fails intermittently without a change in the code it exercises **MUST** be fixed or quarantined and tracked for remediation.
6. `std-del-check-ordering-performance-06` A test that fails intermittently without a change in the code it exercises **MUST NOT** be handled solely by retrying it until it passes.
7. `std-del-check-ordering-performance-07` Independent pipeline stages **SHOULD** execute in parallel, where the tooling and available execution capacity support it.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Merge Gate

### Summary

A change only merges once its pipeline has passed against its final state, and a failing shared branch is fixed first.

### Standards

1. `std-del-merge-gate-01` A merge request **MUST NOT** be merged into a shared branch until its pipeline run has completed and passed.
2. `std-del-merge-gate-02` Where a shared branch changes after a merge request's pipeline run started, that run **MUST** be repeated against the merge request's final state before the merge is permitted.
3. `std-del-merge-gate-03` A failing shared branch build **MUST** be restored to a passing state promptly.
4. `std-del-merge-gate-04` Restoring a failing shared branch's build to a passing state **MUST** take priority over other work targeting that branch.
5. `std-del-merge-gate-05` A change **MUST NOT** be merged into a shared branch whose build is already failing, other than a change whose specific purpose is to fix that failure.

### Related Standards

- [Branching Strategy](../code-implementation/branching-strategy.md)

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Build Status

### Summary

A pipeline's status stays visible to the team responsible for it, with a failure signalled promptly to that team or the change author.

### Standards

1. `std-del-build-status-01` A pipeline's current and historical run status **MUST** be accessible to the team responsible for the branch or change it validates.
2. `std-del-build-status-02` A pipeline failure **MUST** be signalled to the responsible team or change author through a notification mechanism that does not require actively checking the pipeline.
3. `std-del-build-status-03` A pipeline's status for the current state of a shared branch **SHOULD** be visible in a shared, at-a-glance location, such as a status badge.
4. `std-del-build-status-04` A pipeline run's result **MUST** remain retrievable and traceable to the specific change it validated, so a reviewer or maintainer can confirm what was checked and its outcome.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Build Artifact

### Summary

A successful pipeline produces a uniquely identified artifact set for each deployable component, stored, configured externally, and promoted unchanged to every later environment.

### Standards

1. `std-del-build-artifact-01` A pipeline run that passes its required validation **MUST** produce a uniquely identified artifact set for each deployable component it builds.
2. `std-del-build-artifact-02` Each artifact produced for a deployable component **MUST** be uniquely identified and stored so it can be retrieved unchanged for every later environment to which it is promoted.
3. `std-del-build-artifact-03` A build artifact **MUST NOT** be rebuilt from source for a later environment.
4. `std-del-build-artifact-04` Each artifact validated earlier in the pipeline **MUST** be the one promoted and deployed.
5. `std-del-build-artifact-05` Where a later environment requires environment-specific configuration, that configuration **MUST** be applied externally to the build artifact, without altering its verified contents.

### Related Standards

- [Configuration Management](../code-implementation/configuration-management.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Cost Efficiency

### Summary

A pipeline controls cost by caching dependencies, measuring stage cost, allocating proportionate resources, and expiring artifacts when they are no longer useful.

### Standards

1. `std-del-cost-efficiency-01` A pipeline **SHOULD** persist a dependency cache between runs, keyed to a hash of the manifest or lock file that declares those dependencies, so unchanged dependencies are not re-downloaded or re-resolved on every run.
2. `std-del-cost-efficiency-02` A pipeline **SHOULD** measure the compute cost of its stages, so a disproportionately expensive stage, such as a long-running integration test suite, is identified and optimised.
3. `std-del-cost-efficiency-03` A pipeline job **SHOULD NOT** be allocated compute resource that materially exceeds its typical workload.
4. `std-del-cost-efficiency-04` A pipeline's cached or stored artifacts **SHOULD** be retained only as long as they remain useful, with a defined expiry, so storage cost does not grow unbounded.

### Related Standards

- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)
- [Cost & Impact Visibility](../cost-sustainability/cost-impact-visibility.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
