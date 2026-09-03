# Configuration Management

## Summary

> Externalise a setting that varies by environment, and never let a secret live in configuration.

## Standards

### Externalised, Non-Hardcoded Configuration

> A setting that varies by environment comes from outside a service's source code, so the same build runs everywhere unmodified.

1. A setting whose value varies by environment or deployment **MUST** be supplied to a service from an external source, such as an environment variable or configuration file, rather than hardcoded in its source code.
2. A build artifact **MUST NOT** be modified or rebuilt to change a configuration value; the same build **MUST** be deployable to every environment unchanged.
3. A default value embedded in source code **SHOULD** be limited to a safe fallback, and **MUST NOT** be relied upon to supply a production value.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Configuration as Code

> Non-secret configuration is version-controlled as code, and removed the moment it is no longer read.

1. Configuration that is not a secret or credential **MUST** be stored in a version-controlled repository as its authoritative source.
2. Configuration **SHOULD** be stored as a structured, declarative file, such as YAML, JSON, or `.env`.
3. A setting no longer read by a service **MUST** be removed from its configuration in the same change that removes its use in code.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Version Control](version-control.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

### Secrets Excluded from Configuration

> A secret never appears in configuration in plain text; a service references it through a secrets management mechanism.

1. A configuration file, environment variable definition, or other configuration artifact **MUST NOT** contain a secret, credential, or other sensitive value in plain text.
2. Where a service requires a secret at runtime, its configuration **MUST** reference the secret's location in a dedicated secrets management mechanism, rather than embedding the secret's value.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Security by Design](../../principles/security-privacy/security-by-design.md)

### Consistent Structure Across Environments

> A configuration's structure stays identical across environments; only its values differ between them.

1. A configuration's structure, such as its keys, sections, or schema, **MUST** remain identical across every environment; only the value assigned to a setting **MAY** differ between environments.
2. A setting required in one environment **MUST** resolve to a value in every other environment's configuration, whether declared directly or inherited from a shared base configuration, rather than added or removed for a single environment only.
3. An environment-specific configuration value **MUST** be supplied through that environment's own configuration source, not through a conditional branch in a service's source code.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Validation & Fail-Fast

> A service validates its configuration at startup, and fails fast with a clear error rather than starting in an undefined state.

1. A service **MUST** validate its configuration, including required settings, types, and permitted values, before completing startup.
2. A service **MUST** fail to start, and report an error identifying the invalid or missing setting, where its configuration fails validation.

#### References

- [Fast Feedback by Design](../../principles/engineering-practice/fast-feedback-by-design.md)

### Change Control & Traceability

> A configuration change deploys through the same automated pipeline as code, traceable to who authorised it.

1. A configuration change **MUST** be deployed through the same automated pipeline used for a source code change, rather than applied manually to a running instance.
2. A configuration change affecting a production environment **MUST** be traceable to the individual or automated process that applied it, and to the review that authorised it.
3. An emergency configuration change applied outside the normal review process **MUST** be reviewed retrospectively as soon as practicable afterward.

#### References

- [Code Review](code-review.md)
- [Automation First](../../principles/engineering-practice/automation-first.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

### Runtime & Dynamic Configuration

> A runtime configuration change stays authorised, logged, and reversible, even outside the usual version-controlled path.

1. Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change **MUST** still be authorised, logged, and attributable to its source.
2. A runtime configuration change **MUST** be reversible, so a service can be returned to its prior configuration without a redeployment.
3. A capability that changes service behaviour per user, cohort, or percentage of traffic **MUST** be managed as a feature flag, not as an ad hoc runtime configuration value.

#### References

- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)
