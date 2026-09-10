---
last_edited: 2026-09-10
---

# Performance & Scalability

## Performance & Scaling Decisions

### Summary

Service performance and scaling under load are explicit architecture decisions made during design.

### Reasoning

Expected load affects how a service stores data, manages work, uses resources, and interacts with dependencies. These choices shape the architecture and can become costly to change after implementation and dependent systems are established.

Considering performance and scaling during design shows whether the selected runtime and architecture can support the required behaviour. It also makes known limits visible while the design can still change without major rework.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Performance & Capacity Requirements

### Summary

Load, throughput, concurrency, latency, and error rate are measurable requirements based on realistic current or projected demand.

### Reasoning

Measurable requirements define the demand a service is expected to handle and the behaviour it must maintain under that demand. They give architecture and implementation decisions a clear target and provide a basis for determining whether testing has demonstrated acceptable performance.

Requirements based on realistic demand reduce the risk of building too little capacity for expected use or paying for capacity that provides no corresponding value. They also make the assumptions behind a capacity decision visible when demand later changes.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Horizontal & Elastic Scaling

### Summary

Services scale horizontally by default, and their capacity adjusts automatically to sustained changes in demand.

### Reasoning

Adding and removing service instances allows capacity to change without depending on how far one instance can be enlarged. It also distributes work across replaceable instances instead of making the service depend on the capacity and availability of a single runtime.

Automatic adjustment responds to sustained changes in demand without waiting for someone to change capacity manually. The runtime model must support that behaviour so instances can be added or removed without breaking state, coordination, or request handling.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)

## Scaling Constraints

### Summary

Components that cannot scale independently are identified during design and either addressed or accepted as bounded limitations.

### Reasoning

A component that cannot scale independently can limit the capacity of the wider service even when every other component has capacity available. Shared resources and points of contention can create the same limit by forcing increasing demand through one constrained part of the system.

Identifying the constraint during design allows it to be removed, accommodated, or accepted with a known bound. This prevents expected growth from first revealing the limit through degraded performance or a production failure.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Efficient Data Access

### Summary

Data access avoids unnecessary work as demand grows, and every cache has a defined approach to invalidation or expiry.

### Reasoning

Data access that scans, transfers, or processes more data than a request needs consumes increasing time and capacity as demand and data volume grow. Bounding the work performed for each request and avoiding repeated access prevents that unnecessary cost from growing with the service.

A cache reduces repeated work by storing a result beyond the request that produced it, but that result can become outdated when the source changes. A defined invalidation or expiry approach determines when the cached value stops being trusted and limits how long stale data can be served.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Performance Validation and Reassessment

### Summary

Performance and capacity targets are validated before production, as the service evolves, and when demand or sustained degradation challenges its design assumptions.

### Reasoning

A target does not show that a service can meet it under expected demand. Testing before production provides evidence against a representative workload while a shortfall can still be addressed without affecting users.

Changes to code, data, dependencies, and infrastructure can alter performance even when the target remains unchanged. Repeating validation as the service evolves detects these regressions and shows whether previous capacity evidence still applies.

Scaling decisions also depend on an expected level and pattern of demand. Growth beyond that basis, sustained degradation, or movement towards a known limit shows when the assumptions behind the current capacity or architecture need to be reassessed.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
