# Service & Domain Design

## Summary

> A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

## Standards

### Domain-Aligned Service Boundaries

> A service's boundary is scoped to a single business domain, identifiable without inspecting its internals.

1. A service **MUST** be scoped around a single, cohesive business domain or subdomain, not an arbitrary technical or organisational division.
2. A service's responsibility **MUST** be identifiable from its domain boundary alone, without inspecting its internal implementation.

#### References

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

### Single Ownership of a Service's Data

> A service's data is owned exclusively by that service; no other service reads or writes to it directly.

1. A service's data **MUST** be owned exclusively by that service; another service **MUST NOT** read from or write to a data store it does not own.

#### References

- [Schema Design & Evolution](schema-design-evolution.md)

### Independent Deployability & Scalability

> A service deploys and scales independently of other services, without a coordinated, simultaneous release.

1. A service **MUST** be deployable and scalable independently of other services, without requiring a coordinated, simultaneous release.
2. A service's internal implementation **MAY** change freely provided its published interface's contract is preserved, so a dependent service is not required to change in step.

#### References

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)

### Interaction Only Through Published Interfaces

> A service interacts with another service only through its well-defined, published interface, never direct access.

1. A service **MUST** communicate with another service only through a well-defined, published interface; direct access to another service's internal code or underlying infrastructure **MUST NOT** be used as an integration mechanism.
2. A service's published interface **MUST** be the only path another service or consumer relies on, regardless of the underlying communication mechanism used.

#### References

- [Interoperability by Design](../../principles/architecture-platform/interoperability-by-design.md)
- [API Design](api-design.md)
- [Event-Driven Messaging](event-driven-messaging.md)

### Right-Sizing Service Granularity

> A service's granularity follows domain cohesion, evaluated for decomposition or consolidation when it drifts.

1. Service granularity **SHOULD** be driven by domain cohesion, not decomposed to an arbitrarily fine or coarse level.
2. A service spanning more than one distinct business domain **SHOULD** be evaluated for decomposition.
3. Multiple services separately implementing parts of a single, cohesive business domain, without an independent reason for the separation, **SHOULD** be evaluated for consolidation.

### Single Team Accountability for a Service

> Exactly one team is accountable for a service, and reviews every change to it regardless of who contributes.

1. A service **MUST** have exactly one team or group accountable for it, declared as the code owner in a `CODEOWNERS` file for its repository, regardless of how many teams contribute changes to it.
2. A contribution from a team other than a service's accountable team **MUST** still be reviewed and approved by the accountable team before being merged.

### Duplicated Domain Logic Across Services

> A core business rule has one authoritative implementation, reused rather than reimplemented across services.

1. A core business rule or domain concept **MUST** have a single authoritative implementation; it **MUST NOT** be independently reimplemented across multiple services.
2. Where more than one service requires the same domain logic, it **SHOULD** be obtained from its owning service's interface or a shared, reusable component, rather than duplicated.

#### References

- [Reuse Before Reinvention](../../principles/engineering-practice/reuse-before-reinvention.md)
