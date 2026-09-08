# Infrastructure as Code

## Ownership & Repositories

### Summary

Infrastructure has an accountable owner and is kept with its service or in a shared repository according to its scope.

### Standards

1. `std-plat-ownership-repositories-01` Infrastructure tightly coupled to a single service **SHOULD** be held in that service's own repository.
2. `std-plat-ownership-repositories-02` Infrastructure shared across more than one service, or owned by a platform or operations team, **SHOULD** be held in a shared infrastructure repository.
3. `std-plat-ownership-repositories-03` Shared infrastructure **MUST** have one accountable owning team.
4. `std-plat-ownership-repositories-04` A shared infrastructure repository **SHOULD** document, in its `README`, how a consuming service uses the infrastructure it defines.

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)

## Infrastructure Modules

### Summary

Infrastructure uses authoritative, reusable, versioned modules with parameterised environment values and external consumers pinned to specific versions.

### Standards

1. `std-plat-infrastructure-modules-01` Infrastructure **SHOULD** be defined using a reusable, parameterised module.
2. `std-plat-infrastructure-modules-02` A module **MUST** have one authoritative, version-controlled source shared across the environments and services that use it.
3. `std-plat-infrastructure-modules-03` A shared module **MUST** be versioned.
4. `std-plat-infrastructure-modules-04` A consumer outside a shared module's source repository **MUST** pin to a specific version.
5. `std-plat-infrastructure-modules-05` A module's environment-specific values, such as instance configuration, **MUST** be supplied as parameters.

### Implements These Principles

- [Reuse](../../principles/engineering-practice/reuse.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## State Management

### Summary

Infrastructure state lives in a shared, access-controlled location, is protected from concurrent modification, and remains recoverable.

### Standards

1. `std-plat-state-management-01` Infrastructure state **MUST** be stored in a shared, access-controlled location separate from the code repository.
2. `std-plat-state-management-02` Concurrent changes to infrastructure state **MUST** be prevented through state locking or an equivalent control.
3. `std-plat-state-management-03` A sensitive value captured in infrastructure state, such as a generated credential or certificate, **MUST** be protected to the same standard as a secret stored anywhere else.
4. `std-plat-state-management-04` Infrastructure state **MUST** be recoverable after accidental deletion or corruption.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Change Preview

### Summary

An infrastructure change is previewed before application, reviewed with its code, and retained with the applied result for traceability.

### Standards

1. `std-plat-change-preview-01` Before a proposed infrastructure change is applied, a preview **MUST** be generated showing which resources will be added, changed, or destroyed.
2. `std-plat-change-preview-02` An infrastructure change preview **MUST** be reviewed alongside the change's code, so a change with a disproportionate or unintended effect is caught before being applied.
3. `std-plat-change-preview-03` A record of what was previewed and what was actually applied **SHOULD** be retained, so a past infrastructure change remains traceable.

### Related Standards

- [Code Review](../code-implementation/code-review.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Pipeline Application

### Summary

A planned infrastructure change is applied through an automated pipeline using its own credential, with shared pipeline logic used across environments where practical.

### Standards

1. `std-plat-pipeline-application-01` A planned infrastructure change **MUST** be applied through an automated pipeline.
2. `std-plat-pipeline-application-02` The pipeline applying an infrastructure change **MUST** use its own credential, such as a service account, distinct from any individual's personal credential.
3. `std-plat-pipeline-application-03` The same automated pipeline **SHOULD** be used to apply an infrastructure change across every environment it is promoted through.

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

1. `std-plat-drift-management-01` Live infrastructure **SHOULD** be compared against its code definition on a recurring, automated basis, so an out-of-band change is identified before it is unintentionally reverted.
2. `std-plat-drift-management-02` A change applied outside the automated pipeline, such as one made to resolve an incident, **MUST** be incorporated into its code definition before that infrastructure is next changed through the pipeline.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
