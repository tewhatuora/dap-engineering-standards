# AI Usage & Verification in Code Review

Disclose AI involvement and give AI-assisted changes the same scrutiny as other changes.

## Pre-Submission Verification

### Summary

An author independently verifies the correctness, security, tests, and dependencies of AI-generated code before submitting it for review.

### Standards

1. `std-ai-pre-submission-verification-01` Authors **MUST** independently verify the correctness and intended behaviour of AI-generated or AI-modified code before submitting it for review.
2. `std-ai-pre-submission-verification-02` AI output **MUST NOT** be submitted unexamined.
3. `std-ai-pre-submission-verification-03` Authors **SHOULD** confirm that applicable automated tests, linting, and static analysis pass before submission.
4. `std-ai-pre-submission-verification-04` Authors **SHOULD** confirm that test coverage adequately reflects the change before submission.
5. `std-ai-pre-submission-verification-05` Authors **MUST** check AI-generated code for hallucinated or non-existent dependencies, packages, and APIs before submission.
6. `std-ai-pre-submission-verification-06` Authors **MUST** screen AI-generated code for security weaknesses.

### Related Standards

- [AI-Assisted Development](ai-assisted-development.md)
- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Unit Testing](../quality-engineering/unit-testing.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## AI Disclosure

### Summary

Material AI involvement in a submission is disclosed clearly enough for a reviewer to identify which parts.

### Standards

1. `std-ai-ai-disclosure-01` Authors **MUST** disclose when a submission contains material AI-generated or AI-modified content by completing the AI disclosure section of the standard pull or merge request template.
2. `std-ai-ai-disclosure-02` Where AI assistance is not applied uniformly across a change, disclosure **MUST** be specific enough for a reviewer to identify which parts of the change were AI-assisted.
3. `std-ai-ai-disclosure-03` Authors **MUST NOT** omit or obscure disclosure of AI involvement.
4. `std-ai-ai-disclosure-04` Authors **MUST NOT** remove or bypass the template's disclosure section.

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Reviewer Scrutiny

### Summary

A reviewer gives an AI-disclosed submission at least the same scrutiny as human-authored code.

### Standards

1. `std-ai-reviewer-scrutiny-01` Reviewers **MUST** apply scrutiny to AI-disclosed submissions at least equivalent to that applied to human-authored code.
2. `std-ai-reviewer-scrutiny-02` Reviewers **MUST NOT** approve a submission solely because the author disclosed AI involvement or the AI-generated code appears plausible.
3. `std-ai-reviewer-scrutiny-03` Reviewers **SHOULD** pay particular attention to defects characteristic of generative AI output, including hallucinated APIs, subtle logic errors, and insecure default patterns.

### Related Standards

- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## AI-Assisted Review

### Summary

A reviewer may use an approved AI tool to assist review while retaining independent judgement.

### Standards

1. `std-ai-ai-assisted-review-01` Reviewers **MAY** use AI tools to assist review activity, such as summarising changes, surfacing potential defects, or checking adherence to coding standards.
2. `std-ai-ai-assisted-review-02` AI tools used by reviewers **MUST** be limited to approved tooling.
3. `std-ai-ai-assisted-review-03` Reviewers **MUST NOT** rely on AI-generated review output as a substitute for the reviewer's own understanding of the change.

### Related Standards

- [Approved AI Tooling](approved-ai-tooling.md)
- [Prompt Data Handling](prompt-data-handling.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Approval Accountability

### Summary

A qualified human reviewer approves each change and remains accountable for the decision.

### Standards

1. `std-ai-approval-accountability-01` An AI tool **MUST NOT** be recorded, configured, or represented as an approver of a code change.
2. `std-ai-approval-accountability-02` At least one qualified human reviewer **MUST** review and approve the change, regardless of any AI assistance used by the author or reviewer.
3. `std-ai-approval-accountability-03` Accountability for the approval decision **MUST** remain with the human reviewers of record.

### Related Standards

- [AI-Assisted Development](ai-assisted-development.md)
- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)
