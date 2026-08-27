# Testability by Design

## Summary

> Design every component to be easily verified through automated testing.

## Principles

### Early Testability Decisions

How a component's correctness will be verified through automated testing is decided as part of its own design.

1. How a component's correctness will be verified through automated testing **MUST** be decided as part of its design.
2. A design **MUST NOT** proceed past review without a clear answer for how its behaviour will be verified through testing.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)

### Substitutable Dependencies

An external dependency is accessed through a seam that lets a test double substitute for it, never hard-coded or global.

1. A dependency on an external system, another component, the system clock, or a source of randomness **MUST** be accessed through an interface or seam that allows it to be substituted with a controlled test double.
2. A component **MUST NOT** rely on a hard-coded, global, or statically constructed dependency that cannot be substituted during testing.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)

### Deterministic Tests

A test produces the same result on every run by controlling time, randomness, and execution order, and a flaky test is fixed, not ignored.

1. A test **SHOULD** be designed to produce the same result on every execution given the same input, by controlling non-deterministic factors such as time, randomness, external calls, and execution order.
2. A test that intermittently passes or fails without a corresponding code change **MUST** be treated as a defect to be fixed, not retried, ignored, or removed to obtain a passing result.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)
- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../standards/quality-engineering/integration-testing.md)

### Observable Outcomes

A component exposes its outcome through its own interface, verifiable without inspecting internals or a side effect.

1. A component **MUST** expose the outcome of its behaviour, such as a return value, resulting state, or emitted event, through its defined interface so the outcome can be verified by a test.
2. A component **MUST NOT** rely on a side effect that can only be confirmed by inspecting its internal implementation or through manual observation.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)

### Proportionate Test Coverage

New or changed functionality receives automated tests proportionate to its risk, criticality, and complexity.

1. New or changed functionality **MUST** be accompanied by automated tests proportionate to its risk, criticality, and complexity.
2. A component that can only be verified manually or after release to production **SHOULD** be treated as a design gap to be remediated.

#### References

- [Integration Testing](../standards/quality-engineering/integration-testing.md)

### Test Data & Environment Support

A service supports running against controlled test data in an environment isolated from production.

1. A service **SHOULD** support execution against controlled, representative test data in an environment isolated from production.
2. A test **SHOULD NOT** depend on shared mutable state that could cause it to interfere with, or be affected by, another test.

#### References

- [Test Data Management](../standards/quality-engineering/test-data-management.md)
- [Environment Strategy](../standards/platform-infrastructure/environment-strategy.md)

### Testability of Non-Functional Characteristics

Performance, security, and accessibility are designed to be verified through automated testing, not assumed from implementation.

1. Performance, security, and accessibility characteristics **SHOULD** be designed to be verifiable through automated testing, not assumed to be met because they were implemented.
2. Where a non-functional characteristic cannot feasibly be verified through automated testing, its verification approach **SHOULD** be explicitly defined.

#### References

- [Performance & Load Testing](../standards/quality-engineering/performance-load-testing.md)
- [Application Security Testing](../standards/quality-engineering/application-security-testing.md)
- [Accessibility Testing](../standards/quality-engineering/accessibility-testing.md)
