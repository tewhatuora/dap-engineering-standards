---
last_edited: 2026-09-11
---

# Vendor Lock-in and Portability

## Lock-in Assessment and Justification

### Summary

Lock-in is assessed during technology selection, accepted only when its capability justifies the resulting loss of choice and replacement effort, and reassessed when that basis changes.

### Reasoning

Lock-in can increase the cost, time, and disruption involved in replacing a technology or provider. Assessing it before adoption makes that loss of choice visible while alternatives remain available and allows the expected benefit to be weighed against the future replacement effort.

Defaults and familiarity do not by themselves establish a benefit worth that cost. Reassessment is also necessary because alternatives, commercial terms, and the provider's ability to deliver the capability can change, leaving the original trade-off no longer justified.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Exit Planning

### Summary

The exit path for a costly-to-reverse commitment is assessed before adoption, and any lack of a practical exit is treated as a deliberate risk.

### Reasoning

The cost, time, and disruption of leaving a commitment can determine whether a later change remains practical, regardless of the technical alternatives available at that time. Once the commitment is established, data migration, replacement work, and service disruption can make an otherwise desirable exit unaffordable.

Assessing the exit path before adoption exposes these constraints while other options remain available. If no practical exit exists, recording that condition as a deliberate risk makes the resulting limit on future change part of the decision.

### Implemented By These Standards

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Vendor Abstraction

### Summary

An abstraction shields a system from a vendor-specific dependency when the reduction in vendor-specific change, migration effort, and replacement risk justifies its implementation and maintenance cost.

### Reasoning

Vendor-specific behaviour spread throughout a system increases the number of components that must change when the dependency is replaced. Concentrating that integration behind a defined interface limits the replacement work and prevents the vendor's model from becoming part of unrelated application logic.

The abstraction itself adds code, maintenance, and constraints, and it may not conceal every meaningful difference between providers. It improves portability only when the vendor-specific change, migration effort, and replacement risk it reduces justify those costs.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Data Portability

### Summary

Data held by a vendor or platform remains extractable in a usable, non-proprietary format, with exports tested at defined intervals and after changes to the export format or mechanism.

### Reasoning

Replacing a vendor or platform is not practical when retained data cannot be extracted or interpreted outside the system that holds it. A proprietary format or unavailable export mechanism can preserve access during normal use while preventing the data from moving when the service needs to leave.

A usable, non-proprietary export keeps the data independent of the current platform. Periodic verification shows that the export remains complete and usable, detecting a loss of portability before a migration depends on it.

### Implemented By These Standards

- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
