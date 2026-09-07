# Event-Driven Messaging

Every event has a defined contract and delivery guarantee; every consumer safely tolerates duplicates.

## Communication Style

### Summary

Synchronous or event-driven communication is selected according to an interaction's coupling, latency, and consistency needs.

### Standards

1. `std-arch-communication-style-01` Whether a service communicates synchronously or through an asynchronous event or message **MUST** be an explicit design decision based on the coupling, latency, and consistency needs of the interaction.
2. `std-arch-communication-style-02` Asynchronous, event-driven communication **SHOULD** be preferred over repeated point-to-point calls where a producer does not require an immediate response, or where the same event needs to reach more than one consumer.
3. `std-arch-communication-style-03` Where more than one consumer needs the same event, each **MUST** receive an independent copy through a fan-out mechanism, such as a separate topic subscription.
4. `std-arch-communication-style-04` A synchronous call **SHOULD** be preferred where a caller genuinely requires an immediate response before it can proceed.
5. `std-arch-communication-style-05` A synchronous call **MUST** still apply the resilience patterns required of any dependency call, such as a bounded timeout and bounded, backoff-based retry.

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Workflow Coordination

### Summary

A multi-service workflow uses a deliberately chosen coordination style with failure compensation defined in advance.

### Standards

1. `std-arch-workflow-coordination-01` A business process spanning multiple services **MUST** deliberately use either decentralised choreography or a central orchestrator as its coordination style.
2. `std-arch-workflow-coordination-02` Where a multi-service workflow cannot be completed as a single transaction, its compensating action for partial failure **MUST** be defined alongside the workflow itself.

### Implements These Principles

- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Messaging Platform

### Summary

A service uses the organisation's approved shared messaging platform and obtains approval before adopting another messaging capability.

### Standards

1. `std-arch-messaging-platform-01` A service **MUST** use the organisation's approved shared message broker or event-streaming platform.
2. `std-arch-messaging-platform-02` A messaging capability not met by the shared platform **MUST** be approved before it is adopted.

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

## Schema Contracts

### Summary

Every event or message schema is documented, producer-owned, version-controlled, and kept current as a contract with its consumers, with oversized payloads referenced externally.

### Standards

