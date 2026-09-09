---
last_edited: 2026-09-09
---

# Configuration Management

## Externalised Configuration

### Summary

A setting that varies by environment comes from outside a service's source code, embedded defaults remain safe fallbacks, and the same build runs everywhere unmodified.

### Standards

1. `std-code-externalised-configuration-01` A setting whose value varies by environment or deployment **MUST** be supplied to a service from an external source, such as an environment variable or configuration file.
2. `std-code-externalised-configuration-02` A build artifact **MUST NOT** be modified or rebuilt to change a configuration value.
3. `std-code-externalised-configuration-03` The same build **MUST** be deployable to every environment unchanged.
4. `std-code-externalised-configuration-04` A default value embedded in source code **SHOULD** be limited to a safe fallback.
5. `std-code-externalised-configuration-05` A default value embedded in source code **MUST NOT** be relied upon to supply a production value.

### Related Standards

- [Build & Artifact Management](../delivery-release/build-artifact-management.md)

### Implements These Principles

- [Immutable Artifacts](../../principles/delivery-release/immutable-artifacts.md)

## Configuration as Code

### Summary

Non-secret configuration is version-controlled as code and removed when it is no longer read.

### Standards

1. `std-code-configuration-as-code-01` Configuration that is not a secret or credential **MUST** be stored in a version-controlled repository as its authoritative source.
2. `std-code-configuration-as-code-02` Configuration **SHOULD** be stored as a structured, declarative file, such as YAML, JSON, or `.env`.
3. `std-code-configuration-as-code-03` A setting no longer read by a service **MUST** be removed from its configuration in the same change that removes its use in code.

### Related Standards

- [Version Control](version-control.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Secrets

### Summary

A service references each runtime secret through a dedicated secrets management mechanism and excludes plaintext secrets from configuration artifacts.

### Standards

1. `std-code-secrets-01` A configuration file, environment variable definition, or other configuration artifact **MUST NOT** contain a secret, credential, or other sensitive value in plain text.
2. `std-code-secrets-02` Where a service requires a secret at runtime, its configuration **MUST** reference the secret's location in a dedicated secrets management mechanism.

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Environment Consistency

### Summary

A configuration uses a consistent structure across environments while allowing environment-specific settings.

### Standards

1. `std-code-environment-consistency-01` A configuration's structure, such as its keys, sections, or schema, **SHOULD** remain consistent across environments.
2. `std-code-environment-consistency-02` A setting's value **MAY** differ between environments.
3. `std-code-environment-consistency-03` A setting required for a service to operate in an environment **MUST** resolve to a value in that environment, whether declared directly or inherited from a shared base configuration.
4. `std-code-environment-consistency-04` An environment-specific configuration value **MUST** be supplied through that environment's own configuration source.

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Configuration Validation

### Summary

A service validates its configuration at startup and reports a clear error if validation fails.

### Standards

1. `std-code-configuration-validation-01` A service **MUST** validate its configuration, including required settings, types, and permitted values, before completing startup.
2. `std-code-configuration-validation-02` A service **MUST** fail to start, and report an error identifying the invalid or missing setting, where its configuration fails validation.

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)

## Change Control

### Summary

A configuration change deploys through the same automated pipeline as code and remains traceable to its application and authorisation, with emergency changes reviewed retrospectively.

### Standards

1. `std-code-change-control-01` A version-controlled configuration change **MUST** be deployed through the same automated pipeline used for a source code change.
2. `std-code-change-control-02` A configuration change affecting a production environment **MUST** be traceable to the individual or automated process that applied it, and to the review that authorised it.
3. `std-code-change-control-03` An emergency configuration change applied outside the normal review process **MUST** be reviewed retrospectively as soon as practicable afterward.

### Related Standards

- [Code Review](code-review.md)

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Runtime Configuration

### Summary

A runtime configuration change is authorised, logged, attributable, and reversible, and user- or traffic-specific behaviour is managed through feature flags.

### Standards

1. `std-code-runtime-configuration-01` Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change **MUST** still be authorised and logged.
2. `std-code-runtime-configuration-02` Where a setting can be changed at runtime without redeploying a service, such as through a configuration service, the change **MUST** still be attributable to its source.
3. `std-code-runtime-configuration-03` A runtime configuration change **MUST** be reversible, so a service can be returned to its prior configuration without a redeployment.
4. `std-code-runtime-configuration-04` A capability that changes service behaviour per user, cohort, or percentage of traffic **SHOULD** be managed as a feature flag.

### Related Standards

- [Feature Flagging](../delivery-release/feature-flagging.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)

### Implements These Principles

- [Safe Delivery](../../principles/delivery-release/safe-delivery.md)
