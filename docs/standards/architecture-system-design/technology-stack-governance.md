# Technology Stack Governance

## Objective

Technology Stack Governance establishes a team's accountability for selecting and retiring the technology (any language, framework, platform, or tool) its service depends on, consistent with the organisation's approved, trial, or deprecated classification. It directs engineering teams toward technology decisions that are deliberate, supportable, and reviewed through the organisation's approval process before they take effect.

## Standards

### Deliberate, Justified Technology Selection

These requirements ensure a technology is selected for a clear, justified purpose, weighing the risk and cost it introduces.

1. A technology must be selected for a clear engineering purpose; the team responsible for the service it supports must be able to explain why it is used and what problem it solves.
2. The degree of vendor lock-in, supply chain risk, operational effort, and cost a technology choice would introduce must be weighed against the value it provides before it is adopted.

#### References

- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)
- [Security by Design](../../principles/security-by-design.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Supportable & Proven Technology Selection

These requirements favour technology that is proven, actively maintained, and not dependent on a single person's knowledge.

1. A mature, proven technology should be preferred over a newer alternative unless the newer option provides clear value that justifies the additional risk it introduces.
2. A technology should show evidence of active maintenance and support from its publisher, such as regular updates or responsive issue handling; publisher size or reputation alone should not substitute for this evidence.
3. Working knowledge of a technology should extend beyond a single team member, so its use and support do not depend on one individual's availability.

### Technology Lifecycle Classification

These requirements classify every technology in use as approved, trial, or deprecated, and keep that classification current.

1. Every technology in use must be classified as approved, trial, or deprecated. An approved technology must be the default choice for new development. A trial technology may be used for limited, justified experimentation or constrained adoption. A deprecated technology must not be used in new development and should be targeted for phased retirement.
2. An approved technology should be reassessed and reclassified as deprecated if it no longer meets the criteria for approval, such as a lapse in maintenance or support, a material increase in its supply chain risk, or a materially better alternative becoming available.
3. A trial technology should be evaluated within a defined period and either promoted to approved or reclassified as deprecated; it must not remain in trial use indefinitely.
4. The classification of each technology must be maintained in a central, up-to-date [register](technology-stack-register.md), rather than left to individual teams to track independently.

#### References

- [Technology Stack Register](technology-stack-register.md)

### New Technology Introduction & Approval

These requirements route a new technology, however it was proposed, through the organisation's approval process before adoption.

1. A technology not already classified as approved or trial in the register must be reviewed and approved through the organisation's governance process before it is adopted, with the decision and its reasoning captured in the [DACI Register](https://mohits.atlassian.net/wiki/spaces/SEDSD/pages/5078091042/Decisions+Catalogue).
2. A technology introduced through AI-generated or AI-assisted suggestions must undergo the same evaluation and approval as a technology proposed by an engineer; it must not be adopted solely because it was AI-suggested.

#### References

- [Platform Alignment](../../principles/platform-alignment.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Deprecation & Migration Planning

This requirement ensures a deprecated technology still in use has a planned path to migration or retirement.

1. Where a service still relies on a deprecated technology, the responsible team should plan its migration, replacement, or retirement, prioritising cases with known, unresolved security vulnerabilities.

#### References

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
