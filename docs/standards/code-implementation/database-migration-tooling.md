# Database Migration Tooling

## Migration Tooling

### Summary

A planned schema or data change is applied through dedicated migration tooling that tracks versioned migrations, integrates with the deployment pipeline, and leaves the database recoverable after a partial failure.

### Standards

1. `std-code-migration-tooling-01` A planned change to a database's schema, or a planned bulk or corrective change to its data, **MUST** be applied through dedicated migration tooling.
2. `std-code-migration-tooling-02` A direct change made to restore service **MUST** be captured in version-controlled migration code and reconciled across affected database instances.
3. `std-code-migration-tooling-03` A migration tool **MUST** support version-controlled migration files, track which migration has been applied to a given instance, and integrate with the service's automated deployment pipeline.
4. `std-code-migration-tooling-04` A service **SHOULD** use one migration tool consistently for a given database.
5. `std-code-migration-tooling-05` A migration tool **MUST** leave the database in a defined, recoverable state after a partial failure.

### Related Standards

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Versioned & Repeatable Migrations

### Summary

A versioned migration is ordered and immutable once merged; a repeatable migration instead re-applies automatically.

### Standards

1. `std-code-versioned-repeatable-migrations-01` A versioned migration **MUST** be defined in its own version-controlled file, identified by a unique, monotonically ordered identifier, such as a timestamp or sequence number, together with a short descriptive name.
2. `std-code-versioned-repeatable-migrations-02` A migration tool **MUST** apply a service's versioned migrations strictly in the order defined by their identifiers.
3. `std-code-versioned-repeatable-migrations-03` Once a versioned migration has been merged into a protected branch, its file **MUST NOT** be edited.
4. `std-code-versioned-repeatable-migrations-04` A correction to an already-merged versioned migration **MUST** be made through a new migration.
5. `std-code-versioned-repeatable-migrations-05` A migration tool **MAY** support a repeatable migration, such as one defining a view or stored procedure.
6. `std-code-versioned-repeatable-migrations-06` A repeatable migration **MUST** be re-applied automatically whenever its content changes and remain idempotent.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Migration History

### Summary

A database's applied-migration history records applied migrations, verifies their integrity where supported, and is modified only by the migration tool.

### Standards

1. `std-code-migration-history-01` A migration tool **MUST** record, within the target database or an equivalent authoritative store, which migration has been applied to that specific instance.
2. `std-code-migration-history-02` Where a migration tool records checksums, it **MUST** verify an already-applied versioned migration's checksum before applying a later migration.
3. `std-code-migration-history-03` A checksum mismatch **MUST** halt migration execution.
4. `std-code-migration-history-04` A database instance's applied-migration history **MUST** be modified only by the migration tool.
5. `std-code-migration-history-05` A migration tool **MUST NOT** re-apply a versioned migration already recorded in the database instance's applied-migration history.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)

## Existing Database Baselines

### Summary

Adopting migration tooling for an existing database starts with a deliberate baseline and a clearly identified owner.

### Standards

1. `std-code-existing-database-baselines-01` Where migration tooling is adopted for a database whose schema already exists outside that tooling's history, a baseline **MUST** be recorded marking that schema as the starting point for the database's applied-migration history.
2. `std-code-existing-database-baselines-02` Where more than one service currently reads from or writes to a database being baselined, an owning service **MUST** be identified as part of that baseline work.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Migration Review

### Summary

A migration is reviewed and approved before it reaches production, with database expertise applied where appropriate.

### Standards

1. `std-code-migration-review-01` A migration file **SHOULD** be reviewed and approved by a reviewer with database expertise before it is merged.
2. `std-code-migration-review-02` Where a migration tool can preview its change, the preview **SHOULD** be approved by a reviewer with database expertise other than the author before the migration reaches production.

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Rollback & Recovery

### Summary

A migration is reversible where possible, and backed by a verified recovery point where it is not.

### Standards

1. `std-code-rollback-recovery-01` A migration **SHOULD** provide a corresponding reverse migration capable of returning a database instance's schema to its state prior to that migration's application.
2. `std-code-rollback-recovery-02` A migration that cannot be safely reversed, such as one that deletes data or performs an irreversible transformation, **MUST** have a verified backup or equivalent recovery point in place before it is applied to a production database.
3. `std-code-rollback-recovery-03` A reverse migration, where one exists, **MUST** be tested to the same standard as the forward migration it reverses.

### Related Standards

- [Rollback Strategy](../delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Locking & Performance

### Summary

A migration's locking behaviour and performance impact are assessed beforehand, and a large backfill runs in batches.

### Standards

1. `std-code-locking-performance-01` A migration **MUST** be assessed for its locking behaviour and performance impact before it is applied, particularly where it affects a large or heavily-accessed table.
2. `std-code-locking-performance-02` A large data backfill or transformation **MUST** be defined as its own migration, separate from a structural schema change, so it does not extend that change's lock duration.
3. `std-code-locking-performance-03` A large data backfill **SHOULD** be executed in bounded batches.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Pre-Production Testing

### Summary

A migration is verified with representative data in a production-like lower environment before production deployment.

### Standards

1. `std-code-pre-production-testing-01` A migration, including a reverse migration where one exists, **MUST** be executed and verified in a lower environment before it is applied to production.
2. `std-code-pre-production-testing-02` A lower environment used to verify a migration **SHOULD** hold data representative of production's volume and shape, so a migration's performance and behaviour are validated realistically.
3. `std-code-pre-production-testing-03` A migration that fails verification in a lower environment **MUST NOT** be applied to production until the cause of that failure is resolved.

### Related Standards

- [Integration Testing](../quality-engineering/integration-testing.md)
- [Test Data Management](../quality-engineering/test-data-management.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Pipeline Execution

### Summary

A migration runs automatically and traceably within the deployment pipeline, and a failed migration halts deployment until its cause is resolved.

### Standards

1. `std-code-pipeline-execution-01` A migration **MUST** be executed automatically as part of a service's automated deployment pipeline.
2. `std-code-pipeline-execution-02` A migration **SHOULD NOT** be run manually against a live database by an individual.
3. `std-code-pipeline-execution-03` A deployment pipeline **MUST NOT** deploy a service's application code to an environment before that environment's required migration has completed successfully.
4. `std-code-pipeline-execution-04` A migration's execution, including which migration ran, when, and its outcome, **MUST** be logged in a way that is traceable back to the deployment that triggered it.
5. `std-code-pipeline-execution-05` A failed migration **MUST** halt its deployment pipeline.
6. `std-code-pipeline-execution-06` A deployment halted by a failed migration **MUST NOT** proceed until the cause of the migration failure is resolved.

### Related Standards

- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)
