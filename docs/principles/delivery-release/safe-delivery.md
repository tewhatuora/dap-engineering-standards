---
last_edited: 2026-10-21
---

# Safe Delivery

## Continuous Delivery Flow

### Summary

Verified changes stay ready to deploy and move towards deployment and release in small increments whenever delivery constraints allow.

### Reasoning

Small, frequent changes limit the scope of each deployment. Engineers can more easily spot changes in system behaviour and identify what caused them. When a problem occurs, there are fewer changes to investigate, so finding and fixing the cause takes less effort.

Where rollback is appropriate, deploying changes independently lets engineers reverse a failing change without also reverting unrelated changes from the same deployment.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)

## Controlled Environment Progression

### Summary

A change follows a defined sequence of environments to production, meeting consistent criteria before moving to the next environment.

### Reasoning

A defined path makes clear which environments a change passes through and which checks it needs to pass before reaching production. Each stage tests the change under known conditions to establish whether it is ready to move on.

Applying the same criteria consistently makes the path to production repeatable and prevents ad hoc decisions from bypassing required checks.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)

## Deployment Risk Reduction

### Summary

Prepared rollback or forward-fix paths, gradual exposure, and the ability to disable functionality quickly reduce deployment risk.

### Reasoning

Preparing a rollback or forward-fix path lets engineers begin recovery immediately when a deployment fails, reducing how long the failure lasts and the harm it causes.

Exposing a change gradually limits the number of users and systems affected while engineers assess its behaviour in production. Where functionality can be controlled independently, disabling it quickly can limit the impact without another deployment.

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

Deployment places a change in an environment, while release makes it available to its intended users. Keeping them separate lets engineers verify the deployed behaviour before users encounter it. Completing a deployment does not automatically make the change available to users.

A separate release decision lets engineers make a deployed change available to users or withdraw it without rebuilding or redeploying it.

### Implemented By These Standards

- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)