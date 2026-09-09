---
last_edited: 2026-09-09
---

# Safe Delivery

## Continuous Delivery Flow

### Summary

Verified changes remain deployable and move to deployment and release in small increments as soon as applicable delivery constraints permit.

### Reasoning

Small, frequent changes limit the scope and impact of each deployment and make its outcome easier to assess. Holding verified changes without a delivery constraint increases batch size and delays feedback from their use.

Delivery, business, regulatory, or operational constraints can require deployment or release to wait. Treating these as explicit constraints preserves continuous flow as the default while allowing justified timing decisions.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Controlled Environment Progression

### Summary

A change reaches production through a defined sequence of environments with consistent progression criteria.

### Reasoning

A defined progression path makes the validation expected before production explicit. Consistent criteria prevent equivalent changes from advancing under different conditions because of individual discretion.

Allowing an environment to be skipped only under defined criteria keeps the path proportionate without making progression ad hoc.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)

## Deployment Risk Reduction

### Summary

Deployments have viable rollback or forward-fix paths, with risk reduced through progressive exposure and rapid disablement.

### Reasoning

A deployment can introduce a failure despite prior validation. A prepared rollback or forward-fix path reduces recovery time and avoids designing a response under incident pressure.

Progressive exposure bounds the impact of an undetected failure while evidence is gathered from production. Independently controlled functionality can be disabled without waiting for another deployment.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
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