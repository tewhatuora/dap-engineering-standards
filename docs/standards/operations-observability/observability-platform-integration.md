# Observability Platform Integration

## Telemetry Ingestion

### Summary

Telemetry required to operate a service is shipped to the organisation's established observability platform.

### Standards

1. `std-ops-telemetry-ingestion-01` Telemetry required to operate a service **MUST** be shipped to the organisation's centralised observability platform.

### Related Standards

- [Telemetry Instrumentation](telemetry-instrumentation.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Telemetry Transport

### Summary

Telemetry uses an open transport, records delivery failures, and remains exportable through a periodically verified non-proprietary format.

### Standards

1. `std-ops-telemetry-transport-01` Telemetry **SHOULD** be shipped to the observability platform using an open, vendor-neutral protocol or collection mechanism, such as the [OpenTelemetry Protocol](https://opentelemetry.io/docs/specs/otlp/).
2. `std-ops-telemetry-transport-02` A failure to ship telemetry to the observability platform **SHOULD** itself be recorded, such as through an internal metric, so a gap in telemetry is not mistaken for the absence of a problem.
3. `std-ops-telemetry-transport-03` Telemetry held within the observability platform **SHOULD** remain exportable in a usable, non-proprietary format, so historical telemetry is not lost if that platform is replaced.
4. `std-ops-telemetry-transport-04` The ability to export telemetry from the observability platform in a usable, non-proprietary format **SHOULD** be verified periodically.

### Related Standards

- [Telemetry Instrumentation](telemetry-instrumentation.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Observability](../../principles/reliability-operations/observability.md)

## Platform Availability

### Summary

The observability platform operates independently of monitored services, with operational telemetry buffered through brief platform outages where practical.

### Standards

1. `std-ops-platform-availability-01` The observability platform **MUST** be operated with availability independent of the services it monitors, so it remains usable to diagnose an incident affecting those services.
2. `std-ops-platform-availability-02` A brief unavailability of the observability platform **SHOULD NOT** cause permanent loss of telemetry required for incident response.
3. `std-ops-platform-availability-03` A service or intermediate collector **SHOULD** buffer telemetry required for incident response within defined resource bounds until the observability platform becomes reachable again.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Telemetry Retention

### Summary

Each category of telemetry has a defined retention period, weighed against its value, storage cost, and any compliance need.

### Standards

1. `std-ops-telemetry-retention-01` A retention period **MUST** be defined for each category of telemetry, proportionate to its operational and investigative value, the cost of its continued storage, and any applicable compliance requirement.
2. `std-ops-telemetry-retention-02` Business-relevant telemetry **SHOULD** be retained for a longer period than diagnostic telemetry, so historic trends remain available for reporting purposes.

### Related Standards

- [Structured Logging](structured-logging.md)
- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)
- [Distributed Tracing](distributed-tracing.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
