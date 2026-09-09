---
last_edited: 2026-09-09
---

# Runtime Architecture

## Runtime Selection

### Summary

A workload's runtime model is an explicit, justified decision made during design.

### Standards

1. `std-arch-runtime-selection-01` The runtime model a workload will execute on **MUST** be an explicit, justified decision made during design.
2. `std-arch-runtime-selection-02` A workload **MUST NOT** proceed to implementation before its runtime model is selected and justified against the workload's own characteristics.
3. `std-arch-runtime-selection-03` A runtime model selected for one workload **MUST NOT** be assumed suitable for a different workload without independently assessing that workload's characteristics.

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

## Platform Capability

### Summary

A workload uses only runtime models supported by platform capabilities that the organisation operates or has approved.

### Standards

1. `std-arch-platform-capability-01` A runtime model requiring a new, unapproved platform capability **MUST NOT** be adopted until that capability is approved for operational use.

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

## Request State

### Summary

State required to fulfil a request remains available independently of any service instance.

### Standards

1. `std-arch-request-state-01` State required to fulfil a request **MUST** remain available independently of any service instance.
2. `std-arch-request-state-02` Instance memory and local disk **MUST NOT** be the sole store for state required to fulfil a request.

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

## Serverless & Managed Services

### Summary

Serverless or a managed service is selected according to the workload's characteristics.

### Standards

1. `std-arch-serverless-managed-services-01` Serverless **SHOULD** be considered for event-driven or highly variable demand, since it scales to zero, is cost-efficient at low or spiky usage, and shifts operational effort to the provider.
2. `std-arch-serverless-managed-services-02` Serverless **SHOULD NOT** be used where a workload runs continuously, is cold-start sensitive, needs resources such as a GPU beyond the platform's limits, or retains state within the runtime.
3. `std-arch-serverless-managed-services-03` A managed service **SHOULD** be considered where an existing vendor-operated capability, such as a database, queue, or cache, already meets the need, avoiding the cost, effort, and availability risk of building and operating an equivalent.
4. `std-arch-serverless-managed-services-04` A managed service **SHOULD NOT** be used where it lacks a specific configuration, version, or extension the workload needs, or where its cost at scale would exceed a self-operated equivalent.
5. `std-arch-serverless-managed-services-05` Serverless and managed services **SHOULD NOT** be used where a workload requires strict isolation from other workloads or depends on a protocol, connection, or language runtime version the platform does not natively support.
6. `std-arch-serverless-managed-services-06` A managed service **SHOULD** be preferred over a self-operated equivalent where shared infrastructure provides higher utilisation while meeting the workload's requirements.

### Related Standards

- [Managed Services](../platform-infrastructure/managed-services.md)
- [Serverless](../platform-infrastructure/serverless.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

## Vendor Coupling

### Summary

The vendor coupling a runtime model introduces is identified and weighed against the capability it provides.

### Standards

1. `std-arch-vendor-coupling-01` Where a candidate runtime model is a managed service or serverless offering, the vendor coupling it introduces **MUST** be identified and weighed against the capability it provides.
2. `std-arch-vendor-coupling-02` A runtime model **MAY** be selected for the cloud-native capability it provides, even where this introduces vendor coupling.
3. `std-arch-vendor-coupling-03` An application-layer abstraction **SHOULD** be used to reduce how much a workload depends on a specific vendor's runtime model, easing any future migration.
4. `std-arch-vendor-coupling-04` An application-layer abstraction introduced to reduce vendor coupling **MUST NOT** add cost or complexity disproportionate to the vendor coupling it reduces.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

## Data Residency & Sovereignty

### Summary

The jurisdictions permitted to store or process a workload's data, and those able to compel access to it, are defined before deployment selection, enforced through infrastructure and configuration, and periodically verified.

### Standards

1. `std-arch-data-residency-sovereignty-01` The location and cloud provider selected for a workload **MUST** satisfy any applicable data residency or sovereignty requirement.
2. `std-arch-data-residency-sovereignty-02` Any data residency or sovereignty requirements applicable to a workload **MUST** be defined before its deployment location or cloud provider is selected.
3. `std-arch-data-residency-sovereignty-03` Selection of a workload's location and cloud provider **MUST** account for every jurisdiction able to compel access to its data, including jurisdictions other than the data's physical storage location.
4. `std-arch-data-residency-sovereignty-04` Infrastructure and configuration for a workload subject to a data residency or sovereignty requirement **MUST** keep its data at rest and in processing within the jurisdictions approved for that data.
5. `std-arch-data-residency-sovereignty-05` The jurisdictions in which a workload's data is actually stored and processed **SHOULD** be verified periodically through configuration review or automated audit.

### Implements These Principles

- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)

## Cloud Deployment

### Summary

A workload's deployment model is an explicit choice between public, private, and micro cloud, based on its requirements.

### Standards

1. `std-arch-cloud-deployment-01` The choice between public cloud, private cloud, and micro cloud deployment **MUST** be an explicit decision for a workload, based on its own requirements.
2. `std-arch-cloud-deployment-02` Public cloud **SHOULD** be the default deployment model, since it provides the widest access to cloud-native capabilities such as managed services, serverless offerings, and elastic scaling.
3. `std-arch-cloud-deployment-03` Private or micro cloud **MAY** be selected where a specific requirement, such as data residency, connectivity, or proximity to a local data source, justifies it.
4. `std-arch-cloud-deployment-04` Where private cloud deployment is required, a workload **MUST** use the organisation's approved private cloud platform.
5. `std-arch-cloud-deployment-05` Micro cloud deployment, meaning small-scale infrastructure deployed close to a workload's point of use, **MUST** be used only where a workload has a genuine requirement for local execution.
6. `std-arch-cloud-deployment-06` Where a private or micro cloud deployment lacks a managed service, serverless capability, or scaling behaviour a workload requires, that gap **MUST** be identified and either addressed through a deliberate hybrid architecture that offloads the requirement to the public cloud, or accepted as a bounded limitation of the deployment.

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

## Carbon-Aware Deployment

### Summary

A lower-carbon location or cloud provider is preferred where options meet a workload's requirements equally, with provider commitments and reporting considered.

### Standards

1. `std-arch-carbon-aware-deployment-01` Where multiple locations or cloud providers equally satisfy a workload's technical, legal, data residency, and commercial requirements, the option with the lower carbon-intensity energy source **SHOULD** be selected.
2. `std-arch-carbon-aware-deployment-02` Selection of a cloud provider **SHOULD** account for its published environmental commitments and reporting where available.

### Implements These Principles

- [Sustainability](../../principles/cost-sustainability/sustainability.md)

