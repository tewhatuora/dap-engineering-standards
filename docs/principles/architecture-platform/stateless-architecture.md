---
last_edited: 2026-09-09
---

# Stateless Architecture

## Instance-Independent Request Handling

### Summary

Any instance can handle any request without depending on state left by a prior request, a routing affinity, or coordination with another instance.

### Reasoning

Depending on state held in an instance's memory or local disk couples correct request handling to that instance's lifetime and to routing decisions. Instance-independent request handling allows traffic to move between instances without preserving the history of which instance served an earlier request.

Instance memory and local disk are unavailable to other instances and can disappear when an instance stops. An external state store keeps required state available independently of the instance serving a request and provides durability and consistency suited to that state.

Correct behaviour without session affinity allows capacity to change and replacement instances to serve requests without first recovering or synchronising another instance's state. Affinity can remain a performance optimisation, but it does not substitute for externalising required state.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)

## Safe Retries

### Summary

A request handler is idempotent where feasible or otherwise prevents a retry from duplicating its side effects.

### Reasoning

A retry can repeat side effects when the outcome of an earlier attempt is uncertain. Idempotency or an equivalent duplicate safeguard allows the operation to be attempted again without applying its effects more than once.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
