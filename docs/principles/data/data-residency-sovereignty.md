---
last_edited: 2026-09-10
---

# Data Residency & Sovereignty

## Jurisdiction-Informed Selection

### Summary

A service's data jurisdiction requirements, including every jurisdiction that can compel access, are established before selecting its infrastructure, provider, or location.

### Reasoning

Selecting infrastructure or beginning implementation before defining where data may be stored, processed, or made legally accessible can create a commitment that cannot meet the data's requirements. Changing provider or location later may require redesign, migration, and interruption after the service already depends on that arrangement.

Defining the permitted jurisdictions first makes them an input to architecture, provider, and location decisions while viable options remain available. It prevents residency and sovereignty from being treated as a check performed after the design has already constrained the answer.

Physical storage location does not by itself determine which legal authorities can compel access to data. The provider and the organisations controlling the service may be subject to other jurisdictions, so a location claim alone is not sufficient evidence of sovereignty.

A general compliance certification also does not establish where a specific service will hold or process data or which authorities can reach it. Confirming the actual jurisdictions prevents a broad assurance from substituting for evidence that the selected service meets the data's requirements.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Jurisdiction Enforcement and Verification

### Summary

Infrastructure and configuration keep stored and processed data within permitted jurisdictions, with the actual locations verified periodically.

### Reasoning

A provider's default location or configuration may place stored or processed data outside the jurisdictions permitted for it. Explicit controls prevent those defaults from determining location and make the required boundary part of the deployed configuration.

The actual location can diverge from the design as configurations, services, and provider behaviour change. Periodic verification detects that divergence and provides current evidence instead of treating the original selection as proof that the requirement remains satisfied.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Approved Cross-Border Flows

### Summary

Cross-border data flows, including those introduced by third parties, remain within the data's jurisdiction requirements.

### Reasoning

Data can cross a jurisdictional boundary through providers, support services, integrations, or other third parties even when the responsible engineering team did not implement a direct transfer. An indirect flow creates the same residency and sovereignty concern as movement initiated by the service itself.

Identifying each flow and constraining it to an approved path makes the destination and responsible parties visible. This prevents a third-party arrangement from moving data beyond its permitted jurisdictions without being considered as part of the service design.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Backup & Recovery Jurisdictions

### Summary

Backup, replication, and disaster recovery copies remain within the same jurisdiction requirements as the primary data.

### Reasoning

Backup, replication, and disaster recovery create additional copies and storage locations outside the primary data path. Provider defaults or recovery design can place those copies in a different jurisdiction even when the primary location is compliant.

Applying the same requirements to every recovery copy prevents a resilience measure from moving data to a jurisdiction where it cannot be held. It also keeps recovery usable without requiring a choice between restoring the service and meeting the data's jurisdiction obligations.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
