# Feature Flagging

## Objective

This standard defines requirements for how a feature flag governs the activation of a capability independently of its deployment to production. It keeps a flag's state controlled and short-lived, so a capability can be rolled out, disabled, or retired without introducing uncontrolled risk.

## Standards

### Flag Declaration & Ownership

These requirements set out how a flag is declared, owned, and governed before it controls any capability.

1. A flag must be declared, with a unique name, a defined purpose, and an accountable owning team, before it is used to control any capability.
2. A flag's expected removal date must be recorded in a linked, tracked work item before it is used to control any capability.
3. A flag's purpose may be a release toggle used to decouple deployment from release, or an operational toggle used to control a service's behaviour in production, such as isolating a newly introduced dependency that risks destabilising the service.
4. A flag must be short-lived and should be usable as a kill switch to disable the capability it controls, regardless of its purpose.
5. A flag's declaration must be maintained as version-controlled, declarative code, so every flag in use remains discoverable without inspecting the code that consumes it.
6. A flag must be managed through the organisation's designated flag management platform; it must not be managed through simple in-code configuration.
7. A service should access the flag management platform through an internal abstraction, so switching platforms does not require changing every call site.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Configuration Management](../code-implementation/configuration-management.md)
- [Platform Alignment](../../principles/platform-alignment.md)
- [Vendor Lock-in & Portability](../../principles/vendor-lock-in-portability.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Performance & Load Testing](../quality-engineering/performance-load-testing.md)
- [Code Review](../code-implementation/code-review.md)

### Justified, Single-Capability Use

These requirements describe how a flag's introduction stays justified, and its relationship to the capability it controls stays one-to-one over its lifetime.

1. A flag must be justified by a genuine operational, delivery, or risk-management need; it must not be introduced as habit or as a substitute for sound design, adequate testing, or disciplined release control.
2. A capability spanning multiple domains or services should be controlled by a single flag, evaluated consistently across all of them, rather than by an independent flag per domain or service.
3. A flag must control only one capability; it must not be reused to also gate a different capability introduced later.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Flag Use Boundaries

These requirements address how a flag's use is bounded and how its own states remain independently verifiable.

1. A flag must not be used to defer testing required for the capability it controls, avoid remediating a known defect, conceal incomplete work indefinitely, or mask unstable code.
2. A flag must not be retained as a long-lived toggle to permanently differentiate a capability by user or cohort; that is an authorisation decision, served by an access control mechanism instead.
3. A flag must not be used to control a difference in behaviour between environments; that need is served by configuration instead.
4. A flag's evaluation must be overridable with a controlled value during automated testing, so both states of the capability it controls can be verified without depending on the flag management platform.

#### References

- [Configuration Management](../code-implementation/configuration-management.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)
- [Testability by Design](../../principles/testability-by-design.md)
- [Unit Testing](../quality-engineering/unit-testing.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Decoupling Flag State from Deployment

These requirements describe how a flag's state changes independently of the artifact that packages the capability it controls, without a new build or deployment.

1. A flag must be changeable without rebuilding or redeploying the artifact that packages the capability it controls.
2. A change to a flag's state must propagate to every running instance of a service within a bounded period, so a request's outcome does not depend on which instance served it.
3. Progressive, percentage-based, or cohort-based activation should be supported for a flag used to limit a change's exposure while its impact is evaluated.
4. Where a flag uses percentage-based or cohort-based activation, the same user or cohort must receive a consistent evaluated outcome across requests.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Progressive Delivery Strategies](progressive-delivery-strategies.md)
- [Stateless First](../../principles/stateless-first.md)

### Flag Change Control

These requirements cover how authorisation for a production flag change is granted.

1. A flag's production state must be changeable only by an individual or automated process authorised for that flag, such as its owning team or an approved deployment pipeline.
2. A flag change whose impact on users is materially equivalent to a deployment, such as a full rollout to the entire user base, must be approved through the organisation's formal change control process.
3. An emergency flag change, such as using a kill switch to disable functionality causing an active incident, may be made without prior approval, but must be reviewed retrospectively as soon as practicable.

#### References

- [Continuous Delivery & Deployment](continuous-delivery-deployment.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Safe Default & Failure Behaviour

These requirements guide how a service behaves when a flag fails to evaluate.

1. A flag must have an explicit default state for when its state is absent, stale, misconfigured, or otherwise fails to evaluate, such as when the flag management platform is unreachable.
2. A service must not crash or behave unpredictably when a flag fails to evaluate.
3. The default state for a flag must be the less disruptive option. For a release toggle, that means inactive; for an operational toggle, whichever state avoids the risk it was introduced to manage.
4. Evaluating a flag against the flag management platform must use the same bounded timeout as any other dependency call.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Evaluation Data Protection

These requirements address how data involved in a flag's evaluation stays limited and protected from exposure.

1. Data sent to the flag management platform to evaluate a flag, such as a user or cohort identifier, must be limited to what evaluation requires and must not include personal or sensitive data beyond that need.
2. A flag's targeting rules and evaluation context must not be exposed to an untrusted client, such as a browser or mobile application; a client-facing surface must receive only the evaluated outcome, not the underlying configuration.

#### References

- [Privacy by Design](../../principles/privacy-by-design.md)
- [Security by Design](../../principles/security-by-design.md)

### Flag State Observability

These requirements set out how a flag's state is captured alongside other operational telemetry.

1. The set of flags and their states affecting a service at a given point in time must be captured, so an incident or anomaly can be correlated with the flag configuration in effect when it occurred.
2. Telemetry distinguishing behaviour by flag state must be captured for a flag used in a progressive or cohort-based rollout, so its impact on each cohort can be evaluated independently.
3. Telemetry distinguishing behaviour by cohort must be limited to what evaluating impact requires and must not expose personal or sensitive data beyond that need.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Privacy by Design](../../principles/privacy-by-design.md)

### Flag Retirement & Proliferation Control

These requirements cover how a flag no longer needed is removed, and how flags sharing a code path stay limited and independent.

1. A flag must be removed once its rollout is complete or a decision on the capability it controls has been finalised.
2. A flag's removal must remove the conditional logic, the discontinued code path, and the automation tests written for that path.
3. A flag approaching or past its expected removal date must be identified and reviewed, so flag proliferation and the code complexity it adds stay in check.
4. Where more than one flag affects the same component or code path, their number should be limited and every combination of their states tested, so the combinations requiring verification remain finite and testable.
5. A flag should not depend on another flag's state, unless the capability it controls requires the other's capability to already be active.

#### References

- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)
- [Testability by Design](../../principles/testability-by-design.md)
