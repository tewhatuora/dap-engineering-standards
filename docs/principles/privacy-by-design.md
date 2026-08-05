# Privacy by Design

## Objective

Privacy by Design establishes the expectation that protections for personal and health data are built into systems and services from the outset, rather than added afterward or treated only as a compliance exercise. It supports data minimisation, purpose-limited processing, and defensible, auditable handling of personal and health data throughout the engineering lifecycle.

## Principles

### Mapping Data Flows and Safeguards Before Implementation

These principles map how personal or health data will flow, and its safeguards, before implementation.

1. How personal or health data will flow through a service, and the safeguards protecting it, must be mapped out during design.
2. A service or feature that will collect, process, or store personal or health data must not be considered ready for implementation until this mapping is complete.

### Data Minimisation by Default

These principles limit a service to collecting only the personal or health data its defined purpose needs.

1. A service must collect, process, and retain only the personal or health data necessary for its defined purpose.
2. Personal or health data must not be collected or retained speculatively for a possible future use that has not been defined.

### Privacy-Protective Default Configuration

These principles make the most privacy-protective option the default, not an opt-in.

1. Default configuration for the collection, sharing, and visibility of personal or health data must be the most privacy-protective option available.
2. Reducing the privacy protection of a default setting must require an explicit, deliberate action; it must not occur implicitly or by omission.

### De-identification & Non-Production Data Use

These principles prefer synthetic or de-identified data over production personal or health data, wherever feasible.

1. Synthetic or de-identified data must be preferred over production personal or health data for testing, development, and analytics activity, wherever feasible.
2. Synthetic or de-identified data must be preferred over production personal or health data when submitted to AI-assisted engineering tools.

#### References

[Test Data Management](../standards/quality-engineering/test-data-management.md)\
[Prompt Data Handling](../standards/ai-engineering/prompt-data-handling.md)

### Privacy Risk Assessment for New or Changed Data Flows

These principles assess privacy risk before and after a material change to a personal or health data flow.

1. A privacy risk assessment must be completed before a new service, feature, or integration introduces a new or materially changed flow of personal or health data.
2. The privacy risk assessment must be revisited when the purpose, recipients, or method of processing personal or health data changes materially from what was originally assessed.

### Defined Retention & Deletion Limits

These principles define and enforce how long personal or health data, including its backups, may be retained.

1. Personal or health data must not be retained beyond the period necessary to fulfil its defined purpose.
2. A retention period must be defined for each category of personal or health data held, and enforced through automated deletion or archival rather than relying on manual action alone.
3. Deletion of personal or health data must extend to backup and archival copies within a reasonable, defined period, not only to primary production storage.

#### References

[Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Access Restricted to Legitimate Need

These principles restrict access to personal or health data to the narrowest, legitimate need.

1. Access to personal or health data must be restricted to individuals, roles, or services with a defined, legitimate need to process it for the service's stated purpose.
2. Access to personal or health data must be granted at the narrowest scope that fulfils the legitimate need and revoked when that need ends.

#### References

[Identity & Access Management](../standards/security-identity/identity-access-management.md)
