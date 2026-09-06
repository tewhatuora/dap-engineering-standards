# Feature Flagging

## Summary

> Decouple deploying code from releasing it.

## Standards

### Flag Declaration & Ownership

> A flag is declared as version-controlled code, with a named owner and a tracked removal date, before it controls anything.

1. A flag **MUST** be declared, with a unique name, a defined purpose, and an accountable owning team, before it is used to control any capability.
2. A flag's expected removal date **MUST** be recorded in a linked, tracked work item before it is used to control any capability.
3. A flag's purpose **MAY** be a release toggle used to decouple deployment from release, or an operational toggle used to control a service's behaviour in production, such as isolating a newly introduced dependency that risks destabilising the service.
4. A flag's declaration **MUST** be maintained as version-controlled, declarative code, so every flag in use remains discoverable without inspecting the code that consumes it.
5. A flag **MUST** be managed through the organisation's designated flag management platform; it **MUST NOT** be managed through simple in-code configuration.
6. A service **SHOULD** access the flag management platform through an internal abstraction, so switching platforms does not require changing every call site.
7. The commit introducing code behind a release toggle **MUST** be marked as internal rather than user-facing, so it triggers no changelog entry.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Configuration Management](../code-implementation/configuration-management.md)
- [Shared Platform](../../principles/architecture-platform/shared-platform.md)
- [Vendor Lock-in & Portability](../../principles/architecture-platform/vendor-lock-in-portability.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Code Review](../code-implementation/code-review.md)
- [Release Strategy](release-strategy.md)
- [Version Control](../code-implementation/version-control.md)

### Justified, Single-Capability Use

> A flag exists for a genuine need and controls exactly one capability for its whole lifetime, never reused for another.

1. A flag **MUST** be justified by a genuine operational, delivery, or risk-management need; it **MUST NOT** be introduced as habit or as a substitute for sound design, adequate testing, or disciplined release control.
2. A capability spanning multiple domains or services **SHOULD** be controlled by a single flag, evaluated consistently across all of them, rather than by an independent flag per domain or service.
3. A flag **MUST** control only one capability; it **MUST NOT** be reused to also gate a different capability introduced later.

#### References

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

### Flag Use Boundaries

> A flag never substitutes for testing or masks unstable code, and both of its states stay independently testable.

1. A flag **MUST NOT** be used to defer testing required for the capability it controls, avoid remediating a known defect, conceal incomplete work indefinitely, or mask unstable code.
2. A flag **MUST NOT** be retained as a long-lived toggle to permanently differentiate a capability by user or cohort; that is an authorisation decision, served by an access control mechanism instead.
3. A flag **MUST NOT** be used to control a difference in behaviour between environments; that need is served by configuration instead.
4. A flag's evaluation **MUST** be overridable with a controlled value during automated testing, so both states of the capability it controls can be verified without depending on the flag management platform.

#### References

- [Configuration Management](../code-implementation/configuration-management.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Testability](../../principles/quality/testability.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Decoupling Flag State from Deployment

> A flag's state changes without a new build or deployment, propagating consistently to every running instance.

1. A flag **MUST** be changeable without rebuilding or redeploying the artifact that packages the capability it controls.
2. A change to a flag's state **MUST** propagate to every running instance of a service within a bounded period, so a request's outcome does not depend on which instance served it.
3. Progressive, percentage-based, or cohort-based activation **SHOULD** be supported for a flag used to limit a change's exposure while its impact is evaluated.
4. Where a flag uses percentage-based or cohort-based activation, the same user or cohort **MUST** receive a consistent evaluated outcome across requests.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
- [Progressive Delivery](progressive-delivery.md)
- [Stateless Architecture](../../principles/architecture-platform/stateless-architecture.md)

### Flag Change Control

> A production flag change is authorised for the specific individual or pipeline making it, at the same rigor as a deployment.

1. A flag's production state **MUST** be changeable only by an individual or automated process authorised for that flag, such as its owning team or an approved deployment pipeline.
2. A flag change materially equivalent to a deployment, such as an operational toggle's full activation in production, **MUST** be approved through the organisation's formal change control process; a release toggle reaching full rollout is instead a release and **MUST** be authorised as one.
3. A flag **SHOULD** be usable as a kill switch to disable the capability it controls, regardless of its purpose.
4. An emergency flag change, such as using a kill switch to disable functionality causing an active incident, **MAY** be made without prior approval, but **MUST** be reviewed retrospectively as soon as practicable.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Rollback Strategy](rollback-strategy.md)
- [Release Strategy](release-strategy.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)

### Safe Default & Failure Behaviour

> A flag has an explicit, least-disruptive default for when it fails to evaluate, and a service never crashes because of it.

1. A flag **MUST** have an explicit default state for when its state is absent, stale, misconfigured, or otherwise fails to evaluate, such as when the flag management platform is unreachable.
2. A service **MUST NOT** crash or behave unpredictably when a flag fails to evaluate.
3. The default state for a flag **MUST** be the less disruptive option. For a release toggle, that means inactive; for an operational toggle, whichever state avoids the risk it was introduced to manage.
4. Evaluating a flag against the flag management platform **MUST** use the same bounded timeout as any other dependency call.

#### References

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Evaluation Data Protection

> Data sent to evaluate a flag stays limited to what evaluation needs, and its targeting rules never reach an untrusted client.

1. Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, **MUST** be limited to what evaluation requires and **MUST NOT** include personal or sensitive data beyond that need.
2. A flag's targeting rules and evaluation context **MUST NOT** be exposed to an untrusted client, such as a browser or mobile application; a client-facing surface **MUST** receive only the evaluated outcome, not the underlying configuration.

#### References

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

### Flag State Observability

> The flags affecting a service at any point in time are captured, so an incident can be correlated with their state.

1. The set of flags and their states affecting a service at a given point in time **MUST** be captured, so an incident or anomaly can be correlated with the flag configuration in effect when it occurred.
2. Telemetry distinguishing behaviour by flag state **MUST** be captured for a flag used in a progressive or cohort-based rollout, so its impact on each cohort can be evaluated independently.
3. Telemetry distinguishing behaviour by cohort **MUST** be limited to what evaluating impact requires and **MUST NOT** expose personal or sensitive data beyond that need.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

### Flag Retirement & Proliferation Control

> A flag is short-lived and removed, code path and all, once its rollout completes or its decision is finalised.

1. A flag **MUST** be short-lived, regardless of its purpose.
2. A flag **MUST** be removed once its rollout is complete or a decision on the capability it controls has been finalised.
3. A flag's removal **MUST** remove the conditional logic, the discontinued code path, and the automation tests written for that path.
4. A flag approaching or past its expected removal date **MUST** be identified and reviewed, so flag proliferation and the code complexity it adds stay in check.
5. Where more than one flag affects the same component or code path, their number **SHOULD** be limited and every combination of their states tested, so the combinations requiring verification remain bounded.
6. A flag **SHOULD NOT** depend on another flag's state, unless the capability it controls requires the other's capability to already be active.
7. The commit that retires a release toggle and its conditional logic **MUST** be marked as the user-facing change it completes, so it triggers the changelog entry and release notes.

#### References

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Testability](../../principles/quality/testability.md)
- [Release Strategy](release-strategy.md)
- [Version Control](../code-implementation/version-control.md)
