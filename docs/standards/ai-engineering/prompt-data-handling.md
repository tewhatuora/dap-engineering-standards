# Prompt Data Handling

## Prohibited & Restricted Data

### Summary

Personal information enters an AI prompt only when the tool is explicitly authorised for that data, and secrets never enter a prompt.

### Standards

1. `std-ai-prohibited-restricted-data-01` Patient data, health information, and other personal information (PII) **MUST NOT** be submitted to an AI tool unless the tool is explicitly authorised for that data classification and use case.
2. `std-ai-prohibited-restricted-data-02` Secrets, credentials, API keys, access tokens, and cryptographic material **MUST NOT** be submitted to an AI tool under any circumstances.

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Data Minimisation

### Summary

A prompt containing personal or health data includes only the minimum data required for the task.

### Standards

1. `std-ai-data-minimisation-01` Prompts containing personal or health data **MUST** include only the minimum data reasonably necessary for the task.
2. `std-ai-data-minimisation-02` Whole files, datasets, or repositories **SHOULD NOT** be submitted where a smaller, relevant excerpt is sufficient.
3. `std-ai-data-minimisation-03` Unrelated sensitive content in the surrounding context **MUST** be removed or redacted before submission.

### Related Standards

- [AI Tooling Cost Management](ai-tooling-cost-management.md)

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## De-identification & Synthetic Data

### Summary

Health or personal data is de-identified or synthetic before it reaches a prompt, wherever feasible.

### Standards

1. `std-ai-de-identification-synthetic-data-01` Where health or personal data is relevant to a development task, it **SHOULD** be de-identified, synthetic, or masked before inclusion in a prompt.
2. `std-ai-de-identification-synthetic-data-02` Synthetic or de-identified data **SHOULD** be preferred over production data for AI-assisted testing, debugging, and documentation.

### Related Standards

- [Test Data Management](../quality-engineering/test-data-management.md)

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Vendor Data Use & Retention

### Summary

A vendor's use and retention of submitted data is governed by contractual terms.

### Standards

1. `std-ai-vendor-data-use-retention-01` Data submitted to an approved AI tool **MUST NOT** be used by the vendor to train shared or public models.
2. `std-ai-vendor-data-use-retention-02` Data submitted to an approved AI tool **MUST NOT** be made available to parties outside the organisation's agreement with the vendor.
3. `std-ai-vendor-data-use-retention-03` Data retention, storage location, and deletion for prompt content **MUST** be governed by the organisation's contractual terms with the vendor.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
