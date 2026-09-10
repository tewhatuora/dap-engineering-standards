---
last_edited: 2026-09-10
---

# Interoperability

## Integration Needs

### Summary

A service's integration needs are identified while its design can still respond to them.

### Reasoning

A design cannot account for interfaces and data exchanges that have not been identified. Discovering them after implementation can expose assumptions about ownership, data, latency, or availability that the chosen architecture cannot support without rework.

Establishing which systems and consumers exchange data or functionality, what they exchange, and the required format makes those constraints part of the design. The service can then define suitable boundaries and contracts before consumers depend on its implementation.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Communication Mode Selection

### Summary

An integration uses synchronous or asynchronous communication according to its coupling, latency, and consistency needs.

### Reasoning

Communication mode determines whether a caller waits for an immediate result and whether work depends on both participants being available at the same time. It also affects when state changes become visible and how failures are detected and recovered.

Choosing the mode during design makes these consequences explicit before they become an accidental property of the implementation. Synchronous communication supports work that requires an immediate response, while asynchronous communication reduces temporal coupling when work can proceed independently.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Interface Contracts

### Summary

A service exposes shared data and functionality through an explicit, documented, and discoverable interface that remains current with its behaviour.

### Reasoning

An explicit interface contract tells consumers what data, behaviour, and failure conditions they can rely on without depending on undocumented knowledge or the provider's implementation. This allows the provider to change its internals while preserving the behaviour on which consumers depend.

The contract is useful only when it reflects the interface's actual behaviour and can be found by the people who need it. Current, discoverable documentation allows consumers to assess and use the interface without direct access to the provider's source code or engineering team.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Delivery and Ordering Guarantees

### Summary

An asynchronous consumer relies only on delivery and ordering guarantees explicitly provided by its channel.

### Reasoning

Delivery and ordering behaviour determines whether a consumer may receive a message more than once, miss it, or observe messages in a different sequence. If the consumer assumes stronger behaviour than the channel provides, it can produce incorrect state even while the channel operates as designed.

Explicit guarantees give consumers a reliable basis for duplicate handling, ordering, and recovery from missed processing. They also make clear which safeguards belong in the consumer instead of leaving correctness dependent on undocumented channel behaviour.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Open Standards

### Summary

Open, widely adopted standards are preferred wherever they meet a service's needs.

### Reasoning

Open, widely adopted protocols, data formats, and interface patterns give providers and consumers a shared basis for integration. Existing knowledge and compatible implementations reduce the amount of custom interpretation and support needed for each new connection.

Proprietary or organisation-specific alternatives require consumers to learn and maintain separate conventions and can restrict future integration choices. They remain appropriate when no open standard meets a genuine requirement, because interoperability does not justify adopting a contract that cannot support the needed behaviour.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Data Format and Meaning

### Summary

The format and meaning of exchanged data are consistent and reconciled across systems.

### Reasoning

Matching field names or data types does not establish that two systems interpret the information in the same way. Differences in units, identifiers, allowed values, or the meaning of a concept can pass through an interface while producing an incorrect result in the receiving system.

Agreed formats and meanings give the receiver enough information to interpret data without separate clarification. Reconciling different representations also makes the required transformation explicit instead of allowing a semantic difference to remain hidden within the integration.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Reusable Consumer-Independent Interfaces

### Summary

An interface remains independent of any one consumer's implementation and is reusable when several systems need the same data or capability.

### Reasoning

An interface designed around one consumer's internal implementation makes those details part of the provider's contract. Later consumers must either adopt the same assumptions or require another interface for substantially the same data or capability.

A consumer-independent contract describes the shared need rather than one implementation. This allows additional systems to integrate without inheriting unrelated details and avoids maintaining separate point-to-point paths for the same exchange.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)

## Backward Compatibility

### Summary

A published interface or data contract remains compatible with existing consumers and uses a defined versioning approach when a breaking change is unavoidable.

### Reasoning

Existing consumers build and release against the established contract of a published interface. An unexpected breaking change can cause those consumers to fail or force them to coordinate their release with the provider.

Preserving compatibility allows providers and consumers to evolve independently, while additive changes avoid forcing immediate version adoption. When a breaking change is unavoidable, deliberate versioning and notice give consumers a defined path and enough time to move to the new contract.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)

## Contract & Integration Testing

### Summary

Contract or integration testing verifies that integration points work as defined.

### Reasoning

An integration can fail even when each participating system works correctly in isolation because their assumptions about data, behaviour, or failure handling may differ. Contract testing verifies that an implementation conforms to its published interface, while integration testing shows whether the participating systems work together.

Testing a change against actual consumers or contracts that represent them exposes incompatible assumptions before release. This gives providers evidence that the change preserves the behaviour consumers rely on rather than treating a valid standalone implementation as proof that the integration remains sound.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
