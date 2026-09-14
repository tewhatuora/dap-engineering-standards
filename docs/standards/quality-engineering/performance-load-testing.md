---
last_edited: 2026-09-14
---

# Performance & Load Testing

## Performance Targets

### Summary

A performance test validates a service against its own defined targets, using a workload that reflects realistic demand.

### Standards

1. A performance test **MUST** validate a service against its throughput, concurrency, response time, and error rate targets, defined and maintained independently of the test itself. `std-qe-performance-targets-01`
2. A performance test's workload, including its mix of request types and ramp-up pattern, **MUST** reflect realistic or projected production demand. `std-qe-performance-targets-02`

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Testability](../../principles/quality/testability.md)

## Test Types

### Summary

The performance test types selected for a service match its demand pattern and the impact of failure.

### Standards

1. Load testing **MUST** be performed for a service with a defined performance or capacity target, verifying its behaviour at expected peak demand. `std-qe-test-types-01`
2. Stress testing **SHOULD** be considered for a service whose failure under extreme demand would cause material disruption, to identify its point and mode of failure beyond expected peak demand. `std-qe-test-types-02`
3. Soak testing **SHOULD** be considered for a service expected to run continuously or for an extended period, to verify its behaviour under sustained demand and surface a resource leak or gradual degradation. `std-qe-test-types-03`
4. Spike testing **SHOULD** be considered for a service exposed to unpredictable or event-driven demand, to verify its behaviour under a sudden, short-lived surge in demand. `std-qe-test-types-04`

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Testability](../../principles/quality/testability.md)

## Test Timing

### Summary

Performance testing runs before an initial release or production feature activation, before anticipated high demand, and at regular intervals thereafter.

### Standards

1. Performance testing **MUST** be performed before a service, or a capability with a defined performance or capacity target, is first released to production. `std-qe-test-timing-01`
2. Where a capability with a defined performance or capacity target is controlled by a feature flag, performance testing **MUST** be performed before that flag's activation for production traffic. `std-qe-test-timing-02`
3. Performance testing **SHOULD** be performed before an event anticipated to generate demand materially above a service's normal operating level. `std-qe-test-timing-03`
4. Performance testing **SHOULD** be repeated at a regular interval as a service continues to evolve after its initial release. `std-qe-test-timing-04`

### Related Standards

- [Feature Flagging](../delivery-release/feature-flagging.md)

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Testability](../../principles/quality/testability.md)

## Environment & Data

### Summary

A performance test uses production-representative topology, configuration, scale, and data volume, with production-derived data de-identified or masked.

### Standards

1. The environment used for performance testing **MUST** be representative of production in topology, configuration, and scale. `std-qe-environment-data-01`
2. The volume of data used for performance testing **MUST** be representative of production, since data volume materially affects query and processing performance. `std-qe-environment-data-02`
3. Data derived from production and used to construct a representative test dataset **MUST** be de-identified or masked. `std-qe-environment-data-03`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Test Execution & Dependencies

### Summary

A performance test is initiated through automated tooling in a dedicated ephemeral non-production environment and uses a coordinated non-production endpoint for each external dependency.

### Standards

1. A performance test **MUST NOT** be executed against production. `std-qe-test-execution-dependencies-01`
2. A performance test **MUST** run in an ephemeral environment created for that test and torn down afterward. `std-qe-test-execution-dependencies-02`
3. An external dependency **MUST NOT** be mocked in a performance test, since a mock would misrepresent its real latency and behaviour. `std-qe-test-execution-dependencies-03`
4. A performance test that calls an external dependency **MUST NOT** target that provider's production endpoint. `std-qe-test-execution-dependencies-04`
5. A non-production endpoint able to sustain the test's target load **MUST** be coordinated with the provider. `std-qe-test-execution-dependencies-05`
6. A performance test **MUST** be initiated through automated tooling operated independently of a local developer machine, such as a scheduled job or pipeline trigger. `std-qe-test-execution-dependencies-06`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Integration Testing](integration-testing.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Test Observability

### Summary

A performance test captures and retains run-specific resource, latency, throughput, and error telemetry sufficient to diagnose a bottleneck or failure.

### Standards

1. A performance test **MUST** capture resource utilisation, response time distribution, throughput, and error rate throughout its execution. `std-qe-test-observability-01`
2. Captured telemetry **MUST** be sufficient to localise the component or dependency responsible for a bottleneck or failure. `std-qe-test-observability-02`
3. Captured telemetry **MUST** be retained against its test run. `std-qe-test-observability-03`

### Related Standards

- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Observability](../../principles/reliability-operations/observability.md)
- [Testability](../../principles/quality/testability.md)

## Test Results

### Summary

A threshold failure is a blocking defect that undergoes root cause investigation; material regressions are investigated, every run retains a reviewable outcome and telemetry, and the test has a runbook.

### Standards

1. A result that fails to meet its defined threshold **MUST** be treated as a blocking defect. `std-qe-test-results-01`
2. A failing result's root cause **MUST** be investigated. `std-qe-test-results-02`
3. A failing result **MUST NOT** be dismissed or re-run before its root cause is investigated. `std-qe-test-results-03`
4. A material regression against a previous test run's result **SHOULD** be investigated, even where the result still meets its defined threshold. `std-qe-test-results-04`
5. Each test run's outcome **MUST** be recorded alongside its telemetry, so the run remains reviewable without re-analysis. `std-qe-test-results-05`
6. The procedure for running a performance test and interpreting its result **MUST** be captured in a runbook. `std-qe-test-results-06`

### Related Standards

- [Runbooks](../operations-observability/runbooks.md)

### Implements These Principles

- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)
- [Testability](../../principles/quality/testability.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)
