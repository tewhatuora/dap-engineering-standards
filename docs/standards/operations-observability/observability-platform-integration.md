# Observability Platform Integration

## Summary

> Centralise telemetry, preserve portability, and engineer for resilient observability.

## Standards

### Centralised Telemetry Ingestion

> A service's logs, metrics, and traces ship to the organisation's one established observability platform, not a separate alternative.

1. Telemetry emitted by a service, across its logs, metrics, and traces, **MUST** be shipped to the organisation's centralised observability platform rather than retained only on the instance or host that produced it.
2. A new service **MUST** integrate with the established observability platform rather than operating a separate, team-specific alternative.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
- [Shared Platform](../../principles/architecture-platform/shared-platform.md)

### Telemetry Transport

> Telemetry moves to the observability platform through an open protocol, and stays exportable if that platform ever changes.

1. Telemetry **SHOULD** be shipped to the observability platform using an open, vendor-neutral protocol or collection mechanism, such as the [OpenTelemetry Protocol](https://opentelemetry.io/docs/specs/otlp/), rather than a proprietary alternative that would require re-instrumenting the service to switch observability platforms.
2. A failure to ship telemetry to the observability platform **SHOULD** itself be recorded, such as through an internal metric, so a gap in telemetry is not mistaken for the absence of a problem.
3. Telemetry held within the observability platform **SHOULD** remain exportable in a usable, non-proprietary format, so historical telemetry is not lost if that platform is replaced.
4. The ability to export telemetry from the observability platform in a usable, non-proprietary format **SHOULD** be verified periodically.

#### References

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Telemetry Instrumentation](telemetry-instrumentation.md)

### Telemetry Retention

> Each category of telemetry has a defined retention period, weighed against its value, storage cost, and any compliance need.

1. A retention period **MUST** be defined for each category of telemetry, proportionate to its operational and investigative value, the cost of its continued storage, and any applicable compliance requirement.
2. Business-relevant telemetry **SHOULD** be retained for a longer period than diagnostic telemetry, so historic trends remain available for reporting purposes.

#### References

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)
- [Structured Logging](structured-logging.md)

### Observability Platform Availability

> The observability platform stays available even when the services it monitors are down, buffering telemetry through any brief outage.

1. The observability platform **MUST** be operated with availability independent of the services it monitors, so it remains usable to diagnose an incident affecting those services.
2. A brief unavailability of the observability platform **SHOULD NOT** result in permanent loss of metrics or traces; a service or an intermediate collector **SHOULD** buffer them locally until the platform becomes reachable again.

#### References

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
