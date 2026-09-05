# Integration Testing

## Summary

> Verify that components work correctly together in a fresh, isolated, and repeatable environment.

## Standards

### Verification Scope

> An integration test verifies that components work correctly together, including realistic failure conditions, not one component's internal logic.

1. An integration test **MUST** verify that two or more components, services, or systems function correctly together, rather than the isolated logic of a single component.
2. Integration test coverage **MUST** include representative failure conditions, not only the expected success path.
3. Integration testing **MUST NOT** be substituted for exhaustive coverage of a single component's internal logic, which remains the responsibility of unit-level testing.
4. Where a capability under test is controlled by a feature flag and its integration behaviour differs between states, integration test coverage **SHOULD** include both states.

#### References

- [Unit Testing](unit-testing.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Isolated Environments & Test Data

> A dependency runs as a fresh real instance or a kept-aligned emulator for each test run, never a shared persistent instance.

1. An integration test **MUST NOT** depend on a persistent instance of a dependency, whether self-hosted or cloud-hosted, that exists independently of that test suite run.
2. A dependency the team can run itself, such as a database or message broker, **MUST** run as a real instance created fresh for each test suite run, for example a container started, seeded with test data, and torn down once that run completes.
3. A managed cloud-provider service the team does not run itself, such as a message queue or object store, **MUST** be simulated in routine testing with a local emulator, not the provider's actual hosted endpoint.
4. A local emulator simulating a cloud-provider service **MUST** be kept aligned with that service's current behaviour, so it cannot mask a real integration defect.
5. This alignment **SHOULD** be verified periodically, such as a scheduled or pre-release check that runs the same test assertions against a temporary real resource created for that check, with a failure raised as an alert with a corresponding ticket for investigation.
6. Test data supporting an integration test **SHOULD** be provisioned and reset in a repeatable, automated manner, so test outcomes remain consistent across test suite runs.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)
- [Testability](../../principles/quality/testability.md)

### External Dependency Simulation

> A dependency outside the team's control is simulated for routine testing, and periodically checked against its real behaviour.

1. Routine, repeated test execution **MUST** simulate such a dependency using a test double or service virtualisation, to avoid the flakiness, cost, and rate limits of calling it directly.
2. This simulation **MUST** be kept aligned with the dependency's current behaviour, so it cannot mask a real integration defect.
3. This alignment **SHOULD** be verified periodically against the real dependency, such as a scheduled check, a pre-release check, or a shared lower environment, with a failure raised as an alert with a corresponding ticket for investigation.

#### References

- [Testability](../../principles/quality/testability.md)

### Contract Testing

> An implementation is tested against its published contract, verified periodically through a consumer-driven contract test.

1. An API or event/message implementation **MUST** be tested for conformance against its published, machine-readable contract, so its behaviour cannot silently diverge from what it documents.
2. A published contract **SHOULD** be verified periodically, such as a scheduled check or before a contract change is released, using a consumer-driven contract test or, where a shared environment makes it practical, directly against real consumers.
3. A consumer-driven contract test **MUST** be authored or agreed by the consumer it represents, so it reflects how that consumer genuinely uses the contract.

#### References

- [Interoperability](../../principles/architecture-platform/interoperability.md)
- [API Design](../architecture-system-design/api-design.md)
- [Event-Driven Messaging](../architecture-system-design/event-driven-messaging.md)

### Automated Pipeline Execution

> Integration tests run automatically on every merge request and merge, positioned after faster checks so feedback stays quick.

1. Integration tests **MUST** be automated and executed as part of the delivery pipeline, rather than performed manually or only on an ad hoc basis.
2. Integration tests need not run on every push to a branch; they **MUST** run on a merge request and again after it merges to a protected branch, so a branch's development loop stays fast.
3. Integration tests **SHOULD** run after faster, cheaper pipeline checks, such as secrets scanning or unit tests, so a fast-failing issue is caught before the slower integration test stage runs.
4. An integration test's execution time **SHOULD** be monitored, and a sustained increase investigated, so it does not erode the pipeline's overall feedback speed.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

### Failure Gating & Quarantine

> A failing integration test blocks progression, and a quarantined test stays tracked until it is remediated, never silently disabled.

1. A failing integration test **MUST** block a change from merging or progressing to the next stage of the delivery pipeline, until the failure is resolved.
2. A failing or flaky integration test **MUST NOT** be silently commented out or disabled to obtain a passing result.
3. An integration test deliberately quarantined, whether due to flakiness or another reason, **MUST** be tracked and remediated, not left in that state indefinitely.

#### References

- [Testability](../../principles/quality/testability.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Automation](../../principles/engineering-practice/automation.md)

### Test Code Maintenance

> Integration test code meets the same coding and review standard as production code, and is updated or removed as behaviour changes.

1. Integration test code **MUST** be held to the same coding, formatting, and review standards as the production code it verifies.
2. Integration test code **MUST** be reviewed with the same rigor as the production code it accompanies, rather than approved on the assumption that its presence alone is sufficient.
3. An integration test that no longer verifies current behaviour **MUST** be updated or removed; it **MUST NOT** be left in a suite disabled or commented out.

#### References

- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Failure Diagnosis

> An integration test failure identifies exactly which integration point or dependency is responsible, with enough detail to diagnose it.

1. An integration test failure **MUST** indicate which integration point, dependency, or component is responsible, not merely that the test failed.
2. An integration test **SHOULD** capture diagnostic detail at the point of failure, such as the request, response, dependency state, and a correlation or trace ID, so the failure can be diagnosed without reproducing it locally.

#### References

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)
- [Observability](../../principles/reliability-operations/observability.md)
