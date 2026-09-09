---
last_edited: 2026-09-09
---

# Serverless

## Function Scope

### Summary

A function provides one reusable capability, and an existing function with equivalent scope is reused.

### Standards

1. `std-plat-function-scope-01` A function **SHOULD** be scoped to a single capability expressed generically enough to be orchestrated into more than one workflow.
2. `std-plat-function-scope-02` Before a new function is created, an existing function with equivalent scope **SHOULD** be identified and reused.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Portability

### Summary

A function separates business logic from proprietary trigger formats and uses portable packaging where it provides value.

### Standards

1. `std-plat-portability-01` A function's business logic **SHOULD** be kept separable from the platform's proprietary trigger and event format, such as via an adapter, so it can be ported to a different runtime model without a rewrite.
2. `std-plat-portability-02` A function **SHOULD** be packaged as a container image for portability.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

## Runtime Selection

### Summary

A function's runtime is selected according to measured latency, performance, cost, and workload compatibility and is optimised where required.

### Standards

1. `std-plat-runtime-selection-01` A function's runtime **SHOULD** be selected using measured startup latency, execution performance, cost, and workload compatibility.
2. `std-plat-runtime-selection-02` Where a function's runtime does not meet its startup latency requirement, an available build-time or runtime optimisation **SHOULD** be used to bring it within that requirement.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Shared Dependencies & Resources

### Summary

Shared dependencies and reusable resources are structured to avoid duplication and repeated initialisation across warm invocations.

### Standards

1. `std-plat-shared-dependencies-resources-01` A dependency shared across multiple functions **SHOULD** be packaged and versioned separately from each function's own deployment package, such as through a shared layer or library.
2. `std-plat-shared-dependencies-resources-02` A function **SHOULD** initialise a reusable resource, such as a database connection or SDK client, outside its handler so it can be reused across warm invocations.

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)

## Function Configuration

### Summary

A function's configuration is authoritative, version-controlled code, and direct changes to deployed configuration are incorporated before the next deployment.

### Standards

1. `std-plat-function-configuration-01` A function's configuration, including its trigger, timeout, memory allocation, and concurrency limit, **MUST** be held as version-controlled, declarative code.
2. `std-plat-function-configuration-02` A change made directly to a deployed function's configuration, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that function's next deployment.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Versioning

### Summary

Where the platform supports immutable published versions, each deployment publishes a new version and production identifies the version it runs.

### Standards

1. `std-plat-versioning-01` Where the platform supports immutable published versions, a function's production configuration **MUST** identify the version it runs, including where a stable alias controls traffic to that version.
2. `std-plat-versioning-02` Where the platform supports immutable published versions, each deployment **MUST** publish a new version.

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Execution Boundaries

### Summary

A function has workload-based timeout and memory limits, measures cold-start latency where relevant, and may use minimum pre-warmed capacity when optimisation cannot meet that latency requirement.

### Standards

1. `std-plat-execution-boundaries-01` A function **MUST** have a bounded timeout based on its tested execution duration and failure behaviour.
2. `std-plat-execution-boundaries-02` Where a function is invoked synchronously through a gateway or load balancer with its own timeout, the function's timeout **MUST** remain shorter than the caller's timeout, so the caller does not time out before the function completes.
3. `std-plat-execution-boundaries-03` A configurable function memory allocation **SHOULD** be set from the function's own observed or tested resource usage.
4. `std-plat-execution-boundaries-04` Where a function is invoked on a latency-sensitive path, its cold-start latency **MUST** be measured against that path's own latency requirement.
5. `std-plat-execution-boundaries-05` Where runtime or build optimisation does not meet a function's cold-start latency requirement, the platform's pre-warming mechanism **MAY** be used, kept to the minimum instances the path needs.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Concurrency Limits

### Summary

A function's concurrency is bounded by the combined capacity available from its downstream dependencies.

### Standards

1. `std-plat-concurrency-limits-01` Where unconstrained execution could exceed a downstream dependency's capacity, a function's concurrency **MUST** be bounded to a limit that dependency can sustain.
2. `std-plat-concurrency-limits-02` Where concurrency limits protect a dependency shared by multiple functions, those limits **MUST** account for their combined demand.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Failure Handling

### Summary

A retried invocation is idempotent, completes within its trigger's redelivery window, and is captured for recovery after exhausting retries.

### Standards

1. `std-plat-failure-handling-01` A function subject to automatic retries **MUST** be idempotent or otherwise prevent a retried invocation from producing an inconsistent or duplicate outcome.
2. `std-plat-failure-handling-02` Where a function's trigger has its own redelivery window, such as a queue or stream, the function's timeout **MUST** remain shorter than that window, so a message is not redelivered before a prior attempt finishes.
3. `std-plat-failure-handling-03` Where the platform manages retries, an invocation that exhausts them without succeeding **MUST** be captured for investigation and recovery.

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

## Permissions

### Summary

A function receives only the permissions its code requires, and obsolete permissions are removed.

### Standards

1. `std-plat-permissions-01` A function **MUST** be granted only the permissions its own code requires.
2. `std-plat-permissions-02` A permission no longer required by a function's code **MUST** be removed.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Runtime Secrets

### Summary

A function references runtime secrets through an approved secrets management mechanism independently of its deployment package.

### Standards

1. `std-plat-runtime-secrets-01` A secret a function depends on at runtime **MUST** be stored in and referenced through an approved secrets management mechanism.
2. `std-plat-runtime-secrets-02` A secret **MUST** be referenced independently of the function's deployment package so rotation does not require the package to be rebuilt.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Observability

### Summary

Invocation flows propagate trace context where available, with duration and cost attributable to the function or invocation path.

### Standards

1. `std-plat-observability-01` Function instrumentation **SHOULD** create or propagate trace context across synchronous, asynchronous, and event-driven boundaries.
2. `std-plat-observability-02` The duration and cost contribution of an invocation **MUST** be visible, so a change in cost can be attributed to the function or invocation path that caused it.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
