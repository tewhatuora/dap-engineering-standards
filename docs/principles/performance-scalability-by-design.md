# Performance & Scalability by Design

## Summary

> Define a service's performance and capacity targets at design time, and validate them through testing.

## Principles

### Performance & Scaling Decisions

How a service performs and scales under load is an explicit architectural decision made at design time, not an afterthought.

1. How a service will perform and scale under load **MUST** be treated as an architectural decision, made at design time.
2. A design **MUST NOT** be signed off before its expected load and scaling approach have been thought through.

### Performance & Capacity Requirements

Load, throughput, latency, and error rate are defined as explicit requirements, based on realistic current or projected demand.

1. Expected load, throughput, concurrency, acceptable response time or latency, and error rate **MUST** be defined as explicit non-functional requirements for a service.
2. Performance and capacity requirements **SHOULD** be based on realistic current or projected demand.

### Horizontal & Elastic Scaling

A service scales horizontally by default, with capacity adjusting automatically to a sustained change in demand.

1. A service **SHOULD** be designed to scale horizontally, by adding or removing instances to meet demand, in preference to scaling a single instance vertically.
2. The runtime model selected for a workload **SHOULD** support the scaling approach its performance and capacity requirements demand.
3. Where elastic scaling is used, capacity **SHOULD** adjust automatically to a sustained change in demand rather than relying on manual intervention.

#### References

- [Stateless First](stateless-first.md)
- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)
- [Container Orchestration](../standards/platform-infrastructure/container-orchestration.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)

### Scaling Constraints

A component that cannot scale independently is identified at design time and addressed, or explicitly accepted as a limitation.

1. A component that cannot scale independently of the rest of a service, or that constitutes a single point of contention under load, **MUST** be identified during design.
2. An identified scaling constraint **MUST** be addressed or explicitly accepted as a bounded limitation; it **MUST NOT** remain unrecognised until it causes a failure in production.

#### References

- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Efficient Data Access at Scale

Data access uses caching, pagination, and indexing to avoid unnecessary latency as demand grows, with every cache having a defined expiry.

1. A data access pattern **SHOULD** be designed to avoid unnecessary latency or load as demand grows, including through caching, pagination, and appropriate indexing.
2. A cache **MUST** have a defined invalidation or expiry approach, so it does not serve stale data indefinitely.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Performance Target Testing

A performance or capacity target is validated through load testing before it is relied on in production.

1. A defined performance or capacity target **MUST** be validated through load or performance testing before it is relied on in production.
2. Performance and load testing **SHOULD** be repeated as a service evolves.

#### References

- [Performance & Load Testing](../standards/quality-engineering/performance-load-testing.md)
- [Testability by Design](testability-by-design.md)

### Outgrowing a Scaling Approach

A scaling assumption is re-validated as usage grows beyond what it was originally designed for.

1. Performance and scalability assumptions made at design time **SHOULD** be re-validated as usage and scale grow beyond the level they were originally defined for, rather than treated as fixed indefinitely.
2. Sustained performance degradation, or a component approaching a known scaling limit identified earlier in design, **SHOULD** trigger a reassessment of the scaling approach.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)
