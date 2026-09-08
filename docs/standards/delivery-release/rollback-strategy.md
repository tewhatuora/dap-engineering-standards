# Rollback Strategy

## Triggers

### Summary

A rollback is triggered by predefined criteria or responder judgement after automated or manual evidence identifies a deployment failure.

### Standards

1. `std-del-triggers-01` An automated signal **SHOULD** be raised where a production threshold breach or critical security finding within a defined monitoring window is attributable to a deployment.
2. `std-del-triggers-02` A rollback **SHOULD** be triggered when a signal satisfies predefined rollback criteria or a responder determines that rollback is warranted.
3. `std-del-triggers-03` A rollback **SHOULD NOT** be triggered where the failing capability can instead be disabled through an existing feature flag's kill switch.
4. `std-del-triggers-04` A rollback **MAY** also be triggered based on a deployment's outcome identified through a means other than an automated signal, such as manual testing.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rollback or Forward Fix

### Summary

A rollback is the default response; a forward-fix is used where reverting would cause material loss of function or data or where the failure is unrelated to the latest deployment.

### Standards

1. `std-del-rollback-or-forward-fix-01` A rollback **SHOULD** be chosen over a forward-fix by default, since reverting to a previously verified version is faster and carries lower risk than developing and verifying a new fix under time pressure.
2. `std-del-rollback-or-forward-fix-02` A forward-fix **SHOULD** be chosen over a rollback only where reverting would itself cause a material loss of function or data, or where the failure is unrelated to the most recent deployment.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rollback Target & Timing

### Summary

A rollback defaults to the most recently verified version, and completes within the service's recovery time objective.

### Standards

1. `std-del-rollback-target-timing-01` A rollback's target version **SHOULD** default to the version most recently verified through the service's own deployment history.
2. `std-del-rollback-target-timing-02` Selection of a rollback target older than the most recently verified version **SHOULD** be recorded with the rollback.
3. `std-del-rollback-target-timing-03` A rollback **MUST** be capable of being fully executed within the service's defined recovery time objective.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Rollback Data Compatibility

### Summary

A rollback proceeds only when its target version is compatible with the current data and schema state; otherwise, a forward-fix restores compatibility.

### Standards

1. `std-del-rollback-data-compatibility-01` A rollback **MUST NOT** proceed where doing so would run an incompatible version against the current data or schema state.
2. `std-del-rollback-data-compatibility-02` A forward-fix **MUST** be used until compatibility is restored where rollback would run an incompatible version against the current data or schema state.

### Related Standards

- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Progressive Delivery](progressive-delivery.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rollback Scope

### Summary

A coordinated rollback restores a compatible state across affected services, excludes unrelated services, and follows a defined sequence where order affects compatibility.

### Standards

1. `std-del-rollback-scope-01` A coordinated rollback **MUST** restore a compatible state across every service affected by the failing change.
2. `std-del-rollback-scope-02` A service unaffected by the failing change **MUST NOT** be included in the rollback.
3. `std-del-rollback-scope-03` Where rollback order affects compatibility, dependent services **MUST** revert in a defined sequence.

### Related Standards

- [Release Strategy](release-strategy.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Verification

### Summary

A rollback is verified against the same automated health checks as any deployment before it counts as successful.

### Standards

1. `std-del-verification-01` A rollback **MUST** be verified against the same automated health checks required of any deployment, supplemented by manual testing where warranted, before it is deemed successful.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Review

### Summary

A rollback triggered by a production failure is reviewed according to its impact, and its recovery time is measured against the objective.

### Standards

1. `std-del-review-01` A rollback triggered by a production failure **SHOULD** receive incident review where its impact meets the service's incident criteria.
2. `std-del-review-02` The time taken to complete a rollback **SHOULD** be measured against the service's defined recovery time objective, so a gap between actual and required recovery speed is identified and addressed.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
