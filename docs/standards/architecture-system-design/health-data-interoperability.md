# Health Data Interoperability

## Summary

> Exchange health data using recognised interoperability standards and shared clinical terminology, not proprietary formats.

## External Standards

Developers and vendors implementing health data exchange **SHOULD** also consult the [Health New Zealand | Te Whatu Ora API Standards](https://apistandards.digital.health.nz) for detailed, protocol-specific design and implementation guidance alongside the requirements set out here.

## Standards

### Recognised Standards & Implementation Guides

These requirements set out how a recognised standard for health data exchange is adopted.

1. Health data exchange **SHOULD** use [HL7](https://www.hl7.org/)'s [Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/) standard where an appropriate FHIR resource exists, in preference to a proprietary or organisation-specific format.
2. An existing [HL7 Version 2 (V2)](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) messaging integration **MAY** continue to operate; FHIR **SHOULD** be used for new development.
3. A new Implementation Guide **SHOULD** extend or build on an existing published Implementation Guide rather than duplicating or undermining work it already covers.
4. A new Implementation Guide **MUST** include documentation sufficient for a prospective consumer to understand its purpose, scope, and the resource types and operations it supports, without needing to seek guidance from the team that published it.
5. A published FHIR API version **MUST** remain supported for at least three years from the introduction of a replacement version, with at least one year's notice before it is withdrawn from support.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [API Design & Standards](api-design-standards.md)
- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)

### Clinical Terminology & Coding Systems

These requirements address how clinical data is represented, so its meaning stays consistent and machine-interpretable across systems.

1. Clinical data **SHOULD** be represented using a recognised clinical terminology or coding system rather than free text or an organisation-specific code, so its meaning is consistent and machine-interpretable across consuming systems.
2. Clinical terminology and code sets **SHOULD** be sourced from the [NZ Health Terminology Service (NZHTS)](https://www.healthnz.govt.nz/health-professionals/guidance-standards/topic/data-and-standards/health-information-standards/nz-health-terminology-service-nzhts) rather than an independently maintained or organisation-specific copy.
3. A production implementation **SHOULD** use a local or cached terminology server instance rather than depend on the central terminology service for every lookup, so it can meet its own availability and performance requirements.
4. Where a data representation departs from an existing accepted standard, this **MUST** be made explicit through the standard's own profiling or extension mechanism, rather than encoding non-standard data into free text, metadata, or an unrelated field.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Interoperability Across Organisational & Sector Boundaries

These requirements describe how health data exchanged across an organisational or sector boundary meets the same conformance expectations as data exchanged within one.

1. Health data exchanged across an organisational or sector boundary **MUST** meet the same conformance expectations as data exchanged within a single organisation; crossing a boundary **MUST NOT** justify a proprietary or lower-conformance alternative.
2. An interface crossing an organisational or sector boundary **SHOULD** be designed for more than one prospective consuming organisation, not just the first it was built for.
3. Health data exchanged across an organisational or sector boundary remains subject to any applicable data residency or sovereignty requirement, and **MUST NOT** be used to circumvent one.

#### References

- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Conformance Testing Against Implementation Guides

These requirements cover how an implementation's conformance to the Implementation Guide it claims to support is verified.

1. An implementation **MUST** be tested for conformance against the relevant Implementation Guide before it is used to exchange data in production.
2. Conformance testing **SHOULD** be automated, so it can be repeated whenever the implementation changes or the Implementation Guide it conforms to is updated.
3. A confirmed conformance failure **MUST** be resolved before the implementation is used to exchange data in production.

#### References

- [Integration Testing](../quality-engineering/integration-testing.md)
