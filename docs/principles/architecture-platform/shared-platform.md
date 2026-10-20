---
last_edited: 2026-10-21
---

# Shared Platform

## Runtime Selection by Workload

### Summary

A workload's runtime model and deployment location are explicit design decisions based on its requirements.

### Reasoning

Runtime and deployment choices determine a workload's capabilities, constraints, operating model, and provider dependencies. Once the implementation depends on those choices, moving the workload can mean changing its design, delivery, and support arrangements.

Choosing the runtime and deployment location during design lets engineers check that both meet the workload's functional and operational needs before the implementation depends on those choices. A choice that suits one workload may not suit another. Each workload's requirements still need to be considered when using a shared default.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
