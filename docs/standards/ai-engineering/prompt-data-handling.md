---
last_edited: 2026-09-10
---

# Prompt Data Handling

## Prohibited & Restricted Data

### Summary

AI tools receive only data permitted by their authorisation and the organisation's data-handling restrictions.

### Standards

1. `std-ai-prohibited-restricted-data-01` PII **MUST NOT** be submitted to an AI tool unless the Approved Tooling Register marks it as allowed for that tool.
2. `std-ai-prohibited-restricted-data-02` An NHI identifier that identifies a real person **MUST NOT** be submitted to an AI tool.
3. `std-ai-prohibited-restricted-data-03` Secrets, credentials, API keys, access tokens, and cryptographic material **MUST NOT** be submitted to an AI tool under any circumstances.
4. `std-ai-prohibited-restricted-data-04` A production export, database dump, or log containing PII **MUST NOT** be submitted to an AI tool.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md#approved-tools)

### Implements These Principles

- [Suitable AI Tools](../../principles/engineering-practice/ai-assisted-engineering.md#suitable-ai-tools)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)
- [Privacy-Protective Defaults](../../principles/security-privacy/data-privacy.md#privacy-protective-defaults)

## Data Minimisation

### Summary

PII used in authorised AI-assisted work is limited to the minimum reasonably necessary for the task.

### Standards

1. `std-ai-data-minimisation-01` Prompts containing PII **SHOULD** include only the minimum data reasonably necessary for the task.
2. `std-ai-data-minimisation-02` Files, datasets, or repository content containing PII **SHOULD NOT** be submitted where a smaller, relevant excerpt is sufficient.
3. `std-ai-data-minimisation-03` Unrelated PII in the surrounding context **MUST** be removed or redacted before submission.

### Implements These Principles

- [Data Minimisation](../../principles/security-privacy/data-privacy.md#data-minimisation)

## De-identification & Synthetic Data

### Summary

PII used in authorised AI-assisted work is kept in the least identifiable form that meets the task's needs.

### Standards

1. `std-ai-de-identification-synthetic-data-01` For authorised use involving PII, prompt content **SHOULD** be de-identified, masked, or replaced with synthetic data unless the use case requires PII.
2. `std-ai-de-identification-synthetic-data-02` Synthetic or de-identified data **SHOULD** be used instead of production PII for AI-assisted testing, debugging, and documentation.

### Related Standards

- [Test Data Management](../quality-engineering/test-data-management.md#data-sources)

### Implements These Principles

- [Synthetic & De-Identified Data](../../principles/security-privacy/data-privacy.md#synthetic-de-identified-data)
