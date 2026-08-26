# Integration Testing

## Summary

> Verify that components work correctly together in a fresh, isolated, and repeatable environment.

## Standards

### Verification Scope

These requirements set out how an integration test's verification responsibility is scoped, distinct from a unit test's.

1. An integration test **MUST** verify that two or more components, services, or systems function correctly together, rather than the isolated logic of a single component.
2. Integration test coverage **MUST** include representative failure conditions, not only the expected success path.
3. Integration testing **MUST NOT** be substituted for exhaustive coverage of a single component's internal logic, which remains the responsibility of unit-level testing.
4. Where a capability under test is controlled by a feature flag and its integration behaviour differs between states, integration test coverage **SHOULD** include both states.

#### References

- [Unit Testing](unit-testing.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Isolated Environments & Test Data

These requirements address how a dependency's test environment and its test data stay isolated and repeatable across test suite runs.

1. An integration test **MUST NOT** depend on a persistent instance of a dependency, whether self-hosted or cloud-hosted, that exists independently of that test suite run.
2. A dependency the team can run itself, such as a database or message broker, **MUST** run as a real instance created fresh for each test suite run, for example a container started, seeded with test data, and torn down once that run completes.
3. A managed cloud-provider service the team does not run itself, such as a message queue or object store, **MUST** be simulated in routine testing with a local emulator, not the provider's actual hosted endpoint.
4. A local emulator simulating a cloud-provider service **MUST** be kept aligned with that service's current behaviour, so it cannot mask a real integration defect.
5. This alignment **SHOULD** be verified periodically, such as a scheduled or pre-release check that runs the same test assertions against a temporary real resource created for that check, with a failure raised as an alert with a corresponding ticket for investigation.
6. Test data supporting an integration test **SHOULD** be provisioned and reset in a repeatable, automated manner, so test outcomes remain consistent across test suite runs.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Test Data Management](test-data-management.md)
- [Testability by Design](../../principles/testability-by-design.md)

### External Dependency Simulation

These requirements describe how a dependency outside the team's own control, such as an internal service owned by another team, a partner organisation's API, or a vendor's system, is simulated for routine test execution and kept aligned with its real behaviour.

1. Routine, repeated test execution **MUST** simulate such a dependency using a test double or service virtualisation, to avoid the flakiness, cost, and rate limits of calling it directly.
2. This simulation **MUST** be kept aligned with the dependency's current behaviour, so it cannot mask a real integration defect.
3. This alignment **SHOULD** be verified periodically against the real dependency, such as a scheduled check, a pre-release check, or a shared lower environment, with a failure raised as an alert with a corresponding ticket for investigation.

#### References

- [Testability by Design](../../principles/testability-by-design.md)

### Contract Testing

These requirements cover how an implementation's conformance to a published API or event contract is verified, including by the real consumers that rely on it.

1. An API or event/message implementation **MUST** be tested for conformance against its published, machine-readable contract, so its behaviour cannot silently diverge from what it documents.
2. A published contract **SHOULD** be verified periodically, such as a scheduled check or before a contract change is released, using a consumer-driven contract test or, where a shared environment makes it practical, directly against real consumers.
3. A consumer-driven contract test **MUST** be authored or agreed by the consumer it represents, so it reflects how that consumer genuinely uses the contract.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [API Design & Standards](../architecture-system-design/api-design-standards.md)
- [Event-Driven Messaging Standards](../architecture-system-design/event-driven-messaging-standards.md)

### Automated Pipeline Execution

These requirements guide how integration test execution is automated and timed within the delivery pipeline.

1. Integration tests **MUST** be automated and executed as part of the delivery pipeline, rather than performed manually or only on an ad hoc basis.
2. Integration tests need not run on every push to a branch; they **MUST** run on a merge request and again after it merges to a protected branch, so a branch's development loop stays fast.
3. Integration tests **SHOULD** run after faster, cheaper pipeline checks, such as secrets scanning or unit tests, so a fast-failing issue is caught before the slower integration test stage runs.
4. An integration test's execution time **SHOULD** be monitored, and a sustained increase investigated, so it does not erode the pipeline's overall feedback speed.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Branching Strategy](../code-implementation/branching-strategy.md)
- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Failure Gating & Quarantine

These requirements set out how a failing integration test blocks progression, and how a quarantined test is tracked until it is remediated.

1. A failing integration test **MUST** block a change from merging or progressing to the next stage of the delivery pipeline, until the failure is resolved.
2. A failing or flaky integration test **MUST NOT** be silently commented out or disabled to obtain a passing result.
3. An integration test deliberately quarantined, whether due to flakiness or another reason, **MUST** be tracked and remediated, not left in that state indefinitely.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Automation First](../../principles/automation-first.md)

### Test Code Maintenance

These requirements address how integration test code is held to the same engineering standard as the production code it verifies, and kept current as that code changes.

1. Integration test code **MUST** be held to the same coding, formatting, and review standards as the production code it verifies.
2. Integration test code **MUST** be reviewed with the same rigor as the production code it accompanies, rather than approved on the assumption that its presence alone is sufficient.
3. An integration test that no longer verifies current behaviour **MUST** be updated or removed; it **MUST NOT** be left in a suite disabled or commented out.

#### References

- [Coding Standards & Formatting](../code-implementation/coding-standards-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Failure Diagnosis

These requirements describe how the integration point, dependency, or component responsible for a test failure is identified, since more than one is always involved.

1. An integration test failure **MUST** indicate which integration point, dependency, or component is responsible, not merely that the test failed.
2. An integration test **SHOULD** capture diagnostic detail at the point of failure, such as the request, response, dependency state, and a correlation or trace ID, so the failure can be diagnosed without reproducing it locally.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)
- [Observability by Default](../../principles/observability-by-default.md)
