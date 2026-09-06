# Safe Delivery

## Deployment Risk Reduction

### Summary

Deployments have viable rollback or forward-fix paths, with risk reduced through progressive exposure and rapid disablement.

### Reasoning

A deployment can introduce a failure despite prior validation. A prepared rollback or forward-fix path reduces recovery time and avoids designing a response under incident pressure.

Progressive exposure bounds the impact of an undetected failure while evidence is gathered from production. Independently controlled functionality can be disabled without waiting for another deployment.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)

## Independent Release Decision

### Summary

Making a deployed change available to users is a deliberate decision independent of its deployment.

### Reasoning

Deployment establishes that a change is present in an environment; release determines when its intended users can access it. Treating these as separate decisions allows a change to be deployed and verified before exposure without making pipeline completion itself a release decision.

Recording the release separately preserves when user exposure changed even where deployment and release occur at the same time.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)