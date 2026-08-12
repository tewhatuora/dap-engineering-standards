# Simplicity & Maintainability

## Objective

Simplicity & Maintainability establishes the expectation that systems and code are built to be as simple as a requirement allows and kept straightforward to understand, change, and support, rather than accumulating unnecessary complexity over time. It directs engineering effort toward limiting complexity and technical debt, so a system can be maintained efficiently by engineers other than its original authors.

## Principles

### Preferring the Simplest Sufficient Solution

These principles keep a design as simple as an actual, current requirement allows.

1. A design or implementation must not introduce complexity, abstraction, or configurability beyond what is justified by an actual, current requirement.
2. A capability must not be built to anticipate a possible future requirement before that requirement has been confirmed.
3. Where more than one solution meets a requirement equally well, the simplest to understand and maintain must be preferred.

### Readability & Consistent Conventions

These principles write code to be readily understood by another engineer, with consistent conventions.

1. Code must be written to be readily understood by another engineer, not only to satisfy functional requirements.
2. Naming, formatting, and structural conventions must be applied consistently within a codebase.
3. A conflict between a more concise implementation and a more readable one should be resolved in favour of readability.

#### References

- [Coding Standards & Formatting](../standards/code-implementation/coding-standards-formatting.md)
- [Linting & Style Enforcement](../standards/code-implementation/linting-style-enforcement.md)

### Modularity & Clear Boundaries

These principles keep a component's responsibility, boundary, and interface clear and stable.

1. A component or service must have a clearly defined responsibility and boundary, such that its purpose can be determined without inspecting its internal implementation.
2. Coupling between components should be minimised so a change to one does not require understanding or changing unrelated components.
3. A component's defined interface must remain stable independently of its internal implementation, so a dependent component is not required to change when only the internal implementation changes.

#### References

- [Service & Domain Design](../standards/architecture-system-design/service-domain-design.md)

### Managing Complexity & Technical Debt Over Time

These principles track complexity and technical debt as engineering work proceeds, so it can be remediated.

1. Complexity and technical debt should be identified and recorded as engineering work proceeds, not left untracked.
2. Technical debt that materially impairs a service's maintainability must be remediated; it must not be deferred indefinitely without a plan.
3. Refactoring should be treated as ongoing engineering practice.

### Minimising Unnecessary Dependencies & Technology Diversity

These principles justify a new dependency and minimise the number of distinct technologies solving the same problem.

1. A new dependency, library, or framework must be justified by the need it meets, weighed against the ongoing maintenance burden it introduces.
2. The number of distinct languages, frameworks, or tools used to solve substantially similar problems should be minimised across a team's portfolio.
3. A dependency no longer required must be removed.

#### References

- [Dependency & Runtime Management](../standards/code-implementation/dependency-runtime-management.md)
- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Removing Unused or Dead Code

These principles remove code, features, or configuration no longer required.

1. Code, features, or configuration no longer required should be removed, since unused code still carries a comprehension and maintenance cost.
2. Functionality retired from use must have its code removed within a reasonable period, rather than left in place indefinitely alongside its replacement.

### Maintainability Verified Through Review

These principles evaluate complexity and maintainability through code review and static analysis.

1. Code review should evaluate whether a change introduces unnecessary complexity, in addition to its functional correctness.
2. Static analysis should be used to measure indicators of maintainability, such as complexity or duplication, so degradation can be identified as it occurs.

#### References

- [Code Review](../standards/code-implementation/code-review.md)
- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)
