# Stateless First

## Summary

> Design a service so any instance can handle any request, with required state held externally.

## Objective

This principle establishes the expectation that services are designed without reliance on state retained between requests, so that any instance can serve any request. It keeps genuinely required state externalised, so a service can scale horizontally, tolerate instance failure, and be replaced or restarted without loss of continuity for in-flight work.

## Principles

### Stateless by Default for Services

These principles set out how a service is designed so any instance handles any request, without retaining state from a prior one.

1. A service **MUST** be designed so that any instance can handle any incoming request, without depending on state retained in memory or on local disk from a prior request.
2. A request **MUST NOT** require routing to the specific instance that handled a prior related request in order to complete correctly.

### Externalising Required State

These principles describe how genuinely required state is externalised to a purpose-built store, rather than held in an instance.

1. Where state is genuinely required to fulfil a request, it **MUST** be externalised to a purpose-built store, such as a database, cache, or object store, rather than held in instance memory or on local disk.
2. An instance **MUST** be able to be stopped, restarted, or replaced at any time without losing state required for correct operation.

### Session Affinity

These principles address how a service avoids depending on session affinity as a substitute for externalising state.

1. A service **SHOULD NOT** depend on session affinity or sticky sessions to route a client's repeat requests to the same instance as a substitute for externalising state.
2. Where session affinity is used for performance reasons, the service **MUST** still be able to serve the session correctly from a different instance if affinity is lost.

### Stateless Scaling & Resilience

These principles set out how a service scales horizontally and replaces an instance without coordinating in-process state.

1. A service **MUST** be able to scale horizontally by adding or removing instances at any time, without requiring coordination of in-process state between them.
2. A new or replacement instance **MUST** be able to begin serving requests immediately, without recovering or synchronising state held only in another instance's memory.

#### References

- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)
- [Container Orchestration](../standards/platform-infrastructure/container-orchestration.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)

### Idempotency & Safe Retries

These principles cover how a request handler becomes idempotent, or otherwise safe against a retried request.

1. A request handler **SHOULD** be designed to be idempotent where feasible, so a retried request does not produce inconsistent or duplicate side effects.
2. Where an operation cannot be made idempotent, the service **MUST** provide another safeguard, such as a duplicate-request check, to prevent a retried request being applied more than once.

### Stateful Components

These principles describe how a genuinely stateful component retains state directly, provided it is durable and replicated proportionately.

1. A component whose defined purpose is to hold state, such as a database, message broker, or cache, **MAY** retain state directly and is not **REQUIRED** to be stateless.
2. State held by such a component **MUST** be made durable and replicated in a manner proportionate to the criticality of the data it holds.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)
