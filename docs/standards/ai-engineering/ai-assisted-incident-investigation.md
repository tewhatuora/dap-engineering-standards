---
last_edited: 2026-10-27
---

# AI-Assisted Incident Investigation {: .standard-references }

## Standardised Telemetry

### Summary

AI tools and human responders use the same telemetry, without separate instrumentation or exports for AI-assisted incident investigation.

### Standards

1. A service **MUST NOT** maintain bespoke instrumentation or telemetry exports designed specifically to support AI-assisted incident investigation. `std-ai-standardised-telemetry-01`
2. An AI tool used for incident investigation **MUST** draw on telemetry from the same observability platform used by human responders. `std-ai-standardised-telemetry-02`

### Related Standards

- [Telemetry Instrumentation](../operations-observability/telemetry-instrumentation.md#instrumentation-standards)
- [Distributed Tracing](../operations-observability/distributed-tracing.md#trace-context)
- [Observability Platform Integration](../operations-observability/observability-platform-integration.md#telemetry-ingestion)

### Implements These Principles

- [Central Operational Telemetry](../../principles/reliability-operations/observability.md#central-operational-telemetry)

## Human Verification & Approval

### Summary

AI-assisted incident remediation is applied or approved by a human responder.

### Standards

1. Before using an AI-generated diagnosis to guide high-impact remediation, a responder **SHOULD** review the logs, metrics, traces or change records cited by the tool. `std-ai-human-verification-approval-01`
2. A remediation or configuration change proposed by an AI tool **MUST** be applied by a responder or have a responder's approval before it is applied. `std-ai-human-verification-approval-02`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)

### Implements These Principles

- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)
- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)
- [Independent Checks of AI Work and Evidence](../../principles/quality/ai-assisted-quality-engineering.md#independent-checks-of-ai-work-and-evidence)

## Incident Traceability

### Summary

Teams record AI-generated findings and advice used in incident response and should review and address recurring inaccuracies.

### Standards

1. AI-generated findings or advice used in incident response **MUST** be recorded in the incident record, directly or by linking to retained findings. `std-ai-incident-traceability-01`
2. Engineers **SHOULD** review recurring errors in AI-generated findings and provide corrective feedback or update the tool's context or configuration. `std-ai-incident-traceability-02`

### Implements These Principles

- [AI Contribution Traceability](../../principles/engineering-practice/ai-assisted-engineering.md#ai-contribution-traceability)
- [Recurring Problems Drive Prevention](../../principles/quality/quality-intelligence-improvement.md#recurring-problems-drive-prevention)
