# Test Data Management

## Objective

Test Data Management establishes requirements for how data populating a non-production environment is sourced, scoped, and deleted, so that testing does not depend on unauthorised use of production data. It directs engineering effort toward test datasets that remain representative of production and safe to hold outside it.

## Standards

### Test Data Source Requirements

These requirements govern which test data source populates a non-production environment, and the safeguards a production-derived source must meet.

1. Synthetic or fixture data should be preferred over a de-identified or masked production extract, which should be reserved for a need synthetic data cannot satisfy, such as performance testing's realistic volume or reproducing a specific production issue.
2. A non-production environment must be populated only from synthetic data, a de-identified or masked production extract, or a purpose-built fixture dataset.
3. Unmodified production data must not be copied, replicated, or restored into a non-production environment.
4. A de-identification or masking technique applied to a production-derived extract must be irreversible, preserve referential relationships, and be verified resistant to re-identification before use.
5. Use of a de-identified or masked production extract must be authorised in advance and recorded with an expiry.
6. Each production-derived extract populating a non-production environment must be logged, recording its source, destination, and the authorisation it was approved under.

#### References

[Privacy by Design](../../principles/privacy-by-design.md)

### Representative, Minimal Test Data

These requirements keep a test dataset scoped to the test it supports, rather than defaulting to whatever data is already available.

1. A test dataset must be representative of the conditions relevant to the test it supports, such as realistic volume, distribution, or boundary values.
2. A test dataset should be limited to the volume and scope a test genuinely requires, not a full-scale replica of production.

#### References

[Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)\
[Cost Awareness by Design](../../principles/cost-awareness-by-design.md)

### Test Data Lifecycle

These requirements govern how a test dataset is provisioned and deleted without disrupting production.

1. Provisioning and deletion of a test dataset must each be available to a team on demand through an automated process that is documented well enough for the team to operate and maintain it.
2. An individual team member must not need personal access to a production environment to run this process; the access required must be held by the process itself, scoped to least privilege.
3. Retrieval of data from a production source by this process must not degrade the production environment's performance.
4. Masking or de-identification of a production-derived extract must be performed automatically as part of this process, rather than as a separate manual step.
5. A test dataset derived from production must be deleted once the testing activity it supports concludes.

#### References

[Testability by Design](../../principles/testability-by-design.md)\
[Environment Strategy](../platform-infrastructure/environment-strategy.md)\
[Privacy by Design](../../principles/privacy-by-design.md)\
[Security by Design](../../principles/security-by-design.md)\
[Reliability & Resilience](../../principles/reliability-resilience.md)\
[Automation First](../../principles/automation-first.md)\
[Runbooks](../operations-observability/runbooks.md)
