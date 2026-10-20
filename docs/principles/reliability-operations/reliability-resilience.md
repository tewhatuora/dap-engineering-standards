---
last_edited: 2026-10-21
---

# Reliability and Resilience

## Designing for Failure

### Summary

Services are designed for component, dependency, and infrastructure failure, with redundancy based on outage impact and recovery objectives.

### Reasoning

Components, dependencies, and infrastructure can fail during normal operation even when the service itself has not changed. Accounting for these failures during design makes their effects clear before production. The service can then continue or recover without relying on every part staying available.

Redundancy removes dependence on a component whose failure would prevent required service outcomes, but it adds cost and operational complexity. Basing it on outage impact and recovery objectives avoids giving every service the same recovery design when the consequences of failure differ.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Dependency Failure Containment

### Summary

Dependency calls use timeouts and limited retries, and failures are isolated before they affect the wider service.

### Reasoning

Waiting indefinitely for an unresponsive dependency holds resources needed by other operations. A timeout releases those resources. Limited retries with backoff give a dependency time to recover from a temporary failure without continually adding pressure.

Without isolation, pending operations and repeated calls can exhaust the capacity of connected services and spread the failure beyond the original dependency. Isolating the affected interaction keeps unrelated functionality working and gives the dependency time to recover.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Telemetry Instrumentation](../../standards/operations-observability/telemetry-instrumentation.md)

## Overload Protection

### Summary

Services protect their capacity from excess demand using demand controls, prioritisation, and resource isolation.

### Reasoning

When demand exceeds what a service can process, queued requests and resource use can grow until the service stops responding. Limiting or shedding load keeps enough capacity available to prevent overload from becoming a full outage.

Some operations are more important than others, and one consumer can use capacity that others need. Prioritisation and resource isolation keep critical functionality available and stop lower-priority or disproportionate demand from using the service's entire capacity.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Graceful Degradation

### Summary

During failure or overload, services preserve the functionality they can continue to support safely.

### Reasoning

A failure or overload may affect one capability without disabling the rest of the service. Separating non-critical functionality keeps the remaining capabilities available rather than turning a partial failure into a complete outage.

Reduced functionality gives users a predictable result during recovery and limits how many workflows the failure disrupts. This works only if the service can safely support that reduced functionality under the failure or overload conditions.

### Implemented By These Standards

- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)

## Graceful Service Termination

### Summary

A terminating service instance finishes operations already in progress and shuts down within a bounded period.

### Reasoning

Service instances stop during routine deployment, scaling, and recovery as well as during failure. Stopping an instance mid-task can leave requests incomplete, cause duplicate side effects on retry, or leave resources unreleased.

Allowing active operations to finish while the instance stops accepting new ones reduces these inconsistent outcomes. A bounded shutdown period gives active operations time to finish without letting one stalled task block termination indefinitely.

### Implemented By These Standards

- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Recovery Objectives and Testing

### Summary

Services define recovery point and recovery time objectives and test recovery at defined intervals and after recovery-path changes, under conditions representative of the recovery strategy.

### Reasoning

Recovery objectives set clear limits for acceptable data loss and downtime. These measurable targets guide backup, restoration, and continuity choices without adding recovery capabilities beyond what the objectives require.

Recovery depends on infrastructure, data, dependencies, and procedures working together. Having each part in place does not prove that the full recovery path works. Testing under realistic conditions shows whether the service can meet its objectives before a real failure makes recovery necessary.

### Implemented By These Standards

- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)

## Validated Recovery Procedures

### Summary

Operational recovery procedures are tested under representative conditions before responders rely on them.

### Reasoning

A documented procedure can have missing steps, incorrect assumptions, or prerequisites that are unavailable during an incident, even when the recovery approach is sound. Testing under representative conditions shows whether responders can follow the procedure and achieve the expected result with the systems and access they have.

Services and their dependencies change, so a procedure that once worked can become inaccurate. Fixing gaps found during testing keeps the procedure up to date rather than leaving known problems until the next exercise or incident.

### Implemented By These Standards

- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Defined Failure Recovery Paths

### Summary

Known failure modes have defined recovery paths.

### Reasoning

Without a prepared recovery path, responders have to work out what to do while the service is already impaired. This delays recovery and can lead different responders to take inconsistent actions for the same failure.

A defined path records the expected response, the state to restore, and how to tell whether recovery succeeded. Responders have a clear starting point and can still apply judgement when the incident differs from the known failure.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)

## Accessible Recovery Procedures

### Summary

Operational recovery procedures are easy to find during an incident and accessible to the responders who need them.

### Reasoning

A recovery procedure cannot help responders act promptly if they do not know it exists or cannot access it during an incident. Searching for instructions or resolving permissions delays action while the service remains impaired.

Linking a known failure signal to its procedure gives responders a direct path from detection to recovery. Making procedures accessible without the source repository also lets responders act when repository permissions or availability would otherwise block them.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
