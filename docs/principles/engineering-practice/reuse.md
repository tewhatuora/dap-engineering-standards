---
last_edited: 2026-09-11
---

# Reuse

## Reuse, Adopt, Build

### Summary

Existing solutions are evaluated before development begins, with internal reuse preferred over external adoption and custom development used only when neither meets the requirement.

### Reasoning

Starting development without checking existing options can duplicate capability and waste effort. Checking those options during design avoids committing to a new implementation before users and other systems depend on it.

Internal reuse avoids creating another implementation and its support burden. When no internal solution meets the requirement, adopting an external solution can avoid the ongoing cost of custom development. Familiarity with a technology or the convenience of building a new solution does not justify rejecting a suitable existing option.

### Implemented By These Standards

- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)

## Reusable Interfaces

### Summary

Reusable components, services, and libraries have stable, documented, and versioned interfaces so other teams can use them without understanding their implementation.

### Reasoning

A documented interface tells consumers what behaviour they can rely on without requiring them to understand the implementation. It prevents internal design choices from becoming dependencies and gives every consumer the same contract.

Stable, versioned interfaces allow providers to improve an implementation without unexpectedly breaking consumers. Versioning also provides a clear migration path when the contract changes. Without a stable contract, changes require coordination between teams that should be able to work independently.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
