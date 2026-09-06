# Runtime Architecture

## Summary

> Choose a workload's packaging, runtime model, and deployment location deliberately, based on its requirements.

## Standards

### Runtime Model Selection

> A workload's runtime model is an explicit, justified decision made during design, not assumed from another workload.

1. The runtime model a workload will execute on **MUST** be an explicit, justified decision made during design.
2. A workload **MUST NOT** proceed to implementation before its runtime model is selected and justified against the workload's own characteristics.
3. A runtime model selected for one workload **MUST NOT** be assumed suitable for a different workload without independently assessing that workload's characteristics.

#### References

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

### Default Packaging Format

> A service is packaged as a container image by default, for a consistent, portable artifact.

1. Services **SHOULD** be packaged as a container image by default, since this provides a consistent, portable artifact.

#### References

- [Containerisation](../platform-infrastructure/containerisation.md)

### Externalised Request State

> State required to fulfil a request remains available independently of any service instance.

1. State required to fulfil a request **MUST** be held in a purpose-built store available independently of any service instance; instance memory and local disk **MUST NOT** be used for that state.

#### References

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

### Serverless & Managed Services

> Serverless or a managed service is chosen only where the workload's own characteristics actually fit it.

1. Serverless **SHOULD** be considered for event-driven or highly variable demand, since it scales to zero, is cost-efficient at low or spiky usage, and shifts operational effort to the provider.
2. Serverless **SHOULD NOT** be used where a workload runs continuously, is cold-start sensitive, needs resources such as a GPU beyond the platform's limits, or holds state directly rather than externalising it.
3. A managed service **SHOULD** be considered where an existing vendor-operated capability, such as a database, queue, or cache, already meets the need, avoiding the cost, effort, and availability risk of building and operating an equivalent.
4. A managed service **SHOULD NOT** be used where it lacks a specific configuration, version, or extension the workload needs, or where its cost at scale would exceed a self-operated equivalent.
5. Neither **SHOULD** be used where a workload requires strict isolation from other workloads or depends on a protocol, connection, or language runtime version the platform does not natively support.
6. A managed service **SHOULD** be preferred over a self-operated equivalent where shared infrastructure provides higher utilisation while meeting the workload's requirements.

#### References

- [Managed Services](../platform-infrastructure/managed-services.md)
- [Serverless](../platform-infrastructure/serverless.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

### Runtime Options & Platform Capability

> A workload's runtime model options stay limited to platform capability the organisation already operates or approves.

1. The runtime models evaluated for a workload **MUST** be limited to those the organisation operates or has approved for operational use.
2. A runtime model requiring a new, unapproved platform capability **MUST NOT** be adopted until that capability is approved through the organisation's governance process.

#### References

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

### Vendor Coupling

> The vendor coupling a runtime model introduces is identified and weighed against the capability it provides.

1. Where a candidate runtime model is a managed service or serverless offering, the vendor coupling it introduces **MUST** be identified and weighed against the capability it provides.
2. A runtime model **MAY** be selected for the cloud-native capability it provides, even where this introduces vendor coupling.
3. An application-layer abstraction **SHOULD** be used to reduce how much a workload depends on a specific vendor's runtime model, easing any future migration.
4. An application-layer abstraction introduced to reduce vendor coupling **MUST NOT** add cost or complexity disproportionate to the vendor coupling it reduces.

#### References

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

### Cloud Deployment Selection

> A workload's deployment model is an explicit choice between public, private, and micro cloud, based on its requirements.

1. The choice between public cloud, private cloud, and micro cloud deployment **MUST** be an explicit decision for a workload, based on its own requirements.
2. Public cloud **SHOULD** be the default deployment model, since it provides the widest access to cloud-native capabilities such as managed services, serverless offerings, and elastic scaling; private or micro cloud **MAY** be selected where a specific requirement, such as data residency, connectivity, or proximity to a local data source, justifies it.
3. Where private cloud deployment is required, a workload **MUST** use the organisation's approved private cloud platform.
4. Micro cloud deployment, meaning small-scale infrastructure deployed close to a workload's point of use, **MUST** only be used where a workload has a genuine requirement for local execution.
5. Where a private or micro cloud deployment lacks a managed service, serverless capability, or scaling behaviour a workload requires, that gap **MUST** be identified and either addressed through a deliberate hybrid architecture that offloads the requirement to the public cloud, or accepted as a bounded limitation of the deployment.

#### References

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

### Data Residency & Sovereignty

> The jurisdictions permitted to store, process, or compel access to a workload's data are defined before deployment selection, enforced through infrastructure and configuration, and periodically verified.

1. The location and cloud provider selected for a workload **MUST** satisfy any applicable data residency or sovereignty requirement.
2. Any data residency or sovereignty requirements applicable to a workload **MUST** be defined before its deployment location or cloud provider is selected.
3. Selection of a workload's location and cloud provider **MUST** account for every jurisdiction able to compel access to its data, including jurisdictions other than the data's physical storage location.
4. Infrastructure and configuration for a workload subject to a data residency or sovereignty requirement **MUST** keep its data at rest and in processing within the jurisdictions approved for that data.
5. The jurisdictions in which a workload's data is actually stored and processed **SHOULD** be verified periodically through configuration review or automated audit.

#### References

- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)

### Carbon-Aware Deployment

> A lower-carbon location or cloud provider is preferred where options meet a workload's requirements equally, with provider commitments and reporting considered.

1. Where multiple locations or cloud providers equally satisfy a workload's technical, legal, data residency, and commercial requirements, the option with the lower carbon-intensity energy source **SHOULD** be selected.
2. Selection of a cloud provider **SHOULD** account for its published environmental commitments and reporting where available.

#### References

- [Sustainability](../../principles/cost-sustainability/sustainability.md)

