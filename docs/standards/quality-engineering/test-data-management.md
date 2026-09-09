---
last_edited: 2026-09-09
---

# Test Data Management

## Data Sources

### Summary

Non-production environments prefer synthetic or fixture data; any production-derived extract prevents reconstruction and re-identification, preserves relationships required for testing, and has time-bounded, traceable use.

### Standards

1. `std-qe-data-sources-01` Synthetic or fixture data **SHOULD** be preferred over a de-identified or masked production extract, which **SHOULD** be reserved for a need synthetic data cannot satisfy, such as performance testing's realistic volume or reproducing a specific production issue.
2. `std-qe-data-sources-02` A non-production environment **MUST** be populated only from synthetic data, a de-identified or masked production extract, or a purpose-built fixture dataset.
3. `std-qe-data-sources-03` Unmodified production data **MUST NOT** be copied, replicated, or restored into a non-production environment.
4. `std-qe-data-sources-04` A production-derived extract **MUST NOT** permit its original values to be reconstructed from the transformed data or any retained mapping or key.
5. `std-qe-data-sources-05` A production-derived extract **MUST** preserve the referential relationships required by the testing activity.
6. `std-qe-data-sources-06` A production-derived extract **MUST NOT** permit an individual to be re-identified using information reasonably available in its intended environment.
7. `std-qe-data-sources-07` Use of a production-derived extract **MUST** have a defined expiry before it begins.
8. `std-qe-data-sources-08` Each production-derived extract populating a non-production environment **MUST** be traceable to its source, destination, and expiry.

### Implements These Principles

- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Testability](../../principles/quality/testability.md)

## Dataset Scope

### Summary

A test dataset is representative of the conditions under test and limited to the required volume and scope.

### Standards

1. `std-qe-dataset-scope-01` A test dataset **MUST** be representative of the conditions relevant to the test it supports, such as realistic volume, distribution, or boundary values.
2. `std-qe-dataset-scope-02` A test dataset **SHOULD** be limited to the volume and scope a test genuinely requires.

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Dataset Lifecycle

### Summary

Test datasets are provisioned on demand, masked or de-identified, and deleted after testing through a documented, automated least-privilege process that does not require personal production access or degrade production performance.

### Standards

1. `std-qe-dataset-lifecycle-01` Provisioning and deletion of a test dataset **MUST** each be available to a team on demand through an automated process that is documented well enough for the team to operate and maintain it.
2. `std-qe-dataset-lifecycle-02` An individual team member **MUST NOT** need personal access to a production environment to provision or delete a test dataset.
3. `std-qe-dataset-lifecycle-03` Access used to provision or delete a test dataset **MUST** be held by the automated process and scoped to least privilege.
4. `std-qe-dataset-lifecycle-04` Retrieving production data to provision a test dataset **MUST NOT** cause the production environment to breach its performance or capacity targets.
5. `std-qe-dataset-lifecycle-05` Masking or de-identification of a production-derived extract **MUST** be performed automatically when the test dataset is provisioned.
6. `std-qe-dataset-lifecycle-06` A test dataset derived from production **MUST** be deleted once the testing activity it supports concludes.

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Testability](../../principles/quality/testability.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Automation](../../principles/engineering-practice/automation.md)
