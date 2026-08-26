# Schema Design & Evolution

## Summary

> A schema is owned by exactly one service, and evolved through version-controlled, backward-compatible changes.

## Objective

This standard defines requirements for how a service's data model is deliberately designed for its actual access patterns and evolved through controlled, backward-compatible change. It keeps a schema owned by a single service and able to evolve safely over time, without breaking the owning service's own running instances during deployment.

## Standards

### Data Model & Key Strategy

These requirements set out how a schema's data model and key strategy are chosen to fit a workload's actual access patterns.

1. A schema's data model, whether relational, document, key-value, wide-column, or another structure, **MUST** be selected based on a workload's actual access patterns, consistency requirements, and query needs.
2. A relational schema **SHOULD** be normalised to at least Third Normal Form (3NF) to eliminate redundant and inconsistent data, with denormalisation applied only where a specific, demonstrated performance need justifies it.
3. A schema's primary key strategy **MUST** suit the workload's write concurrency and indexing needs; an auto-incrementing key can become a write hotspot under high concurrency, while a randomly-generated key can reduce index locality.
4. Changing an existing schema's data model paradigm **SHOULD** be justified by a genuine shift in access pattern, consistency requirement, or query need.

### Data Type Selection

These requirements describe how a column or field's data type is chosen, so storage is used efficiently and data is represented accurately.

1. A column or field **MUST** use the data type that most accurately fits the value it stores and its expected range, avoiding wasteful storage consumption at scale.
2. A date or timestamp value **MUST** be stored in UTC using a date-time or timestamp type, not as a Unix epoch integer or in a local timezone, so it can be reliably converted to any timezone.
3. A column **SHOULD** only be nullable where the absence of a value is a genuinely valid state; a sentinel value, such as a placeholder number or empty string, **MUST NOT** be used in place of NULL.
4. Text data **MUST** be stored using an encoding that supports the full character range a service's data requires, such as UTF-8, so text is not corrupted or misrepresented.
5. A text column's collation **SHOULD** be chosen to match the comparison and sorting behaviour a workload requires, such as case sensitivity or locale-specific ordering.
6. A JSON column type **SHOULD** be reserved for a genuinely variable or sparse attribute, such as user-defined metadata, since a fixed-shape attribute is more efficiently queried and indexed as a structured column.

#### References

- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Schema Ownership

This requirement addresses how a schema is owned by exactly one service.

1. A schema **MUST** be owned by exactly one service; another service **MUST NOT** directly access or modify a data store it does not own.

#### References

- [Service & Domain Design](service-domain-design.md)

### Schema Logic & Portability

These requirements guide how a relational schema's logic is implemented and kept portable across database engines.

1. In a relational database, referential integrity **MUST** be enforced using primary key, foreign key, and other applicable constraints, not application code alone.
2. A trigger **SHOULD NOT** be used; a trigger **MAY** be used only where no other mechanism can achieve the same outcome, since a trigger introduces control flow that is not visible in application code.
3. A stored procedure **MUST** only be used where it provides a genuine benefit over application-level logic, and **MUST** be version-controlled and applied through the same migration process as other schema changes.
4. SQL used to define or query a relational schema **SHOULD** conform to ANSI/ISO standard SQL, not a vendor-specific extension, so it remains portable across database engines; a vendor-specific extension **MAY** be used only where it provides a genuine benefit that justifies the portability it gives up.

#### References

- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)
- [Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)

### Traceability & Deletion Representation

These requirements cover how a change to decision-informing data is traced, and how a table or collection's deletion is represented.

1. A table or collection whose data informs an operational, financial, or clinical decision **MUST** include audit columns, such as created and last-modified timestamps, and identify the actor or process responsible for a change.
2. A table or collection's deletion representation, whether a soft delete using a flag or timestamp column or a hard delete that removes the row, **MUST** be a deliberate, documented choice.

### Index Alignment

These requirements set out how an index is kept aligned with a schema's actual query patterns.

1. An index **SHOULD** be designed to support a schema's actual query patterns.
2. An index **MUST** be reassessed when the query patterns it supports change materially, since an unused or mismatched index still carries a write and storage cost.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Non-Breaking Schema Changes

These requirements describe how a schema change is kept additive and backward-compatible.

1. An additive schema change, such as adding a new optional column or field, **SHOULD** be preferred over a change that alters or removes an existing structure.
2. A schema change **MUST** remain compatible with instances of the owning service still running previous code during a rolling deployment, so old and new instances can operate correctly until the deployment completes.
3. A schema change **MUST NOT** be applied where it would violate an existing structural or referential integrity constraint until that constraint has been resolved or updated, since not every data store enforces this automatically.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Breaking Schema Changes

These requirements address how a non-additive schema change is safely rolled out.

1. Where a schema change cannot be made additively, it **SHOULD** use an expand-and-contract approach: add the new structure alongside the old, migrate the owning service's code to use it, then retire the old structure.
2. The old structure **SHOULD** remain in place for a defined period after the owning service's code is fully upgraded, so a rollback to previous code remains possible without data loss.

### Automated Migration Tooling

These requirements cover how a schema change is applied consistently through version-controlled, tested migration code.

1. A schema change **MUST** be defined as version-controlled, reviewable migration code, not applied through manual or ad hoc execution against a live data store.
2. A migration **MUST** be applied consistently across environments using the same automated process, so an environment's schema cannot silently diverge from what its migration history describes.
3. A migration **MUST** be tested before it is applied to production data.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
