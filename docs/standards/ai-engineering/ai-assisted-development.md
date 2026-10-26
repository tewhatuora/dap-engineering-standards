---
last_edited: 2026-10-27
---

# AI-Assisted Development {: .standard-references }

## Developer Accountability

### Summary

Developers remain accountable for AI-assisted code changes.

### Standards

1. Developers **MUST** understand AI-assisted code changes and take responsibility for the resulting code's correctness, security, quality, and consistency with engineering standards and stated requirements. `std-ai-developer-accountability-01`
2. AI assistance **MUST NOT** be accepted as a reason to reduce the diligence, testing, or review otherwise required for a change. `std-ai-developer-accountability-02`
3. Developers **MUST** verify that dependencies introduced through AI assistance have permissive licences and that the licence conditions are met. `std-ai-intellectual-property-licensing-03`
4. AI tools **SHOULD NOT** be recorded or represented as the author of record. `std-ai-developer-accountability-04`

### Related Standards

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md#licence-compatibility)
- [Code Review](../code-implementation/code-review.md#risk-based-review)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)
- [Intellectual Property](../../principles/engineering-practice/ai-assisted-engineering.md#intellectual-property)
- [Understanding Before Adoption](../../principles/engineering-practice/ai-assisted-engineering.md#understanding-before-adoption)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)

## AI Agent Access

### Summary

AI agents are subject to the resource's authentication and authorisation policies, regardless of the access method.

### Standards

1. Resource owners **MUST** enforce authentication and authorisation in the system being accessed, rather than relying on the AI tool or agent to enforce access restrictions. `std-ai-agent-access-01`
2. Resource owners **MUST** authorise actions performed by an AI agent on a user's behalf against that user's permissions. `std-ai-agent-access-02`
3. The person or team provisioning a separate identity or access grant for an AI agent **MUST** limit its permissions to the resources and operations required for its intended use. `std-ai-agent-access-03`
4. The person or team granting additional temporary access for an AI agent's task **MUST** revoke that grant when the task ends. `std-ai-agent-access-04`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)

### Implements These Principles

- [Bounded Agent Impact](../../principles/engineering-practice/ai-assisted-engineering.md#bounded-agent-impact)
- [Least Privilege](../../principles/security-privacy/security-engineering.md#least-privilege)
- [Least Privilege Access](../../principles/security-privacy/data-privacy.md#least-privilege-access)
- [Controlled and Traceable AI Agents](../../principles/quality/ai-assisted-quality-engineering.md#controlled-and-traceable-ai-agents)

## Quality, Testing & Security

### Summary

AI-assisted changes are subject to the same quality, testing, and security requirements as other changes.

### Standards

1. Code produced with AI assistance **MUST** meet the same coding, linting, static analysis, and test coverage requirements as code without AI assistance. `std-ai-quality-testing-security-01`
2. AI-assisted contributions **MUST NOT** bypass, weaken, or be exempted from quality gates, security scanning, or approval workflows required for the repository and change. `std-ai-quality-testing-security-02`
3. AI tools **MAY** be used to help generate automated tests. `std-ai-quality-testing-security-03`
4. AI-generated automated tests **MUST** be reviewed for correctness and coverage adequacy before adoption. `std-ai-quality-testing-security-04`
5. A test or quality check required for an AI-assisted change **MUST NOT** be removed, disabled, or weakened to obtain a passing result. `std-ai-quality-testing-security-05`

### Related Standards

- [Code Review](../code-implementation/code-review.md#code-quality-security)
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
- [Authoritative Test Results](../../principles/quality/test-automation.md#authoritative-test-results)

## Code Review

### Summary

Review checks may be automated, manual, or a combination, while a human assesses the evidence and remains accountable for approval.

!!! tip "Review guidance"

    AI code generation can outpace line-by-line manual review. Review can use commercial review tools, custom review agents, CI checks, or targeted manual inspection, preferably in combination.

    Use commercial code review tools or team-built code review agents to flag defects, code smells, design issues, and inconsistencies with engineering standards.

    Use CI test results and findings from linting, SAST, secret scanning, and dependency vulnerability scanning as review evidence.

    Apply system and domain knowledge through targeted manual review to identify logic errors and assess design trade-offs, integration behaviour, and consistency with engineering standards and stated requirements.


### Standards

1. Before merge, at least one authorised human reviewer **MUST** approve the change after assessing the review evidence and any unresolved findings. `std-ai-code-review-01`
2. The human approver **MUST** remain accountable for the approval decision. `std-ai-code-review-02`

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md#approved-tools)
- [Code Review](../code-implementation/code-review.md#independent-review)
- [Continuous Integration](../delivery-release/continuous-integration.md#required-checks)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Automation Supports Human Judgement](../../principles/engineering-practice/automation.md#automation-supports-human-judgement)
- [Independent Checks of AI Work and Evidence](../../principles/quality/ai-assisted-quality-engineering.md#independent-checks-of-ai-work-and-evidence)
- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)
