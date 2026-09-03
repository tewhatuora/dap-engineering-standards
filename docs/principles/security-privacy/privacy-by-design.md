# Privacy by Design

## Summary

> Collect only the personal or health data a purpose needs, defaulting to the most private option.

## Principles

### Early Data Flow Mapping

> A service's personal or health data flows and safeguards are mapped out during design, before implementation is considered ready.

1. How personal or health data will flow through a service, and the safeguards protecting it, **MUST** be mapped out during design.
2. A service or feature that will collect, process, or store personal or health data **MUST NOT** be considered ready for implementation until this mapping is complete.

### Data Minimisation by Default

> A service collects only the personal or health data its defined purpose needs, never a speculative future use.

1. A service **MUST** collect, process, and retain only the personal or health data necessary for its defined purpose.
2. Personal or health data **MUST NOT** be collected or retained speculatively for a possible future use that has not been defined.

### Privacy-Protective Defaults

> The most privacy-protective option is the default; reducing it takes an explicit, deliberate action, never an implicit one.

1. Default configuration for the collection, sharing, and visibility of personal or health data **MUST** be the most privacy-protective option available.
2. Reducing the privacy protection of a default setting **MUST** require an explicit, deliberate action; it **MUST NOT** occur implicitly or by omission.

### Synthetic & De-Identified Data

> Synthetic or de-identified data is preferred over production data, for testing and for an AI-assisted engineering tool alike.

1. Synthetic or de-identified data **MUST** be preferred over production personal or health data for testing, development, and analytics activity, wherever feasible.
2. Synthetic or de-identified data **MUST** be preferred over production personal or health data when submitted to AI-assisted engineering tools.

#### References

- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Prompt Data Handling](../../standards/ai-engineering/prompt-data-handling.md)

### Privacy Risk Assessment

> A privacy risk assessment happens before a new or materially changed personal data flow, and is revisited when that flow changes.

1. A privacy risk assessment **MUST** be completed before a new service, feature, or integration introduces a new or materially changed flow of personal or health data.
2. The privacy risk assessment **MUST** be revisited when the purpose, recipients, or method of processing personal or health data changes materially from what was originally assessed.

### Retention & Deletion Limits

> Personal or health data is retained only as long as its purpose needs, with deletion automated and extended to backups too.

1. Personal or health data **MUST NOT** be retained beyond the period necessary to fulfil its defined purpose.
2. A retention period **MUST** be defined for each category of personal or health data held, and enforced through automated deletion or archival rather than relying on manual action alone.
3. Deletion of personal or health data **MUST** extend to backup and archival copies within a reasonable, defined period, not only to primary production storage.

#### References

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)

### Least-Privilege Data Access

> Access to personal or health data is scoped to the narrowest legitimate need, and revoked the moment that need ends.

1. Access to personal or health data **MUST** be restricted to individuals, roles, or services with a defined, legitimate need to process it for the service's stated purpose.
2. Access to personal or health data **MUST** be granted at the narrowest scope that fulfils the legitimate need and revoked when that need ends.

#### References

- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)
