# Privacy by Design

## Summary

> Collect only the personal or health data a purpose needs, defaulting to the most private option.

## Objective

This principle establishes the expectation that protections for personal and health data are built into systems and services from the outset. It supports data minimisation, purpose-limited processing, and defensible, auditable handling of personal and health data throughout the engineering lifecycle.

## Principles

### Early Data Flow Mapping

These principles set out how a service's personal or health data flows and safeguards are mapped before implementation.

1. How personal or health data will flow through a service, and the safeguards protecting it, **MUST** be mapped out during design.
2. A service or feature that will collect, process, or store personal or health data **MUST NOT** be considered ready for implementation until this mapping is complete.

### Data Minimisation by Default

These principles describe how a service is limited to collecting only the personal or health data its defined purpose needs.

1. A service **MUST** collect, process, and retain only the personal or health data necessary for its defined purpose.
2. Personal or health data **MUST NOT** be collected or retained speculatively for a possible future use that has not been defined.

### Privacy-Protective Defaults

These principles address how the most privacy-protective option remains the default, not an opt-in.

1. Default configuration for the collection, sharing, and visibility of personal or health data **MUST** be the most privacy-protective option available.
2. Reducing the privacy protection of a default setting **MUST** require an explicit, deliberate action; it **MUST NOT** occur implicitly or by omission.

### Synthetic & De-Identified Data

These principles set out how synthetic or de-identified data is preferred over production personal or health data, wherever feasible.

1. Synthetic or de-identified data **MUST** be preferred over production personal or health data for testing, development, and analytics activity, wherever feasible.
2. Synthetic or de-identified data **MUST** be preferred over production personal or health data when submitted to AI-assisted engineering tools.

#### References

- [Test Data Management](../standards/quality-engineering/test-data-management.md)
- [Prompt Data Handling](../standards/ai-engineering/prompt-data-handling.md)

### Privacy Risk Assessment

These principles cover how privacy risk is assessed before and after a material change to a personal or health data flow.

1. A privacy risk assessment **MUST** be completed before a new service, feature, or integration introduces a new or materially changed flow of personal or health data.
2. The privacy risk assessment **MUST** be revisited when the purpose, recipients, or method of processing personal or health data changes materially from what was originally assessed.

### Retention & Deletion Limits

These principles describe how the retention of personal or health data, including its backups, is defined and enforced.

1. Personal or health data **MUST NOT** be retained beyond the period necessary to fulfil its defined purpose.
2. A retention period **MUST** be defined for each category of personal or health data held, and enforced through automated deletion or archival rather than relying on manual action alone.
3. Deletion of personal or health data **MUST** extend to backup and archival copies within a reasonable, defined period, not only to primary production storage.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Least-Privilege Data Access

These principles guide how access to personal or health data is restricted to the narrowest, legitimate need.

1. Access to personal or health data **MUST** be restricted to individuals, roles, or services with a defined, legitimate need to process it for the service's stated purpose.
2. Access to personal or health data **MUST** be granted at the narrowest scope that fulfils the legitimate need and revoked when that need ends.

#### References

- [Identity & Access Management](../standards/security-identity/identity-access-management.md)
