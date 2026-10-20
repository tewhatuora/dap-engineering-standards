---
last_edited: 2026-10-21
---

# Shared Platform

## Runtime Selection by Workload

### Summary

A workload's runtime model and deployment location are explicit design decisions based on its requirements.

### Reasoning

Runtime and deployment choices determine a workload's capabilities, constraints, operating model, and provider dependencies. Once the implementation depends on those choices, moving the workload can mean changing its design, delivery, and support arrangements.

Choosing during design lets engineers check that the runtime and location meet the workload's functional and operational needs before the implementation depends on them. A choice that suits one workload may not suit another. Each workload's requirements still need to be considered when using a shared default.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Justified Platform Alternatives

### Summary

An alternative to the shared platform is used only when, and for as long as, the platform cannot meet a specific workload requirement.

### Reasoning

An alternative adds technology and an operating model to secure, support, and maintain alongside the shared platform. A limited evaluation tests whether it meets the requirement before the organisation takes on those ongoing costs and dependencies.

Where the missing capability would benefit other workloads, adding it to the shared platform avoids a separate solution for one team. Reassessing the alternative as requirements and platform capabilities change prevents it from staying in use after its benefit no longer justifies the extra cost and risk.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
