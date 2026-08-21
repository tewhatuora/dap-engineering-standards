# Metrics, Monitoring & Alerting

## Summary

> Keep a service's metrics visible, correctly typed, and bounded, with alerts that stay automated and actionable.

## Objective

This standard defines requirements for a service's metrics and the monitoring and alerting built on them. It keeps a degradation in a service's health or business impact visible and actionable, so a team can detect and respond to it before it materially affects users or the business relying on it.

## Standards

### Metric Types

These requirements set out how a metric is recorded using the type that matches its semantics.

1. A metric **MUST** be recorded using the metric type that matches its semantics, such as a monotonically increasing count as a counter, a point-in-time value as a gauge, or a distribution of values as a histogram.
2. A value that can both increase and decrease, such as a queue depth or the number of claims currently awaiting assessment, **MUST** be recorded as a gauge rather than a counter, since a counter cannot represent a decrease.
3. A value where the distribution of measurements matters, such as request latency or the time taken to reach a claim determination, **MUST** be recorded as a histogram rather than a gauge or counter, so a percentile remains derivable.
4. The metric type recorded for an existing metric **MUST NOT** be changed once a dashboard, alert, or other consumer depends on it, without a coordinated migration.

#### References

- [Telemetry Instrumentation Standards](telemetry-instrumentation-standards.md)

### Metric Cardinality

These requirements address how a metric's labels or dimensions remain bounded.

1. A metric label or dimension **MUST NOT** carry an unbounded or high-cardinality value, such as a raw identifier or a timestamp, since this increases storage cost and degrades query performance.
2. Where a high-cardinality value is genuinely needed for diagnosis, it **SHOULD** be captured in a trace or log rather than as a metric label.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Distributed Tracing](distributed-tracing.md)
- [Structured Logging](structured-logging.md)

### Operational & Business Dashboards

These requirements cover how a service's key operational and business indicators remain visible to the team responsible for it.

1. A service **MUST** have a dashboard presenting its key operational indicators, such as its request rate, error rate, and latency, or the equivalent indicators for an asynchronous or event-driven service.
2. For a service that performs a business function, a dashboard **SHOULD** present one or more business-relevant indicators alongside its operational indicators, such as the time taken to reach a claim determination.
3. A dashboard **MUST** be accessible to the team responsible for operating the service it covers, without requiring assistance from a separate, central team to interpret it.
4. A dashboard **MUST** be kept current as the service it covers evolves, with a new indicator added for new functionality and an indicator that no longer reflects the service's actual behaviour corrected or removed.

#### References

- [Observability by Default](../../principles/observability-by-default.md)

### Alerting Policy

These requirements guide how an alert is defined and operated, so it reliably reaches its responsible team with a known severity and expected response.

1. An alert **MUST** be assigned to a team responsible for responding to it.
2. An alert **MUST** automatically notify its responsible team once triggered, rather than depending on manual checking to discover it.
3. An alert's severity **MUST** be proportionate to the operational or business impact of the condition it signals, distinguishing a condition requiring an immediate response from one that is informational only.
4. An alert's threshold **SHOULD** be defined against a service level objective, where one exists, rather than an arbitrary static value.
5. An alert **SHOULD** reference the response procedure expected of its recipient, such as a runbook, so the appropriate action does not depend on that recipient's individual knowledge.
6. An alert or dashboard relied on for incident response **MUST** be proven to work in advance; an alert **MUST** be tested in a non-production environment, and a dashboard **MUST** be validated.

#### References

- [Automation First](../../principles/automation-first.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Runbooks](runbooks.md)

### Alert Fatigue Governance

These requirements describe how a noisy or unactioned alert is identified and addressed, rather than left to accumulate into alert fatigue.

1. An alert that fires repeatedly without a corresponding response, or that is routinely acknowledged without action, **MUST** be reviewed and either tuned to reflect a genuine condition or retired.
2. Alert volume **SHOULD** be reviewed periodically across a service, so a recipient's ability to distinguish an actionable alert from routine noise is not eroded over time.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
