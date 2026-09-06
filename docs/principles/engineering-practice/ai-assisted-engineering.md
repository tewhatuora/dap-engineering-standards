# AI-Assisted Engineering

## Accountability and Equal Standards

### Summary

The directing engineer remains fully accountable for AI-assisted work, which meets the same principles and standards as work authored entirely by a human.

### Reasoning

An AI tool does not assume responsibility for the correctness, quality, security, or compliance of its output. The engineer directing its use remains responsible for evaluating and maintaining every resulting engineering artifact.

The method used to produce engineering work does not change the outcomes expected of it. AI assistance does not change which principles and standards apply.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)

## Risk-Proportionate Scrutiny

### Summary

Scrutiny of AI-assisted work increases with its security, safety, or regulatory impact and includes relevant domain expertise for high-risk work.

### Reasoning

The consequence of an incorrect output differs by context. A defect in authentication, clinical logic, or another high-impact capability can cause harm beyond the code path in which it appears.

Additional review by people who understand the affected domain provides context that general code review cannot supply and keeps the depth of verification proportionate to the potential impact.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Understanding Before Adoption

### Summary

AI-assisted output is adopted only once the responsible engineer understands it well enough to explain, justify, and maintain it.

### Reasoning

Without understanding an output's behaviour and implementation, the responsible engineer cannot explain its decisions or maintain the result. Faster production does not replace that understanding.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## AI Contribution Traceability

### Summary

A material AI contribution remains disclosed with enough context to identify its role in a code change or incident response.

### Reasoning

Accountability depends on knowing where AI assistance materially influenced an engineering outcome. Disclosure gives reviewers the context needed to assess an assisted change and preserves an accurate record of how incident conclusions and actions were reached.

Identifying the affected work is more useful than recording AI use without its scope. It allows later investigation to distinguish an AI contribution from the human decisions that accepted or acted on it.

### Implemented By These Standards

- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## Suitable AI Tools

### Summary

Engineering work uses AI tools whose terms and controls are suitable for the work and information entrusted to them.

### Reasoning

AI tools differ in how they protect and use organisational code and data. Suitability depends on whether a tool's terms and controls are acceptable for the work and information involved. Capability, convenience, and cost do not establish suitability on their own.

### Implemented By These Standards

- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Intellectual Property

### Summary

AI-assisted output is adopted only when any third-party material it contains can be used lawfully.

### Reasoning

AI-generated output can contain third-party material without carrying the right to use it. Reviewing output before adoption prevents that material from entering an engineering artifact without permission.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Confidentiality

### Summary

Confidential material is submitted to an AI tool only when its handling terms preserve that confidentiality.

### Reasoning

Submitting confidential or proprietary material to an AI tool can expose it to provider retention, reuse, or access. Restricting submissions to tools whose handling terms preserve confidentiality keeps the material within its intended controls.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
