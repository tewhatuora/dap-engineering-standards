---
last_edited: 2026-09-11
---

# Fast Feedback

## Early Development Feedback

### Summary

Checks run as early as they can reliably detect an issue, and local development gives engineers fast feedback without relying on shared environments.

### Reasoning

Deferring a capable check to a later stage increases the time and rework needed to correct an issue. Running it while the change is still familiar allows the engineer to act before the issue reaches other people, shared environments, or later pipeline stages.

The earliest possible check is useful only when its result can be trusted. Local execution provides a short feedback loop without waiting for shared or remote environments, while reliable results allow correction to begin without first confirming whether the signal is genuine.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Local Development Environment](../../standards/developer-experience/local-development-environment.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Clear, Actionable Feedback

### Summary

A failure signal identifies what failed and which change caused it clearly enough for an engineer to act without further investigation.

### Reasoning

Feedback shortens the correction cycle when an engineer can identify what failed, why it failed, and which change produced the result. A vague signal moves effort from correcting the issue to investigating what happened and where the relevant evidence can be found.

Feedback that engineers frequently ignore or bypass indicates that its speed, clarity, or reliability prevents it from supporting action. Removing the check hides that weakness without resolving the underlying need for useful feedback.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Unreliable Feedback

### Summary

Feedback that gives inconsistent results is fixed or removed rather than repeatedly rerun, ignored, or worked around.

### Reasoning

Different results for the same input make a genuine failure difficult to distinguish from noise. Re-running or working around the check may allow one change to proceed, but it leaves the same uncertainty for every later result.

Once engineers expect failures without a cause, they are more likely to ignore a genuine problem or spend time confirming every signal independently. Fixing the mechanism restores useful feedback, while removing it avoids presenting noise as evidence.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Fast Pipeline Feedback

### Summary

A delivery pipeline runs its fastest, highest-signal checks first and improves stages that are slow or unreliable.

### Reasoning

Running fast, high-signal checks first can stop a failing change before slower or dependent work begins. This returns the most actionable result sooner and avoids spending pipeline time on work that cannot succeed after the earlier failure.

A stage that remains slow or unreliable delays integration even when the rest of the pipeline is efficient. Improving that stage prevents its cost and uncertainty from becoming the normal feedback time for every change.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Rollouts with Limited Exposure

### Summary

A production change is observed during a limited rollout so unintended effects can be found before full release.

### Reasoning

A limited rollout restricts the number of people and systems affected by a defect that earlier checks did not detect. Observing real behaviour during that period provides evidence about the change while there is still an opportunity to stop wider exposure.

The rollout offers that protection only when its signals are timely and clear enough to guide the release decision. Delayed or ambiguous feedback can allow an unintended effect to continue into the full release before it is understood.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)

## Feedback Loop Measurement

### Summary

Important feedback loop times are measured so slowdowns can be found and investigated.

### Reasoning

Small increases in feedback time are easy to overlook during individual changes, but measurement makes a sustained regression visible. Investigating the trend prevents slower feedback from becoming accepted as an unavoidable result of a growing codebase or team.

Measuring each important part of the loop also shows where the delay was introduced. Teams can then address the source of the regression instead of treating the whole development workflow as uniformly slow.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
