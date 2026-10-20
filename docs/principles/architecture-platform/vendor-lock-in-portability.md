---
last_edited: 2026-10-21
---

# Vendor Lock-in and Portability

## Lock-in Assessment and Justification

### Summary

Engineers assess lock-in when selecting technology, accept it only when the capability gained justifies the loss of choice and replacement effort, and reassess it when that basis changes.

### Reasoning

Lock-in can make replacing a technology or provider more costly, time-consuming, and disruptive. Assessing it before adoption makes the loss of choice clear while alternatives are still available. Engineers can then weigh the expected benefit against the effort of a future replacement.

Being a default or a familiar choice does not by itself justify that cost. Alternatives, commercial terms, and the provider's ability to deliver the capability can also change. Reassessment checks whether the original trade-off still holds.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Vendor Abstraction

### Summary

An abstraction isolates a vendor-specific dependency when the reduction in vendor-specific changes, migration effort, and replacement risk justifies the cost of building and maintaining it.

### Reasoning

When vendor-specific behaviour is spread throughout a system, replacing the dependency requires changes to more components. Keeping that integration behind a defined interface limits the work and keeps the vendor's model out of unrelated application logic.

The abstraction adds code, maintenance, and constraints of its own. It may not hide every important difference between providers. It improves portability only when the reduction in vendor-specific changes, migration effort, and replacement risk justifies those costs.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Data Portability

### Summary

Data held by a vendor or platform can be extracted in a usable, non-proprietary format, and exports are tested at defined intervals and after changes to the export format or mechanism.

### Reasoning

Replacing a vendor or platform is not practical if its data cannot be extracted or understood outside that system. A proprietary format or lack of an export mechanism may not prevent normal use, but can prevent data from moving when the service needs to leave.

A usable, non-proprietary export keeps data independent of the current platform. Regular checks show whether exports remain complete and usable, revealing a loss of portability before a migration depends on them.

### Implemented By These Standards

- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
