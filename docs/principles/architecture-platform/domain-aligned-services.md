# Domain-Aligned Services

## Cohesive Domain Boundaries

### Summary

A service is scoped to one cohesive business domain or subdomain whose responsibility is clear from its boundary.

### Reasoning

A boundary based on business responsibility keeps related behaviour and data together. A boundary based on a technical layer or organisational structure separates decisions that change together and obscures what the service is responsible for.

A clear domain boundary allows a service to evolve without requiring knowledge of its internal implementation to understand its purpose.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Independent Service Change

### Summary

A service is deployable and releasable independently of other services by default.

### Reasoning

Requiring coordinated deployment or release couples a service's change cadence and recovery options to other services. Independent change allows each service to evolve, validate, release, and recover according to its own needs while preserving its published contracts.

Where coordination cannot be avoided, treating it as an explicit exception makes the dependency and its fallback visible rather than allowing simultaneous change to become routine.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Service-Owned Data

### Summary

Each service exclusively owns its data, which other services access only through its published interfaces.

### Reasoning

Direct access to another service's data bypasses its rules and couples consumers to its storage model. Exclusive ownership keeps validation, consistency, and schema evolution within the service responsible for that data.

Published interfaces allow the owning service to change its implementation while preserving the contract on which consumers depend.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Proportionate Service Granularity

### Summary

Service granularity follows domain cohesion and is reconsidered when one service spans separate domains or several services fragment one domain without a distinct need.

### Reasoning

A service divided more finely than its domain creates coordination and operational overhead without establishing an independent responsibility. A service spanning unrelated domains couples changes and scaling decisions that do not need to move together.

Reassessing boundaries when either condition appears keeps service granularity proportionate to the domain rather than to an arbitrary preferred size.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Authoritative Domain Logic

### Summary

A core business rule has one authoritative implementation that other services reuse through its owning service or a shared component.

### Reasoning

Independent implementations of the same business rule can produce different outcomes as the rule changes. A single authoritative implementation keeps the rule consistent and establishes where a change to its behaviour belongs.

Reuse through a published interface or shared component allows multiple services to apply the rule without maintaining separate versions of it.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
