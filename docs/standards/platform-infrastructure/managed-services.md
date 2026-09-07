# Managed Services

## Summary

> A managed service is configured and verified against the workload's own requirements, not the vendor's defaults.

## Standards

### Service Quotas & Limits

> Identify a managed service's quota against expected demand, and request an increase before usage reaches it.

1. A managed service's quota relevant to a workload's expected demand **MUST** be identified before the workload depends on that service in production.
2. A managed service's quota usage **MUST** be monitored on an ongoing basis, and an increase requested before expected demand reaches the quota, so a breach does not cause an incident.

#### References

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

### Automatic Patching

> Leave automatic patching enabled, and set its maintenance window to a low-impact time, not the vendor's default.

1. Automatic patching **SHOULD** remain enabled for a managed service instance, rather than disabled to avoid a potentially disruptive change.
2. A managed service instance's maintenance window **SHOULD** be set to a period of low impact to end users, rather than left at the vendor's default.

#### References

- [Dependency & Runtime Management](../code-implementation/dependency-runtime-management.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

### Availability Configuration

> Enable redundancy across failure domains only where the workload's own RTO actually needs it.

1. Where a workload's defined RTO cannot tolerate the loss of a single failure domain, a managed service it depends on **MUST** have its redundancy across failure domains enabled.
2. A workload whose defined RTO can tolerate the loss of a single failure domain **SHOULD** use a managed service's lower-redundancy configuration, rather than a higher-redundancy option its RTO does not require.

#### References

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Backup Configuration & Verification

> Set a managed service's built-in backup to the workload's own RPO and RTO, and prove it restores through DR testing.

1. Where a managed service's built-in backup is relied on instead of a separate one, its frequency and retention **MUST** meet the workload's defined RPO and RTO, rather than the vendor's default.
2. A backup produced by a managed service's built-in mechanism **MUST** be restored as part of the organisation's disaster recovery testing, rather than assumed restorable simply because the vendor manages it.

#### References

- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Telemetry & Alerting Integration

> Route the telemetry and alerts required to operate a managed service into the organisation's centralised platform.

1. Telemetry required to operate a managed service, including applicable logs and metrics, **MUST** be integrated into the organisation's centralised observability platform.
2. A managed service's own native alerting **SHOULD** be configured to notify through the organisation's centralised alerting mechanism, rather than operate as a separate channel.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)
