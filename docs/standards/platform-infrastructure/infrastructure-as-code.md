---
last_edited: 2026-09-14
---

# Infrastructure as Code

## Ownership & Repositories

### Summary

Infrastructure has an accountable owner and is kept with its service or in a shared repository according to its scope.

### Standards

1. Infrastructure tightly coupled to a single service **SHOULD** be held in that service's own repository. `std-plat-ownership-repositories-01`
2. Infrastructure shared across more than one service, or owned by a platform or operations team, **SHOULD** be held in a shared infrastructure repository. `std-plat-ownership-repositories-02`
3. Shared infrastructure **MUST** have one accountable owning team. `std-plat-ownership-repositories-03`
4. A shared infrastructure repository **SHOULD** document, in its `README`, how a consuming service uses the infrastructure it defines. `std-plat-ownership-repositories-04`

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)

## Infrastructure Modules

### Summary

Infrastructure uses authoritative, reusable, versioned modules with parameterised environment values and external consumers pinned to specific versions.

### Standards

1. Infrastructure **SHOULD** be defined using a reusable, parameterised module. `std-plat-infrastructure-modules-01`
2. A module **MUST** have one authoritative, version-controlled source shared across the environments and services that use it. `std-plat-infrastructure-modules-02`
3. A shared module **MUST** be versioned. `std-plat-infrastructure-modules-03`
4. A consumer outside a shared module's source repository **MUST** pin to a specific version. `std-plat-infrastructure-modules-04`
5. A module's environment-specific values, such as instance configuration, **MUST** be supplied as parameters. `std-plat-infrastructure-modules-05`

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## State Management

### Summary

Infrastructure state lives in a shared, access-controlled location, is protected from concurrent modification, and remains recoverable.

### Standards

1. Infrastructure state **MUST** be stored in a shared, access-controlled location separate from the code repository. `std-plat-state-management-01`
2. Concurrent changes to infrastructure state **MUST** be prevented through state locking or an equivalent control. `std-plat-state-management-02`
3. A sensitive value captured in infrastructure state, such as a generated credential or certificate, **MUST** be protected to the same standard as a secret stored anywhere else. `std-plat-state-management-03`
4. Infrastructure state **MUST** be recoverable after accidental deletion or corruption. `std-plat-state-management-04`

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Change Preview

### Summary

An infrastructure change is previewed before application, reviewed with its code, and retained with the applied result for traceability.

### Standards

1. Before a proposed infrastructure change is applied, a preview **MUST** be generated showing which resources will be added, changed, or destroyed. `std-plat-change-preview-01`
2. An infrastructure change preview **MUST** be reviewed alongside the change's code, so a change with a disproportionate or unintended effect is caught before being applied. `std-plat-change-preview-02`
3. A record of what was previewed and what was actually applied **SHOULD** be retained, so a past infrastructure change remains traceable. `std-plat-change-preview-03`

### Related Standards

- [Code Review](../code-implementation/code-review.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Pipeline Application

### Summary

A planned infrastructure change is applied through an automated pipeline using its own credential, with shared pipeline logic used across environments where practical.

### Standards

1. A planned infrastructure change **MUST** be applied through an automated pipeline. `std-plat-pipeline-application-01`
2. The pipeline applying an infrastructure change **MUST** use its own credential, such as a service account, distinct from any individual's personal credential. `std-plat-pipeline-application-02`
3. The same automated pipeline **SHOULD** be used to apply an infrastructure change across every environment it is promoted through. `std-plat-pipeline-application-03`

### Related Standards

- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Drift Management

### Summary

Recurring comparison identifies drift between live infrastructure and its code definition, and out-of-band changes are incorporated before the next pipeline change.

### Standards

1. Live infrastructure **SHOULD** be compared against its code definition on a recurring, automated basis, so an out-of-band change is identified before it is unintentionally reverted. `std-plat-drift-management-01`
2. A change applied outside the automated pipeline, such as one made to resolve an incident, **MUST** be incorporated into its code definition before that infrastructure is next changed through the pipeline. `std-plat-drift-management-02`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
