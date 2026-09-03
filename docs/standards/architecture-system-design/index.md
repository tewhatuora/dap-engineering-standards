# Architecture & System Design

## Overview
System design and technology choices have a lasting impact on how a system can be operated, modified, and integrated with other systems. This section defines the engineering standards for making those decisions deliberately and consistently.

Choose a standard below to see its full requirements.

## Directory

#### Service & Domain Design

> A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

[Read more](service-domain-design.md).

#### Schema Design & Evolution

> A schema is owned by exactly one service, and evolved through version-controlled, backward-compatible changes.

[Read more](schema-design-evolution.md).

#### API Design

> Design and version every API contract-first, so a breaking change never surprises an existing consumer.

[Read more](api-design.md).

#### Event-Driven Messaging

> Every event has a defined contract and delivery guarantee; every consumer safely tolerates duplicates.

[Read more](event-driven-messaging.md).

#### Health Data Interoperability

> Exchange health data using recognised interoperability standards and shared clinical terminology, not proprietary formats.

[Read more](health-data-interoperability.md).

#### Runtime Architecture

> Choose a workload's packaging, runtime model, and deployment location deliberately, based on its requirements.

[Read more](runtime-architecture.md).

#### Technology Stack Governance

> Every technology is classified as approved, trial, or deprecated, with new technologies subject to governance before adoption.

[Read more](technology-stack-governance.md).

#### Technology Stack Register

> Every technology's approved, trial, or deprecated status is tracked in one authoritative, up-to-date register.

[Read more](technology-stack-register.md).
