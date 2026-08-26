# AI-Assisted Incident Investigation

## Summary

> AI-assisted incident investigation uses approved tools and standard telemetry, with human verification and traceable outcomes.

## Standards

### AI Tool Approval

This requirement sets out how an AI tool used to investigate operational telemetry is subject to the same approval process as any other AI tool.

1. An AI tool used to analyse a service's telemetry or otherwise assist in incident investigation **MUST** be listed on the organisation's Approved Tooling Register before use.

#### References

- [Approved AI Tooling](approved-ai-tooling.md)

### Standardised Telemetry as a Precondition

These requirements describe how an AI tool draws on the same telemetry every other consumer relies on.

1. An AI tool **MUST** draw on telemetry produced to the organisation's established instrumentation and semantic standards; a service **MUST NOT** maintain a separate or altered telemetry export to suit that tool.
2. Such a tool **SHOULD** be integrated through the organisation's established observability platform, rather than a bespoke, per-service integration, so it can draw on telemetry from every service a transaction touches.

#### References

- [Telemetry Instrumentation Standards](../operations-observability/telemetry-instrumentation-standards.md)
- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)

### Human Oversight

These requirements guide how a person remains accountable for verifying an AI tool's diagnosis and for any action taken in response to it.

1. An AI tool's diagnosis of an incident's likely cause **MUST** be independently verified by a responder before being relied on to guide a remediation action.
2. An AI agent **MUST NOT** autonomously execute a remediation or configuration change in response to an incident; a person **MUST** carry out or approve the action before it takes effect.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Incident Traceability

These requirements cover how an AI tool's contribution to an incident is captured so its accuracy can be reviewed afterward.

1. Where an AI tool materially contributed to an incident's diagnosis or resolution, that contribution **MUST** be recorded alongside the incident's other response detail.
2. A pattern of inaccurate or misleading output from an AI tool **SHOULD** be reviewed and addressed, such as by adjusting its scope or inputs.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)
