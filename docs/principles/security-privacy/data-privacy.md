---
last_edited: 2026-09-10
---

# Data Privacy

## Data Minimisation

### Summary

Only personal or health data needed for a defined purpose is collected, processed, or retained.

### Reasoning

Collecting or retaining data beyond a defined purpose increases the amount available for accidental disclosure or misuse without providing current value. Each additional dataset or copy also extends the work needed to control access, apply deletion, and understand the impact of an incident.

Limiting data at the point of collection prevents unnecessary exposure from spreading through later processing and storage. It also makes the remaining data easier to locate, protect, and remove when its purpose ends.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Privacy-Protective Defaults

### Summary

The most privacy-protective settings apply by default, and reducing that protection requires an explicit choice.

### Reasoning

Settings often remain unchanged throughout use, so their initial state determines how personal or health data is handled in many cases. A less protective starting point can therefore expose data because no one changed a setting, rather than because someone decided that the exposure was justified.

A protective starting point makes any reduction in privacy a visible decision. The person making the change must consider whether wider collection, use, or access is needed and accept the resulting risk.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Least-Privilege Access

### Summary

Access to personal or health data is limited to what a legitimate need requires and removed when that need ends.

### Reasoning

Every permission creates another way for personal or health data to be viewed, changed, copied, or disclosed. Broad permissions increase the amount of data and the range of actions available when a person makes a mistake or an account or service is compromised.

Permissions that remain after their legitimate purpose ends preserve access without supporting current work. Restricting access to the required data and actions, then removing it when the need ends, limits both the opportunity and impact of misuse.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Synthetic & De-Identified Data

### Summary

Synthetic or de-identified data is preferred when work does not require identifiable personal or health data.

### Reasoning

Many engineering and analysis tasks depend on the structure, distribution, or behaviour of data without needing to identify the people represented. A suitable synthetic or de-identified dataset can preserve the characteristics needed for the work while reducing the harm that disclosure could cause.

Using a substitute also reduces the number of systems, tools, and people that handle identifiable data. This confines the more sensitive form of the data to activities whose purpose genuinely depends on identity.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Data Retention & Deletion

### Summary

Personal or health data is retained only as long as needed and then deleted automatically from primary storage, backups, and archives.

### Reasoning

Retaining personal or health data beyond its purpose extends the period in which it can be disclosed or misused without providing corresponding value. A defined retention period limits that exposure, while automated deletion prevents disposal from depending on someone remembering to perform a manual task.

Deleting data from primary storage is incomplete when recoverable copies remain in backups or archives. Applying deletion across every retained copy prevents data from remaining available after the system appears to have removed it.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
