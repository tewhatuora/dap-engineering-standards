---
last_edited: 2026-10-21
---

# Data Privacy

## Data Minimisation

### Summary

Only personal or health data needed for a defined purpose is collected, processed, or retained.

### Reasoning

Collecting or keeping data that is not needed for a defined purpose leaves more data exposed to accidental disclosure or misuse without adding current value. Each extra dataset or copy also adds work to control access, delete data, and understand an incident's impact.

Collecting only what is needed prevents unnecessary data exposure during later processing and storage. It also makes the remaining data easier to find, protect, and remove when its purpose ends.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Privacy by Default

### Summary

Settings that provide the most privacy protection apply by default, and reducing that protection requires an explicit choice.

### Reasoning

Settings often stay unchanged, so defaults frequently determine how personal or health data is handled. A less protective default can expose data simply because no one changed a setting, without anyone deciding that the exposure was justified.

A protective default makes any reduction in privacy a clear decision. The person making it needs to weigh wider collection, use, or access against the resulting risk.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Least Privilege Access

### Summary

Access to personal or health data is limited to what is needed for a legitimate purpose and removed when that need ends.

### Reasoning

Every permission creates another way to view, change, copy, or disclose personal or health data. Broad permissions expose more data and allow more actions when someone makes a mistake or an account or service is compromised.

Permissions left in place after their legitimate purpose ends allow access that no current task needs. Limiting access to the required data and actions, then removing it when the need ends, reduces both the opportunity for misuse and its impact.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Synthetic and De-Identified Data

### Summary

Synthetic or de-identified data is preferred when a task does not require identifiable personal or health data.

### Reasoning

Many engineering and analysis tasks need the structure, distribution, or behaviour of data without needing to identify the people it represents. Suitable synthetic or de-identified data can keep the characteristics needed for those tasks while reducing the harm of disclosure.

Using a substitute also reduces how many systems, tools, and people handle identifiable data. Identifiable data then stays limited to activities that genuinely need to identify people.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Data Retention and Deletion

### Summary

Personal or health data is kept only as long as needed, then deleted automatically from primary storage, backups, and archives.

### Reasoning

Keeping personal or health data after its purpose ends leaves it exposed to disclosure or misuse for longer without adding value. A defined retention period limits that exposure. Automatic deletion avoids relying on someone to remember to delete the data.

Deleting data from primary storage is incomplete if recoverable copies remain in backups or archives. Deleting every retained copy prevents data from staying available after the system appears to have removed it.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
