---
last_edited: 2026-09-11
---

# AI-Assisted Development

## Developer Accountability

### Summary

AI assistance does not transfer or reduce the submitting developer's accountability for the code.

### Standards

1. `std-ai-developer-accountability-01` The developer who submits or merges code **MUST** remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation.
2. `std-ai-developer-accountability-02` AI tools **MUST NOT** be recorded or represented as the author of record.
3. `std-ai-developer-accountability-03` AI assistance **MUST NOT** justify reduced diligence, testing, or review effort.

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)

## Human Oversight

### Summary

AI-generated output remains subject to developer understanding and human review before submission or delivery.

### Standards

1. `std-ai-human-oversight-01` Developers **MUST** review and understand AI-generated or AI-modified output before committing, merging, or deploying it.
2. `std-ai-human-oversight-02` Developers **MUST NOT** submit AI-generated code that they cannot explain, justify, or maintain.
3. `std-ai-human-oversight-03` AI tools **MUST NOT** be used unattended or autonomously to commit, approve, merge, or deploy code without human review.

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md#pre-submission-verification)

### Implements These Principles

- [Understanding Before Adoption](../../principles/engineering-practice/ai-assisted-engineering.md#understanding-before-adoption)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)

## Quality, Testing & Security

### Summary

AI-assisted code meets the same quality, testing, and security gates as any other change.

### Standards

1. `std-ai-quality-testing-security-01` Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance.
2. `std-ai-quality-testing-security-02` AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from quality gates, security scanning, or approval workflows required for the repository and change.
3. `std-ai-quality-testing-security-03` AI tools **MAY** be used to help generate automated tests; generated tests **MUST** be reviewed for correctness and coverage adequacy.
4. `std-ai-quality-testing-security-04` A test or quality check required for a change **MUST NOT** be removed, disabled, or weakened to obtain a passing result for an AI-assisted change.

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md#pre-submission-verification)
- [Code Style & Formatting](../code-implementation/code-style-formatting.md#codebase-coverage)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md#linting-pipeline-gate)
- [Static Code Analysis](../code-implementation/static-code-analysis.md#analysis-pipeline-gate)
- [Unit Testing](../quality-engineering/unit-testing.md#test-coverage)
- [Application Security Testing](../quality-engineering/application-security-testing.md#static-testing-sast)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## AI Agent Access

### Summary

An AI agent's access remains limited to what its current task requires and what is authorised for the target systems and data.

### Standards

1. `std-ai-agent-access-01` Access granted to an AI agent **MUST** be read-only unless its task requires write access that is authorised for the target systems and data.
2. `std-ai-agent-access-02` Access granted to an AI agent **MUST** be limited to the systems, data, and actions required for its task.
3. `std-ai-agent-access-03` Temporary access granted to an AI agent **MUST** be revoked when its task ends.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)

### Implements These Principles

- [Bounded Agent Impact](../../principles/engineering-practice/ai-assisted-engineering.md#bounded-agent-impact)
- [Least Privilege](../../principles/security-privacy/security-engineering.md#least-privilege)

## AI Agent Change Containment

### Summary

An AI agent is stopped when it acts outside its delegated task, and any unintended change it makes is promptly contained.

### Standards

1. `std-ai-agent-change-containment-01` An AI agent's execution **MUST** be stopped when it is identified as acting outside its delegated task.
2. `std-ai-agent-change-containment-02` An unintended change made by an AI agent **MUST** be isolated or reversed as soon as it is identified.

### Implements These Principles

- [Bounded Agent Impact](../../principles/engineering-practice/ai-assisted-engineering.md#bounded-agent-impact)

## High-Risk Use

### Summary

AI-generated code affecting a high-risk function receives domain-expert review before adoption.

### Standards

1. `std-ai-high-risk-use-01` AI-generated code **MUST** be classified as high-risk when it implements or modifies a security control, clinical decision, patient-safety function, or regulatory requirement.
2. `std-ai-high-risk-use-02` AI-generated code classified as high-risk, together with its AI-generated tests, **MUST** be reviewed by a reviewer with expertise in the affected function or requirement.

### Related Standards

- [Code Review](../code-implementation/code-review.md#risk-based-review)

### Implements These Principles

- [Scrutiny Based on Impact](../../principles/engineering-practice/ai-assisted-engineering.md#scrutiny-based-on-impact)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## Clinical Decisions & Advice

### Summary

Authorised and qualified people retain responsibility for clinical decisions and advice informed by AI-generated output.

### Standards

1. `std-ai-clinical-decisions-advice-01` A clinical decision informed by AI-generated output **MUST** be made by a person authorised and qualified to make that decision.
2. `std-ai-clinical-decisions-advice-02` AI-generated output **MUST** be reviewed by a person with relevant clinical expertise before it is presented to a clinician as clinical advice.

### Implements These Principles

- [Human Clinical Judgement](../../principles/engineering-practice/ai-assisted-engineering.md#human-clinical-judgement)
- [Scrutiny Based on Impact](../../principles/engineering-practice/ai-assisted-engineering.md#scrutiny-based-on-impact)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)

## Intellectual Property & Licensing

### Summary

AI-assisted work uses third-party material lawfully and preserves the confidentiality of information submitted to AI tools.

### Standards

1. `std-ai-intellectual-property-licensing-01` Developers **SHOULD** inspect AI-generated code for evidence that it reproduces third-party material before inclusion.
2. `std-ai-intellectual-property-licensing-02` Developers **MUST NOT** adopt identified third-party material unless its licence permits the intended use and its conditions are met.
3. `std-ai-intellectual-property-licensing-03` Developers **MUST NOT** submit confidential or proprietary information to an AI tool unless it is authorised to receive that information and its terms prevent unapproved retention or reuse.

### Implements These Principles

- [Intellectual Property](../../principles/engineering-practice/ai-assisted-engineering.md#intellectual-property)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)
