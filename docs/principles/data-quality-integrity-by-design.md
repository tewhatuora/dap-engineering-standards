# Data Quality & Integrity by Design

## Summary

> Validate data at its point of entry, and correct a quality issue at its root cause.

## Objective

This principle establishes the expectation that data is correct, complete, consistent, and free of unresolved duplication or contradiction throughout its lifecycle. It keeps a data quality issue caught and corrected close to its source, so decisions, reporting, and downstream systems can rely on the data they consume.

## Principles

### Early Quality Expectations

These principles set out how a data item's quality expectations are specified as part of a service's design, before implementation begins.

1. The accuracy, completeness, consistency, and uniqueness a data item must exhibit must be specified as part of a service or feature's design.
2. A service or feature that produces, transforms, or stores data must not proceed to implementation before these expectations are specified.

### Point-of-Entry Validation

These principles describe how data is validated as close to its point of entry as possible, rather than relying on a downstream process.

1. Data must be validated for correctness, completeness, and format as close to its point of entry or capture as possible, rather than relying on a downstream process to detect errors.
2. Data that fails validation must be rejected or explicitly flagged as invalid; it must not be silently accepted, silently corrected, or passed downstream without indication of the failure.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Structural & Referential Integrity

These principles address how structural and referential integrity is enforced at the data layer, or by the responsible service where the store does not support it.

1. Structural constraints, including data types, required fields, and value ranges, must be enforced at the data layer where the data store natively supports it, and must otherwise be enforced by the service responsible for writing to it.
2. Where relationships between records are not natively enforced by the data store, such as in a document, key-value, or wide-column store, the responsible service must enforce equivalent consistency so that a record cannot reference another record that does not exist or has been removed.
3. A schema or data model change that would violate an existing structural or referential constraint must be identified and resolved before it is applied.

#### References

- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)

### Duplicate & Conflicting Records

These principles set out how a duplicate or conflicting record is prevented from persisting unresolved.

1. A uniqueness constraint must be defined and enforced for each entity that must have exactly one representation within a data store.
2. Where the same real-world entity may be represented by more than one record, such as across integrated systems, a defined matching or conflict-resolution rule must determine which record or value is authoritative.
3. A duplicate or conflicting record must be identified and resolved rather than left to persist indefinitely alongside the record it duplicates or contradicts.

### Data Change Traceability

These principles cover how a change to data used in an operational, financial, or clinical decision remains traceable to its source, timing, and responsible actor.

1. A change to data used to support an operational, financial, or clinical decision must be traceable to its source, the time it occurred, and the process or actor responsible for the change.
2. The transformation a data item undergoes between its origin and its current state should be traceable, so its current value can be explained without reconstructing the transformation from informal knowledge.
3. Traceability information must be retained for a period sufficient to support audit and incident investigation.

### Ongoing Quality Monitoring

These principles describe how data quality degradation is detected through ongoing monitoring, rather than assumed absent after initial validation.

1. Data quality must be monitored on an ongoing basis after initial validation, so that degradation occurring after entry, such as through a downstream process or integration fault, is detected rather than assumed absent.
2. An automated check should detect a material deviation from an expected data quality characteristic, such as completeness, format consistency, or volume, rather than relying on a person to notice it.
3. A detected data quality issue must generate an alert proportionate to its severity, so it can be investigated promptly.

#### References

- [Metrics, Monitoring & Alerting](../standards/operations-observability/metrics-monitoring-alerting.md)

### Quality Issue Remediation

These principles guide how a confirmed data quality issue is corrected at its root cause and tracked to completion.

1. A confirmed data quality issue must be corrected at its root cause, not only at the level of the individual record in which it was observed.
2. Remediation of a confirmed data quality issue must be tracked to completion; it must not be left unactioned once confirmed.
3. Where a data quality issue has affected downstream systems, reports, or decisions, the affected consumers should be identified and notified.

#### References

- [Runbooks](../standards/operations-observability/runbooks.md)

### Automated Rule Testing

These principles address how a validation or quality rule is verified through automated testing rather than manual inspection alone.

1. Validation, constraint, and data quality rules must be covered by automated tests, rather than verified only through manual inspection.
2. A change to a validation or constraint rule should be tested against representative data, including known edge cases and previously identified data quality issues, before release.

#### References

- [Unit Testing](../standards/quality-engineering/unit-testing.md)
- [Test Data Management](../standards/quality-engineering/test-data-management.md)
