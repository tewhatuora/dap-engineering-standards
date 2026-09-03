# Unit Testing

## Summary

> Verify one unit of code in isolation, with external dependencies replaced by controlled test doubles.

## Standards

### Scope & Boundaries of a Unit Test

> A unit test verifies one unit in isolation, with no out-of-process dependency; anything more belongs to integration testing.

1. A unit test **MUST** verify the behaviour of a single unit of code, such as a function, method, or class, in isolation from other units.
2. A unit test **MUST NOT** depend on a network call, a database, a filesystem, an external service, or another out-of-process dependency.
3. Behaviour verifiable only by exercising multiple units together, or a unit against a real external dependency rather than a test double, **MUST** be verified through an integration test, not a unit test.

#### References

- [Integration Testing](integration-testing.md)

### Isolating Dependencies with Test Doubles

> A unit's external dependency is substituted with a test double that simulates only what the scenario under test needs.

1. An external dependency accessed by a unit under test, such as another service, a data store, or the system clock, **MUST** be substituted with a test double, such as a mock, stub, or fake.
2. A test double **MUST** simulate only the behaviour of the dependency relevant to the scenario being verified, such as a return value, error condition, or invocation, sufficient to exercise that scenario.
3. A component internal to the unit's own logic, rather than a genuine external dependency, **SHOULD NOT** be substituted with a test double if that would prevent verifying genuine behaviour.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)

### Coverage Expectations

> Unit test coverage reaches every critical path, branch, and flag state, not only the primary success path.

1. Code on a critical path **MUST** be covered by unit tests.
2. Branching logic **SHOULD** have a unit test for each distinct branch, so no path through the logic goes unverified.
3. Code gated by a feature flag **MUST** have a unit test covering both its enabled and disabled state.
4. Trivial code with no meaningful logic, such as a simple accessor or mutator method, **MAY** be left without a dedicated unit test.
5. Unit test coverage **MUST** include boundary conditions, invalid input, and error or exception handling, not only the primary success path.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Coverage Measurement & Reporting

> Code coverage is reported through the CI pipeline, never chased as a number without genuinely verifying behaviour.

1. A test **MUST NOT** be written solely to raise a coverage number without genuinely verifying the code's behaviour.
2. A code coverage report **MUST** be made available as part of a build pipeline's continuous integration stage.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Test Clarity & Maintainability

> A unit test verifies one behaviour, is named for it, and fails with output clear enough to diagnose without a debugger.

1. A unit test **MUST** verify a single behaviour or scenario; a test that verifies multiple unrelated behaviours **MUST** be split into separate tests.
2. A unit test's name **MUST** describe the behaviour being verified and the expected outcome, so its purpose is clear without reading its implementation.
3. A unit test **SHOULD** follow a consistent structure that separates setting up its preconditions, exercising the behaviour under test, and asserting its outcome.
4. A failing unit test's output **MUST** clearly indicate what was expected and what actually occurred, so the cause can be identified without running a debugger.
5. A unit test **SHOULD** verify a unit's observable behaviour through its interface, not an internal implementation detail, so a refactor that preserves behaviour does not break the test.

#### References

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Fast Feedback by Design](../../principles/engineering-practice/fast-feedback-by-design.md)
- [Testability by Design](../../principles/quality/testability-by-design.md)

### Independent, Parallel-Safe Execution

> A unit test's outcome never depends on execution order or shared state with another test, and can run in parallel.

1. A unit test **MUST** produce the same outcome regardless of the order in which it executes relative to other tests.
2. A unit test **MUST NOT** depend on shared mutable state that could cause it to interfere with, or be affected by, another test.
3. A unit test suite **SHOULD** be able to execute its tests in parallel without a change in outcome.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)

### Fast, Fully Automated Execution

> A unit test suite runs automatically on every push, and fast enough to run locally without disrupting a developer's flow.

1. A unit test suite **MUST** run automatically on every push to a branch, on a merge request, and after it merges into a protected branch.
2. A unit test suite **MUST** be runnable on demand from a developer's own machine, independent of the delivery pipeline.
3. A unit test suite **SHOULD** complete quickly enough to be run frequently during local development without disrupting an engineer's workflow.

#### References

- [Automation First](../../principles/engineering-practice/automation-first.md)
- [Fast Feedback by Design](../../principles/engineering-practice/fast-feedback-by-design.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Blocking Progression on Unit Test Failure

> A failing unit test blocks the pipeline until resolved, and a flaky one is tracked and fixed, never silently disabled.

1. A failing unit test **MUST** block a change from merging or progressing to the next stage of the delivery pipeline, until the failure is resolved.
2. A failing or flaky unit test **MUST NOT** be silently commented out or disabled to obtain a passing result.
3. A unit test deliberately quarantined, whether due to flakiness or another reason, **MUST** be tracked and remediated, not left in that state indefinitely.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Automation First](../../principles/engineering-practice/automation-first.md)

### Test Code Quality & Maintenance

> Unit test code meets the same coding and review standard as production code, and is updated or removed as behaviour changes.

1. Unit test code **MUST** be held to the same coding, formatting, and review standards as the production code it verifies.
2. Unit test code **MUST** be reviewed with the same rigor as the production code it accompanies, rather than approved on the assumption that its presence alone is sufficient.
3. A unit test that no longer verifies current behaviour **MUST** be updated or removed; it **MUST NOT** be left in a suite disabled or commented out.

#### References

- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Test Data Scope & Determinism

> A unit test's own data stays minimal, self-contained, and deterministic, never a shared fixture or an unfixed random value.

1. Data a unit test depends on **SHOULD** be defined within the test itself or a small, dedicated helper, rather than sourced from a shared fixture or dataset.
2. Test data used by a unit test **SHOULD** be minimal and limited to what the scenario being verified requires, while remaining representative of realistic input.
3. A unit test **MUST NOT** depend on non-deterministic test data, such as the current date and time, a random value, or an auto-generated identifier, unless the test explicitly fixes that value.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Test Data Management](test-data-management.md)
