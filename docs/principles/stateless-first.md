# Stateless First

## Summary

> Any instance can serve any request, with necessary state held externally.

## Principles

### Stateless by Default for Services

> Any instance can handle any request, without depending on state a prior request left behind.

1. A service **MUST** be designed so that any instance can handle any incoming request, without depending on state retained in memory or on local disk from a prior request.
2. A request **MUST NOT** require routing to the specific instance that handled a prior related request in order to complete correctly.

### Externalising Required State

> State genuinely needed to fulfil a request lives in a purpose-built store, never in an instance's own memory or disk.

1. Where state is genuinely required to fulfil a request, it **MUST** be externalised to a purpose-built store, such as a database, cache, or object store, rather than held in instance memory or on local disk.
2. An instance **MUST** be able to be stopped, restarted, or replaced at any time without losing state required for correct operation.

### Session Affinity

> A service does not depend on session affinity as a substitute for externalising state, and still works correctly without it.

1. A service **SHOULD NOT** depend on session affinity or sticky sessions to route a client's repeat requests to the same instance as a substitute for externalising state.
2. Where session affinity is used for performance reasons, the service **MUST** still be able to serve the session correctly from a different instance if affinity is lost.

#### References

- [Progressive Delivery Strategies](../standards/delivery-release/progressive-delivery-strategies.md)

### Stateless Scaling & Resilience

> A service scales horizontally and replaces an instance at any time, without coordinating in-process state between them.

1. A service **MUST** be able to scale horizontally by adding or removing instances at any time, without requiring coordination of in-process state between them.
2. A new or replacement instance **MUST** be able to begin serving requests immediately, without recovering or synchronising state held only in another instance's memory.

#### References

- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)
- [Container Orchestration](../standards/platform-infrastructure/container-orchestration.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)

### Idempotency & Safe Retries

> A request handler is idempotent where feasible, or otherwise guarded so a retry cannot duplicate its side effects.

1. A request handler **SHOULD** be designed to be idempotent where feasible, so a retried request does not produce inconsistent or duplicate side effects.
2. Where an operation cannot be made idempotent, the service **MUST** provide another safeguard, such as a duplicate-request check, to prevent a retried request being applied more than once.

#### References

- [Event-Driven Messaging Standards](../standards/architecture-system-design/event-driven-messaging-standards.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)

### Stateful Components

> A genuinely stateful component, like a database or cache, holds state directly, made durable and replicated proportionately.

1. A component whose defined purpose is to hold state, such as a database, message broker, or cache, **MAY** retain state directly and is not required to be stateless.
2. State held by such a component **MUST** be made durable and replicated in a manner proportionate to the criticality of the data it holds.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)
