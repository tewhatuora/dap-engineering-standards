# Performance & Load Testing

## Objective

This standard defines requirements for verifying that a service meets its defined performance and capacity targets under realistic and adverse demand. It keeps testing representative and repeatable, so a capacity constraint or performance regression surfaces while it remains cheap to address.

## Standards

### Performance Test Types

These requirements guide which performance test type is applicable to a service, based on its defined targets and demand pattern.

1. Load testing must be performed for a service with a defined performance or capacity target, verifying its behaviour at expected peak demand.
2. Stress testing should be considered for a service whose failure under extreme demand would cause material disruption, to identify its point and mode of failure beyond expected peak demand.
3. Soak testing should be considered for a service expected to run continuously or for an extended period, to verify its behaviour under sustained demand and surface a resource leak or gradual degradation.
4. Spike testing should be considered for a service exposed to unpredictable or event-driven demand, to verify its behaviour under a sudden, short-lived surge in demand.

#### References

- [Testability by Design](../../principles/testability-by-design.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Triggers & Recurrence

These requirements set out when performance testing is triggered, and how often it recurs as a service continues to evolve.

1. Performance testing must be performed before a service, or a capability with a defined performance or capacity target, is first released to production.
2. Performance testing should be performed before an event anticipated to generate demand materially above a service's normal operating level.
3. Beyond these triggers, performance testing should also be repeated at a regular interval as a service continues to evolve after its initial release.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Performance & Capacity Targets

These requirements address how a service is validated against its defined performance and capacity targets, using a workload that reflects realistic demand.

1. A performance test must validate a service against its throughput, concurrency, response time, and error rate targets, defined and maintained independently of the test itself.
2. A performance test's workload, including its mix of request types and ramp-up pattern, must reflect realistic or projected production demand.

#### References

- [Performance & Scalability by Design](../../principles/performance-scalability-by-design.md)

### Test Environment & Data Representativeness

These requirements set out how the environment and data used for performance testing are kept representative of production, so its result is reliable.

1. The environment used for performance testing must be representative of production in topology, configuration, and scale.
2. The volume of data used for performance testing must be representative of production, since data volume materially affects query and processing performance.
3. Data derived from production and used to construct a representative test dataset must be de-identified or masked.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)
- [Privacy by Design](../../principles/privacy-by-design.md)

### Execution & Dependencies

These requirements describe how and where a performance test executes, and how it treats an external dependency.

1. A performance test must not be executed against production.
2. A performance test must run in an ephemeral environment created for that test and torn down afterward, not a shared environment requiring coordination with another team.
3. An external dependency must not be mocked in a performance test, since a mock would misrepresent its real latency and behaviour.
4. A performance test that calls an external dependency must not target that provider's production endpoint; a non-production endpoint able to sustain the test's target load must be coordinated with the provider.
5. A performance test must be initiated through automated tooling, such as a scheduled job or pipeline trigger, not from a local developer machine.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Integration Testing](integration-testing.md)
- [Automation First](../../principles/automation-first.md)

### Observability & Diagnostics

These requirements cover how telemetry from a performance test is captured and retained.

1. A performance test must capture resource utilisation, response time distribution, throughput, and error rate throughout its execution.
2. Captured telemetry must be sufficient to localise the component or dependency responsible for a bottleneck or failure.
3. Captured telemetry must be retained against its test run.

#### References

- [Observability by Default](../../principles/observability-by-default.md)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Result Governance

These requirements address how a performance test's result is evaluated and acted on.

1. A result that fails to meet its defined threshold must be treated as a blocking defect.
2. A failing result's root cause must be investigated; a failing result must not be dismissed or re-run without that investigation.
3. A material regression against a previous test run's result should be investigated, even where the result still meets its defined threshold.
4. Each test run's outcome must be recorded alongside its telemetry, so the run remains reviewable without re-analysis.
5. The procedure for running a performance test and interpreting its result must be captured in a runbook.

#### References

- [Runbooks](../operations-observability/runbooks.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
