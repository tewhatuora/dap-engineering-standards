---
last_edited: 2026-10-27
---

# Prompt Data Handling {: .standard-references }

## Prohibited & Restricted Data

### Summary

AI submissions must exclude prohibited data and meet the conditions for restricted data.

### Standards

#### Prohibited Data

1. Secrets, credentials, API keys, access tokens, and cryptographic material **MUST NOT** be submitted to an AI tool under any circumstances. `std-ai-prohibited-restricted-data-01`
2. An NHI identifier that identifies a real person **MUST NOT** be submitted to an AI tool. `std-ai-prohibited-restricted-data-02`

#### Restricted Data

3. PII or PHI **MUST NOT** be submitted to an AI tool unless the [Approved Tooling Register](approved-ai-tooling.md#approved-tooling-register) marks it as allowed for that tool. `std-ai-prohibited-restricted-data-03`
4. Developers **MUST NOT** submit confidential or proprietary information to an AI tool unless it is authorised to receive that information and its terms prevent unapproved retention or reuse. `std-ai-intellectual-property-licensing-04`

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md#approved-tools)

### Implements These Principles

- [AI Tool Terms and Controls](../../principles/engineering-practice/ai-assisted-engineering.md#ai-tool-terms-and-controls)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)

## Data Minimisation

### Summary

Where submission of PII or PHI to an AI tool is authorised, only the minimum needed for the task should be included, and unrelated information must be removed or redacted before submission.

### Standards

1. Prompts containing PII or PHI **SHOULD** include only the minimum data reasonably necessary for the task. `std-ai-data-minimisation-01`
2. Unrelated PII or PHI in the surrounding context **MUST** be removed or redacted before submission. `std-ai-data-minimisation-02`
3. Entire files or datasets containing PII or PHI **SHOULD NOT** be submitted where a smaller, relevant excerpt is sufficient. `std-ai-data-minimisation-03`

### Implements These Principles

- [Data Minimisation](../../principles/security-privacy/data-privacy.md#data-minimisation)

## De-identification & Synthetic Data

### Summary

Synthetic, de-identified, or masked data should replace identifiable PII or PHI where the task does not require it.

### Standards

1. For authorised use involving PII or PHI, prompt content **SHOULD** be de-identified, masked, or replaced with synthetic data unless the use case requires identifiable PII or PHI. `std-ai-de-identification-synthetic-data-01`
2. Synthetic or de-identified data **MUST** be used instead of PII or PHI for AI-assisted testing, debugging, and documentation. `std-ai-de-identification-synthetic-data-02`

### Related Standards

- [Test Data Management](../quality-engineering/test-data-management.md#data-sources)

### Implements These Principles

- [Synthetic and De-Identified Data](../../principles/security-privacy/data-privacy.md#synthetic-and-de-identified-data)
