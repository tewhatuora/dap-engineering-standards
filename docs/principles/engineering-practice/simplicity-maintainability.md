---
last_edited: 2026-10-21
---

# Simplicity and Maintainability

## Minimum Sufficient Solution

### Summary

A design uses the simplest solution that meets current requirements, with added complexity or configurability only where justified.

### Reasoning

Adding complexity for an unconfirmed future need gives engineers more code, configuration, and behaviour to understand, test, and maintain without meeting a current need.

When several solutions meet the requirement equally well, the simplest one leaves engineers with fewer assumptions and interactions to understand.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Readable, Consistent Code

### Summary

Code is easy for another engineer to understand and follows consistent naming, formatting, and structural conventions.

### Reasoning

Readable code makes behaviour easier to understand and changes easier to review. It reduces maintenance effort and the risk of defects caused by misunderstanding.

Consistent naming, formatting, and structure help engineers focus on what the code does.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Component Modularity

### Summary

A component has a clear responsibility and a stable interface, so its implementation can change without forcing changes in components that depend on it.

### Reasoning

Clear boundaries let engineers understand a component's responsibility without reading its full implementation. Engineers can change a component without needing to understand unrelated code, reducing how much they need to read and test.

A stable interface defines the behaviour that other components rely on. The implementation can change independently as long as it continues to meet that contract.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Unused Code and Dependencies

### Summary

Engineers remove code, features, configuration, and dependencies once their final use and any required transition have ended.

### Reasoning

Unused code, features, configuration, and dependencies still take effort to understand, test, maintain, and secure. Leaving retired functionality beside its replacement makes it harder to tell which implementation to use. Later changes may then affect or depend on retired functionality. Once the final use and transition have ended, keeping this material adds cost and risk without providing value.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)

## Maintainability and Technical Debt

### Summary

Engineers identify unnecessary complexity and technical debt during code changes, track them while they remain, and address them before they make maintenance difficult.

### Reasoning

Complexity is easier to address before other code depends on it. Code review identifies unnecessary complexity in a change, while static analysis reveals increasing complexity and duplication over time.

As technical debt grows and more code depends on it, routine changes become more costly and risky. Tracking debt keeps it visible so engineers can address it during related work rather than put it off indefinitely.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
