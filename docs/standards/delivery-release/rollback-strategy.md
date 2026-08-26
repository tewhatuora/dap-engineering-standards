# Rollback Strategy

## Summary

> Recovery from a failed deployment is fast and rehearsed, not improvised under pressure.

## Standards

### Rollback Triggers

These requirements set out how a rollback is triggered, based on a decision by the team responsible for the service.

1. An automated signal **SHOULD** be raised where a breached production error-rate or latency threshold, or a critical or high-severity finding from runtime security testing, is attributable to a recent deployment.
2. A rollback **SHOULD** be triggered only after that signal has been reviewed and judged to warrant a rollback rather than a forward-fix.
3. A rollback **SHOULD NOT** be triggered where the failing capability can instead be disabled through an existing feature flag's kill switch.
4. A rollback **MAY** also be triggered based on a deployment's outcome identified through a means other than an automated signal, such as manual testing.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Feature Flagging](feature-flagging.md)

### Rollback Versus Forward-Fix

These requirements describe the criteria for choosing a rollback over a forward-fix, or a forward-fix over a rollback.

1. A rollback **SHOULD** be chosen over a forward-fix by default, since reverting to a previously verified version is faster and carries lower risk than developing and verifying a new fix under time pressure.
2. A forward-fix **SHOULD** be chosen over a rollback only where reverting would itself cause a material loss of function or data, or where the failure is unrelated to the most recent deployment.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Target Version & Recovery Objective

These requirements address how a rollback's target version is determined and how quickly the rollback completes.

1. A rollback's target version **MUST** default to the version most recently verified through the service's own deployment history; using an older version **MUST** be a deliberate choice.
2. A rollback **MUST** be capable of being fully executed within the service's defined recovery time objective.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Data & Schema Compatibility

These requirements cover how a rollback's target version remains compatible with data or schema changes made since it was last running.

1. A version being rolled back to **MUST** remain compatible with the current state of any data or schema that a subsequent version has already changed.
2. A rollback **MUST NOT** proceed where doing so would run an incompatible version against the current data or schema state; a forward-fix **MUST** be used instead until compatibility is restored.

#### References

- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)
- [Progressive Delivery Strategies](progressive-delivery-strategies.md)

### Rollback Scope & Coordination

These requirements guide how the set of services affected by a rollback is determined and sequenced.

1. A coordinated rollback **MUST** revert every service with a genuine dependency on the failing change, not only the one where the failure was first observed.
2. A service without such a dependency **MUST NOT** be included in the rollback.
3. Dependent services **MUST** revert in a pre-defined sequence, so a service is never left calling a dependency that is running an incompatible version.

#### References

- [Release Strategy](release-strategy.md)

### Post-Rollback Verification

These requirements set out how a rollback's own success is confirmed once it has been executed.

1. A rollback **MUST** be verified against the same automated health checks required of any deployment, supplemented by manual testing where warranted, before it is deemed successful.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Post-Rollback Review

These requirements describe how a rollback feeds into a service's incident review and recovery-objective tracking.

1. A rollback triggered by a production failure **MUST** be classified as an incident for the purposes of root cause review, regardless of how quickly it was resolved.
2. The time taken to complete a rollback **SHOULD** be measured against the service's defined recovery time objective, so a gap between actual and required recovery speed is identified and addressed.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
