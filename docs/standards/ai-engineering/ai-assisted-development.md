# AI-Assisted Development

Developers remain fully accountable for code produced with AI assistance.

## Developer Accountability

### Summary

The submitting developer remains fully accountable for AI-assisted code.

### Standards

1. `std-ai-developer-accountability-01` The developer who submits or merges code **MUST** remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation.
2. `std-ai-developer-accountability-02` AI tools **MUST NOT** be recorded or represented as the author of record.
3. `std-ai-developer-accountability-03` The submitting human developer **MUST** retain authorship and accountability for the code.
4. `std-ai-developer-accountability-04` AI assistance **MUST NOT** justify reduced diligence, testing, or review effort.

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Human Oversight

### Summary

A developer reviews and understands AI-generated output before it is committed, merged, or deployed.

### Standards

1. `std-ai-human-oversight-01` Developers **MUST** review and understand AI-generated or AI-modified output before committing, merging, or deploying it.
2. `std-ai-human-oversight-02` Developers **MUST NOT** submit AI-generated code that they cannot explain, justify, or maintain.
3. `std-ai-human-oversight-03` AI tools **MUST NOT** be used unattended or autonomously to commit, approve, merge, or deploy code without human review.

### Related Standards

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Quality, Testing & Security

### Summary

AI-assisted code meets the same quality, testing, and security gates as any other change.

### Standards

1. `std-ai-quality-testing-security-01` Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance.
2. `std-ai-quality-testing-security-02` AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from applicable quality gates, security scanning, or approval workflows.
3. `std-ai-quality-testing-security-03` AI tools **MAY** be used to help generate automated tests; generated tests **MUST** be reviewed for correctness and coverage adequacy.

### Related Standards

- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Unit Testing](../quality-engineering/unit-testing.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## High-Risk Use

### Summary

AI-generated code receives extra scrutiny in security-critical, safety-critical, or regulatory-critical work.

### Standards

1. `std-ai-high-risk-use-01` AI-generated code **MUST** be subject to heightened scrutiny in security-critical, safety-critical, or regulatory-critical contexts, including authentication, authorisation, cryptography, and clinical or patient-safety logic.
2. `std-ai-high-risk-use-02` Teams **SHOULD** restrict unsupervised use of AI-generated implementations in these contexts.
3. `std-ai-high-risk-use-03` Where used, the output **MUST** undergo additional review by personnel with relevant domain expertise.

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Intellectual Property & Licensing

### Summary

Developers check AI-generated code for copied third-party material and do not grant AI tool providers rights to reuse or retain proprietary source code.

### Standards

1. `std-ai-intellectual-property-licensing-01` Developers **MUST** review AI-generated code for indicators of copied third-party material, such as retained licence headers or attribution comments, before inclusion.
2. `std-ai-intellectual-property-licensing-02` Confidential or proprietary source code **MUST NOT** be submitted to an AI tool in a manner that grants the tool provider rights to reuse or retain it.

### Related Standards

- [Prompt Data Handling](prompt-data-handling.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
