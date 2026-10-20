---
last_edited: 2026-10-21
---

# Stateless Architecture

## Request Handling by Any Instance

### Summary

Any instance can handle any request without relying on state left by an earlier request, routing to a specific instance, or coordination with another instance.

### Reasoning

When state is held only in an instance's memory or local disk, later related requests need to reach that same instance to be handled correctly. If the instance stops or traffic moves elsewhere, the next instance lacks the state needed to continue.

An external store keeps required state available regardless of which instance handles a request, with durability and consistency suited to that state. Traffic can then move between instances, and replacement instances can handle requests without recovering another instance's local history.

When correct behaviour does not depend on session affinity, capacity can change without coordinating state held by individual instances. Affinity may still improve performance, but state needed for correct behaviour still belongs in an external store.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)

## Safe Retries

### Summary

A request handler uses idempotency or an equivalent safeguard to prevent retries from duplicating its effects.

### Reasoning

A caller may retry after receiving no response, even when the earlier attempt succeeded. Without a safeguard, the repeated request can apply the same change more than once and leave the system in an unintended state.

Idempotency makes repeated attempts produce the same outcome as one successful attempt. Where an operation cannot be idempotent, an equivalent safeguard prevents duplicate effects so retries remain safe.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
