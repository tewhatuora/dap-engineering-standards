# Configuration Management

## Summary

> Externalise a setting that varies by environment, and never let a secret live in configuration.

## Objective

This standard defines requirements for how a service's configurable settings are externalised from its source code, validated, and changed, while keeping a secret or credential out of configuration entirely. It keeps a service's behaviour adjustable across environments without a code change, and keeps every setting's value and change traceable.

## Standards

### Externalised, Non-Hardcoded Configuration

These requirements set out how a setting that varies by environment or deployment is kept out of a service's source code, so the same build runs unmodified everywhere it is deployed.

1. A setting whose value varies by environment or deployment must be supplied to a service from an external source, such as an environment variable or configuration file, rather than hardcoded in its source code.
2. A build artifact must not be modified or rebuilt to change a configuration value; the same build must be deployable to every environment unchanged.
3. A default value embedded in source code should be limited to a safe fallback, and must not be relied upon to supply a production value.

#### References

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Configuration as Code

These requirements describe how non-secret configuration is version-controlled as code and held to the same maintenance discipline as other engineering artifacts.

1. Configuration that is not a secret or credential must be stored in a version-controlled repository as its authoritative source.
2. Configuration should be stored as a structured, declarative file, such as YAML, JSON, or `.env`.
3. A setting no longer read by a service must be removed from its configuration in the same change that removes its use in code.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Version Control](version-control.md)
- [Simplicity & Maintainability](../../principles/simplicity-maintainability.md)

### Secrets Excluded from Configuration

These requirements address how a secret or credential is kept out of configuration entirely, regardless of where that configuration is stored.

1. A configuration file, environment variable definition, or other configuration artifact must not contain a secret, credential, or other sensitive value in plain text.
2. Where a service requires a secret at runtime, its configuration must reference the secret's location in a dedicated secrets management mechanism, rather than embedding the secret's value.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Security by Design](../../principles/security-by-design.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)

### Consistent Structure Across Environments

These requirements cover how a configuration's structure stays fixed across environments, so only its values, not its shape, differ between them.

1. A configuration's structure, such as its keys, sections, or schema, must remain identical across every environment; only the value assigned to a setting may differ between environments.
2. A setting required in one environment must resolve to a value in every other environment's configuration, whether declared directly or inherited from a shared base configuration, rather than added or removed for a single environment only.
3. An environment-specific configuration value must be supplied through that environment's own configuration source, not through a conditional branch in a service's source code.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Validation & Fail-Fast

These requirements guide how an invalid or incomplete configuration is caught before it affects a running service, rather than allowed to start in an undefined state.

1. A service must validate its configuration, including required settings, types, and permitted values, before completing startup.
2. A service must fail to start, and report an error identifying the invalid or missing setting, where its configuration fails validation.

#### References

- [Fast Feedback by Design](../../principles/fast-feedback-by-design.md)

### Change Control & Traceability

These requirements set out how an approved configuration change is deployed and traced, with added rigor once it reaches a production environment.

1. A configuration change must be deployed through the same automated pipeline used for a source code change, rather than applied manually to a running instance.
2. A configuration change affecting a production environment must be traceable to the individual or automated process that applied it, and to the review that authorised it.
3. An emergency configuration change applied outside the normal review process must be reviewed retrospectively as soon as practicable afterward.

#### References

- [Code Review](code-review.md)
- [Automation First](../../principles/automation-first.md)
- [Everything as Code](../../principles/everything-as-code.md)

### Runtime & Dynamic Configuration

These requirements address how a setting deliberately designed to change at runtime is still controlled and tracked, even though it does not follow the version-controlled path every other setting takes.

1. Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change must still be authorised, logged, and attributable to its source.
2. A runtime configuration change must be reversible, so a service can be returned to its prior configuration without a redeployment.
3. A capability that changes service behaviour per user, cohort, or percentage of traffic must be managed as a feature flag, not as an ad hoc runtime configuration value.

#### References

- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)
