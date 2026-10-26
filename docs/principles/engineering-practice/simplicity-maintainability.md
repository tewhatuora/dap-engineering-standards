---
last_edited: 2026-10-23
---

# Simplicity and Maintainability

## Minimum Sufficient Solution

### Summary

A design uses the simplest solution that meets current requirements, with added complexity or configurability only where justified.

### Reasoning

Adding complexity for an unconfirmed future need gives engineers more code, configuration, and behaviour to understand, test, and maintain without meeting a current need.

When several solutions meet the requirement equally well, the simplest one leaves engineers with fewer assumptions and interactions to understand.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)

## Readable, Consistent Code

### Summary

Code is easy for another engineer to understand and follows consistent naming, formatting, and structural conventions.

### Reasoning

Readable code makes behaviour easier to understand and changes easier to review. It reduces maintenance effort and the risk of defects caused by misunderstanding.

Consistent naming, formatting, and structure help engineers focus on what the code does.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Component Modularity

### Summary

A component has a clear responsibility and a stable interface, so its implementation can change without forcing changes in components that depend on it.

### Reasoning

Clear boundaries let engineers understand a component's responsibility without reading its full implementation. Engineers can change a component without needing to understand unrelated code, reducing how much they need to read and test.

A stable interface defines the behaviour that other components rely on. The implementation can change independently as long as it continues to meet that contract.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Unused Code and Dependencies

### Summary

Engineers remove code, features, configuration, and dependencies once they are no longer used and any required transition is complete.

### Reasoning

Unused code, features, configuration, and dependencies still take effort to understand, test, maintain, and secure. That effort adds no value once they are no longer needed and any required transition is complete. Leaving retired functionality beside its replacement makes it harder to tell which implementation to use. Later changes may then affect or depend on retired functionality.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Maintainability and Technical Debt

### Summary

Engineers identify unnecessary complexity and technical debt during code changes, track them while they remain, and address them before they make maintenance difficult.

### Reasoning

Complexity is easier to address before other code depends on it. Code review identifies unnecessary complexity in a change, while static analysis reveals increasing complexity and duplication over time.

As technical debt grows and more code depends on it, routine changes become more costly and risky. Tracking debt keeps it visible so engineers can address it alongside related code changes rather than defer it indefinitely.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
