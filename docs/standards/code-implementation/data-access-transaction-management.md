---
last_edited: 2026-09-09
---

# Data Access & Transaction Management

## Data Access Layer

### Summary

A service accesses its data store through purpose-named operations in a defined data access layer that reuses shared queries.

### Standards

1. `std-code-data-access-layer-01` A service **SHOULD** access its data store through a defined data access layer or set of interfaces.
2. `std-code-data-access-layer-02` A data access layer **SHOULD** provide a purpose-named method for each operation a service performs, such as retrieving a patient's active referrals, so the data store stays replaceable without changing the code that calls it.
3. `std-code-data-access-layer-03` A query or statement used in more than one place across a codebase **SHOULD** be defined once within the data access layer and reused.

### Implements These Principles

- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Object-Relational Mapping

### Summary

An ORM is optional; when used, its loading strategy is explicit, lazy relationships resolve within their transaction or connection, queries remain visible, and schema changes use migration tooling.

### Standards

1. `std-code-object-relational-mapping-01` A service **MAY** use an ORM.
2. `std-code-object-relational-mapping-02` A service **MAY** use raw queries or a lighter-weight data access technology instead, where an ORM does not provide a genuine benefit.
3. `std-code-object-relational-mapping-03` An eager or lazy loading strategy **MUST** be an explicit, deliberate choice for each relationship an ORM defines.
4. `std-code-object-relational-mapping-04` A lazy-loaded relationship or collection **MUST NOT** be accessed once the transaction or connection that would resolve it has ended.
5. `std-code-object-relational-mapping-05` The actual query an ORM executes against a data store **MUST** be visible for diagnosis.
6. `std-code-object-relational-mapping-06` An ORM's automatic schema synchronisation or migration generation feature **SHOULD NOT** be used to modify a data store.
7. `std-code-object-relational-mapping-07` Schema changes **SHOULD** still be applied through the service's migration tooling.

### Related Standards

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Parameterised Queries

### Summary

A query is constructed through parameterisation or an equivalent binding mechanism, with untrusted input excluded from query-string construction.

### Standards

1. `std-code-parameterised-queries-01` A query or command sent to a data store **MUST** be constructed using a parameterised query, prepared statement, or equivalent binding mechanism provided by the data access technology in use.
2. `std-code-parameterised-queries-02` Untrusted input, including a value originating from a user, an external system, or another service, **MUST NOT** be concatenated or interpolated directly into a query string.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Error Handling

### Summary

A data store error is logged in full for internal diagnosis without revealing query or schema details to callers or sensitive parameter values in logs.

### Standards

1. `std-code-error-handling-01` An error returned by a data store **MUST NOT** be disclosed to a caller in a form that reveals a query's structure or the underlying schema.
2. `std-code-error-handling-02` Diagnostic detail about a data store error, including its underlying cause where available, **MUST** be logged without logging a sensitive parameter value the query contained.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Connection Pooling

### Summary

A service using reusable data store connections obtains validated connections from a bounded pool, releases them promptly, and bounds every connection attempt by a timeout.

### Standards

1. `std-code-connection-pooling-01` A service using reusable data store connections **SHOULD** obtain them from a connection pool.
2. `std-code-connection-pooling-02` A connection pool's size **MUST** be bounded and configured to suit the data store's actual connection capacity and the service's expected concurrency.
3. `std-code-connection-pooling-03` A connection **MUST** be released back to its pool once an operation completes, including where the operation fails or raises an error.
4. `std-code-connection-pooling-04` A connection attempt **MUST** be bound by a timeout, so a service does not block indefinitely trying to obtain a connection to an unresponsive data store.
5. `std-code-connection-pooling-05` A connection pool **MUST** validate a connection before reuse, or retire it after a maximum idle time, so a stale or broken connection is not handed to a service undetected.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Data Store Credentials

### Summary

A service uses a non-administrative data store credential that grants only the access its role requires and is reviewed when that role changes.

### Standards

1. `std-code-data-store-credentials-01` A service's data store credential **MUST** be granted only the operations and objects its role requires, such as read, create, update, or delete access to specific tables, collections, or stored procedures.
2. `std-code-data-store-credentials-02` A credential's granted access **MUST** be reviewed when a service's role changes, and revoked where no longer required.
3. `std-code-data-store-credentials-03` A service **MUST NOT** use a data store's administrative or superuser credential for routine application access.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Transaction Boundaries

### Summary

A transaction's boundary is explicit in code, scoped to one atomic unit of work, and closed before waiting on an external operation.

### Standards

1. `std-code-transaction-boundaries-01` A transaction's start and end **MUST** be identifiable from the service's implementation.
2. `std-code-transaction-boundaries-02` Writes belonging to the same unit of work **MUST** be executed within a single transaction and rolled back in full where any part fails.
3. `std-code-transaction-boundaries-03` A transaction **MUST** span only the operations needed to complete its unit of work.
4. `std-code-transaction-boundaries-04` A transaction **SHOULD NOT** remain open while waiting on an external operation, such as a call to another service or system.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)

## Concurrency Control

### Summary

