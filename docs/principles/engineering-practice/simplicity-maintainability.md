---
last_edited: 2026-09-09
---

# Simplicity & Maintainability

## Minimum Sufficient Solution

### Summary

A design includes only complexity and configurability justified by a current requirement and uses the simplest solution that meets it.

### Reasoning

Complexity introduced for an unconfirmed need creates maintenance work without delivering current value. Basing abstractions, capabilities, and configuration on actual requirements keeps the design proportionate to the problem being solved.

When several solutions meet a requirement equally well, the simplest one is easier to understand, verify, and change.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Readable, Consistent Code

### Summary

Code is readily understood by another engineer, with naming, formatting, and structural conventions applied consistently.

### Reasoning

Readable code reduces the effort needed to understand behaviour and makes the effect of a change easier to assess.

Consistent conventions remove incidental differences that slow comprehension. Readability takes precedence when concision would make intent less clear.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Component Modularity

### Summary

A component has a clear responsibility and a stable interface, so changes to its internals do not force changes to its dependent components.

### Reasoning

Clear boundaries let an engineer understand a component's purpose without inspecting its implementation. Minimising coupling confines the knowledge and changes needed when a component evolves.

A stable interface separates a component's contract from its implementation. Dependent components can continue to use that contract while the implementation changes independently.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Technology Diversity

### Summary

Each technology is justified against its maintenance burden, and the number of technologies serving substantially similar purposes is minimised.

### Reasoning

Every technology adds work through updates, security response, operational support, and the knowledge needed to use it. Adopting one is worthwhile only when the need it meets justifies that continuing cost.

Using fewer technologies for substantially similar problems concentrates experience and reduces duplicated maintenance.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Unused Code and Dependencies

### Summary

Code, features, configuration, and dependencies no longer required are removed within a reasonable period.

### Reasoning

Unused code and dependencies continue to impose comprehension, testing, and security costs. Leaving retired functionality beside its replacement obscures which path is authoritative and prolongs risks that no longer provide value.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)

## Maintainability and Technical Debt

### Summary

Unnecessary complexity and technical debt are identified as code changes, tracked while they remain, and remediated before they materially impair maintainability.

### Reasoning

Complexity is cheaper to address when it is introduced than after other code depends on it. Review provides contextual judgement about whether a change is more complex than its requirement warrants, while static analysis makes measurable trends such as complexity and duplication visible as the code evolves.

Unrecorded complexity can accumulate until routine changes become costly or risky. Recording debt keeps its effect visible, while ongoing refactoring prevents remediation from depending on a separate, indefinite future effort.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
