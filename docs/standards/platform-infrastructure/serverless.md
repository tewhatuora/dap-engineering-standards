# Serverless

## Declarative Function Configuration

### Summary

A function's configuration is version-controlled code, kept authoritative for every deployment.

### Standards

1. `std-plat-declarative-function-config-01` A function's configuration, including its trigger, timeout, memory allocation, and concurrency limit, **MUST** be held as version-controlled, declarative code rather than configured manually against a deployed function.
2. `std-plat-declarative-function-config-02` A change made directly to a deployed function's configuration, such as one made to resolve an incident, **MUST** be incorporated into its version-controlled configuration before that function's next deployment.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Execution Boundaries

### Summary

Set execution limits from the workload's own needs rather than the platform's defaults.

### Standards

1. `std-plat-execution-boundaries-01` A function's timeout **MUST** be set to the shortest duration its own workload can reliably complete within, so a hung or unexpectedly long invocation does not run up unnecessary cost.
2. `std-plat-execution-boundaries-02` Where a function is invoked synchronously through a gateway or load balancer with its own timeout, the function's timeout **MUST** remain shorter than the caller's timeout, so the caller does not time out before the function completes.
3. `std-plat-execution-boundaries-03` Where a platform allows a function's memory allocation to be configured, it **MUST** be set from the function's own observed or tested resource usage, rather than a platform default.
4. `std-plat-execution-boundaries-04` Where a function is invoked on a latency-sensitive path, its cold-start latency **MUST** be measured against that path's own latency requirement.
5. `std-plat-execution-boundaries-05` Where a language or build optimisation does not meet a function's cold-start latency requirement, the platform's pre-warming mechanism **MAY** be used instead, kept to the minimum instances the path needs, since it reintroduces standing cost.

### Implements These Principles

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)
- [Cost Awareness by Design](../../principles/cost-sustainability/cost-awareness-by-design.md)

## Language & Runtime Selection

### Summary

Choose the runtime for the path's latency and cost needs, and optimise it where needed.

### Standards

1. `std-plat-runtime-selection-01` For a function on a latency-sensitive or cost-sensitive invocation path, a language with lower cold-start overhead, such as Python, TypeScript, or Go, **SHOULD** be preferred over a managed-runtime language, such as Java or C#.
2. `std-plat-runtime-selection-02` Where a managed-runtime language is used on such a path, an available build-time or runtime optimisation, such as ahead-of-time or native compilation, **MUST** bring its cold-start overhead within the path's requirement.

### Implements These Principles

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)
- [Cost Awareness by Design](../../principles/cost-sustainability/cost-awareness-by-design.md)

## Concurrency & Downstream Protection

### Summary

Bound concurrency to what its most constrained downstream dependency can sustain.

### Standards

1. `std-plat-concurrency-protection-01` A function's concurrent execution **MUST** be bounded to a limit its most constrained downstream dependency, such as a fixed-size connection pool or a managed database proxy, can sustain.
2. `std-plat-concurrency-protection-02` Where multiple functions share the same downstream dependency, their concurrency limits **MUST** be set together, so they cannot collectively exceed that dependency's capacity.

### Implements These Principles

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Retry & Failure Handling

### Summary

Make a retry idempotent, bound its redelivery window, and capture what still fails for recovery.

### Standards

1. `std-plat-retry-failure-01` A function **MUST** be idempotent or otherwise safeguarded so an automatically retried invocation does not produce an inconsistent or duplicate outcome.
2. `std-plat-retry-failure-02` Where a function's trigger has its own redelivery window, such as a queue or stream, the function's timeout **MUST** remain shorter than that window, so a message is not redelivered before a prior attempt finishes.
3. `std-plat-retry-failure-03` An invocation that exhausts its retries without succeeding **MUST** be captured, such as through a dedicated failure destination, so it can be investigated and reprocessed once the underlying cause is resolved.

### Implements These Principles

- [Stateless First](../../principles/architecture-platform/stateless-first.md)

## Invocation Observability

### Summary

Make every invocation traceable end-to-end, and its duration and cost attributable.

### Standards

1. `std-plat-invocation-observability-01` A function invocation **MUST** be traceable through a single correlation identifier as part of the distributed transaction it belongs to, including across an asynchronous or event-driven boundary.
2. `std-plat-invocation-observability-02` The duration and cost contribution of an invocation **MUST** be visible, so a change in cost can be attributed to the function or invocation path that caused it.

### Implements These Principles

- [Observability by Default](../../principles/reliability-operations/observability-by-default.md)
- [Cost Awareness by Design](../../principles/cost-sustainability/cost-awareness-by-design.md)

## Function Portability

### Summary

Keep business logic separable from the platform's proprietary triggers, and package it for portability.

### Standards

1. `std-plat-function-portability-01` A function's business logic **SHOULD** be kept separable from the platform's proprietary trigger and event format, such as via an adapter, so it can be ported to a different runtime model without a rewrite.
2. `std-plat-function-portability-02` A function **SHOULD** be packaged as a container image for portability, rather than the platform's own proprietary archive format.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

## Shared Dependencies & Resources

### Summary

Share a dependency deliberately across functions, and reuse a resource across warm invocations.

### Standards

1. `std-plat-shared-dependencies-01` A dependency shared across multiple functions **SHOULD** be packaged and versioned separately from each function's own deployment package, such as through a shared layer or library, rather than duplicated into each one independently.
2. `std-plat-shared-dependencies-02` A function **SHOULD** initialise a reusable resource, such as a database connection or SDK client, outside its handler, so it can be reused across a warm invocation rather than reinitialised every time.

### Implements These Principles

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)

## Function Scope

### Summary

Scope a function to one reusable capability rather than a workflow-specific copy.

### Standards

1. `std-plat-function-scope-01` A function **SHOULD** be scoped to a single capability, expressed generically enough to be orchestrated into more than one workflow, rather than duplicated with near-identical logic for each workflow that needs it.
2. `std-plat-function-scope-02` Before a new function is created, an existing function with equivalent scope **SHOULD** be identified and reused.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Reuse Before Reinvention](../../principles/engineering-practice/reuse-before-reinvention.md)

## Function Versioning

### Summary

Deploy an immutable version so production always points to known, published code.

### Standards

1. `std-plat-function-versioning-01` A function's production trigger **MUST** reference a specific, immutable published version, rather than a mutable pointer, such as `latest`, that automatically tracks the newest deployed code.
2. `std-plat-function-versioning-02` Each deployment **MUST** publish a new, immutable version rather than overwriting the code behind an already-published version number.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Least-Privilege Permissions

### Summary

Grant only the permission a function's code needs today, and remove it once that changes.

### Standards

1. `std-plat-least-privilege-01` A function **MUST** be granted only the permissions its own code requires, rather than a broader set of permissions shared across multiple functions.
2. `std-plat-least-privilege-02` A permission no longer required by a function's code **MUST** be removed.

### Implements These Principles

- [Security by Design](../../principles/security-privacy/security-by-design.md)

## Runtime Secrets

### Summary

Keep a secret out of a function's code and configuration, and make it rotatable without a redeploy.

### Standards

1. `std-plat-runtime-secrets-01` A secret a function depends on at runtime **MUST** be referenced through the platform's own secrets management mechanism, rather than stored as its actual value in the function's deployment package or declarative configuration.
2. `std-plat-runtime-secrets-02` A secret **MUST** be able to be rotated without requiring the function's deployment package to be rebuilt or its configuration to be redeployed.

### Implements These Principles

- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
