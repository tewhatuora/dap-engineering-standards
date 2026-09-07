# Integration Testing

Integration testing verifies that components work correctly together in a fresh, isolated, and repeatable environment.

## Integration Test Scope

### Summary

An integration test verifies interactions among components across expected success paths, representative failure conditions, and applicable feature flag states.

### Standards

1. `std-qe-integration-test-scope-01` An integration test **MUST** verify that two or more components, services, or systems function correctly together.
2. `std-qe-integration-test-scope-02` Integration test coverage **MUST** include the expected success path and representative failure conditions.
3. `std-qe-integration-test-scope-03` Integration testing **MUST NOT** be substituted for exhaustive coverage of a single component's internal logic, which remains the responsibility of unit-level testing.
4. `std-qe-integration-test-scope-04` Where a capability under test is controlled by a feature flag and its integration behaviour differs between states, integration test coverage **SHOULD** include both states.

### Related Standards

- [Unit Testing](unit-testing.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Test Environments & Data

### Summary

Each test run uses a fresh real instance for a team-operated dependency or a local emulator periodically verified against its managed cloud service, with repeatably provisioned and reset test data.

### Standards

1. `std-qe-test-environments-data-01` An integration test **MUST NOT** depend on a persistent instance of a dependency, whether self-hosted or cloud-hosted, that exists independently of that test suite run.
2. `std-qe-test-environments-data-02` A dependency the team can run itself, such as a database or message broker, **MUST** run as a real instance created fresh for each test suite run, for example a container started, seeded with test data, and torn down once that run completes.
3. `std-qe-test-environments-data-03` A managed cloud-provider service the team does not run itself, such as a message queue or object store, **MUST** be simulated in routine testing with a local emulator.
4. `std-qe-test-environments-data-04` A local emulator simulating a cloud-provider service **MUST** be kept aligned with that service's current behaviour, so it cannot mask a real integration defect.
5. `std-qe-test-environments-data-05` A local emulator's alignment with the cloud-provider service **SHOULD** be verified periodically against a temporary real resource.
6. `std-qe-test-environments-data-06` Test data supporting an integration test **SHOULD** be provisioned and reset in a repeatable, automated manner, so test outcomes remain consistent across test suite runs.

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## External Dependency Simulation

### Summary

A dependency outside the team's control is simulated for routine testing, and periodically checked against its real behaviour.

### Standards

1. `std-qe-external-dependency-simulation-01` Routine, repeated test execution **MUST** simulate a dependency outside the team's control using a test double or service virtualisation, to avoid the flakiness, cost, and rate limits of calling it directly.
2. `std-qe-external-dependency-simulation-02` An external dependency simulation **MUST** be kept aligned with the dependency's current behaviour, so it cannot mask a real integration defect.
3. `std-qe-external-dependency-simulation-03` An external dependency simulation's alignment **SHOULD** be verified periodically against the real dependency.

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Contract Testing

### Summary

An implementation is tested against its published contract, which is periodically verified through a consumer-authored or consumer-agreed contract test or against real consumers.

### Standards

1. `std-qe-contract-testing-01` An API or event/message implementation **MUST** be tested for conformance against its published, machine-readable contract, so its behaviour cannot silently diverge from what it documents.
2. `std-qe-contract-testing-02` A published contract **SHOULD** be verified periodically, such as a scheduled check or before a contract change is released, using a consumer-driven contract test or, where a shared environment makes it practical, directly against real consumers.
3. `std-qe-contract-testing-03` A consumer-driven contract test **MUST** be authored or agreed by the consumer it represents, so it reflects how that consumer genuinely uses the contract.

### Related Standards

- [API Design](../architecture-system-design/api-design.md)
- [Event-Driven Messaging](../architecture-system-design/event-driven-messaging.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Testability](../../principles/quality/testability.md)

## Pipeline Execution

### Summary

Integration tests run automatically on every merge request and merge after faster checks, with execution time monitored to preserve feedback speed.

### Standards

1. `std-qe-pipeline-execution-01` Integration tests **MUST** be automated and executed as part of the delivery pipeline.
2. `std-qe-pipeline-execution-02` Integration tests **MAY** be omitted from a push to a branch but **MUST** run on a merge request and again after it merges to a protected branch, so a branch's development loop stays fast.
3. `std-qe-pipeline-execution-03` Integration tests **SHOULD** run after faster, cheaper pipeline checks, such as secrets scanning or unit tests, so a fast-failing issue is caught before the slower integration test stage runs.
4. `std-qe-pipeline-execution-04` An integration test's execution time **SHOULD** be monitored, and a sustained increase investigated, so it does not erode the pipeline's overall feedback speed.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Integration Test Failures

### Summary

A failing integration test blocks progression, and a quarantined test remains tracked until it is remediated.

### Standards

1. `std-qe-integration-test-failures-01` A failing integration test **MUST** block a change from merging or progressing to the next stage of the delivery pipeline, until the failure is resolved.
2. `std-qe-integration-test-failures-02` A failing or flaky integration test **MUST NOT** be silently commented out or disabled to obtain a passing result.
3. `std-qe-integration-test-failures-03` An integration test deliberately quarantined, whether due to flakiness or another reason, **MUST** be tracked through remediation.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Failure Diagnosis

### Summary

An integration test failure identifies exactly which integration point or dependency is responsible, with enough detail to diagnose it.

### Standards

1. `std-qe-failure-diagnosis-01` An integration test failure **MUST** identify the responsible integration point, dependency, or component.
2. `std-qe-failure-diagnosis-02` An integration test **SHOULD** capture diagnostic detail at the point of failure, such as the request, response, dependency state, and a correlation or trace ID, so the failure can be diagnosed without reproducing it locally.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Integration Test Maintenance

### Summary

Integration test code meets the same coding and review standard as production code, and is updated or removed as behaviour changes.

### Standards

1. `std-qe-integration-test-maintenance-01` Integration test code **MUST** be held to the same coding, formatting, and review standards as the production code it verifies.
2. `std-qe-integration-test-maintenance-02` Integration test code **MUST** receive substantive review with the same rigor as the production code it accompanies.
3. `std-qe-integration-test-maintenance-03` An integration test that no longer verifies current behaviour **MUST** be updated or removed.

### Related Standards

- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
