---
last_edited: 2026-09-14
---

# Continuous Delivery & Deployment

## Deployment Pipeline

### Summary

Every environment deploys verified artifacts through version-controlled automated deployment logic, built from a shared pattern where available.

### Standards

1. A planned deployment to an environment beyond local development, including a change to that environment's infrastructure or database schema, **MUST** be performed through an automated pipeline. `std-del-deployment-pipeline-01`
2. A direct change made to restore service **MUST** be reconciled through the automated pipeline before the next planned deployment. `std-del-deployment-pipeline-02`
3. A deployment pipeline **MUST** consume only an artifact that has already passed the build, test, static analysis, and security scanning validation required for it. `std-del-deployment-pipeline-03`
4. Deployment-specific verification **MAY** run within the deployment pipeline. `std-del-deployment-pipeline-04`
5. The same version-controlled deployment logic **MUST** be used across every environment. `std-del-deployment-pipeline-05`
6. An environment-specific deployment variation **MUST** be explicit in the pipeline's version-controlled deployment logic. `std-del-deployment-pipeline-06`
7. A deployment pipeline's own configuration **MUST** be version-controlled and maintained with the same discipline as the source code it deploys. `std-del-deployment-pipeline-07`
8. A deployment pipeline **SHOULD** be built from a standard, shared template or pattern where one is available. `std-del-deployment-pipeline-08`

### Related Standards

- [Continuous Integration](continuous-integration.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Deployment Readiness

### Summary

A verified change stays ready to deploy at any time, moving through the pipeline in small, frequent increments.

### Standards

1. A change that has passed the verification required for its target environment **MUST** remain ready for deployment at any time. `std-del-deployment-readiness-01`
2. A change that has passed the verification required for its target environment **SHOULD NOT** be withheld solely to accumulate into a larger release. `std-del-deployment-readiness-02`
3. Deployment **SHOULD** proceed in small, frequent increments, so the risk and impact of any single deployment stays limited. `std-del-deployment-readiness-03`
4. Deployment to a non-production environment **SHOULD** be triggered automatically once a change passes its required checks, without a separate manual initiation step. `std-del-deployment-readiness-04`

### Related Standards

- [Release Strategy](release-strategy.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Environment Progression

### Summary

A change progresses through a defined, consistent sequence of environments on its way to production.

### Standards

1. A defined, ordered sequence of environments **MUST** govern how a change progresses from initial validation to production. `std-del-environment-progression-01`
2. A change **MUST** progress through each applicable environment in its defined sequence via the deployment pipeline. `std-del-environment-progression-02`
3. A change **MAY** skip an environment where the defined progression criteria permit it. `std-del-environment-progression-03`
4. The criteria a change must satisfy to progress from one environment to the next **MUST** be defined and consistent, so a progression decision does not depend on an individual's discretion. `std-del-environment-progression-04`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Rollback Readiness

### Summary

A production deployment has a tested rollback path or an expedited forward-fix path, and rollback redeploys a previously verified artifact without producing a new build.

### Standards

1. A deployment **MUST NOT** proceed to a production environment unless a viable rollback or forward-fix path exists for the change being deployed. `std-del-rollback-readiness-01`
2. A rollback path **MUST** be established and tested against the production characteristics relevant to the change before production deployment. `std-del-rollback-readiness-02`
3. A forward-fix path **MUST** be supported by an expedited process capable of developing and deploying a fix rapidly once an issue is found after deployment. `std-del-rollback-readiness-03`
4. A rollback **MUST** be executable by redeploying a previously verified artifact. `std-del-rollback-readiness-04`

### Related Standards

- [Rollback Strategy](rollback-strategy.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Build & Artifact Management](build-artifact-management.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Production Approval

### Summary

A production deployment is attributable to an authorised actor or process, separately from the decision to release it.

### Standards

1. A deployment to a production environment **MUST** be attributable to an authorised actor or automated process. `std-del-production-approval-01`
2. Production deployment authorisation **MUST** remain distinct from release authorisation, whether or not the two occur at the same time. `std-del-production-approval-02`

### Related Standards

- [Release Strategy](release-strategy.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Deployment Verification

### Summary

A deployment counts as successful only once it passes automated health checks that exercise real functionality.

### Standards

1. A deployment **MUST** be verified against automated health checks before it is considered complete. `std-del-deployment-verification-01`
2. Where a deployment's health checks fail, the pipeline **MUST** halt further progression of that deployment and raise an alert to the team responsible for it. `std-del-deployment-verification-02`
3. A health check used to verify a deployment **MUST** exercise real functionality of the deployed change. `std-del-deployment-verification-03`
4. Confirming only that a process has started **MUST NOT** be treated as sufficient verification. `std-del-deployment-verification-04`

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)

## Runtime Security Testing

### Summary

A network-reachable service undergoes risk-appropriate, non-disruptive security testing after deployment; findings are triaged, and confirmed critical findings trigger immediate containment.

### Standards

1. A pipeline deploying a service that exposes a network-reachable interface **SHOULD** include non-disruptive dynamic application security testing against a suitable running environment after deployment. `std-del-runtime-security-testing-01`
2. A finding raised by runtime security testing **MUST** be triaged and confirmed before it is treated as genuine, so response effort is not misdirected by a false positive. `std-del-runtime-security-testing-02`
3. A confirmed critical finding **MUST** trigger immediate containment through disablement, rollback, or an equivalent control. `std-del-runtime-security-testing-03`

### Related Standards

- [Application Security Testing](../quality-engineering/application-security-testing.md)
- [Rollback Strategy](rollback-strategy.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Observability](../../principles/reliability-operations/observability.md)

## Deployment & Release

### Summary

A production deployment and its release to users remain separate decisions, with inactive or hidden changes controlled through feature flags or progressive delivery.

### Standards

1. Deploying a change to a production environment **MUST** be treated as distinct from releasing that change to its users. `std-del-deployment-release-01`
2. A deployed change **MAY** remain inactive or hidden from users until release is decided separately. `std-del-deployment-release-02`
3. A change that must remain inactive or hidden from users after deployment **MUST** be controlled through a feature flag or progressive delivery technique. `std-del-deployment-release-03`

### Related Standards

- [Feature Flagging](feature-flagging.md)
- [Progressive Delivery](progressive-delivery.md)
- [Release Strategy](release-strategy.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
