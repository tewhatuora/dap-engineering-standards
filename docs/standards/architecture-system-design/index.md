# Architecture System Design Overview

## [Service & Domain Design](service-domain-design.md)

_A service is scoped to one business domain, so it can be built, deployed, and evolved independently._

## [Schema Design & Evolution](schema-design-evolution.md)

_A schema is owned by exactly one service, and changed only through version-controlled, backward-compatible migrations._

## [API Design & Standards](api-design-standards.md)

_Design and version every API contract-first, so a breaking change never surprises an existing consumer._

## [Event-Driven Messaging Standards](event-driven-messaging-standards.md)

_Every event has a documented schema and a defined delivery guarantee; every consumer tolerates duplicates safely._

## [Health Data Interoperability](health-data-interoperability.md)

_Exchange health data through recognised standards such as FHIR and shared clinical terminology, not a proprietary format._

## [Runtime Architecture](runtime-architecture.md)

_Choose a workload's packaging, runtime model, and deployment location deliberately, not by default._

## [Technology Stack Governance](technology-stack-governance.md)

_Every technology is classified as approved, trial, or deprecated, and reviewed through governance before it is adopted._

## [Technology Stack Register](technology-stack-register.md)

_Every technology's approved, trial, or deprecated status is tracked in one authoritative, up-to-date register._
