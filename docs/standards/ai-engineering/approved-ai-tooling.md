---
last_edited: 2026-09-09
---

# Approved AI Tooling

## Approved Tools

### Summary

AI tool use is limited to listed tools and their recorded data authorisations.

### Standards

1. `std-ai-approved-tools-01` Personnel **MUST NOT** use AI tools outside the Approved Tooling Register.
2. `std-ai-approved-tools-02` Personnel **MUST NOT** submit personally identifiable information (PII) to an AI tool unless the register marks it as allowed.

    | Tool | Capability Category | PII Submission Authorised |
    |---|---|:---:|
    | GitHub Copilot | AI-Assisted Development Tool | ❌ |
    | GitHub Copilot Code Review | Code Review Agent | ❌ |
    | AWS Kiro | Spec-Driven Development Agent | ❌ |
    | Datadog Bits AI SRE | Observability & Incident Agent | ❌ |

### Related Standards

- [Prompt Data Handling](prompt-data-handling.md)

### Implements These Principles

- [Suitable AI Tools](../../principles/engineering-practice/ai-assisted-engineering.md#suitable-ai-tools)
- [Privacy-Protective Defaults](../../principles/security-privacy/data-privacy.md#privacy-protective-defaults)

## Licensing & Provisioning

### Summary

AI tooling access uses an individually attributable, organisation-provisioned licence tied to an organisational identity.

### Standards

1. `std-ai-licensing-provisioning-01` AI tools **MUST** be used only under licences provisioned and administered by Health New Zealand and tied to the individual's organisational identity.
2. `std-ai-licensing-provisioning-02` Personal, free-tier, trial, or other independently obtained accounts **MUST NOT** be used with AI tools, even where the tool is on the Approved Tooling Register.

### Implements These Principles

- [Organisation-Controlled Access](../../principles/engineering-practice/ai-assisted-engineering.md#organisation-controlled-access)
