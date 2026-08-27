# Container Orchestration

## Summary

> A containerised workload is right-sized, scales automatically with demand, and remains isolated from other workloads.

## Standards

### Declarative Configuration

A workload's orchestration configuration is version-controlled code, kept authoritative for what is actually running.

1. A workload's orchestration configuration, such as its deployment, scaling, and networking definitions, **MUST** be held as version-controlled, declarative code rather than created or modified manually against a running cluster.
2. A change made directly to a workload's running state, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that workload's next deployment.

#### References

- [Infrastructure as Code](infrastructure-as-code.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Resource Sizing

A workload declares CPU and memory from its own observed usage, revisited as that usage actually changes.

1. A containerised workload **MUST** declare the CPU and memory it requires, based on its own observed or tested usage rather than an arbitrary or default value.
2. A workload's declared CPU and memory **MUST** be revisited as its actual usage changes, so it does not remain over- or under-provisioned relative to real demand.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)

### Elastic Scaling

A workload's instance count adjusts automatically to demand, within a defined, redundant minimum and maximum.

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

An instance is restarted only after repeated health check failures, and stopped only once its in-flight work completes.

1. An instance **MUST** be restarted or replaced only after it fails its health check a defined number of consecutive times, so a single transient failure does not trigger unnecessary churn.
2. A workload's readiness check **MUST** be distinct from its health check, so the platform can withhold traffic from an instance that is alive but not yet able to serve it.
3. An instance's grace period before being stopped **MUST** be long enough for its longest-running in-flight operation to complete.

#### References

- [Containerisation Standards](containerisation-standards.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Workload & Network Isolation

A workload is isolated from another by default, and network traffic between them is denied unless explicitly allowed.

1. A workload **MUST** be logically isolated from a workload belonging to a different team or service by default, such as through a dedicated cluster or namespace.
2. Network traffic between two workloads **SHOULD** be denied by default and permitted only where an explicit, defined rule allows it.

#### References

- [Security by Design](../../principles/security-by-design.md)

### Runtime Secrets

A workload's secret is injected by the platform at runtime, never stored as plain text, and rotatable without a redeploy.

1. A secret a containerised workload depends on at runtime **MUST** be injected by the platform's own secrets management mechanism, such as an environment variable; its value **MUST** never appear as plain text in the container image or its declarative configuration.
2. A secret **MUST** be able to be rotated without requiring the workload's image to be rebuilt or its configuration to be redeployed.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Everything as Code](../../principles/everything-as-code.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
