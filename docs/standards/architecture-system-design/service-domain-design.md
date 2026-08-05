# Service & Domain Design

## Objective

Service & Domain Design establishes the expectation that a service's scope, data ownership, and boundaries are deliberately aligned to a single business domain, rather than shaped by incidental technical structure or organisational convenience. It directs engineering effort toward services that are independently deployable and have a clearly defined domain boundary, so each can evolve, scale, and be maintained without unintended coupling to another service's internal implementation.

## Standards

### Service Boundaries Aligned to Business Domains

These requirements scope a service around a single, cohesive business domain.

1. A service must be scoped around a single, cohesive business domain or subdomain, not an arbitrary technical or organisational division.
2. A service's responsibility must be identifiable from its domain boundary alone, without inspecting its internal implementation.

#### References

[Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Single Ownership of a Service's Data

This requirement keeps a service's data owned by that service alone.

1. A service's data must be owned exclusively by that service; another service must not read from or write to a data store it does not own.

#### References

[Schema Design & Evolution](schema-design-evolution.md)

### Independent Deployability

These requirements let a service be deployed and scaled without coordinating with other services.

1. A service must be deployable and scalable independently of other services, without requiring a coordinated, simultaneous release.
2. A service's internal implementation may change freely provided its published interface's contract is preserved, so a dependent service is not required to change in step.

#### References

[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Interaction Only Through Published Interfaces

These requirements confine service-to-service interaction to a well-defined, published interface.

1. A service must communicate with another service only through a well-defined, published interface; direct access to another service's internal code or underlying infrastructure must not be used as an integration mechanism.
2. A service's published interface must be the only path another service or consumer relies on, regardless of the underlying communication mechanism used.

#### References

[Interoperability by Design](../../principles/interoperability-by-design.md)\
[API Design & Standards](api-design-standards.md)\
[Event-Driven Messaging Standards](event-driven-messaging-standards.md)

### Right-Sizing Service Granularity

These requirements keep a service's granularity driven by domain cohesion, neither too fine nor too coarse.

1. Service granularity should be driven by domain cohesion, not decomposed to an arbitrarily fine or coarse level.
2. A service spanning more than one distinct business domain should be evaluated for decomposition.
3. Multiple services separately implementing parts of a single, cohesive business domain, without an independent reason for the separation, should be evaluated for consolidation.

### Single Team Accountability for a Service

These requirements assign exactly one team accountable for a service.

1. A service must have exactly one team or group accountable for it, declared as the code owner in a `CODEOWNERS` file for its repository, regardless of how many teams contribute changes to it.
2. A contribution from a team other than a service's accountable team must still be reviewed and approved by the accountable team before being merged.

### Duplicated Domain Logic Across Services

These requirements prevent a core business rule from being independently reimplemented across services.

1. A core business rule or domain concept must have a single authoritative implementation; it must not be independently reimplemented across multiple services.
2. Where more than one service requires the same domain logic, it should be obtained from its owning service's interface or a shared, reusable component, rather than duplicated.

#### References

[Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
