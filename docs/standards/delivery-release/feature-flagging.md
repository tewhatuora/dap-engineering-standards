---
last_edited: 2026-09-14
---

# Feature Flagging

## Flag Purpose & Scope

### Summary

A flag has a defined purpose and cohesive scope applied consistently across every domain or service for its lifetime.

### Standards

1. A flag **SHOULD** address a defined operational, delivery, or risk-management need. `std-del-flag-purpose-scope-01`
2. A flag **MUST NOT** be introduced as habit or as a substitute for sound design, adequate testing, or disciplined release control. `std-del-flag-purpose-scope-02`
3. A capability spanning multiple domains or services **SHOULD** be controlled by a single flag evaluated consistently across all of them. `std-del-flag-purpose-scope-03`
4. A flag **SHOULD** control one cohesive capability. `std-del-flag-purpose-scope-04`
5. A flag **MUST NOT** be reused to also gate a different capability introduced later. `std-del-flag-purpose-scope-05`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Use Boundaries

### Summary

A flag does not defer required testing or defect remediation, does not replace access control or environment configuration, and remains independently testable in each state.

### Standards

1. A flag **MUST NOT** be used to defer testing required for the capability it controls, avoid remediating a known defect, conceal incomplete work indefinitely, or mask unstable code. `std-del-use-boundaries-01`
2. A release flag **SHOULD NOT** be retained as the mechanism that permanently differentiates a capability by user or cohort. `std-del-use-boundaries-02`
3. A flag **SHOULD NOT** replace configuration for a permanent difference in behaviour between environments. `std-del-use-boundaries-03`
4. A flag's evaluation **MUST** be overridable with a controlled value during automated testing, so both states of the capability it controls can be verified without depending on the flag management platform. `std-del-use-boundaries-04`

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

1. A flag **MUST** be declared, with a unique name, a defined purpose, and an accountable owning team, before it is used to control any capability. `std-del-flag-declaration-01`
2. A flag's expected removal or review date **SHOULD** be recorded before it is used to control a capability. `std-del-flag-declaration-02`
3. A flag's purpose **MAY** be release control, experimentation, operational control, or presentation of an already-authorised capability to a defined cohort. `std-del-flag-declaration-03`
4. A flag's declaration **MUST** remain discoverable and traceable to the service that uses it. `std-del-flag-declaration-04`
5. A flag requiring runtime changes across multiple instances **SHOULD** use a centralised flag management mechanism. `std-del-flag-declaration-05`
6. A static flag **MAY** be managed through version-controlled application configuration where runtime changes are not required. `std-del-flag-declaration-06`
7. A service **SHOULD** access the flag management platform through an internal abstraction, so switching platforms does not require changing every call site. `std-del-flag-declaration-07`
8. Where changelog automation uses commit classification, the commit introducing code behind an inactive release flag **SHOULD** be classified as internal. `std-del-flag-declaration-08`

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

1. A dynamically controlled flag **MUST** be changeable without rebuilding the artifact that packages the capability it controls. `std-del-flag-state-targeting-01`
2. A change to a flag's state **MUST** propagate to every running instance of a service within a bounded period, so a request's outcome does not depend on which instance served it. `std-del-flag-state-targeting-02`
3. Progressive, percentage-based, or cohort-based activation **SHOULD** be supported for a flag used to limit a change's exposure while its impact is evaluated. `std-del-flag-state-targeting-03`
4. Where a flag uses percentage-based or cohort-based activation, the same user or cohort **MUST** receive a consistent evaluated outcome across requests. `std-del-flag-state-targeting-04`

