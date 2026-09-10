---
last_edited: 2026-09-10
---

# Distributed Consistency

## Service-Local Transactions

### Summary

A transaction remains within one service's data store and one bounded unit of work.

### Reasoning

A transaction that spans services makes completion depend on the availability and transaction behaviour of every participant. It also exposes each service's internal data management to coordination that crosses its ownership boundary.

Keeping the transaction within one service allows participating services to fail, recover, and evolve independently. Bounding it to one unit of work also prevents database resources and locks from being held while an external system responds.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Eventual Cross-Service Consistency

### Summary

State shared across services converges through an explicit eventual-consistency pattern rather than a distributed transaction.

### Reasoning

An atomic transaction across independently owned data stores couples the availability and transaction model of every participating service. A failure or delay in one participant can then prevent the others from completing work within their own boundaries.

Eventual consistency allows each service to commit its state independently while coordinating the changes needed for the wider outcome. An explicit convergence pattern defines how incomplete work is detected, retried, or otherwise brought to a consistent state.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Atomic State and Event Publication

### Summary

A state change and the event or message that announces it are committed as one atomic outcome.

### Reasoning

When a state change and its announcement are committed separately, either operation can succeed while the other fails. Consumers may then act on an event for state that was not saved or remain unaware of a change they were expected to process.

Committing both as one outcome preserves the relationship between the service's state and the messages through which other services observe it. This gives consumers a reliable basis for updating their own state without requiring them to detect an unannounced change.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Explicit Workflow Coordination

### Summary

A workflow spanning multiple services explicitly uses choreography or orchestration as its coordination model.

### Reasoning

Coordination that emerges implicitly from calls and events leaves no clear account of how the workflow advances or who resolves an incomplete outcome. This makes failure handling difficult to understand because responsibility is spread across interactions that were not designed as one workflow.

Choosing choreography or orchestration makes the flow of work and its recovery responsibilities part of the design. Engineers can then identify how progress is observed, which component makes each decision, and how the workflow responds when a step does not complete.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Failure Compensation

### Summary

A workflow spanning multiple services defines how to compensate completed steps when a later step fails.

### Reasoning

Once an independently owned service commits a step, a transaction controlled by another service cannot simply roll it back. If a later step fails, the workflow can remain partly complete and leave business state that does not represent the intended outcome.

Defining compensation with the workflow establishes which effects must be reversed, offset, or otherwise resolved. It gives failure handling the same design attention as the successful path instead of leaving recovery to be invented after an incomplete outcome occurs.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
