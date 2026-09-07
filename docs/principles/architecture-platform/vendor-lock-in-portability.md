# Vendor Lock-in & Portability

## Lock-in Assessment and Justification

### Summary

Lock-in is identified and weighed during technology selection, accepted only where a genuine benefit justifies it, and reassessed when the basis for that decision changes.

### Reasoning

Lock-in can increase the cost, time, and disruption involved in changing a technology or provider. Evaluating it before adoption establishes whether a capability's benefit outweighs the resulting loss of choice and replacement effort while alternatives remain available. Defaults and familiarity do not establish that benefit.

A benefit that once justified lock-in can diminish as alternatives improve or a vendor's commercial terms and ability to provide the capability change. Reassessment identifies when the original trade-off no longer supports continued coupling.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Exit Planning

### Summary

The exit path for a costly-to-reverse commitment is assessed before adoption, and the absence of a practical exit is treated as a deliberate risk.

### Reasoning

The cost, time, and disruption of leaving a commitment can determine whether a later change remains practical. Considering the exit path before committing exposes those constraints while other options remain available, and identifies a critical dependency without a practical exit as a deliberate risk to future change.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Vendor Abstraction

### Summary

An abstraction shields a system from a vendor-specific dependency where it can do so without adding disproportionate cost or complexity.

### Reasoning

Concentrating vendor-specific integration behind a defined interface or adapter limits the parts of a system requiring change when a dependency is replaced. The abstraction improves portability only when its implementation and maintenance costs remain proportionate to the lock-in risk it reduces.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Data Portability

### Summary

Data held by a vendor or platform remains extractable in a usable, non-proprietary format, and that ability is verified periodically.

### Reasoning

Replacing a vendor or platform can make retained data inaccessible when its export depends on a proprietary format or an unavailable mechanism. A usable, non-proprietary export preserves that data independently of the system that holds it, while periodic verification detects a loss of portability before migration requires an export.

### Implemented By These Standards

- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
