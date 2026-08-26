# Test Data Management

## Summary

> Populate non-production environments with synthetic, de-identified, or purpose-built data, never unmodified production data.

## Standards

### Test Data Sourcing

These requirements set out how a non-production environment is populated with test data, and the safeguards that apply when a production-derived source is used.

1. Synthetic or fixture data **SHOULD** be preferred over a de-identified or masked production extract, which **SHOULD** be reserved for a need synthetic data cannot satisfy, such as performance testing's realistic volume or reproducing a specific production issue.
2. A non-production environment **MUST** be populated only from synthetic data, a de-identified or masked production extract, or a purpose-built fixture dataset.
3. Unmodified production data **MUST NOT** be copied, replicated, or restored into a non-production environment.
4. A de-identification or masking technique applied to a production-derived extract **MUST** be irreversible, preserve referential relationships, and be verified resistant to re-identification before use.
5. Use of a de-identified or masked production extract **MUST** be authorised in advance and recorded with an expiry.
6. Each production-derived extract populating a non-production environment **MUST** be logged, recording its source, destination, and the authorisation it was approved under.

#### References

- [Privacy by Design](../../principles/privacy-by-design.md)

### Test Data Scope

These requirements describe how a test dataset is scoped to the test it supports, rather than defaulting to whatever data is already available.

1. A test dataset **MUST** be representative of the conditions relevant to the test it supports, such as realistic volume, distribution, or boundary values.
2. A test dataset **SHOULD** be limited to the volume and scope a test genuinely requires, not a full-scale replica of production.

#### References

- [Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)
- [Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Test Data Lifecycle

These requirements address how a test dataset is provisioned and deleted without disrupting production.

1. Provisioning and deletion of a test dataset **MUST** each be available to a team on demand through an automated process that is documented well enough for the team to operate and maintain it.
2. An individual team member **MUST NOT** need personal access to a production environment to run this process; the access required **MUST** be held by the process itself, scoped to least privilege.
3. Retrieval of data from a production source by this process **MUST NOT** degrade the production environment's performance.
4. Masking or de-identification of a production-derived extract **MUST** be performed automatically as part of this process, rather than as a separate manual step.
5. A test dataset derived from production **MUST** be deleted once the testing activity it supports concludes.

#### References

- [Testability by Design](../../principles/testability-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Privacy by Design](../../principles/privacy-by-design.md)
- [Security by Design](../../principles/security-by-design.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Automation First](../../principles/automation-first.md)
- [Runbooks](../operations-observability/runbooks.md)
