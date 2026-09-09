---
last_edited: 2026-09-09
---

# Release Strategy

## Release & Deployment

### Summary

A release is its own deliberate, recorded decision, made independently of the deployment it depends on.

### Standards

1. `std-del-release-deployment-01` A release **MUST** be treated as the deliberate decision to make a deployed change available to its intended users.
2. `std-del-release-deployment-02` A deployment **MUST NOT** make a deployed change available to its intended users unless a release decision authorises that availability.
3. `std-del-release-deployment-03` The decision to release a deployed change **MUST** be made independently of the decision to deploy it, whether or not the two occur at the same time.
4. `std-del-release-deployment-04` A release **MUST** be recorded as an explicit act in its own right, separate from the record of any deployment.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Release Cadence

### Summary

A release normally follows its deployment immediately, with timing separated where a release constraint requires it.

### Standards

1. `std-del-release-cadence-01` A release **SHOULD** immediately follow its underlying deployment by default.
2. `std-del-release-cadence-02` A release toggle **SHOULD** be used where release timing must diverge from deployment timing.
3. `std-del-release-cadence-03` A scheduled or batched release **MAY** be used where a delivery, business, regulatory, or operational constraint requires it.

### Related Standards

- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Release Communication

### Summary

A material release has audience-appropriate notes published through an authoritative channel, with direct stakeholder communication where required.

### Standards

1. `std-del-release-communication-01` A user-facing or operationally material release **MUST** have release notes describing the change in language appropriate for its intended audience.
2. `std-del-release-communication-02` Release notes **SHOULD** be communicated directly to stakeholders where publication alone does not provide adequate notice.
3. `std-del-release-communication-03` A release-bearing repository **SHOULD** maintain its release notes in a version-controlled changelog, such as a `CHANGELOG.md` file.
4. `std-del-release-communication-04` A changelog entry **SHOULD** be categorised by type of change, such as added, changed, fixed, or security, following a convention such as [Keep a Changelog](https://keepachangelog.com/).
5. `std-del-release-communication-05` Where release notes are generated from commit metadata, a user-facing change **MUST** use the adopted user-facing commit classification.
6. `std-del-release-communication-06` Where a change is hidden behind a feature flag, its release notes **MUST** be published when the capability is released to its intended users.
7. `std-del-release-communication-07` Release notes **MAY** also be published through additional channels.
8. `std-del-release-communication-08` Where a repository changelog is authoritative, release notes published elsewhere **MUST** remain consistent with it.

### Related Standards

- [Version Control](../code-implementation/version-control.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Coordinated Releases

### Summary

A release is independently releasable by default; depending on another service's release requires deliberate coordination.

### Standards

1. `std-del-coordinated-releases-01` A release **SHOULD** be independently releasable.
2. `std-del-coordinated-releases-02` A dependency on another service's release **SHOULD** be treated as an exception requiring deliberate coordination.
3. `std-del-coordinated-releases-03` A breaking change **SHOULD** be avoided, such as by versioning the API or schema instead, so the dependent services require no coordination at all.
4. `std-del-coordinated-releases-04` A release toggle **SHOULD** be used to sequence a coordinated release so each dependent service's exposure can be verified and enabled independently.
5. `std-del-coordinated-releases-05` Where a release toggle is not practical, the affected services **MUST** use a defined release sequence that preserves compatibility.
6. `std-del-coordinated-releases-06` A coordinated release **MUST** have a defined fallback if one of its dependent services fails to release as planned, so the remaining services are not left in an incompatible state.

### Related Standards

- [API Design](../architecture-system-design/api-design.md)
- [Schema Design & Evolution](../architecture-system-design/schema-design-evolution.md)
- [Rollback Strategy](rollback-strategy.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Domain-Aligned Services](../../principles/architecture-platform/domain-aligned-services.md)
- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Release Approval

### Summary

A release is attributable to an authorised, accountable role, with applicable prerequisites satisfied and its decision retained.

### Standards

1. `std-del-release-approval-01` The decision to release a deployed change to its intended users **MUST** be attributable to an authorised, accountable role.
2. `std-del-release-approval-02` An emergency release made to address an active incident **MAY** bypass the usual release approval process.
3. `std-del-release-approval-03` An emergency release made to address an active incident **SHOULD** receive post-implementation review after the incident is resolved.
4. `std-del-release-approval-04` Every applicable prerequisite, such as an available rollback path or prepared release notes, **MUST** be satisfied before release.
5. `std-del-release-approval-05` A release's approval, including who granted it and when, **MUST** be retained as a record, so the release can be audited after the fact.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Rollback Strategy](rollback-strategy.md)
- [Feature Flagging](feature-flagging.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
