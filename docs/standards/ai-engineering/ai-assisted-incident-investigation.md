---
last_edited: 2026-09-14
---

# AI-Assisted Incident Investigation

## Approved Tooling

### Summary

An AI tool used for incident investigation is approved before use and recorded in the organisation's Approved Tooling Register.

### Standards

1. An AI tool used to analyse a service's telemetry or otherwise assist in incident investigation **MUST** be listed on the organisation's Approved Tooling Register before use. `std-ai-approved-tooling-01`

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md#approved-tools)

### Implements These Principles

- [AI Tool Terms and Controls](../../principles/engineering-practice/ai-assisted-engineering.md#ai-tool-terms-and-controls)

## Standardised Telemetry

### Summary

An AI tool draws on standard telemetry through the established observability platform across the services involved in a transaction, without requiring a separate service export.

### Standards

1. An AI tool **MUST** draw on telemetry produced to the organisation's established instrumentation and semantic standards. `std-ai-standardised-telemetry-01`
2. A service **SHOULD NOT** maintain a separate or altered telemetry export to suit an AI tool used for incident investigation. `std-ai-standardised-telemetry-02`
3. An AI tool used for incident investigation **SHOULD** be integrated through the organisation's established observability platform so it can draw on telemetry from every service a transaction touches. `std-ai-standardised-telemetry-03`

### Related Standards

- [Telemetry Instrumentation](../operations-observability/telemetry-instrumentation.md#instrumentation-standards)
- [Distributed Tracing](../operations-observability/distributed-tracing.md#trace-context)
- [Observability Platform Integration](../operations-observability/observability-platform-integration.md#telemetry-ingestion)

### Implements These Principles

- [Central Operational Telemetry](../../principles/reliability-operations/observability.md#central-operational-telemetry)
- [Consistent Instrumentation](../../principles/reliability-operations/observability.md#consistent-instrumentation)

## Incident Human Oversight

### Summary

Incident remediation informed or performed by AI remains under responder control.

### Standards

1. An AI tool's diagnosis of an incident's likely cause **MUST** be independently verified by a responder before being relied on to guide a high-impact remediation action. `std-ai-incident-human-oversight-01`
2. A responder **MUST** carry out or approve a remediation or configuration change proposed by an AI tool before it takes effect. `std-ai-incident-human-oversight-02`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)

### Implements These Principles

- [Scrutiny Based on Impact](../../principles/engineering-practice/ai-assisted-engineering.md#scrutiny-based-on-impact)

## Incident Traceability

### Summary

An AI tool's contribution and reliability in incident response remain reviewable.

### Standards

1. Where an AI tool materially contributed to an incident's diagnosis or resolution, that contribution **MUST** be recorded alongside the incident's other response detail. `std-ai-incident-traceability-01`
2. A pattern of inaccurate or misleading output from an AI tool **SHOULD** be reviewed and addressed. `std-ai-incident-traceability-02`

### Implements These Principles

- [AI Contribution Traceability](../../principles/engineering-practice/ai-assisted-engineering.md#ai-contribution-traceability)
