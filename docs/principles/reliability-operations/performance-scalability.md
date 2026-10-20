---
last_edited: 2026-10-21
---

# Performance and Scalability

## Performance and Scaling Decisions

### Summary

During design, engineers make explicit architectural decisions about service performance and scaling under load.

### Reasoning

Expected load affects how a service stores data, manages work, uses resources, and interacts with dependencies. These choices shape the architecture and can be costly to change once the service is built and other systems depend on it.

Considering performance and scaling during design lets engineers assess whether the runtime and architecture can support the required behaviour. It also makes known limits clear while the design can still change without major rework.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Performance and Capacity Requirements

### Summary

Load, throughput, concurrency, latency, and error rate are measurable requirements based on realistic current or projected demand.

### Reasoning

Measurable requirements define the demand a service is expected to handle and how it needs to behave under that demand. They give engineers clear targets for design and implementation and let them judge whether test results demonstrate acceptable performance.

Requirements based on realistic demand reduce the risk of providing too little capacity or paying for capacity that adds no value. They also make the assumptions behind capacity decisions clear when demand changes.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)

## Horizontal and Elastic Scaling

### Summary

Services scale horizontally by default, and their capacity adjusts automatically to sustained changes in demand.

### Reasoning

Adding and removing service instances lets capacity change without relying on how much one instance can grow. It also spreads work across replaceable instances, so the service does not depend on the capacity and availability of a single runtime.

Automatic scaling responds to sustained changes in demand without waiting for someone to adjust capacity manually. The runtime model needs to support adding and removing instances without disrupting state, coordination, or request handling.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)

## Scaling Constraints

### Summary

During design, engineers identify components that cannot scale independently and either resolve the constraints or accept their known limits.

### Reasoning

A component that cannot scale independently can limit the whole service, even when other components have spare capacity. Shared resources and contention can create the same limit when growing demand has to pass through one constrained part of the system.

Identifying constraints during design lets engineers remove them, design around them, or accept known limits before growth causes poor performance or a production failure.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Efficient Data Access

### Summary

Data access avoids unnecessary work as demand grows, and every cache has a defined approach to invalidation or expiry.

### Reasoning

Scanning, transferring, or processing more data than a request needs takes more time and capacity as demand and data volume grow. Limiting how much data each request handles and avoiding repeated access keeps unnecessary costs from growing with the service.

A cache avoids repeated data access or processing by keeping results after the requests that produced them. Those results can become outdated when the source changes. A defined approach to invalidation or expiry determines when to stop trusting cached values and limits how long stale data can be served.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Performance Validation and Reassessment

### Summary

Engineers validate performance and capacity targets before production, as the service evolves, and when demand or sustained degradation calls its design assumptions into question.

### Reasoning

A target alone does not show that a service can handle expected demand. Testing with a representative workload before production shows whether the service meets the target while shortfalls can still be fixed without affecting users.

Changes to code, data, dependencies, and infrastructure can affect performance even when the target stays the same. Repeating validation as the service evolves detects regressions and shows whether earlier capacity results still apply.

Scaling decisions also depend on the expected level and pattern of demand. Growth beyond that expectation, sustained degradation, or an approaching limit signals that engineers need to reassess the assumptions behind the current capacity or architecture.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
