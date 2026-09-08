# Reliability & Resilience

## Designing for Failure

### Summary

Services are designed on the assumption that components, dependencies, and infrastructure will fail, with redundancy proportionate to service criticality.

### Reasoning

Component and dependency failures are normal operating conditions. Treating them as design inputs exposes failure modes before production and prevents a critical component from becoming a single point of failure.

Redundancy matched to service criticality limits outage impact without imposing the same recovery design on every service.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Dependency Failure Containment

### Summary

Dependency calls are bounded by timeouts and limited retries, and dependency failures are contained before they cascade.

### Reasoning

An unbounded wait consumes resources after a dependency has stopped responding. Timeouts release those resources, while bounded retries with backoff allow transient failures to recover without increasing pressure on an impaired dependency.

Containing a dependency failure preserves functionality that does not rely on it and prevents one failure from exhausting the capacity of connected services.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Overload Protection

### Summary

Services protect their capacity from excess demand through demand controls, prioritisation, and resource isolation.

### Reasoning

Uncontrolled demand can exhaust shared resources and turn local saturation into a full outage. Bounding or shedding work keeps service capacity available when demand exceeds what the service can process.

Prioritising critical requests and isolating consumers prevents lower-priority or disproportionate demand from displacing critical functionality.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Graceful Degradation

### Summary

Services retain reduced functionality during failure or overload when full functionality cannot be sustained.

### Reasoning

Independent failure of non-critical functionality preserves the service outcomes that remain supportable. This limits the user impact of a partial failure and avoids turning the loss of one capability into loss of the whole service.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)

## Graceful Service Termination

### Summary

A terminating service instance completes its in-flight work and shuts down within a bounded period.

### Reasoning

Termination occurs during routine deployment, scaling, and recovery as well as during failure. Stopping an instance while it is still processing work can leave requests incomplete, duplicate side effects when work is retried, or abandon resources without orderly release.

A bounded shutdown period allows current work to finish without making termination wait indefinitely.

### Implemented By These Standards

- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Recovery Objectives & Testing

### Summary

Services define recovery point and recovery time objectives and periodically test recovery capability under realistic conditions.

### Reasoning

Recovery objectives make the acceptable limits for data loss and downtime explicit. They provide measurable targets for selecting recovery strategies and assessing whether those strategies are proportionate to the service.

Recovery capability depends on infrastructure, data, dependencies, and procedures working together. Periodic testing under representative conditions demonstrates whether the complete recovery path meets its objectives before a real failure requires it.

### Implemented By These Standards

- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Validated Recovery Procedures

### Summary

Operational recovery procedures are tested in representative conditions before they are relied upon.

### Reasoning

A documented procedure can be incomplete or inaccurate even when its intended recovery path is sound. Testing it in representative conditions verifies that its steps, prerequisites, and resolution outcome can be followed before an incident depends on them.

Correcting a discovered gap promptly keeps the documented procedure aligned with the service rather than preserving a known failure for the next exercise or incident.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Defined Failure Recovery Paths

### Summary

Known failure modes have defined recovery paths.

### Reasoning

A defined recovery path reduces delay and inconsistency when a known failure occurs. It gives responders a prepared response instead of requiring them to reconstruct one during an incident.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Accessible Recovery Procedures

### Summary

Operational recovery procedures are discoverable at the point of response and accessible to the responders who need them.

### Reasoning

A recovery procedure provides no timely path to action when responders cannot find or access it during an incident. Linking a known failure signal to its procedure reduces search time, while access independent of the source repository avoids making repository permissions a prerequisite for response.

### Implemented By These Standards

- [Runbooks](../../standards/operations-observability/runbooks.md)
