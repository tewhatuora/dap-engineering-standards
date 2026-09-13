---
last_edited: 2026-09-14
---

# Safe Delivery

## Continuous Delivery Flow

### Summary

Verified changes remain deployable and advance towards deployment and release in small increments whenever delivery constraints permit.

### Reasoning

Small, frequent changes limit the scope of each deployment and make changes in system behaviour easier to detect and attribute. When a problem occurs, fewer changes need to be investigated, reducing the effort needed to identify and correct the cause.

Where rollback is appropriate, deploying changes independently allows the failing change to be reversed without also reverting unrelated changes from the same deployment.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Controlled Environment Progression

### Summary

A change reaches production through a defined sequence of environments and advances between them according to consistent progression criteria.

### Reasoning

A defined progression path identifies the environments a change must pass through and the validation it must satisfy before reaching production. Each stage evaluates the change under known conditions and establishes whether it is ready to advance.

Applying progression criteria consistently makes the path to production repeatable and prevents required validation from being bypassed through ad hoc decisions.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)

## Deployment Risk Reduction

### Summary

Prepared rollback or forward-fix paths, progressive exposure, and rapid disablement reduce deployment risk.

### Reasoning

A prepared rollback or forward-fix path reduces the duration and impact of a failed deployment by allowing recovery to begin immediately.

Progressive exposure limits the number of users and systems affected while the change's production behaviour is assessed. Where functionality can be controlled independently, rapid disablement can limit impact without a new deployment.

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

Making a deployed change available to users is a deliberate release decision separate from deployment.

### Reasoning

Deployment places a change in an environment, while release makes it available to its intended users. Separating these concerns allows the deployed behaviour to be verified before exposure and prevents completion of a deployment from automatically exposing the change to users.

Separating release from deployment allows a deployed change to be made available to or withdrawn from users without rebuilding or redeploying it.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)