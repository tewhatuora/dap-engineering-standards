---
last_edited: 2026-09-10
---

# Stateless Architecture

## Instance-Independent Request Handling

### Summary

Any instance can handle any request without relying on state left by an earlier request, routing affinity, or coordination with another instance.

### Reasoning

State held only in an instance's memory or local disk makes correct request handling depend on that instance remaining available and receiving later related requests. When the instance stops or traffic moves elsewhere, the next instance does not have the state needed to continue the interaction.

Keeping required state in an external store makes it available independently of the instance serving a request and provides durability and consistency suited to that state. Traffic can then move between instances, and replacement instances can begin serving requests without recovering another instance's local history.

Correctness that does not depend on session affinity also allows capacity to change without coordinating instance-local state. Affinity may still improve performance, but it cannot replace externalising state that the service requires for correct behaviour.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)

## Safe Retries

### Summary

A request handler is idempotent where feasible or otherwise prevents retries from duplicating its effects.

### Reasoning

A caller may retry when it does not receive a response, even though the earlier attempt completed successfully. Without a safeguard, the repeated request can apply the same change more than once and leave the system in an unintended state.

Idempotency makes repeated attempts produce the same outcome as one successful attempt. Where the operation cannot be idempotent, an equivalent duplicate safeguard preserves safe retry behaviour without repeating its effects.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
