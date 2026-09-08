# Sustainability

## Resource Efficiency

### Summary

Compute and storage capacity matches actual demand, with deployment models selected to minimise idle capacity and improve infrastructure utilisation.

### Reasoning

Over-provisioned and idle capacity consumes energy without delivering value. Sizing resources from observed or tested demand, adjusting capacity as demand changes, and removing resources when they are no longer needed reduce that waste.

Deployment models that share capacity or adjust it with demand can use infrastructure more efficiently than dedicated equivalents. Their resource characteristics determine whether they provide that benefit for a particular workload.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Carbon-Aware Deployment

### Summary

Where multiple locations or cloud providers equally meet applicable requirements, the option with the lower-carbon energy source is preferred.

### Reasoning

The carbon intensity of the energy supplying a workload varies by location and provider. When technical, legal, data residency, and commercial requirements do not distinguish between viable options, comparable reporting on energy sources and operational emissions provides a basis for selecting the option with lower environmental impact.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Proportionate Data Storage

### Summary

Data storage remains proportionate to its continuing purpose and access pattern through bounded retention, necessary copies, and appropriate storage tiers.

### Reasoning

Data retained beyond its purpose continues to consume storage and the resources needed to protect and operate it. Defined deletion or archival points bound that consumption, while avoiding redundant copies limits storage to data that provides distinct value.

Storage performance beyond an access pattern's needs also consumes unnecessary resources. Moving infrequently accessed data to an appropriate lower-energy tier aligns its resource use with its continuing purpose.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Impact Measurement

### Summary

A service's energy consumption or estimated carbon footprint is measured and recorded over time.

### Reasoning

Service-level environmental measurements connect impact to the design and operational decisions that produce it. Recording those measurements over time allows changes in resource use and environmental impact to be identified as the service evolves.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Sustainability Reassessment

### Summary

Sustainability assumptions are revisited as usage, scale, technology, or provider offerings change.

### Reasoning

Resource consumption and environmental impact change as a service and its available technology evolve, so an assumption made during design can cease to reflect actual usage or the available options. A material, sustained increase indicates that the design no longer behaves as assumed and needs reassessment against current usage.

### Implemented By These Standards

- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
