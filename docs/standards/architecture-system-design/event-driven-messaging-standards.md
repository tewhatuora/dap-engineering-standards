# Event-Driven Messaging Standards

## Objective

Event-Driven Messaging Standards establishes the expectation that asynchronous events and messages exchanged between services are governed by an explicit contract, delivery guarantee, access control, and failure-handling behaviour, rather than treated as an implicit or best-effort mechanism. It directs engineering effort toward decoupled, reliable, and traceable asynchronous communication, so a producer and its consumers can evolve and scale independently without silent data loss, duplication, or unbounded coupling.

## Standards

### Choosing Event-Driven Communication Deliberately

These requirements govern when a service uses asynchronous, event-driven communication instead of a direct, synchronous call.

1. Whether a service communicates synchronously or through an asynchronous event or message must be an explicit design decision based on the coupling, latency, and consistency needs of the interaction.
2. Asynchronous, event-driven communication should be preferred over repeated point-to-point calls where a producer does not require an immediate response, or where the same event needs to reach more than one consumer.
3. Where more than one consumer needs the same event, each must receive its own independent copy through a fan-out mechanism, such as a separate topic subscription, rather than competing for a single shared copy.
4. A synchronous call should be preferred where a caller genuinely requires an immediate response before it can proceed.
5. A synchronous call must still apply the resilience patterns required of any dependency call, such as a bounded timeout and bounded, backoff-based retry.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Event & Message Schema Contracts

These requirements ensure every event or message is defined by an owned, documented schema before it is published.

1. Every event or message type must be defined by a documented, machine-readable schema, such as the [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/latest) or [JSON Schema](https://json-schema.org/specification), before it is published.
2. An event's envelope metadata, such as its type, source, and timestamp, should use a consistent, standard format, such as the [CloudEvents Specification](https://cloudevents.io/), so a consumer can process events from any producer uniformly.
3. A schema must be owned by the producer that publishes it; a consumer must not define or alter a schema it does not own.
4. A consumer must interpret an event or message using only its documented schema.
5. A schema must be defined and version-controlled as code, and kept current with the producer's actual published structure, so a consumer never needs to seek its guidance.
6. A payload too large for a channel's message size limit should be passed by reference to externally stored content, rather than embedded directly in the message.

#### References

- [Everything as Code](../../principles/everything-as-code.md)

### Backward-Compatible Schema Evolution & Versioning

These requirements keep a published schema's changes backward-compatible, so existing consumers are not broken.

1. A published event or message schema must not be changed in a way that breaks compatibility for its existing consumers; a breaking change must instead be introduced as a new schema version.
2. An additive, non-breaking change, such as a new optional field, should be preferred over introducing a new schema version.

#### References

- [Schema Design & Evolution](schema-design-evolution.md)

### Delivery Semantics & Ordering Guarantees

These requirements set the delivery and ordering guarantees a channel provides, so a consumer knows exactly what it can rely on.

1. A channel's delivery guarantee, such as at-least-once, at-most-once, or exactly-once delivery, must be explicitly defined and documented.
2. Whether a channel guarantees ordering, and at what scope, such as globally or only within a partition or key, must be explicitly defined and documented.
3. A FIFO or strictly-ordered channel should be used only where a consumer genuinely requires ordering, since it typically incurs additional overhead and lower throughput than an unordered channel.
4. On a strictly-ordered channel, dead-lettering a failed message to unblock its sequence must not occur without first checking whether a later message depends on its outcome, since a missing precondition can silently corrupt state.
5. A channel's retention period for an unconsumed message must be defined and monitored, so loss from a slow or unavailable consumer is a known, managed risk.
6. A consumer must not depend on an ordering or delivery guarantee stronger than what its channel actually provides.

### Reliable Event Publication

These requirements ensure an event is published reliably, without silent loss.

1. Publishing an event and committing the state change it represents must happen as a single atomic unit, such as through a transactional outbox, so neither can occur without the other.
2. A failure to publish an event must be logged and monitored, so it can be detected and remediated.

### Idempotent & Duplicate-Tolerant Consumers

These requirements require a consumer to handle a duplicate or redelivered message safely.

1. A consumer must process a duplicate or redelivered message safely, without producing inconsistent or duplicate side effects, since most channels provide at-least-once rather than exactly-once delivery.
2. Where a consumer's processing cannot be made idempotent, it must apply another safeguard, such as a processed-message record, to prevent a redelivered message being applied more than once.

#### References

- [Stateless First](../../principles/stateless-first.md)

### Dead-Letter & Poison Message Handling

These requirements define what happens to a message that repeatedly fails processing.

1. A message that repeatedly fails processing must be moved to a dead-letter mechanism after a bounded number of attempts, rather than retried indefinitely or discarded silently.
2. A message held in a dead-letter mechanism must be monitored and have a defined remediation path, such as redriving it once the underlying cause is resolved.

### Protecting Against Consumer Overload & Backpressure

These requirements protect a consumer from demand it cannot keep up with.

1. A consumer should be able to signal backpressure or scale to match demand, so growth in queue depth or consumer lag does not cause unbounded delay or resource exhaustion.
2. A high-volume or poison message source should be isolated from other consumers sharing the same channel, so it cannot exhaust capacity they need.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Message Broker & Platform Alignment

These requirements limit which messaging infrastructure a service may use.

1. A service must use the organisation's approved shared message broker or event-streaming platform, rather than an independently operated or introduced equivalent.
2. A messaging capability not met by the shared platform must be evaluated and approved through the organisation's defined governance process before it is adopted.

#### References

- [Platform Alignment](../../principles/platform-alignment.md)

### Channel Access Control & Payload Confidentiality

These requirements control who can access a channel and what data its payloads may expose.

1. Access to publish or subscribe to a channel must be authenticated and authorised by default; a channel may be deliberately designed for unauthenticated access where public consumption is the intended use case, but this must be an explicit design decision, not a fallback.
2. Access granted to a producer or consumer must be limited to the specific channels it requires.
3. A payload containing confidential or sensitive data must be encrypted in transit and at rest. A field not needed by any subscribed consumer should be omitted rather than left for a consumer to disregard.
4. A channel exposing data subject to a residency or sovereignty requirement must be able to restrict subscription by jurisdiction; such data must not be delivered outside an approved jurisdiction unless that cross-border flow is itself identified and approved.

#### References

- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Security by Design](../../principles/security-by-design.md)
- [Privacy by Design](../../principles/privacy-by-design.md)
- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Choreography vs Orchestration for Multi-Service Workflows

These requirements determine how a multi-service business process is coordinated.

1. A business process spanning multiple services must use a deliberately chosen coordination style, either decentralised choreography or a central orchestrator, not one that emerges by accident from how events are produced and consumed.
2. Where a multi-service workflow cannot be completed as a single transaction, its compensating action for partial failure must be defined alongside the workflow itself.

### Observability & Traceability of Event Flows

These requirements ensure an asynchronous event flow can be traced and monitored end-to-end.

1. A correlation identifier must be attached to an event or message when it is produced, and propagated by every consumer that acts on it, so a single business transaction can be traced end-to-end across asynchronous boundaries.
2. A channel's throughput, queue depth, consumer lag, and error rate must be observable, so degraded processing can be detected before it causes a material backlog or data loss.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Verifying Event Contracts Through Testing

These requirements verify that an event or message schema behaves as its contract describes.

1. An event or message schema must be verified through contract and integration testing.
2. A change to a published schema should be verified against a consumer-driven contract test before release, or tested against actual consumers where a shared integration environment makes that practical.

#### References

- [Integration Testing](../quality-engineering/integration-testing.md)
