# Everything as Code

## Summary

> Version-controlled code is the source of truth; manual changes to running systems are drift to fix.

## Objective

This principle establishes version-controlled, declarative code as the authoritative definition for application and service code, infrastructure, environments, configuration, and other engineering artifacts traditionally managed through manual, ad hoc action. It reduces reliance on unreviewed changes made directly to a running system and makes engineering state reproducible, reviewable, and traceable.

## Principles

### Version-Controlled Source Code

These principles set out how all application and service code remains in version control as its authoritative source, with no exception.

1. All application and service source code **MUST** be stored in a version-controlled repository as its authoritative source, with no exception for prototypes, scripts, or short-lived work.
2. An application or service **MUST NOT** be deployed to any environment unless its code is stored in a version-controlled repository.

#### References

- [Version Control](../standards/code-implementation/version-control.md)

### Infrastructure as Code

These principles describe how infrastructure, environments, and platform resources are defined as code rather than configured manually.

1. Infrastructure, environment configuration, and platform resources **MUST** be defined as version-controlled, declarative code rather than created or modified through manual, ad hoc actions.
2. A capability that can be defined as code **MUST NOT** be provisioned or configured manually.

#### References

- [Infrastructure as Code](../standards/platform-infrastructure/infrastructure-as-code.md)

### Code as the Single Source of Truth

These principles address how a system's version-controlled code remains the single source of truth its running state is derived from, not the reverse.

1. The version-controlled code defining a system or environment **MUST** be treated as the single source of truth; its running state **MUST** be derived from that code, not the reverse.
2. A manual, out-of-band change made directly to a running system **MUST** be treated as drift to be reconciled, not a parallel source of truth.
3. A code-defined change **MUST** be applied to a running system through automated tooling rather than manual execution.

#### References

- [Automation First](automation-first.md)

### Same Review Discipline as Application Code

These principles set out how infrastructure, configuration, pipeline, and policy code is held to the same review discipline as application code.

1. A change to infrastructure, configuration, pipeline, or policy code **MUST** go through the same peer review and approval process required for application code.
2. A reviewer **MUST** be able to determine a proposed change's effect from the code itself before it is applied.

#### References

- [Code Review](../standards/code-implementation/code-review.md)

### Reproducible Environments

These principles cover how an environment is reproduced consistently from its code definition.

1. An environment **MUST** be reproducible from its code definition, enabling consistent recreation across development, test, and production instances.
2. Recreating an environment from its code definition **SHOULD** produce a functionally equivalent result without manual post-creation steps.

#### References

- [Environment Strategy](../standards/platform-infrastructure/environment-strategy.md)

### As Code Beyond Infrastructure

These principles describe how the as-code approach extends to application configuration, delivery pipelines, and database schema.

1. Everything as Code extends beyond infrastructure provisioning to application configuration, delivery pipeline definitions, and database schema changes.
2. A configuration, pipeline, or schema definition still maintained manually **MUST** be prioritised for conversion to code.

#### References

- [Configuration Management](../standards/code-implementation/configuration-management.md)
- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Continuous Delivery & Deployment](../standards/delivery-release/continuous-delivery-deployment.md)
- [Schema Design & Evolution](../standards/architecture-system-design/schema-design-evolution.md)
- [Database Migration Tooling](../standards/code-implementation/database-migration-tooling.md)

### Externalised Secrets

These principles guide how secrets and credentials stay out of code definitions entirely.

1. Code that defines infrastructure, configuration, or pipelines **MUST NOT** embed secrets, credentials, or other sensitive data directly.
2. A code-defined artifact requiring a secret **MUST** reference it from a dedicated secrets management mechanism at deployment or runtime.

#### References

- [Secrets Management & Scanning](../standards/security-identity/secrets-management-scanning.md)

### Documentation as Code

These principles address how engineering documentation remains under version control and current with the change it describes.

1. Engineering documentation describing a system or service **SHOULD** be maintained under version control alongside the source it describes, using the same review process as code changes.
2. Documentation **MUST** be updated as part of the same change that alters the behaviour it describes, not deferred to a later task.

#### References

- [Engineering Documentation Standards](../standards/documentation-collaboration/engineering-documentation-standards.md)
