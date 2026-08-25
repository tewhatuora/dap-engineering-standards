# Backup & Disaster Recovery

## Summary

> Design and validate recovery against defined objectives.

## Objective

This standard defines requirements for how a service's data and configuration are backed up, and how a service recovers from a disaster affecting its normal operation. It keeps a service's actual recovery capability aligned with its defined recovery point objectives (RPO) and recovery time objectives (RTO), so data loss and downtime stay within what the service can sustain.

## Standards

### Recovery Strategy Selection

These requirements set out how a service always has a defined disaster recovery strategy, chosen based on its defined RPO and RTO.

1. A service's disaster recovery strategy **MUST** be decided during its design, not deferred until implementation or chosen reactively after a disaster occurs.
2. Backup and restore **SHOULD** be chosen where a service's defined RPO and RTO can tolerate the time needed to provision infrastructure and restore data from backup.
3. Cold standby **SHOULD** be chosen over backup and restore where a service's RTO does not tolerate provisioning infrastructure from scratch, so its data and core infrastructure already exist in a separate site but remain switched off.
4. Warm standby **SHOULD** be chosen over cold standby where a service's RTO requires it to serve at least reduced production traffic immediately on failover, rather than first scaling up infrastructure that was switched off.
5. Multi-site active/active **SHOULD** be chosen where a service's RPO and RTO require continuous availability across sites, and the service can justify running at or near full capacity in more than one site at once.
6. A site or backup storage location selected to support a service's recovery **MUST** be within a jurisdiction already approved for the service's data.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Backup Scope & Coverage

These requirements set out how a service's data and configuration are identified for backup.

1. A service **MUST** identify the data and configuration it depends on to be restored to an operable state, and confirm each item is captured by a backup.
2. A new data store or configuration source a service depends on **MUST** be added to that service's backup coverage before it is relied on in production.
3. Data that can be regenerated or reconstructed from another authoritative source within the service's defined RPO and RTO **MAY** be excluded from a separate backup.
4. Data and configuration **MAY** rely on a cloud-native mechanism's own documented durability or redundancy guarantee instead of a separate backup.

### Backup Frequency & Retention

These requirements describe how a backup's frequency and retention period are set relative to a service's recovery objectives.

1. A backup's frequency **MUST** be set so that the maximum data loss between successive backups does not exceed the service's defined RPO.
2. A backup's retention period **MUST** be defined and proportionate to the cost of retaining it and any applicable legal or regulatory retention requirement.
3. A backup **MUST** be deleted once it passes its defined retention period, so retained data does not accumulate cost or exposure beyond what its retention justifies.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Sustainability by Design](../../principles/sustainability-by-design.md)
- [Privacy by Design](../../principles/privacy-by-design.md)

### Backup Reliability

These requirements address how a backup is created and its failure detected without depending on manual intervention.

1. A backup **MUST** be created through an automated process, rather than performed manually.
2. A failed backup **MUST** automatically trigger an alert to the team responsible for the service it protects.

#### References

- [Automation First](../../principles/automation-first.md)
- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)

### Backup Isolation & Redundancy

These requirements cover how a backup is isolated from the system it protects, and how it is duplicated for redundancy purposes.

1. A backup **MUST** be kept in a location and access domain separate from the system it protects, so a failure, compromise, or deletion affecting that system does not also affect the backup.
2. A backup **MUST** be protected against modification or deletion throughout its retention period, even from a person or process with administrative access to the system it protects.
3. A backup **SHOULD** be maintained as more than one copy, so that a single storage failure or corruption event does not eliminate the only recoverable copy.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Security by Design](../../principles/security-by-design.md)

### Infrastructure Provisioning for Recovery

These requirements guide how a service's infrastructure is defined for quick, reliable provisioning during a disaster.

1. The infrastructure a service depends on to be restored **MUST** be capable of being provisioned from its own code definition, so a disaster recovery plan does not depend on undocumented manual action to rebuild it.
2. Where a service's infrastructure is not already running, the service's defined RTO **MUST** account for the time needed to provision that infrastructure from its code definition.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)

### Disaster Recovery Plan

These requirements guide how a service has a documented disaster recovery plan in place before it is needed.

1. A service **MUST** have a documented disaster recovery plan describing how it is restored following a disaster affecting its normal operation, including a scenario in which a site it depends on is unavailable.
2. A disaster recovery plan **MUST** record the service's defined recovery objectives, so its recovery capability can be measured against them.
3. A disaster recovery plan **SHOULD** specify the restoration order for a service with more than one dependency, so a service is not restored before the dependencies it needs are already available.
4. A disaster recovery plan **MUST** be capable of restoring a service within its defined RTO.
5. A disaster recovery plan **MUST** be documented and maintained as a runbook.
6. A service's disaster recovery plan **MUST** be discoverable from its repository's `README`, or a location linked from it.

#### References

- [Runbooks](runbooks.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Disaster Recovery Validation

These requirements set out how a service's recovery capability is proven through periodic, realistic testing.

1. A service's recovery capability, from an individual backup restore or standby failover to a full simulated site loss, **MUST** be exercised periodically against production, or a non-production environment representative of production, to confirm it meets its recovery objectives.
2. A service's infrastructure provisioning and deployment **SHOULD** be regularly exercised in a lower or ephemeral environment, without manual intervention, so a gap in its code definition is caught early.
3. A disaster recovery test's outcome, including the actual time taken to restore a service and the data loss actually incurred, **MUST** be recorded and compared against the service's defined RPO and RTO.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Everything as Code](../../principles/everything-as-code.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)
