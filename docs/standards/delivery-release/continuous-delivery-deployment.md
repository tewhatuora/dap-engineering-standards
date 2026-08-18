# Continuous Delivery & Deployment

## Summary

> Make deployment routine, automated, and low-risk, not a rare, high-stakes event.

## Objective

This standard defines requirements for how a change that has already passed its required build, test, static analysis, and security scanning validation is deployed to an environment through the delivery pipeline. It keeps deployment consistent, controlled, and reversible across every environment, so a change reaches production reliably and can be withdrawn quickly if it causes an incident.

## Standards

### Automated, Repeatable Deployment Pipeline

These requirements set out how a deployment to any environment is carried out through an automated, repeatable pipeline.

1. A deployment to an environment beyond local development, including a change to that environment's infrastructure or database schema, must be performed only through an automated pipeline; it must not be performed as a manual or ad hoc action.
2. A deployment pipeline must consume only an artifact that has already passed the build, test, static analysis, and security scanning validation required for it; the deployment pipeline itself must not be relied upon to perform that validation.
3. The same deployment pipeline must be used to deploy a change into every environment; an environment must not be reachable through a separate or divergent deployment process.
4. A deployment pipeline's own configuration must be version-controlled and maintained with the same discipline as the source code it deploys.
5. A deployment pipeline should be built from a standard, shared template or pattern where one is available.

#### References

- [Automation First](../../principles/automation-first.md)
- [Continuous Integration](continuous-integration.md)
- [Everything as Code](../../principles/everything-as-code.md)
- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
- [Infrastructure as Code](../platform-infrastructure/infrastructure-as-code.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)

### Runtime Security Testing & Response

These requirements set out how a service exposing a network-reachable interface is tested after deployment, and how a finding from that testing is triaged and mitigated.

1. A pipeline deploying a service that exposes a network-reachable interface, such as an API endpoint, must include both dynamic application security testing (DAST) and fuzz testing against that service's running production instance after deployment.
2. Where a finding is raised by runtime security testing, it must be triaged and confirmed before it is treated as genuine, so response effort is not misdirected by a false positive.
3. Where a confirmed finding is critical or high-severity, the affected capability must be disabled or the affected deployment rolled back immediately, rather than left exposed until a code fix is developed and deployed through the normal pipeline.

#### References

- [Application Security Testing](../quality-engineering/application-security-testing.md)
- [Security by Design](../../principles/security-by-design.md)
- [Rollback Strategy](rollback-strategy.md)

### Deployment Readiness

These requirements describe how a change that has passed its required verification stays ready for deployment at any time, moving through the pipeline in small, frequent increments.

1. A change that has passed the verification required for its target environment must remain ready for deployment at any time; it must not be withheld to accumulate into a larger, scheduled release, except where the repository's branching model requires a defined stabilisation period before release.
2. Deployment should proceed in small, frequent increments, so the risk and impact of any single deployment stays limited.
3. Deployment to a non-production environment should be triggered automatically once a change passes its required checks, without a separate manual initiation step.

#### References

- [Release Strategy](release-strategy.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)

### Environment Progression

These requirements address how a change moves through a defined sequence of environments on its way to production.

1. A defined, ordered sequence of environments must govern how a change progresses from initial validation to production.
2. A change must progress through each environment in that sequence via the deployment pipeline; an environment must not be skipped except through a defined, approved exception process, such as an emergency fix.
3. The criteria a change must satisfy to progress from one environment to the next must be defined and consistent, so a progression decision does not depend on an individual's discretion.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Production Deployment Approval

These requirements set out how a deployment to a production environment is authorised before it proceeds.

1. A deployment to a production environment must be approved through the organisation's formal change control process before it proceeds.
2. This approval is distinct from the product owner's decision to release the change to its intended users, whether or not the two occur at the same time.

#### References

- [Release Strategy](release-strategy.md)

### Deployment Verification

These requirements guide how a deployment is verified against automated health checks before it is treated as successful.

1. A deployment must be verified against automated health checks before it is considered complete.
2. Where a deployment's health checks fail, the pipeline must halt further progression of that deployment and raise an alert to the team responsible for it.
3. A health check used to verify a deployment must exercise real functionality of the deployed change; confirming only that a process has started must not be treated as sufficient verification.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Decoupling Deployment from Release

These requirements set out how a deployment to production is kept separate from releasing that change to its users.

1. Deploying a change to a production environment must be treated as distinct from releasing that change to its users; a deployed change may remain inactive or hidden from users until release is decided separately.
2. Where a change must remain inactive or hidden from users after deployment, it must be controlled through a feature flag or progressive delivery technique, not by delaying the deployment itself.

#### References

- [Release Strategy](release-strategy.md)
- [Feature Flagging](feature-flagging.md)
- [Progressive Delivery Strategies](progressive-delivery-strategies.md)

### Rollback Readiness

These requirements describe how a deployment's rollback or forward-fix path is established before that deployment reaches production, and how a rollback is executed once one is needed.

1. A deployment must not proceed to a production environment unless a viable rollback or forward-fix path exists for the change being deployed.
2. A rollback path must be established and tested in a non-production environment representative of production, before deploying to a production environment.
3. A forward-fix path must be supported by an expedited process capable of developing and deploying a fix rapidly once an issue is found after deployment.
4. A rollback must be executable by redeploying a previously verified artifact; it must not depend on producing a new build from source.

#### References

- [Rollback Strategy](rollback-strategy.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Build & Artifact Management](build-artifact-management.md)
