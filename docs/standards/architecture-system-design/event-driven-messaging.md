---
last_edited: 2026-09-14
---

# Event-Driven Messaging

## Communication Style

### Summary

Synchronous or event-driven communication is selected according to an interaction's coupling, latency, and consistency needs.

### Standards

1. Whether a service communicates synchronously or through an asynchronous event or message **MUST** be an explicit design decision based on the coupling, latency, and consistency needs of the interaction. `std-arch-communication-style-01`
2. Asynchronous, event-driven communication **SHOULD** be preferred over repeated point-to-point calls where a producer does not require an immediate response, or where the same event needs to reach more than one consumer. `std-arch-communication-style-02`
3. Where more than one consumer needs the same event, each **MUST** receive an independent copy through a fan-out mechanism, such as a separate topic subscription. `std-arch-communication-style-03`
4. A synchronous call **SHOULD** be preferred where a caller genuinely requires an immediate response before it can proceed. `std-arch-communication-style-04`
5. A synchronous call **MUST** still apply the resilience patterns required of any dependency call, such as a bounded timeout and bounded, backoff-based retry. `std-arch-communication-style-05`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Workflow Coordination

### Summary

A multi-service workflow uses a deliberately chosen coordination style with failure compensation defined in advance.

### Standards

1. A business process spanning multiple services **MUST** deliberately use either decentralised choreography or a central orchestrator as its coordination style. `std-arch-workflow-coordination-01`
2. Where a multi-service workflow cannot be completed as a single transaction, its compensating action for partial failure **MUST** be defined alongside the workflow itself. `std-arch-workflow-coordination-02`

### Implements These Principles

- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Messaging Platform

### Summary

A service uses the organisation's approved shared messaging platform and obtains approval before adopting another messaging capability.

### Standards

1. A service **MUST** use the organisation's approved shared message broker or event-streaming platform. `std-arch-messaging-platform-01`
2. A messaging capability not met by the shared platform **MUST** be approved before it is adopted. `std-arch-messaging-platform-02`

### Implements These Principles

- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

## Schema Contracts

### Summary

Every event or message schema is documented, producer-owned, version-controlled, and kept current as a contract with its consumers, with oversized payloads referenced externally.

### Standards

