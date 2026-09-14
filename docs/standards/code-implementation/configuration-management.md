---
last_edited: 2026-09-14
---

# Configuration Management

## Externalised Configuration

### Summary

A setting that varies by environment comes from outside a service's source code, embedded defaults remain safe fallbacks, and the same build runs everywhere unmodified.

### Standards

1. A setting whose value varies by environment or deployment **MUST** be supplied to a service from an external source, such as an environment variable or configuration file. `std-code-externalised-configuration-01`
2. A build artifact **MUST NOT** be modified or rebuilt to change a configuration value. `std-code-externalised-configuration-02`
3. The same build **MUST** be deployable to every environment unchanged. `std-code-externalised-configuration-03`
4. A default value embedded in source code **SHOULD** be limited to a safe fallback. `std-code-externalised-configuration-04`
5. A default value embedded in source code **MUST NOT** be relied upon to supply a production value. `std-code-externalised-configuration-05`

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Configuration as Code

### Summary

Non-secret configuration is version-controlled as code and removed when it is no longer read.

### Standards

1. Configuration that is not a secret or credential **MUST** be stored in a version-controlled repository as its authoritative source. `std-code-configuration-as-code-01`
2. Configuration **SHOULD** be stored as a structured, declarative file, such as YAML, JSON, or `.env`. `std-code-configuration-as-code-02`
3. A setting no longer read by a service **MUST** be removed from its configuration in the same change that removes its use in code. `std-code-configuration-as-code-03`

### Related Standards

- [Version Control](version-control.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Secrets

### Summary

A service references each runtime secret through a dedicated secrets management mechanism and excludes plaintext secrets from configuration artifacts.

### Standards

1. A configuration file, environment variable definition, or other configuration artifact **MUST NOT** contain a secret, credential, or other sensitive value in plain text. `std-code-secrets-01`
2. Where a service requires a secret at runtime, its configuration **MUST** reference the secret's location in a dedicated secrets management mechanism. `std-code-secrets-02`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Environment Consistency

### Summary

A configuration uses a consistent structure across environments while allowing environment-specific settings.

### Standards

1. A configuration's structure, such as its keys, sections, or schema, **SHOULD** remain consistent across environments. `std-code-environment-consistency-01`
2. A setting's value **MAY** differ between environments. `std-code-environment-consistency-02`
3. A setting required for a service to operate in an environment **MUST** resolve to a value in that environment, whether declared directly or inherited from a shared base configuration. `std-code-environment-consistency-03`
4. An environment-specific configuration value **MUST** be supplied through that environment's own configuration source. `std-code-environment-consistency-04`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Configuration Validation

### Summary

A service validates its configuration at startup and reports a clear error if validation fails.

### Standards

1. A service **MUST** validate its configuration, including required settings, types, and permitted values, before completing startup. `std-code-configuration-validation-01`
2. A service **MUST** fail to start, and report an error identifying the invalid or missing setting, where its configuration fails validation. `std-code-configuration-validation-02`

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Change Control

### Summary

A configuration change deploys through the same automated pipeline as code and remains traceable to its application and authorisation, with emergency changes reviewed retrospectively.

### Standards

1. A version-controlled configuration change **MUST** be deployed through the same automated pipeline used for a source code change. `std-code-change-control-01`
2. A configuration change affecting a production environment **MUST** be traceable to the individual or automated process that applied it, and to the review that authorised it. `std-code-change-control-02`
3. An emergency configuration change applied outside the normal review process **MUST** be reviewed retrospectively as soon as practicable afterward. `std-code-change-control-03`

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Runtime Configuration

### Summary

A runtime configuration change is authorised, logged, attributable, and reversible, and user- or traffic-specific behaviour is managed through feature flags.

### Standards

1. Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change **MUST** still be authorised and logged. `std-code-runtime-configuration-01`
2. Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change **MUST** still be attributable to its source. `std-code-runtime-configuration-02`
3. A runtime configuration change **MUST** be reversible, so a service can be returned to its prior configuration without a redeployment. `std-code-runtime-configuration-03`
4. A capability that changes service behaviour per user, cohort, or percentage of traffic **SHOULD** be managed as a feature flag. `std-code-runtime-configuration-04`

### Related Standards

- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
