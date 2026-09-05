# Testability

## Observable Outcomes

### Summary

A component exposes the outcome of its behaviour through its defined interface so a test can verify it without inspecting the implementation.

### Reasoning

An observable return value, resulting state, or emitted event allows a test to verify behaviour through the same contract available to a consumer. Outcomes visible only through internal inspection or manual observation couple verification to implementation details and prevent reliable automated testing.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)

## Controllable Test Boundaries

### Summary

A component's external dependencies, test data, and execution environment can be substituted or controlled for isolated, repeatable verification.

### Reasoning

Substitution isolates a component's behaviour from external systems, other components, time, and randomness. Hard-coded, global, or statically constructed dependencies prevent that control and make failures depend on conditions outside the test.

Controlled test data and isolation from production allow repeatable verification without exposing production data or affecting live operation. Avoiding shared mutable state also prevents one test from changing the conditions or outcome of another.

### Implemented By These Standards

- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Deterministic Tests

### Summary

A test produces the same result on every execution for the same input, and an intermittent result is treated as a defect.

### Reasoning

Controlling time, randomness, external calls, shared state, and execution order makes a test result attributable to the behaviour under test. An intermittent result without a corresponding code change weakens that evidence and requires remediation rather than retries, removal, or suppression.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Proportionate Test Coverage

### Summary

New or changed functionality receives automated tests proportionate to its risk, criticality, and complexity.

### Reasoning

Testing effort aligned with the consequences and difficulty of failure concentrates verification where it provides the most value. Functionality that can be verified only manually or after release leaves a design gap because defects cannot be detected consistently before production.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Non-Functional Testability

### Summary

Performance, security, and accessibility are designed for verification through automated testing, with an explicit verification approach where automation is not feasible.

### Reasoning

Implementation alone does not demonstrate that a component meets its performance, security, and accessibility characteristics. Designing these characteristics for automated verification provides repeatable evidence; where automation is not feasible, a defined approach preserves a clear basis for evaluation.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
