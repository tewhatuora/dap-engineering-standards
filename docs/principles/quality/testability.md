---
last_edited: 2026-09-11
---

# Testability

## Observable Outcomes

### Summary

A component exposes the outcome of its behaviour through its defined interface so tests can verify it without inspecting the implementation.

### Reasoning

Tests that use the same contract as a consumer verify behaviour that remains meaningful when the implementation changes. They establish what the component does without depending on the internal steps used to produce the outcome.

When an outcome is visible only through internal inspection or manual observation, automated tests must either depend on implementation details or leave the behaviour unverified. Those tests become fragile during refactoring and provide weaker evidence about what a consumer actually experiences.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Controllable Test Boundaries

### Summary

A component's external dependencies, test data, and execution environment can be controlled or substituted for isolated, repeatable verification.

### Reasoning

Control over dependencies, test data, and execution conditions gives each test a known starting state. When a test fails, engineers can attribute the result to the behaviour under test instead of first determining whether an external system or earlier test changed its conditions.

Isolation from production prevents verification from exposing production data or affecting live operation. Isolation from shared mutable state also prevents tests from influencing one another, allowing the same verification to produce comparable evidence across repeated runs.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Deterministic Tests

### Summary

A test produces the same result for the same input and conditions, and an intermittent result is treated as a defect.

### Reasoning

A repeatable result links success or failure to the behaviour under test rather than to an uncontrolled change in the test conditions. This allows a new failure to provide evidence that the code or a known dependency has changed.

An intermittent result breaks that link because the same code can appear both valid and invalid. Re-running, ignoring, or otherwise working around the failure preserves the uncertainty and reduces confidence in every result from the test.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Test Depth by Risk and Complexity

### Summary

The depth and coverage of automated testing increase with the likelihood and impact of failure and the complexity of the functionality.

### Reasoning

The value of testing depends on both the likelihood of a defect and the consequence and difficulty of detecting it later. Increasing test depth and coverage with those factors concentrates stronger evidence where a failure would be harder to find or cause greater harm.

Designing functionality for automated verification allows the same behaviour to be checked consistently as the code changes. Where useful automation is feasible but omitted, later changes can remove expected behaviour without producing timely evidence of the regression.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Non-Functional Testability

### Summary

Performance, security, and accessibility are designed for automated verification, with an explicit testing approach where automation is not feasible.

### Reasoning

Functional correctness does not show that a component meets its performance, security, or accessibility expectations. These characteristics can fail while the functional outcome remains correct, so they require evidence based on their own requirements.

Automated testing provides repeatable evidence and makes regressions visible as the component changes. Where automation cannot verify the required characteristic, a defined testing approach keeps the evaluation deliberate and repeatable instead of leaving it to informal judgement.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
