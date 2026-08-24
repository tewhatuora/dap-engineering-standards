# Observability Platform Integration

## Summary

> A service's telemetry is shipped to one centralised observability platform that remains available independent of the services it monitors.

## Objective

This standard defines requirements for how a service's telemetry is integrated with the organisation's observability platform. That platform is itself a critical dependency every service relies on for diagnosis, and is held to the same engineering standard as any other critical dependency.

## Standards

### Centralised Telemetry Ingestion

These requirements set out how a service's logs, metrics, and traces are collected into the organisation's established observability platform.

1. Telemetry emitted by a service, across its logs, metrics, and traces, **MUST** be shipped to the organisation's centralised observability platform rather than retained only on the instance or host that produced it.
2. A new service **MUST** integrate with the established observability platform rather than operating a separate, team-specific alternative.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Technology Stack Register](../architecture-system-design/technology-stack-register.md)

### Telemetry Transport

These requirements address how telemetry is exchanged between a service and the observability platform without proprietary lock-in.

1. Telemetry **SHOULD** be shipped to the observability platform using an open, vendor-neutral protocol or collection mechanism, such as the [OpenTelemetry Protocol](https://opentelemetry.io/docs/specs/otlp/), rather than a proprietary alternative that would require re-instrumenting the service to switch observability platforms.
2. A failure to ship telemetry to the observability platform **SHOULD** itself be recorded, such as through an internal metric, so a gap in telemetry is not mistaken for the absence of a problem.
3. Telemetry held within the observability platform **SHOULD** remain exportable in a usable, non-proprietary format, so historical telemetry is not lost if that platform is replaced.

#### References

- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)
- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [Telemetry Instrumentation Standards](telemetry-instrumentation-standards.md)

### Telemetry Retention

These requirements cover how long telemetry is kept within the observability platform.

1. A retention period **MUST** be defined for each category of telemetry, proportionate to its operational and investigative value, the cost of its continued storage, and any applicable compliance requirement.
2. Business-relevant telemetry **SHOULD** be retained for a longer period than diagnostic telemetry, so historic trends remain available for reporting purposes.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)
- [Structured Logging](structured-logging.md)

### Observability Platform Availability

These requirements describe how the observability platform remains available independent of the services it monitors, and how its telemetry is protected from loss during a brief outage.

1. The observability platform **MUST** be operated with availability independent of the services it monitors, so it remains usable to diagnose an incident affecting those services.
2. A brief unavailability of the observability platform **SHOULD NOT** result in permanent loss of metrics or traces; a service or an intermediate collector **SHOULD** buffer them locally until the platform becomes reachable again.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
