---
last_edited: 2026-09-10
---

# Reuse

## Reuse, Adopt, Build

### Summary

Existing solutions are evaluated before development begins; internal reuse is preferred, followed by external adoption, with custom development used only when neither meets the requirement.

### Reasoning

Starting development before checking existing options can duplicate capability and commit effort before the available choices are understood. Evaluating those choices during design leaves time to change the approach before a new implementation gains users and dependencies that make replacement difficult.

Internal reuse avoids creating another implementation and support burden. When no internal solution meets the requirement, external adoption can avoid the continuing cost of custom development; familiarity or convenience alone does not make an existing option unsuitable.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Reusable Interfaces

### Summary

Reusable components, services, and libraries provide stable, documented, and versioned interfaces that other teams can use without knowing their internals.

### Reasoning

A documented interface tells consumers what behaviour they can rely on without requiring them to understand the implementation. This prevents internal design choices from becoming accidental dependencies and gives different consumers the same basis for adopting the capability.

Stability and versioning allow providers to improve the implementation without unexpectedly breaking consumers and provide a clear path when the contract must change. Without that contract, changes require coordination across teams that should be able to work independently.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
