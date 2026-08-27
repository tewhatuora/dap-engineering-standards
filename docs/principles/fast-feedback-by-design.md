# Fast Feedback by Design

## Summary

> Surface feedback on a change at the earliest stage capable of producing it, clearly and reliably.

## Principles

### Earliest Feasible Feedback

> An issue surfaces at the earliest stage capable of reliably detecting it, never deferred to a costlier, later one.

1. A check capable of running locally or during code review **MUST NOT** be deferred to a later, costlier stage, such as a shared test environment or production.
2. Feedback **SHOULD** be provided at the earliest stage of the engineering lifecycle capable of producing it reliably.

### Local Development Feedback

> A local development environment lets an engineer build, run, and test a change quickly, without depending on a shared environment.

1. A local development environment **SHOULD** allow an engineer to build, run, and test a change without depending on a shared or remote environment.
2. A local build, lint, or test run **SHOULD** complete quickly enough to support an uninterrupted development workflow.

#### References

- [Local Development Environment Standards](../standards/developer-experience/local-development-environment-standards.md)

### Pipeline Feedback Speed

> A delivery pipeline runs its fastest, highest-signal checks first, and a slow or unreliable stage is fixed, not tolerated.

1. A delivery pipeline **SHOULD** run fast, high-signal checks before slower ones, so an initial pass or fail result is returned as quickly as possible.
2. A slow or unreliable pipeline stage **SHOULD** be identified and remediated, not tolerated as a fixed cost of integration.

#### References

- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Build & Test Feedback Loops](../standards/developer-experience/build-test-feedback-loops.md)

### Clear, Actionable Feedback

> A failure signal states its cause and the change responsible clearly enough to act on without further digging.

1. A failure signal, such as a build error, test failure, or automated gate rejection, **MUST** clearly indicate its cause and the change responsible, so it can be acted on without further investigation.
2. Feedback that is frequently ignored or bypassed **SHOULD** be treated as a sign that its speed, clarity, or reliability needs improvement, not that the check itself should be removed.

#### References

- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../standards/quality-engineering/integration-testing.md)

### Unreliable Feedback

> A feedback mechanism that gives inconsistent results is fixed or removed, never worked around by re-running or ignoring it.

1. A feedback mechanism that produces inconsistent results for the same input, such as a flaky test or an intermittent pipeline failure, **SHOULD** be fixed or removed.
2. Unreliable feedback **MUST NOT** be worked around by re-running, ignoring, or suppressing it, since doing so erodes confidence in genuine failures.

#### References

- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Unit Testing](../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../standards/quality-engineering/integration-testing.md)

### Limited-Exposure Rollouts

> A production change stays observable soon enough after release to catch unintended impact during a limited-exposure rollout.

1. A change released to production **SHOULD** be observable soon enough after release to detect unintended impact during an initial, limited-exposure rollout, before it reaches the full user base.
2. Progressive delivery techniques, such as canary releases or feature flags, **SHOULD** be used to limit exposure while fast feedback on real-world behaviour is gathered.

#### References

- [Observability by Default](observability-by-default.md)
- [Progressive Delivery Strategies](../standards/delivery-release/progressive-delivery-strategies.md)
- [Feature Flagging](../standards/delivery-release/feature-flagging.md)

### Feedback Loop Speed

> Key feedback loop speeds are measured over time, so a regression is investigated, not accepted as a cost of growth.

1. Key feedback loops, such as pipeline duration or time to first review, **MAY** be measured so that regressions in feedback speed can be identified and addressed.
2. A sustained increase in feedback loop latency **SHOULD** be treated as a problem to investigate, not an accepted cost of a growing codebase or team.