A transaction's isolation level and concurrency control are deliberately selected, and a conflicting write is surfaced or retried without causing a lost update.

### Standards

1. `std-code-concurrency-control-01` A transaction's isolation level **SHOULD** match the consistency and concurrency needs of the operation it protects.
2. `std-code-concurrency-control-02` Optimistic concurrency control, such as a version or timestamp column checked at write time, **SHOULD** be used where write conflicts are infrequent.
3. `std-code-concurrency-control-03` Pessimistic locking **SHOULD** be used where write conflicts are frequent.
4. `std-code-concurrency-control-04` A write that fails due to a conflicting concurrent update **MUST** be surfaced to the caller or retried.
5. `std-code-concurrency-control-05` A write that fails due to a conflicting concurrent update **MUST NOT** result in a lost update.

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)

## Timeouts & Retries

### Summary

An operation against a data store is bounded by a timeout, and only retried when its failure is transient and idempotent.

### Standards

1. `std-code-timeouts-retries-01` An operation executed against a data store **MUST** be bound by a timeout, so a service does not block indefinitely waiting for it to complete.
2. `std-code-timeouts-retries-02` An operation against a data store that fails with a transient error, such as a network or I/O error, **SHOULD** be retried automatically, using a bounded number of attempts with minimal delay between them.
3. `std-code-timeouts-retries-03` An operation **MUST NOT** be retried where its failure is not transient, such as a constraint violation or an authorisation failure, since retrying would not change the outcome.
4. `std-code-timeouts-retries-04` A retried operation **MUST** be safe to execute more than once, through idempotency or an equivalent safeguard.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Cross-Service Consistency

### Summary

Each service commits data within its own transaction boundary, and cross-service consistency uses an eventual-consistency pattern with atomic event publication.

### Standards

1. `std-code-cross-service-consistency-01` A transaction **MUST NOT** span more than one service's own data store.
2. `std-code-cross-service-consistency-02` Each service's data **MUST** be committed within its own transaction boundary.
3. `std-code-cross-service-consistency-03` An operation requiring consistency across more than one service **MUST** use an eventual-consistency pattern, such as a saga with compensating actions.
4. `std-code-cross-service-consistency-04` A state change and the event or message announcing it **MUST** be committed together as a single atomic unit, such as through a transactional outbox, so the two cannot diverge.

### Related Standards

- [Event-Driven Messaging](../architecture-system-design/event-driven-messaging.md)

### Implements These Principles

- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Read Efficiency

### Summary

A read is batched, paginated, and directed to a replica or cache where its consistency needs allow it, with cache invalidation or expiry defined.

### Standards

1. `std-code-read-efficiency-01` A data access layer **SHOULD** retrieve related data using a single batched or joined query where feasible, avoiding the N+1 query problem of issuing a separate query per related record.
2. `std-code-read-efficiency-02` A read that could return a large or unbounded result set **MUST** use pagination or an equivalent mechanism to limit what is retrieved at once.
3. `std-code-read-efficiency-03` A read-heavy workload **SHOULD** be directed to a read replica where one is available, reserving the primary data store's capacity for a write and for a read that requires strongly consistent data.
4. `std-code-read-efficiency-04` Code that reads from a replica **MUST** tolerate its eventual consistency.
5. `std-code-read-efficiency-05` Code that reads from a replica **MUST NOT** assume a write is immediately visible.
6. `std-code-read-efficiency-06` A frequently-read, infrequently-changing value **SHOULD** be served from a cache where the value tolerates a defined staleness window.
7. `std-code-read-efficiency-07` A cache **MUST** have a defined invalidation or expiry approach, so it does not serve stale data indefinitely.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Distributed Consistency](../../principles/architecture-platform/distributed-consistency.md)

## Write Efficiency

### Summary

Writes to the same table are batched into bounded round trips where feasible, and unchanged values are skipped when no required side effect depends on the write.

### Standards

1. `std-code-write-efficiency-01` A data access layer **SHOULD** batch multiple writes to the same table or collection into a single round trip where feasible.
2. `std-code-write-efficiency-02` A batch write affecting a large volume of data **SHOULD** be bounded to a reasonable chunk size, so a single write does not lock or overload the data store.
3. `std-code-write-efficiency-03` A write **SHOULD** be skipped where the value being written has not changed and no audit trail, version counter, or triggered side effect depends on the write.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Observability

### Summary

A query's execution time, outcome, and connection pool usage stay observable, correlated back to the request it belongs to.

### Standards

1. `std-code-observability-01` A query's execution time **MUST** be observable, so a slow query can be identified before it degrades a service's wider performance.
2. `std-code-observability-02` A query's outcome, whether it succeeded, failed, or was retried, **MUST** be observable so a failure pattern can be investigated.
3. `std-code-observability-03` A connection pool's utilisation, including its active, idle, and waiting connections, **MUST** be observable, so exhaustion or saturation is detected before it causes request failures.
4. `std-code-observability-04` A query **MUST** be correlatable with the broader request or transaction it is part of, so a wider performance problem can be traced back to the specific data store interaction responsible for it.

### Related Standards

- [Distributed Tracing](../operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
