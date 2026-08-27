# Rollback Strategy

## Summary

> Recovery from a failed deployment is fast and rehearsed, not improvised under pressure.

## Standards

### Rollback Triggers

> A rollback is triggered by the responsible team's own reviewed decision, not an automated signal acting alone.

1. An automated signal **SHOULD** be raised where a breached production error-rate or latency threshold, or a critical or high-severity finding from runtime security testing, is attributable to a recent deployment.
2. A rollback **SHOULD** be triggered only after that signal has been reviewed and judged to warrant a rollback rather than a forward-fix.
3. A rollback **SHOULD NOT** be triggered where the failing capability can instead be disabled through an existing feature flag's kill switch.
4. A rollback **MAY** also be triggered based on a deployment's outcome identified through a means other than an automated signal, such as manual testing.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Feature Flagging](feature-flagging.md)

### Rollback Versus Forward-Fix

> A rollback is the default choice over a forward-fix, unless reverting itself would cause a material loss of function or data.

1. A rollback **SHOULD** be chosen over a forward-fix by default, since reverting to a previously verified version is faster and carries lower risk than developing and verifying a new fix under time pressure.
2. A forward-fix **SHOULD** be chosen over a rollback only where reverting would itself cause a material loss of function or data, or where the failure is unrelated to the most recent deployment.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Target Version & Recovery Objective

> A rollback defaults to the most recently verified version, and completes within the service's recovery time objective.

1. A rollback's target version **MUST** default to the version most recently verified through the service's own deployment history; using an older version **MUST** be a deliberate choice.
2. A rollback **MUST** be capable of being fully executed within the service's defined recovery time objective.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Data & Schema Compatibility

> A rollback never runs an incompatible version against the current data or schema state; a forward-fix is used instead.

1. A version being rolled back to **MUST** remain compatible with the current state of any data or schema that a subsequent version has already changed.
2. A rollback **MUST NOT** proceed where doing so would run an incompatible version against the current data or schema state; a forward-fix **MUST** be used instead until compatibility is restored.

#### References

- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Progressive Delivery Strategies](progressive-delivery-strategies.md)

### Rollback Scope & Coordination

> A rollback reverts every genuinely dependent service, in a pre-defined sequence, and nothing beyond that.

1. A coordinated rollback **MUST** revert every service with a genuine dependency on the failing change, not only the one where the failure was first observed.
2. A service without such a dependency **MUST NOT** be included in the rollback.
3. Dependent services **MUST** revert in a pre-defined sequence, so a service is never left calling a dependency that is running an incompatible version.

#### References

- [Release Strategy](release-strategy.md)

### Post-Rollback Verification

> A rollback is verified against the same automated health checks as any deployment before it counts as successful.

1. A rollback **MUST** be verified against the same automated health checks required of any deployment, supplemented by manual testing where warranted, before it is deemed successful.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Post-Rollback Review

> A rollback triggered by a failure is always classified as an incident, and its recovery time measured against the objective.

1. A rollback triggered by a production failure **MUST** be classified as an incident for the purposes of root cause review, regardless of how quickly it was resolved.
2. The time taken to complete a rollback **SHOULD** be measured against the service's defined recovery time objective, so a gap between actual and required recovery speed is identified and addressed.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
