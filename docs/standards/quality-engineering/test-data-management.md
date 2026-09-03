# Test Data Management

## Summary

> Populate non-production environments with synthetic, de-identified, or purpose-built data, never unmodified production data.

## Standards

### Test Data Sourcing

> A non-production environment is populated with synthetic or fixture data first, and a production extract only where authorised and logged.

1. Synthetic or fixture data **SHOULD** be preferred over a de-identified or masked production extract, which **SHOULD** be reserved for a need synthetic data cannot satisfy, such as performance testing's realistic volume or reproducing a specific production issue.
2. A non-production environment **MUST** be populated only from synthetic data, a de-identified or masked production extract, or a purpose-built fixture dataset.
3. Unmodified production data **MUST NOT** be copied, replicated, or restored into a non-production environment.
4. A de-identification or masking technique applied to a production-derived extract **MUST** be irreversible, preserve referential relationships, and be verified resistant to re-identification before use.
5. Use of a de-identified or masked production extract **MUST** be authorised in advance and recorded with an expiry.
6. Each production-derived extract populating a non-production environment **MUST** be logged, recording its source, destination, and the authorisation it was approved under.

#### References

- [Privacy by Design](../../principles/security-privacy/privacy-by-design.md)

### Test Data Scope

> A test dataset is scoped and representative of what its own test actually needs, not a full-scale copy of production.

1. A test dataset **MUST** be representative of the conditions relevant to the test it supports, such as realistic volume, distribution, or boundary values.
2. A test dataset **SHOULD** be limited to the volume and scope a test genuinely requires, not a full-scale replica of production.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Cost Awareness by Design](../../principles/cost-sustainability/cost-awareness-by-design.md)

### Test Data Lifecycle

> A test dataset provisions and deletes through an automated process, without an individual needing direct production access.

1. Provisioning and deletion of a test dataset **MUST** each be available to a team on demand through an automated process that is documented well enough for the team to operate and maintain it.
2. An individual team member **MUST NOT** need personal access to a production environment to run this process; the access required **MUST** be held by the process itself, scoped to least privilege.
3. Retrieval of data from a production source by this process **MUST NOT** degrade the production environment's performance.
4. Masking or de-identification of a production-derived extract **MUST** be performed automatically as part of this process, rather than as a separate manual step.
5. A test dataset derived from production **MUST** be deleted once the testing activity it supports concludes.

#### References

- [Testability by Design](../../principles/quality/testability-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Privacy by Design](../../principles/security-privacy/privacy-by-design.md)
- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Automation First](../../principles/engineering-practice/automation-first.md)
- [Runbooks](../operations-observability/runbooks.md)
