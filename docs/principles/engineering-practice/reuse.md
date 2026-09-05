# Reuse

## Reuse, Adopt, Build

### Summary

Existing solutions are evaluated before development begins, with internal reuse preferred over external adoption and custom development used only when neither meets the requirement.

### Reasoning

Assuming that no suitable solution exists can duplicate capability and commit development effort before the available options are understood. Discovery at design time establishes whether an existing solution meets the requirement while the approach can still change without rework.

This order prevents a custom build from being chosen before suitable existing options have been exhausted. Familiarity and convenience do not establish that an existing option fails to meet the requirement.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Reusable Interfaces

### Summary

A component, service, or library likely to be reused exposes a stable, documented, and versioned interface so another team can adopt it without depending on its internals.

### Reasoning

A documented interface separates a reusable capability from its internal implementation. Stability and versioning allow providers and consumers to change independently.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
