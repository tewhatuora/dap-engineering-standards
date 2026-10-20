---
last_edited: 2026-10-21
---

# Architecture and Platform

## Overview

Architecture and platform decisions set system boundaries, dependencies, and technology commitments. These choices shape how systems integrate and whether they can change independently. These principles guide choices that meet domain and workload needs while keeping future options open.

Choose a principle below to read its full reasoning.

## Principles

### [Shared Platform](shared-platform.md)

Runtime and deployment choices are based on each workload's requirements, with alternatives used only where the shared platform cannot meet them.

### [Domain-Aligned Services](domain-aligned-services.md)

Service boundaries follow cohesive business domains, giving each service responsibility for its decisions and the ability to change independently.

### [Distributed Consistency](distributed-consistency.md)

Workflows across services keep transactions within each service and explicitly define how to reach a consistent state and recover from failures.

### [Vendor Lock-in and Portability](vendor-lock-in-portability.md)

Technology choices make the extent of vendor dependence clear and preserve the ability to extract data and replace dependencies.

### [Interoperability](interoperability.md)

Services integrate through explicit, reusable contracts that keep data meaning consistent and can evolve without breaking consumers.

### [Stateless Architecture](stateless-architecture.md)

Services handle requests without depending on a particular instance so they can scale, recover, and retry safely.
