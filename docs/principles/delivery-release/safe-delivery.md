---
last_edited: 2026-09-11
---

# Safe Delivery

## Continuous Delivery Flow

### Summary

Verified changes remain deployable and move towards deployment and release in small increments as soon as delivery constraints permit.

### Reasoning

Small, frequent changes limit how much behaviour changes in one deployment and make its outcome easier to assess. When a problem occurs, fewer combined changes need to be examined, and the affected change can be corrected without separating it from a larger batch.

Holding verified changes without a delivery constraint increases batch size and delays feedback from their use. Delivery, business, regulatory, or operational needs can still require a change to wait, but making those constraints explicit preserves continuous flow as the default rather than allowing delay to become routine.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Controlled Environment Progression

### Summary

A change reaches production through a defined sequence of environments and consistent progression criteria.

### Reasoning

A defined progression path makes clear which environments and validation a change must pass before production. Each stage adds evidence about the change under known conditions and establishes what must be true before it can advance.

Consistent criteria prevent equivalent changes from advancing under different conditions because of individual discretion. Allowing a stage to be skipped only when defined criteria show that it adds no required validation keeps the path efficient without making progression ad hoc.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)

## Deployment Risk Reduction

### Summary

Deployments have prepared rollback or forward-fix paths, while progressive exposure and rapid disablement reduce risk.

### Reasoning

A deployment can introduce a failure even after passing every earlier check because production behaviour includes conditions that pre-production validation may not expose. A prepared rollback or forward-fix path reduces recovery time and avoids designing the response while the service is already impaired.

Progressive exposure limits the number of users and systems affected while evidence is gathered from production. Where functionality can be controlled independently, rapid disablement provides another way to stop the impact without waiting for a new deployment.

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

Making a deployed change available to users is a deliberate decision separate from deployment.

### Reasoning

Deployment places a change in an environment, while release determines when its intended users can access it. Treating these as separate decisions allows the deployed behaviour to be verified before exposure and prevents pipeline completion from automatically becoming a user-facing release.

The separation also allows exposure to be controlled without rebuilding or redeploying the change. Recording release independently preserves when user access changed, even when deployment and release happen at the same time.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)