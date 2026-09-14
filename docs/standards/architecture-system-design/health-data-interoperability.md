---
last_edited: 2026-09-14
---

# Health Data Interoperability

> Developers and vendors implementing health data exchange should also consult the [Health New Zealand API Standards](https://apistandards.digital.health.nz) for protocol-specific design and implementation guidance.

## FHIR & Implementation Guides

### Summary

Health data exchange uses FHIR, applies relevant New Zealand implementation artifacts and canonical identifiers, builds on documented existing Implementation Guides, and supports published FHIR API versions through defined notice periods.

### Standards

1. Health data exchange **SHOULD** use HL7's [Fast Healthcare Interoperability Resources (FHIR)](https://www.hl7.org/fhir/) standard where an appropriate FHIR resource exists. `std-arch-fhir-implementation-guides-01`
2. An existing [HL7 Version 2](https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185) messaging integration **MAY** continue to operate; FHIR **SHOULD** be used for new development. `std-arch-fhir-implementation-guides-02`
3. A new Implementation Guide **SHOULD** extend or build on an existing published Implementation Guide while preserving the work it already covers. `std-arch-fhir-implementation-guides-03`
4. A new Implementation Guide **MUST** include documentation sufficient for a prospective consumer to understand its purpose, scope, and the resource types and operations it supports, without needing to seek guidance from the team that published it. `std-arch-fhir-implementation-guides-04`
5. A published FHIR API version **MUST** remain supported for at least three years from the introduction of a replacement version, with at least one year's notice before it is withdrawn from support. `std-arch-fhir-implementation-guides-05`
6. A FHIR implementation for use in New Zealand **MUST** use each applicable reusable artifact from the [New Zealand Base Implementation Guide](https://fhir.org.nz/ig/base/) or a more specific applicable Implementation Guide. `std-arch-fhir-implementation-guides-06`
7. A FHIR resource **MUST** use the canonical URLs defined by its applicable Implementation Guide for profile, extension, identifier-system, and code-system references. `std-arch-fhir-implementation-guides-07`

### Related Standards

- [API Design](api-design.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Clinical Terminology

### Summary

Clinical data uses recognised terminology sourced from NZHTS, validates clinical codes and value sets against the applicable New Zealand release, and represents departures through standard profiles or extensions.

### Standards

1. Clinical data **SHOULD** be represented using a recognised clinical terminology or coding system so its meaning is consistent and machine-interpretable across consuming systems. `std-arch-clinical-terminology-01`
2. Clinical terminology and code sets **SHOULD** be sourced from the [NZ Health Terminology Service (NZHTS)](https://www.healthnz.govt.nz/health-professionals/guidance-standards/topic/data-and-standards/health-information-standards/nz-health-terminology-service-nzhts). `std-arch-clinical-terminology-02`
3. A production implementation **SHOULD** use a local or cached terminology server instance so it can meet its own availability and performance requirements. `std-arch-clinical-terminology-03`
4. Where a data representation departs from an existing accepted standard, the departure **MUST** be made explicit through the standard's own profiling or extension mechanism. `std-arch-clinical-terminology-04`
5. A clinical code available through NZHTS **MUST** be confirmed as active and included in the applicable New Zealand terminology release before production use. `std-arch-clinical-terminology-05`
6. A clinical value set for use in New Zealand **MUST** be validated through NZHTS before it is published or used in production. `std-arch-clinical-terminology-06`
7. An embedded copy of a clinical terminology or code set **MUST NOT** be treated as authoritative where it is available through NZHTS. `std-arch-clinical-terminology-07`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Cross-Boundary Interoperability

### Summary

Health data crossing an organisational or sector boundary meets the conformance requirements that apply within an organisation.

### Standards

1. Health data exchanged across an organisational or sector boundary **MUST** meet the same conformance expectations as data exchanged within a single organisation. `std-arch-cross-boundary-interoperability-01`
2. Crossing a boundary **MUST NOT** justify a proprietary or lower-conformance alternative. `std-arch-cross-boundary-interoperability-02`
3. An interface crossing an organisational or sector boundary **SHOULD** be designed for multiple prospective consuming organisations. `std-arch-cross-boundary-interoperability-03`
4. Health data exchanged across an organisational or sector boundary remains subject to any applicable data residency or sovereignty requirement, and **MUST NOT** be used to circumvent one. `std-arch-cross-boundary-interoperability-04`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)

## Conformance Testing

### Summary

An implementation passes conformance testing against its Implementation Guide before a relevant change merges and before it exchanges data in production.

### Standards

1. An implementation **MUST** be tested for conformance against the relevant Implementation Guide before it is used to exchange data in production. `std-arch-conformance-testing-01`
2. Conformance testing **SHOULD** be automated, so it can be repeated whenever the implementation changes or the Implementation Guide it conforms to is updated. `std-arch-conformance-testing-02`
3. A confirmed conformance failure **MUST** be resolved before the implementation is used to exchange data in production. `std-arch-conformance-testing-03`
4. A change that creates or modifies FHIR resources **MUST** pass conformance testing against the relevant Implementation Guide before it is merged. `std-arch-conformance-testing-04`

### Related Standards

- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
