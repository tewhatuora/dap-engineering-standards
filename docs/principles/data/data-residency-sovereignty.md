---
last_edited: 2026-10-21
---

# Data Residency and Sovereignty

## Selection by Jurisdiction Requirements

### Summary

Engineers establish a service's data jurisdiction requirements, including every jurisdiction that can compel access, before choosing its infrastructure, provider, or location.

### Reasoning

Choosing infrastructure or starting implementation before defining where data may be stored, processed, or legally accessed can commit a service to an arrangement that cannot meet the data's requirements. Changing provider or location once the service depends on it may require redesign, migration, and service interruption.

Defining permitted jurisdictions first lets engineers use them to choose the architecture, provider, and location while viable options are still available. Residency and sovereignty then shape the design rather than being checked after design choices have limited the options.

Physical storage location alone does not determine which legal authorities can compel access to data. The provider and the organisations controlling the service may be subject to other jurisdictions. A location claim therefore does not, on its own, demonstrate sovereignty.

A general compliance certification does not establish where a particular service holds or processes data, or which authorities can access it. Confirming the actual jurisdictions provides evidence that the selected service meets the data's requirements rather than relying on a broad assurance.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Jurisdiction Enforcement and Verification

### Summary

Infrastructure and configuration keep data storage and processing within permitted jurisdictions, and actual locations are verified at defined intervals and after changes that can affect those locations.

### Reasoning

A provider's default location or configuration may place data storage or processing outside permitted jurisdictions. Explicit controls keep defaults from deciding the location and make jurisdiction limits part of the deployed configuration.

Actual locations can differ from the design as configurations, services, and provider behaviour change. Regular checks detect those differences and provide current evidence. The original choice alone does not prove that the service still meets the requirement.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Approved Cross-Border Flows

### Summary

Cross-border data flows meet the data's jurisdiction requirements, including flows introduced by third parties.

### Reasoning

Data can cross borders through providers, support services, integrations, or other third parties even when the engineering team has not built a direct transfer. These indirect flows raise the same residency and sovereignty concerns as transfers made by the service itself.

Identifying each flow and limiting it to an approved path makes clear where data goes and who is responsible. This keeps third-party data flows within the service design, so they do not move data outside permitted jurisdictions without being considered.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)

## Backup and Recovery Jurisdictions

### Summary

Backup, replication, and disaster recovery copies meet the same jurisdiction requirements as the primary data.

### Reasoning

Backup, replication, and disaster recovery add copies and storage locations outside the primary data path. Provider defaults or recovery design can place these copies in another jurisdiction even when the primary location meets the requirements.

Applying the same requirements to every recovery copy prevents recovery arrangements from moving data to a jurisdiction where it cannot be held. The service can then be restored without choosing between recovery and meeting the data's jurisdiction obligations.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
