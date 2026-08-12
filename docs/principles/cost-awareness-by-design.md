# Cost Awareness by Design

## Objective

Cost Awareness by Design treats cost as a design-time consideration, weighed alongside reliability, performance, and security, not assessed only after a service is already operating. It directs engineering teams toward deliberate, proportionate spending that remains traceable to the value delivered.

## Principles

### Cost as a First-Class Design Input

These principles weigh cost alongside functional and non-functional requirements at design time.

1. Cost implications must be evaluated alongside functional and non-functional requirements, including technology selection, data storage, and scaling model.
2. A design decision with materially higher recurring cost must not be adopted without assessing its value against lower-cost alternatives.
3. Cost should be treated as a design constraint from the outset.

### Balancing Cost Against Other Quality Attributes

These principles keep a cost decision proportionate to the risk and value it supports.

1. Cost decisions must be proportionate to the risk and value of the service they support.
2. A design must not reduce cost in a way that introduces disproportionate risk to reliability, performance, or security.
3. A design should not specify capacity, resilience, or redundancy beyond what the workload's risk and criticality justify.
4. RPO and RTO must be set proportionate to the risk and criticality of the service they protect, since tighter objectives increase backup frequency and redundancy cost.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Reuse and Build-vs-Buy Cost Discipline

These principles weigh the total cost of reusing an existing solution against building a new one.

1. Engineering teams must evaluate existing, proven solutions before building a new one.
2. Technology and vendor selection should account for total cost of ownership, including licensing, operational, and maintenance cost, not just upfront cost.

#### References

- [Reuse Before Reinvention](reuse-before-reinvention.md)
- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Cost Visibility & Attribution by Design

This principle makes a service's cost measurable and attributable to its responsible team from the outset.

1. A service should be designed so its cost can be measured and attributed to the responsible team from the outset.

#### References

- [Cost Monitoring & Attribution](../standards/cost-sustainability/cost-monitoring-attribution.md)

### Avoiding Unnecessary Resource Consumption

These principles avoid unnecessary or wasteful resource consumption, preferring compute models that eliminate it.

1. Design and implementation choices should avoid unnecessary or wasteful consumption of compute or storage.
2. Serverless compute models should be preferred where they eliminate payment for idle or over-provisioned capacity.
3. Managed services should be preferred over self-hosted equivalents where they eliminate the operational effort of provisioning, patching, scaling, and maintaining infrastructure.

#### References

- [Resource Efficiency & Optimisation](../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)

### Extending Cost Awareness to AI-Assisted Engineering Tooling

These principles extend cost awareness to the token and usage-based spend AI-assisted engineering tooling introduces.

1. The token or usage-based cost of AI-assisted engineering tooling must be weighed as deliberately as any other recurring engineering cost.
2. AI tool usage should be scoped and configured to avoid unnecessary spend, such as processing more context or selecting a higher-cost model than a task requires.

#### References

- [AI Cost Considerations & Optimisation](../standards/ai-engineering/ai-cost-considerations-optimisation.md)

### Revisiting Cost Decisions as Usage and Pricing Change

These principles revisit a cost decision once a service is operating, rather than treating it as fixed indefinitely.

1. A cost decision made at design time should be checked against actual usage and spend once a service is operating, rather than treated as fixed indefinitely.
2. A sustained rise in the cost of a service, or a material change in vendor pricing, should trigger a reassessment of its design against current usage and value.
