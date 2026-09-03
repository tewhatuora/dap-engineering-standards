# AI Usage & Verification in Code Review

## Summary

> Disclose AI involvement, and give it exactly the same scrutiny as any other change.

## Standards

### Disclosure of AI-Assisted Contributions

> Material AI involvement in a submission is disclosed clearly enough for a reviewer to identify which parts.

1. Authors **MUST** disclose when a submission contains material AI-generated or AI-modified content by completing the AI disclosure section of the standard pull or merge request template.
2. Where AI assistance is not applied uniformly across a change, disclosure **MUST** be specific enough for a reviewer to identify which parts of the change were AI-assisted.
3. Authors **MUST NOT** omit or obscure disclosure of AI involvement, and **MUST NOT** remove or bypass the template's disclosure section.

### Pre-Submission Verification

> An author independently verifies AI-generated code, its tests, and its dependencies before submitting it for review.

1. Authors **MUST** independently verify the correctness and intended behaviour of AI-generated or AI-modified code before submitting it for review; AI output **MUST NOT** be submitted unexamined.
2. Authors **MUST** confirm that applicable automated tests, linting, and static analysis pass, and that test coverage adequately reflects the change, before submission.
3. Authors **MUST** check AI-generated code for hallucinated or non-existent dependencies, packages, and APIs before submission.
4. Authors **MUST** screen AI-generated code for security weaknesses.

#### References

- [Linting & Style Enforcement](../code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../code-implementation/static-code-analysis.md)

### Reviewer Scrutiny of AI-Disclosed Submissions

> A reviewer gives an AI-disclosed submission at least the same scrutiny as human-authored code.

1. Reviewers **MUST** apply scrutiny to AI-disclosed submissions at least equivalent to that applied to human-authored code.
2. Reviewers **MUST NOT** approve a submission solely on an author's disclosure statement or the plausibility of AI-generated code's appearance.
3. Reviewers **SHOULD** pay particular attention to defects characteristic of generative AI output, including hallucinated APIs, subtle logic errors, and insecure default patterns.

#### References

- [Code Review](../code-implementation/code-review.md)

### Use of AI Tools by Reviewers

> A reviewer can use an approved AI tool to assist review, but not as a substitute for their own judgement.

1. Reviewers **MAY** use AI tools to assist review activity, such as summarising changes, surfacing potential defects, or checking adherence to coding standards.
2. AI tools used by reviewers **MUST** be limited to approved tooling.
3. Reviewers **MUST NOT** rely on AI-generated review output as a substitute for the reviewer's own understanding of the change.

#### References

- [Approved AI Tooling](approved-ai-tooling.md)
- [Prompt Data Handling](prompt-data-handling.md)

### Approval Accountability

> Approval accountability always rests with a qualified human reviewer, never an AI tool.

1. An AI tool **MUST NOT** be recorded, configured, or represented as an approver of a code change.
2. At least one qualified human reviewer **MUST** review and approve the change, regardless of any AI assistance used by the author or reviewer.
3. Accountability for the approval decision **MUST** rest with the human reviewer(s) of record.

#### References

- [AI-Assisted Engineering Accountability](../../principles/engineering-practice/ai-assisted-engineering-accountability.md)
