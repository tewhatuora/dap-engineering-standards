---
last_edited: 2026-10-21
---

# Domain-Aligned Services

## Cohesive Domain Boundaries

### Summary

A service covers one cohesive business domain or subdomain, and its boundary makes its responsibility clear.

### Reasoning

A boundary based on business responsibility keeps related behaviour, rules, and data in the same service. Engineers can change a domain concept in the service that owns it without coordinating across services divided by technical layer or organisational structure.

Separating decisions that change together creates unnecessary dependencies and makes each service's responsibility harder to understand. A clear domain boundary lets engineers understand the service's purpose without knowing its implementation. The implementation can then evolve while its responsibility stays stable.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Independent Service Delivery

### Summary

By default, a service can be deployed and released independently of other services.

### Reasoning

When services have to be deployed or released together, they can change only when all participants are ready. Recovery is also harder because restoring one service may require coordinated changes to others.

Independent delivery lets engineers change, validate, release, and recover each service according to its needs while preserving its published contracts. Where coordination is unavoidable, an explicit exception makes the dependency and recovery approach clear rather than allowing coordinated changes to become routine.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Service Data Ownership

### Summary

Each service exclusively owns its data, and other services access that data only through published interfaces.

### Reasoning

Direct access to another service's data bypasses its rules and makes consumers depend on its storage model. Consumers may then rely on internal structures or change data in ways that break the owner's business rules.

Exclusive ownership keeps the service responsible for validating its data, maintaining consistency, and evolving its schema. Published interfaces give consumers a supported contract, so the owner can change its internal implementation without coordinating with every consumer.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Service Granularity by Domain Cohesion

### Summary

Service size and scope follow domain cohesion and are reconsidered when one service spans separate domains or several services divide one domain without a distinct need.

### Reasoning

Dividing a domain across too many services forces engineers to coordinate changes that belong to one business responsibility. This adds interfaces, deployments, and operational work without creating services that can evolve independently.

A service that spans unrelated domains ties together changes and scaling decisions that could be made independently. Reconsidering both cases keeps service size and scope tied to domain responsibilities rather than an arbitrary preferred size.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Authoritative Domain Logic

### Summary

A core business rule has one authoritative implementation that other services use through its owning service or a shared component.

### Reasoning

Separate implementations of the same business rule can interpret it differently and drift further apart as the rule changes. The same input can then produce different outcomes depending on which service applies the rule.

One authoritative implementation keeps the rule consistent and makes clear where to change its behaviour. Other services can use the rule through its owning service or a shared component without maintaining separate versions of the logic.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
