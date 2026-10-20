---
last_edited: 2026-10-20
---

# Architecture & System Design

## Overview

Architecture standards govern how systems are structured, integrated, operated, and modified.

Choose a standard below to read it in full.

## Standards

### [Service & Domain Design](service-domain-design.md)

A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

### [Schema Design & Evolution](schema-design-evolution.md)

A schema is owned by exactly one service and evolves through version-controlled, backward-compatible changes.

### [API Design](api-design.md)

Every API follows a contract-first design and versioning approach so breaking changes do not affect existing consumers unexpectedly.

### [Event-Driven Messaging](event-driven-messaging.md)

Every event has a defined contract and delivery guarantee; every consumer safely tolerates duplicates.

### [Health Data Interoperability](health-data-interoperability.md)

Health data is exchanged using recognised interoperability standards and shared clinical terminology.

### [Runtime Architecture](runtime-architecture.md)

A workload's packaging, runtime model, and deployment location are selected according to its requirements.
