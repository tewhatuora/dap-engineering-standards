# Service & Domain Design

## Summary

> A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

## Objective

This standard defines requirements for how a service's scope, data ownership, and boundaries are deliberately aligned to a single business domain. It keeps a service independently deployable with a clearly defined domain boundary, so each can evolve, scale, and be maintained without unintended coupling to another service's internal implementation.

## Standards

### Domain-Aligned Service Boundaries

These requirements set out how a service's boundary is scoped to a single business domain.

1. A service **MUST** be scoped around a single, cohesive business domain or subdomain, not an arbitrary technical or organisational division.
2. A service's responsibility **MUST** be identifiable from its domain boundary alone, without inspecting its internal implementation.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Single Ownership of a Service's Data

This requirement addresses how a service's data is owned exclusively by that service.

1. A service's data **MUST** be owned exclusively by that service; another service **MUST NOT** read from or write to a data store it does not own.

#### References

- [Schema Design & Evolution](schema-design-evolution.md)

### Independent Deployability & Scalability

These requirements describe how a service is deployed and scaled independently of other services.

1. A service **MUST** be deployable and scalable independently of other services, without requiring a coordinated, simultaneous release.
2. A service's internal implementation **MAY** change freely provided its published interface's contract is preserved, so a dependent service is not required to change in step.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Interaction Only Through Published Interfaces

These requirements cover how a service's interaction with another service is confined to a well-defined, published interface.

1. A service **MUST** communicate with another service only through a well-defined, published interface; direct access to another service's internal code or underlying infrastructure **MUST NOT** be used as an integration mechanism.
2. A service's published interface **MUST** be the only path another service or consumer relies on, regardless of the underlying communication mechanism used.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [API Design & Standards](api-design-standards.md)
- [Event-Driven Messaging Standards](event-driven-messaging-standards.md)

### Right-Sizing Service Granularity

These requirements guide how a service's granularity is judged against domain cohesion, neither too fine nor too coarse.

1. Service granularity **SHOULD** be driven by domain cohesion, not decomposed to an arbitrarily fine or coarse level.
2. A service spanning more than one distinct business domain **SHOULD** be evaluated for decomposition.
3. Multiple services separately implementing parts of a single, cohesive business domain, without an independent reason for the separation, **SHOULD** be evaluated for consolidation.

### Single Team Accountability for a Service

These requirements set out how accountability for a service is held by exactly one team.

1. A service **MUST** have exactly one team or group accountable for it, declared as the code owner in a `CODEOWNERS` file for its repository, regardless of how many teams contribute changes to it.
2. A contribution from a team other than a service's accountable team **MUST** still be reviewed and approved by the accountable team before being merged.

### Duplicated Domain Logic Across Services

These requirements address how a core business rule is prevented from being independently reimplemented across services.

1. A core business rule or domain concept **MUST** have a single authoritative implementation; it **MUST NOT** be independently reimplemented across multiple services.
2. Where more than one service requires the same domain logic, it **SHOULD** be obtained from its owning service's interface or a shared, reusable component, rather than duplicated.

#### References

- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
