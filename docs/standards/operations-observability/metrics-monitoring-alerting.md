# Metrics, Monitoring & Alerting

## Metric Types

### Summary

A metric uses the type matching its semantics, and that type remains stable once consumers depend on it.

### Standards

1. `std-ops-metric-types-01` A metric **MUST** be recorded using the metric type that matches its semantics, such as a monotonically increasing count as a counter, a point-in-time value as a gauge, or a distribution of values as a histogram.
2. `std-ops-metric-types-02` A value that can both increase and decrease, such as a queue depth or the number of claims currently awaiting assessment, **MUST** use a non-monotonic metric type.
3. `std-ops-metric-types-03` A value whose distribution matters, such as request latency or the time taken to reach a claim determination, **MUST** use a metric type that preserves that distribution.
4. `std-ops-metric-types-04` The metric type recorded for an existing metric **MUST NOT** be changed once a dashboard, an alert, or another consumer depends on it, without a coordinated migration.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Metric Cardinality

### Summary

A metric uses bounded, low-cardinality labels, with diagnostic high-cardinality values captured in traces or logs.

### Standards

1. `std-ops-metric-cardinality-01` A metric label or dimension **MUST NOT** carry an unbounded or high-cardinality value, such as a raw identifier or a timestamp, since this increases storage cost and degrades query performance.
2. `std-ops-metric-cardinality-02` A high-cardinality value needed for diagnosis **SHOULD** be captured in a trace or log.

### Related Standards

- [Structured Logging](structured-logging.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Dashboards

### Summary

A service's key operational and business indicators are available through a current dashboard accessible to its own team.

### Standards

1. `std-ops-dashboards-01` A production service **SHOULD** have a dashboard presenting its key operational indicators, such as request rate, error rate, latency, saturation, or equivalent indicators.
2. `std-ops-dashboards-02` For a service that performs a business function, a dashboard **SHOULD** present one or more business-relevant indicators alongside its operational indicators, such as the time taken to reach a claim determination.
3. `std-ops-dashboards-03` A dashboard **SHOULD** be accessible to the team responsible for operating the service it covers without assistance from a separate team.
4. `std-ops-dashboards-04` A dashboard **SHOULD** be updated as the service evolves so its indicators continue to reflect actual behaviour.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Alerting

### Summary

An alert automatically reaches its responsible team with impact-proportionate severity, an SLO-based threshold where available, and a runbook; alerts and supporting dashboards are tested and validated in advance.

### Standards

1. `std-ops-alerting-01` An alert **MUST** be assigned to a team responsible for responding to it.
2. `std-ops-alerting-02` An alert **MUST** automatically notify its responsible team once triggered.
3. `std-ops-alerting-03` An alert's severity **MUST** be proportionate to the operational or business impact of the condition it signals, distinguishing a condition requiring an immediate response from one that is informational only.
4. `std-ops-alerting-04` An alert's threshold **SHOULD** be defined against a service level objective where one exists.
5. `std-ops-alerting-05` An alert **SHOULD** reference a runbook that a person or an AI tool, whether a directed assistant or an autonomous AI agent, can follow.
6. `std-ops-alerting-06` An alert or dashboard relied on for incident response **MUST** be validated before responders depend on it.
7. `std-ops-alerting-07` A paging alert **SHOULD** be exercised in non-paging mode under representative production conditions before it pages responders.
8. `std-ops-alerting-08` A dashboard **SHOULD** be validated against its underlying telemetry.

### Related Standards

- [Runbooks](runbooks.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Alert Fatigue

### Summary

An alert that repeatedly receives no genuine response is tuned or retired, and alert volume is reviewed periodically to preserve actionability.

### Standards

1. `std-ops-alert-fatigue-01` An alert that fires repeatedly without a corresponding response, or that is routinely acknowledged without action, **MUST** be reviewed and either tuned to reflect a genuine condition or retired.
2. `std-ops-alert-fatigue-02` Alert volume **SHOULD** be reviewed periodically across a service, so a recipient's ability to distinguish an actionable alert from routine noise is not eroded over time.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
