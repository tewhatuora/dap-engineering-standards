# Schema Design & Evolution

## Schema Ownership

### Summary

A schema is owned by exactly one service; no other service accesses or modifies it directly.

### Standards

1. `std-arch-schema-ownership-01` A schema **MUST** be owned by exactly one service.
2. `std-arch-schema-ownership-02` Another service **MUST NOT** directly access or modify a data store it does not own.

### Related Standards

- [Service & Domain Design](service-domain-design.md)

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)

## Data Models & Keys

### Summary

A schema's data model and key strategy fit the workload's actual access patterns.

### Standards

1. `std-arch-data-models-keys-01` A schema's data model, whether relational, document, key-value, wide-column, or another structure, **MUST** be selected based on a workload's actual access patterns, consistency requirements, and query needs.
2. `std-arch-data-models-keys-02` A relational schema **SHOULD** be normalised to at least Third Normal Form (3NF) to eliminate redundant and inconsistent data, with denormalisation applied only where a specific, demonstrated performance need justifies it.
3. `std-arch-data-models-keys-03` A schema's primary key strategy **MUST** suit the workload's write concurrency and indexing needs; an auto-incrementing key can become a write hotspot under high concurrency, while a randomly-generated key can reduce index locality.
4. `std-arch-data-models-keys-04` Changing an existing schema's data model paradigm **SHOULD** be justified by a genuine shift in access pattern, consistency requirement, or query need.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Data Types

### Summary

A column's data type, encoding, and nullability accurately represent its value and use storage efficiently.

### Standards

1. `std-arch-data-types-01` A column or field **MUST** use the data type that most accurately fits the value it stores and its expected range, avoiding wasteful storage consumption at scale.
2. `std-arch-data-types-02` A timestamp representing an instant **MUST** be normalised to UTC and stored using a timestamp type that preserves the instant.
3. `std-arch-data-types-03` A column **SHOULD** only be nullable where the absence of a value is a genuinely valid state.
4. `std-arch-data-types-04` A sentinel value, such as a placeholder number or empty string, **MUST NOT** be used in place of NULL.
5. `std-arch-data-types-05` Text data **MUST** be stored using an encoding that supports the full character range a service's data requires, such as UTF-8, so text is not corrupted or misrepresented.
6. `std-arch-data-types-06` A text column's collation **SHOULD** be chosen to match the comparison and sorting behaviour a workload requires, such as case sensitivity or locale-specific ordering.
7. `std-arch-data-types-07` A JSON column type **SHOULD** be reserved for a genuinely variable or sparse attribute, such as user-defined metadata, since a fixed-shape attribute is more efficiently queried and indexed as a structured column.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Schema Logic & Portability

### Summary

A relational schema enforces integrity through constraints, limits triggers and stored procedures, and uses portable SQL.

### Standards

1. `std-arch-schema-logic-portability-01` In a relational database, referential integrity **MUST** be enforced using primary key, foreign key, and other applicable constraints.
2. `std-arch-schema-logic-portability-02` A trigger **SHOULD NOT** be used.
3. `std-arch-schema-logic-portability-03` A trigger **MAY** be used only where no other mechanism can achieve the same outcome, since a trigger introduces control flow that is not visible in application code.
4. `std-arch-schema-logic-portability-04` A stored procedure **SHOULD** be used only where it provides a genuine benefit over application-level logic.
5. `std-arch-schema-logic-portability-05` A stored procedure **MUST** be version-controlled and applied through the same migration process as other schema changes.
6. `std-arch-schema-logic-portability-06` SQL used to define or query a relational schema **SHOULD** conform to ANSI/ISO standard SQL so it remains portable across database engines.
7. `std-arch-schema-logic-portability-07` A vendor-specific extension **MAY** be used only where it provides a genuine benefit that justifies the portability it gives up.
8. `std-arch-schema-logic-portability-08` A relational schema **MUST** enforce uniqueness through a primary key or unique constraint for each entity that has exactly one representation within the schema.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)
- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

## Audit & Deletion

### Summary

Decision-informing data carries an audit trail, and a table's deletion approach is a deliberate, documented choice.

### Standards

1. `std-arch-audit-deletion-01` A table or collection whose data informs an operational, financial, or clinical decision **MUST** retain an audit trail that identifies when its data was created or modified and the actor or process responsible for the change.
2. `std-arch-audit-deletion-02` A table or collection's deletion representation, whether a soft delete using a flag or timestamp column or a hard delete that removes the row, **MUST** be a deliberate, documented choice.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)

## Indexes

### Summary

An index matches the schema's actual query patterns, and is reassessed when those patterns change.

### Standards

1. `std-arch-indexes-01` An index **SHOULD** be designed to support a schema's actual query patterns.
2. `std-arch-indexes-02` An index **SHOULD** be reassessed when the query patterns it supports change materially, since an unused or mismatched index still carries a write and storage cost.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Compatible Changes

### Summary

A schema change stays additive and compatible with instances still running the previous code during rollout.

### Standards

1. `std-arch-compatible-changes-01` An additive schema change, such as adding a new optional column or field, **SHOULD** be preferred over a change that alters or removes an existing structure.
2. `std-arch-compatible-changes-02` A schema change **MUST** remain compatible with instances of the owning service still running previous code during a rolling deployment, so old and new instances can operate correctly until the deployment completes.
3. `std-arch-compatible-changes-03` A schema change **MUST NOT** be applied where it would violate an existing structural or referential integrity constraint until that constraint has been resolved or updated, since not every data store enforces this automatically.

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Breaking Changes

### Summary

A non-additive schema change rolls out through expand-and-contract, keeping the old structure until rollback is no longer needed.

### Standards

1. `std-arch-breaking-changes-01` Where a schema change cannot be made additively, it **SHOULD** use an expand-and-contract approach: add the new structure alongside the old, migrate the owning service's code to use it, then retire the old structure.
2. `std-arch-breaking-changes-02` The old structure **SHOULD** remain in place for a defined period after the owning service's code is fully upgraded, so a rollback to previous code remains possible without data loss.

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Automated Migrations

### Summary

A schema change is version-controlled migration code, applied consistently across environments, and tested first.

### Standards

1. `std-arch-automated-migrations-01` A schema change **MUST** be defined as version-controlled, reviewable migration code before it is applied to a live data store.
2. `std-arch-automated-migrations-02` A migration **MUST** be applied consistently across environments using the same automated process, so an environment's schema cannot silently diverge from what its migration history describes.
3. `std-arch-automated-migrations-03` A migration **MUST** be tested before it is applied to production data.

### Related Standards

- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
