# Architecture & System Design

## Overview
System design and technology choices have a lasting impact on how a system can be operated, modified, and integrated with other systems, and this section sets out the standards that ensure those decisions are made deliberately and consistently.

Choose a standard below to see its full requirements.

## Directory

#### Service & Domain Design

> A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

[Read more](service-domain-design.md).

#### Schema Design & Evolution

> A schema is owned by exactly one service, and changed only through version-controlled, backward-compatible migrations.

[Read more](schema-design-evolution.md).

#### API Design & Standards

> Design and version every API contract-first, so a breaking change never surprises an existing consumer.

[Read more](api-design-standards.md).

#### Event-Driven Messaging Standards

> Every event has a documented schema and a defined delivery guarantee; every consumer tolerates duplicates safely.

[Read more](event-driven-messaging-standards.md).

#### Health Data Interoperability

> Exchange health data through recognised standards such as FHIR and shared clinical terminology, not a proprietary format.

[Read more](health-data-interoperability.md).

#### Runtime Architecture

> Choose a workload's packaging, runtime model, and deployment location deliberately, not by default.

[Read more](runtime-architecture.md).

#### Technology Stack Governance

> Every technology is classified as approved, trial, or deprecated, and reviewed through governance before it is adopted.

[Read more](technology-stack-governance.md).

#### Technology Stack Register

> Every technology's approved, trial, or deprecated status is tracked in one authoritative, up-to-date register.

[Read more](technology-stack-register.md).
