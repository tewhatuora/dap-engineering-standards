# Data Quality & Integrity by Design

## Summary

> Validate data at its point of entry, and fix quality issues at their root cause.

## Principles

### Early Quality Expectations

A data item's accuracy, completeness, and consistency expectations are specified at design time, before implementation begins.

1. A data item's expected accuracy, completeness, consistency, and uniqueness **MUST** be specified as part of a service or feature's design.
2. A service or feature that produces, transforms, or stores data **MUST NOT** proceed to implementation before these expectations are specified.

### Point-of-Entry Validation

Data is validated as close to its point of entry as possible, and invalid data is rejected or flagged, never silently accepted.

1. Data **MUST** be validated for correctness, completeness, and format as close to its point of entry or capture as possible, rather than relying on a downstream process to detect errors.
2. Data that fails validation **MUST** be rejected or explicitly flagged as invalid; it **MUST NOT** be silently accepted, silently corrected, or passed downstream without indication of the failure.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Structural & Referential Integrity

Structural and referential integrity is enforced at the data layer, or by the service responsible where the store cannot.

1. Structural constraints, including data types, required fields, and value ranges, **MUST** be enforced at the data layer where the data store natively supports it, and **MUST** otherwise be enforced by the service responsible for writing to it.
2. Where relationships between records are not natively enforced by the data store, such as in a document, key-value, or wide-column store, the responsible service **MUST** enforce equivalent consistency so that a record cannot reference another record that does not exist or has been removed.
3. A schema or data model change that would violate an existing structural or referential constraint **MUST** be identified and resolved before it is applied.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Duplicate & Conflicting Records

A uniqueness constraint stops a duplicate persisting, and a conflicting record is resolved rather than left unreconciled.

1. A uniqueness constraint **MUST** be defined and enforced for each entity that must have exactly one representation within a data store.
2. Where the same real-world entity may be represented by more than one record, such as across integrated systems, a defined matching or conflict-resolution rule **MUST** determine which record or value is authoritative.
3. A duplicate or conflicting record **MUST** be identified and resolved rather than left to persist indefinitely alongside the record it duplicates or contradicts.

### Data Change Traceability

A change to decision-informing data stays traceable to its source, timing, and responsible actor.

1. A change to data used to support an operational, financial, or clinical decision **MUST** be traceable to its source, the time it occurred, and the process or actor responsible for the change.
2. The transformation a data item undergoes between its origin and its current state **SHOULD** be traceable, so its current value can be explained without reconstructing the transformation from informal knowledge.
3. Traceability information **MUST** be retained for a period sufficient to support audit and incident investigation.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Ongoing Quality Monitoring

Data quality is monitored continuously after initial validation, so a later degradation is detected, not assumed absent.

1. Data quality **MUST** be monitored on an ongoing basis after initial validation, so that degradation occurring after entry, such as through a downstream process or integration fault, is detected rather than assumed absent.
2. An automated check **SHOULD** detect a material deviation from an expected data quality characteristic, such as completeness, format consistency, or volume, rather than relying on a person to notice it.
3. A detected data quality issue **MUST** generate an alert proportionate to its severity, so it can be investigated promptly.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Quality Issue Remediation

A confirmed data quality issue is fixed at its root cause and tracked to completion, never left unactioned.

1. A confirmed data quality issue **MUST** be corrected at its root cause, not only at the level of the individual record in which it was observed.
2. Remediation of a confirmed data quality issue **MUST** be tracked to completion; it **MUST NOT** be left unactioned once confirmed.
3. Where a data quality issue has affected downstream systems, reports, or decisions, the affected consumers **SHOULD** be identified and notified.

#### References

- [Runbooks](../standards/operations-observability/runbooks.md)

### Automated Rule Testing

A validation or quality rule is verified through automated tests, not manual inspection alone.

1. Validation, constraint, and data quality rules **MUST** be covered by automated tests, rather than verified only through manual inspection.
2. A change to a validation or constraint rule **SHOULD** be tested against representative data, including known edge cases and previously identified data quality issues, before release.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)
- [Test Data Management](../standards/quality-engineering/test-data-management.md)
