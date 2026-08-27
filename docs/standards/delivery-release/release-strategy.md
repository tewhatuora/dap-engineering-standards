# Release Strategy

## Summary

> A release is a deliberate decision, not a side effect of a pipeline finishing.

## Standards

### Release Versus Deployment

> A release is its own deliberate, recorded decision, made independently of the deployment it depends on.

1. A release **MUST** be treated as the deliberate decision to make a deployed change available to its intended users; a deployment **MUST NOT** itself be treated as that decision.
2. The decision to release a deployed change **MUST** be made independently of the decision to deploy it, whether or not the two occur at the same time.
3. A release **MUST** be recorded as an explicit act in its own right, separate from the record of any deployment.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Feature Flagging](feature-flagging.md)

### Release Cadence

> A release follows its deployment immediately by default, unless a release toggle or the branching model says otherwise.

1. A release **SHOULD** immediately follow its underlying deployment by default; a release toggle **SHOULD** be used where release timing must diverge from deployment timing.
2. A scheduled, batched release **MUST** be supported only where the branching model defines a stabilisation period.

#### References

- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Feature Flagging](feature-flagging.md)

### Release Notes & Communication

> A release has notes communicated directly to stakeholders, maintained as an authoritative, version-controlled changelog.

1. A release **MUST** have release notes describing the change it introduces, in language appropriate for its intended audience.
2. Release notes **MUST** be communicated directly to stakeholders, in addition to being published.
3. A release-bearing repository **SHOULD** maintain its release notes in a version-controlled changelog, such as a `CHANGELOG.md` file.
4. A changelog entry **SHOULD** be categorised by type of change, such as added, changed, fixed, or security, following a convention such as [Keep a Changelog](https://keepachangelog.com/).
5. Where a change carries no feature flag, its merge commit **MUST** use the convention for a user-facing change, so the pipeline generates the changelog entry from that same commit.
6. Where a change is hidden behind a feature flag, its changelog entry is instead generated only once that flag is retired and the capability is confirmed stable, not when the flag is first enabled for users.
7. Release notes **MAY** also be published elsewhere; where they are, the changelog remains the authoritative source, and any release notes published elsewhere **MUST** be kept consistent with it.

#### References

- [Version Control](../code-implementation/version-control.md)
- [Feature Flagging](feature-flagging.md)

### Release Approval

> A release is authorised by an accountable product owner who confirms every prerequisite is actually satisfied.

1. The decision to release a deployed change to its intended users **MUST** be authorised by an accountable product owner, distinct from the change control approval required for its deployment.
2. An emergency release made to address an active incident **MAY** be authorised without the standard approval, but **MUST** be reviewed retrospectively as soon as practicable.
3. The accountable owner **MUST** confirm every applicable prerequisite, such as an available rollback path or prepared release notes, is actually satisfied, not merely scheduled or in progress.
4. A release's approval, including who granted it and when, **MUST** be retained as a record, so the release can be audited after the fact.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Rollback Strategy](rollback-strategy.md)
- [Feature Flagging](feature-flagging.md)

### Cross-Service Release Coordination

> A release is independently releasable by default; depending on another service's release requires deliberate coordination.

1. A release **MUST** be independently releasable by default; a dependency on another service's release **MUST** be treated as an exception requiring deliberate coordination.
2. A breaking change **SHOULD** be avoided, such as by versioning the API or schema instead, so the dependent services require no coordination at all.
3. A release toggle **SHOULD** be used to sequence a coordinated release, so each dependent service's exposure can be verified and enabled independently, rather than requiring simultaneous deployment.
4. Where a release toggle is not practical, the affected services' release timing **MUST** instead be planned and agreed between their owning teams before either proceeds.
5. A coordinated release **MUST** have a defined fallback if one of its dependent services fails to release as planned, so the remaining services are not left in an incompatible state.

#### References

- [API Design & Standards](../architecture-system-design/api-design-standards.md)
- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Rollback Strategy](rollback-strategy.md)
- [Feature Flagging](feature-flagging.md)
