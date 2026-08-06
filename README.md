# Health New Zealand Engineering Principles & Standards
<!--include-start-->
Engineering principles and standards for delivering software and services for Health New Zealand.

## Purpose

Software and services delivered for Health New Zealand MUST be designed, developed, deployed, and supported in accordance with these engineering principles and standards.

Principles set out the engineering values that inform good decision-making; standards translate them into specific, measurable requirements. Together they establish consistent engineering expectations across all projects while allowing implementation details to evolve over time. Detailed guidance, patterns, examples, and technology-specific implementation instructions are maintained separately within the organisation's engineering knowledge base.

## Audience

Vendors, partners, contractors, third parties, and internal staff who deliver, support, or govern software and services for Health New Zealand MUST comply with these principles and standards.

## Scope

These principles and standards apply to all software, services, infrastructure, platforms, integrations, and automation deliverables produced or operated for Health New Zealand.

- New, re-architected, or rewritten software and services MUST comply in full.
- Existing software and services undergoing re-platforming or lift-and-shift MAY adopt these principles and standards progressively, provided a documented plan and target date for reaching full compliance exists; progressive adoption MUST NOT be treated as a permanent or indefinite exemption.
- This scope applies throughout these principles and standards; individual principles and standards do not restate it, and instead define only their own specific subject-matter boundaries and cross-references.

## Compliance

- An accountable team or group MUST be assigned for each project or service to own compliance with applicable principles and standards, declared in the `CODEOWNERS` file of each repository belonging to the project or service; accountability MUST NOT be attributed to an individual.
- Compliance MUST be maintained for the full delivery lifecycle of a project or service, from initial design through operation and decommissioning, and following any material change, not only at the time compliance was first established.
- Non-compliance MUST NOT be resolved by unilaterally reinterpreting, narrowing, or disregarding an applicable principle or standard.

## Principles and Standards Language

The key words **MUST**, **MUST NOT**, **REQUIRED**, **SHALL**, **SHALL NOT**, **SHOULD**, **SHOULD NOT**, **RECOMMENDED**, **MAY**, and **OPTIONAL** are to be interpreted as described in RFC 2119.

Unless explicitly stated otherwise:

| Keyword | Meaning |
|---|---|
| `MUST` / `REQUIRED` / `SHALL` | Absolute requirement |
| `MUST NOT` / `SHALL NOT` | Absolute prohibition |
| `SHOULD` / `RECOMMENDED` | Recommended practice, expected unless a justified reason exists |
| `SHOULD NOT` | Generally discouraged practice |
| `MAY` / `OPTIONAL` | Optional capability |

## How principles and standards are structured

Each principle and standard follows a consistent format:

- **Objective**: the purpose of the principle or standard and the engineering outcome it supports.
- **Principles** or **Standards**, matching the topic's type: normative requirements grouped into logical subsections, using the language defined above.
- **References**: links to other principles and standards it relies on or relates to, listed rather than cited inline.

Principles and standards are technology-neutral unless a specific technology is explicitly in scope, and are written to be measurable, auditable, and enforceable rather than descriptive or tutorial in nature. Where a requirement is already defined by another principle or standard, it is named in the References section rather than restated or linked inline.

<!--include-end-->
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the required review process, local validation and Hugo build commands, draft and version-publishing workflow, and generated-site preview guidance.
