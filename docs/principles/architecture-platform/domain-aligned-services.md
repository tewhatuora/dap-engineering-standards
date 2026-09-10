---
last_edited: 2026-09-10
---

# Domain-Aligned Services

## Cohesive Domain Boundaries

### Summary

A service is scoped to one cohesive business domain or subdomain, with its responsibility clear from its boundary.

### Reasoning

A boundary based on business responsibility keeps related behaviour, rules, and data within the same service. Changes to a domain concept can then be made where that concept is owned without coordinating across services divided by technical layer or organisational structure.

A boundary that separates decisions which change together creates unnecessary dependencies and obscures what each service is responsible for. A clear domain boundary makes the service's purpose understandable without knowledge of its implementation and allows that implementation to evolve within a stable area of responsibility.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Independent Service Delivery

### Summary

A service is deployable and releasable independently of other services by default.

### Reasoning

Requiring several services to be deployed or released together couples their change cadence and makes each release depend on all participants being ready. It also limits recovery because restoring one service may require coordinated changes to others.

Independent change allows each service to evolve, validate, release, and recover according to its own needs while preserving its published contracts. Where coordination cannot be avoided, treating it as an explicit exception makes the dependency and recovery approach visible instead of allowing simultaneous change to become routine.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Service-Owned Data

### Summary

Each service exclusively owns its data, and other services access that data only through published interfaces.

### Reasoning

Direct access to another service's data bypasses the rules that the owning service applies and couples consumers to its storage model. A consumer can then depend on internal structures or make changes that leave the data inconsistent with the owner's business rules.

Exclusive ownership keeps validation, consistency, and schema evolution with the service responsible for the data. Published interfaces give consumers a supported contract while allowing the owner to change its internal implementation without coordinating those changes with every consumer.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Proportionate Service Granularity

### Summary

Service granularity follows domain cohesion and is reconsidered when one service spans separate domains or several services divide one domain without a distinct need.

### Reasoning

A domain divided across too many services requires coordination for changes that belong to one business responsibility. This adds interface, deployment, and operational overhead without creating boundaries that can evolve independently.

A service that spans unrelated domains creates the opposite problem by coupling changes and scaling decisions that do not need to move together. Reconsidering both conditions keeps granularity aligned with domain responsibilities instead of an arbitrary preferred service size.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Authoritative Domain Logic

### Summary

A core business rule has one authoritative implementation that other services use through its owning service or a shared component.

### Reasoning

Separate implementations of the same business rule can interpret it differently and drift further apart as the rule changes. The same input can then produce different outcomes depending on which service applies the rule.

One authoritative implementation keeps the rule consistent and establishes where changes to its behaviour belong. Access through an owning service or shared component allows other services to apply the rule without maintaining separate versions of its logic.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
