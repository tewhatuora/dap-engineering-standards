---
last_edited: 2026-10-21
---

# Distributed Consistency

## Transactions Within a Service

### Summary

A transaction remains within one service's data store and one bounded unit of work.

### Reasoning

A transaction that spans services can complete only if every participant is available and handles the transaction as expected. It also requires services to coordinate how they manage data that they own independently.

Keeping transactions within each service lets services fail, recover, and evolve independently. Limiting a transaction to one unit of work also avoids holding database resources and locks while waiting for an external system to respond.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Eventual Consistency Across Services

### Summary

State shared across services reaches a consistent state through an explicit eventual-consistency pattern rather than a distributed transaction.

### Reasoning

An atomic transaction across independently owned data stores makes services depend on each other's availability and transaction models. A failure or delay in one service can then prevent the others from completing their own work.

Eventual consistency lets each service commit its own state while coordinating changes with other services to achieve the overall outcome. The chosen pattern defines how services detect incomplete work, retry it, or otherwise bring it to a consistent state.

### Implemented By These Standards

- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Atomic State and Event Publication

### Summary

A state change and the event or message that announces it are committed as one atomic outcome.

### Reasoning

When a state change and its announcement are committed separately, one can succeed while the other fails. Consumers may then act on an event for state that was never saved, or miss a change they were expected to process.

Committing both as one outcome keeps the service's state consistent with the messages that tell other services about it. Consumers can then update their own state reliably without needing to detect changes that were never announced.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Explicit Workflow Coordination

### Summary

A workflow spanning multiple services has an explicit coordination model based on choreography or orchestration.

### Reasoning

When a workflow grows out of calls and events without an explicit design, it is unclear how work moves forward or who handles incomplete work. Failure handling becomes hard to understand because responsibility is spread across interactions that were not designed as one workflow.

Choosing choreography or orchestration makes the flow of work and responsibility for recovery part of the design. Engineers can then see how progress is tracked, which component makes each decision, and what happens when a step does not complete.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Failure Compensation

### Summary

A workflow spanning multiple services defines how to compensate for completed steps when a later step fails.

### Reasoning

Once a service commits a step in its own data store, another service's transaction cannot simply roll it back. If a later step fails, the workflow can remain partly complete, leaving business state that does not match the intended outcome.

Designing compensation alongside the workflow makes clear which effects need to be reversed, offset, or otherwise resolved. Failure handling then receives the same attention as the successful path, rather than being worked out only after a workflow fails to complete.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
