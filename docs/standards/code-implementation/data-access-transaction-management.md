# Data Access & Transaction Management

## Objective

Data Access & Transaction Management governs how a service's code interacts with its data store, from constructing and scoping a query or transaction to managing the connections and credentials that interaction depends on. It directs engineering effort toward data access that remains safe, efficient, and observable, and toward data that stays consistent under concurrent access and transient failure.

## Standards

### Data Access Layer Abstraction

These requirements centralise a service's interaction with its data store behind a defined data access layer, so query logic and store-specific detail are not duplicated or scattered through business logic.

1. A service must access its data store through a defined data access layer or set of interfaces, not by embedding a raw query directly within business logic or presentation code.
2. A data access layer must provide a purpose-named method for each operation a service performs, such as retrieving a patient's active referrals, rather than a generic method that passes through a filter or query fragment, so the data store stays replaceable without changing the code that calls it.
3. A query or statement used in more than one place across a codebase must be defined once within the data access layer and reused, not duplicated at each call site.

#### References

[Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)\
[Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)

### Object-Relational Mapping Usage

These requirements manage how a service may use an object-relational mapper (ORM) or similar data access abstraction, so its convenience does not come at the cost of performance or correctness.

1. Use of an ORM is optional; a service may use raw queries or a lighter-weight data access technology instead, where an ORM does not provide a genuine benefit.
2. An eager or lazy loading strategy must be an explicit, deliberate choice for each relationship an ORM defines, not left to its default for every relationship.
3. A lazy-loaded relationship or collection must not be accessed once the transaction or connection that would resolve it has ended.
4. The actual query an ORM executes against a data store must be visible for diagnosis, not hidden behind the abstraction.
5. An ORM's automatic schema synchronisation or migration generation feature must not be used to modify a data store; schema changes must still be applied through the service's migration tooling.

#### References

[Database Migration Tooling](database-migration-tooling.md)\
[Observability by Default](../../principles/observability-by-default.md)

### Parameterised Queries & Injection Prevention

These requirements prevent untrusted input from altering a query's structure, so a data store cannot be manipulated through injection.

1. A query or command sent to a data store must be constructed using a parameterised query, prepared statement, or equivalent binding mechanism provided by the data access technology in use.
2. Untrusted input, including a value originating from a user, an external system, or another service, must not be concatenated or interpolated directly into a query string.

#### References

[Security by Design](../../principles/security-by-design.md)\
[Secure Software Development Practices](../security-identity/secure-software-development-practices.md)

### Data Store Error Handling & Disclosure

These requirements limit what a data store's error reveals externally while keeping enough detail available internally to diagnose it.

1. An error returned by a data store must not be disclosed to a caller in a form that reveals a query's structure or the underlying schema.
2. The full error, including its underlying cause, must still be logged for internal diagnosis, without logging a sensitive parameter value the query contained.

#### References

[Security by Design](../../principles/security-by-design.md)\
[Observability by Default](../../principles/observability-by-default.md)\
[Privacy by Design](../../principles/privacy-by-design.md)

### Connection Management & Pooling

These requirements keep a connection to a data store bounded, reusable, and reliably released, so a service does not exhaust its own or a shared data store's connection capacity.

1. A service must obtain a connection to a data store from a connection pool, rather than opening a new connection for each operation.
2. A connection pool's size must be bounded and configured to suit the data store's actual connection capacity and the service's expected concurrency.
3. A connection must be released back to its pool once an operation completes, including where the operation fails or raises an error.
4. A connection attempt must be bound by a timeout, so a service does not block indefinitely trying to obtain a connection to an unresponsive data store.
5. A connection pool must validate a connection before reuse, or retire it after a maximum idle time, so a stale or broken connection is not handed to a service undetected.

#### References

[Reliability & Resilience](../../principles/reliability-resilience.md)

### Least-Privilege Data Store Credentials

These requirements grant a service's data store credential only the access its role requires, so a compromised credential cannot be used beyond it.

1. A service's data store credential must be granted only the operations and objects its role requires, such as read, create, update, or delete access to specific tables, collections, or stored procedures.
2. A credential's granted access must be reviewed when a service's role changes, and revoked where no longer required.
3. A service must not use a data store's administrative or superuser credential for routine application access.

#### References

[Security by Design](../../principles/security-by-design.md)\
[Identity & Access Management](../security-identity/identity-access-management.md)

### Transaction Boundaries & Atomicity

These requirements keep a transaction's boundary explicit and scoped to the unit of work it protects, so related changes succeed or fail together and the transaction does not stay open longer than necessary.

