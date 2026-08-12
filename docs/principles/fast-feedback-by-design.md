# Fast Feedback by Design

## Objective

Fast Feedback by Design establishes the speed and earliness of feedback as a deliberate engineering concern across the development lifecycle, from local development through delivery pipelines to production. It directs engineering effort toward shortening the time between an engineering action and the information needed to judge its correctness or impact, so problems are found and corrected while they remain cheap and easy to fix.

## Principles

### Surfacing Issues at the Earliest Feasible Stage

These principles surface an issue at the earliest stage capable of reliably detecting it.

1. A check capable of running locally or during code review must not be deferred to a later, costlier stage, such as a shared test environment or production.
2. Feedback should be provided at the earliest stage of the engineering lifecycle capable of producing it reliably.

### Fast, Reliable Local Development Feedback

These principles keep local development feedback fast and independent of a shared environment.

1. A local development environment should allow an engineer to build, run, and test a change without depending on a shared or remote environment.
2. A local build, lint, or test run should complete quickly enough to support an uninterrupted development workflow.

#### References

- [Local Development Environment Standards](../standards/developer-experience/local-development-environment-standards.md)

### Fast, Prioritised Feedback in Delivery Pipelines

These principles order a delivery pipeline's checks so the fastest, highest-signal result returns first.

1. A delivery pipeline should run fast, high-signal checks before slower ones, so an initial pass or fail result is returned as quickly as possible.
2. A slow or unreliable pipeline stage should be identified and remediated, not tolerated as a fixed cost of integration.

#### References

- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Build & Test Feedback Loops](../standards/developer-experience/build-test-feedback-loops.md)

### Feedback That Is Clear and Actionable

These principles make a failure signal clear enough to act on without further investigation.

1. A failure signal, such as a build error, test failure, or automated gate rejection, must clearly indicate its cause and the change responsible, so it can be acted on without further investigation.
2. Feedback that is frequently ignored or bypassed should be treated as a sign that its speed, clarity, or reliability needs improvement, not that the check itself should be removed.

### Preserving Trust Through Reliable Feedback

These principles fix or remove a feedback mechanism that produces inconsistent results, rather than working around it.

1. A feedback mechanism that produces inconsistent results for the same input, such as a flaky test or an intermittent pipeline failure, should be fixed or removed.
2. Unreliable feedback must not be worked around by re-running, ignoring, or suppressing it, since doing so erodes confidence in genuine failures.

### Fast Feedback on Production Impact

These principles detect a production change's impact soon enough after release to limit it.

1. A change released to production should be observable soon enough after release to detect unintended impact during an initial, limited-exposure rollout, before it reaches the full user base.
2. Progressive delivery techniques, such as canary releases or feature flags, should be used to limit exposure while fast feedback on real-world behaviour is gathered.

#### References

- [Observability by Default](observability-by-default.md)
- [Progressive Delivery Strategies (Blue/Green, Canary)](../standards/delivery-release/progressive-delivery-strategies.md)
- [Feature Flagging](../standards/delivery-release/feature-flagging.md)

### Measuring & Improving Feedback Loop Speed Over Time

These principles measure feedback loop speed over time, so a regression can be identified and addressed.

1. Key feedback loops, such as pipeline duration or time to first review, may be measured so that regressions in feedback speed can be identified and addressed.
2. A sustained increase in feedback loop latency should be treated as a problem to investigate, not an accepted cost of a growing codebase or team.
