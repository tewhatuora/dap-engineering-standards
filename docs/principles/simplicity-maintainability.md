# Simplicity & Maintainability

## Summary

> Add no more complexity than an actual requirement justifies, and remove what is no longer needed.

## Principles

### Minimum Sufficient Solution

> A design adds no more complexity or configurability than an actual, current requirement justifies.

1. A design or implementation **MUST NOT** introduce complexity, abstraction, or configurability beyond what is justified by an actual, current requirement.
2. A capability **MUST NOT** be built to anticipate a possible future requirement before that requirement has been confirmed.
3. Where more than one solution meets a requirement equally well, the simplest to understand and maintain **MUST** be preferred.

### Readability & Consistent Conventions

> Code is written to be readily understood by another engineer, with naming and formatting applied consistently.

1. Code **MUST** be written to be readily understood by another engineer, not only to satisfy functional requirements.
2. Naming, formatting, and structural conventions **MUST** be applied consistently within a codebase.
3. A conflict between a more concise implementation and a more readable one **SHOULD** be resolved in favour of readability.

#### References

- [Coding Standards & Formatting](../standards/code-implementation/coding-standards-formatting.md)
- [Linting & Style Enforcement](../standards/code-implementation/linting-style-enforcement.md)

### Component Modularity

> A component's responsibility and interface stay clear and stable, so a dependent is not forced to change with its internals.

1. A component or service **MUST** have a clearly defined responsibility and boundary, such that its purpose can be determined without inspecting its internal implementation.
2. Coupling between components **SHOULD** be minimised so a change to one does not require understanding or changing unrelated components.
3. A component's defined interface **MUST** remain stable independently of its internal implementation, so a dependent component is not required to change when only the internal implementation changes.

#### References

- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Complexity & Technical Debt

> Complexity and technical debt are tracked as work proceeds, and debt that impairs maintainability receives a remediation plan.

1. Complexity and technical debt **SHOULD** be identified and recorded as engineering work proceeds, not left untracked.
2. Technical debt that materially impairs a service's maintainability **MUST** be remediated; it **MUST NOT** be deferred indefinitely without a plan.
3. Refactoring **SHOULD** be treated as ongoing engineering practice.

#### References

- [Linting & Style Enforcement](../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)

### Dependency & Technology Diversity

> A new dependency is justified against the maintenance burden it introduces, and one no longer needed is removed.

1. A new dependency, library, or framework **MUST** be justified by the need it meets, weighed against the ongoing maintenance burden it introduces.
2. The number of distinct languages, frameworks, or tools used to solve substantially similar problems **SHOULD** be minimised across a team's portfolio.
3. A dependency no longer required **MUST** be removed.

#### References

- [Dependency & Runtime Management](../standards/code-implementation/dependency-runtime-management.md)
- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Dead Code Removal

> Code, features, or configuration no longer needed is removed, not left carrying a comprehension cost indefinitely.

1. Code, features, or configuration no longer required **SHOULD** be removed, since unused code still carries a comprehension and maintenance cost.
2. Functionality retired from use **MUST** have its code removed within a reasonable period, rather than left in place indefinitely alongside its replacement.

#### References

- [Feature Flagging](../standards/delivery-release/feature-flagging.md)

### Complexity & Maintainability Checks

> Code review and static analysis both watch for unnecessary complexity, catching a maintainability decline as it happens.

1. Code review **SHOULD** evaluate whether a change introduces unnecessary complexity, in addition to its functional correctness.
2. Static analysis **SHOULD** be used to measure indicators of maintainability, such as complexity or duplication, so degradation can be identified as it occurs.

#### References

- [Code Review](../standards/code-implementation/code-review.md)
- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)
