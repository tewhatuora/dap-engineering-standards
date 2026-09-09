---
last_edited: 2026-09-09
---

# Distributed Consistency

## Service-Local Transactions

### Summary

A transaction is confined to one service's data store and one bounded unit of work.

### Reasoning

A transaction spanning services couples their availability and internal data management. Keeping the transaction within one service preserves its ownership boundary and allows participating services to fail, recover, and evolve independently.

Bounding the transaction to one unit of work prevents external operations from holding database resources and locks while another system responds.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Eventual Cross-Service Consistency

### Summary

Consistency across services converges through an explicit eventual-consistency pattern rather than a distributed transaction.

### Reasoning

Independent services cannot rely on one atomic transaction across their data stores without coupling their availability and transaction models. Eventual consistency allows each service to commit within its own boundary while coordinating the state changes needed for the wider outcome.

Making the convergence pattern explicit establishes how incomplete work is detected and brought to a consistent state.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Atomic State and Event Publication

### Summary

A state change and the event or message announcing it are committed as one atomic outcome.

### Reasoning

Committing a state change separately from its announcement permits either operation to succeed alone. The resulting divergence can leave consumers acting on an event whose state does not exist or unaware of a state change they needed to process.

Treating both operations as one outcome preserves the relationship between the service's state and the events through which other services observe it.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Explicit Workflow Coordination

### Summary

A workflow spanning multiple services deliberately chooses choreography or orchestration as its coordination model.

### Reasoning

Coordination that emerges implicitly from calls and events leaves no clear account of which component advances the workflow or resolves an incomplete outcome. Choosing choreography or orchestration deliberately makes those responsibilities part of the design.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Failure Compensation

### Summary

A workflow spanning multiple services defines how completed steps are compensated when a later step fails.

### Reasoning

Completed steps cannot be rolled back through a transaction spanning independently owned services. Defining compensation with the workflow establishes how their effects are addressed when a later step prevents the workflow from completing.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
