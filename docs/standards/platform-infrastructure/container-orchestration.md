# Container Orchestration

## Summary

> A containerised workload is right-sized, scales automatically with demand, and remains isolated from other workloads.

## Objective

This standard defines requirements for how a containerised workload is deployed, scaled, and operated on an orchestration platform. It keeps a workload's resource use right-sized, its capacity elastic to demand, and its instances isolated from other workloads by default, so it runs efficiently without manual oversight.

## Standards

### Declarative Configuration

These requirements set out how a workload's orchestration configuration is defined as code and remains the authoritative source for what is running.

1. A workload's orchestration configuration, such as its deployment, scaling, and networking definitions, **MUST** be held as version-controlled, declarative code rather than created or modified manually against a running cluster.
2. A change made directly to a workload's running state, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that configuration's next deployment.

#### References

- [Infrastructure as Code](infrastructure-as-code.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Resource Sizing

These requirements address how a workload's resource consumption is declared and kept right-sized.

1. A containerised workload **MUST** declare the CPU and memory it requires, based on its own observed or tested usage rather than an arbitrary or default value.
2. A workload's declared CPU and memory **MUST** be revisited as its actual usage changes, so it does not remain over- or under-provisioned relative to real demand.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)

### Elastic Scaling

These requirements describe how the number of running instances of a workload adjusts to demand.

1. A containerised workload's instance count **MUST** adjust automatically to a defined demand metric, such as CPU utilisation, memory utilisation, or request rate, rather than manual intervention.
2. A workload's minimum and maximum instance count **MUST** be defined, so automatic scaling stays within a bounded, predictable range.
3. A workload's minimum instance count **MUST** provide redundancy proportionate to its criticality, so a single instance failure does not remove all its capacity.
4. A workload's instances **SHOULD** be spread across failure domains, so a single domain failure does not remove all its capacity.
5. A non-production or otherwise non-continuous workload's minimum instance count **SHOULD** be zero when it is not in use, so it does not consume resources while idle.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Instance Health & Lifecycle

These requirements guide how an instance of a containerised workload is started, healed, and stopped.

1. An instance **MUST** be restarted or replaced only after it fails its health check a defined number of consecutive times, so a single transient failure does not trigger unnecessary churn.
2. A workload's readiness check **MUST** be distinct from its health check, so the platform can withhold traffic from an instance that is alive but not yet able to serve it.
3. An instance's grace period before being stopped **MUST** be long enough for its longest-running in-flight operation to complete.

#### References

- [Containerisation Standards](containerisation-standards.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Workload & Network Isolation

These requirements cover how a workload is isolated by default from another workload sharing the same platform.

1. A workload **MUST** be logically isolated from a workload belonging to a different team or service by default, such as through a dedicated cluster or namespace.
2. Network traffic between two workloads **SHOULD** be denied by default and permitted only where an explicit, defined rule allows it.

#### References

- [Security by Design](../../principles/security-by-design.md)

### Runtime Secrets

These requirements guide how a workload's secrets are kept secure and current at runtime.

1. A secret a containerised workload depends on at runtime **MUST** be injected by the platform's own secrets management mechanism, such as an environment variable; its value **MUST** never appear as plain text in the container image or its declarative configuration.
2. A secret **MUST** be able to be rotated without requiring the workload's image to be rebuilt or its configuration to be redeployed.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Everything as Code](../../principles/everything-as-code.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
