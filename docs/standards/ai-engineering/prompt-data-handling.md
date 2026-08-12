# Prompt Data Handling

## Objective

This standard defines requirements for data, code, and content submitted as input ("prompts") to AI tools, including prohibited data categories, minimisation, vendor data use and retention constraints, and incident handling. It ensures AI tool use does not result in unauthorised disclosure or retention of sensitive, personal, or confidential information.

## Standards

### Prohibited & Restricted Data

These requirements prohibit submitting certain categories of data to an AI tool at all.

1. Patient data, health information, and other personal information (PII) must not be submitted to an AI tool unless the tool is explicitly authorised for that data classification and use case.
2. Secrets, credentials, API keys, access tokens, and cryptographic material must not be submitted to an AI tool under any circumstances.

#### References

- [Approved AI Tooling](approved-ai-tooling.md)

### Data Minimisation

These requirements keep what is submitted to an AI tool limited to the minimum a task needs.

1. Prompts must include only the minimum data reasonably necessary for the task.
2. Whole files, datasets, or repositories should not be submitted where a smaller, relevant excerpt is sufficient.
3. Unrelated sensitive content in the surrounding context must be removed or redacted before submission.

### Vendor Data Use & Retention

These requirements govern how a vendor may use and retain data submitted to an AI tool.

1. Data submitted to an approved AI tool must not be used by the vendor to train shared or public models, or made available to parties outside the organisation's agreement with the vendor.
2. Data retention, storage location, and deletion for prompt content must be governed by the organisation's contractual terms with the vendor.
3. Contractual confirmation of data use and retention terms must be in place before a tool is approved for use.

### De-identification Expectations

These requirements prefer de-identified or synthetic data over real personal or health data in a prompt.

1. Where health or personal data is relevant to a development task, it must be de-identified, synthetic, or masked before inclusion in a prompt, wherever feasible.
2. Synthetic or de-identified data must be preferred over production data for AI-assisted testing, debugging, and documentation.

### Incident Handling for Prompt Data Exposure

These requirements treat a prompt data exposure as a security incident requiring formal handling.

1. A suspected or confirmed submission of prohibited data to an AI tool must be reported and handled as a security incident.
2. Personnel must not remediate a suspected prompt data exposure before it has been reported as a security incident.
