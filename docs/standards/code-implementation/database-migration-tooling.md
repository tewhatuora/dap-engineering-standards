# Database Migration Tooling

## Objective

Database Migration Tooling governs how a change to a database's schema, or a bulk or corrective change to its data, is defined as version-controlled migration code and executed automatically, rather than applied by hand against a live database. It keeps every environment's database state reproducible from the same migration history, and keeps that execution reversible where feasible and free of avoidable disruption to a running service.

## Standards

### Dedicated Migration Tooling

These requirements address how a change to a database's schema or data is applied, so it goes through tooling capable of tracking and repeating it reliably instead of a direct, ad hoc query or script.

1. A change to a database's schema, or a bulk or corrective change to its data, must be applied exclusively through a dedicated migration tool; it must not be applied through the direct, ad hoc execution of a query, statement, or script against any database instance.
2. A migration tool must support version-controlled migration files, track which migration has been applied to a given instance, and integrate with the service's automated deployment pipeline.
3. A service must use one migration tool consistently for a given database.
4. A database engine's behaviour on a migration's partial failure must be confirmed prior to a migration tool's selection, and accounted for in how that migration tool is configured.

#### References

[Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)\
[Everything as Code](../../principles/everything-as-code.md)

### Versioned & Repeatable Migrations

These requirements set out how a versioned migration is identified, ordered, and kept unchangeable once merged, and how a repeatable migration instead stays current through automatic re-application.

1. A versioned migration must be defined in its own version-controlled file, identified by a unique, monotonically ordered identifier, such as a timestamp or sequence number, together with a short descriptive name.
2. A migration tool must apply a service's versioned migrations strictly in the order defined by their identifiers.
3. Once a versioned migration has been merged into a protected branch, its file must not be edited; a correction to an already-merged versioned migration must be made through a new migration, not by altering the original.
4. A migration tool may support a repeatable migration, such as one defining a view or stored procedure; it must be re-applied automatically whenever its content changes and remain idempotent.

#### References

[Version Control](version-control.md)\
[Branching Strategy](branching-strategy.md)

### Migration History Integrity

These requirements describe how a database instance's applied-migration history is recorded and kept trustworthy, so its current schema state stays verifiable.

1. A migration tool must record, within the target database or an equivalent authoritative store, which migration has been applied to that specific instance, together with a checksum of that migration's content.
2. A migration tool must verify an already-applied versioned migration's checksum against its recorded value before applying a later migration; a mismatch must halt execution rather than proceed against an untrustworthy migration history.
3. A database instance's applied-migration history must not be edited manually; only the migration tool may modify it.
4. A migration tool must not re-apply a versioned migration already recorded in that history.

#### References

[Data Access & Transaction Management](data-access-transaction-management.md)

### Baselining an Existing Database

These requirements cover how migration tooling is adopted for a database whose schema predates it, so that database's starting point and ownership are established deliberately.

1. Where migration tooling is adopted for a database whose schema already exists outside that tooling's history, a baseline must be recorded marking that schema as the starting point for the database's applied-migration history.
2. Where more than one service currently reads from or writes to a database being baselined, an owning service must be identified as part of that baseline work.

#### References

[Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)

### Migration Review & Approval

These requirements cover how a migration is reviewed and approved by the DBA team before it reaches production.

1. The path holding a service's migration files must have a DBA team declared as its owner in `CODEOWNERS`, so that team's review is enforced before a migration file can merge.
2. Where a migration tool can preview its change, a DBA team member other than the author must approve that preview through a manual pipeline step before the migration reaches production.

#### References

[Code Review](code-review.md)\
[Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)

### Pipeline-Driven Execution

These requirements guide how a migration is executed within a deployment pipeline, so every environment's database state advances in step with its code instead of accumulating environmental drift through a separate manual step.

1. A migration must be executed automatically as part of a service's automated deployment pipeline; it must not be run manually against a live database by an individual.
2. A deployment pipeline must not deploy a service's application code to an environment before that environment's required migration has completed successfully.
3. A migration's execution, including which migration ran, when, and its outcome, must be logged in a way that is traceable back to the deployment that triggered it.
4. A failed migration must halt its deployment pipeline; deployment must not proceed until the cause of that failure is resolved.

#### References

[Automation First](../../principles/automation-first.md)\
[Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)\
[Observability by Default](../../principles/observability-by-default.md)\
[Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Rollback & Irreversible Changes

These requirements address how a migration is reversed or, where reversal is not possible, otherwise safeguarded, so a database stays recoverable from an unwanted migration's effect.

1. A migration should provide a corresponding reverse migration capable of returning a database instance's schema to its state prior to that migration's application.
2. A migration that cannot be safely reversed, such as one that deletes data or performs an irreversible transformation, must have a verified backup or equivalent recovery point in place before it is applied to a production database.
3. A reverse migration, where one exists, must be tested to the same standard as the forward migration it reverses.

#### References

[Rollback Strategy](../delivery-release/rollback-strategy.md)\
[Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)\
[Reliability & Resilience](../../principles/reliability-resilience.md)

### Locking & Performance Impact

These requirements describe how a migration's locking behaviour and performance impact on a live, in-use database are assessed and managed, so a change does not lock or degrade a table beyond a service's tolerance.

1. A migration must be assessed for its locking behaviour and performance impact before it is applied, particularly where it affects a large or heavily-accessed table.
2. A large data backfill or transformation must be defined as its own migration, separate from a structural schema change, so it does not extend that change's lock duration.
3. A large data backfill should be executed in batches, rather than as a single unbounded operation.

#### References

[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Testing Migrations Before Production

These requirements set out how a migration is verified before it reaches production, so its behaviour and performance are confirmed against realistic conditions first.

1. A migration, including a reverse migration where one exists, must be executed and verified in a lower environment before it is applied to production.
2. A lower environment used to verify a migration should hold data representative of production's volume and shape, so a migration's performance and behaviour are validated realistically.
3. A migration that fails verification in a lower environment must not be applied to production until the cause of that failure is resolved.

#### References

[Test Data Management](../quality-engineering/test-data-management.md)\
[Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)\
[Testability by Design](../../principles/testability-by-design.md)
