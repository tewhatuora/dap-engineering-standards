# Cost Awareness by Design

## Summary

> Weigh cost alongside reliability, performance, and security, keeping spend proportionate to the value it delivers.

## Principles

### Cost as a Design Constraint

Cost is weighed alongside every functional and non-functional requirement, as a design constraint from the outset.

1. Cost implications **MUST** be evaluated alongside functional and non-functional requirements, including technology selection, data storage, and scaling model.
2. A design decision with materially higher recurring cost **MUST NOT** be adopted without assessing its value against lower-cost alternatives.
3. Cost **SHOULD** be treated as a design constraint from the outset.

### Proportionate Cost Decisions

A cost decision stays proportionate to the risk and value it supports, never traded off against reliability or security.

1. Cost decisions **MUST** be proportionate to the risk and value of the service they support.
2. A design **MUST NOT** reduce cost in a way that introduces disproportionate risk to reliability, performance, or security.
3. A design **SHOULD NOT** specify capacity, resilience, or redundancy beyond what the workload's risk and criticality justify.
4. RPO and RTO **MUST** be set proportionate to the risk and criticality of the service they protect, since tighter objectives increase backup frequency and redundancy cost.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Build-vs-Buy Cost Discipline

An existing, proven solution is evaluated on total cost of ownership before a team builds its own.

1. Engineering teams **MUST** evaluate existing, proven solutions before building a new one.
2. Technology and vendor selection **SHOULD** account for total cost of ownership, including licensing, operational, and maintenance cost, not just upfront cost.

#### References

- [Reuse Before Reinvention](reuse-before-reinvention.md)
- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Cost Visibility & Attribution

A service is designed so its cost can be measured and attributed to its responsible team from the outset.

1. A service **SHOULD** be designed so its cost can be measured and attributed to the responsible team from the outset.

#### References

- [Cost Monitoring & Attribution](../standards/cost-sustainability/cost-monitoring-attribution.md)

### Efficient Resource Consumption

Compute and storage choices avoid waste by default, preferring serverless and managed services that eliminate idle capacity.

1. Design and implementation choices **SHOULD** avoid unnecessary or wasteful consumption of compute or storage.
2. Serverless compute models **SHOULD** be preferred where they eliminate payment for idle or over-provisioned capacity.
3. Managed services **SHOULD** be preferred over self-hosted equivalents where they eliminate the operational effort of provisioning, patching, scaling, and maintaining infrastructure.

#### References

- [Resource Efficiency & Optimisation](../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)

### AI Tooling Spend

AI tooling's token and usage-based cost is weighed as deliberately as any other recurring engineering spend.

1. The token or usage-based cost of AI-assisted engineering tooling **MUST** be weighed as deliberately as any other recurring engineering cost.
2. AI tool usage **SHOULD** be scoped and configured to avoid unnecessary spend, such as processing more context or selecting a higher-cost model than a task requires.

#### References

- [AI Cost Considerations & Optimisation](../standards/ai-engineering/ai-cost-considerations-optimisation.md)

### Ongoing Cost Reassessment

A cost decision is checked against actual usage once a service is running, not treated as fixed indefinitely.

1. A cost decision made at design time **SHOULD** be checked against actual usage and spend once a service is operating, rather than treated as fixed indefinitely.
2. A sustained rise in the cost of a service, or a material change in vendor pricing, **SHOULD** trigger a reassessment of its design against current usage and value.
