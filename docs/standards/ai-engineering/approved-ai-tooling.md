---
last_edited: 2026-09-14
---

# Approved AI Tooling

## Approved Tools

### Summary

AI tool use is limited to listed tools and their recorded data authorisations.

### Standards

1. A person **MUST NOT** use an AI tool outside the Approved Tooling Register. `std-ai-approved-tools-01`
2. A person **MUST NOT** submit personal or health information to an AI tool unless the register marks it as allowed. `std-ai-approved-tools-02`

    | Tool | Capability Category | PII or PHI Submission Authorised |
    |---|---|:---:|
    | GitHub Copilot | AI-Assisted Development Tool | ❌ |
    | GitHub Copilot Code Review | Code Review Agent | ❌ |
    | AWS Kiro | Spec-Driven Development Agent | ❌ |
    | Datadog Bits AI SRE | Observability & Incident Agent | ❌ |

### Related Standards

- [Prompt Data Handling](prompt-data-handling.md#prohibited-restricted-data)

### Implements These Principles

- [AI Tool Terms and Controls](../../principles/engineering-practice/ai-assisted-engineering.md#ai-tool-terms-and-controls)
- [Privacy by Default](../../principles/security-privacy/data-privacy.md#privacy-by-default)

## Licensing & Provisioning

### Summary

AI tooling access uses an individually attributable, organisation-provisioned licence tied to an organisational identity.

### Standards

1. AI tools **MUST** be used only under licences provisioned and administered by Health New Zealand and tied to the user's organisational identity. `std-ai-licensing-provisioning-01`
2. Personal, free-tier, trial, or other independently obtained accounts **MUST NOT** be used with AI tools, even where the tool is on the Approved Tooling Register. `std-ai-licensing-provisioning-02`

### Implements These Principles

- [Organisation Managed Access](../../principles/engineering-practice/ai-assisted-engineering.md#organisation-managed-access)
