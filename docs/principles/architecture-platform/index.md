---
last_edited: 2026-09-11
---

# Architecture and Platform

## Overview

Architecture and platform decisions establish the boundaries, dependencies, and technology commitments that determine whether systems can integrate and change independently. These principles align those decisions with domain and workload needs while preserving future choice.

Choose a principle below to read its full reasoning.

## Principles

### Shared Platform

Runtime and deployment choices reflect each workload's requirements, with alternatives used only where shared platform capabilities cannot meet them.

[Read more](shared-platform.md).

### Domain-Aligned Services

Service boundaries follow cohesive business domains so services can own their decisions and change independently.

[Read more](domain-aligned-services.md).

### Distributed Consistency

Cross-service workflows preserve service-local transactions through explicit consistency and recovery models.

[Read more](distributed-consistency.md).

### Vendor Lock-in and Portability

Technology choices make vendor coupling explicit and preserve the ability to extract data and replace dependencies.

[Read more](vendor-lock-in-portability.md).

### Interoperability

Services integrate through explicit, reusable contracts that preserve shared meaning and evolve without breaking consumers.

[Read more](interoperability.md).

### Stateless Architecture

Services keep request handling independent of individual instances so they can scale, recover, and retry safely.

[Read more](stateless-architecture.md).
