# Database Migration Tooling

## Summary

> Define every schema or data change as version-controlled migration code, applied consistently through dedicated tooling.

## Standards

### Dedicated Migration Tooling

> A schema or data change goes only through dedicated migration tooling, never a direct, ad hoc query against a database.

1. A change to a database's schema, or a bulk or corrective change to its data, **MUST** be applied exclusively through a dedicated migration tool; it **MUST NOT** be applied through the direct, ad hoc execution of a query, statement, or script against any database instance.
2. A migration tool **MUST** support version-controlled migration files, track which migration has been applied to a given instance, and integrate with the service's automated deployment pipeline.
3. A service **MUST** use one migration tool consistently for a given database.
4. A database engine's behaviour on a migration's partial failure **MUST** be confirmed prior to a migration tool's selection, and accounted for in how that migration tool is configured.

#### References

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

### Versioned & Repeatable Migrations

> A versioned migration is ordered and immutable once merged; a repeatable migration instead re-applies automatically.

1. A versioned migration **MUST** be defined in its own version-controlled file, identified by a unique, monotonically ordered identifier, such as a timestamp or sequence number, together with a short descriptive name.
2. A migration tool **MUST** apply a service's versioned migrations strictly in the order defined by their identifiers.
3. Once a versioned migration has been merged into a protected branch, its file **MUST NOT** be edited; a correction to an already-merged versioned migration **MUST** be made through a new migration, not by altering the original.
4. A migration tool **MAY** support a repeatable migration, such as one defining a view or stored procedure; it **MUST** be re-applied automatically whenever its content changes and remain idempotent.

#### References

- [Version Control](version-control.md)
- [Branching Strategy](branching-strategy.md)

### Migration History Integrity

> A database's applied-migration history is checksum-verified and never edited by hand, so its schema state stays trustworthy.

1. A migration tool **MUST** record, within the target database or an equivalent authoritative store, which migration has been applied to that specific instance, together with a checksum of that migration's content.
2. A migration tool **MUST** verify an already-applied versioned migration's checksum against its recorded value before applying a later migration; a mismatch **MUST** halt execution rather than proceed against an untrustworthy migration history.
3. A database instance's applied-migration history **MUST NOT** be edited manually; only the migration tool **MAY** modify it.
4. A migration tool **MUST NOT** re-apply a versioned migration already recorded in that history.

### Baselining an Existing Database

> Adopting migration tooling for an existing database starts with a deliberate baseline and a clearly identified owner.

1. Where migration tooling is adopted for a database whose schema already exists outside that tooling's history, a baseline **MUST** be recorded marking that schema as the starting point for the database's applied-migration history.
2. Where more than one service currently reads from or writes to a database being baselined, an owning service **MUST** be identified as part of that baseline work.

#### References

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)

### Migration Review & Approval

> A migration is reviewed and approved by the DBA team before it reaches production.

1. The path holding a service's migration files **MUST** have a DBA team declared as its owner in `CODEOWNERS`, so that team's review is enforced before a migration file can merge.
2. Where a migration tool can preview its change, a DBA team member other than the author **MUST** approve that preview through a manual pipeline step before the migration reaches production.

#### References

- [Code Review](code-review.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)

### Pipeline-Driven Execution

> A migration runs automatically within the deployment pipeline, and a failed migration halts that pipeline.

1. A migration **MUST** be executed automatically as part of a service's automated deployment pipeline; it **MUST NOT** be run manually against a live database by an individual.
2. A deployment pipeline **MUST NOT** deploy a service's application code to an environment before that environment's required migration has completed successfully.
3. A migration's execution, including which migration ran, when, and its outcome, **MUST** be logged in a way that is traceable back to the deployment that triggered it.
4. A failed migration **MUST** halt its deployment pipeline; deployment **MUST NOT** proceed until the cause of that failure is resolved.

#### References

- [Automation First](../../principles/engineering-practice/automation-first.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)
- [Observability by Default](../../principles/reliability-operations/observability-by-default.md)
- [Fast Feedback by Design](../../principles/engineering-practice/fast-feedback-by-design.md)

### Rollback & Irreversible Changes

> A migration is reversible where possible, and backed by a verified recovery point where it is not.

1. A migration **SHOULD** provide a corresponding reverse migration capable of returning a database instance's schema to its state prior to that migration's application.
2. A migration that cannot be safely reversed, such as one that deletes data or performs an irreversible transformation, **MUST** have a verified backup or equivalent recovery point in place before it is applied to a production database.
3. A reverse migration, where one exists, **MUST** be tested to the same standard as the forward migration it reverses.

#### References

- [Rollback Strategy](../delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Locking & Performance Impact

> A migration's locking behaviour and performance impact are assessed beforehand, and a large backfill runs in batches.

1. A migration **MUST** be assessed for its locking behaviour and performance impact before it is applied, particularly where it affects a large or heavily-accessed table.
2. A large data backfill or transformation **MUST** be defined as its own migration, separate from a structural schema change, so it does not extend that change's lock duration.
3. A large data backfill **SHOULD** be executed in batches, rather than as a single unbounded operation.

#### References

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)

### Testing Migrations Before Production

> A migration is verified in a production-like lower environment before it is ever applied to production.

1. A migration, including a reverse migration where one exists, **MUST** be executed and verified in a lower environment before it is applied to production.
2. A lower environment used to verify a migration **SHOULD** hold data representative of production's volume and shape, so a migration's performance and behaviour are validated realistically.
3. A migration that fails verification in a lower environment **MUST NOT** be applied to production until the cause of that failure is resolved.

#### References

- [Test Data Management](../quality-engineering/test-data-management.md)
- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Testability by Design](../../principles/quality/testability-by-design.md)
