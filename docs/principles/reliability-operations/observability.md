---
last_edited: 2026-09-11
---

# Observability

## Early Observability

### Summary

Observability is designed and built with a service before a production incident exposes missing visibility.

### Reasoning

Instrumentation depends on understanding the behaviour, decisions, and dependencies that a service needs to explain. Designing it with that behaviour makes the necessary evidence available when the service is released, while the relevant context is still clear to the engineers building it.

Adding observability only after an incident means the missing evidence cannot help diagnose that incident. Responders must work with an incomplete account of the service behaviour at the point when accurate information is most important.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Central Operational Telemetry

### Summary

Telemetry needed to operate services is available through one established observability platform.

### Reasoning

When operational telemetry is spread across service-specific systems, responders must know where each service stores its signals before they can investigate an incident. This delays diagnosis and makes cross-service behaviour harder to reconstruct when several systems contribute to the same failure.

A shared platform provides one place to query and correlate the evidence needed across service boundaries. It also applies common access, retention, and operating controls instead of requiring each team to build and support a separate telemetry path.

### Implemented By These Standards

- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Consistent Instrumentation

### Summary

Services use consistent instrumentation conventions and telemetry semantics.

### Reasoning

Consistent names, attributes, units, and meanings allow telemetry from different services to be queried and compared in the same way. Responders can combine signals without first translating the conventions used by each team or service.

When every service describes similar behaviour differently, dashboards, alerts, and investigations depend on local knowledge. Common semantics preserve the meaning of a signal across service boundaries and make shared operational analysis possible.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Diagnostic Signal Coverage

### Summary

A service emits structured logs, metrics, and traces that explain its behaviour and dependencies without requiring direct inspection of its running state.

### Reasoning

Logs, metrics, and traces provide complementary evidence about service health, performance, events, and transactions. Using them together gives engineers enough context to move from detecting a problem to understanding the behaviour that produced it.

Together these signals allow engineers to diagnose behaviour without relying on access to a specific running instance, which may already have restarted or disappeared. Covering dependencies and integration points also helps distinguish a failure within the service from one caused by an external interaction.

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

Telemetry remains correlatable across service boundaries so a transaction can be traced from end to end.

### Reasoning

A transaction often crosses several services through both synchronous calls and asynchronous messages. Without shared context, each service records an isolated part of the work and responders cannot reliably determine which events belong to the same transaction.

Preserving correlation information across those boundaries joins the separate signals into an end-to-end account. This shows where time was spent, where the transaction failed, and which services or dependencies contributed to the outcome.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Telemetry Data Minimisation

### Summary

Telemetry includes sensitive data only when diagnosis requires it and protects any sensitive data that cannot be excluded.

### Reasoning

Telemetry is copied, retained, searched, and accessed for operational analysis, which gives sensitive data more opportunities to be exposed. Collecting only what diagnosis requires reduces this exposure without removing the information needed to understand service behaviour.

Some sensitive data may be necessary to investigate a specific class of problem. Protecting that data limits who can access it and reduces the chance that operational telemetry reveals it beyond the purpose for which it was collected.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Actionable Telemetry

### Summary

Telemetry is tied to real impact and a decision it can inform; signals that support no action are not collected or used for alerts.

### Reasoning

Every collected signal consumes storage and processing capacity, while every alert competes for attention. Low-value and redundant signals increase those costs and make the evidence needed for an operational decision harder to find among routine noise.

Linking telemetry to a decision makes clear why the signal is collected and how it will be used. Alerts tied to operational or business impact direct attention to conditions that require a response and reduce the repeated interruption that causes alert fatigue.

### Implemented By These Standards

- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)

## Incident Detection and Readiness

### Summary

Observability detects operational issues as early as possible, and incident telemetry is tested before responders need it.

### Reasoning

Automated detection can expose a developing failure before reports from affected users become the primary signal. Earlier detection gives responders more time to investigate the issue and limit its impact.

An alert or dashboard may exist without providing accurate or usable information when a failure occurs. Testing alerts and validating dashboards in advance provides evidence that the expected telemetry is available, understandable, and connected to the condition responders need to assess.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
