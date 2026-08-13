# AI-Assisted Development

## Objective

This standard defines requirements for using artificial intelligence (AI) coding assistants and generative AI tools across the software development lifecycle, including producing, modifying, testing, and documenting software. It ensures AI-assisted development maintains the same quality, security, accountability, and compliance as human-authored work, while enabling teams to benefit from AI-assisted productivity gains.

## Standards

### Developer Accountability & Ownership

These requirements set out how accountability for AI-assisted code remains with the submitting developer, regardless of how it was produced.

1. The developer who submits or merges code must remain fully accountable for its correctness, security, quality, and compliance, regardless of AI assistance used in its creation.
2. AI tools must not be recorded or represented as the author of record; authorship and accountability must always attach to the submitting human developer.
3. AI assistance must not justify reduced diligence, testing, or review effort.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Human Oversight

These requirements describe how AI-generated output is reviewed by a human before it takes effect.

1. Developers must review and understand AI-generated or AI-modified output before committing, merging, or deploying it.
2. Developers must not submit AI-generated code that they cannot explain, justify, or maintain.
3. AI tools must not be used unattended or autonomously to commit, approve, merge, or deploy code without human review.

#### References

- [AI Usage & Verification in Code Review](ai-usage-verification-in-code-review.md)

### Quality, Testing & Security Parity

These requirements address how AI-assisted work is held to the same quality, testing, and security gates as any other change.

1. Code produced with AI assistance must meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance.
2. AI-assisted contributions must not bypass, weaken, or be exempted from applicable quality gates, security scanning, or approval workflows.
3. AI tools may be used to help generate automated tests; generated tests must be reviewed for correctness and coverage adequacy, not merely presence.

#### References

- [Coding Standards & Formatting](../code-implementation/coding-standards-formatting.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)

### Restricted & High-Risk Use Cases

These requirements cover how AI-generated code is scrutinised more heavily in security-critical, safety-critical, or regulatory-critical contexts.

1. AI-generated code must be subject to heightened scrutiny in security-critical, safety-critical, or regulatory-critical contexts, including authentication, authorisation, cryptography, and clinical or patient-safety logic.
2. Teams should restrict unsupervised use of AI-generated implementations in these contexts; where used, the output must undergo additional review by personnel with relevant domain expertise.

#### References

- [Secure Software Development Practices](../security-identity/secure-software-development-practices.md)

### Intellectual Property & Licensing Risk

These requirements guide how intellectual property and licensing risk from AI tool use is identified and contained.

1. Developers must review AI-generated code for indicators of copied third-party material, such as retained licence headers or attribution comments, before inclusion.
2. Confidential or proprietary source code must not be submitted to an AI tool in a manner that grants the tool provider rights to reuse or retain it.

#### References

- [Prompt Data Handling](prompt-data-handling.md)
