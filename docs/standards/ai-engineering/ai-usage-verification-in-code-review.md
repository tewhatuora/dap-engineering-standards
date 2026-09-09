---
last_edited: 2026-09-10
---

# AI Usage & Verification in Code Review

## Pre-Submission Verification

### Summary

An author independently establishes that an AI-assisted change meets its stated purpose and the submission requirements of its repository before review.

### Standards

1. `std-ai-pre-submission-verification-01` Authors **MUST** independently verify the correctness and intended behaviour of AI-generated or AI-modified code before submitting it for review.
2. `std-ai-pre-submission-verification-02` Authors **SHOULD** confirm that the automated tests, linting, and static analysis required for the change pass before submission.
3. `std-ai-pre-submission-verification-03` Authors **SHOULD** confirm that test coverage adequately reflects the change before submission.
4. `std-ai-pre-submission-verification-04` Authors **MUST** verify that dependencies, packages, and APIs introduced or referenced by AI-generated code exist and are appropriate for the intended use before submission.
5. `std-ai-pre-submission-verification-05` Authors **MUST** screen AI-generated code for security weaknesses.
6. `std-ai-pre-submission-verification-06` Authors **MUST** verify that every modification produced by an AI agent is required for the stated change before submission.

### Related Standards

- [AI-Assisted Development](ai-assisted-development.md#quality-testing-security)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md#linting-pipeline-gate)
- [Static Code Analysis](../code-implementation/static-code-analysis.md#analysis-pipeline-gate)
- [Unit Testing](../quality-engineering/unit-testing.md#test-coverage)
- [Application Security Testing](../quality-engineering/application-security-testing.md#static-testing-sast)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## AI Disclosure

### Summary

Material AI involvement in a submission remains identifiable to its reviewer.

### Standards

1. `std-ai-ai-disclosure-01` Authors **MUST** disclose material AI involvement through the standard pull or merge request template.
2. `std-ai-ai-disclosure-02` The disclosure **MUST** identify the parts of the change that contain AI-generated or AI-modified content.
3. `std-ai-ai-disclosure-03` The disclosure **MUST** identify each design decision materially influenced by AI assistance.

### Related Standards

- [Version Control](../code-implementation/version-control.md#change-traceability)

### Implements These Principles

- [AI Contribution Traceability](../../principles/engineering-practice/ai-assisted-engineering.md#ai-contribution-traceability)

## Reviewer Scrutiny

### Summary

A reviewer gives an AI-disclosed submission at least the same scrutiny as human-authored code.

### Standards

1. `std-ai-reviewer-scrutiny-01` Reviewers **MUST** apply scrutiny to AI-disclosed submissions at least equivalent to that applied to human-authored code.
2. `std-ai-reviewer-scrutiny-02` Reviewers **MUST NOT** approve a submission solely because the author disclosed AI involvement or the AI-generated code appears plausible.
3. `std-ai-reviewer-scrutiny-03` Reviewers **SHOULD** pay particular attention to defects characteristic of generative AI output, including hallucinated APIs, subtle logic errors, insecure default patterns, and unnecessary complexity.

### Related Standards

- [Code Review](../code-implementation/code-review.md#code-quality-security)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Secure Development](../../principles/security-privacy/security-engineering.md#secure-development)

## AI-Assisted Review

### Summary

A reviewer may use an approved AI tool to assist review while retaining independent judgement.

### Standards

1. `std-ai-ai-assisted-review-01` Reviewers **MAY** use AI tools to assist review activity, such as summarising changes, surfacing potential defects, or checking adherence to coding standards.
2. `std-ai-ai-assisted-review-02` AI tools used by reviewers **MUST** be limited to approved tooling.
3. `std-ai-ai-assisted-review-03` Reviewers **MUST NOT** rely on AI-generated review output as a substitute for the reviewer's own understanding of the change.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md#approved-tools)
- [Code Review](../code-implementation/code-review.md#code-quality-security)

### Implements These Principles

- [Suitable AI Tools](../../principles/engineering-practice/ai-assisted-engineering.md#suitable-ai-tools)
- [Automation and Human Judgement](../../principles/engineering-practice/automation.md#automation-and-human-judgement)

## Approval Accountability

### Summary

A reviewer approves each change and remains accountable for the decision.

### Standards

1. `std-ai-approval-accountability-01` Where an AI tool is recorded as a review participant, its review **MUST NOT** count toward a requirement for reviewer approval.
2. `std-ai-approval-accountability-02` At least one reviewer **MUST** review and approve the change, regardless of any AI assistance used by the author or reviewer.
3. `std-ai-approval-accountability-03` Accountability for the approval decision **MUST** remain with the reviewers of record.

### Related Standards

- [Code Review](../code-implementation/code-review.md#independent-review)

### Implements These Principles

- [Accountability and Equal Standards](../../principles/engineering-practice/ai-assisted-engineering.md#accountability-and-equal-standards)
- [Automation and Human Judgement](../../principles/engineering-practice/automation.md#automation-and-human-judgement)
