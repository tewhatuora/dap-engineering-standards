# Event-Driven Messaging Standards

## Summary

> Every event has a defined contract and delivery guarantee; every consumer safely tolerates duplicates.

## Standards

### Synchronous vs Event-Driven Communication

These requirements set out how communication between two services is chosen as synchronous or event-driven, based on an interaction's coupling, latency, and consistency needs.

1. Whether a service communicates synchronously or through an asynchronous event or message **MUST** be an explicit design decision based on the coupling, latency, and consistency needs of the interaction.
2. Asynchronous, event-driven communication **SHOULD** be preferred over repeated point-to-point calls where a producer does not require an immediate response, or where the same event needs to reach more than one consumer.
3. Where more than one consumer needs the same event, each **MUST** receive its own independent copy through a fan-out mechanism, such as a separate topic subscription, rather than competing for a single shared copy.
4. A synchronous call **SHOULD** be preferred where a caller genuinely requires an immediate response before it can proceed.
5. A synchronous call **MUST** still apply the resilience patterns required of any dependency call, such as a bounded timeout and bounded, backoff-based retry.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Event & Message Schema Contracts

These requirements address how an event or message type's schema is defined, owned, and relied on as a contract between a producer and its consumers.

1. Every event or message type **MUST** be defined by a documented, machine-readable schema, such as the [AsyncAPI Specification](https://www.asyncapi.com/docs/reference/specification/latest) or [JSON Schema](https://json-schema.org/specification), before it is published.
2. An event's envelope metadata, such as its type, source, and timestamp, **SHOULD** use a consistent, standard format, such as the [CloudEvents Specification](https://cloudevents.io/), so a consumer can process events from any producer uniformly.
3. A schema **MUST** be owned by the producer that publishes it; a consumer **MUST NOT** define or alter a schema it does not own.
4. A consumer **MUST** interpret an event or message using only its documented schema.
5. A schema **MUST** be defined and version-controlled as code, and kept current with the producer's actual published structure, so a consumer never needs to seek its guidance.
6. A payload too large for a channel's message size limit **SHOULD** be passed by reference to externally stored content, rather than embedded directly in the message.

#### References

- [Everything as Code](../../principles/everything-as-code.md)

### Backward-Compatible Schema Evolution

These requirements cover how a published schema is evolved without breaking an existing consumer.

1. A published event or message schema **MUST NOT** be changed in a way that breaks compatibility for its existing consumers; a breaking change **MUST** instead be introduced as a new schema version.
2. An additive, non-breaking change, such as a new optional field, **SHOULD** be preferred over introducing a new schema version.

#### References

- [Schema Design & Evolution](schema-design-evolution.md)

### Delivery Semantics & Ordering Guarantees

These requirements describe how a channel's delivery and ordering guarantees are defined and documented, so a consumer knows exactly what to rely on.

1. A channel's delivery guarantee, such as at-least-once, at-most-once, or exactly-once delivery, **MUST** be explicitly defined and documented.
2. Whether a channel guarantees ordering, and at what scope, such as globally or only within a partition or key, **MUST** be explicitly defined and documented.
3. A FIFO or strictly-ordered channel **SHOULD** be used only where a consumer genuinely requires ordering, since it typically incurs additional overhead and lower throughput than an unordered channel.
4. On a strictly-ordered channel, dead-lettering a failed message to unblock its sequence **MUST NOT** occur without first checking whether a later message depends on its outcome, since a missing precondition can silently corrupt state.
5. A channel's retention period for an unconsumed message **MUST** be defined and monitored, so loss from a slow or unavailable consumer is a known, managed risk.
6. A consumer **MUST NOT** depend on an ordering or delivery guarantee stronger than what its channel actually provides.

### Reliable Event Publication

These requirements cover how an event is published reliably and without silent loss.

1. Publishing an event and committing the state change it represents **MUST** happen as a single atomic unit, such as through a transactional outbox, so neither can occur without the other.
2. A failure to publish an event **MUST** be logged and monitored, so it can be detected and remediated.

### Idempotent & Duplicate-Tolerant Consumers

These requirements describe how a duplicate or redelivered message is handled safely by a consumer.

1. A consumer **MUST** process a duplicate or redelivered message safely, without producing inconsistent or duplicate side effects, since most channels provide at-least-once rather than exactly-once delivery.
2. Where a consumer's processing cannot be made idempotent, it **MUST** apply another safeguard, such as a processed-message record, to prevent a redelivered message being applied more than once.

#### References

- [Stateless First](../../principles/stateless-first.md)

### Dead-Letter Handling

These requirements set out how a message that repeatedly fails processing is dead-lettered and remediated.

1. A message that repeatedly fails processing **MUST** be moved to a dead-letter mechanism after a bounded number of attempts, rather than retried indefinitely or discarded silently.
2. A message held in a dead-letter mechanism **MUST** be monitored and have a defined remediation path, such as redriving it once the underlying cause is resolved.

### Consumer Overload Protection

These requirements address how a consumer is protected from demand that exceeds its capacity.

1. A consumer **SHOULD** be able to signal backpressure or scale to match demand, so growth in queue depth or consumer lag does not cause unbounded delay or resource exhaustion.
2. A high-volume or poison message source **SHOULD** be isolated from other consumers sharing the same channel, so it cannot exhaust capacity they need.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Message Broker & Platform Alignment

These requirements set out which messaging infrastructure a service uses.

1. A service **MUST** use the organisation's approved shared message broker or event-streaming platform, rather than an independently operated or introduced equivalent.
2. A messaging capability not met by the shared platform **MUST** be evaluated and approved through the organisation's defined governance process before it is adopted.

#### References

- [Platform Alignment](../../principles/platform-alignment.md)

### Access Control & Payload Confidentiality

These requirements guide how a channel's access is controlled and how a payload's confidentiality is protected.

1. Access to publish or subscribe to a channel **MUST** be authenticated and authorised by default; a channel **MAY** be deliberately designed for unauthenticated access where public consumption is the intended use case, but this **MUST** be an explicit design decision, not a fallback.
2. Access granted to a producer or consumer **MUST** be limited to the specific channels it requires.
3. A payload containing confidential or sensitive data **MUST** be encrypted in transit and at rest. A field not needed by any subscribed consumer **SHOULD** be omitted rather than left for a consumer to disregard.
4. A channel exposing data subject to a residency or sovereignty requirement **MUST** be able to restrict subscription by jurisdiction; such data **MUST NOT** be delivered outside an approved jurisdiction unless that cross-border flow is itself identified and approved.

#### References

- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Security by Design](../../principles/security-by-design.md)
- [Privacy by Design](../../principles/privacy-by-design.md)
- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Choreography vs Orchestration for Multi-Service Workflows

These requirements describe how a multi-service business process is coordinated.

1. A business process spanning multiple services **MUST** use a deliberately chosen coordination style, either decentralised choreography or a central orchestrator, not one that emerges by accident from how events are produced and consumed.
2. Where a multi-service workflow cannot be completed as a single transaction, its compensating action for partial failure **MUST** be defined alongside the workflow itself.

### Observability & Traceability of Event Flows

These requirements cover how an asynchronous event flow is traced and monitored end-to-end.

1. A correlation identifier **MUST** be attached to an event or message when it is produced, and propagated by every consumer that acts on it, so a single business transaction can be traced end-to-end across asynchronous boundaries.
2. A channel's throughput, queue depth, consumer lag, and error rate **MUST** be observable, so degraded processing can be detected before it causes a material backlog or data loss.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Event Contract Verification

These requirements guide how an event or message schema is verified against its contract through testing.

1. An event or message schema **MUST** be verified through contract and integration testing.
2. A change to a published schema **SHOULD** be verified against a consumer-driven contract test before release, or tested against actual consumers where a shared integration environment makes that practical.

#### References

- [Integration Testing](../quality-engineering/integration-testing.md)
