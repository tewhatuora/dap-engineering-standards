# Technology Stack Governance

## Technology Selection

### Summary

A technology is selected for a clear purpose after its risks, costs, and overlap with existing technology are weighed against its value.

### Standards

1. `std-arch-technology-selection-01` A technology **MUST** be selected for a clear engineering purpose.
2. `std-arch-technology-selection-02` The team responsible for the service it supports **MUST** be able to explain why it is used and what problem it solves.
3. `std-arch-technology-selection-03` The degree of vendor lock-in, supply chain risk, operational effort, and cost a technology choice would introduce **MUST** be weighed against the value it provides before it is adopted.
4. `std-arch-technology-selection-04` The number of distinct languages, frameworks, and tools used for substantially similar purposes across a team's portfolio **SHOULD** be minimised.
5. `std-arch-technology-selection-05` Before a technology is adopted, its migration, replacement, or retirement path **MUST** be considered where reversing the decision would be prohibitively costly, slow, or disruptive.
6. `std-arch-technology-selection-06` Where no practical migration, replacement, or retirement path exists for a critical technology dependency, the absence of that path **MUST** be explicitly accepted as a risk before adoption.
7. `std-arch-technology-selection-07` Before a vendor-operated technology is adopted to store or process data subject to a residency or sovereignty requirement, the jurisdictions in which the vendor stores, processes, or can be legally compelled to provide access to the data **MUST** be established.
8. `std-arch-technology-selection-08` A vendor's general compliance certification **MUST NOT** be accepted as evidence of the specific jurisdictions in which it stores, processes, or can be legally compelled to provide access to data.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Supportability

### Summary

A proven, actively maintained technology is preferred, and working knowledge of it extends beyond one team member.

### Standards

1. `std-arch-supportability-01` A technology **SHOULD** be mature and proven unless a newer alternative provides clear value that justifies its additional risk.
2. `std-arch-supportability-02` A technology **SHOULD** show evidence of active maintenance and support from its publisher, such as regular updates or responsive issue handling.
3. `std-arch-supportability-03` Publisher size or reputation alone **SHOULD NOT** substitute for evidence of active maintenance and support.
4. `std-arch-supportability-04` Working knowledge of a technology **SHOULD** extend beyond a single team member, so its use and support do not depend on one individual's availability.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Technology Approval

### Summary

A new technology is approved before adoption, regardless of how it was proposed.

### Standards

1. `std-arch-technology-approval-01` A technology not already classified as approved or trial in the register **MUST** be approved before it is adopted.
2. `std-arch-technology-approval-02` An AI-suggested technology **MUST** meet the same evaluation and approval requirements as a technology proposed by an engineer.
3. `std-arch-technology-approval-03` An AI-suggested technology **MUST NOT** be adopted solely because it was AI-suggested.

### Implements These Principles

- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

## Lifecycle Classification

### Summary

Every technology in use is classified as approved, trial, or deprecated, and its classification is reassessed as its suitability changes.

### Standards

1. `std-arch-lifecycle-classification-01` Every technology in use **MUST** be classified as approved, trial, or deprecated.
2. `std-arch-lifecycle-classification-02` An approved technology **SHOULD** be the default choice for new development.
3. `std-arch-lifecycle-classification-03` A trial technology **MAY** be used for limited, justified experimentation or constrained adoption.
4. `std-arch-lifecycle-classification-04` A deprecated technology **MUST NOT** be used in new development.
5. `std-arch-lifecycle-classification-05` A deprecated technology **SHOULD** be targeted for phased retirement.
6. `std-arch-lifecycle-classification-06` An approved technology **SHOULD** be reassessed and reclassified as deprecated if it no longer meets the criteria for approval, such as a lapse in maintenance or support, a material increase in its supply chain risk, or a materially better alternative becoming available.
7. `std-arch-lifecycle-classification-07` A trial technology **SHOULD** be evaluated within a defined period and either promoted to approved or reclassified as deprecated.
8. `std-arch-lifecycle-classification-08` A trial technology **MUST NOT** remain in trial use indefinitely.
9. `std-arch-lifecycle-classification-09` The classification of each technology **MUST** be maintained in a central, up-to-date register.
10. `std-arch-lifecycle-classification-10` The vendor lock-in accepted for an approved technology **SHOULD** be reassessed when the vendor's pricing, terms, strategic direction, or availability changes materially.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Deprecation Planning

### Summary

A deprecated technology still in use has a planned migration, replacement, or retirement, prioritised by risk.

### Standards

1. `std-arch-deprecation-planning-01` Where a service still relies on a deprecated technology, the responsible team **SHOULD** plan its migration, replacement, or retirement, prioritising cases with known, unresolved security vulnerabilities.

### Related Standards

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
