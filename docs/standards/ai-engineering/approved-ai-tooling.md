---
last_edited: 2026-10-27
---

# Approved AI Tooling {: .standard-references }

## Approved Tools

### Summary

AI tools may be used only as authorised in the Approved Tooling Register.

### Standards

1. A person **MUST NOT** use an AI tool unless it is listed in the [Approved Tooling Register](#approved-tooling-register). `std-ai-approved-tools-01`
2. A person **MUST NOT** submit PII or PHI to an AI tool unless the register marks it as allowed and the submission is not prohibited by [Prompt Data Handling](prompt-data-handling.md#prohibited-restricted-data). `std-ai-approved-tools-02`

#### Approved Tooling Register

| Tool | Capability Category | PII or PHI Submission Authorised |
|---|---|:---:|
| GitHub Copilot | AI-Assisted Development Tool | ❌ |
| GitHub Copilot Code Review | Code Review Tool | ❌ |
| AWS Kiro | Spec-Driven Development Agent | ❌ |
| Datadog Bits AI SRE | Observability & Incident Agent | ❌ |

### Related Standards

- [Prompt Data Handling: Prohibited & Restricted Data](prompt-data-handling.md#prohibited-restricted-data)

### Implements These Principles

- [AI Tool Terms and Controls](../../principles/engineering-practice/ai-assisted-engineering.md#ai-tool-terms-and-controls)

## Licensing & Provisioning

### Summary

AI tooling access uses an individually attributable, organisation-provisioned licence tied to an organisational identity.

### Standards

1. AI tools **MUST** be used only under licences provisioned and administered by Health New Zealand and tied to the user's organisational identity. `std-ai-licensing-provisioning-01`
2. Personal, free-tier, trial, or other independently obtained accounts **MUST NOT** be used, even where the tool is on the [Approved Tooling Register](#approved-tooling-register). `std-ai-licensing-provisioning-02`

### Implements These Principles

- [Organisation Managed Access](../../principles/engineering-practice/ai-assisted-engineering.md#organisation-managed-access)
