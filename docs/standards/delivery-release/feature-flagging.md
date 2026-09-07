# Feature Flagging

Feature flags decouple deploying code from releasing it.

## Flag Purpose & Scope

### Summary

A flag has a defined purpose and cohesive scope applied consistently across every domain or service for its lifetime.

### Standards

1. `std-del-flag-purpose-scope-01` A flag **SHOULD** address a defined operational, delivery, or risk-management need.
2. `std-del-flag-purpose-scope-02` A flag **MUST NOT** be introduced as habit or as a substitute for sound design, adequate testing, or disciplined release control.
3. `std-del-flag-purpose-scope-03` A capability spanning multiple domains or services **SHOULD** be controlled by a single flag evaluated consistently across all of them.
4. `std-del-flag-purpose-scope-04` A flag **SHOULD** control one cohesive capability.
5. `std-del-flag-purpose-scope-05` A flag **MUST NOT** be reused to also gate a different capability introduced later.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Use Boundaries

### Summary

A flag does not defer required testing or defect remediation, does not replace access control or environment configuration, and remains independently testable in each state.

### Standards

1. `std-del-use-boundaries-01` A flag **MUST NOT** be used to defer testing required for the capability it controls, avoid remediating a known defect, conceal incomplete work indefinitely, or mask unstable code.
2. `std-del-use-boundaries-02` A release flag **SHOULD NOT** be retained as the mechanism that permanently differentiates a capability by user or cohort.
3. `std-del-use-boundaries-03` A flag **SHOULD NOT** replace configuration for a permanent difference in behaviour between environments.
4. `std-del-use-boundaries-04` A flag's evaluation **MUST** be overridable with a controlled value during automated testing, so both states of the capability it controls can be verified without depending on the flag management platform.

### Related Standards

- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)

## Flag Declaration

### Summary

A flag has a unique name, purpose, owner, lifecycle expectation, discoverable declaration, and management mechanism appropriate to how dynamically it changes.

### Standards

1. `std-del-flag-declaration-01` A flag **MUST** be declared, with a unique name, a defined purpose, and an accountable owning team, before it is used to control any capability.
2. `std-del-flag-declaration-02` A flag's expected removal or review date **SHOULD** be recorded before it is used to control a capability.
3. `std-del-flag-declaration-03` A flag's purpose **MAY** be release control, experimentation, operational control, or presentation of an already-authorised capability to a defined cohort.
4. `std-del-flag-declaration-04` A flag's declaration **MUST** remain discoverable and traceable to the service that uses it.
5. `std-del-flag-declaration-05` A flag requiring runtime changes across multiple instances **SHOULD** use a centralised flag management mechanism.
6. `std-del-flag-declaration-06` A static flag **MAY** be managed through version-controlled application configuration where runtime changes are not required.
7. `std-del-flag-declaration-07` A service **SHOULD** access the flag management platform through an internal abstraction, so switching platforms does not require changing every call site.
8. `std-del-flag-declaration-08` Where changelog automation uses commit classification, the commit introducing code behind an inactive release flag **SHOULD** be classified as internal.

### Related Standards

- [Configuration Management](../code-implementation/configuration-management.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Code Review](../code-implementation/code-review.md)
- [Release Strategy](release-strategy.md)
- [Version Control](../code-implementation/version-control.md)

### Implements These Principles
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)

## Flag State & Targeting

### Summary

A dynamically controlled flag changes without rebuilding its artifact, propagates within a bounded period, and supports consistent progressive or cohort-based evaluation where required.

### Standards

