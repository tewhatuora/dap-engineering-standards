---
last_edited: 2026-09-09
---

# Backup & Disaster Recovery

## Recovery Strategy

### Summary

A service selects a disaster recovery strategy during design according to its RPO, RTO, availability needs, cost, and approved data jurisdictions.

### Standards

1. `std-ops-recovery-strategy-01` A service's disaster recovery strategy **MUST** be decided during its design.
2. `std-ops-recovery-strategy-02` Backup and restore **SHOULD** be chosen where a service's defined RPO and RTO can tolerate the time needed to provision infrastructure and restore data from backup.
3. `std-ops-recovery-strategy-03` Cold standby **SHOULD** be chosen where a service's RTO does not tolerate provisioning infrastructure from scratch, so its data and core infrastructure already exist in a separate site but remain switched off.
4. `std-ops-recovery-strategy-04` Warm standby **SHOULD** be chosen where a service's RTO requires it to serve at least reduced production traffic immediately on failover.
5. `std-ops-recovery-strategy-05` Multi-site active/active **SHOULD** be chosen where a service's RPO and RTO require continuous availability across sites, and the service can justify running at or near full capacity in more than one site at once.
6. `std-ops-recovery-strategy-06` A site or backup storage location selected to support a service's recovery **MUST** be within a jurisdiction already approved for the service's data.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)

## Backup Coverage

### Summary

A service identifies every data and configuration source needed for recovery and either backs it up before production use or relies on qualifying reconstructability, durability, or redundancy.

### Standards

1. `std-ops-backup-coverage-01` A service **MUST** identify the data and configuration it needs for recovery and protect each item through backup, reconstructability, durability, or redundancy that meets its RPO and RTO.
2. `std-ops-backup-coverage-02` A new data store or configuration source **MUST** have a recovery mechanism meeting the service's RPO and RTO before it is relied on in production.
3. `std-ops-backup-coverage-03` Data that can be regenerated or reconstructed from another authoritative source within the service's defined RPO and RTO **MAY** be excluded from a separate backup.
4. `std-ops-backup-coverage-04` Data and configuration **MAY** rely on a cloud-native mechanism's own documented durability or redundancy guarantee instead of a separate backup.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Backup Frequency & Retention

### Summary

A backup's frequency meets the service's RPO, and its retention period is defined, proportionate, and enforced.

### Standards

1. `std-ops-backup-frequency-retention-01` A backup's frequency **MUST** be set so that the maximum data loss between successive backups does not exceed the service's defined RPO.
2. `std-ops-backup-frequency-retention-02` A backup's retention period **MUST** be defined and proportionate to the cost of retaining it and any applicable legal or regulatory retention requirement.
3. `std-ops-backup-frequency-retention-03` A backup **MUST** be deleted once it passes its defined retention period, so retained data does not accumulate cost or exposure beyond what its retention justifies.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Backup Reliability

### Summary

A backup is created automatically, and a failed backup automatically alerts the team responsible for it.

### Standards

1. `std-ops-backup-reliability-01` A backup **MUST** be created through an automated process.
2. `std-ops-backup-reliability-02` A failed backup **MUST** automatically trigger an alert to the team responsible for the service it protects.

### Related Standards

- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Observability](../../principles/reliability-operations/observability.md)

## Backup Isolation & Redundancy

### Summary

A backup lives separately from the system it protects, protected from deletion, and kept as more than one copy.

### Standards

1. `std-ops-backup-isolation-redundancy-01` A backup **MUST** be kept in a location and access domain separate from the system it protects, so a failure, compromise, or deletion affecting that system does not also affect the backup.
2. `std-ops-backup-isolation-redundancy-02` At least one recoverable backup copy **MUST** be protected against modification or deletion throughout its retention period by an administrator of the system it protects.
3. `std-ops-backup-isolation-redundancy-03` A backup **SHOULD** be maintained as more than one copy, so that a single storage failure or corruption event does not eliminate the only recoverable copy.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Recovery Infrastructure

### Summary

A service's infrastructure provisions from its own code definition, with that time accounted for in its RTO.

### Standards

1. `std-ops-recovery-infrastructure-01` The infrastructure a service depends on to be restored **MUST** be capable of being provisioned from its own code definition, so a disaster recovery plan does not depend on undocumented manual action to rebuild it.
2. `std-ops-recovery-infrastructure-02` Where a service's infrastructure is not already running, the service's defined RTO **MUST** account for the time needed to provision that infrastructure from its code definition.

### Related Standards

- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Recovery Plan

### Summary

A service has a discoverable disaster recovery runbook that records its objectives, dependencies, restoration sequence, and steps capable of meeting its RTO.

### Standards

1. `std-ops-recovery-plan-01` A production service **MUST** have a documented disaster recovery plan covering failures capable of making the service unavailable, including loss of a required site where applicable.
2. `std-ops-recovery-plan-02` A disaster recovery plan **MUST** record the service's defined recovery objectives, so its recovery capability can be measured against them.
3. `std-ops-recovery-plan-03` A disaster recovery plan **SHOULD** specify the restoration order for a service with more than one dependency, so a service is not restored before the dependencies it needs are already available.
4. `std-ops-recovery-plan-04` The recovery procedure documented by a disaster recovery plan **MUST** be capable of restoring the service within its defined RTO.
5. `std-ops-recovery-plan-05` A disaster recovery plan **MUST** be documented and maintained as a runbook.
6. `std-ops-recovery-plan-06` A service's disaster recovery plan **MUST** be discoverable to its responders through established service documentation.

### Related Standards

- [Runbooks](runbooks.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Recovery Testing

### Summary

A service's recovery capability is tested periodically against realistic conditions, and the result measured against its objectives.

### Standards

1. `std-ops-recovery-testing-01` A production service's recovery capability **MUST** be exercised periodically under conditions representative of its recovery strategy, using production only where the exercise is controlled and safe.
2. `std-ops-recovery-testing-02` A service's infrastructure provisioning and deployment **SHOULD** be regularly exercised in a lower or ephemeral environment, without manual intervention, so a gap in its code definition is caught early.
3. `std-ops-recovery-testing-03` A disaster recovery test's outcome, including the actual time taken to restore a service and the data loss actually incurred, **MUST** be recorded and compared against the service's defined RPO and RTO.

### Related Standards

- [Runbooks](runbooks.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
