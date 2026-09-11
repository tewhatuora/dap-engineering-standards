---
last_edited: 2026-09-11
---

# Fast Feedback

## Early Development Feedback

### Summary

Checks run at the earliest stage where they can reliably detect an issue, and local development provides fast feedback without relying on shared environments.

### Reasoning

Running a check later than necessary increases the time and rework needed to correct an issue. Early feedback reaches the engineer while the change is still familiar and before the change reaches shared environments or later pipeline stages.

Local checks do not depend on the availability or current state of a shared environment. Engineers can repeat them as they work instead of waiting for access or another deployment.

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

A failure signal clearly identifies what failed and which change caused it, giving an engineer enough information to act.

### Reasoning

Clear feedback directs engineers to the cause of a failure. Without that information, time is spent finding evidence and determining what happened.

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

When the same input produces different results, engineers cannot tell whether a failure is genuine. Rerunning or bypassing the check may unblock one change but leaves every later result uncertain.

Frequent false or unexplained failures erode trust in the check. Engineers may then overlook genuine failures or spend time verifying every result independently.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Fast Pipeline Feedback

### Summary

Engineering teams run fast, high-signal pipeline checks first and improve stages that are slow or unreliable.

### Reasoning

Running fast, high-signal checks first finds failures before slower or dependent stages begin. Engineers receive an actionable result sooner, and the pipeline avoids work that cannot succeed.

A slow stage can determine how long the entire pipeline takes, increasing feedback time and execution cost for every change. An unreliable stage creates uncertainty and may require reruns before engineers can trust the result.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Pipeline Feedback Measurement

### Summary

Delivery pipeline and test execution times are measured so sustained slowdowns can be found and investigated.

### Reasoning

Gradual increases in pipeline or test duration are easy to miss in individual runs. Measuring them over time reveals sustained slowdowns before longer waits become accepted as normal.

Stage-level measurements show where a delay was introduced. Teams can address the source instead of treating the entire pipeline as slow.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Rollouts with Limited Exposure

### Summary

A production change is observed during a limited rollout so unexpected behaviour can be found before full release.

### Reasoning

A limited rollout reduces the number of users and systems affected if a change behaves unexpectedly. Observing its behaviour shows whether the rollout should continue before it reaches more users and systems.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
