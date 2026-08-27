# Interoperability by Design

## Summary

> Expose what a service shares through a documented interface, using open standards and preserving compatibility as it evolves.

## Principles

### Early Integration Needs

A service's integration needs, who exchanges what data and in what format, are identified before design is considered done.

1. Which other systems or consumers will exchange data or functionality, and in what format, **MUST** be identified during design.
2. A design **MUST NOT** be treated as finished while these integration needs remain unidentified.

### Documented Interface Contracts

A service exposes what it shares through an explicit, documented, discoverable interface, kept current with its actual behaviour.

1. A service **MUST** expose the data or functionality it shares with other systems through an explicit, documented interface, rather than requiring undocumented or implementation-specific knowledge to integrate with it.
2. An interface's documentation **MUST** be kept current with its actual behaviour, so a consuming system can rely on the documented contract without inspecting the provider's implementation.
3. A published interface **MUST** be discoverable by a prospective consumer without requiring direct access to the provider's source code or engineering team.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)
- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Open Standards Preference

An open, widely-adopted standard is preferred over a proprietary alternative wherever one genuinely fits.

1. Where an open, widely-adopted standard exists for a protocol, data format, or interface pattern relevant to a service's domain, such as HL7's Fast Healthcare Interoperability Resources (FHIR) standard for health data exchange, it **SHOULD** be preferred over a proprietary or organisation-specific alternative.
2. A proprietary or custom format or protocol **MAY** be used where no suitable open standard exists, or where an available open standard does not meet a genuine, documented requirement.

#### References

- [Health Data Interoperability](../standards/architecture-system-design/health-data-interoperability.md)

### Backward-Compatible Evolution of Interfaces

A published interface preserves compatibility for existing consumers, or versions deliberately where a break is unavoidable.

1. A change to a published interface or data contract **MUST** preserve compatibility for existing consumers, or follow a defined versioning approach where a breaking change is unavoidable.
2. A breaking change to a published interface **MUST** be communicated to its known consumers with a defined notice period before it takes effect.
3. An additive, non-breaking change **SHOULD** be preferred over introducing a new interface version.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Format & Semantic Consistency

A data format and its meaning stay consistent and reconciled across systems, never left to differ silently.

1. Data exchanged between systems **SHOULD** use a consistent, agreed format, unit, and meaning, so it can be correctly interpreted by a receiving system without out-of-band clarification.
2. Where the same real-world concept is represented in more than one system, its meaning and representation **SHOULD** be reconciled rather than left to differ silently between systems.

### Future Consumer Support

An interface is designed to reasonably support a future consumer too, not coupled to the first one it was built for.

1. An interface **SHOULD** be designed to reasonably support additional or future consumers, not only the specific system it was first built to integrate with.
2. An interface **MUST NOT** be coupled to a single consumer's internal implementation detail.

#### References

- [Health Data Interoperability](../standards/architecture-system-design/health-data-interoperability.md)

### Shared Integration Mechanisms

A shared, reusable integration mechanism is preferred over repeating the same bespoke, bilateral integration.

1. Where more than one system needs to exchange the same data or capability, a shared, reusable integration mechanism, such as a common API or event stream, **SHOULD** be preferred over repeated bespoke bilateral integrations.
2. The number of distinct point-to-point integrations addressing substantially the same need **SHOULD** be minimised across a team's portfolio.

### Contract & Integration Testing

An integration point is verified through contract or integration testing, never assumed to work correctly.

1. An integration point **MUST** be verified through contract or integration testing rather than assumed to function correctly.
2. A change to a published interface **SHOULD** be tested against its actual consumers, or against a contract test representing them, before release.

#### References

- [Integration Testing](../standards/quality-engineering/integration-testing.md)
