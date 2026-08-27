# Progressive Delivery Strategies

## Summary

> Limit a new change to a small share of production traffic before it reaches everyone.

## Standards

### Technique Selection

Every production deployment uses a progressive delivery technique, chosen by what the change and service actually need.

1. A deployment to production **MUST** use a progressive delivery technique; a change **MUST NOT** be exposed to all of production traffic at once.
2. A blue/green deployment **SHOULD** be chosen over a canary release or rolling deployment where a change would create a materially inconsistent experience for users served by different versions at the same time.
3. A canary release **SHOULD** be chosen over a rolling deployment where deliberate cohort targeting is needed, since a rolling deployment cannot target specific users.
4. A canary release **SHOULD** also be chosen where a rolling deployment is not feasible for the service's architecture.
5. A rolling deployment **SHOULD** be used where neither a blue/green deployment nor a canary release is indicated, since it achieves zero-downtime deployment without the extra infrastructure or traffic-splitting capability the other two require.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Canary Releases

A canary release's traffic stages and promotion criteria are defined upfront, never decided ad hoc mid-rollout.

1. A canary release's traffic percentage at each stage, and the criteria for progressing to the next stage, **MUST** be defined before the rollout begins; they **MUST NOT** be decided ad hoc as the rollout proceeds.
2. A canary release's initial stage **MUST** expose the new version to no more than a small, defined percentage of production traffic, so an undetected regression's impact is bounded before exposure increases.
3. A canary release **MUST** remain at each stage for a defined minimum duration or request volume before progressing further, so there is a genuine opportunity to detect a regression at that stage.
4. A canary release needing to consistently serve the same version to a user **SHOULD** use a stateless mechanism, such as a deterministic hash of a user identifier, rather than session affinity.

#### References

- [Stateless First](../../principles/stateless-first.md)

### Blue/Green Deployments

A blue/green deployment verifies the new version on an idle stack first, and keeps the old stack ready to switch back to.

1. A blue/green deployment's idle stack **MUST** match the active stack's configuration and capacity before it is used as a deployment target.
2. A new version **MUST** be deployed to the idle stack and verified there before any production traffic is directed to it.
3. The previously active stack **MUST** be kept available and unmodified for a defined period after cutover, so traffic can be switched back to it immediately if the newly deployed stack fails.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Rolling Deployments

A rolling deployment's batch size is defined upfront, and each batch must pass a health check before the next begins.

1. A rolling deployment's batch size, whether a fixed count or a percentage of the stack's instances, **MUST** be defined before the rollout begins; it **MUST NOT** be decided ad hoc as the rollout proceeds.
2. Each batch of newly updated instances **MUST** pass a health check before the next batch begins, so an unhealthy update is detected before it spreads further across the stack.
3. A rolling deployment **MUST** keep a defined minimum percentage of the stack's instances healthy and serving production traffic throughout the rollout.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Cross-Version Data Compatibility

A schema or data change stays compatible with the old version for as long as both versions can run side by side.

1. A schema or data change **MUST** remain compatible with the service's old version for the full duration both old and new versions may run concurrently, regardless of which progressive delivery technique is used.
2. A schema or data change **MAY** remain applied after a progressive delivery technique's rollout is aborted, provided it remains compatible with the service's old version.
3. The structure retained to maintain compatibility **MUST NOT** be removed until the progressive delivery technique's rollout has fully completed and its defined grace period has passed; its removal requires its own subsequent deployment.

#### References

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Rollback Strategy](rollback-strategy.md)

### Feature Flag Boundary

A progressive delivery technique never substitutes for a feature flag; an aborted rollout's flag state is checked independently.

1. A progressive delivery technique **MUST NOT** be treated as a substitute for a feature flag; the two **MAY** be used together, such as a canary release paired with an independently controlled flag.
2. An active feature flag within an aborted rollout **MUST NOT** be assumed to have reverted with it; its state **MUST** be assessed independently.

#### References

- [Feature Flagging](feature-flagging.md)
