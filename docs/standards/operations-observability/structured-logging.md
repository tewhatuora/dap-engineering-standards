# Structured Logging

## Summary

> A service's log output is structured, traceable, and free of sensitive data or unnecessary detail.

## Standards

### Structured Format

> A service's log output is structured and machine-parseable, with field names consistent across every entry.

1. A service **MUST** emit its log output in a consistent, structured, machine-parseable format, such as JSON.
2. Field names used within a service's log entries **MUST** follow a consistent naming convention across that service.

#### References

- [Telemetry Instrumentation](telemetry-instrumentation.md)

### Baseline Log Fields

> Every log entry carries a UTC timestamp, a severity level, its origin, and a human-readable event message.

1. Every log entry **MUST** include a timestamp recorded in Coordinated Universal Time (UTC), using a consistent and unambiguous format.
2. Every log entry **MUST** include a severity level and the identity of the originating service or component.
3. Every log entry **MUST** include a human-readable event message that describes what occurred without requiring the reader to consult the originating source code.

### Diagnostic Context

> A log entry carries its diagnostic context as structured fields, traceable back to the exact code that produced it.

1. A log entry **MUST** record the parameters, identifiers, or values necessary to diagnose or reproduce the event it describes as structured fields; this context **MUST NOT** be folded into the entry's human-readable event message.
2. A log entry **MUST** be traceable to the specific statement in source code that produced it, using a stable reference such as a source location or a unique event identifier.

### Severity Levels

> A log entry's severity level matches the event's real operational significance, and stays reconfigurable without a redeploy.

1. A service **MUST** use a consistent, defined set of severity levels, such as debug, informational, warning, error, and critical, across its log output.
2. A log entry's severity level **MUST** match the operational significance of the event it describes; an expected or handled condition **MUST NOT** be logged as an error.
3. The minimum severity level emitted by a service in a production environment **MUST** be configurable without requiring a redeploy or restart of that service.
4. An error that stops or materially degrades a service's processing **MUST** be recorded in log output before that processing stops or degrades, so its cause is not lost.

### Business Outcome Records

> A business decision or outcome is logged as a queryable structured field, distinguishable from routine operational detail.

1. A log entry recording a business decision or outcome, such as an approval, rejection, or determination, **MUST** structure that outcome in a field that can be identified and queried independently of the entry's human-readable event message.
2. A business outcome or an event required for audit purposes **MUST** be recorded at a severity level indicating expected, successful operation, distinguishable from an operational error or warning.

### Sensitive Data Protection

> A secret is never logged, and personal or health data is masked or tokenised in a way that cannot be reversed.

1. A service **MUST NOT** log a secret, credential, access token, or cryptographic key.
2. Personal or health data, such as a name or health identifier, **MUST NOT** be written to a service's log output unless that specific log entry needs it.
3. Where personal or health data cannot be omitted from a log entry, it **MUST** be masked, redacted, or tokenised before that entry is written.
4. A masking or redaction technique applied to a log entry **MUST NOT** allow the original value to be reconstructed, whether from the masked output alone or in combination with other logged fields.

#### References

- [Data Privacy](../../principles/security-privacy/data-privacy.md)

### Trace Identifiers

> A log entry carries the same trace identifier propagated across service boundaries, so it can be joined to the transaction.

1. A log entry generated while processing a transaction **MUST** include the trace identifier associated with that transaction.
2. The trace identifier included in a log entry **MUST** be the same identifier propagated across the service boundaries involved in that transaction, so related log entries and trace data can be joined for a single transaction.
3. A log entry for an individual span within a larger transaction **MUST** include both the trace identifier and the identifier of that span, so it remains distinguishable at high volume.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
- [Distributed Tracing](distributed-tracing.md)

### Log Volume & Noise Control

> A log entry stays free of duplication and debug-level noise in production, and a routine measurement becomes a metric instead.

1. A service **MUST NOT** emit a log entry that duplicates information already captured in another log entry for the same event.
2. A verbose or debug-level log entry **MUST NOT** be enabled by default in a production environment.
3. A service **SHOULD** reduce or remove log output that is not genuinely actionable, so useful entries remain distinguishable from noise and log volume does not incur unnecessary cost.
4. A high-frequency, routine measurement, such as the duration of every individual database call, **SHOULD** be captured as a metric rather than a log entry.

#### References

- [Telemetry Instrumentation](telemetry-instrumentation.md)
- [Observability](../../principles/reliability-operations/observability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
