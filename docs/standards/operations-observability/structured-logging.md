---
last_edited: 2026-09-09
---

# Structured Logging

## Log Format

### Summary

A service's log output is structured and machine-parseable, with field names consistent across every entry.

### Standards

1. `std-ops-log-format-01` A service **MUST** emit its log output in a consistent, structured, machine-parseable format, such as JSON.
2. `std-ops-log-format-02` Field names used within a service's log entries **MUST** follow a consistent naming convention across that service.

### Related Standards

- [Telemetry Instrumentation](telemetry-instrumentation.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Required Fields

### Summary

Application log entries carry a UTC timestamp and enough structured context to identify their severity, origin, and event where applicable.

### Standards

1. `std-ops-required-fields-01` Every log entry **MUST** include a timestamp recorded in Coordinated Universal Time (UTC), using a consistent and unambiguous format.
2. `std-ops-required-fields-02` An application log entry **SHOULD** include a severity level and identify the originating service or component.
3. `std-ops-required-fields-03` An application log entry **SHOULD** describe the event without requiring the reader to consult the originating source code.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Sensitive Data

### Summary

Secrets are excluded from logs, and personal or health data appears only where needed and is irreversibly masked, redacted, or tokenised.

### Standards

1. `std-ops-sensitive-data-01` A service **MUST NOT** log a secret, credential, access token, or cryptographic key.
2. `std-ops-sensitive-data-02` Personal or health data, such as a name or health identifier, **MUST NOT** be written to a service's log output unless its inclusion is necessary and authorised for that purpose.
3. `std-ops-sensitive-data-03` Personal or health data that cannot be omitted from a log entry **MUST** be masked, redacted, or tokenised before that entry is written.
4. `std-ops-sensitive-data-04` A masking or redaction technique applied to a log entry **MUST NOT** allow the original value to be reconstructed, whether from the masked output alone or in combination with other logged fields.

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Observability](../../principles/reliability-operations/observability.md)

## Diagnostic Context

### Summary

A log entry carries its diagnostic context as structured fields, traceable back to the exact code that produced it.

### Standards

1. `std-ops-diagnostic-context-01` A log entry **SHOULD** record diagnostic parameters, identifiers, or values as structured fields where they are needed to investigate the event.
2. `std-ops-diagnostic-context-02` Diagnostic context **SHOULD NOT** be available only within a log entry's human-readable event message.
3. `std-ops-diagnostic-context-03` A log entry **SHOULD** identify its event type or instrumentation source through a stable reference.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Log Severity

### Summary

A log entry's severity matches its operational significance, production severity thresholds change without a restart or redeploy, and processing failures are recorded before impact occurs.

### Standards

1. `std-ops-log-severity-01` A service **MUST** use a consistent, defined set of severity levels, such as debug, informational, warning, error, and critical, across its log output.
2. `std-ops-log-severity-02` A log entry's severity level **MUST** match the operational significance of the event it describes.
3. `std-ops-log-severity-03` An expected or handled condition **MUST NOT** be logged as an error.
4. `std-ops-log-severity-04` The minimum severity level emitted by a service in production **SHOULD** be configurable without rebuilding the service.
5. `std-ops-log-severity-05` An error that stops or materially degrades a service's processing **MUST** be recorded when it is detected.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Business Outcomes

### Summary

A business decision or outcome is logged as a queryable structured field, distinguishable from routine operational detail.

### Standards

1. `std-ops-business-outcomes-01` A log entry recording a business decision or outcome, such as an approval, rejection, or determination, **SHOULD** structure that outcome in a field that can be queried independently of the entry's human-readable event message.
2. `std-ops-business-outcomes-02` A business outcome or event required for audit purposes **SHOULD** be distinguishable from an operational error or warning.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Trace Correlation

### Summary

A log entry carries the same trace identifier propagated across service boundaries, so it can be joined to the transaction.

### Standards

1. `std-ops-trace-correlation-01` A log entry generated while valid trace context is active **MUST** include its trace identifier.
2. `std-ops-trace-correlation-02` The trace identifier included in a log entry **MUST** be the same identifier propagated across the service boundaries involved in that transaction, so related log entries and trace data can be joined for a single transaction.
3. `std-ops-trace-correlation-03` A log entry generated while valid span context is active **SHOULD** include both its trace and span identifiers.

### Related Standards

- [Distributed Tracing](distributed-tracing.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Log Volume

### Summary

A log entry stays free of duplication and debug-level noise in production, and a routine measurement becomes a metric instead.

### Standards

1. `std-ops-log-volume-01` A service **SHOULD NOT** emit duplicate log entries for the same event without a distinct operational purpose.
2. `std-ops-log-volume-02` A verbose or debug-level log entry **MUST NOT** be enabled by default in a production environment.
3. `std-ops-log-volume-03` A service **SHOULD** reduce or remove log output that is not genuinely actionable, so useful entries remain distinguishable from noise and log volume does not incur unnecessary cost.
4. `std-ops-log-volume-04` A high-frequency, routine measurement, such as the duration of every individual database call, **SHOULD** be captured as a metric.

### Related Standards

- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
