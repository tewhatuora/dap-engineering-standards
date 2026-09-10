---
last_edited: 2026-09-10
---

# Reliability & Resilience

## Designing for Failure

### Summary

Services are designed for component, dependency, and infrastructure failure, with redundancy proportionate to service criticality.

### Reasoning

Components, dependencies, and infrastructure can fail during normal operation even when the service itself has not changed. Treating these failures as design inputs makes their effect visible before production and allows the service to continue or recover without relying on every part remaining available.

Redundancy removes dependence on a single critical component, but it also adds cost and operational complexity. Matching it to service criticality limits outage impact without imposing the same recovery design on services with different consequences of failure.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Dependency Failure Containment

### Summary

Dependency calls use timeouts and limited retries, and dependency failures are contained before they affect the wider service.

### Reasoning

An unbounded wait continues consuming service resources after a dependency has stopped responding, reducing the capacity available for other work. A timeout releases those resources, while limited retries with backoff allow a transient failure to recover without continuously adding pressure to an impaired dependency.

Without containment, waiting work and repeated calls can exhaust the capacity of connected services and spread the failure beyond the original dependency. Isolating the affected interaction preserves functionality that does not rely on it and gives the dependency time to recover.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Overload Protection

### Summary

Services protect their capacity from excess demand using demand controls, prioritisation, and resource isolation.

### Reasoning

When demand exceeds the work a service can process, queued requests and resource use can continue growing until the service can no longer respond. Bounding or shedding work preserves enough capacity for the service to remain available instead of allowing overload to become a full outage.

Not all work has the same importance, and one consumer can otherwise use capacity needed by others. Prioritisation and resource isolation preserve critical functionality and prevent lower-priority or disproportionate demand from consuming the whole service.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Graceful Degradation

### Summary

Services retain reduced functionality during failure or overload when they cannot sustain full functionality.

### Reasoning

A failure or overload may affect one capability without making every service outcome unavailable. Separating non-critical functionality allows the service to preserve the outcomes it can still support rather than turning a partial failure into a complete outage.

Reduced functionality gives users a predictable result while the affected capability recovers and limits the number of workflows disrupted by the failure. The degraded behaviour must remain within what the service can support safely under the impaired condition.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)

## Graceful Service Termination

### Summary

A terminating service instance completes work already in progress and shuts down within a bounded period.

### Reasoning

Service instances terminate during routine deployment, scaling, and recovery as well as during failure. Stopping an instance while it is processing work can leave requests incomplete, repeat side effects when the work is retried, or abandon resources without an orderly release.

Allowing work already in progress to finish reduces these inconsistent outcomes and lets the service stop accepting new work cleanly. A bounded shutdown period provides that opportunity without allowing one stalled task to prevent termination indefinitely.

### Implemented By These Standards

- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Recovery Objectives & Testing

### Summary

Services define recovery point and recovery time objectives and regularly test recovery under realistic conditions.

### Reasoning

Recovery objectives make the acceptable limits for data loss and downtime explicit. These limits provide measurable targets for selecting backup, restoration, and continuity approaches that are proportionate to the service and the impact of its loss.

Recovery depends on infrastructure, data, dependencies, and procedures working together, so the presence of each part does not demonstrate that the complete path will succeed. Testing under realistic conditions shows whether the service can meet its objectives before a real failure requires recovery.

### Implemented By These Standards

- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Validated Recovery Procedures

### Summary

Operational recovery procedures are tested under representative conditions before responders rely on them.

### Reasoning

A documented procedure can contain missing steps, incorrect assumptions, or prerequisites that are unavailable during an incident even when the intended recovery approach is sound. Testing under representative conditions shows whether responders can follow the procedure and reach the expected outcome with the systems and access available to them.

Services and their dependencies change, so a procedure that worked previously can become inaccurate. Correcting gaps found during testing keeps the procedure aligned with the service and prevents a known problem from remaining until the next exercise or incident.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Defined Failure Recovery Paths

### Summary

Known failure modes have defined recovery paths.

### Reasoning

A known failure without a prepared recovery path requires responders to determine the response while the service is already impaired. This delays recovery and allows different responders to take inconsistent actions under the same condition.

A defined path records the expected response, the state it should restore, and the conditions that show whether recovery succeeded. Responders can act from an established basis while still applying judgement when the incident differs from the known failure.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Accessible Recovery Procedures

### Summary

Operational recovery procedures are easy to find during an incident and accessible to the responders who need them.

### Reasoning

A recovery procedure cannot support a timely response when responders do not know it exists or cannot access it during an incident. Time spent searching for instructions or resolving permissions delays action while the service remains impaired.

Connecting a known failure signal to its procedure gives responders a direct path from detection to recovery. Access that does not depend on the source repository also prevents repository permissions or availability from becoming a prerequisite for operational response.

### Implemented By These Standards

- [Runbooks](../../standards/operations-observability/runbooks.md)