1. A transaction's start and end must be explicitly defined in code, rather than left to a data access technology's default behaviour, such as auto-committing each statement as its own implicit transaction.
2. Writes belonging to the same unit of work must be executed within a single transaction and rolled back in full where any part fails.
3. A transaction must span only the operations needed to complete its unit of work, and must not remain open while waiting on an external operation, such as a call to another service or system.

#### References

[Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)\
[Reliability & Resilience](../../principles/reliability-resilience.md)

### Isolation Levels & Concurrency Control

These requirements govern how a transaction's isolation level and concurrency control are chosen, so a concurrent write cannot cause a lost update.

1. A transaction's isolation level must be deliberately chosen to match the consistency and concurrency needs of the operation it protects.
2. Optimistic concurrency control, such as a version or timestamp column checked at write time, should be used where write conflicts are infrequent.
3. Pessimistic locking should be used where write conflicts are frequent.
4. A write that fails due to a conflicting concurrent update must be surfaced to the caller or retried; it must not result in a lost update.

#### References

[Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)

### Transient Failure Handling

These requirements bound how long an operation may take and retry only a genuinely transient failure, so a retry resolves the failure without repeating its effect.

1. An operation executed against a data store must be bound by a timeout, so a service does not block indefinitely waiting for it to complete.
2. An operation against a data store that fails with a transient error, such as a network or I/O error, should be retried automatically, using a bounded number of attempts with minimal delay between them.
3. An operation must not be retried where its failure is not transient, such as a constraint violation or an authorisation failure, since retrying would not change the outcome.
4. A retried operation must be safe to execute more than once, through idempotency or an equivalent safeguard.

#### References

[Reliability & Resilience](../../principles/reliability-resilience.md)\
[Stateless First](../../principles/stateless-first.md)

### Avoiding Distributed Transactions Across Services

These requirements extend transaction management across a service boundary, so data consistency between services does not depend on a distributed transaction spanning them.

1. A transaction must not span more than one service's own data store; each service's data must be committed within its own transaction boundary.
2. Where an operation must keep data consistent across more than one service, it must use an eventual-consistency pattern, such as a saga with compensating actions, rather than a distributed transaction or two-phase commit spanning services.
3. A state change and the event or message announcing it must be committed together as a single atomic unit, such as through a transactional outbox, so the two cannot diverge.

#### References

[Service & Domain Design](../architecture-system-design/service-domain-design.md)\
[Event-Driven Messaging Standards](../architecture-system-design/event-driven-messaging-standards.md)

### Read Efficiency & Replica Awareness

These requirements guide how a read is served at scale, so growing read demand does not degrade performance or place unnecessary load on a primary data store.

1. A data access layer should retrieve related data using a single batched or joined query where feasible, avoiding the N+1 query problem of issuing a separate query per related record.
2. A read that could return a large or unbounded result set must use pagination or an equivalent mechanism to limit what is retrieved at once.
3. A read-heavy workload should be directed to a read replica where one is available, reserving the primary data store's capacity for a write and for a read that requires strongly consistent data.
4. Code that reads from a replica must tolerate its eventual consistency and must not assume a write is immediately visible.
5. A frequently-read, infrequently-changing value should be served from a cache rather than the data store on every read, where the value tolerates a defined staleness window.

#### References

[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Write Efficiency

These requirements keep a write efficient at scale, so growing write demand does not degrade performance or place unnecessary load on a data store.

1. A data access layer should batch multiple writes to the same table or collection into a single round trip where feasible, rather than issuing a separate write per record.
2. A batch write affecting a large volume of data should be bounded to a reasonable chunk size, so a single write does not lock or overload the data store.
3. A write should be skipped where the value being written has not actually changed, unless an audit trail, version counter, or triggered side effect depends on the write occurring regardless of value change.

#### References

[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Data Access Observability

These requirements make a service's interaction with its data store observable, so a performance or reliability problem can be detected and diagnosed rather than discovered only once it causes a wider failure.

1. A query's execution time must be observable, so a slow query can be identified before it degrades a service's wider performance.
2. A query's outcome, whether it succeeded, failed, or was retried, must be observable, so a failure pattern can be investigated rather than treated as routine.
3. A connection pool's utilisation, including its active, idle, and waiting connections, must be observable, so exhaustion or saturation is detected before it causes request failures.
4. A query must be correlatable with the broader request or transaction it is part of, so a wider performance problem can be traced back to the specific data store interaction responsible for it.

#### References

[Observability by Default](../../principles/observability-by-default.md)\
[Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)\
[Reliability & Resilience](../../principles/reliability-resilience.md)
