---
last_edited: 2026-09-22
---

# AI-Assisted Development

## Developer Accountability

### Summary

AI assistance does not transfer or reduce the submitting developer's accountability for the code.

### Standards

1. The developer who submits or merges code **MUST** remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation. `std-ai-developer-accountability-01`
2. AI tools **MUST NOT** be recorded or represented as the author of record. `std-ai-developer-accountability-02`
3. AI assistance **MUST NOT** justify reduced diligence, testing, or review effort. `std-ai-developer-accountability-03`

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)

## Human Oversight

### Summary

AI-generated output remains subject to developer understanding and human review before submission or delivery.

### Standards

1. Developers **MUST** review and understand AI-generated or AI-modified output before committing, merging, or deploying it. `std-ai-human-oversight-01`
2. Developers **MUST NOT** submit AI-generated code that they cannot explain, justify, or maintain. `std-ai-human-oversight-02`
3. AI tools **MUST NOT** be used unattended or autonomously to commit, approve, merge, or deploy code without human review. `std-ai-human-oversight-03`

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md#pre-submission-verification)

### Implements These Principles

- [Understanding Before Adoption](../../principles/engineering-practice/ai-assisted-engineering.md#understanding-before-adoption)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)
- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)

## Quality, Testing & Security

### Summary

AI-assisted code meets the same quality, testing, and security gates as any other change.

### Standards

1. Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance. `std-ai-quality-testing-security-01`
2. AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from quality gates, security scanning, or approval workflows required for the repository and change. `std-ai-quality-testing-security-02`
3. AI tools **MAY** be used to help generate automated tests; generated tests **MUST** be reviewed for correctness and coverage adequacy. `std-ai-quality-testing-security-03`
4. A test or quality check required for a change **MUST NOT** be removed, disabled, or weakened to obtain a passing result for an AI-assisted change. `std-ai-quality-testing-security-04`

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
- [AI Broadens What QA Checks](../../principles/quality/ai-assisted-quality-engineering.md#ai-broadens-what-qa-checks)
- [Independent Checks of AI Work and Evidence](../../principles/quality/ai-assisted-quality-engineering.md#independent-checks-of-ai-work-and-evidence)

## AI Agent Access

### Summary

An AI agent's access remains limited to what its current task requires and what is authorised for the target systems and data.

### Standards

1. Access granted to an AI agent **MUST** be read-only unless its task requires write access that is authorised for the target systems and data. `std-ai-agent-access-01`
2. Access granted to an AI agent **MUST** be limited to the systems, data, and actions required for its task. `std-ai-agent-access-02`
3. Temporary access granted to an AI agent **MUST** be revoked when its task ends. `std-ai-agent-access-03`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)

### Implements These Principles

- [Bounded Agent Impact](../../principles/engineering-practice/ai-assisted-engineering.md#bounded-agent-impact)
- [Least Privilege](../../principles/security-privacy/security-engineering.md#least-privilege)
- [Controlled and Traceable AI Agents](../../principles/quality/ai-assisted-quality-engineering.md#controlled-and-traceable-ai-agents)

## AI Agent Change Containment

### Summary

An AI agent is stopped when it acts outside its delegated task, and any unintended change it makes is promptly contained.

### Standards

1. An AI agent's execution **MUST** be stopped when it is identified as acting outside its delegated task. `std-ai-agent-change-containment-01`
2. An unintended change made by an AI agent **MUST** be isolated or reversed as soon as it is identified. `std-ai-agent-change-containment-02`

### Implements These Principles

- [Bounded Agent Impact](../../principles/engineering-practice/ai-assisted-engineering.md#bounded-agent-impact)
- [Controlled and Traceable AI Agents](../../principles/quality/ai-assisted-quality-engineering.md#controlled-and-traceable-ai-agents)

## High-Risk Use

### Summary

AI-generated code affecting a high-risk function receives domain-expert review before adoption.

### Standards

1. AI-generated code **MUST** be classified as high-risk when it implements or modifies a security control, clinical decision, patient-safety function, or regulatory requirement. `std-ai-high-risk-use-01`
2. AI-generated code classified as high-risk, together with its AI-generated tests, **MUST** be reviewed by a reviewer with expertise in the affected function or requirement. `std-ai-high-risk-use-02`

### Related Standards

- [Code Review](../code-implementation/code-review.md#risk-based-review)

### Implements These Principles

- [Scrutiny Based on Impact](../../principles/engineering-practice/ai-assisted-engineering.md#scrutiny-based-on-impact)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)
- [Human Exploration and Expert Judgement](../../principles/quality/ai-assisted-quality-engineering.md#human-exploration-and-expert-judgement)

## Clinical Decisions & Advice

### Summary

Authorised and qualified people retain responsibility for clinical decisions and advice informed by AI-generated output.

### Standards

1. A clinical decision informed by AI-generated output **MUST** be made by a person authorised and qualified to make that decision. `std-ai-clinical-decisions-advice-01`
2. AI-generated output **MUST** be reviewed by a person with relevant clinical expertise before it is presented to a clinician as clinical advice. `std-ai-clinical-decisions-advice-02`

### Implements These Principles

- [Human Clinical Judgement](../../principles/engineering-practice/ai-assisted-engineering.md#human-clinical-judgement)
- [Scrutiny Based on Impact](../../principles/engineering-practice/ai-assisted-engineering.md#scrutiny-based-on-impact)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)

## Intellectual Property & Licensing

### Summary

AI-assisted work uses third-party material lawfully and preserves the confidentiality of information submitted to AI tools.

### Standards

1. Developers **SHOULD** inspect AI-generated code for evidence that it reproduces third-party material before inclusion. `std-ai-intellectual-property-licensing-01`
2. Developers **MUST NOT** adopt identified third-party material unless its licence permits the intended use and its conditions are met. `std-ai-intellectual-property-licensing-02`
3. Developers **MUST NOT** submit confidential or proprietary information to an AI tool unless it is authorised to receive that information and its terms prevent unapproved retention or reuse. `std-ai-intellectual-property-licensing-03`

### Implements These Principles

- [Intellectual Property](../../principles/engineering-practice/ai-assisted-engineering.md#intellectual-property)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)
