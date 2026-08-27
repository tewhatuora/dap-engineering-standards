# Observability by Default

## Summary

> Instrument a service with enough logging, metrics, and tracing to explain its behaviour when needed.

## Principles

### Early Observability Design

Observability is built in from the start, not added reactively once a production incident forces the question.

1. Observability **MUST** be treated as a first-class design requirement, established during design and development so it does not need to be added reactively after a production incident.
2. A service or feature change **MUST NOT** be considered complete until its logging, metrics, and tracing instrumentation is in place.

#### References

- [Telemetry Instrumentation Standards](../standards/operations-observability/telemetry-instrumentation-standards.md)

### Signal Coverage

A service emits enough logs, metrics, and traces to explain its own behaviour and its dependencies, without inspecting running state.

1. A service **MUST** emit structured logs, metrics, and traces sufficient to determine its behaviour, health, and performance without requiring direct inspection of its running state.
2. Signal coverage **MUST** extend to a service's dependencies and integration points, not only its own internal logic.

#### References

- [Structured Logging](../standards/operations-observability/structured-logging.md)
- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Cross-Service Correlation

Telemetry stays correlatable across service boundaries through a shared identifier, propagated to every downstream call.

1. Telemetry emitted across service boundaries **MUST** be correlatable using a shared identifier, such as a trace or request identifier, to support end-to-end diagnosis of a single transaction.
2. A service **MUST** propagate any correlation identifier it receives to every downstream call it makes.

#### References

- [Distributed Tracing](../standards/operations-observability/distributed-tracing.md)

### Consistent Instrumentation Across Services

Instrumentation follows one organisation-defined approach, not an ad hoc, per-team convention a new service invents.

1. Instrumentation **MUST** follow a consistent, organisation-defined approach across services rather than ad hoc, per-team conventions, so telemetry remains comparable and interoperable.
2. A new service **MUST** adopt the established instrumentation approach; an alternative approach **MUST NOT** be introduced without justification.

#### References

- [Telemetry Instrumentation Standards](../standards/operations-observability/telemetry-instrumentation-standards.md)
- [Observability Platform Integration](../standards/operations-observability/observability-platform-integration.md)

### Actionable, Low-Noise Telemetry

Telemetry stays actionable and tied to real impact; a signal that informs no decision is not collected at all.

1. Telemetry **MUST** be actionable; a signal that does not inform a decision or response **SHOULD NOT** be collected or alerted on.
2. Alerting **SHOULD** be tied to observable user or business impact rather than raw infrastructure metrics alone, to avoid alert fatigue.
3. Low-value or redundant telemetry **SHOULD** be reviewed periodically and removed to control noise and cost.

#### References

- [Cost Awareness by Design](cost-awareness-by-design.md)
- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Incident Detection & Response

Observability detects an operational issue as early as possible, and its incident telemetry is tested before it is ever needed.

1. Observability **MUST** provide sufficient signal to detect an operational issue as early as possible, rather than relying primarily on user-reported problems.
2. Telemetry and dashboards relied on for incident response **MUST** be tested and validated in advance, not assumed to work correctly when first needed during an incident.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)
- [Reliability & Resilience](reliability-resilience.md)

### Telemetry Data Minimisation

Telemetry never captures personal or health data beyond what observability strictly needs, masked where it cannot be avoided.

1. Telemetry **MUST NOT** capture personal, health, or other sensitive data beyond what is strictly necessary for observability purposes.
2. Where sensitive data cannot be avoided in telemetry, it **MUST** be masked, redacted, or tokenised before it is recorded or transmitted.

#### References

- [Privacy by Design](privacy-by-design.md)
- [Telemetry Instrumentation Standards](../standards/operations-observability/telemetry-instrumentation-standards.md)
- [Structured Logging](../standards/operations-observability/structured-logging.md)

### Team-Owned Observability

The team that builds and operates a service owns its observability, and that ownership transfers with the service.

1. The team that builds and operates a service **MUST** own the observability of that service rather than relying solely on a separate, central team.
2. Observability ownership **MUST** transfer with a service when responsibility for it is handed over between teams; it **MUST NOT** lapse during a handover.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)
