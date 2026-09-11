---
last_edited: 2026-09-11
---

# Simplicity and Maintainability

## Minimum Sufficient Solution

### Summary

A design uses the simplest solution that meets current requirements and adds complexity or configurability only when justified.

### Reasoning

Complexity introduced for an unconfirmed future need creates code, configuration, and behaviour that must be understood, tested, and maintained without providing current value.

When several solutions meet the requirement equally well, the simplest one reduces the number of assumptions and interactions an engineer must understand.

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

A component has a clear responsibility and stable interface, allowing its implementation to change without forcing changes in dependent components.

### Reasoning

Clear boundaries allow an engineer to understand a component's responsibility without reading its full implementation. They also confine the knowledge needed for a change, reducing the amount of unrelated code that must be understood and tested when the component evolves.

A stable interface separates the behaviour used by dependent components from the implementation that provides it. The implementation can then change independently, provided it continues to meet the contract on which those components rely.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Technology Diversity

### Summary

Each technology is justified by the value it provides, and the number of technologies serving similar purposes is kept low.

### Reasoning

Every technology adds ongoing costs for maintenance, security, operational support, and the knowledge needed to use it safely. Its benefits must justify those costs throughout its use.

Using fewer technologies for substantially similar problems concentrates practical experience and avoids duplicating maintenance, support, and learning across equivalent tools.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Unused Code and Dependencies

### Summary

Code, features, configuration, and dependencies are removed after their final use and any required transition ends.

### Reasoning

Unused code, features, configuration, and dependencies still impose comprehension, testing, maintenance, and security costs. Leaving retired functionality beside its replacement also obscures which path is authoritative and increases the chance that later changes affect or depend on the wrong path.

Retaining code, features, configuration, or dependencies after their final use and transition preserves those costs and risks without providing value.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)

## Maintainability and Technical Debt

### Summary

Unnecessary complexity and technical debt are identified during code changes, tracked while they remain, and addressed before they make maintenance difficult.

### Reasoning

Complexity is easier to address before other code depends on it. Code review identifies unnecessary complexity in a change. Static analysis reveals increasing complexity and duplication over time.

As technical debt accumulates and more code depends on it, routine changes become more costly and risky. Tracking debt keeps it visible so it can be addressed during related work instead of being deferred indefinitely.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
