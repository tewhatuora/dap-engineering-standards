# Technology Stack Governance

## Summary

> Every technology is classified as approved, trial, or deprecated, with new technologies subject to governance before adoption.

## Standards

### Justified Technology Selection

> A technology is chosen for a clear, explainable purpose, with its risk and cost weighed against its value.

1. A technology **MUST** be selected for a clear engineering purpose; the team responsible for the service it supports **MUST** be able to explain why it is used and what problem it solves.
2. The degree of vendor lock-in, supply chain risk, operational effort, and cost a technology choice would introduce **MUST** be weighed against the value it provides before it is adopted.

#### References

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Cost Awareness by Design](../../principles/cost-sustainability/cost-awareness-by-design.md)

### Supportable & Proven Technology

> A proven, actively maintained technology is preferred, and working knowledge of it extends beyond one team member.

1. A mature, proven technology **SHOULD** be preferred over a newer alternative unless the newer option provides clear value that justifies the additional risk it introduces.
2. A technology **SHOULD** show evidence of active maintenance and support from its publisher, such as regular updates or responsive issue handling; publisher size or reputation alone **SHOULD NOT** substitute for this evidence.
3. Working knowledge of a technology **SHOULD** extend beyond a single team member, so its use and support do not depend on one individual's availability.

### Technology Lifecycle Classification

> Every technology in use is classified as approved, trial, or deprecated, and reassessed as that status changes.

1. Every technology in use **MUST** be classified as approved, trial, or deprecated. An approved technology **MUST** be the default choice for new development. A trial technology **MAY** be used for limited, justified experimentation or constrained adoption. A deprecated technology **MUST NOT** be used in new development and **SHOULD** be targeted for phased retirement.
2. An approved technology **SHOULD** be reassessed and reclassified as deprecated if it no longer meets the criteria for approval, such as a lapse in maintenance or support, a material increase in its supply chain risk, or a materially better alternative becoming available.
3. A trial technology **SHOULD** be evaluated within a defined period and either promoted to approved or reclassified as deprecated; it **MUST NOT** remain in trial use indefinitely.
4. The classification of each technology **MUST** be maintained in a central, up-to-date [register](technology-stack-register.md), rather than left to individual teams to track independently.

#### References

- [Technology Stack Register](technology-stack-register.md)

### Technology Introduction & Approval

> A new technology, however it was proposed, goes through the same approval process before it is adopted.

1. A technology not already classified as approved or trial in the register **MUST** be reviewed and approved through the organisation's governance process before it is adopted, with the decision and its reasoning captured in the [DACI Register](https://mohits.atlassian.net/wiki/spaces/SEDSD/pages/5078091042/Decisions+Catalogue).
2. A technology introduced through AI-generated or AI-assisted suggestions **MUST** undergo the same evaluation and approval as a technology proposed by an engineer; it **MUST NOT** be adopted solely because it was AI-suggested.

#### References

- [Platform Alignment](../../principles/architecture-platform/platform-alignment.md)
- [AI-Assisted Engineering Accountability](../../principles/engineering-practice/ai-assisted-engineering-accountability.md)

### Deprecation & Migration Planning

> A deprecated technology still in use has a planned migration, replacement, or retirement, prioritised by risk.

1. Where a service still relies on a deprecated technology, the responsible team **SHOULD** plan its migration, replacement, or retirement, prioritising cases with known, unresolved security vulnerabilities.

#### References

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
