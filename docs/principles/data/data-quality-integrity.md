---
last_edited: 2026-09-10
---

# Data Quality & Integrity

## Point-of-Entry Validation

### Summary

Data is validated as close as possible to where it enters a system, with invalid data rejected or explicitly flagged.

### Reasoning

Invalid data becomes harder to identify and correct after it has been stored, transformed, or passed to other systems. Validation near the point of entry stops incorrect, incomplete, or malformed data before downstream processes begin to treat it as reliable.

When invalid data cannot be rejected, an explicit flag preserves its status for later handling and prevents consumers from mistaking it for a valid value. Silent acceptance or correction conceals the original problem and can change the data's meaning without the knowledge of its producer or consumers.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)

## Structural & Referential Integrity

### Summary

Structural and referential integrity are enforced by the data store where supported and by the responsible service where they are not.

### Reasoning

Schema constraints define which data structures and relationships are valid. Enforcing them in the data store applies the same rules to every write, regardless of which application path produced it, and prevents invalid state from becoming established.

Where the store cannot enforce a constraint, the service responsible for writing the data must provide equivalent protection. Keeping that responsibility with the owner prevents each caller from applying a different interpretation of valid state.

Schema and data model changes can also make existing records invalid even when they satisfied the earlier rules. Finding and resolving those conflicts before the change prevents the migration itself from introducing a structural or referential integrity failure.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Duplicate & Conflict Resolution

### Summary

Uniqueness constraints prevent duplicate representations, while defined resolution rules reconcile conflicting records.

### Reasoning

Integrated systems can create several records for the same real-world entity or update equivalent records independently. Consumers can then receive contradictory values without knowing which record should be treated as authoritative.

Uniqueness constraints prevent duplicates where identity can be enforced directly. Where records still conflict, defined matching and resolution rules provide a consistent way to select or produce the authoritative representation instead of leaving the outcome to each consumer.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Automated Rule Testing

### Summary

Automated tests verify validation, constraint, and data quality rules.

### Reasoning

Validation, constraint, and quality rules determine which data enters the system and which states are allowed to remain. An incorrect change to a rule can reject valid data, admit invalid data, or alter how existing records are interpreted.

Automated tests make verification repeatable and expose regressions whenever the rule or related code changes. Representative test data shows whether the rule continues to distinguish valid and invalid states across the conditions it is expected to handle.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Data Change Traceability

### Summary

A change to data used for decisions remains traceable to its source, time, and responsible actor or process.

### Reasoning

Operational, financial, and clinical decisions depend on being able to explain the data that informed them. Recording the source, time, and responsible actor or process establishes where a value came from and who or what changed it.

The current value alone does not explain how earlier inputs and transformations produced it. Traceability across those changes allows an engineer or reviewer to reconstruct that history without relying on informal knowledge held by the people involved.

Retaining this information for an appropriate period preserves the evidence needed to investigate an incident, challenge a result, or explain a decision after the original change occurred.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
