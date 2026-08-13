# AI Usage & Verification in Code Review

## Objective

This standard defines requirements governing the intersection of AI tools and the code review process: the verification an author must perform on AI-generated or AI-assisted code before submitting it for review, and the conditions under which reviewers may use AI tools to assist their own review activity. It ensures AI involvement does not reduce the rigor, accountability, or reliability of review.

## Standards

### Disclosure of AI-Assisted Contributions

These requirements set out how material AI involvement in a submission is disclosed.

1. Authors must disclose when a submission contains material AI-generated or AI-modified content by completing the AI disclosure section of the standard pull or merge request template.
2. Where AI assistance is not applied uniformly across a change, disclosure must be specific enough for a reviewer to identify which parts of the change were AI-assisted.
3. Authors must not omit or obscure disclosure of AI involvement, and must not remove or bypass the template's disclosure section.

### Pre-Submission Verification

These requirements describe how AI-generated or AI-modified code is verified before it is submitted for review.

1. Authors must independently verify the correctness and intended behaviour of AI-generated or AI-modified code before submitting it for review; AI output must not be submitted unexamined.
2. Authors must confirm that applicable automated tests, linting, and static analysis pass, and that test coverage adequately reflects the change, before submission.
3. Authors must check AI-generated code for hallucinated or non-existent dependencies, packages, and APIs before submission.
4. Authors must screen AI-generated code for security weaknesses.

### Reviewer Scrutiny of AI-Disclosed Submissions

These requirements address how an AI-disclosed submission is scrutinised by a reviewer.

1. Reviewers must apply scrutiny to AI-disclosed submissions at least equivalent to that applied to human-authored code.
2. Reviewers must not approve a submission solely on an author's disclosure statement or the plausibility of AI-generated code's appearance.
3. Reviewers should pay particular attention to defects characteristic of generative AI output, including hallucinated APIs, subtle logic errors, and insecure default patterns.

#### References

- [Code Review](../code-implementation/code-review.md)

### Use of AI Tools by Reviewers

These requirements cover how AI tools are used by a reviewer to assist their own review activity.

1. Reviewers may use AI tools to assist review activity, such as summarising changes, surfacing potential defects, or checking adherence to coding standards.
2. AI tools used by reviewers must be limited to approved tooling.
3. Reviewers must not rely on AI-generated review output as a substitute for the reviewer's own understanding of the change.

#### References

- [Approved AI Tooling](approved-ai-tooling.md)
- [Prompt Data Handling](prompt-data-handling.md)

### Approval Accountability

These requirements guide how approval accountability is held by a human reviewer, regardless of any AI involvement.

1. An AI tool must not be recorded, configured, or represented as an approver of a code change.
2. At least one qualified human reviewer must review and approve the change, regardless of any AI assistance used by the author or reviewer.
3. Accountability for the approval decision must rest with the human reviewer(s) of record.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)
