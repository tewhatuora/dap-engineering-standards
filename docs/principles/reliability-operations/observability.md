# Observability

## Early Observability

### Summary

Observability is built into a service during design and development, before a production incident exposes a visibility gap.

### Reasoning

Designing instrumentation alongside the behaviour it observes makes that behaviour diagnosable when it is released. Deferring observability until an incident leaves teams unable to explain a service at the point when that information is needed.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Consistent Instrumentation

### Summary

Instrumentation follows the organisation's established approach consistently across services.

### Reasoning

Common instrumentation and telemetry semantics allow signals from different services to be compared, queried, and correlated consistently. A separate approach for each service fragments operational understanding and makes cross-service diagnosis dependent on local conventions.

### Implemented By These Standards

- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Signal Coverage

### Summary

A service emits enough structured logs, metrics, and traces to explain its behaviour and dependencies without direct inspection of its running state.

### Reasoning

Logs, metrics, and traces expose different aspects of service behaviour. Together they make health, performance, and individual transactions diagnosable without relying on access to a running instance.

Coverage of dependencies and integration points distinguishes a failure within the service from one caused by an external interaction.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Cross-Service Correlation

### Summary

Telemetry remains correlatable across service boundaries through a shared identifier propagated to every downstream call.

### Reasoning

A shared identifier preserves the context of a transaction as it crosses synchronous and asynchronous boundaries. Propagating that identifier allows telemetry from each participating service to be joined into an end-to-end account of the transaction.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Telemetry Data Minimisation

### Summary

Telemetry captures personal, health, or other sensitive data only where observability requires it, with unavoidable sensitive data masked, redacted, or tokenised.

### Reasoning

Telemetry is retained and accessed for operational analysis, which creates exposure when it contains sensitive data. Limiting collection to necessary data reduces that exposure while preserving the information required for diagnosis.

Irreversible masking, redaction, or tokenisation prevents an unavoidable sensitive value from being recovered from the recorded telemetry.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Actionable Telemetry

### Summary

Telemetry remains actionable and tied to real impact, and a signal that informs no decision is not collected or alerted on.

### Reasoning

Every collected signal consumes storage, processing capacity, and attention. Periodic review and removal of low-value or redundant telemetry keeps useful evidence distinguishable from routine noise and controls cost.

Tying alerts to operational or business impact directs attention towards conditions that require a response and reduces alert fatigue.

### Implemented By These Standards

- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)

## Incident Detection and Readiness

### Summary

Observability detects operational issues as early as possible, and telemetry used for incident response is tested before it is needed.

### Reasoning

Automated detection exposes a developing failure before reports from affected users become the primary signal. Earlier detection gives responders more time to limit impact.

Testing alerts and validating dashboards in advance establishes that incident telemetry will be available and accurate under operational pressure.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
