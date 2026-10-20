---
last_edited: 2026-10-21
---

# Fast Feedback

## Early Development Feedback

### Summary

Checks run as early as they can reliably detect an issue, and local development gives engineers fast feedback without relying on shared environments.

### Reasoning

Delaying a check increases the time and rework needed to fix an issue. Early checks give engineers feedback before a change reaches shared environments or later pipeline stages, while its details are still familiar.

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

Failure feedback clearly identifies what failed and which change caused it, giving engineers enough information to act.

### Reasoning

Clear feedback helps engineers find the cause of a failure. Without it, they spend time gathering evidence and working out what happened.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Unreliable Feedback

### Summary

Engineers fix or remove the source of inconsistent feedback rather than repeatedly rerunning checks, ignoring results, or working around the problem.

### Reasoning

When the same input produces different results, engineers cannot tell whether a failure is genuine. Rerunning or bypassing the check may allow one change to proceed, but later results remain uncertain.

Frequent false or unexplained failures make the check harder to trust. Engineers may then overlook genuine failures or spend time verifying every result independently.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Fast Pipeline Feedback

### Summary

Fast pipeline checks that reliably identify problems run first, and engineering teams improve slow or unreliable stages.

### Reasoning

Running these checks first catches failures before slower or dependent stages begin. Engineers get results they can act on sooner, and the pipeline avoids running stages that cannot succeed.

A slow stage can delay the whole pipeline, making engineers wait longer and increasing the cost of each run. An unreliable stage leaves engineers unsure of the result and may need reruns before they can trust it.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Pipeline Feedback Measurement

### Summary

Teams measure delivery pipeline and test execution times to find and investigate sustained slowdowns.

### Reasoning

Gradual increases in pipeline or test duration are easy to miss in individual runs. Measurements over time reveal sustained slowdowns before teams accept longer waits as normal.

Measuring each stage shows where a delay started. Teams can address the cause rather than treating the whole pipeline as slow.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Rollouts with Limited Exposure

### Summary

Teams observe a production change during a limited rollout to find unexpected behaviour before full release.

### Reasoning

A limited rollout reduces the number of users and systems affected if a change behaves unexpectedly. Teams can observe the change and decide whether to continue before exposing more users and systems to it.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
