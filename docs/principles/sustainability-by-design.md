# Sustainability by Design

## Objective

Sustainability by Design treats the environmental impact of engineering decisions, including energy consumption and carbon footprint, as a design-time consideration rather than an incidental outcome. It directs engineering teams toward resource-efficient technology choices, data practices, and infrastructure decisions that reduce unnecessary environmental impact.

## Principles

### Weighing Environmental Impact Alongside Other Design Decisions

These principles weigh environmental impact alongside other requirements at the point a design decision is made.

1. Environmental impact must be weighed alongside functional and other non-functional requirements at the point architecture, technology, and capacity decisions are made.
2. A design must not proceed on the assumption that its resource consumption and environmental impact can be addressed later.

### Efficient & Right-Sized Resource Consumption

These principles size compute and storage to actual demand, preferring models that avoid idle capacity.

1. Compute and storage should be sized to match actual demand; over-provisioned or idle capacity consumes energy without delivering value.
2. Serverless or elastic compute models should be preferred where they eliminate energy consumption from idle or over-provisioned capacity.
3. Managed services should be preferred over self-hosted equivalents where they achieve higher infrastructure utilisation than an individually operated equivalent.

#### References

[Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)\
[Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)\
[Resource Efficiency & Optimisation](../standards/cost-sustainability/resource-efficiency-optimisation.md)

### Data Minimisation & Storage Lifecycle Management

These principles retain data only as long as needed and move it to a lower-energy tier as access drops.

1. Data should be retained only for as long as it is required for its intended purpose, with a defined deletion or archival point.
2. Duplicate or redundant copies of data should be avoided where a single, authoritative copy can serve the same purpose.
3. Infrequently accessed data should be moved to a lower-energy storage tier appropriate to its access pattern, rather than retained indefinitely on high-performance storage.

### Carbon-Aware Selection of Locations & Cloud Providers

These principles prefer the lower-carbon location or cloud provider where multiple options equally satisfy requirements.

1. Where multiple locations or cloud providers can equally satisfy applicable technical, legal, and data residency requirements, the option with the lower carbon-intensity energy source should be preferred.
2. Cloud provider selection should account for published environmental commitments and reporting, where available, alongside functional and commercial criteria.

### Measuring & Reporting Environmental Impact

These principles measure and attribute a service's environmental impact through existing monitoring.

1. A service should be designed so its energy consumption or estimated carbon footprint can be measured and attributed to the responsible team.
2. Environmental impact measurement should be integrated into existing monitoring and reporting rather than operated as a separate, disconnected process.

#### References

[Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)\
[Cost Monitoring & Attribution](../standards/cost-sustainability/cost-monitoring-attribution.md)

### Design-Time Environmental Assumptions Have a Shelf Life

These principles revisit a sustainability assumption as usage, scale, or provider offerings change.

1. Sustainability assumptions made at design time should be revisited as usage, scale, technology, or cloud provider offerings change, rather than treated as fixed indefinitely.
2. A material, sustained increase in resource consumption or environmental impact should trigger a reassessment of the design against current usage.
