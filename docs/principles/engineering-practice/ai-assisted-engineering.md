---
last_edited: 2026-09-11
---

# AI-Assisted Engineering

## Accountability and Equal Standards

### Summary

The engineer directing AI-assisted work remains fully accountable for it, and the work meets the same engineering standards as work produced without AI.

### Reasoning

Adopting AI output makes its defects, security risks, and maintenance needs part of the system. The engineer directing the work has the context and authority to decide whether it is fit for use, so accountability cannot be transferred to the tool.

Users experience the same system behaviour regardless of how its code or design was produced. AI involvement therefore does not reduce the quality, safety, or maintainability expected of the finished work.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)

## Understanding Before Adoption

### Summary

Engineers adopt AI-assisted output only when they can explain, justify, and maintain it.

### Reasoning

AI output can contain assumptions and design choices that are not apparent from the generated code or explanation. Engineers who cannot identify and justify those choices cannot reliably assess the behaviour, maintain the resulting code or design, or diagnose failures.

An explanation that other engineers can follow makes the work reviewable and maintainable after adoption. Without that shared understanding, engineers making later changes must rediscover decisions that should be clear from the implementation and its context.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## Scrutiny Based on Impact

### Summary

AI-assisted work receives greater scrutiny as its potential impact on security, patient safety, or regulatory compliance increases, with domain experts reviewing risks that require their expertise.

### Reasoning

AI output can appear convincing while containing errors that become apparent only when assessed against security controls, patient-safety functions, or regulatory requirements. General engineering review may not identify risks that require specialised security, clinical, or regulatory knowledge.

Domain experts can assess the output using knowledge not evident from the code alone. Their review reduces the chance that a security flaw, patient-safety issue, or regulatory breach goes undetected.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Human Clinical Judgement

### Summary

Qualified people retain judgement and accountability for clinical decisions and advice informed by AI.

### Reasoning

Clinical decisions and advice directly affect patient safety. AI output may omit or misinterpret evidence and patient context, while a confident presentation can make errors harder to recognise before they influence care.

Qualified people can compare the output with the full clinical context, challenge its assumptions, and recognise when it is unreliable. They remain accountable for the decision and its consequences for the patient.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Bounded Agent Impact

### Summary

An AI agent has only the access and authority needed for its assigned task.

### Reasoning

AI agents can perform several actions without review between each one and can use every system or piece of information available to them. If an agent misinterprets its task, broad access allows the error to affect unrelated resources.

Limiting access and change authority reduces the consequences of an incorrect action and simplifies recovery. It also keeps unrelated or sensitive information out of the agent's context.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## AI Contribution Traceability

### Summary

AI contributions that influence an engineering change, design decision, or incident response are recorded with enough context to show how they affected the outcome.

### Reasoning

AI assistance can shape assumptions and decisions even when its output is not adopted directly. A record of the AI contribution shows reviewers what needs additional verification and how it was checked.

The record also helps explain a decision when an assumption is later challenged or an incident is investigated. It shows what came from AI and what people accepted, changed, or decided themselves.

### Implemented By These Standards

- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## AI Tool Terms and Controls

### Summary

AI tools used for engineering have provider terms that protect submitted information and controls that restrict what can be submitted.

### Reasoning

A provider's terms determine whether submitted code and data may be retained, accessed by the provider, or reused for another purpose. Terms suitable for public information may expose confidential, personal, health, or proprietary material.

Submission controls prevent personal data, secrets, and other restricted information from being sent to tools that are not authorised to handle it.

### Implemented By These Standards

- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Organisation Managed Access

### Summary

Access to AI tools used for engineering work is managed by the organisation and linked to each user's organisational identity.

### Reasoning

Personal or independently obtained access can bypass organisational identity controls and disconnect engineering activity from the person responsible. Without reliable attribution, investigators cannot establish who submitted information, accepted output, or made changes through the tool.

### Implemented By These Standards

- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)

## Confidentiality

### Summary

Confidential material is shared with an AI tool only when the tool's handling terms preserve its confidentiality.

### Reasoning

An AI provider may store, access, or reuse submitted material according to its terms. If those terms allow retention or secondary use, confidential material can leave its authorised context even when the generated output does not contain it.

Removing the material from a later prompt cannot undo storage, access, or reuse that has already occurred.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Intellectual Property

### Summary

AI-assisted output is adopted only when any third-party material it contains can be used lawfully.

### Reasoning

AI output can reproduce third-party material without identifying its source or terms of use. Adopting that material can infringe intellectual property rights or breach licence and attribution conditions that are not visible in the output.

Missing attribution does not mean the output is free of third-party rights. Lawful use cannot be established without enough information about the included material and its terms.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
