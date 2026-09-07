# Container Orchestration

## Summary

> A containerised workload is right-sized, scales according to demand, and remains isolated from other workloads.

## Standards

### Declarative Configuration

> A workload's orchestration configuration is version-controlled code, kept authoritative for what is actually running.

1. A workload's orchestration configuration, such as its deployment, scaling, and networking definitions, **MUST** be held as version-controlled, declarative code rather than created or modified manually against a running cluster.
2. A change made directly to a workload's running state, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that workload's next deployment.

#### References

- [Infrastructure as Code](infrastructure-as-code.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

### Resource Sizing

> A workload declares CPU and memory from its own observed usage, revisited as that usage actually changes.

1. A containerised workload **MUST** declare the CPU and memory it requires, based on its own observed or tested usage rather than an arbitrary or default value.
2. A workload's declared CPU and memory **SHOULD** be revisited as its actual usage changes, so it does not remain over- or under-provisioned relative to real demand.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Resource Efficiency & Optimisation](../cost-sustainability/resource-efficiency-optimisation.md)

### Elastic Scaling

> A workload uses automatic scaling where its demand varies, within a defined, redundant minimum and maximum.

1. A containerised workload with materially variable demand **SHOULD** adjust its instance count automatically using a defined demand metric, such as CPU utilisation, memory utilisation, or request rate.
2. Where automatic scaling is used, a workload's minimum and maximum instance count **MUST** be defined so scaling stays within a bounded, predictable range.
3. A continuously available workload's minimum instance count **MUST** provide redundancy proportionate to its criticality, so a single instance failure does not remove all its capacity.
4. A workload's instances **SHOULD** be spread across failure domains, so a single domain failure does not remove all its capacity.
5. A non-production or otherwise non-continuous workload's minimum instance count **SHOULD** be zero when it is not in use, so it does not consume resources while idle.

#### References

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Instance Health & Lifecycle

> An instance uses health and readiness behavior appropriate to its workload and receives time to complete or safely stop in-flight work.

1. Where a health check controls restart or replacement, its failure threshold **SHOULD** prevent a single transient failure from restarting the instance.
2. A workload that can be running without being able to serve traffic **MUST** expose readiness independently of liveness.
3. An instance's termination grace period **MUST** allow in-flight work to complete or stop safely within a defined bound.

#### References

- [Containerisation](containerisation.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Workload & Network Isolation

> A workload is isolated from another by default, with network traffic denied by default where the platform supports that control.

1. A workload **MUST** be logically isolated from a workload belonging to a different team or service by default, such as through a dedicated cluster or namespace.
2. Network traffic between two workloads **SHOULD** be denied by default and permitted only where an explicit, defined rule allows it.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

### Runtime Secrets

> A workload's secret is injected by the platform at runtime, never stored as plain text, and rotatable without a redeploy.

1. A secret a containerised workload depends on at runtime **MUST** be injected by the platform's own secrets management mechanism; its value **MUST NOT** appear as plain text in the container image or its declarative configuration.
2. A secret **MUST** be referenced independently of the workload's image so rotation does not require the image to be rebuilt.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
