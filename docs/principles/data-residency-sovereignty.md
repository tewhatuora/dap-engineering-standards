# Data Residency & Sovereignty

## Objective

Data Residency & Sovereignty establishes the expectation that the jurisdiction in which data is stored, processed, and legally accessible is a deliberate engineering decision, rather than an incidental consequence of default infrastructure or vendor configuration. It directs engineering teams toward cloud provider, location, and vendor choices that satisfy applicable jurisdictional requirements, and toward maintaining ongoing visibility of where data actually resides.

## Principles

### Identifying Requirements at Design Time

These principles identify a service's jurisdictional requirements before infrastructure or location selection begins.

1. The jurisdictions in which a service's data must or must not be stored, processed, or made legally accessible must be identified before infrastructure, cloud provider, or location selection begins.
2. A service subject to a residency or sovereignty requirement must not proceed to implementation until that requirement has been defined.

### Distinguishing Physical Location from Legal Jurisdiction

These principles account for legal jurisdiction over data, not just its physical storage location.

1. Cloud provider and location selection must account for the legal jurisdiction or jurisdictions able to compel access to data, which may differ from the jurisdiction in which the data is physically stored.
2. A cloud provider's claim that data is hosted within a specific location must not be treated as satisfying a sovereignty requirement without confirming which jurisdiction retains legal authority to compel access to that data.

### Restricting Storage & Processing to Approved Jurisdictions

These principles keep data at rest and in processing within its approved jurisdictions.

1. Infrastructure and configuration must enforce that data at rest and data in processing remain within the jurisdictions approved for that data.
2. A cloud provider's default location or configuration must not be relied upon without first verifying it satisfies the applicable residency or sovereignty requirement.

#### References

[Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)

### Controlling Cross-Border Data Flows

These principles require a cross-border data flow to go through a defined, approved mechanism.

1. Data must not be transferred, replicated, or processed outside an approved jurisdiction except through a defined and approved mechanism.
2. A cross-border data flow introduced by a third-party service, integration, or sub-processor must be identified and documented, not only a flow an engineering team directly implements.

#### References

[API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Vendor & Sub-Processor Data Location Transparency

These principles establish which jurisdictions a vendor or sub-processor actually stores and processes data in.

1. Before a vendor or third-party service is used to store or process data subject to a residency or sovereignty requirement, the jurisdiction or jurisdictions in which that service stores and processes the data must be established.
2. A vendor's general compliance certification must not substitute for confirming the specific jurisdiction in which the vendor will hold or make the data accessible.

### Extending Requirements to Backup & Recovery Copies

This principle extends jurisdictional requirements to a service's backup and recovery copies.

1. A backup, replication, or disaster recovery copy of data must be held within the same approved jurisdictions as the primary data it duplicates.

#### References

[Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Verifying Data Location Through Configuration Audit

This principle verifies data's actual jurisdiction periodically, rather than assuming it from initial design.

1. The jurisdiction in which data is actually stored and processed should be verified periodically through configuration review or automated audit, rather than assumed correct indefinitely based on initial design.
