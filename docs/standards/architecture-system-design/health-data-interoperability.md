# Health Data Interoperability

## Objective

Health Data Interoperability establishes the expectation that health data is exchanged using recognised, standards-based formats and terminology, so clinical and administrative information can move safely and consistently between systems across the health sector. It directs engineering effort toward standards-based data exchange, consistent clinical terminology, and verified conformance, reducing the risk of misinterpreted or unusable data at the point it is exchanged.

Developers and vendors implementing health data exchange should also consult the [Health New Zealand | Te Whatu Ora API Standards](https://apistandards.digital.health.nz) for detailed, protocol-specific design and implementation guidance alongside the requirements set out here.

Clinical terminology and code sets should be sourced from the [NZ Health Terminology Service (NZHTS)](https://www.healthnz.govt.nz/health-professionals/guidance-standards/topic/data-and-standards/health-information-standards/nz-health-terminology-service-nzhts), the organisation's authoritative source for this content.

## Standards

### Adoption of Recognised Health Data Exchange Standards

These requirements govern which health data exchange standards and implementation guides an organisation adopts.

1. Health data exchange should use [HL7](https://www.hl7.org/)'s [Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/) standard where an appropriate FHIR resource exists, in preference to a proprietary or organisation-specific format.
2. An existing [HL7 Version 2 (V2)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) messaging integration may continue to operate; FHIR should be used for new development.
3. A new Implementation Guide should extend or build on an existing published Implementation Guide rather than duplicating or undermining work it already covers.
4. A new Implementation Guide must include documentation sufficient for a prospective consumer to understand its purpose, scope, and the resource types and operations it supports, without needing to seek guidance from the team that published it.
5. A published FHIR API version must remain supported for at least three years from the introduction of a replacement version, with at least one year's notice before it is withdrawn from support.

#### References

[Interoperability by Design](../../principles/interoperability-by-design.md)\
[API Design & Standards](api-design-standards.md)\
[Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)

### Standardised Clinical Terminology & Coding Systems

These requirements govern how clinical data is represented, so its meaning stays consistent and machine-interpretable across systems.

1. Clinical data should be represented using a recognised clinical terminology or coding system rather than free text or an organisation-specific code, so its meaning is consistent and machine-interpretable across consuming systems.
2. Clinical terminology and code sets should be sourced from the [NZ Health Terminology Service (NZHTS)](https://www.healthnz.govt.nz/health-professionals/guidance-standards/topic/data-and-standards/health-information-standards/nz-health-terminology-service-nzhts) rather than an independently maintained or organisation-specific copy.
3. A production implementation should use a local or cached terminology server instance rather than depend on the central terminology service for every lookup, so it can meet its own availability and performance requirements.
4. Where a data representation departs from an existing accepted standard, this must be made explicit through the standard's own profiling or extension mechanism, rather than encoding non-standard data into free text, metadata, or an unrelated field.

#### References

[Reliability & Resilience](../../principles/reliability-resilience.md)\
[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Interoperability Across Organisational & Sector Boundaries

These requirements ensure health data exchanged across an organisational or sector boundary meets the same conformance expectations as data exchanged within one.

1. Health data exchanged across an organisational or sector boundary must meet the same conformance expectations as data exchanged within a single organisation; crossing a boundary must not justify a proprietary or lower-conformance alternative.
2. An interface crossing an organisational or sector boundary should be designed for more than one prospective consuming organisation, not just the first it was built for.
3. Health data exchanged across an organisational or sector boundary remains subject to any applicable data residency or sovereignty requirement, and must not be used to circumvent one.

#### References

[Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Conformance Testing Against Implementation Guides

These requirements verify an implementation's conformance to the Implementation Guide it claims to support.

1. An implementation must be tested for conformance against the relevant Implementation Guide before it is used to exchange data in production.
2. Conformance testing should be automated, so it can be repeated whenever the implementation changes or the Implementation Guide it conforms to is updated.
3. A confirmed conformance failure must be resolved before the implementation is used to exchange data in production.

#### References

[Integration Testing](../quality-engineering/integration-testing.md)
