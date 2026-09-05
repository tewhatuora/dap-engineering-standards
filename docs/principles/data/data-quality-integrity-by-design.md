# Data Quality & Integrity

## Point-of-Entry Validation

### Summary

Data is validated as close to its point of entry as possible, and invalid data is rejected or explicitly flagged.

### Reasoning

Validation at the point of entry prevents incorrect, incomplete, or malformed data from propagating into downstream systems. Rejecting invalid data or explicitly marking it as invalid preserves the failure for consumers to handle. Silent acceptance or correction conceals the failure and can change the data's meaning without the knowledge of its producer or consumers.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)

## Structural & Referential Integrity

### Summary

Structural and referential integrity is enforced at the data layer where the data store supports it, and by the responsible service where it does not.

### Reasoning

Data types, required fields, value ranges, and relationships define which stored states are valid. Enforcing these constraints in the data store applies them consistently to every write. Where the store cannot enforce a constraint, equivalent protection in the service responsible for writing the data prevents invalid values and references to records that do not exist or have been removed.

Schema and data model changes can invalidate records that previously satisfied their constraints. Identifying and resolving these conflicts before applying a change prevents the change itself from introducing a structural or referential integrity failure.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Duplicate & Conflict Resolution

### Summary

Uniqueness constraints prevent duplicate representations, and defined resolution rules reconcile records that conflict.

### Reasoning

A uniqueness constraint prevents more than one stored representation where an entity must be unique. Where integrated systems can represent the same real-world entity in several records, a defined matching or conflict-resolution rule establishes which record or value is authoritative.

Identifying and resolving duplicates and conflicts prevents contradictory records from persisting indefinitely and giving consumers different answers for the same entity.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Automated Rule Testing

### Summary

Validation, constraint, and data quality rules are verified through automated tests.

### Reasoning

These rules define which data states are accepted and rejected. Automated tests make that behaviour repeatable and expose regressions when a rule changes. Testing against representative data, including boundary conditions, known edge cases, and previously identified quality issues, verifies that the rule continues to distinguish valid and invalid data across the conditions it is expected to handle.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Change Traceability

### Summary

A change to decision-informing data remains traceable to its source, timing, and responsible actor or process.

### Reasoning

Operational, financial, and clinical decisions depend on being able to explain the data that informed them. Recording a change's source, time, and responsible actor or process establishes who or what changed the data and when.

Tracing the transformations between a data item's origin and current state explains how its value was derived without relying on informal knowledge. Retaining this information for an appropriate period preserves the evidence needed for audit and incident investigation.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
