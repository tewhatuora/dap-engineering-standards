# Serverless Standards

## Summary

> A serverless function is sized to its workload, designed with portability in mind, and traceable as part of a distributed transaction.

## Standards

### Declarative Function Configuration

> A function's configuration is version-controlled code, kept authoritative for every deployment.

1. A function's configuration, including its trigger, timeout, memory allocation, and concurrency limit, **MUST** be held as version-controlled, declarative code rather than configured manually against a deployed function.
2. A change made directly to a deployed function's configuration, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that function's next deployment.

#### References

- [Infrastructure as Code](infrastructure-as-code.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Execution Boundaries

> Set execution limits from the workload's own needs, not the platform's defaults.

1. A function's timeout **MUST** be set to the shortest duration its own workload can reliably complete within, so a hung or unexpectedly long invocation does not run up unnecessary cost.
2. Where a function is invoked synchronously through a gateway or load balancer with its own timeout, the function's timeout **MUST** remain shorter than the caller's timeout, so the caller does not time out before the function completes.
3. Where a platform allows a function's memory allocation to be configured, it **MUST** be set from the function's own observed or tested resource usage, rather than a platform default.
4. Where a function is invoked on a latency-sensitive path, its cold-start latency **MUST** be measured against that path's own latency requirement.
5. Where a language or build optimisation does not meet a function's cold-start latency requirement, the platform's pre-warming mechanism **MAY** be used instead, kept to the minimum instances the path needs, since it reintroduces standing cost.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Language & Runtime Selection

> Choose the runtime for the path's latency and cost needs, and optimise it where needed.

1. For a function on a latency-sensitive or cost-sensitive invocation path, a language with lower cold-start overhead, such as Python, TypeScript, or Go, **SHOULD** be preferred over a managed-runtime language, such as Java or C#.
2. Where a managed-runtime language is used on such a path, an available build-time or runtime optimisation, such as ahead-of-time or native compilation, **MUST** bring its cold-start overhead within the path's requirement.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Concurrency & Downstream Protection

> Bound concurrency to what its most constrained downstream dependency can sustain.

1. A function's concurrent execution **MUST** be bounded to a limit its most constrained downstream dependency, such as a fixed-size connection pool or a managed database proxy, can sustain.
2. Where multiple functions share the same downstream dependency, their concurrency limits **MUST** be set together, so they cannot collectively exceed that dependency's capacity.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Retry & Failure Handling

> Make a retry idempotent, bound its redelivery window, and capture what still fails for recovery.

1. A function **MUST** be idempotent or otherwise safeguarded so an automatically retried invocation does not produce an inconsistent or duplicate outcome.
2. Where a function's trigger has its own redelivery window, such as a queue or stream, the function's timeout **MUST** remain shorter than that window, so a message is not redelivered before a prior attempt finishes.
3. An invocation that exhausts its retries without succeeding **MUST** be captured, such as through a dedicated failure destination, so it can be investigated and reprocessed once the underlying cause is resolved.

#### References

- [Stateless First](../../principles/stateless-first.md)
- [Event-Driven Messaging Standards](../architecture-system-design/event-driven-messaging-standards.md)

### Invocation Observability

> Make every invocation traceable end-to-end, and its duration and cost attributable.

1. A function invocation **MUST** be traceable through a single correlation identifier as part of the distributed transaction it belongs to, including across an asynchronous or event-driven boundary.
2. The duration and cost contribution of an invocation **MUST** be visible, so a change in cost can be attributed to the function or invocation path that caused it.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Cost Monitoring & Attribution](../cost-sustainability/cost-monitoring-attribution.md)

### Function Portability

> Keep business logic separable from the platform's proprietary triggers, and package it for portability.

1. A function's business logic **SHOULD** be kept separable from the platform's proprietary trigger and event format, such as via an adapter, so it can be ported to a different runtime model without a rewrite.
2. A function **SHOULD** be packaged as a container image for portability, rather than the platform's own proprietary archive format.

#### References

- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)
- [Runtime Architecture](../architecture-system-design/runtime-architecture.md)

### Shared Dependencies & Resources

> Share a dependency deliberately across functions, and reuse a resource across warm invocations.

1. A dependency shared across multiple functions **SHOULD** be packaged and versioned separately from each function's own deployment package, such as through a shared layer or library, rather than duplicated into each one independently.
2. A function **SHOULD** initialise a reusable resource, such as a database connection or SDK client, outside its handler, so it can be reused across a warm invocation rather than reinitialised every time.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)
- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Function Scope

> Scope a function to one reusable capability, not a workflow-specific copy.

1. A function **SHOULD** be scoped to a single capability, expressed generically enough to be orchestrated into more than one workflow, rather than duplicated with near-identical logic for each workflow that needs it.
2. Before a new function is created, an existing function with equivalent scope **SHOULD** be identified and reused.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)

### Function Versioning

> Deploy an immutable version so production always points to known, published code.

1. A function's production trigger **MUST** reference a specific, immutable published version, rather than a mutable pointer, such as `latest`, that automatically tracks the newest deployed code.
2. Each deployment **MUST** publish a new, immutable version rather than overwriting the code behind an already-published version number.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Least-Privilege Permissions

> Grant only the permission a function's code needs today, and remove it once that changes.

1. A function **MUST** be granted only the permissions its own code requires, rather than a broader set of permissions shared across multiple functions.
2. A permission no longer required by a function's code **MUST** be removed.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Runtime Secrets

> Keep a secret out of a function's code and configuration, and make it rotatable without a redeploy.

1. A secret a function depends on at runtime **MUST** be referenced through the platform's own secrets management mechanism, rather than stored as its actual value in the function's deployment package or declarative configuration.
2. A secret **MUST** be able to be rotated without requiring the function's deployment package to be rebuilt or its configuration to be redeployed.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Everything as Code](../../principles/everything-as-code.md)
- [Configuration Management](../code-implementation/configuration-management.md)
