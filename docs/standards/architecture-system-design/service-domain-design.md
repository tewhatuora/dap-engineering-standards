# Service & Domain Design

A service is scoped to one business domain, so it can be built, deployed, and evolved independently.

## Domain Boundaries

### Summary

A service's boundary is scoped to a single business domain, identifiable without inspecting its internals.

### Standards

1. `std-arch-domain-boundaries-01` A service **MUST** be scoped around a single, cohesive business domain or subdomain.
2. `std-arch-domain-boundaries-02` A service's responsibility **MUST** be identifiable from its domain boundary alone, without inspecting its internal implementation.

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Service Granularity

### Summary

A service's granularity follows domain cohesion and is reassessed for decomposition or consolidation when that cohesion declines.

### Standards

1. `std-arch-service-granularity-01` Service granularity **SHOULD** reflect domain cohesion at a level justified by the domain.
2. `std-arch-service-granularity-02` A service spanning more than one distinct business domain **SHOULD** be evaluated for decomposition.
3. `std-arch-service-granularity-03` Multiple services separately implementing parts of a single, cohesive business domain, without an independent reason for the separation, **SHOULD** be evaluated for consolidation.

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

## Integration Requirements

### Summary

A service's integration needs are identified before its design is complete.

### Standards

1. `std-arch-integration-requirements-01` A service design **MUST** identify every system or consumer that will exchange data or functionality with the service, what it will exchange, and the exchange format before the design is considered complete.

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Published Interfaces

### Summary

A service interacts with another service only through its well-defined, published interface.

### Standards

1. `std-arch-published-interfaces-01` A service **MUST** communicate with another service only through a well-defined, published interface.
2. `std-arch-published-interfaces-02` Direct access to another service's internal code or underlying infrastructure **MUST NOT** be used as an integration mechanism.
3. `std-arch-published-interfaces-03` A service's published interface **MUST** be the only path another service or consumer relies on, regardless of the underlying communication mechanism used.

### Related Standards

- [API Design](api-design.md)
- [Event-Driven Messaging](event-driven-messaging.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Service Data Ownership

### Summary

A service exclusively owns its data and exposes it to other services only through published interfaces.

### Standards

1. `std-arch-service-data-ownership-01` A service's data **MUST** be owned exclusively by that service.
2. `std-arch-service-data-ownership-02` Another service **MUST NOT** read from or write to a data store it does not own.

### Related Standards

- [Schema Design & Evolution](schema-design-evolution.md)

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

## Independent Deployment & Scaling

### Summary

A service deploys and scales independently, preserves its published contract as its implementation changes, scales horizontally by default, adjusts capacity automatically to sustained demand, and reassesses its scaling approach near known limits.

### Standards

1. `std-arch-independent-deployment-scaling-01` A service **SHOULD** be deployable and scalable independently of other services, without requiring a coordinated, simultaneous release.
2. `std-arch-independent-deployment-scaling-02` A service's internal implementation **MAY** change freely provided its published interface's contract is preserved, so a dependent service is not required to change in step.
3. `std-arch-independent-deployment-scaling-03` A service **SHOULD** be designed to scale horizontally by adding or removing instances to meet demand.
4. `std-arch-independent-deployment-scaling-04` Where elastic scaling is used, capacity **SHOULD** adjust automatically to a sustained change in demand.
5. `std-arch-independent-deployment-scaling-05` Sustained performance degradation, or a component approaching a known scaling limit, **SHOULD** trigger a reassessment of the service's scaling approach.

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Scaling Constraints

### Summary

A component-level scaling constraint is identified during design and addressed or accepted as a bounded limitation.

### Standards

1. `std-arch-scaling-constraints-01` A component that cannot scale independently of the rest of a service, or that constitutes a single point of contention under load, **MUST** be identified during design.
2. `std-arch-scaling-constraints-02` An identified scaling constraint **MUST** be addressed or explicitly accepted as a bounded limitation before the service depends on it in production.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Service Accountability

### Summary

Exactly one team is accountable for a service, and reviews every change to it regardless of who contributes.

### Standards

1. `std-arch-service-accountability-01` A service **MUST** have exactly one team or group accountable for it, declared as the code owner in a `CODEOWNERS` file for its repository, regardless of how many teams contribute changes to it.
2. `std-arch-service-accountability-02` A contribution from a team other than a service's accountable team **MUST** still be reviewed and approved by the accountable team before being merged.

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

## Shared Domain Logic

### Summary

A core business rule has one authoritative implementation that is reused across services.

### Standards

1. `std-arch-shared-domain-logic-01` A core business rule or domain concept **MUST** have a single authoritative implementation.
2. `std-arch-shared-domain-logic-02` A core business rule or domain concept **MUST NOT** be independently reimplemented across multiple services.
3. `std-arch-shared-domain-logic-03` Where more than one service requires the same domain logic, it **SHOULD** be obtained from its owning service's interface or a shared, reusable component.

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)
- [Reuse](../../principles/engineering-practice/reuse.md)
