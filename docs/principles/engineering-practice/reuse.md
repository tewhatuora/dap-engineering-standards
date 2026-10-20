---
last_edited: 2026-10-21
---

# Reuse

## Reuse, Adopt, Build

### Summary

Engineers evaluate existing solutions before development begins, preferring internal reuse over external adoption and building a custom solution only when neither meets the requirement.

### Reasoning

Starting development without checking existing options can duplicate capability and waste effort. Evaluating those options during design avoids committing to a new implementation that users and other systems may come to depend on.

Reusing an internal solution avoids creating another implementation to support. When no internal solution meets the requirement, an external solution can avoid the ongoing cost of custom development. Familiarity with a technology or the convenience of building something new does not justify rejecting a suitable existing option.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)

## Reusable Interfaces

### Summary

Reusable components, services, and libraries have stable, documented, and versioned interfaces so other teams can use them without understanding their implementation.

### Reasoning

A documented interface tells consumers what behaviour they can rely on without understanding the implementation. It keeps them from depending on internal design choices and gives every consumer the same contract.

Stable, versioned interfaces let providers improve an implementation without unexpectedly breaking consumers. Versioning gives consumers a clear migration path when the contract changes. Without a stable contract, teams have to coordinate changes that they should be able to make independently.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