1. Every event or message type **MUST** be defined by a documented, machine-readable schema, such as the [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/latest) or [JSON Schema](https://json-schema.org/specification), before it is published. `std-arch-schema-contracts-01`
2. An event's envelope metadata, such as its type, source, and timestamp, **SHOULD** use a consistent, standard format, such as the [CloudEvents Specification](https://cloudevents.io/), so a consumer can process events from any producer uniformly. `std-arch-schema-contracts-02`
3. A schema **SHOULD** be owned by the producer that publishes it. `std-arch-schema-contracts-03`
4. A consumer **MUST NOT** define or alter a schema it does not own. `std-arch-schema-contracts-04`
5. A consumer **MUST** interpret an event or message using only its documented schema. `std-arch-schema-contracts-05`
6. A schema **MUST** be defined and version-controlled as code. `std-arch-schema-contracts-06`
7. A schema **MUST** be kept current with the producer's actual published structure so a consumer does not need to seek guidance from the producer. `std-arch-schema-contracts-07`
8. A payload too large for a channel's message size limit **SHOULD** be passed by reference to externally stored content. `std-arch-schema-contracts-08`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Schema Evolution

### Summary

A published schema evolves additively, and a breaking change ships as a new schema version.

### Standards

1. A published event or message schema **MUST NOT** be changed in a way that breaks compatibility for its existing consumers. `std-arch-schema-evolution-01`
2. A breaking change **MUST** instead be introduced as a new schema version. `std-arch-schema-evolution-02`
3. An additive, non-breaking change, such as a new optional field, **SHOULD** be preferred over introducing a new schema version. `std-arch-schema-evolution-03`

### Related Standards

- [Schema Design & Evolution](schema-design-evolution.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Contract Testing

### Summary

An event schema is verified through contract or integration testing before a change reaches its consumers.

### Standards

1. An event or message schema **MUST** be verified through contract or integration testing. `std-arch-contract-testing-01`
2. A change to a published schema **SHOULD** be verified against a consumer-driven contract test before release, or tested against actual consumers where a shared integration environment makes that practical. `std-arch-contract-testing-02`

### Related Standards

- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Delivery & Ordering

### Summary

A channel's delivery, ordering, and retention guarantees are documented and monitored, and consumers rely only on the guarantees it provides.

### Standards

1. A channel's delivery guarantee, such as at-least-once, at-most-once, or exactly-once delivery, **MUST** be explicitly defined and documented. `std-arch-delivery-ordering-01`
2. Whether a channel guarantees ordering, and at what scope, such as globally or only within a partition or key, **MUST** be explicitly defined and documented. `std-arch-delivery-ordering-02`
3. A FIFO or strictly-ordered channel **SHOULD** be used only where a consumer genuinely requires ordering, since it typically incurs additional overhead and lower throughput than an unordered channel. `std-arch-delivery-ordering-03`
4. On a strictly-ordered channel, dead-lettering a failed message to unblock its sequence **MUST NOT** occur without first checking whether a later message depends on its outcome, since a missing precondition can silently corrupt state. `std-arch-delivery-ordering-04`
5. A channel's retention period for an unconsumed message **MUST** be defined and monitored, so loss from a slow or unavailable consumer is a known, managed risk. `std-arch-delivery-ordering-05`
6. A consumer **MUST NOT** depend on an ordering or delivery guarantee stronger than what its channel actually provides. `std-arch-delivery-ordering-06`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Reliable Event Publication

### Summary

An event's publication and the state change it represents commit atomically, and a failed publication is detectable.

### Standards

1. Publishing an event and committing the state change it represents **MUST** happen as a single atomic unit, such as through a transactional outbox, so neither can occur without the other. `std-arch-reliable-event-publication-01`
2. A failure to publish an event **MUST** be logged and monitored, so it can be detected and remediated. `std-arch-reliable-event-publication-02`

### Related Standards

- [Data Access & Transaction Management](../code-implementation/data-access-transaction-management.md)

### Implements These Principles

- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Idempotent Consumers

### Summary

A consumer processes a duplicate or redelivered message without producing an inconsistent or duplicate side effect.

### Standards

1. A consumer **MUST** process a duplicate or redelivered message safely, without producing inconsistent or duplicate side effects, since most channels provide at-least-once delivery. `std-arch-idempotent-consumers-01`
2. Where a consumer's processing cannot be made idempotent, it **MUST** apply another safeguard, such as a processed-message record, to prevent a redelivered message being applied more than once. `std-arch-idempotent-consumers-02`

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

## Dead-Letter Handling

### Summary

A message that repeatedly fails processing is dead-lettered after bounded attempts and monitored for remediation.

### Standards

1. A message that repeatedly fails processing **MUST** be moved to a dead-letter mechanism after a bounded number of attempts. `std-arch-dead-letter-handling-01`
2. A message held in a dead-letter mechanism **MUST** be monitored and have a defined remediation path, such as redriving it once the underlying cause is resolved. `std-arch-dead-letter-handling-02`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Consumer Overload

### Summary

A consumer handles overload through backpressure or scaling and isolates high-volume or poison-message sources.

### Standards

1. A consumer **SHOULD** be able to signal backpressure or scale to match demand, so growth in queue depth or consumer lag does not cause unbounded delay or resource exhaustion. `std-arch-consumer-overload-01`
2. A high-volume or poison message source **SHOULD** be isolated from other consumers sharing the same channel, so it cannot exhaust capacity they need. `std-arch-consumer-overload-02`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Access & Payload Security

### Summary

Channel access is authenticated and limited by default, and confidential payloads are minimised, encrypted, and restricted by jurisdiction.

### Standards

1. Access to publish or subscribe to a channel **MUST** be authenticated and authorised by default. `std-arch-access-payload-security-01`
2. A channel **MAY** be deliberately designed for unauthenticated access where public consumption is the intended use case. `std-arch-access-payload-security-02`
3. Unauthenticated access where public consumption is the intended use case **MUST** be an explicit design decision. `std-arch-access-payload-security-03`
4. Access granted to a producer or consumer **MUST** be limited to the specific channels it requires. `std-arch-access-payload-security-04`
5. A payload containing confidential or sensitive data **MUST** be encrypted in transit and at rest. `std-arch-access-payload-security-05`
6. A field not needed by any subscribed consumer **SHOULD** be omitted from the payload. `std-arch-access-payload-security-06`
7. A channel exposing data subject to a residency or sovereignty requirement **MUST** be able to restrict subscription by jurisdiction. `std-arch-access-payload-security-07`
8. Data subject to a residency or sovereignty requirement **MUST NOT** be delivered outside an approved jurisdiction unless that cross-border flow is itself identified and approved. `std-arch-access-payload-security-08`

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

1. A producer **SHOULD** attach trace context to each event or message. `std-arch-event-observability-01`
2. A consumer that produces another event or message in response **MUST** propagate the received trace context. `std-arch-event-observability-02`
3. A channel's applicable throughput, queue depth, consumer lag, and error rate **MUST** be observable, so degraded processing can be detected before it causes a material backlog or data loss. `std-arch-event-observability-03`

### Related Standards

- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
