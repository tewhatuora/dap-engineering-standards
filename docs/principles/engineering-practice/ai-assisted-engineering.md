---
last_edited: 2026-10-21
---

# AI-Assisted Engineering

## Accountability and Equal Standards

### Summary

The engineer directing AI-assisted work remains fully accountable for it, and the same engineering standards apply whether or not AI is used.

### Reasoning

Engineers who adopt AI output are responsible for its defects, security risks, and maintenance needs. The engineer directing the AI has the context and authority to decide whether the output is fit for use and remains accountable for that decision.

Users experience the system's behaviour regardless of how its code or design was produced. Using AI does not lower the expected quality, safety, or maintainability of the resulting code or design.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)

## Understanding Before Adoption

### Summary

Engineers adopt AI-assisted output only when they can explain, justify, and maintain it.

### Reasoning

AI output can contain assumptions and design choices that the generated code or explanation does not make clear. Engineers need to identify and justify those choices to assess the behaviour reliably, maintain the code or design, and diagnose failures.

Other engineers need to understand those decisions to review and maintain the code or design. Otherwise, each later change requires them to rediscover decisions that the implementation and its context should make clear.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## Scrutiny Based on Impact

### Summary

AI-assisted output receives more thorough review as its potential impact on security, patient safety, or regulatory compliance increases, and domain experts assess risks that need their expertise.

### Reasoning

AI output can look convincing while containing errors that become clear only when checked against security controls, patient-safety functions, or regulatory requirements. General engineering review may miss risks that need specialised security, clinical, or regulatory knowledge.

Domain experts bring knowledge that the code alone does not provide. Their review reduces the chance of missing a security flaw, patient-safety issue, or regulatory breach.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Human Clinical Judgement

### Summary

Qualified people make and remain accountable for clinical decisions and advice informed by AI.

### Reasoning

Clinical decisions and advice directly affect patient safety. AI output may leave out or misinterpret evidence and patient context. Confident wording can make these errors harder to recognise before they influence care.

Qualified people can compare the output with the full clinical context, challenge its assumptions, and recognise when it is unreliable. They remain accountable for the decision and its consequences for the patient.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## Bounded Agent Impact

### Summary

An AI agent has only the access and authority needed for its assigned task.

### Reasoning

AI agents can take several actions without anyone reviewing each one. They can also use any system or information they can access. If an agent misunderstands its task, broad access allows the error to affect unrelated resources.

Limiting what an agent can access and change reduces the consequences of an incorrect action and makes recovery easier. It also keeps unrelated or sensitive information out of the agent's context.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)

## AI Contribution Traceability

### Summary

Records of AI contributions include enough context to show how they influenced an engineering change, design decision, or incident response.

### Reasoning

AI assistance can shape assumptions and decisions even when engineers do not use its output directly. Recording the contribution shows reviewers what needs further verification and how it was checked.

The record also helps explain a decision when an assumption is later challenged or an incident is investigated. It shows what came from AI and what people accepted, changed, or decided themselves.

### Implemented By These Standards

- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

## AI Tool Terms and Controls

### Summary

AI tools used for engineering have provider terms that protect submitted information and controls that limit what can be submitted.

### Reasoning

A provider's terms determine whether it can retain submitted code and data, access them, or reuse them for another purpose. Terms suitable for public information may expose confidential, personal, health, or proprietary material.

Submission controls prevent personal data, secrets, and other restricted information from being sent to tools that are not authorised to handle it.

### Implemented By These Standards

- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Organisation Managed Access

### Summary

The organisation manages access to AI tools used for engineering work and links that access to each user's organisational identity.

### Reasoning

Personal accounts or access obtained independently can bypass organisational identity controls, making it difficult to link engineering activity to the person responsible. Investigators then cannot reliably establish who submitted information, accepted output, or made changes through the tool.

### Implemented By These Standards

- [Approved AI Tooling](../../standards/ai-engineering/approved-ai-tooling.md)

## Confidentiality

### Summary

Engineers share confidential material with an AI tool only when its handling terms protect that material's confidentiality.

### Reasoning

An AI provider may store, access, or reuse submitted material according to its terms. Terms that allow retention or reuse for another purpose can expose confidential material beyond its authorised use, even when it does not appear in the generated output.

Removing the material from a later prompt cannot undo any storage, access, or reuse that has already occurred.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

## Intellectual Property

### Summary

Engineers adopt AI-assisted output only when they can lawfully use any third-party material it contains.

### Reasoning

AI output can reproduce third-party material without identifying its source or terms of use. Using that material can infringe intellectual property rights or breach licence and attribution conditions that the output does not disclose.

Missing attribution does not mean the output is free of third-party rights. Engineers need enough information about the material and its terms to establish whether they can use it lawfully.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
