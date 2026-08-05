# Stateless First

## Objective

Stateless First establishes the expectation that services are designed without reliance on state retained between requests, so that any instance can serve any request. It directs engineering effort toward externalising genuinely required state, enabling services to scale horizontally, tolerate instance failure, and be replaced or restarted without loss of continuity for in-flight work.

## Principles

### Stateless by Default for Services

These principles design a service so any instance can handle any request, without retaining state from a prior one.

1. A service must be designed so that any instance can handle any incoming request, without depending on state retained in memory or on local disk from a prior request.
2. A request must not require routing to the specific instance that handled a prior related request in order to complete correctly.

### Externalising Required State

These principles externalise genuinely required state to a purpose-built store, rather than holding it in an instance.

1. Where state is genuinely required to fulfil a request, it must be externalised to a purpose-built store, such as a database, cache, or object store, rather than held in instance memory or on local disk.
2. An instance must be able to be stopped, restarted, or replaced at any time without losing state required for correct operation.

### No Reliance on Session Affinity / Sticky Sessions

These principles avoid depending on session affinity as a substitute for externalising state.

1. A service should not depend on session affinity or sticky sessions to route a client's repeat requests to the same instance as a substitute for externalising state.
2. Where session affinity is used for performance reasons, the service must still be able to serve the session correctly from a different instance if affinity is lost.

### Statelessness as a Prerequisite for Scaling & Resilience

These principles let a service scale horizontally and replace an instance without coordinating in-process state.

1. A service must be able to scale horizontally by adding or removing instances at any time, without requiring coordination of in-process state between them.
2. A new or replacement instance must be able to begin serving requests immediately, without recovering or synchronising state held only in another instance's memory.

#### References

[Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)\
[Container Orchestration](../standards/platform-infrastructure/container-orchestration.md)\
[Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)

### Idempotency & Safe Retries

These principles make a request handler idempotent, or otherwise safe against a retried request.

1. A request handler should be designed to be idempotent where feasible, so a retried request does not produce inconsistent or duplicate side effects.
2. Where an operation cannot be made idempotent, the service must provide another safeguard, such as a duplicate-request check, to prevent a retried request being applied more than once.

### Exceptions for Inherently Stateful Components

These principles allow a genuinely stateful component to retain state directly, provided it is durable and replicated proportionately.

1. A component whose defined purpose is to hold state, such as a database, message broker, or cache, may retain state directly and is not required to be stateless.
2. State held by such a component must be made durable and replicated in a manner proportionate to the criticality of the data it holds.

#### References

[Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)
