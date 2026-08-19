# Simplicity & Maintainability

## Summary

> Add no more complexity than an actual requirement justifies, and remove what is no longer needed.

## Objective

This principle establishes the expectation that systems and code are built to be as simple as a requirement allows and kept straightforward to understand, change, and support. It keeps complexity and technical debt limited, so a system can be maintained efficiently by engineers other than its original authors.

## Principles

### Minimum Sufficient Solution

These principles set out how a design remains as simple as an actual, current requirement allows.

1. A design or implementation **MUST NOT** introduce complexity, abstraction, or configurability beyond what is justified by an actual, current requirement.
2. A capability **MUST NOT** be built to anticipate a possible future requirement before that requirement has been confirmed.
3. Where more than one solution meets a requirement equally well, the simplest to understand and maintain **MUST** be preferred.

### Readability & Consistent Conventions

These principles describe how code is written to be readily understood by another engineer, with consistent conventions.

1. Code **MUST** be written to be readily understood by another engineer, not only to satisfy functional requirements.
2. Naming, formatting, and structural conventions **MUST** be applied consistently within a codebase.
3. A conflict between a more concise implementation and a more readable one **SHOULD** be resolved in favour of readability.

#### References

- [Coding Standards & Formatting](../standards/code-implementation/coding-standards-formatting.md)
- [Linting & Style Enforcement](../standards/code-implementation/linting-style-enforcement.md)

### Component Modularity

These principles address how a component's responsibility, boundary, and interface remain clear and stable.

1. A component or service **MUST** have a clearly defined responsibility and boundary, such that its purpose can be determined without inspecting its internal implementation.
2. Coupling between components **SHOULD** be minimised so a change to one does not require understanding or changing unrelated components.
3. A component's defined interface **MUST** remain stable independently of its internal implementation, so a dependent component is not required to change when only the internal implementation changes.

#### References

- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Complexity & Technical Debt

These principles set out how complexity and technical debt are tracked as engineering work proceeds, so they are remediated.

1. Complexity and technical debt **SHOULD** be identified and recorded as engineering work proceeds, not left untracked.
2. Technical debt that materially impairs a service's maintainability **MUST** be remediated; it **MUST NOT** be deferred indefinitely without a plan.
3. Refactoring **SHOULD** be treated as ongoing engineering practice.

### Dependency & Technology Diversity

These principles cover how a new dependency is justified and the number of distinct technologies solving the same problem is minimised.

1. A new dependency, library, or framework **MUST** be justified by the need it meets, weighed against the ongoing maintenance burden it introduces.
2. The number of distinct languages, frameworks, or tools used to solve substantially similar problems **SHOULD** be minimised across a team's portfolio.
3. A dependency no longer required **MUST** be removed.

#### References

- [Dependency & Runtime Management](../standards/code-implementation/dependency-runtime-management.md)
- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Dead Code Removal

These principles describe how code, features, or configuration no longer required is removed.

1. Code, features, or configuration no longer required **SHOULD** be removed, since unused code still carries a comprehension and maintenance cost.
2. Functionality retired from use **MUST** have its code removed within a reasonable period, rather than left in place indefinitely alongside its replacement.

### Complexity & Maintainability Checks

These principles guide how complexity and maintainability are evaluated through code review and static analysis.

1. Code review **SHOULD** evaluate whether a change introduces unnecessary complexity, in addition to its functional correctness.
2. Static analysis **SHOULD** be used to measure indicators of maintainability, such as complexity or duplication, so degradation can be identified as it occurs.

#### References

- [Code Review](../standards/code-implementation/code-review.md)
- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)
