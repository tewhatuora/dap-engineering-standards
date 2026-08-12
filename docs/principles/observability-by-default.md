# Observability by Default

## Objective

Observability by Default establishes the expectation that systems and services are built with sufficient logging, metrics, and tracing to understand their behaviour, health, and performance from the moment they are built, not added retrospectively once a problem occurs. It supports timely detection, diagnosis, and resolution of operational issues, and grounds engineering and operational decisions in actual system behaviour rather than assumption.

## Principles

### Observability Designed In From the Outset

These principles build observability in from the start, rather than adding it reactively after an incident.

1. Observability must be treated as a first-class design requirement, established during design and development so it does not need to be added reactively after a production incident.
2. A service or feature change must not be considered complete until its logging, metrics, and tracing instrumentation is in place.

### Signal Coverage Across Logs, Metrics & Traces

These principles emit enough logs, metrics, and traces to determine a service's behaviour, health, and performance.

1. A service must emit structured logs, metrics, and traces sufficient to determine its behaviour, health, and performance without requiring direct inspection of its running state.
2. Signal coverage must extend to a service's dependencies and integration points, not only its own internal logic.

#### References

- [Structured Logging](../standards/operations-observability/structured-logging.md)
- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Correlation & End-to-End Traceability

These principles make telemetry correlatable across service boundaries, so a single transaction can be traced end-to-end.

1. Telemetry emitted across service boundaries must be correlatable using a shared identifier, such as a trace or request identifier, to support end-to-end diagnosis of a single transaction.
2. A service must propagate any correlation identifier it receives to every downstream call it makes.

#### References

- [Distributed Tracing](../standards/operations-observability/distributed-tracing.md)

### Consistent Instrumentation Across Services

These principles standardise instrumentation across services, rather than leaving it to ad hoc, per-team conventions.

1. Instrumentation must follow a consistent, organisation-defined approach across services rather than ad hoc, per-team conventions, so telemetry remains comparable and interoperable.
2. A new service must adopt the established instrumentation approach; an alternative approach must not be introduced without justification.

#### References

- [Telemetry Instrumentation Standards](../standards/operations-observability/telemetry-instrumentation-standards.md)
- [Observability Platform Integration](../standards/operations-observability/observability-platform-integration.md)

### Actionable, Low-Noise Telemetry

These principles limit telemetry to what is actionable, tied to real impact, and free of unnecessary noise.

1. Telemetry must be actionable; a signal that does not inform a decision or response should not be collected or alerted on.
2. Alerting should be tied to observable user or business impact rather than raw infrastructure metrics alone, to avoid alert fatigue.
3. Low-value or redundant telemetry should be reviewed periodically and removed to control noise and cost.

#### References

- [Cost Awareness by Design](cost-awareness-by-design.md)

### Observability Supporting Incident Detection & Response

These principles detect an operational issue early and validate incident-response telemetry in advance.

1. Observability must provide sufficient signal to detect an operational issue as early as possible, rather than relying primarily on user-reported problems.
2. Telemetry and dashboards relied on for incident response must be tested and validated in advance, not assumed to work correctly when first needed during an incident.

#### References

- [Runbooks](../standards/operations-observability/runbooks.md)
- [Reliability & Resilience](reliability-resilience.md)

### Privacy & Data Minimisation in Telemetry

These principles minimise personal, health, or sensitive data captured in telemetry.

1. Telemetry must not capture personal, health, or other sensitive data beyond what is strictly necessary for observability purposes.
2. Where sensitive data cannot be avoided in telemetry, it must be masked, redacted, or otherwise protected before storage or display.

#### References

- [Privacy by Design](privacy-by-design.md)

### Shared Ownership of Observability

These principles assign observability ownership to the team that builds and operates a service.

1. The team that builds and operates a service must own the observability of that service rather than relying solely on a separate, central team.
2. Observability ownership must transfer with a service when responsibility for it is handed over between teams; it must not lapse during a handover.
