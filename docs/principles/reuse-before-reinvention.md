# Reuse Before Reinvention

## Objective

Reuse Before Reinvention directs engineering teams to actively seek out and adopt existing, proven solutions before building new ones. It reduces duplicated engineering effort, shortens delivery timelines, and concentrates maintenance and improvement effort on a smaller number of well-supported solutions rather than many bespoke equivalents. It applies to code, libraries, services, and components at any level, whether reused internally, adopted from an external or commercial source, or built new only where no suitable alternative exists.

## Principles

### Evaluating Existing Solutions Before Building New

These principles require discovery and evaluation of existing solutions before new development begins.

1. Before starting new development effort, engineering teams must undertake discovery work to find existing internal and external solutions capable of meeting the requirement, and evaluate them against it.
2. The absence of an existing solution must not be assumed without first completing this discovery work.
3. This evaluation must be completed at design time.

#### References

[Cost Awareness by Design](cost-awareness-by-design.md)

### Preference Order for Meeting a Need

These principles set a preference order for meeting a need: reuse, then adopt, then build.

1. A requirement should be met in the following order of preference: reusing an existing internal capability, adopting an external or commercial solution, then building a custom solution only where neither meets the requirement.
2. A custom solution must not be built solely because it is more familiar or convenient than an existing option that already meets the requirement.

#### References

[Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)\
[Platform Alignment](platform-alignment.md)

### Justifying a New Build

These principles require a new build to be justified by a documented gap, approved, and periodically reassessed.

1. A decision to build a new solution instead of reusing an existing one must be justified by a documented gap that the existing solution does not meet.
2. The justification must be approved before development begins.
3. A justified build should be reassessed periodically, since the gap that justified it may later be resolved by an existing solution.

### Designing for Reuse by Others

These principles expose a stable, versioned interface so other teams can adopt a component without depending on its internals.

1. A component, service, or library likely to be reused must expose a stable, documented interface so other teams can adopt it without depending on its internal implementation.
2. A reusable component should be versioned so that consuming teams can upgrade on their own schedule rather than being forced to change in lockstep with it.

#### References

[API Design & Standards](../standards/architecture-system-design/api-design-standards.md)\
[Dependency & Runtime Management](../standards/code-implementation/dependency-runtime-management.md)
