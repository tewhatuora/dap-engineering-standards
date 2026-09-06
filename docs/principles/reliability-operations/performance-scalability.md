# Performance & Scalability

## Performance & Scaling Decisions

### Summary

Service performance and scaling under load are explicit architectural decisions made during design.

### Reasoning

Expected load and the approach used to meet it shape a service's architecture. Addressing them during design exposes whether the selected runtime and architecture can support the required behaviour before implementation commits the service to choices that are costly to change.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Performance & Capacity Requirements

### Summary

Load, throughput, concurrency, latency, and error rate are explicit requirements based on realistic current or projected demand.

### Reasoning

Explicit requirements make expected performance and capacity measurable. Basing them on realistic demand provides a credible basis for design decisions and testing, while reducing the risk of capacity that is insufficient for expected use or disproportionate to it.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)

## Horizontal & Elastic Scaling

### Summary

Services scale horizontally by default, with capacity adjusting automatically to sustained changes in demand.

### Reasoning

Adding and removing instances allows capacity to change without depending on the limits of a single instance. Automatic adjustment responds to sustained changes in demand without waiting for manual intervention, provided the selected runtime model supports the required scaling behaviour.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)

## Scaling Constraints

### Summary

Components that cannot scale independently are identified during design and addressed or accepted as bounded limitations.

### Reasoning

A component that cannot scale independently, or that becomes a point of contention under load, limits the capacity of the wider service. Identifying the constraint during design allows it to be removed, accommodated, or accepted with a known bound before demand exposes it through a production failure.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Efficient Data Access

### Summary

Data access avoids unnecessary work as demand grows, and every cache has a defined invalidation or expiry approach.

### Reasoning

Data access patterns that perform unnecessary work consume increasing time and capacity as demand and data volume grow. Bounding the work performed for each request and avoiding repeated access limits that growth.

A cache without an invalidation or expiry approach can continue serving data after it is no longer valid. A defined approach bounds how long stale data can persist.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Performance Validation and Reassessment

### Summary

Performance and capacity targets are validated before production, as a service evolves, and when demand or sustained degradation challenges its design assumptions.

### Reasoning

A target alone does not demonstrate that a service can meet it under expected demand. Testing before production provides evidence against a representative workload while there is still an opportunity to address a shortfall without affecting users.

Repeating testing as the service evolves detects regressions caused by changes to the service and its operating context. Performance and scaling assumptions depend on an expected level and pattern of demand, so growth beyond that basis, sustained degradation, or movement towards a known limit indicates when capacity or architecture needs reassessment.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
