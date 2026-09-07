# Architecture & System Design

## Overview

Architecture standards govern how systems are structured, integrated, operated, modified, and supported by approved technology.

Choose a standard below to read it in full.

## Standards

### Service & Domain Design

A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

[Read more](service-domain-design.md).

### Schema Design & Evolution

A schema is owned by exactly one service and evolves through version-controlled, backward-compatible changes.

[Read more](schema-design-evolution.md).

### API Design

Every API follows a contract-first design and versioning approach so breaking changes do not affect existing consumers unexpectedly.

[Read more](api-design.md).

### Event-Driven Messaging

Every event has a defined contract and delivery guarantee; every consumer safely tolerates duplicates.

[Read more](event-driven-messaging.md).

### Health Data Interoperability

Health data is exchanged using recognised interoperability standards and shared clinical terminology.

[Read more](health-data-interoperability.md).

### Runtime Architecture

A workload's packaging, runtime model, and deployment location are selected according to its requirements.

[Read more](runtime-architecture.md).

### Technology Stack Governance

Every technology is classified as approved, trial, or deprecated, and a new technology is approved before adoption.

[Read more](technology-stack-governance.md).
