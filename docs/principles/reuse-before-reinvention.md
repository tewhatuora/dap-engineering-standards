# Reuse Before Reinvention

## Summary

> Reuse before adopting, and adopt before building.

## Principles

### Early Solution Discovery

These principles set out how discovery and evaluation of existing solutions happens before new development begins.

1. Before starting new development effort, engineering teams **MUST** undertake discovery work to find existing internal and external solutions capable of meeting the requirement, and evaluate them against it.
2. The absence of an existing solution **MUST NOT** be assumed without first completing this discovery work.
3. This evaluation **MUST** be completed at design time.

#### References

- [Cost Awareness by Design](cost-awareness-by-design.md)

### Reuse-Adopt-Build Order

These principles describe how meeting a need follows a preference order: reuse, then adopt, then build.

1. A requirement **SHOULD** be met in the following order of preference: reusing an existing internal capability, adopting an external or commercial solution, then building a custom solution only where neither meets the requirement.
2. A custom solution **MUST NOT** be built solely because it is more familiar or convenient than an existing option that already meets the requirement.

#### References

- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)
- [Platform Alignment](platform-alignment.md)

### Governed New Build

These principles address how a new build is justified by a documented gap, approved, and periodically reassessed.

1. A decision to build a new solution instead of reusing an existing one **MUST** be justified by a documented gap that the existing solution does not meet.
2. The justification **MUST** be approved before development begins.
3. A justified build **SHOULD** be reassessed periodically, since the gap that justified it may later be resolved by an existing solution.

### Reusable Interface Design

These principles cover how a component, service, or library exposes a stable, versioned interface so other teams adopt it without depending on its internals.

1. A component, service, or library likely to be reused **MUST** expose a stable, documented interface so other teams can adopt it without depending on its internal implementation.
2. A reusable component **SHOULD** be versioned so that consuming teams can upgrade on their own schedule rather than being forced to change in lockstep with it.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)
- [Build & Artifact Management](../standards/delivery-release/build-artifact-management.md)
