---
last_edited: 2026-09-10
---

# Simplicity & Maintainability

## Minimum Sufficient Solution

### Summary

A design uses the simplest solution that meets current requirements and adds complexity or configurability only when justified.

### Reasoning

Complexity introduced for an unconfirmed future need creates code, configuration, and behaviour that must be understood, tested, and maintained without providing current value. Basing the design on actual requirements keeps that continuing cost proportionate to the problem being solved.

When several solutions meet the requirement equally well, the simplest one reduces the number of assumptions and interactions an engineer must understand. This makes its behaviour easier to verify and gives later changes fewer unnecessary constraints.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Readable, Consistent Code

### Summary

Code is easy for another engineer to understand and follows consistent naming, formatting, and structural conventions.

### Reasoning

Readable code allows an engineer to understand behaviour and assess a change without first reconstructing the original author's intent. This reduces the effort needed for review and maintenance and lowers the chance that a misunderstanding introduces a defect.

Consistent naming, formatting, and structure remove incidental differences that distract from the code's purpose. Concision is valuable only while the intent remains clear; shorter code that hides behaviour increases the work required of every later reader.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Component Modularity

### Summary

A component has a clear responsibility and stable interface, allowing its internals to change without forcing changes in dependent components.

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

Every technology adds continuing work through updates, security response, operational support, and the knowledge required to use it safely. The capability it provides must justify those costs throughout its use, rather than only making the initial implementation convenient.

Using fewer technologies for substantially similar problems concentrates practical experience and avoids duplicating maintenance and support. It also allows engineers to solve recurring problems with familiar approaches instead of relearning equivalent tools.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Unused Code and Dependencies

### Summary

Code, features, configuration, and dependencies are removed within a reasonable period once they are no longer needed.

### Reasoning

Unused code, features, configuration, and dependencies still impose comprehension, testing, maintenance, and security costs. Leaving retired functionality beside its replacement also obscures which path is authoritative and increases the chance that later work changes or relies on the wrong one.

Delaying removal preserves those costs and risks after the functionality has stopped providing value. Removing it within a reasonable period keeps the active system easier to understand and limits support to behaviour that remains intentional.

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

Complexity is easier to address when it is introduced than after other code begins to depend on it. Review provides context for judging whether a change is more complex than its requirement warrants, while static analysis makes trends such as growing complexity and duplication visible.

Unrecorded debt can accumulate until routine changes become costly or risky, particularly as more code depends on a difficult design. Tracking the debt keeps its effect visible, while regular refactoring prevents remediation from depending on a separate future effort that may never receive priority.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