1. `std-del-flag-state-targeting-01` A dynamically controlled flag **MUST** be changeable without rebuilding the artifact that packages the capability it controls.
2. `std-del-flag-state-targeting-02` A change to a flag's state **MUST** propagate to every running instance of a service within a bounded period, so a request's outcome does not depend on which instance served it.
3. `std-del-flag-state-targeting-03` Progressive, percentage-based, or cohort-based activation **SHOULD** be supported for a flag used to limit a change's exposure while its impact is evaluated.
4. `std-del-flag-state-targeting-04` Where a flag uses percentage-based or cohort-based activation, the same user or cohort **MUST** receive a consistent evaluated outcome across requests.

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Progressive Delivery](progressive-delivery.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Change Control

### Summary

A production flag change is made by an authorised actor, receives deployment or release approval where applicable, supports emergency kill-switch use with retrospective review, and remains independently controllable.

### Standards

1. `std-del-change-control-01` A flag's production state **MUST** be changeable only by an individual or automated process authorised for that flag, such as its owning team or an approved deployment pipeline.
2. `std-del-change-control-02` A flag change materially equivalent to a production deployment, such as an operational toggle's full activation in production, **MUST** receive production deployment approval before it takes effect.
3. `std-del-change-control-03` A release toggle reaching full rollout is instead a release and **MUST** be authorised as one.
4. `std-del-change-control-04` A flag **SHOULD** be usable as a kill switch to disable the capability it controls, regardless of its purpose.
5. `std-del-change-control-05` An emergency flag change, such as using a kill switch to disable functionality causing an active incident, **MAY** be made without prior approval.
6. `std-del-change-control-06` An emergency flag change **SHOULD** receive post-implementation review after the incident is resolved.

### Related Standards

- [Rollback Strategy](rollback-strategy.md)
- [Release Strategy](release-strategy.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Failure Behaviour

### Summary

A flag has an explicit, least-disruptive default and a bounded evaluation timeout, and evaluation failure leaves the service predictable and operational.

### Standards

1. `std-del-failure-behaviour-01` A flag **MUST** have an explicit default state for when its state is absent, stale, misconfigured, or otherwise fails to evaluate, such as when the flag management platform is unreachable.
2. `std-del-failure-behaviour-02` A service **MUST NOT** crash or behave unpredictably when a flag fails to evaluate.
3. `std-del-failure-behaviour-03` A flag's default state **MUST** be the state assessed as safest for its failure mode.
4. `std-del-failure-behaviour-04` Evaluating a flag against the flag management platform **MUST** use the same bounded timeout as any other dependency call.

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Evaluation Data

### Summary

Flag evaluation uses only required data, keeps sensitive targeting information from untrusted clients, and returns only the evaluated outcome where practical.

### Standards

1. `std-del-evaluation-data-01` Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, **MUST** be limited to what evaluation requires.
2. `std-del-evaluation-data-02` Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, **MUST NOT** include personal or sensitive data beyond what evaluation requires.
3. `std-del-evaluation-data-03` A sensitive targeting rule or evaluation attribute **MUST NOT** be exposed to an untrusted client, such as a browser or mobile application.
4. `std-del-evaluation-data-04` A client-facing surface **SHOULD** receive only the evaluated outcome where server-side evaluation is practical.

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Flag Observability

### Summary

Flag states affecting a service are captured for incident correlation, and progressive rollout telemetry distinguishes cohorts while limiting personal or sensitive data.

### Standards

1. `std-del-flag-observability-01` The set of flags and their states affecting a service at a given point in time **MUST** be captured, so an incident or anomaly can be correlated with the flag configuration in effect when it occurred.
2. `std-del-flag-observability-02` Telemetry distinguishing behaviour by flag state **MUST** be captured for a flag used in a progressive or cohort-based rollout, so its impact on each cohort can be evaluated independently.
3. `std-del-flag-observability-03` Telemetry distinguishing behaviour by cohort **MUST** be limited to what evaluating impact requires.
4. `std-del-flag-observability-04` Telemetry distinguishing behaviour by cohort **MUST NOT** expose personal or sensitive data beyond what evaluating impact requires.

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Flag Retirement

### Summary

Transient flags are removed with their conditional code and tests after their decision is finalised; overdue flags, relevant combinations, and dependencies are controlled, and release-toggle completion is marked as user-facing where required.

### Standards

1. `std-del-flag-retirement-01` A release or experiment flag **SHOULD** be short-lived.
2. `std-del-flag-retirement-02` A transient flag **MUST** be removed once its rollout or experiment is complete.
3. `std-del-flag-retirement-03` A flag's removal **MUST** remove its conditional logic, any discontinued code path, and tests specific to that discontinued path.
4. `std-del-flag-retirement-04` A flag approaching or past its expected removal or review date **SHOULD** be reviewed.
5. `std-del-flag-retirement-05` Where more than one flag affects the same component or code path, their number **SHOULD** be limited and relevant combinations of their states tested.
6. `std-del-flag-retirement-06` A flag **SHOULD NOT** depend on another flag's state when the capabilities are independent.
7. `std-del-flag-retirement-07` Where changelog automation uses commit classification, the change that releases a capability behind a release flag **SHOULD** be classified as user-facing.

### Related Standards

- [Version Control](../code-implementation/version-control.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Testability](../../principles/quality/testability.md)
