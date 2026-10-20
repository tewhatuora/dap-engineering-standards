---
last_edited: 2026-10-20
---

# Architecture and Platform

## Overview

Architecture and platform decisions establish the boundaries, dependencies, and technology commitments that determine whether systems can integrate and change independently. These principles align those decisions with domain and workload needs while preserving future choice.

Choose a principle below to read its full reasoning.

## Principles

### [Shared Platform](shared-platform.md)

Runtime and deployment choices reflect each workload's requirements, with alternatives used only where shared platform capabilities cannot meet them.

### [Domain-Aligned Services](domain-aligned-services.md)

Service boundaries follow cohesive business domains so services can own their decisions and change independently.

### [Distributed Consistency](distributed-consistency.md)

Cross-service workflows preserve service-local transactions through explicit consistency and recovery models.

### [Vendor Lock-in and Portability](vendor-lock-in-portability.md)

Technology choices make vendor coupling explicit and preserve the ability to extract data and replace dependencies.

### [Interoperability](interoperability.md)

Services integrate through explicit, reusable contracts that preserve shared meaning and evolve without breaking consumers.

### [Stateless Architecture](stateless-architecture.md)

Services keep request handling independent of individual instances so they can scale, recover, and retry safely.
