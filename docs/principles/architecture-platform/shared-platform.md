---
last_edited: 2026-09-11
---

# Shared Platform

## Runtime Selection by Workload

### Summary

A workload's runtime model and deployment location are explicit design decisions based on its requirements.

### Reasoning

Runtime and deployment choices determine the capabilities, constraints, operating model, and provider dependencies a workload inherits. Once implementation relies on those characteristics, moving the workload can require changes to its design, delivery, and support arrangements.

Making the choice during design shows whether the runtime and location support the workload's functional and operational needs before those dependencies become established. A choice that suits one workload does not establish that it suits another, so a shared default cannot replace consideration of each workload's requirements.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Justified Platform Alternatives

### Summary

An alternative to the shared platform is adopted only when the platform cannot meet a specific workload requirement and remains in use only while that limitation persists.

### Reasoning

An alternative introduces a separate technology and operating model that must be secured, supported, and maintained alongside the shared platform. A limited evaluation tests whether it meets the unmet requirement before the organisation commits to those continuing costs and dependencies.

Where the missing capability would benefit other workloads, adding it to the shared platform avoids creating a team-specific parallel solution. Reassessment as requirements and platform capabilities change prevents an alternative from remaining after its benefit no longer justifies the additional cost and risk.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
