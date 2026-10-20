---
last_edited: 2026-10-21
---

# Observability

## Early Observability

### Summary

Engineers design and build observability alongside a service, before a production incident reveals missing information.

### Reasoning

Designing instrumentation requires an understanding of the service's behaviour, decisions, and dependencies. Developing instrumentation alongside the service makes the necessary telemetry available at release, while engineers still have the design context.

Observability added after an incident cannot supply the evidence that responders needed during the incident. Responders have to rely on an incomplete picture of service behaviour when accurate information matters most.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Central Operational Telemetry

### Summary

Telemetry needed to operate services is available through one established observability platform.

### Reasoning

When each service stores operational telemetry in a separate system, responders need to find those systems before investigating an incident. This delays diagnosis and makes it harder to trace behaviour across services when several systems contribute to the same failure.

A shared platform gives responders one place to query and correlate evidence across services. It also applies common access, retention, and operating controls, so each team does not need to build and support a separate telemetry system.

### Implemented By These Standards

- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Consistent Instrumentation

### Summary

Services use consistent instrumentation conventions and telemetry semantics.

### Reasoning

Consistent names, attributes, units, and meanings let responders query and compare telemetry from different services in the same way. They can combine signals without first translating each team's or service's conventions.

When services describe similar behaviour differently, dashboards, alerts, and investigations depend on knowledge specific to each service. Shared meanings keep signals consistent across services, so engineers can analyse them together.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Diagnostic Signal Coverage

### Summary

A service produces structured logs, metrics, and traces that explain its behaviour and dependencies without engineers needing to inspect its running state directly.

### Reasoning

Logs, metrics, and traces each provide different evidence about service health, performance, events, and transactions. Together, they give engineers enough context to detect a problem and understand the behaviour that caused it.

Engineers can use these signals without accessing a particular running instance, which may already have restarted or disappeared. Including dependencies and integration points helps distinguish an internal failure from one caused by an external interaction.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Correlation Across Services

### Summary

Telemetry can be correlated across services so engineers can trace a transaction from end to end.

### Reasoning

A transaction often crosses several services through synchronous calls and asynchronous messages. Without shared context, each service records only its own part, and responders cannot reliably tell which events belong to the same transaction.

Passing correlation information between services lets responders reconstruct the full transaction from their telemetry. This shows where time was spent, where the transaction failed, and which services or dependencies contributed to the outcome.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Telemetry Data Minimisation

### Summary

Telemetry includes sensitive data only when needed for diagnosis, with protection for any sensitive data that cannot be excluded.

### Reasoning

Telemetry is copied, retained, searched, and accessed for operational analysis. Each use gives sensitive data more opportunities to be exposed. Collecting only what diagnosis requires reduces that exposure while keeping the information needed to understand service behaviour.

Some sensitive data may be needed to investigate a particular type of problem. Protecting it limits who can access it and reduces the chance of exposure beyond the purpose for which it was collected.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Actionable Telemetry

### Summary

Telemetry reflects real impact and can inform a decision; signals that support no action are not collected or used for alerts.

### Reasoning

Every collected signal uses storage and processing capacity, and every alert demands attention. Low-value and redundant signals add cost and make useful evidence harder to find.

Linking telemetry to a decision makes clear why it is collected and how it will be used. Alerts tied to operational or business impact direct attention to conditions that need a response, reducing the repeated interruptions that cause alert fatigue.

### Implemented By These Standards

- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)

## Incident Detection and Readiness

### Summary

Observability detects operational issues as early as possible, and incident telemetry is tested before responders need it.

### Reasoning

Automated detection can identify a developing failure before reports from affected users become the main signal. Earlier detection gives responders more time to investigate and limit the impact.

An alert or dashboard may exist but fail to provide accurate, usable information during a failure. Testing alerts and checking dashboards in advance shows whether telemetry is available, understandable, and relevant to the condition responders need to assess.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