### Related Standards

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Progressive Delivery](progressive-delivery.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

## Change Control

### Summary

A production flag change is made by an authorised actor, receives deployment or release approval where applicable, supports emergency kill-switch use with retrospective review, and remains independently controllable.

### Standards

1. A flag's production state **MUST** be changeable only by an individual or automated process authorised for that flag, such as its owning team or an approved deployment pipeline. `std-del-change-control-01`
2. A flag change materially equivalent to a production deployment, such as an operational toggle's full activation in production, **MUST** receive production deployment approval before it takes effect. `std-del-change-control-02`
3. A release toggle reaching full rollout is instead a release and **MUST** be authorised as one. `std-del-change-control-03`
4. A flag **SHOULD** be usable as a kill switch to disable the capability it controls, regardless of its purpose. `std-del-change-control-04`
5. An emergency flag change, such as using a kill switch to disable functionality causing an active incident, **MAY** be made without prior approval. `std-del-change-control-05`
6. An emergency flag change **SHOULD** receive post-implementation review after the incident is resolved. `std-del-change-control-06`

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

1. A flag **MUST** have an explicit default state for when its state is absent, stale, misconfigured, or otherwise fails to evaluate, such as when the flag management platform is unreachable. `std-del-failure-behaviour-01`
2. A service **MUST NOT** crash or behave unpredictably when a flag fails to evaluate. `std-del-failure-behaviour-02`
3. A flag's default state **MUST** be the state assessed as safest for its failure mode. `std-del-failure-behaviour-03`
4. Evaluating a flag against the flag management platform **MUST** use the same bounded timeout as any other dependency call. `std-del-failure-behaviour-04`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Evaluation Data

### Summary

Flag evaluation uses only required data, keeps sensitive targeting information from untrusted clients, and returns only the evaluated outcome where practical.

### Standards

1. Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, **MUST** be limited to what evaluation requires. `std-del-evaluation-data-01`
2. Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, **MUST NOT** include personal or sensitive data beyond what evaluation requires. `std-del-evaluation-data-02`
3. A sensitive targeting rule or evaluation attribute **MUST NOT** be exposed to an untrusted client, such as a browser or mobile application. `std-del-evaluation-data-03`
4. A client-facing surface **SHOULD** receive only the evaluated outcome where server-side evaluation is practical. `std-del-evaluation-data-04`

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Flag Observability

### Summary

Flag states affecting a service are captured for incident correlation, and progressive rollout telemetry distinguishes cohorts while limiting personal or sensitive data.

### Standards

1. The set of flags and their states affecting a service at a given point in time **MUST** be captured, so an incident or anomaly can be correlated with the flag configuration in effect when it occurred. `std-del-flag-observability-01`
2. Telemetry distinguishing behaviour by flag state **MUST** be captured for a flag used in a progressive or cohort-based rollout, so its impact on each cohort can be evaluated independently. `std-del-flag-observability-02`
3. Telemetry distinguishing behaviour by cohort **MUST** be limited to what evaluating impact requires. `std-del-flag-observability-03`
4. Telemetry distinguishing behaviour by cohort **MUST NOT** expose personal or sensitive data beyond what evaluating impact requires. `std-del-flag-observability-04`

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Flag Retirement

### Summary

Transient flags are removed with their conditional code and tests after their decision is finalised; overdue flags, relevant combinations, and dependencies are controlled, and release-toggle completion is marked as user-facing where required.

### Standards

1. A release or experiment flag **SHOULD** be short-lived. `std-del-flag-retirement-01`
2. A transient flag **MUST** be removed once its rollout or experiment is complete. `std-del-flag-retirement-02`
3. A flag's removal **MUST** remove its conditional logic, any discontinued code path, and tests specific to that discontinued path. `std-del-flag-retirement-03`
4. A flag approaching or past its expected removal or review date **SHOULD** be reviewed. `std-del-flag-retirement-04`
5. Where more than one flag affects the same component or code path, their number **SHOULD** be limited and relevant combinations of their states tested. `std-del-flag-retirement-05`
6. A flag **SHOULD NOT** depend on another flag's state when the capabilities are independent. `std-del-flag-retirement-06`
7. Where changelog automation uses commit classification, the change that releases a capability behind a release flag **SHOULD** be classified as user-facing. `std-del-flag-retirement-07`

### Related Standards

- [Version Control](../code-implementation/version-control.md)

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Testability](../../principles/quality/testability.md)
