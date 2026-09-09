---
last_edited: 2026-09-09
---

# Prompt Data Handling

## Prohibited & Restricted Data

### Summary

Personally identifiable information (PII) is submitted to an AI tool only when the Approved Tooling Register marks it as allowed for that tool, and secrets are never submitted to an AI tool.

### Standards

1. `std-ai-prohibited-restricted-data-01` PII **MUST NOT** be submitted to an AI tool unless the Approved Tooling Register marks it as allowed for that tool.
2. `std-ai-prohibited-restricted-data-02` Secrets, credentials, API keys, access tokens, and cryptographic material **MUST NOT** be submitted to an AI tool under any circumstances.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md)

### Implements These Principles

- [Suitable AI Tools](../../principles/engineering-practice/ai-assisted-engineering.md#suitable-ai-tools)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)
- [Privacy-Protective Defaults](../../principles/security-privacy/data-privacy.md#privacy-protective-defaults)

## Data Minimisation

### Summary

Personally identifiable information (PII) submitted to an AI tool is limited to the minimum reasonably necessary for the task.

### Standards

1. `std-ai-data-minimisation-01` Prompts containing PII **SHOULD** include only the minimum data reasonably necessary for the task.
2. `std-ai-data-minimisation-02` Files, datasets, or repository content containing PII **SHOULD NOT** be submitted where a smaller, relevant excerpt is sufficient.
3. `std-ai-data-minimisation-03` Unrelated PII in the surrounding context **MUST** be removed or redacted before submission.

### Related Standards

- [AI Tooling Cost Management](ai-tooling-cost-management.md)

### Implements These Principles

- [Data Minimisation](../../principles/security-privacy/data-privacy.md#data-minimisation)

## De-identification & Synthetic Data

### Summary

Authorised use of personally identifiable information (PII) in prompts favours de-identified, masked, or synthetic data.

### Standards

1. `std-ai-de-identification-synthetic-data-01` For authorised use involving PII, prompt content **SHOULD** be de-identified, masked, or replaced with synthetic data unless the use case requires PII.
2. `std-ai-de-identification-synthetic-data-02` Synthetic or de-identified data **SHOULD** be used instead of production PII for AI-assisted testing, debugging, and documentation.

### Related Standards

- [Test Data Management](../quality-engineering/test-data-management.md)

### Implements These Principles

- [Synthetic & De-Identified Data](../../principles/security-privacy/data-privacy.md#synthetic-de-identified-data)