1. `std-arch-schema-contracts-01` Every event or message type **MUST** be defined by a documented, machine-readable schema, such as the [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/latest) or [JSON Schema](https://json-schema.org/specification), before it is published.
2. `std-arch-schema-contracts-02` An event's envelope metadata, such as its type, source, and timestamp, **SHOULD** use a consistent, standard format, such as the [CloudEvents Specification](https://cloudevents.io/), so a consumer can process events from any producer uniformly.
3. `std-arch-schema-contracts-03` A schema **SHOULD** be owned by the producer that publishes it.
4. `std-arch-schema-contracts-04` A consumer **MUST NOT** define or alter a schema it does not own.
5. `std-arch-schema-contracts-05` A consumer **MUST** interpret an event or message using only its documented schema.
6. `std-arch-schema-contracts-06` A schema **MUST** be defined and version-controlled as code.
7. `std-arch-schema-contracts-07` A schema **MUST** be kept current with the producer's actual published structure so a consumer does not need to seek guidance from the producer.
8. `std-arch-schema-contracts-08` A payload too large for a channel's message size limit **SHOULD** be passed by reference to externally stored content.

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Schema Evolution

### Summary

A published schema evolves additively, and a breaking change ships as a new schema version.

### Standards

1. `std-arch-schema-evolution-01` A published event or message schema **MUST NOT** be changed in a way that breaks compatibility for its existing consumers.
2. `std-arch-schema-evolution-02` A breaking change **MUST** instead be introduced as a new schema version.
3. `std-arch-schema-evolution-03` An additive, non-breaking change, such as a new optional field, **SHOULD** be preferred over introducing a new schema version.

### Related Standards

- [Schema Design & Evolution](schema-design-evolution.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Contract Testing

### Summary

An event schema is verified through contract or integration testing before a change reaches its consumers.

### Standards

1. `std-arch-contract-testing-01` An event or message schema **MUST** be verified through contract or integration testing.
2. `std-arch-contract-testing-02` A change to a published schema **SHOULD** be verified against a consumer-driven contract test before release, or tested against actual consumers where a shared integration environment makes that practical.

### Related Standards

- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Delivery & Ordering

### Summary

A channel's delivery, ordering, and retention guarantees are documented and monitored, and consumers rely only on the guarantees it provides.

### Standards

1. `std-arch-delivery-ordering-01` A channel's delivery guarantee, such as at-least-once, at-most-once, or exactly-once delivery, **MUST** be explicitly defined and documented.
2. `std-arch-delivery-ordering-02` Whether a channel guarantees ordering, and at what scope, such as globally or only within a partition or key, **MUST** be explicitly defined and documented.
3. `std-arch-delivery-ordering-03` A FIFO or strictly-ordered channel **SHOULD** be used only where a consumer genuinely requires ordering, since it typically incurs additional overhead and lower throughput than an unordered channel.
4. `std-arch-delivery-ordering-04` On a strictly-ordered channel, dead-lettering a failed message to unblock its sequence **MUST NOT** occur without first checking whether a later message depends on its outcome, since a missing precondition can silently corrupt state.
5. `std-arch-delivery-ordering-05` A channel's retention period for an unconsumed message **MUST** be defined and monitored, so loss from a slow or unavailable consumer is a known, managed risk.
6. `std-arch-delivery-ordering-06` A consumer **MUST NOT** depend on an ordering or delivery guarantee stronger than what its channel actually provides.

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Reliable Event Publication

### Summary

An event's publication and the state change it represents commit atomically, and a failed publication is detectable.

### Standards

1. `std-arch-reliable-event-publication-01` Publishing an event and committing the state change it represents **MUST** happen as a single atomic unit, such as through a transactional outbox, so neither can occur without the other.
2. `std-arch-reliable-event-publication-02` A failure to publish an event **MUST** be logged and monitored, so it can be detected and remediated.

### Related Standards

- [Data Access & Transaction Management](../code-implementation/data-access-transaction-management.md)

### Implements These Principles

- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Idempotent Consumers

### Summary

A consumer processes a duplicate or redelivered message without producing an inconsistent or duplicate side effect.

### Standards

1. `std-arch-idempotent-consumers-01` A consumer **MUST** process a duplicate or redelivered message safely, without producing inconsistent or duplicate side effects, since most channels provide at-least-once delivery.
2. `std-arch-idempotent-consumers-02` Where a consumer's processing cannot be made idempotent, it **MUST** apply another safeguard, such as a processed-message record, to prevent a redelivered message being applied more than once.

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

## Dead-Letter Handling

### Summary

A message that repeatedly fails processing is dead-lettered after bounded attempts and monitored for remediation.

### Standards

1. `std-arch-dead-letter-handling-01` A message that repeatedly fails processing **MUST** be moved to a dead-letter mechanism after a bounded number of attempts.
2. `std-arch-dead-letter-handling-02` A message held in a dead-letter mechanism **MUST** be monitored and have a defined remediation path, such as redriving it once the underlying cause is resolved.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Consumer Overload

### Summary

A consumer handles overload through backpressure or scaling and isolates high-volume or poison-message sources.

### Standards

1. `std-arch-consumer-overload-01` A consumer **SHOULD** be able to signal backpressure or scale to match demand, so growth in queue depth or consumer lag does not cause unbounded delay or resource exhaustion.
2. `std-arch-consumer-overload-02` A high-volume or poison message source **SHOULD** be isolated from other consumers sharing the same channel, so it cannot exhaust capacity they need.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Access & Payload Security

### Summary

Channel access is authenticated and limited by default, and confidential payloads are minimised, encrypted, and restricted by jurisdiction.

### Standards

1. `std-arch-access-payload-security-01` Access to publish or subscribe to a channel **MUST** be authenticated and authorised by default.
2. `std-arch-access-payload-security-02` A channel **MAY** be deliberately designed for unauthenticated access where public consumption is the intended use case.
3. `std-arch-access-payload-security-03` Unauthenticated access where public consumption is the intended use case **MUST** be an explicit design decision.
4. `std-arch-access-payload-security-04` Access granted to a producer or consumer **MUST** be limited to the specific channels it requires.
5. `std-arch-access-payload-security-05` A payload containing confidential or sensitive data **MUST** be encrypted in transit and at rest.
6. `std-arch-access-payload-security-06` A field not needed by any subscribed consumer **SHOULD** be omitted from the payload.
7. `std-arch-access-payload-security-07` A channel exposing data subject to a residency or sovereignty requirement **MUST** be able to restrict subscription by jurisdiction.
8. `std-arch-access-payload-security-08` Data subject to a residency or sovereignty requirement **MUST NOT** be delivered outside an approved jurisdiction unless that cross-border flow is itself identified and approved.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)

## Event Observability

### Summary

Event flows carry trace context end-to-end, and channel health is observable.

### Standards

1. `std-arch-event-observability-01` A producer **SHOULD** attach trace context to each event or message.
2. `std-arch-event-observability-02` A consumer that produces another event or message in response **MUST** propagate the received trace context.
3. `std-arch-event-observability-03` A channel's applicable throughput, queue depth, consumer lag, and error rate **MUST** be observable, so degraded processing can be detected before it causes a material backlog or data loss.

### Related Standards

- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
