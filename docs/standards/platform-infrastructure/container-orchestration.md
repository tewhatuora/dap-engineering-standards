---
last_edited: 2026-09-14
---

# Container Orchestration

## Orchestration Configuration

### Summary

A workload's orchestration configuration is authoritative, version-controlled code, and direct changes to running state are incorporated before the next deployment.

### Standards

1. A workload's orchestration configuration, such as its deployment, scaling, and networking definitions, **MUST** be held as version-controlled, declarative code. `std-plat-orchestration-configuration-01`
2. A change made directly to a workload's running state, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that workload's next deployment. `std-plat-orchestration-configuration-02`

### Related Standards

- [Infrastructure as Code](infrastructure-as-code.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Resource Sizing

### Summary

A workload declares CPU and memory according to observed or tested usage and revisits those values as usage changes.

### Standards

1. A containerised workload **MUST** declare the CPU and memory it requires based on its own observed or tested usage. `std-plat-resource-sizing-01`
2. A workload's declared CPU and memory **SHOULD** be revisited as its actual usage changes, so it does not remain over- or under-provisioned relative to real demand. `std-plat-resource-sizing-02`

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Elastic Scaling

### Summary

A workload with materially variable demand scales automatically within defined bounds, maintains proportionate redundancy across failure domains, and scales unused non-continuous workloads to zero.

### Standards

1. A containerised workload with materially variable demand **SHOULD** adjust its instance count automatically using a defined demand metric, such as CPU utilisation, memory utilisation, or request rate. `std-plat-elastic-scaling-01`
2. Where automatic scaling is used, a workload's minimum and maximum instance count **MUST** be defined so scaling stays within a bounded, predictable range. `std-plat-elastic-scaling-02`
3. A continuously available workload's minimum instance count **MUST** provide redundancy proportionate to its criticality, so a single instance failure does not remove all its capacity. `std-plat-elastic-scaling-03`
4. A workload's instances **SHOULD** be spread across failure domains, so a single domain failure does not remove all its capacity. `std-plat-elastic-scaling-04`
5. A non-production or otherwise non-continuous workload's minimum instance count **SHOULD** be zero when it is not in use, so it does not consume resources while idle. `std-plat-elastic-scaling-05`

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Instance Health & Lifecycle

### Summary

An instance uses health and readiness behaviour appropriate to its workload and receives time to complete or safely stop in-flight work.

### Standards

1. Where a health check controls restart or replacement, its failure threshold **SHOULD** prevent a single transient failure from restarting the instance. `std-plat-instance-health-lifecycle-01`
2. A workload that can be running without being able to serve traffic **MUST** expose readiness independently of liveness. `std-plat-instance-health-lifecycle-02`
3. An instance's termination grace period **MUST** allow in-flight work to complete or stop safely within a defined bound. `std-plat-instance-health-lifecycle-03`

### Related Standards

- [Containerisation](containerisation.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Workload Isolation

### Summary

A workload is logically isolated from other teams and services by default, with explicit network rules used to control permitted traffic.

### Standards

1. A workload **MUST** be logically isolated from a workload belonging to a different team or service by default, such as through a dedicated cluster or namespace. `std-plat-workload-isolation-01`
2. Network traffic between two workloads **SHOULD** be denied by default and permitted only where an explicit, defined rule allows it. `std-plat-workload-isolation-02`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Workload Runtime Secrets

### Summary

A workload's secret is injected by the platform at runtime, excluded from image and configuration plaintext, and referenced independently of the image for rotation.

### Standards

1. A secret a containerised workload depends on at runtime **MUST** be injected by the platform's own secrets management mechanism. `std-plat-workload-runtime-secrets-01`
2. A runtime secret's value **MUST NOT** appear as plain text in the container image or its declarative configuration. `std-plat-workload-runtime-secrets-02`
3. A secret **MUST** be referenced independently of the workload's image so rotation does not require the image to be rebuilt. `std-plat-workload-runtime-secrets-03`

### Related Standards

- [Configuration Management](../code-implementation/configuration-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
