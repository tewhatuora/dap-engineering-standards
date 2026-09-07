# Infrastructure as Code

## Summary

> Infrastructure is defined as versioned code, and changed only through an automated, reviewed pipeline.

## Standards

### Modular Infrastructure Definitions

> Define infrastructure once as a versioned, parameterised module, and pin every consumer to a specific version.

1. Infrastructure **SHOULD** be defined using a reusable, parameterised module, rather than a definition duplicated and separately maintained for each environment or service that needs it.
2. A module **MUST** have one authoritative, version-controlled source shared across the environments and services that use it.
3. A shared module **MUST** be versioned, and a consumer of it **MUST** pin to a specific version rather than an unpinned or floating reference.
4. A module's environment-specific values, such as instance configuration, **MUST** be supplied as parameters, rather than hardcoded in a way that assumes production shares a non-production environment's conditions.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Reuse](../../principles/engineering-practice/reuse.md)
- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Environment Strategy](environment-strategy.md)

### Infrastructure Ownership & Placement

> Infrastructure has an accountable owner and is kept with its service or in a shared repository according to its scope.

1. Infrastructure tightly coupled to a single service **SHOULD** be held in that service's own repository, rather than a shared infrastructure repository.
2. Infrastructure shared across more than one service, or owned by a platform or operations team, **SHOULD** be held in a shared infrastructure repository.
3. Shared infrastructure **MUST** have one accountable owning team.
4. A shared infrastructure repository **SHOULD** document, in its `README`, how a consuming service uses the infrastructure it defines.

#### References

- [Code Review](../code-implementation/code-review.md)

### State Management

> Infrastructure state lives in a shared, access-controlled location, is protected from concurrent modification, and remains recoverable.

1. Infrastructure state **MUST** be stored in a shared, access-controlled location separate from the code repository, rather than held on an individual's own workstation.
2. Concurrent changes to infrastructure state **MUST** be prevented through state locking or an equivalent control.
3. A sensitive value captured in infrastructure state, such as a generated credential or certificate, **MUST** be protected to the same standard as a secret stored anywhere else.
4. Infrastructure state **MUST** be recoverable after accidental deletion or corruption.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Change Preview & Review

> Preview an infrastructure change before applying it, and review that preview alongside the code that produced it.

1. Before a proposed infrastructure change is applied, a preview **MUST** be generated showing which resources will be added, changed, or destroyed.
2. That preview **MUST** be reviewed alongside the change's code, so a change with a disproportionate or unintended effect is caught before being applied.
3. A record of what was previewed and what was actually applied **SHOULD** be retained, so a past infrastructure change remains traceable.

#### References

- [Code Review](../code-implementation/code-review.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

### Automated Application

> Apply a planned infrastructure change through an automated pipeline using its own credential, and reconcile any emergency intervention into code.

1. A planned infrastructure change **MUST** be applied through an automated pipeline.
2. The pipeline applying an infrastructure change **MUST** use its own credential, such as a service account, distinct from any individual's personal credential.
3. The same automated pipeline **SHOULD** be used to apply an infrastructure change across every environment it is promoted through, rather than a separate, divergent pipeline per environment.

#### References

- [Automation](../../principles/engineering-practice/automation.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

### Drift Detection & Reconciliation

> Compare live infrastructure against its code definition on a recurring basis, so an out-of-band change is caught early.

1. Live infrastructure **SHOULD** be compared against its code definition on a recurring, automated basis, so an out-of-band change is identified before it is unintentionally reverted.
2. A change applied outside the automated pipeline, such as one made to resolve an incident, **MUST** be incorporated into its code definition before that infrastructure is next changed through the pipeline.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
