---
last_edited: 2026-09-11
---

# Sustainability

## Resource Efficiency

### Summary

Compute and storage capacity match actual demand, with deployment models chosen to minimise idle capacity and improve infrastructure use.

### Reasoning

Over-provisioned and idle capacity consume energy while providing no corresponding service value. Sizing resources from observed or tested demand limits this waste, while adjusting or removing capacity as demand changes prevents an earlier requirement from becoming permanent consumption.

Deployment models that share capacity or adjust it with demand can use infrastructure more efficiently than dedicated equivalents. The benefit depends on the workload's usage pattern and resource needs, so the model must be assessed against the capacity it actually uses rather than its category alone.

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

When multiple locations or providers meet the applicable requirements equally, the option using the lower-carbon energy source is preferred.

### Reasoning

The carbon intensity of the energy that runs a workload varies by location and provider, so equivalent deployments can have different environmental effects. This difference provides a basis for selection only after the options meet the workload's technical, legal, data residency, and commercial requirements.

Comparable information about energy sources and operational emissions allows the remaining choices to be assessed on the same basis. Preferring the lower-carbon option then reduces environmental impact without weakening requirements that the workload must meet.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Data Storage Aligned with Purpose

### Summary

Data storage is limited to the retention period, copies, and performance its purpose and access pattern require.

### Reasoning

Data retained beyond its purpose continues to consume storage and the resources needed to secure, back up, and operate it. Defined deletion or archival points bound that consumption, while limiting copies prevents the same data from creating repeated cost and environmental impact without distinct value.

Storage designed for frequent or rapid access can consume more resources than infrequently used data requires. Moving data to a tier whose performance matches its access pattern preserves its continuing purpose while avoiding resource use that provides no benefit.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Environmental Impact Measurement

### Summary

A service's energy use or estimated carbon footprint is measured and recorded over time.

### Reasoning

Aggregate environmental reporting does not show which service or engineering decision produced a change in impact. Service-level measurement connects energy use or estimated emissions to the architecture, capacity, and operating choices that teams can influence.

Recording the measurements over time makes sustained changes visible as the service evolves. Teams can then determine whether growth reflects useful demand or whether the service is using more resources without a corresponding increase in value.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Sustainability Reassessment

### Summary

Sustainability assumptions are reassessed as usage, scale, technology, or provider offerings change.

### Reasoning

Resource consumption and environmental impact change as a service grows and as technology and provider options evolve. An assumption made during design can therefore stop reflecting actual usage or overlook a more efficient option that was not previously available.

A sustained increase that is not explained by increased useful demand shows that the service no longer behaves as originally expected. Reassessing the design against current usage and available options prevents the earlier assumption from justifying unnecessary consumption indefinitely.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
