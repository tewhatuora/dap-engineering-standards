# Prompt Data Handling

## Summary

> Treat every prompt as a data disclosure; never include secrets, patient data, or more than a task needs.

## Standards

### Prohibited & Restricted Data

These requirements set out how certain categories of data are prohibited or restricted from submission to an AI tool.

1. Patient data, health information, and other personal information (PII) **MUST NOT** be submitted to an AI tool unless the tool is explicitly authorised for that data classification and use case.
2. Secrets, credentials, API keys, access tokens, and cryptographic material **MUST NOT** be submitted to an AI tool under any circumstances.

#### References

- [Approved AI Tooling](approved-ai-tooling.md)

### Data Minimisation

These requirements address how the data included in a prompt is kept to the minimum a task needs.

1. Prompts **MUST** include only the minimum data reasonably necessary for the task.
2. Whole files, datasets, or repositories **SHOULD NOT** be submitted where a smaller, relevant excerpt is sufficient.
3. Unrelated sensitive content in the surrounding context **MUST** be removed or redacted before submission.

### Vendor Data Use & Retention

These requirements describe how data submitted to an AI tool is used and retained by a vendor.

1. Data submitted to an approved AI tool **MUST NOT** be used by the vendor to train shared or public models, or made available to parties outside the organisation's agreement with the vendor.
2. Data retention, storage location, and deletion for prompt content **MUST** be governed by the organisation's contractual terms with the vendor.
3. Contractual confirmation of data use and retention terms **MUST** be in place before a tool is approved for use.

### De-identification & Synthetic Data

These requirements guide how personal or health data is de-identified or replaced with synthetic data in AI-assisted work.

1. Where health or personal data is relevant to a development task, it **MUST** be de-identified, synthetic, or masked before inclusion in a prompt, wherever feasible.
2. Synthetic or de-identified data **MUST** be preferred over production data for AI-assisted testing, debugging, and documentation.

### Incident Handling

These requirements cover how a suspected or confirmed prompt data exposure is reported and handled as a security incident.

1. A suspected or confirmed submission of prohibited data to an AI tool **MUST** be reported and handled as a security incident.
2. Personnel **MUST NOT** remediate a suspected prompt data exposure before it has been reported as a security incident.
