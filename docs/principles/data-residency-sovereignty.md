# Data Residency & Sovereignty

## Summary

> Treat the legal jurisdiction over data as a deliberate choice, not an assumption from where it is hosted.

## Principles

### Early Jurisdictional Requirements

A service's data jurisdiction requirements are identified before infrastructure or location selection even begins.

1. The jurisdictions in which a service's data must or must not be stored, processed, or made legally accessible **MUST** be identified before infrastructure, cloud provider, or location selection begins.
2. A service subject to a residency or sovereignty requirement **MUST NOT** proceed to implementation until that requirement has been defined.

### Legal Jurisdiction Over Data

Location selection accounts for which jurisdiction can legally compel access to data, not just where it is physically stored.

1. Cloud provider and location selection **MUST** account for the legal jurisdiction or jurisdictions able to compel access to data, which may differ from the jurisdiction in which the data is physically stored.
2. A cloud provider's claim that data is hosted within a specific location **MUST NOT** be treated as satisfying a sovereignty requirement without confirming which jurisdiction retains legal authority to compel access to that data.

### Approved Jurisdiction Enforcement

Data at rest and in processing stays within its approved jurisdictions, never assumed from a provider's default location.

1. Infrastructure and configuration **MUST** enforce that data at rest and data in processing remain within the jurisdictions approved for that data.
2. A cloud provider's default location or configuration **MUST NOT** be relied upon without first verifying it satisfies the applicable residency or sovereignty requirement.

#### References

- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)

### Approved Cross-Border Flows

A cross-border data flow, including one introduced by a third party, only happens through a defined, approved mechanism.

1. Data **MUST NOT** be transferred, replicated, or processed outside an approved jurisdiction except through a defined and approved mechanism.
2. A cross-border data flow introduced by a third-party service, integration, or sub-processor **MUST** be identified and documented, not only a flow an engineering team directly implements.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Vendor Data Location

A vendor's actual data storage and processing jurisdiction is established before it is trusted, not inferred from a certification.

1. Before a vendor or third-party service is used to store or process data subject to a residency or sovereignty requirement, the jurisdiction or jurisdictions in which that service stores and processes the data **MUST** be established.
2. A vendor's general compliance certification **MUST NOT** substitute for confirming the specific jurisdiction in which the vendor will hold or make the data accessible.

### Backup & Recovery Jurisdiction

A backup or disaster recovery copy stays within the same approved jurisdictions as the primary data it duplicates.

1. A backup, replication, or disaster recovery copy of data **MUST** be held within the same approved jurisdictions as the primary data it duplicates.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Periodic Jurisdiction Verification

Data's actual jurisdiction is verified periodically, not assumed correct indefinitely from its initial design.

1. The jurisdiction in which data is actually stored and processed **SHOULD** be verified periodically through configuration review or automated audit, rather than assumed correct indefinitely based on initial design.
