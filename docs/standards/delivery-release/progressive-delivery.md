---
last_edited: 2026-09-14
---

# Progressive Delivery

## Technique Selection

### Summary

A production deployment uses progressive exposure where the change's risk and the platform's capabilities warrant it.

### Standards

1. A deployment to production **SHOULD** use a progressive delivery technique where the platform supports one appropriate to the change. `std-del-technique-selection-01`
2. A change **SHOULD NOT** be exposed to all production traffic at once where its exposure can be increased progressively. `std-del-technique-selection-02`
3. A blue/green deployment **SHOULD** be chosen over a canary release or rolling deployment where a change would create a materially inconsistent experience for users served by different versions at the same time. `std-del-technique-selection-03`
4. A canary release **SHOULD** be chosen over a rolling deployment where deliberate cohort targeting is needed, since a rolling deployment cannot target specific users. `std-del-technique-selection-04`
5. A canary release **SHOULD** also be chosen where a rolling deployment is not feasible for the service's architecture. `std-del-technique-selection-05`
6. A rolling deployment **SHOULD** be used where neither a blue/green deployment nor a canary release is indicated, since it achieves zero-downtime deployment without the extra infrastructure or traffic-splitting capability the other two require. `std-del-technique-selection-06`

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Canary Releases

### Summary

A canary release defines its traffic stages, promotion criteria, observation period, and stateless user allocation before rollout.

### Standards

1. A canary release's traffic percentage at each stage, and the criteria for progressing to the next stage, **MUST** be defined before the rollout begins. `std-del-canary-releases-01`
2. A canary release's initial stage **MUST** use a defined traffic percentage that bounds the impact of an undetected regression. `std-del-canary-releases-02`
3. A canary release **MUST** remain at each stage for a defined minimum duration or request volume before progressing further, so there is a genuine opportunity to detect a regression at that stage. `std-del-canary-releases-03`
4. A canary release needing to consistently serve the same version to a user **SHOULD** use a stateless mechanism, such as a deterministic hash of a user identifier. `std-del-canary-releases-04`

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Blue/Green Deployments

### Summary

A blue/green deployment verifies the new version on an idle stack first, and keeps the old stack ready to switch back to.

### Standards

1. A blue/green deployment's idle stack **MUST** meet the same functional configuration and capacity requirements as the active stack before cutover. `std-del-blue-green-deployments-01`
2. A new version **MUST** be deployed to the idle stack and verified there before any production traffic is directed to it. `std-del-blue-green-deployments-02`
3. The previously active stack **MUST** be kept available and unmodified for a defined period after cutover, so traffic can be switched back to it immediately if the newly deployed stack fails. `std-del-blue-green-deployments-03`

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rolling Deployments

### Summary

A rolling deployment's batch size is defined upfront, and each batch must pass a health check before the next begins.

### Standards

1. A rolling deployment's batch size, whether a fixed count or a percentage of the stack's instances, **MUST** be defined before the rollout begins. `std-del-rolling-deployments-01`
2. Each batch of newly updated instances **MUST** pass a health check before the next batch begins, so an unhealthy update is detected before it spreads further across the stack. `std-del-rolling-deployments-02`
3. A rolling deployment **MUST** keep a defined minimum percentage of the stack's instances healthy and serving production traffic throughout the rollout. `std-del-rolling-deployments-03`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Observability](../../principles/reliability-operations/observability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Cross-Version Data Compatibility

### Summary

A schema or data change stays compatible with the old version for as long as both versions can run side by side.

### Standards

1. A schema or data change **MUST** remain compatible with the service's old version for the full duration both old and new versions may run concurrently, regardless of which progressive delivery technique is used. `std-del-cross-version-data-compatibility-01`
2. A schema or data change **MAY** remain applied after a progressive delivery technique's rollout is aborted, provided it remains compatible with the service's old version. `std-del-cross-version-data-compatibility-02`
3. A schema or data structure retained for cross-version compatibility **MUST NOT** be removed until the progressive delivery technique's rollout has fully completed and its defined grace period has passed; its removal requires its own subsequent deployment. `std-del-cross-version-data-compatibility-03`

### Related Standards

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Rollback Strategy](rollback-strategy.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Feature Flags

### Summary

A progressive delivery technique and a feature flag remain independent controls, including when a rollout is aborted.

### Standards

1. A progressive delivery technique **MUST NOT** replace a feature flag where independent feature activation or disablement is required. `std-del-feature-flags-01`
2. A progressive delivery technique and a feature flag **MAY** be used together, such as a canary release paired with an independently controlled flag. `std-del-feature-flags-02`
3. An active feature flag within an aborted rollout **MUST NOT** be assumed to have reverted with it. `std-del-feature-flags-03`
4. An active feature flag's state **MUST** be assessed independently. `std-del-feature-flags-04`

### Related Standards

- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
