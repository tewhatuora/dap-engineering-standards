# Observability by Default

## Summary

> Instrument a service with enough logging, metrics, and tracing to explain its behaviour at any time.

## Objective

This principle establishes the expectation that systems and services are built with sufficient logging, metrics, and tracing to understand their behaviour, health, and performance from the moment they are built. It supports timely detection, diagnosis, and resolution of operational issues, grounding engineering and operational decisions in actual system behaviour.

## Principles

### Early Observability Design

These principles set out how observability is built in from the start, rather than added reactively after an incident.

1. Observability must be treated as a first-class design requirement, established during design and development so it does not need to be added reactively after a production incident.
2. A service or feature change must not be considered complete until its logging, metrics, and tracing instrumentation is in place.

### Signal Coverage

These principles describe how a service emits enough logs, metrics, and traces to determine its behaviour, health, and performance.

1. A service must emit structured logs, metrics, and traces sufficient to determine its behaviour, health, and performance without requiring direct inspection of its running state.
2. Signal coverage must extend to a service's dependencies and integration points, not only its own internal logic.

#### References

- [Structured Logging](../standards/operations-observability/structured-logging.md)
- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Cross-Service Correlation

These principles address how telemetry becomes correlatable across service boundaries, so a single transaction is traced end-to-end.

1. Telemetry emitted across service boundaries must be correlatable using a shared identifier, such as a trace or request identifier, to support end-to-end diagnosis of a single transaction.
2. A service must propagate any correlation identifier it receives to every downstream call it makes.

#### References

- [Distributed Tracing](../standards/operations-observability/distributed-tracing.md)

### Consistent Instrumentation Across Services

These principles set out how instrumentation is standardised across services, rather than left to ad hoc, per-team conventions.

1. Instrumentation must follow a consistent, organisation-defined approach across services rather than ad hoc, per-team conventions, so telemetry remains comparable and interoperable.
2. A new service must adopt the established instrumentation approach; an alternative approach must not be introduced without justification.

#### References

- [Telemetry Instrumentation Standards](../standards/operations-observability/telemetry-instrumentation-standards.md)
- [Observability Platform Integration](../standards/operations-observability/observability-platform-integration.md)

### Actionable, Low-Noise Telemetry

These principles cover how telemetry is limited to what is actionable, tied to real impact, and free of unnecessary noise.

1. Telemetry must be actionable; a signal that does not inform a decision or response should not be collected or alerted on.
2. Alerting should be tied to observable user or business impact rather than raw infrastructure metrics alone, to avoid alert fatigue.
3. Low-value or redundant telemetry should be reviewed periodically and removed to control noise and cost.

#### References

- [Cost Awareness by Design](cost-awareness-by-design.md)

### Incident Detection & Response

These principles describe how an operational issue is detected early and incident-response telemetry is validated in advance.

1. Observability must provide sufficient signal to detect an operational issue as early as possible, rather than relying primarily on user-reported problems.
2. Telemetry and dashboards relied on for incident response must be tested and validated in advance, not assumed to work correctly when first needed during an incident.

#### References

- [Runbooks](../standards/operations-observability/runbooks.md)
- [Reliability & Resilience](reliability-resilience.md)

### Telemetry Data Minimisation

These principles address how personal, health, or sensitive data captured in telemetry is minimised.

1. Telemetry must not capture personal, health, or other sensitive data beyond what is strictly necessary for observability purposes.
2. Where sensitive data cannot be avoided in telemetry, it must be masked, redacted, or otherwise protected before storage or display.

#### References

- [Privacy by Design](privacy-by-design.md)

### Team-Owned Observability

These principles guide how observability ownership is assigned to the team that builds and operates a service.

1. The team that builds and operates a service must own the observability of that service rather than relying solely on a separate, central team.
2. Observability ownership must transfer with a service when responsibility for it is handed over between teams; it must not lapse during a handover.
