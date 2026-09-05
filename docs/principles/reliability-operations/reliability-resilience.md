# Reliability & Resilience

## Designing for Failure

### Summary

Services are designed on the assumption that components, dependencies, and infrastructure will fail, with redundancy proportionate to service criticality.

### Reasoning

Component and dependency failures are normal operating conditions. Treating them as design inputs exposes failure modes before production and prevents a critical component from becoming a single point of failure.

Redundancy matched to service criticality limits outage impact without imposing the same recovery design on every service.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Deployment Risk Reduction

### Summary

Deployments have viable rollback or forward-fix paths, with risk reduced through progressive exposure and rapid disablement.

### Reasoning

A deployment can introduce a failure despite prior validation. A prepared rollback or forward-fix path reduces recovery time and avoids designing a response under incident pressure.

Progressive exposure bounds the impact of an undetected failure while evidence is gathered from production. Independently controlled functionality can be disabled without waiting for another deployment.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)

## Dependency Failure Containment

### Summary

Dependency calls are bounded by timeouts and limited retries, and dependency failures are contained before they cascade.

### Reasoning

An unbounded wait consumes resources after a dependency has stopped responding. Timeouts release those resources, while bounded retries with backoff allow transient failures to recover without increasing pressure on an impaired dependency.

Containing a dependency failure preserves functionality that does not rely on it and prevents one failure from exhausting the capacity of connected services.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)

## Overload Protection

### Summary

Services protect their capacity from excess demand through demand controls, prioritisation, and resource isolation.

### Reasoning

Uncontrolled demand can exhaust shared resources and turn local saturation into a full outage. Bounding or shedding work keeps service capacity available when demand exceeds what the service can process.

Prioritising critical requests and isolating consumers prevents lower-priority or disproportionate demand from displacing the functionality that must remain available.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Graceful Degradation

### Summary

Services retain reduced functionality during failure or overload when full functionality cannot be sustained.

### Reasoning

Independent failure of non-critical functionality preserves the service outcomes that remain supportable. This limits the user impact of a partial failure and avoids turning the loss of one capability into loss of the whole service.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)

## Recovery Objectives & Testing

### Summary

Services define recovery point and recovery time objectives and periodically test recovery capability under realistic conditions.

### Reasoning

Recovery objectives make the acceptable limits for data loss and downtime explicit. They provide measurable targets for selecting recovery strategies and assessing whether those strategies are proportionate to the service.

Recovery capability depends on infrastructure, data, dependencies, and procedures working together. Periodic testing under representative conditions demonstrates whether the complete recovery path meets its objectives before a real failure requires it.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Incident Readiness & Learning

### Summary

Known failure modes have documented responses, and incidents that cause an outage, material data loss, or a recovery-objective breach produce root-cause reviews with corrective actions tracked to completion.

### Reasoning

A documented response reduces delay and inconsistency when a known failure occurs. It gives responders a prepared recovery path instead of requiring them to reconstruct one during an incident.

Root-cause review identifies the conditions that produced an incident and the factors that allowed its impact. Tracking corrective action to completion turns that understanding into a reduced likelihood or impact of recurrence.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
