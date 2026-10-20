---
last_edited: 2026-10-21
---

# Sustainability

## Resource Efficiency

### Summary

Compute and storage capacity match actual demand, and deployment models are chosen to minimise idle capacity and use infrastructure more efficiently.

### Reasoning

Excess and idle capacity use energy without adding service value. Sizing resources to observed or tested demand limits this waste. Adjusting or removing capacity as demand changes keeps outdated requirements from causing ongoing resource use.

Deployment models that share capacity or adjust it with demand can use infrastructure more efficiently than dedicated alternatives. The benefit depends on the workload's usage pattern and resource needs. Assessing actual capacity use shows whether a model is efficient; its category alone does not.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Lower Carbon Deployment

### Summary

When locations or providers meet the applicable requirements equally, the option using the lower-carbon energy source is preferred.

### Reasoning

The carbon intensity of energy varies by location and provider, so equivalent deployments can have different environmental impacts. This difference guides selection only after the options meet the workload's technical, legal, data residency, and commercial requirements.

Comparable information about energy sources and operational emissions lets engineers assess the remaining choices on the same basis. Choosing the lower-carbon option then reduces environmental impact without weakening the workload's requirements.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Data Storage Aligned with Purpose

### Summary

Data storage matches the retention period, number of copies, and performance needed for the data's purpose and access pattern.

### Reasoning

Data kept after its purpose ends still needs storage, protection, backups, and operational support. Defined points for deletion or archival limit that resource use. Limiting copies avoids repeated cost and environmental impact where extra copies add no distinct value.

Storage designed for frequent or rapid access can use more resources than infrequently used data needs. Moving data to a tier that matches its access pattern keeps it usable for its purpose without spending resources on unneeded performance.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Environmental Impact Measurement

### Summary

A service's energy use or estimated carbon footprint is measured and recorded over time.

### Reasoning

Overall environmental reporting does not show which service or engineering decision changed the impact. Measuring each service links energy use or estimated emissions to architecture, capacity, and operating choices that teams can influence.

Recording measurements over time reveals sustained changes as the service evolves. Teams can then tell whether increased resource use reflects useful demand or adds no corresponding value.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Sustainability Reassessment

### Summary

Engineers reassess sustainability assumptions as usage, scale, technology, or provider offerings change.

### Reasoning

Resource use and environmental impact change as a service grows and technology and provider options evolve. Design assumptions can become outdated or miss more efficient options that were not previously available.

A sustained increase not explained by greater useful demand shows that the service no longer behaves as expected. Reassessing the design against current usage and available options keeps old assumptions from justifying unnecessary resource use indefinitely.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
