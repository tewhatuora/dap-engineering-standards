---
last_edited: 2026-09-14
---

# Telemetry Instrumentation

## Planning & Delivery

### Summary

New functionality's telemetry is planned during design and delivered in the same change.

### Standards

1. The telemetry needs of a change that introduces new functionality or behaviour **SHOULD** be identified during its design. `std-ops-planning-delivery-01`
2. A change that introduces operationally significant functionality or behaviour **SHOULD** include its corresponding telemetry instrumentation within the same change. `std-ops-planning-delivery-02`

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Instrumentation Standards

### Summary

A service instruments telemetry through the organisation's approved open standard or a semantics-compatible alternative where that standard is unsupported.

### Standards

1. A service **MUST** be instrumented using the organisation's approved open instrumentation standard, such as [OpenTelemetry](https://opentelemetry.io/). `std-ops-instrumentation-standards-01`
2. Where a service's runtime or technology does not support the approved instrumentation mechanism, an alternative **MAY** be used, provided it still conforms to the organisation's common telemetry semantics. `std-ops-instrumentation-standards-02`

### Related Standards

- [Observability Platform Integration](observability-platform-integration.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Telemetry Semantics

### Summary

A shared telemetry attribute keeps one established name and meaning, checked against existing conventions before adding a new one.

### Standards

1. A semantic convention for a shared attribute defined by an open instrumentation standard, such as [OpenTelemetry's semantic conventions](https://opentelemetry.io/docs/specs/semconv/), **MUST** be adopted. `std-ops-telemetry-semantics-01`
2. A new organisation-specific shared attribute **MUST NOT** duplicate an established attribute with the same meaning. `std-ops-telemetry-semantics-02`
3. A shared attribute, such as the identity, version, or environment of the service that produced a telemetry signal, or a tokenised reference to a health identifier, **MUST** have a single, established name and meaning, used consistently by every service and signal type it appears in. `std-ops-telemetry-semantics-03`
4. A shared attribute name **MUST NOT** be repurposed for a different meaning within a single service or signal type, even where doing so would be locally convenient. `std-ops-telemetry-semantics-04`

### Related Standards

- [Structured Logging](structured-logging.md)
- [Distributed Tracing](distributed-tracing.md)
- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Sensitive Attributes

### Summary

Personal or health data is excluded from metric labels and span attributes unless authorised and necessary, then transformed to prevent reconstruction.

### Standards

1. Personal or health data **MUST NOT** be carried in a metric label or span attribute unless its inclusion is necessary and authorised for that purpose. `std-ops-sensitive-attributes-01`
2. Personal or health data authorised for a metric label or span attribute **MUST** be transformed so the original value cannot be reconstructed from the telemetry. `std-ops-sensitive-attributes-02`

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Observability](../../principles/reliability-operations/observability.md)

## Breaking Changes

### Summary

A breaking telemetry change introduces the new name alongside the old through expand-and-contract, giving dependents time to migrate.

### Standards

1. A breaking change to a shared attribute, metric, or span **MUST** preserve the existing contract through a defined migration period, such as by using expand-and-contract. `std-ops-breaking-changes-01`
2. A deprecated name **SHOULD** remain in place for a defined transition period after its replacement is introduced, so a dependent dashboard, alert, or query has time to migrate. `std-ops-breaking-changes-02`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Non-Blocking Instrumentation

### Summary

Telemetry recording and export remain bounded, and transmission failures do not fail the observed request.

### Standards

1. Telemetry recording and export **MUST NOT** block the observed request beyond a defined bound. `std-ops-non-blocking-instrumentation-01`
2. A failure to record or transmit telemetry **MUST NOT** cause the service's own request or operation to fail. `std-ops-non-blocking-instrumentation-02`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
