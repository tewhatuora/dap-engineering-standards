# Sustainability by Design

## Summary

> Design for efficient resource use, with environmental impact considered from the start.

## Principles

### Environmental Impact as a Design Constraint

> Environmental impact is weighed alongside every other requirement at the point a design decision is made, not addressed later.

1. Environmental impact **MUST** be weighed alongside functional and other non-functional requirements at the point architecture, technology, and capacity decisions are made.
2. A design **MUST NOT** proceed on the assumption that its resource consumption and environmental impact can be addressed later.

### Efficient Resource Consumption

> Compute and storage are sized to actual demand, preferring serverless and managed models that avoid idle capacity.

1. Compute and storage **SHOULD** be sized to match actual demand; over-provisioned or idle capacity consumes energy without delivering value.
2. Serverless or elastic compute models **SHOULD** be preferred where they eliminate energy consumption from idle or over-provisioned capacity.
3. Managed services **SHOULD** be preferred over self-hosted equivalents where they achieve higher infrastructure utilisation than an individually operated equivalent.

#### References

- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)
- [Resource Efficiency & Optimisation](../standards/cost-sustainability/resource-efficiency-optimisation.md)

### Data Retention & Tiering

> Data is kept only as long as needed, deduplicated, and moved to a lower-energy tier as access drops.

1. Data **SHOULD** be retained only for as long as it is required for its intended purpose, with a defined deletion or archival point.
2. Duplicate or redundant copies of data **SHOULD** be avoided where a single, authoritative copy can serve the same purpose.
3. Infrequently accessed data **SHOULD** be moved to a lower-energy storage tier appropriate to its access pattern, rather than retained indefinitely on high-performance storage.

### Carbon-Aware Location Selection

> Where multiple locations equally meet requirements, the lower-carbon option is preferred.

1. Where multiple locations or cloud providers can equally satisfy applicable technical, legal, and data residency requirements, the option with the lower carbon-intensity energy source **SHOULD** be preferred.
2. Cloud provider selection **SHOULD** account for published environmental commitments and reporting, where available, alongside functional and commercial criteria.

### Environmental Impact Attribution

> A service is designed so its energy consumption or carbon footprint can be measured and attributed to its team.

1. A service **SHOULD** be designed so its energy consumption or estimated carbon footprint can be measured and attributed to the responsible team.
2. Environmental impact measurement **SHOULD** be integrated into existing monitoring and reporting rather than operated as a separate, disconnected process.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)
- [Cost Monitoring & Attribution](../standards/cost-sustainability/cost-monitoring-attribution.md)

### Ongoing Sustainability Reassessment

> A sustainability assumption is revisited as usage, scale, or provider offerings change, not treated as fixed indefinitely.

1. Sustainability assumptions made at design time **SHOULD** be revisited as usage, scale, technology, or cloud provider offerings change, rather than treated as fixed indefinitely.
2. A material, sustained increase in resource consumption or environmental impact **SHOULD** trigger a reassessment of the design against current usage.
