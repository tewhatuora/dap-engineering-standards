# Testability

## Observable Outcomes

### Summary

A component exposes the outcome of its behaviour through its defined interface so a test can verify it without inspecting the implementation.

### Reasoning

Verifying outcomes through the contract available to a consumer keeps tests independent of implementation details. Outcomes visible only through internal inspection or manual observation prevent reliable automated testing.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Controllable Test Boundaries

### Summary

A component's external dependencies, test data, and execution environment can be substituted or controlled for isolated, repeatable verification.

### Reasoning

Control over external dependencies, execution conditions, and test data makes failures attributable to the component's behaviour and verification repeatable. Isolation from production avoids exposing production data or affecting live operation, while isolation from shared mutable state prevents tests from changing one another's conditions or outcomes.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Deterministic Tests

### Summary

A test produces the same result on every execution for the same input, and an intermittent result is treated as a defect.

### Reasoning

Controlling test inputs and execution conditions makes a result attributable to the behaviour under test. An intermittent result without a corresponding code change weakens that evidence, while working around it preserves the uncertainty.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Proportionate Test Coverage

### Summary

New or changed functionality receives automated tests proportionate to its risk, criticality, and complexity.

### Reasoning

Testing effort aligned with the consequences and difficulty of failure concentrates verification where it provides the most value. Designing functionality for automated verification allows defects to be detected consistently before production; omitting feasible automation leaves a gap in that evidence.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Non-Functional Testability

### Summary

Performance, security, and accessibility are designed for verification through automated testing, with an explicit verification approach where automation is not feasible.

### Reasoning

Functional correctness does not demonstrate that a component meets its performance, security, and accessibility expectations. Automated verification provides repeatable evidence for these characteristics. Where automation is not feasible, a defined approach preserves a consistent basis for evaluation.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
