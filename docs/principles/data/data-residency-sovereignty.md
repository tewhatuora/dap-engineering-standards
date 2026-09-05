# Data Residency & Sovereignty

## Jurisdiction-Informed Selection

### Summary

A service's data jurisdiction requirements, including every jurisdiction able to compel access, are established before its infrastructure, provider, or location is selected.

### Reasoning

Selecting infrastructure or beginning implementation before defining where data may be stored, processed, or made legally accessible can commit a service to an arrangement that cannot meet its residency or sovereignty requirements. Defining those jurisdictions first makes them an input to the service's design and location decisions.

Physical storage location does not by itself determine which legal authorities can compel access to data. Confirming the legal jurisdiction behind a provider's location claim prevents physical hosting location or a provider assertion from being treated as sufficient evidence of sovereignty.

A general compliance certification does not establish the jurisdictions in which a specific service will hold, process, or make data legally accessible. Confirming those jurisdictions before use prevents a broad certification from substituting for evidence that the service meets the data's requirements.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Jurisdiction Enforcement and Verification

### Summary

Infrastructure and configuration keep data at rest and in processing within its approved jurisdictions, and the actual jurisdictions are verified periodically.

### Reasoning

A provider's default location or configuration may not satisfy the requirements that apply to the data. Explicit controls and verification prevent those defaults from determining where data is stored or processed.

The deployed location of data can diverge from its initial design as configurations and services change. Periodic verification detects that divergence instead of allowing the original location decision to stand as indefinite evidence of compliance.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Approved Cross-Border Flows

### Summary

Data crosses an approved jurisdiction only through a defined and approved mechanism, including flows introduced by third parties.

### Reasoning

Replication, processing, integrations, and sub-processors can move data across a jurisdictional boundary without a flow being directly implemented by the responsible engineering team. Identifying and documenting every cross-border flow makes the movement visible, while requiring approval prevents an unintended transfer from bypassing the data's jurisdiction requirements.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Backup & Recovery Jurisdictions

### Summary

Backup, replication, and disaster recovery copies remain within the same approved jurisdictions as the primary data.

### Reasoning

Recovery mechanisms create additional copies and storage locations for data. Applying the primary data's approved jurisdiction boundaries to those copies prevents a resilience measure from moving data into a jurisdiction in which it is not approved to be held.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
