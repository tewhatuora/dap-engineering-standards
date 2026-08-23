# Structured Logging

## Summary

> A service's log output is structured, traceable, and free of sensitive data or unnecessary noise.

## Objective

This standard defines requirements for the log output a service produces. It keeps that output consistent, safe, and usable across services, so operational behaviour can be diagnosed without relying on ad hoc, service-specific interpretation.

## Standards

### Structured Format

These requirements set out how a service's log output remains machine-parseable, rather than emitted as unstructured, free-form text.

1. A service **MUST** emit its log output in a consistent, structured, machine-parseable format, such as JSON.
2. Field names used within a service's log entries **MUST** follow a consistent naming convention across that service.

#### References

- [Telemetry Instrumentation Standards](telemetry-instrumentation-standards.md)

### Baseline Log Fields

These requirements describe how a common set of fields is present on every log entry a service produces.

1. Every log entry **MUST** include a timestamp recorded in Coordinated Universal Time (UTC), using a consistent and unambiguous format.
2. Every log entry **MUST** include a severity level and the identity of the originating service or component.
3. Every log entry **MUST** include a human-readable event message that describes what occurred without requiring the reader to consult the originating source code.

### Diagnostic Context

These requirements address how a log entry is equipped with enough context to diagnose or reproduce the event it describes, and to trace that entry back to the code that produced it.

1. A log entry **MUST** record the parameters, identifiers, or values necessary to diagnose or reproduce the event it describes as structured fields; this context **MUST NOT** be folded into the entry's human-readable event message.
2. A log entry **MUST** be traceable to the specific statement in source code that produced it, using a stable reference such as a source location or a unique event identifier.

### Severity Levels

These requirements address how severity levels are applied consistently across a service's log output.

1. A service **MUST** use a consistent, defined set of severity levels, such as debug, informational, warning, error, and critical, across its log output.
2. A log entry's severity level **MUST** match the operational significance of the event it describes; an expected or handled condition **MUST NOT** be logged as an error.
3. The minimum severity level emitted by a service in a production environment **MUST** be configurable without requiring a redeploy or restart of that service.
4. An error that stops or materially degrades a service's processing **MUST** be recorded in log output before that processing stops or degrades, so its cause is not lost.

### Business Outcome Records

These requirements guide how a business decision or outcome recorded in log output remains distinguishable from operational or diagnostic detail.

1. A log entry recording a business decision or outcome, such as an approval, rejection, or determination, **MUST** structure that outcome in a field that can be identified and queried independently of the entry's human-readable event message.
2. A business outcome or an event required for audit purposes **MUST** be recorded at a severity level indicating expected, successful operation, distinguishable from an operational error or warning.

### Sensitive Data Protection

These requirements cover how personal, health, and credential data are kept out of a service's log output.

1. A service **MUST NOT** log a secret, credential, access token, or cryptographic key.
2. Personal or health data, such as a name, address, contact detail, or health identifier, **MUST NOT** be written to a service's log output unless that specific log entry needs it.
3. Where personal or health data cannot be omitted from a log entry, it **MUST** be masked, redacted, or tokenised before that entry is written.
4. A masking or redaction technique applied to a log entry **MUST NOT** allow the original value to be reconstructed, whether from the masked output alone or in combination with other logged fields.

#### References

- [Privacy by Design](../../principles/privacy-by-design.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)

### Trace Identifiers

These requirements guide how a log entry generated within a transaction is linked to the trace identifier propagated across service boundaries.

1. A log entry generated while processing a transaction **MUST** include the trace identifier associated with that transaction.
2. The trace identifier included in a log entry **MUST** be the same identifier propagated across the service boundaries involved in that transaction, so related log entries and trace data can be joined for a single transaction.
3. A log entry for an individual span within a larger transaction **MUST** include both the trace identifier and the identifier of that span, so it remains distinguishable at high volume.

#### References

- [Distributed Tracing](distributed-tracing.md)

### Log Volume & Noise Control

These requirements set out how a service's log output is limited to genuinely actionable signal, rather than excessive or duplicated entries.

1. A service **MUST NOT** emit a log entry that duplicates information already captured in another log entry for the same event.
2. A verbose or debug-level log entry **MUST NOT** be enabled by default in a production environment.
3. A service **SHOULD** reduce or remove log output that is not genuinely actionable, so useful entries remain distinguishable from noise and log volume does not incur unnecessary cost.
4. A high-frequency, routine measurement, such as the duration of every individual database call, **SHOULD** be captured as a metric rather than a log entry.

#### References

- [Telemetry Instrumentation Standards](telemetry-instrumentation-standards.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
