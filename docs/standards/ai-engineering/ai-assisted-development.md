---
last_edited: 2026-09-09
---

# AI-Assisted Development

## Developer Accountability

### Summary

The submitting developer remains fully accountable for AI-assisted code, AI tools are not authors of record, and AI assistance does not reduce diligence, testing, or review.

### Standards

1. `std-ai-developer-accountability-01` The developer who submits or merges code **MUST** remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation.
2. `std-ai-developer-accountability-02` AI tools **MUST NOT** be recorded or represented as the author of record.
3. `std-ai-developer-accountability-03` AI assistance **MUST NOT** justify reduced diligence, testing, or review effort.

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)

## Human Oversight

### Summary

Developers understand and can maintain AI-generated output before it is submitted, committed, merged, or deployed, and AI tools do not perform those actions without human review.

### Standards

1. `std-ai-human-oversight-01` Developers **MUST** review and understand AI-generated or AI-modified output before committing, merging, or deploying it.
2. `std-ai-human-oversight-02` Developers **MUST NOT** submit AI-generated code that they cannot explain, justify, or maintain.
3. `std-ai-human-oversight-03` AI tools **MUST NOT** be used unattended or autonomously to commit, approve, merge, or deploy code without human review.

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md)

### Implements These Principles

- [Understanding Before Adoption](../../principles/engineering-practice/ai-assisted-engineering.md#understanding-before-adoption)
- [Automation and Human Judgement](../../principles/engineering-practice/automation.md#automation-and-human-judgement)

## Quality, Testing & Security

### Summary

AI-assisted code meets the same quality, testing, and security gates as any other change.

### Standards

1. `std-ai-quality-testing-security-01` Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance.
2. `std-ai-quality-testing-security-02` AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from applicable quality gates, security scanning, or approval workflows.
3. `std-ai-quality-testing-security-03` AI tools **MAY** be used to help generate automated tests; generated tests **MUST** be reviewed for correctness and coverage adequacy.

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md)
- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Application Security Testing](../quality-engineering/application-security-testing.md)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Automation and Human Judgement](../../principles/engineering-practice/automation.md#automation-and-human-judgement)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## High-Risk Use

### Summary

AI-generated code receives extra scrutiny in security-critical, safety-critical, or regulatory-critical work.

### Standards

1. `std-ai-high-risk-use-01` AI-generated code **MUST** be subject to heightened scrutiny in security-critical, safety-critical, or regulatory-critical contexts, including authentication, authorisation, cryptography, and clinical or patient-safety logic.
2. `std-ai-high-risk-use-02` AI-generated code used in a security-critical, safety-critical, or regulatory-critical context **MUST** undergo additional review by personnel with relevant domain expertise.

### Related Standards

- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Risk-Proportionate Scrutiny](../../principles/engineering-practice/ai-assisted-engineering.md#risk-proportionate-scrutiny)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## Intellectual Property & Licensing

### Summary

Developers check AI-generated code for copied third-party material and withhold confidential or proprietary source code from AI tools whose terms permit its reuse or retention.

### Standards

1. `std-ai-intellectual-property-licensing-01` Developers **SHOULD** review AI-generated code for indicators of copied third-party material, such as retained licence headers or attribution comments, before inclusion.
2. `std-ai-intellectual-property-licensing-02` Confidential or proprietary source code **MUST NOT** be submitted to an AI tool whose terms permit the provider to reuse or retain that code.

### Implements These Principles

- [Intellectual Property](../../principles/engineering-practice/ai-assisted-engineering.md#intellectual-property)
- [Confidentiality](../../principles/engineering-practice/ai-assisted-engineering.md#confidentiality)
