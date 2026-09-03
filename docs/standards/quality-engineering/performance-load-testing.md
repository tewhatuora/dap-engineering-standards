# Performance & Load Testing

## Summary

> Validate a service against its defined performance and capacity targets under realistic, representative demand.

## Standards

### Performance Test Types

> A service's demand pattern decides whether it needs load, stress, soak, or spike testing.

1. Load testing **MUST** be performed for a service with a defined performance or capacity target, verifying its behaviour at expected peak demand.
2. Stress testing **SHOULD** be considered for a service whose failure under extreme demand would cause material disruption, to identify its point and mode of failure beyond expected peak demand.
3. Soak testing **SHOULD** be considered for a service expected to run continuously or for an extended period, to verify its behaviour under sustained demand and surface a resource leak or gradual degradation.
4. Spike testing **SHOULD** be considered for a service exposed to unpredictable or event-driven demand, to verify its behaviour under a sudden, short-lived surge in demand.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

### Triggers & Recurrence

> Performance testing runs before a first release, before a big demand event, and again at a regular interval after that.

1. Performance testing **MUST** be performed before a service, or a capability with a defined performance or capacity target, is first released to production.
2. Where a capability with a defined performance or capacity target is controlled by a feature flag, performance testing **MUST** be performed before that flag's activation for production traffic.
3. Performance testing **SHOULD** be performed before an event anticipated to generate demand materially above a service's normal operating level.
4. Beyond these triggers, performance testing **SHOULD** also be repeated at a regular interval as a service continues to evolve after its initial release.

#### References

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Performance & Capacity Targets

> A performance test validates a service against its own defined targets, using a workload that reflects realistic demand.

1. A performance test **MUST** validate a service against its throughput, concurrency, response time, and error rate targets, defined and maintained independently of the test itself.
2. A performance test's workload, including its mix of request types and ramp-up pattern, **MUST** reflect realistic or projected production demand.

#### References

- [Performance & Scalability by Design](../../principles/reliability-operations/performance-scalability-by-design.md)

### Test Environment & Data Representativeness

> A performance test's environment and data volume stay representative of production, so its result can be trusted.

1. The environment used for performance testing **MUST** be representative of production in topology, configuration, and scale.
2. The volume of data used for performance testing **MUST** be representative of production, since data volume materially affects query and processing performance.
3. Data derived from production and used to construct a representative test dataset **MUST** be de-identified or masked.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)
- [Privacy by Design](../../principles/security-privacy/privacy-by-design.md)

### Execution & Dependencies

> A performance test runs in its own ephemeral environment, never against production or a mocked external dependency.

1. A performance test **MUST NOT** be executed against production.
2. A performance test **MUST** run in an ephemeral environment created for that test and torn down afterward, not a shared environment requiring coordination with another team.
3. An external dependency **MUST NOT** be mocked in a performance test, since a mock would misrepresent its real latency and behaviour.
4. A performance test that calls an external dependency **MUST NOT** target that provider's production endpoint; a non-production endpoint able to sustain the test's target load **MUST** be coordinated with the provider.
5. A performance test **MUST** be initiated through automated tooling, such as a scheduled job or pipeline trigger, not from a local developer machine.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Integration Testing](integration-testing.md)
- [Automation First](../../principles/engineering-practice/automation-first.md)

### Observability & Diagnostics

> A performance test captures resource, latency, and error telemetry throughout, retained against its own test run.

1. A performance test **MUST** capture resource utilisation, response time distribution, throughput, and error rate throughout its execution.
2. Captured telemetry **MUST** be sufficient to localise the component or dependency responsible for a bottleneck or failure.
3. Captured telemetry **MUST** be retained against its test run.

#### References

- [Observability by Default](../../principles/reliability-operations/observability-by-default.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Result Governance

> A result that misses its threshold is a blocking defect, investigated at the root cause, never dismissed or silently re-run.

1. A result that fails to meet its defined threshold **MUST** be treated as a blocking defect.
2. A failing result's root cause **MUST** be investigated; a failing result **MUST NOT** be dismissed or re-run without that investigation.
3. A material regression against a previous test run's result **SHOULD** be investigated, even where the result still meets its defined threshold.
4. Each test run's outcome **MUST** be recorded alongside its telemetry, so the run remains reviewable without re-analysis.
5. The procedure for running a performance test and interpreting its result **MUST** be captured in a runbook.

#### References

- [Runbooks](../operations-observability/runbooks.md)
- [Fast Feedback by Design](../../principles/engineering-practice/fast-feedback-by-design.md)
