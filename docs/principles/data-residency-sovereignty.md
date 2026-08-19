# Data Residency & Sovereignty

## Summary

> Treat the legal jurisdiction over data as a deliberate choice, not an assumption from a vendor's claim.

## Objective

This principle establishes the expectation that the jurisdiction in which data is stored, processed, and legally accessible is a deliberate engineering decision. It keeps a cloud provider, location, and vendor choice aligned with applicable jurisdictional requirements, with ongoing visibility of where data actually resides.

## Principles

### Early Jurisdictional Requirements

These principles set out how a service's jurisdictional requirements are identified before infrastructure or location selection begins.

1. The jurisdictions in which a service's data must or must not be stored, processed, or made legally accessible **MUST** be identified before infrastructure, cloud provider, or location selection begins.
2. A service subject to a residency or sovereignty requirement **MUST NOT** proceed to implementation until that requirement has been defined.

### Legal Jurisdiction Over Data

These principles describe how legal jurisdiction over data is accounted for, not just its physical storage location.

1. Cloud provider and location selection **MUST** account for the legal jurisdiction or jurisdictions able to compel access to data, which may differ from the jurisdiction in which the data is physically stored.
2. A cloud provider's claim that data is hosted within a specific location **MUST NOT** be treated as satisfying a sovereignty requirement without confirming which jurisdiction retains legal authority to compel access to that data.

### Approved Jurisdiction Enforcement

These principles address how data at rest and in processing remains within its approved jurisdictions.

1. Infrastructure and configuration **MUST** enforce that data at rest and data in processing remain within the jurisdictions approved for that data.
2. A cloud provider's default location or configuration **MUST NOT** be relied upon without first verifying it satisfies the applicable residency or sovereignty requirement.

#### References

- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)

### Approved Cross-Border Flows

These principles set out how a cross-border data flow goes through a defined, approved mechanism.

1. Data **MUST NOT** be transferred, replicated, or processed outside an approved jurisdiction except through a defined and approved mechanism.
2. A cross-border data flow introduced by a third-party service, integration, or sub-processor **MUST** be identified and documented, not only a flow an engineering team directly implements.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Vendor Data Location

These principles cover how a vendor or sub-processor's data storage and processing jurisdictions are established.

1. Before a vendor or third-party service is used to store or process data subject to a residency or sovereignty requirement, the jurisdiction or jurisdictions in which that service stores and processes the data **MUST** be established.
2. A vendor's general compliance certification **MUST NOT** substitute for confirming the specific jurisdiction in which the vendor will hold or make the data accessible.

### Backup & Recovery Jurisdiction

This principle describes how jurisdictional requirements extend to a service's backup and recovery copies.

1. A backup, replication, or disaster recovery copy of data **MUST** be held within the same approved jurisdictions as the primary data it duplicates.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Periodic Jurisdiction Verification

This principle guides how data's actual jurisdiction is verified periodically, rather than assumed from initial design.

1. The jurisdiction in which data is actually stored and processed **SHOULD** be verified periodically through configuration review or automated audit, rather than assumed correct indefinitely based on initial design.
