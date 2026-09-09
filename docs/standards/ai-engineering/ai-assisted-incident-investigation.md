---
last_edited: 2026-09-09
---

# AI-Assisted Incident Investigation

## Approved Tooling

### Summary

An AI tool used for incident investigation is approved before use and recorded in the organisation's Approved Tooling Register.

### Standards

1. `std-ai-approved-tooling-01` An AI tool used to analyse a service's telemetry or otherwise assist in incident investigation **MUST** be listed on the organisation's Approved Tooling Register before use.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md)

### Implements These Principles

- [Suitable AI Tools](../../principles/engineering-practice/ai-assisted-engineering.md#suitable-ai-tools)

## Standardised Telemetry

### Summary

An AI tool draws on standard telemetry through the established observability platform across the services involved in a transaction, without requiring a separate service export.

### Standards

1. `std-ai-standardised-telemetry-01` An AI tool **MUST** draw on telemetry produced to the organisation's established instrumentation and semantic standards.
2. `std-ai-standardised-telemetry-02` A service **SHOULD NOT** maintain a separate or altered telemetry export to suit an AI tool used for incident investigation.
3. `std-ai-standardised-telemetry-03` An AI tool used for incident investigation **SHOULD** be integrated through the organisation's established observability platform so it can draw on telemetry from every service a transaction touches.

### Related Standards

- [Telemetry Instrumentation](../operations-observability/telemetry-instrumentation.md)
- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)

### Implements These Principles

- [Central Operational Telemetry](../../principles/reliability-operations/observability.md#central-operational-telemetry)
- [Consistent Instrumentation](../../principles/reliability-operations/observability.md#consistent-instrumentation)

## Incident Human Oversight

### Summary

A responder verifies an AI tool's diagnosis before high-impact remediation, and every remediation or configuration change proposed by an AI tool is carried out by a person or executed by an AI agent only after a person's approval.

### Standards

1. `std-ai-incident-human-oversight-01` An AI tool's diagnosis of an incident's likely cause **MUST** be independently verified by a responder before being relied on to guide a high-impact remediation action.
2. `std-ai-incident-human-oversight-02` An AI agent **MUST NOT** execute a remediation or configuration change in response to an incident without prior approval from a person.
3. `std-ai-incident-human-oversight-03` A person **MUST** carry out or approve a remediation or configuration change proposed by an AI tool before it takes effect.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Risk-Proportionate Scrutiny](../../principles/engineering-practice/ai-assisted-engineering.md#risk-proportionate-scrutiny)

## Incident Traceability

### Summary

An AI tool's contribution to an incident's diagnosis or resolution is recorded, and a pattern of inaccurate output is reviewed.

### Standards

1. `std-ai-incident-traceability-01` Where an AI tool materially contributed to an incident's diagnosis or resolution, that contribution **MUST** be recorded alongside the incident's other response detail.
2. `std-ai-incident-traceability-02` A pattern of inaccurate or misleading output from an AI tool **SHOULD** be reviewed and addressed.

### Implements These Principles

- [AI Contribution Traceability](../../principles/engineering-practice/ai-assisted-engineering.md#ai-contribution-traceability)
