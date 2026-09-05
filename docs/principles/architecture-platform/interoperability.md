# Interoperability

## Integration Needs

### Summary

A service's integration needs are identified before its design is complete.

### Reasoning

A design cannot account for interfaces and data exchanges that remain unidentified. Establishing which systems and consumers exchange data or functionality, what they exchange, and in which format makes these integration constraints part of the design.

### Implemented By These Standards

- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Interface Contracts

### Summary

A service exposes shared data and functionality through an explicit, documented, discoverable interface that remains current with its actual behaviour.

### Reasoning

An explicit interface contract allows consumers to integrate without depending on undocumented knowledge or the provider's implementation. Keeping the contract current makes its documented behaviour reliable, while discoverability allows prospective consumers to assess and use the interface without direct access to the provider's source code or engineering team.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)

## Open Standards

### Summary

Open, widely adopted standards are preferred wherever they meet a service's needs.

### Reasoning

Open, widely adopted protocols, data formats, and interface patterns give systems a shared basis for integration. Proprietary or organisation-specific alternatives introduce conventions that each consumer must understand separately.

A custom or proprietary option remains appropriate where no suitable open standard exists or where an available standard cannot meet a genuine, documented requirement.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Data Format and Meaning

### Summary

The format and meaning of exchanged data remain consistent and reconciled across systems.

### Reasoning

Agreed formats, units, and meanings allow a receiving system to interpret data without out-of-band clarification. Reconciling how systems represent the same real-world concept prevents differences in meaning or representation from remaining hidden across an integration.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Reusable Consumer-Independent Interfaces

### Summary

An interface remains independent of any single consumer's implementation and is reusable when multiple systems need the same data or capability.

### Reasoning

Coupling an interface to one consumer's internal implementation makes that consumer's design a constraint on every later integration. A consumer-independent contract allows additional consumers to use the interface without inheriting implementation details from the first integration.

Repeated bilateral integrations create separate contracts and paths for substantially the same exchange. Reusing a common interface or event stream reduces the number of distinct point-to-point integrations that must be maintained.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)

## Backward Compatibility

### Summary

A published interface or data contract preserves compatibility for existing consumers and follows a defined versioning approach when a breaking change is unavoidable.

### Reasoning

Existing consumers depend on a published interface's established contract. Preserving compatibility allows providers and consumers to evolve independently; when a break is unavoidable, deliberate versioning and a communicated notice period give consumers a defined transition path.

Additive changes are preferred because they extend an interface without forcing existing consumers to adopt a new version.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Contract & Integration Testing

### Summary

Integration points are verified through contract or integration testing.

### Reasoning

An integration point can fail even when each participating system works in isolation. Contract and integration testing verify that systems work together and that an implementation conforms to its published interface. Testing a change to a published interface against its actual consumers, or against contract tests representing them, identifies consumer incompatibilities before release.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
