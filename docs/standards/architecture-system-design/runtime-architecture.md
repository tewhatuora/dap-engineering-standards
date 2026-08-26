# Runtime Architecture

## Summary

> Choose a workload's packaging, runtime model, and deployment location deliberately, based on its requirements.

## Standards

### Runtime Model Selection

These requirements address how a workload's runtime model is selected as an explicit, justified decision made during design.

1. The runtime model a workload will execute on **MUST** be an explicit, justified decision made during design.
2. A workload **MUST NOT** proceed to implementation before its runtime model is selected and justified against the workload's own characteristics.
3. A runtime model selected for one workload **MUST NOT** be assumed suitable for a different workload without independently assessing that workload's characteristics.

### Default Packaging Format

This requirement describes how a service is packaged by default.

1. Services **SHOULD** be packaged as a container image by default, since this provides a consistent, portable artifact.

#### References

- [Containerisation Standards](../platform-infrastructure/containerisation-standards.md)

### Serverless & Managed Services

These requirements set out when serverless or a managed service is the better fit for a workload, and when it is not.

1. Serverless **SHOULD** be considered for event-driven or highly variable demand, since it scales to zero, is cost-efficient at low or spiky usage, and shifts operational effort to the provider.
2. Serverless **SHOULD NOT** be used where a workload runs continuously, is cold-start sensitive, needs resources such as a GPU beyond the platform's limits, or holds state directly rather than externalising it.
3. A managed service **SHOULD** be considered where an existing vendor-operated capability, such as a database, queue, or cache, already meets the need, avoiding the cost, effort, and availability risk of building and operating an equivalent.
4. A managed service **SHOULD NOT** be used where it lacks a specific configuration, version, or extension the workload needs, or where its cost at scale would exceed a self-operated equivalent.
5. Neither **SHOULD** be used where a workload requires strict isolation from other workloads or depends on a protocol, connection, or language runtime version the platform does not natively support.

#### References

- [Managed Services Standards](../platform-infrastructure/managed-services-standards.md)
- [Serverless Standards](../platform-infrastructure/serverless-standards.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Stateless First](../../principles/stateless-first.md)

### Runtime Options & Platform Capability

These requirements cover how the runtime models evaluated for a workload are constrained to platform capability the organisation already operates or has approved.

1. The runtime models evaluated for a workload **MUST** be limited to those the organisation operates or has approved for operational use.
2. A runtime model requiring a new, unapproved platform capability **MUST NOT** be adopted until that capability is approved through the organisation's governance process.

#### References

- [Platform Alignment](../../principles/platform-alignment.md)

### Vendor Coupling

These requirements guide how the vendor coupling a runtime model choice introduces is identified and weighed against the capability it provides.

1. Where a candidate runtime model is a managed service or serverless offering, the vendor coupling it introduces **MUST** be identified and weighed against the capability it provides.
2. A runtime model **MAY** be selected for the cloud-native capability it provides, even where this introduces vendor coupling.
3. An application-layer abstraction **SHOULD** be used to reduce how much a workload depends on a specific vendor's runtime model, easing any future migration.

#### References

- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)

### Cloud Deployment Selection

These requirements set out how a workload's deployment is chosen between public cloud, private cloud, and micro cloud.

1. The choice between public cloud, private cloud, and micro cloud deployment **MUST** be an explicit decision for a workload, based on its own requirements.
2. Public cloud **SHOULD** be the default deployment model, since it provides the widest access to cloud-native capabilities such as managed services, serverless offerings, and elastic scaling; private or micro cloud **MAY** be selected where a specific requirement, such as data residency, connectivity, or proximity to a local data source, justifies it.
3. Where private cloud deployment is required, a workload **MUST** use the organisation's approved private cloud platform.
4. Micro cloud deployment, meaning small-scale infrastructure deployed close to a workload's point of use, **MUST** only be used where a workload has a genuine requirement for local execution.
5. Where a private or micro cloud deployment lacks a managed service, serverless capability, or scaling behaviour a workload requires, that gap **MUST** be identified and either addressed through a deliberate hybrid architecture that offloads the requirement to the public cloud, or accepted as a bounded limitation of the deployment.
6. The location and cloud provider selected for a workload **MUST** satisfy any applicable data residency or sovereignty requirement.

#### References

- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

