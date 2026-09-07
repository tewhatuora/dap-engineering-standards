# Telemetry Instrumentation

## Summary

> Telemetry remains consistent across services, safe to introduce, and delivered alongside the change it observes.

## Standards

### Standardised Instrumentation

> A service instruments telemetry through the organisation's approved open standard, not a bespoke mechanism.

1. A service **MUST** be instrumented using the organisation's approved open instrumentation standard, such as [OpenTelemetry](https://opentelemetry.io/), rather than a bespoke or ad hoc mechanism.
2. Where a service's runtime or technology does not support the approved instrumentation mechanism, an alternative **MAY** be used, provided it still conforms to the organisation's common telemetry semantics.

#### References

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Observability](../../principles/reliability-operations/observability.md)

### Common Telemetry Semantics

> A shared telemetry attribute keeps one established name and meaning, checked against existing conventions before adding a new one.

1. Where an open instrumentation standard already defines a semantic convention for a shared attribute, such as [OpenTelemetry's semantic conventions](https://opentelemetry.io/docs/specs/semconv/), that convention **MUST** be adopted in preference to defining an organisation-specific equivalent.
2. Where no open convention already covers the need, a team **MUST** check the organisation's published attributes for a match before defining and publishing a new one.
3. A shared attribute, such as the identity, version, or environment of the service that produced a telemetry signal, or a tokenised reference to a health identifier, **MUST** have a single, established name and meaning, used consistently by every service and signal type it appears in.
4. A shared attribute name **MUST NOT** be repurposed for a different meaning within a single service or signal type, even where doing so would be locally convenient.

#### References

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Reuse](../../principles/engineering-practice/reuse.md)

### Sensitive Telemetry Attributes

> Personal or health data in a metric label or span attribute is masked or tokenised in a way that cannot be reversed.

1. Personal or health data, such as a name or health identifier, carried in a metric label or span attribute **MUST** be masked, redacted, or tokenised before it is recorded or transmitted.
2. The masking, redaction, or tokenisation applied **MUST NOT** allow the original value to be reconstructed, whether from the masked output alone or in combination with other telemetry attributes.

#### References

- [Data Privacy](../../principles/security-privacy/data-privacy.md)

### Breaking Telemetry Changes

> A breaking telemetry change introduces the new name alongside the old through expand-and-contract, giving dependents time to migrate.

1. A breaking change to a shared attribute, metric, or span **MUST** use an expand-and-contract approach: introduce a new name alongside the existing one, mark it deprecated in the organisation's published attributes, then retire it.
2. A deprecated name **SHOULD** remain in place for a defined transition period after its replacement is introduced, so a dependent dashboard, alert, or query has time to migrate.

### Non-Intrusive Instrumentation

> Telemetry is emitted asynchronously, so recording or transmitting it never delays or fails the request it observes.

1. Telemetry **MUST** be emitted asynchronously, so a request is not delayed waiting for it to be recorded or transmitted.
2. A failure to record or transmit telemetry **MUST NOT** cause the service's own request or operation to fail.

#### References

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Instrumentation Planning & Delivery

> New functionality's telemetry is planned during design and ships in the same change, not added later as an afterthought.

1. The telemetry needs of a change that introduces new functionality or behaviour **SHOULD** be identified during its design, not left until implementation or added reactively once an incident reveals a visibility gap.
2. A change that introduces new functionality or behaviour **MUST** include its corresponding telemetry instrumentation within the same change, rather than deferring it to a follow-up task.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
