---
last_edited: 2026-10-21
---

# Interoperability

## Integration Requirements

### Summary

Engineers identify a service's integration needs while they can still adapt its design to meet them.

### Reasoning

A design cannot account for interfaces and data exchanges that engineers have not identified. Discovering them after implementation can reveal assumptions about ownership, data, latency, or availability that the architecture cannot support without rework.

Identifying which systems and consumers exchange data or functionality, what they exchange, and the required format makes these constraints part of the design. Engineers can then define service boundaries and contracts that account for ownership, data, latency, and availability before consumers depend on the implementation.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Communication Mode Selection

### Summary

An integration uses synchronous or asynchronous communication according to its coupling, latency, and consistency needs.

### Reasoning

The communication mode determines whether a caller waits for an immediate result and whether both participants need to be available at the same time. It also affects when state changes become visible and how services detect and recover from failures.

Choosing the mode during design makes these consequences clear before implementation fixes them in place. Synchronous communication supports work that needs an immediate response. Asynchronous communication reduces the need for participants to be available at the same time when work can proceed independently.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Interface Contracts

### Summary

A service shares data and functionality through an explicit interface whose documentation is easy to find and kept up to date with its behaviour.

### Reasoning

An explicit interface contract tells consumers what data, behaviour, and failure conditions to expect without relying on undocumented knowledge or the provider's implementation. The provider can then change its internals while preserving the behaviour consumers depend on.

The contract is useful only when it matches the interface's actual behaviour and people can find it. Up-to-date, accessible documentation lets consumers assess and use the interface without direct access to the provider's source code or engineering team.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Delivery and Ordering Guarantees

### Summary

An asynchronous consumer relies only on delivery and ordering guarantees that its channel explicitly provides.

### Reasoning

Delivery and ordering behaviour determines whether a consumer may receive a message more than once, miss it, or receive messages out of order. A consumer that assumes stronger guarantees than the channel provides can produce incorrect state even when the channel works as designed.

Explicit guarantees let consumers handle duplicates, ordering, and recovery from missed processing reliably. They also make clear which safeguards the consumer needs, so correct behaviour does not depend on undocumented channel behaviour.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Open Standards

### Summary

Open, widely adopted standards are preferred wherever they meet a service's needs.

### Reasoning

Open, widely adopted protocols, data formats, and interface patterns give providers and consumers a shared basis for integration. Existing knowledge and compatible implementations reduce the work needed to interpret and support each new connection.

Proprietary or organisation-specific alternatives require consumers to learn and maintain separate conventions and can limit future integration choices. They remain justified when no open standard supports the required behaviour. An open standard that cannot meet the service's needs does not provide a suitable contract.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Data Format and Meaning

### Summary

Systems use consistent formats and meanings for exchanged data and reconcile any differences.

### Reasoning

Matching field names or data types does not mean two systems interpret information in the same way. Differences in units, identifiers, allowed values, or the meaning of a concept can pass through an interface and produce an incorrect result in the receiving system.

Agreed formats and meanings let the receiver interpret data without asking for clarification. Reconciling different representations makes the required transformation clear, so differences in meaning do not stay hidden in the integration.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Reusable Interfaces for Multiple Consumers

### Summary

An interface is independent of any one consumer's implementation and can be reused by systems that need the same data or capability.

### Reasoning

Designing an interface around one consumer's internal implementation makes those details part of the provider's contract. Later consumers have to adopt the same assumptions or request another interface for essentially the same data or capability.

A contract independent of any one consumer describes the shared need rather than one implementation. Other systems can then integrate without depending on unrelated details, and the provider avoids maintaining separate point-to-point paths for the same exchange.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)

## Backward Compatibility

### Summary

A published interface or data contract stays compatible with existing consumers, with a defined versioning approach for unavoidable breaking changes.

### Reasoning

Existing consumers build and release against a published interface's established contract. An unexpected breaking change can cause them to fail or force them to coordinate releases with the provider.

Preserving compatibility lets providers and consumers evolve independently. Additive changes avoid forcing consumers to adopt a new version immediately. When a breaking change is unavoidable, planned versioning and notice give consumers a clear path and enough time to move to the new contract.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)

## Contract and Integration Testing

### Summary

Contract or integration testing verifies that integration points work as defined.

### Reasoning

An integration can fail even when each system works correctly on its own. The systems may make different assumptions about data, behaviour, or failure handling. Contract testing checks that an implementation follows its published interface, while integration testing checks that the systems work together.

Testing a change against actual consumers or contracts that represent them reveals incompatible assumptions before release. Providers then have evidence that the change preserves the behaviour consumers rely on. An implementation working correctly on its own does not prove that the integration still works.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
