# AI-Assisted Development

## Summary

> AI can write code, but the submitting developer remains fully accountable for it.

## Standards

### Developer Accountability & Ownership

Accountability for AI-assisted code always stays with the submitting developer, regardless of how it was produced.

1. The developer who submits or merges code **MUST** remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation.
2. AI tools **MUST NOT** be recorded or represented as the author of record; authorship and accountability **MUST** always attach to the submitting human developer.
3. AI assistance **MUST NOT** justify reduced diligence, testing, or review effort.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Human Oversight

A developer reviews and understands AI-generated output before it is committed, merged, or deployed.

1. Developers **MUST** review and understand AI-generated or AI-modified output before committing, merging, or deploying it.
2. Developers **MUST NOT** submit AI-generated code that they cannot explain, justify, or maintain.
3. AI tools **MUST NOT** be used unattended or autonomously to commit, approve, merge, or deploy code without human review.

#### References

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md)

### Quality, Testing & Security Parity

AI-assisted code meets the same quality, testing, and security gates as any other change.

1. Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance.
2. AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from applicable quality gates, security scanning, or approval workflows.
3. AI tools **MAY** be used to help generate automated tests; generated tests **MUST** be reviewed for correctness and coverage adequacy, not merely presence.

#### References

- [Coding Standards & Formatting](../code-implementation/coding-standards-formatting.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Unit Testing](../quality-engineering/unit-testing.md)

### Restricted & High-Risk Use Cases

AI-generated code receives extra scrutiny in security-critical, safety-critical, or regulatory-critical work.

1. AI-generated code **MUST** be subject to heightened scrutiny in security-critical, safety-critical, or regulatory-critical contexts, including authentication, authorisation, cryptography, and clinical or patient-safety logic.
2. Teams **SHOULD** restrict unsupervised use of AI-generated implementations in these contexts; where used, the output **MUST** undergo additional review by personnel with relevant domain expertise.

#### References

- [Secure Software Development Practices](../security-identity/secure-software-development-practices.md)

### Intellectual Property & Licensing Risk

Check AI-generated code for copied third-party material, and keep proprietary code out of a tool's reuse rights.

1. Developers **MUST** review AI-generated code for indicators of copied third-party material, such as retained licence headers or attribution comments, before inclusion.
2. Confidential or proprietary source code **MUST NOT** be submitted to an AI tool in a manner that grants the tool provider rights to reuse or retain it.

#### References

- [Prompt Data Handling](prompt-data-handling.md)
