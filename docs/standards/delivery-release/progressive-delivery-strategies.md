# Progressive Delivery Strategies

## Objective

This standard defines requirements for how a release is deployed to production through a progressive delivery technique that limits its initial exposure to a subset of production traffic before reaching every user. It keeps a release's impact observable and reversible while exposure is still limited, so a defect or regression is caught and contained before it affects the full user base.

## Standards

### Proportionate Technique Selection

These requirements set out how a progressive delivery technique is always used for a production deployment, and how the specific technique is selected.

1. A deployment to production must use a progressive delivery technique; a change must not be deployed to the full user base all at once.
2. A blue/green deployment should be chosen over a canary release or rolling deployment where a change would create a materially inconsistent experience for users served by different versions at the same time.
3. A canary release should be chosen over a rolling deployment where deliberate cohort targeting is needed, since a rolling deployment cannot target specific users.
4. A canary release should also be chosen where a rolling deployment is not feasible for the service's architecture.
5. A rolling deployment should be used where neither a blue/green deployment nor a canary release is indicated, since it achieves zero-downtime deployment without the extra infrastructure or traffic-splitting capability the other two require.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)
- [Sustainability by Design](../../principles/sustainability-by-design.md)

### Canary Releases

These requirements describe how a canary release's traffic stages and promotion criteria are defined, so its use remains consistent and auditable.

1. A canary release's traffic percentage at each stage, and the criteria for progressing to the next stage, must be defined before the release begins; they must not be decided ad hoc as the rollout proceeds.
2. A canary release's initial stage must expose the new version to no more than a small, defined percentage of production traffic, so an undetected regression's impact is bounded before exposure increases.
3. A canary release must remain at each stage for a defined minimum duration or request volume before progressing further, so there is a genuine opportunity to detect a regression at that stage.
4. A canary release needing to consistently serve the same version to a user should use a stateless mechanism, such as a deterministic hash of a user identifier, rather than session affinity.

#### References

- [Stateless First](../../principles/stateless-first.md)

### Blue/Green Deployments

These requirements set out how a blue/green deployment's idle stack and cutover are governed, so a new version is verified before it receives production traffic and remains reversible after cutover.

1. A blue/green deployment's idle stack must match the active stack's configuration and capacity before it is used as a deployment target.
2. A new version must be deployed to the idle stack and verified there before any production traffic is directed to it.
3. The previously active stack must be kept available and unmodified for a defined period after cutover, so traffic can be switched back to it immediately if the newly deployed stack fails.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

### Rolling Deployments

These requirements address how a rolling deployment's batches and capacity are governed, so a new version is exposed gradually without degrading the service it replaces.

1. A rolling deployment's batch size, whether a fixed count or a percentage of the stack's instances, must be defined before the rollout begins; it must not be decided ad hoc as the rollout proceeds.
2. Each batch of newly updated instances must pass a health check before the next batch begins, so an unhealthy update is detected before it spreads further across the stack.
3. A rolling deployment must keep a defined minimum percentage of the stack's instances healthy and serving production traffic throughout the rollout.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Cross-Version Data Compatibility

These requirements cover how a schema or data change's compatibility with the previous version is maintained.

1. A schema or data change must remain compatible with the previous version for the full duration both versions may run concurrently, regardless of which progressive delivery technique is used.
2. A schema or data change may remain applied after a progressive delivery technique's rollout is aborted, provided it remains compatible with the previous version.
3. The old structure introduced to maintain compatibility must not be removed until the progressive delivery technique's rollout has fully completed and its defined grace period has passed.

#### References

- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Rollback Strategy](rollback-strategy.md)

### Automated Rollout Analysis

These requirements guide how a progressive delivery technique's rollout is evaluated automatically against defined metrics, and how it is advanced or reversed based on that evaluation.

1. A progressive delivery technique's rollout must be evaluated automatically against a defined success metric and threshold.
2. Where a rollout's evaluation shows a defined threshold has been breached, the rollout must be halted and traffic reverted to the previously deployed version automatically, without waiting for manual intervention.
3. A rollout that completes its evaluation without breaching a threshold should be promoted automatically to its next stage or, where no further stage remains, to full traffic.

#### References

- [Automation First](../../principles/automation-first.md)
- [Observability by Default](../../principles/observability-by-default.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Feature Flag Boundary

These requirements describe how a progressive delivery technique's control of traffic exposure relates to a feature flag's control of a capability's activation.

1. A progressive delivery technique must not be treated as a substitute for a feature flag; the two may be used together, such as a canary release paired with an independently controlled flag.
2. An active feature flag within an aborted rollout must not be assumed to have reverted with it; its state must be assessed independently.

#### References

- [Feature Flagging](feature-flagging.md)
