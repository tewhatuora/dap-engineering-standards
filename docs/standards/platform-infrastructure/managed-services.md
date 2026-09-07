# Managed Services

A managed service is configured and verified against the workload's own requirements.

## Service Quotas

### Summary

A managed service's relevant quotas are identified before production use and monitored so capacity or demand can be adjusted before a quota is reached.

### Standards

1. `std-plat-service-quotas-01` A managed service's quota relevant to a workload's expected demand **MUST** be identified before the workload depends on that service in production.
2. `std-plat-service-quotas-02` A managed service's quota usage **MUST** be monitored against expected demand so capacity or workload can be adjusted before the quota is reached.

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Availability

### Summary

A managed service uses redundancy across failure domains according to the workload's defined RTO.

### Standards

1. `std-plat-availability-01` Where a workload's defined RTO cannot tolerate the loss of a single failure domain, a managed service it depends on **MUST** have its redundancy across failure domains enabled.
2. `std-plat-availability-02` A workload whose defined RTO can tolerate the loss of a single failure domain **SHOULD** use a managed service's lower-redundancy configuration.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Backup & Recovery

### Summary

A managed service's built-in backup meets the workload's RPO and RTO, and its restoration is verified during disaster recovery testing.

### Standards

1. `std-plat-backup-recovery-01` Where a managed service's built-in backup is relied on instead of a separate one, its frequency and retention **MUST** meet the workload's defined RPO and RTO.
2. `std-plat-backup-recovery-02` Restoration from a managed service's built-in backup **MUST** be verified as part of disaster recovery testing.

### Related Standards

- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Automatic Patching

### Summary

Automatic patching is normally enabled, with the maintenance window set to a period of low impact to users.

### Standards

1. `std-plat-automatic-patching-01` Automatic patching **SHOULD** remain enabled for a managed service instance.
2. `std-plat-automatic-patching-02` A managed service instance's maintenance window **SHOULD** be set to a period of low impact to end users.

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Observability Integration

### Summary

Telemetry and alerts required to operate a managed service are integrated with the organisation's centralised observability and alerting platforms.

### Standards

1. `std-plat-observability-integration-01` Telemetry required to operate a managed service, including applicable logs and metrics, **MUST** be integrated into the organisation's centralised observability platform.
2. `std-plat-observability-integration-02` A managed service's own native alerting **SHOULD** be configured to notify through the organisation's centralised alerting mechanism.

### Related Standards

- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Automation](../../principles/engineering-practice/automation.md)
