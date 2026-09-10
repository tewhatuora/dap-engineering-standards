---
last_edited: 2026-09-10
---

# AI-Assisted Engineering

## Accountability and Equal Standards

### Summary

The engineer directing AI-assisted work remains fully accountable for it, and the same engineering standards apply as for work written without AI.

### Reasoning

Once AI output is adopted, its defects, security risks, and maintenance needs become part of the system. The directing engineer has the context and authority to decide whether the work is fit for use, so accountability remains with that engineer rather than with the tool that produced the output.

People who use or depend on the system experience the same behaviour regardless of how its code or design was produced. AI involvement therefore does not reduce the quality, safety, or maintainability expected of the finished work.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)

## Risk-Proportionate Scrutiny

### Summary

AI-assisted work receives scrutiny proportionate to its security, safety, or regulatory impact, with relevant domain experts reviewing high-risk work.

### Reasoning

AI output can appear convincing while containing errors that depend on the security, safety, or regulatory context of the work. As the impact of an incorrect assumption increases, general review provides less confidence that the resulting risk has been understood.

Reviewers with relevant domain expertise can test the output against knowledge and consequences that are not visible from the code alone. Their scrutiny is most important where an undetected error could cause serious harm or breach a regulated requirement.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Bounded Agent Impact

### Summary

An AI agent has only the access and authority needed for its assigned task.

### Reasoning

AI agents can take a sequence of actions without review between each step, using any systems and information available to them. If an agent misinterprets its task, wider access allows the initial error and later actions to affect resources that the task did not require.

Limiting access and change authority confines the effect of an incorrect action and makes recovery more manageable. It also prevents unrelated or sensitive information from becoming part of the agent's working context without a legitimate need.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Human Clinical Judgement

### Summary

Qualified people retain judgement and accountability for clinical decisions and advice informed by AI.

### Reasoning

Clinical decisions and advice can directly affect patient safety, yet AI output may omit or misinterpret evidence and patient context needed for a sound judgement. A confident presentation can make incomplete or incorrect reasoning appear authoritative and harder to recognise before it influences care.

Appropriately qualified people can weigh the output against the full clinical context, challenge its assumptions, and recognise when it falls outside its useful limits. They remain responsible for the decision because they are able to judge those factors and their consequences for the patient.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Understanding Before Adoption

### Summary

Engineers adopt AI-assisted output only when they can explain, justify, and maintain it.

### Reasoning

AI output can contain assumptions and design choices that are not apparent from the generated code or explanation. If the responsible engineer cannot identify and justify those choices, they cannot reliably assess the behaviour, understand the effect of later changes, or diagnose a failure.

An explanation that other engineers can follow also makes the work reviewable and maintainable beyond its initial adoption. Without that shared understanding, future changes depend on rediscovering decisions that should already be clear from the implementation and its context.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## AI Contribution Traceability

### Summary

Material AI contributions are disclosed with enough context to show how they affected an engineering change, design decision, or incident response.

### Reasoning

AI assistance can shape assumptions, evidence, and decisions even when its direct output is edited before use. Without a record of that influence, reviewers cannot tell which parts of an engineering outcome require closer verification or how people assessed the AI contribution.

The same context supports later investigation when an assumption is challenged or an incident is reviewed. It allows investigators to distinguish the AI contribution from the human decisions that accepted, changed, or acted on it and to reconstruct how the outcome was reached.

### Implemented By These Standards

- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## Suitable AI Tools

### Summary

Engineering work uses AI tools with terms and controls that suit the work and the sensitivity of the information they receive.

### Reasoning

AI tools differ in how they retain, reuse, expose, and protect submitted code and data. Terms that are acceptable for public or low-sensitivity information may permit handling that is unsuitable for confidential, personal, health, or proprietary material.

Available controls also determine who can use the tool, what information it can receive, and how that information is protected during use. Suitability therefore depends on both the work being performed and the sensitivity of the information entrusted to the tool.

### Implemented By These Standards

- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Organisation-Controlled Access

### Summary

Access to AI tools used for engineering work is managed by the organisation and linked to each user's organisational identity.

### Reasoning

Personal or independently obtained access can bypass managed identity controls and leave engineering activity disconnected from the person responsible. Without reliable attribution, an investigation cannot establish who submitted information, accepted output, or performed changes through the tool.

### Implemented By These Standards

- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)

## Intellectual Property

### Summary

AI-assisted output is adopted only when any third-party material it contains can be used lawfully.

### Reasoning

AI output can contain or closely reproduce third-party material without identifying its source or the terms under which it may be used. Adopting that material can infringe intellectual property rights or breach licence and attribution conditions that are not apparent from the output itself.

The absence of visible attribution does not establish that the output is free of third-party rights. Engineers need enough information about any included material to determine that its use is lawful before it becomes part of the system.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Confidentiality

### Summary

Confidential material is shared with an AI tool only when the tool's handling terms preserve its confidentiality.

### Reasoning

Submitting confidential material places it under the provider's storage, access, and reuse terms. If those terms permit retention or secondary use, the submission can expose the material beyond its authorised context even when the generated output does not contain it.

Removing the material from a later prompt cannot restore confidentiality because retention, access, or reuse may already have occurred.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
