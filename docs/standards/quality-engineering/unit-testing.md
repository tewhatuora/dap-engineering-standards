# Unit Testing

## Unit Test Scope

### Summary

A unit test verifies one unit in isolation from out-of-process dependencies, while behaviour requiring multiple units or a real external dependency is covered by integration testing.

### Standards

1. `std-qe-unit-test-scope-01` A unit test **MUST** verify the behaviour of a single unit of code, such as a function, method, or class, in isolation from other units.
2. `std-qe-unit-test-scope-02` A unit test **MUST NOT** depend on a network call, a database, a filesystem, an external service, or another out-of-process dependency.
3. `std-qe-unit-test-scope-03` Behaviour verifiable only by exercising multiple units together or a unit against a real external dependency **MUST** be verified through an integration test.

### Related Standards

- [Integration Testing](integration-testing.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Test Doubles

### Summary

A unit's genuine external dependency is replaced by a test double that simulates only the behaviour required by the scenario under test.

### Standards

1. `std-qe-test-doubles-01` An external dependency accessed by a unit under test, such as another service, a data store, or the system clock, **MUST** be substituted with a test double, such as a mock, stub, or fake.
2. `std-qe-test-doubles-02` A test double **MUST** simulate only the behaviour of the dependency relevant to the scenario being verified, such as a return value, error condition, or invocation, sufficient to exercise that scenario.
3. `std-qe-test-doubles-03` A component internal to the unit's own logic **SHOULD NOT** be substituted with a test double if that would prevent verifying genuine behaviour.

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Test Data

### Summary

A unit test uses minimal, representative, self-contained, and deterministic data defined within the test or a dedicated helper.

### Standards

1. `std-qe-test-data-01` Data a unit test depends on **SHOULD** be defined within the test itself or a small, dedicated helper.
2. `std-qe-test-data-02` Test data used by a unit test **SHOULD** be minimal and limited to what the scenario being verified requires, while remaining representative of realistic input.
3. `std-qe-test-data-03` A unit test **MUST NOT** depend on non-deterministic test data, such as the current date and time, a random value, or an auto-generated identifier, unless the test explicitly fixes that value.

### Related Standards

- [Test Data Management](test-data-management.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Test Coverage

### Summary

Unit test coverage includes critical paths, the primary success path, distinct branches, feature flag states, boundary conditions, invalid input, and error handling, while trivial code may remain without a dedicated test.

### Standards

1. `std-qe-test-coverage-01` Code on a critical path **MUST** be covered by unit tests.
2. `std-qe-test-coverage-02` Branching logic **SHOULD** have a unit test for each distinct branch, so no path through the logic goes unverified.
3. `std-qe-test-coverage-03` Code gated by a feature flag **MUST** have a unit test covering both its enabled and disabled state.
4. `std-qe-test-coverage-04` Trivial code with no meaningful logic, such as a simple accessor or mutator method, **MAY** be left without a dedicated unit test.
5. `std-qe-test-coverage-05` Unit test coverage **MUST** include the primary success path, boundary conditions, invalid input, and error or exception handling.

### Related Standards

- [Feature Flagging](../delivery-release/feature-flagging.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Coverage Reporting

### Summary

Code coverage is reported through the CI pipeline, and every test genuinely verifies behaviour.

### Standards

1. `std-qe-coverage-reporting-01` A test **MUST NOT** be written solely to raise a coverage number without genuinely verifying the code's behaviour.
2. `std-qe-coverage-reporting-02` A code coverage report **MUST** be made available as part of a build pipeline's continuous integration stage.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Test Clarity

### Summary

A unit test verifies one observable behaviour, follows a consistent structure, has a descriptive name, and provides failure output that can be diagnosed without a debugger.

### Standards

1. `std-qe-test-clarity-01` A unit test **MUST** verify a single behaviour or scenario.
2. `std-qe-test-clarity-02` A test that verifies multiple unrelated behaviours **MUST** be split into separate tests.
3. `std-qe-test-clarity-03` A unit test's name **MUST** describe the behaviour being verified and the expected outcome, so its purpose is clear without reading its implementation.
4. `std-qe-test-clarity-04` A unit test **SHOULD** follow a consistent structure that separates setting up its preconditions, exercising the behaviour under test, and asserting its outcome.
5. `std-qe-test-clarity-05` A failing unit test's output **MUST** clearly indicate what was expected and what actually occurred, so the cause can be identified without running a debugger.
6. `std-qe-test-clarity-06` A unit test **SHOULD** verify a unit's observable behaviour through its interface so a refactor that preserves behaviour does not break the test.

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Parallel Execution

### Summary

A unit test's outcome is independent of execution order and shared mutable state, allowing tests to run in parallel.

### Standards

1. `std-qe-parallel-execution-01` A unit test **MUST** produce the same outcome regardless of the order in which it executes relative to other tests.
2. `std-qe-parallel-execution-02` A unit test **MUST NOT** depend on shared mutable state that could cause it to interfere with, or be affected by, another test.
3. `std-qe-parallel-execution-03` A unit test suite **SHOULD** be able to execute its tests in parallel without a change in outcome.

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Automated Execution

### Summary

A unit test suite runs automatically on every push, merge request, and protected-branch merge and completes quickly enough for frequent local execution.

### Standards

1. `std-qe-automated-execution-01` A unit test suite **MUST** run automatically on every push to a branch, on a merge request, and after it merges into a protected branch.
2. `std-qe-automated-execution-02` A unit test suite **MUST** be runnable on demand from a developer's own machine, independent of the delivery pipeline.
3. `std-qe-automated-execution-03` A unit test suite **SHOULD** complete quickly enough to be run frequently during local development without disrupting an engineer's workflow.

### Related Standards

- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Unit Test Failures

### Summary

A failing unit test blocks the pipeline until resolved, and a quarantined test remains tracked until it is remediated.

### Standards

1. `std-qe-unit-test-failures-01` A failing unit test **MUST** block a change from merging or progressing to the next stage of the delivery pipeline, until the failure is resolved.
2. `std-qe-unit-test-failures-02` A failing or flaky unit test **MUST NOT** be silently commented out or disabled to obtain a passing result.
3. `std-qe-unit-test-failures-03` A unit test deliberately quarantined, whether due to flakiness or another reason, **MUST** be tracked through remediation.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Unit Test Maintenance

### Summary

Unit test code meets the same coding and review standard as production code, and is updated or removed as behaviour changes.

### Standards

1. `std-qe-unit-test-maintenance-01` Unit test code **MUST** be held to the same coding, formatting, and review standards as the production code it verifies.
2. `std-qe-unit-test-maintenance-02` Unit test code **MUST** receive substantive review with the same rigor as the production code it accompanies.
3. `std-qe-unit-test-maintenance-03` A unit test that no longer verifies current behaviour **MUST** be updated or removed.

### Related Standards

- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
