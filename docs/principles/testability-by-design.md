# Testability by Design

## Objective

Testability by Design establishes the expectation that systems and code are designed to be easily and reliably verified through automated testing, rather than made testable as an afterthought once implementation is complete. It directs engineering effort toward architectural and implementation choices, such as substitutable dependencies and deterministic behaviour, that keep a system's correctness verifiable throughout its lifecycle.

## Principles

### Deciding How Correctness Will Be Verified at Design Time

These principles decide how a component's correctness will be verified through testing, as part of its design.

1. How a component's correctness will be verified through automated testing must be decided as part of its design.
2. A design must not proceed past review without a clear answer for how its behaviour will be verified through testing.

#### References

[Unit Testing](../standards/quality-engineering/unit-testing.md)

### Isolating Behaviour Through Substitutable Dependencies

These principles make an external dependency substitutable with a test double, rather than hard-coded or global.

1. A dependency on an external system, another component, the system clock, or a source of randomness must be accessed through an interface or seam that allows it to be substituted with a controlled test double.
2. A component must not rely on a hard-coded, global, or statically constructed dependency that cannot be substituted during testing.

### Deterministic, Repeatable Test Behaviour

These principles control non-deterministic factors so a test produces the same result on every execution.

1. A test should be designed to produce the same result on every execution given the same input, by controlling non-deterministic factors such as time, randomness, external calls, and execution order.
2. A test that intermittently passes or fails without a corresponding code change must be treated as a defect to be fixed, not retried, ignored, or removed to obtain a passing result.

### Verifiable, Observable Outcomes

These principles expose a component's outcome through its interface, so it can be verified without inspecting internals.

1. A component must expose the outcome of its behaviour, such as a return value, resulting state, or emitted event, through its defined interface so the outcome can be verified by a test.
2. A component must not rely on a side effect that can only be confirmed by inspecting its internal implementation or through manual observation.

### Automated Test Coverage Proportionate to Risk

These principles size automated test coverage to a change's risk, criticality, and complexity.

1. New or changed functionality must be accompanied by automated tests proportionate to its risk, criticality, and complexity.
2. A component that can only be verified manually or after release to production should be treated as a design gap to be remediated.

#### References

[Integration Testing](../standards/quality-engineering/integration-testing.md)

### Test Data & Environment Support

These principles support execution against controlled test data in an environment isolated from production.

1. A service should support execution against controlled, representative test data in an environment isolated from production.
2. A test should not depend on shared mutable state that could cause it to interfere with, or be affected by, another test.

#### References

[Test Data Management](../standards/quality-engineering/test-data-management.md)\
[Environment Strategy](../standards/platform-infrastructure/environment-strategy.md)

### Testability of Non-Functional Characteristics

These principles design a non-functional characteristic to be verifiable through automated testing, not assumed from implementation.

1. Performance, security, and accessibility characteristics should be designed to be verifiable through automated testing, not assumed to be met because they were implemented.
2. Where a non-functional characteristic cannot feasibly be verified through automated testing, its verification approach should be explicitly defined.

#### References

[Performance & Load Testing](../standards/quality-engineering/performance-load-testing.md)\
[Application Security Testing](../standards/quality-engineering/application-security-testing.md)\
[Accessibility Testing](../standards/quality-engineering/accessibility-testing.md)
