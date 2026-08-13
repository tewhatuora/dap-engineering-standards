# Interoperability by Design

## Objective

This principle establishes the expectation that systems and services are designed to exchange data and functionality with other systems predictably and consistently. It keeps an interface well-defined and compatible with open standards, so systems can be integrated, extended, and evolved without accumulating brittle or one-off integrations.

## Principles

### Early Integration Needs

These principles set out how a service's integration needs are identified during design.

1. Which other systems or consumers will exchange data or functionality, and in what format, must be identified during design.
2. A design must not be treated as finished while these integration needs remain unidentified.

### Documented Interface Contracts

These principles describe how a service exposes what it shares with other systems through an explicit, documented, discoverable interface.

1. A service must expose the data or functionality it shares with other systems through an explicit, documented interface, rather than requiring undocumented or implementation-specific knowledge to integrate with it.
2. An interface's documentation must be kept current with its actual behaviour, so a consuming system can rely on the documented contract without inspecting the provider's implementation.
3. A published interface must be discoverable by a prospective consumer without requiring direct access to the provider's source code or engineering team.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)
- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Open Standards Preference

These principles address how an open, widely-adopted standard is preferred over a proprietary alternative, where one exists.

1. Where an open, widely-adopted standard exists for a protocol, data format, or interface pattern relevant to a service's domain, such as HL7's Fast Healthcare Interoperability Resources (FHIR) standard for health data exchange, it should be preferred over a proprietary or organisation-specific alternative.
2. A proprietary or custom format or protocol may be used where no suitable open standard exists, or where an available open standard does not meet a genuine, documented requirement.

#### References

- [Health Data Interoperability](../standards/architecture-system-design/health-data-interoperability.md)

### Backward-Compatible Evolution of Interfaces

These principles set out how compatibility for existing consumers is preserved as a published interface changes.

1. A change to a published interface or data contract must preserve compatibility for existing consumers, or follow a defined versioning approach where a breaking change is unavoidable.
2. A breaking change to a published interface must be communicated to its known consumers with a defined notice period before it takes effect.
3. An additive, non-breaking change should be preferred over introducing a new interface version.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Format & Semantic Consistency

These principles cover how a data format and its meaning remain consistent and reconciled across systems.

1. Data exchanged between systems should use a consistent, agreed format, unit, and meaning, so it can be correctly interpreted by a receiving system without out-of-band clarification.
2. Where the same real-world concept is represented in more than one system, its meaning and representation should be reconciled rather than left to differ silently between systems.

### Future Consumer Support

These principles describe how an interface is designed to support future consumers, not only the one it was first built for.

1. An interface should be designed to reasonably support additional or future consumers, not only the specific system it was first built to integrate with.
2. An interface must not be coupled to a single consumer's internal implementation detail.

### Shared Integration Mechanisms

These principles address how a shared, reusable integration mechanism is preferred over repeated bespoke integrations.

1. Where more than one system needs to exchange the same data or capability, a shared, reusable integration mechanism, such as a common API or event stream, should be preferred over repeated bespoke bilateral integrations.
2. The number of distinct point-to-point integrations addressing substantially the same need should be minimised across a team's portfolio.

### Contract & Integration Testing

These principles guide how an integration point is verified through contract or integration testing rather than assumed to work.

1. An integration point must be verified through contract or integration testing rather than assumed to function correctly.
2. A change to a published interface should be tested against its actual consumers, or against a contract test representing them, before release.

#### References

- [Integration Testing](../standards/quality-engineering/integration-testing.md)
