# Progressive Delivery

A production deployment proceeds in stages that verify the new version before full rollout.

## Technique Selection

### Summary

A production deployment uses progressive exposure where the change's risk and the platform's capabilities warrant it.

### Standards

1. `std-del-technique-selection-01` A deployment to production **SHOULD** use a progressive delivery technique where the platform supports one appropriate to the change.
2. `std-del-technique-selection-02` A change **SHOULD NOT** be exposed to all production traffic at once where its exposure can be increased progressively.
3. `std-del-technique-selection-03` A blue/green deployment **SHOULD** be chosen over a canary release or rolling deployment where a change would create a materially inconsistent experience for users served by different versions at the same time.
4. `std-del-technique-selection-04` A canary release **SHOULD** be chosen over a rolling deployment where deliberate cohort targeting is needed, since a rolling deployment cannot target specific users.
5. `std-del-technique-selection-05` A canary release **SHOULD** also be chosen where a rolling deployment is not feasible for the service's architecture.
6. `std-del-technique-selection-06` A rolling deployment **SHOULD** be used where neither a blue/green deployment nor a canary release is indicated, since it achieves zero-downtime deployment without the extra infrastructure or traffic-splitting capability the other two require.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Canary Releases

### Summary

A canary release defines its traffic stages, promotion criteria, observation period, and stateless user allocation before rollout.

### Standards

1. `std-del-canary-releases-01` A canary release's traffic percentage at each stage, and the criteria for progressing to the next stage, **MUST** be defined before the rollout begins.
2. `std-del-canary-releases-02` A canary release's traffic percentage and progression criteria **MUST NOT** be decided ad hoc as the rollout proceeds.
3. `std-del-canary-releases-03` A canary release's initial stage **MUST** use a defined traffic percentage that bounds the impact of an undetected regression.
4. `std-del-canary-releases-04` A canary release **MUST** remain at each stage for a defined minimum duration or request volume before progressing further, so there is a genuine opportunity to detect a regression at that stage.
5. `std-del-canary-releases-05` A canary release needing to consistently serve the same version to a user **SHOULD** use a stateless mechanism, such as a deterministic hash of a user identifier.

### Implements These Principles

- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Blue/Green Deployments

### Summary

A blue/green deployment verifies the new version on an idle stack first, and keeps the old stack ready to switch back to.

### Standards

1. `std-del-blue-green-deployments-01` A blue/green deployment's idle stack **MUST** meet the same functional configuration and capacity requirements as the active stack before cutover.
2. `std-del-blue-green-deployments-02` A new version **MUST** be deployed to the idle stack and verified there before any production traffic is directed to it.
3. `std-del-blue-green-deployments-03` The previously active stack **MUST** be kept available and unmodified for a defined period after cutover, so traffic can be switched back to it immediately if the newly deployed stack fails.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rolling Deployments

### Summary

A rolling deployment's batch size is defined upfront, and each batch must pass a health check before the next begins.

### Standards

1. `std-del-rolling-deployments-01` A rolling deployment's batch size, whether a fixed count or a percentage of the stack's instances, **MUST** be defined before the rollout begins.
2. `std-del-rolling-deployments-02` A rolling deployment's batch size **MUST NOT** be decided ad hoc as the rollout proceeds.
3. `std-del-rolling-deployments-03` Each batch of newly updated instances **MUST** pass a health check before the next batch begins, so an unhealthy update is detected before it spreads further across the stack.
4. `std-del-rolling-deployments-04` A rolling deployment **MUST** keep a defined minimum percentage of the stack's instances healthy and serving production traffic throughout the rollout.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Observability](../../principles/reliability-operations/observability.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Cross-Version Data Compatibility

### Summary

A schema or data change stays compatible with the old version for as long as both versions can run side by side.

### Standards

1. `std-del-cross-version-data-compatibility-01` A schema or data change **MUST** remain compatible with the service's old version for the full duration both old and new versions may run concurrently, regardless of which progressive delivery technique is used.
2. `std-del-cross-version-data-compatibility-02` A schema or data change **MAY** remain applied after a progressive delivery technique's rollout is aborted, provided it remains compatible with the service's old version.
3. `std-del-cross-version-data-compatibility-03` The structure retained to maintain compatibility **MUST NOT** be removed until the progressive delivery technique's rollout has fully completed and its defined grace period has passed; its removal requires its own subsequent deployment.

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

1. `std-del-feature-flags-01` A progressive delivery technique **MUST NOT** replace a feature flag where independent feature activation or disablement is required.
2. `std-del-feature-flags-02` A progressive delivery technique and a feature flag **MAY** be used together, such as a canary release paired with an independently controlled flag.
3. `std-del-feature-flags-03` An active feature flag within an aborted rollout **MUST NOT** be assumed to have reverted with it.
4. `std-del-feature-flags-04` An active feature flag's state **MUST** be assessed independently.

### Related Standards

- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
