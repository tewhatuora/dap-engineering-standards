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
- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

### Single Ownership of a Service's Data

### Integration Needs Identified During Design

> A service's integration needs are identified before its design is complete.

1. A service design **MUST** identify every system or consumer that will exchange data or functionality with the service, what it will exchange, and the exchange format before the design is considered complete.

#### References

- [Interoperability](../../principles/architecture-platform/interoperability.md)

### Single Ownership of a Service's Data

> A service's data is owned exclusively by that service; no other service reads or writes to it directly.

1. A service's data **MUST** be owned exclusively by that service; another service **MUST NOT** read from or write to a data store it does not own.

#### References

- [Schema Design & Evolution](schema-design-evolution.md)
- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

### Independent Deployability & Scalability

> A service deploys and scales independently of other services, scales horizontally by default, adjusts capacity automatically to sustained changes in demand, and reassesses its scaling approach as its limits are approached.

1. A service **MUST** be deployable and scalable independently of other services, without requiring a coordinated, simultaneous release.
2. A service's internal implementation **MAY** change freely provided its published interface's contract is preserved, so a dependent service is not required to change in step.
3. A service **SHOULD** be designed to scale horizontally, by adding or removing instances to meet demand, in preference to scaling a single instance vertically.
4. Where elastic scaling is used, capacity **SHOULD** adjust automatically to a sustained change in demand rather than relying on manual intervention.
5. Sustained performance degradation, or a component approaching a known scaling limit, **SHOULD** trigger a reassessment of the service's scaling approach.

#### References

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

### Scaling Constraints

> A component-level scaling constraint is identified during design and addressed or accepted as a bounded limitation.

1. A component that cannot scale independently of the rest of a service, or that constitutes a single point of contention under load, **MUST** be identified during design.
2. An identified scaling constraint **MUST** be addressed or explicitly accepted as a bounded limitation before the service depends on it in production.

#### References

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

### Interaction Only Through Published Interfaces

> A service interacts with another service only through its well-defined, published interface, never direct access.

1. A service **MUST** communicate with another service only through a well-defined, published interface; direct access to another service's internal code or underlying infrastructure **MUST NOT** be used as an integration mechanism.
2. A service's published interface **MUST** be the only path another service or consumer relies on, regardless of the underlying communication mechanism used.

#### References

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [API Design](api-design.md)
- [Event-Driven Messaging](event-driven-messaging.md)

### Right-Sizing Service Granularity

> A service's granularity follows domain cohesion, evaluated for decomposition or consolidation when it drifts.

1. Service granularity **SHOULD** be driven by domain cohesion, not decomposed to an arbitrarily fine or coarse level.
2. A service spanning more than one distinct business domain **SHOULD** be evaluated for decomposition.
3. Multiple services separately implementing parts of a single, cohesive business domain, without an independent reason for the separation, **SHOULD** be evaluated for consolidation.

#### References

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

### Single Team Accountability for a Service

> Exactly one team is accountable for a service, and reviews every change to it regardless of who contributes.

1. A service **MUST** have exactly one team or group accountable for it, declared as the code owner in a `CODEOWNERS` file for its repository, regardless of how many teams contribute changes to it.
2. A contribution from a team other than a service's accountable team **MUST** still be reviewed and approved by the accountable team before being merged.

### Duplicated Domain Logic Across Services

> A core business rule has one authoritative implementation, reused rather than reimplemented across services.

1. A core business rule or domain concept **MUST** have a single authoritative implementation; it **MUST NOT** be independently reimplemented across multiple services.
2. Where more than one service requires the same domain logic, it **SHOULD** be obtained from its owning service's interface or a shared, reusable component, rather than duplicated.

#### References

- [Reuse](../../principles/engineering-practice/reuse.md)
- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)
