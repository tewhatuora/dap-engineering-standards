# Fast Feedback

## Early Development Feedback

### Summary

Checks run at the earliest stage that can detect an issue reliably, and local development provides a fast feedback loop independent of shared environments.

### Reasoning

Deferring a capable check to a later stage increases the cost and time needed to correct an issue. Running the check locally or during review exposes the issue before it reaches a shared test environment or production. Reliability remains necessary because feedback that cannot be trusted does not support timely correction.

Local execution removes dependencies on shared or remote environments from the development loop and allows an engineer to correct an issue while its context is current.

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

A failure signal states its cause and the change responsible clearly enough to act on without further investigation.

### Reasoning

Feedback shortens the correction cycle when the engineer can identify the failure and the change that produced it. A signal without this detail requires further investigation before corrective work can begin.

Frequently ignored or bypassed feedback indicates that its speed, clarity, or reliability needs improvement. Removing the check leaves the underlying deficiency unresolved.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Unreliable Feedback

### Summary

A feedback mechanism that gives inconsistent results is fixed or removed rather than worked around.

### Reasoning

Different results for the same input make a genuine failure harder to distinguish from noise. Re-running, ignoring, or suppressing unreliable feedback allows that uncertainty to persist and erodes confidence in every failure the mechanism reports.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Fast Pipeline Feedback

### Summary

A delivery pipeline runs its fastest, highest-signal checks first and remediates slow or unreliable stages.

### Reasoning

Running fast, high-signal checks before slower work returns an initial result sooner and avoids spending time on dependent work after a failure. A stage that remains slow or unreliable delays integration and weakens confidence in the pipeline.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Limited-Exposure Rollouts

### Summary

A production change remains observable during a limited-exposure rollout so unintended impact is detected before full release.

### Reasoning

Limiting initial exposure bounds the impact of a defect that earlier checks did not detect. Observability during that period provides feedback from real-world behaviour while there is still an opportunity to stop wider exposure.

### Implemented By These Standards

- [Progressive Delivery](../../standards/delivery-release/progressive-delivery.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)

## Feedback Loop Measurement

### Summary

Key feedback loop speeds are measured over time so a regression is identified and investigated.

### Reasoning

Measuring feedback loop latency makes a sustained increase visible. Treating the increase as an issue to investigate prevents slower feedback from becoming an accepted consequence of a growing codebase or team.

### Implemented By These Standards

- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
