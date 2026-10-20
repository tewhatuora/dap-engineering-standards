---
last_edited: 2026-10-21
---

# Data Quality and Integrity

## Validation at Data Entry

### Summary

Data is validated as close as possible to where it enters a system, with invalid data rejected or explicitly flagged.

### Reasoning

Invalid data becomes harder to find and fix once it has been stored, transformed, or passed to other systems. Checking it near the point of entry catches incorrect, incomplete, or malformed data before downstream processes treat it as reliable.

When invalid data cannot be rejected, an explicit flag identifies it for later handling and keeps consumers from mistaking it for valid data. Accepting or correcting it silently hides the original problem and can change its meaning without the producer or consumers knowing.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)

## Structural and Referential Integrity

### Summary

The data store enforces structural and referential integrity where it supports them, and the responsible service enforces them where it does not.

### Reasoning

Schema constraints define valid data structures and relationships. Enforcing them in the data store applies the same rules to every write, regardless of which code writes the data, and prevents invalid state from being stored.

Where the store cannot enforce a constraint, the service that writes the data provides equivalent protection. Callers then cannot apply different interpretations of valid state.

Schema and data model changes can make existing records invalid even when they met the earlier rules. Finding and resolving these conflicts before the change prevents the migration from breaking structural or referential integrity.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Duplicate and Conflict Resolution

### Summary

Uniqueness constraints prevent duplicate records, while defined resolution rules reconcile conflicting records.

### Reasoning

Integrated systems can create several records for the same real-world entity or update equivalent records independently. Consumers may then receive conflicting values without knowing which record is authoritative.

Uniqueness constraints prevent duplicates where identity can be enforced directly. Where records still conflict, defined matching and resolution rules consistently select or produce the authoritative record, rather than leaving each consumer to decide.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)

## Automated Rule Testing

### Summary

Automated tests verify validation, constraint, and data quality rules.

### Reasoning

Validation, constraint, and quality rules determine which data enters a system and which states can remain. An incorrect rule change can reject valid data, admit invalid data, or change how existing records are interpreted.

Automated tests repeat the same checks and reveal regressions when a rule or related code changes. Representative test data shows whether the rule still distinguishes valid and invalid states under the conditions it is expected to handle.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Data Change Traceability

### Summary

A change to data used for decisions remains traceable to its source, time, and responsible actor or process.

### Reasoning

Operational, financial, and clinical decisions depend on being able to explain the data used to make them. Recording the source, time, and responsible actor or process shows where a value came from and who or what changed it.

The current value alone does not explain the inputs and transformations that produced it. Tracing those changes lets engineers and reviewers reconstruct the history without relying on what the people involved remember or know informally.

This history provides evidence to investigate an incident, challenge a result, or explain a decision after the original change.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
