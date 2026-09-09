---
last_edited: 2026-09-10
---

# Data Privacy

## Data Minimisation

### Summary

A service collects, processes, and retains only the personal or health data its defined purpose needs.

### Reasoning

Data collected or retained for an undefined future use creates exposure without serving a current purpose. Limiting personal or health data to a defined need reduces the amount available for accidental disclosure, misuse, or unnecessary retention.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Privacy-Protective Defaults

### Summary

The most privacy-protective option is the default, and reducing that protection requires explicit, deliberate action.

### Reasoning

Privacy-protective defaults prevent personal or health data from being exposed because a setting was overlooked or left unchanged. Requiring deliberate action to reduce protection makes the change a conscious decision rather than an effect of omission.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)

## Least-Privilege Access

### Summary

Access to personal or health data is restricted to a defined, legitimate need, granted at its narrowest scope, and revoked when that need ends.

### Reasoning

Broad access increases the number of individuals, roles, and services able to expose or alter personal or health data. Scoping access to the operations and data a legitimate purpose requires, then revoking it when that purpose ends, limits both the opportunity and effect of misuse or compromise.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Synthetic & De-Identified Data

### Summary

Synthetic or de-identified data is preferred over production personal or health data for testing, development, analytics, and AI-assisted engineering.

### Reasoning

Synthetic or de-identified data supports engineering activity without exposing production personal or health data where a suitable substitute is feasible. This reduces disclosure while retaining the characteristics needed for the activity.

### Implemented By These Standards

- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Data Retention & Deletion

### Summary

Personal or health data is retained only as long as its purpose requires, with deletion automated and extended to backup and archival copies.

### Reasoning

Retaining personal or health data beyond its purpose extends its exposure without providing corresponding value. Defined retention periods and automated enforcement prevent indefinite accumulation, while extending deletion to backup and archival copies avoids leaving residual data after primary copies are removed.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
