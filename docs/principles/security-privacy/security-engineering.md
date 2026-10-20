---
last_edited: 2026-10-21
---

# Security Engineering

## Least Privilege

### Summary

Services and identities receive only the access needed for their defined function, with access denied by default and removed when no longer required.

### Reasoning

Every permission gives a service or identity more access to systems, actions, or data. Unneeded access lets mistakes, misuse, or compromise affect resources outside the service's or identity's intended function.

Denying access by default prevents accidental grants when no one has made an access decision. Limited permissions reduce the immediate impact of a failure. Removing them when the need ends keeps old access from staying available unnoticed.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Elevated Access

### Summary

Elevated production access is granted separately for a specific need, is never permanent, and can always be traced to the person using it.

### Reasoning

Administrative actions and access to production data can have more impact than routine operational work. If routine credentials also grant that authority, misuse or compromise can lead to changes to critical systems or exposure of sensitive data without an additional barrier.

Granting elevated access separately limits how long it is available and makes its use visible. Linking each action to a person provides the evidence needed to investigate who acted and what happened as a result.

### Implemented By These Standards

- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Secure Defaults

### Summary

The most secure configuration applies by default, and reducing that protection requires an explicit decision.

### Reasoning

Settings often stay unchanged, so an insecure default can expose a service or its data without anyone accepting the risk. A secure default protects the system when a setting is overlooked or left unchanged.

An explicit change makes any reduction in protection visible. The person changing the setting decides that the less secure configuration is needed rather than receiving it by default.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)

## Attack Surface Reduction

### Summary

Capabilities and components that a service does not need are disabled or removed.

### Reasoning

Every exposed capability or installed component adds code, configuration, and access that may have weaknesses or be misused. Keeping functionality the service does not need adds exposure without meeting a current requirement.

Removing unused capabilities leaves less behaviour to secure, monitor, update, and understand during an incident. It also gives someone trying to compromise the service fewer options.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Feature Flagging](../../standards/delivery-release/feature-flagging.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Defence in Depth

### Summary

Independent layers of security controls limit how far one control failure or compromise can spread.

### Reasoning

Any security control can fail, be misconfigured, or be bypassed. If protection depends on one control, its failure can expose all the systems and data behind it.

Independent controls mean that compromising one does not bypass every form of protection. Segmentation and isolation also limit which resources can be reached, reducing the impact when an earlier control fails.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Secure Development

### Summary

Secure coding, automated analysis, and informed review address security weaknesses throughout development and delivery.

### Reasoning

Security weaknesses cost more to fix once other code depends on them or they reach production. Secure coding practices reduce the chance of introducing them. Early detection lets engineers fix them with less rework and less impact on users.

Automated analysis can consistently find known patterns in each change. Informed review adds design and system context to identify risks that tools cannot assess from code alone.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)

## Security Verification

### Summary

Security controls are tested throughout development and operation to provide up-to-date evidence that they work.

### Reasoning

A security control can be in place without stopping the behaviour it was designed to prevent. Testing shows whether it works under expected conditions. Configuration alone does not prove that a control is effective.

Services and threats change, so earlier test results do not remain sufficient indefinitely. Repeated testing detects regressions and weaknesses as the service, its dependencies, and its operating environment evolve.

### Implemented By These Standards

- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Temporary Security Exceptions

### Summary

A temporary security exception is explicit, justified, and backed by compensating controls, and its underlying weakness returns to active remediation when the exception expires.

### Reasoning

An immediate fix is not always feasible, but the unresolved weakness still exposes the affected systems and data. An informal exception hides that exposure. An indefinite exception lets temporary acceptance become a permanent gap in protection.

Recording the scope, justification, and compensating controls makes the accepted risk clear and shows how it is limited until a fix is made. An expiry limits how long the fix can be deferred; remediation resumes when that period ends.

### Implemented By These Standards

- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Supply Chain Security

### Summary

Dependencies are kept current and scanned for known vulnerabilities, while delivery tooling and third-party components are protected against tampering.

### Reasoning

Dependencies and delivery tooling let externally maintained code and systems affect a service and the artifacts it runs. A known vulnerability or compromised component can enter through the supply chain even when the service's own code is secure.

Keeping dependencies current and scanning them reveals known weaknesses so engineers can fix them promptly. Protecting component sources, build tooling, and artifact integrity reduces the chance that tampered code enters or stays in the delivery path.

### Implemented By These Standards

- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Software Supply Chain Security](../../standards/security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Secrets Management

### Summary

Secrets stay outside source control and are managed in a dedicated system that limits access and supports rotation.

### Reasoning

A secret committed to source control stays in repository history even after it is removed from the latest version. Clones, backups, artifacts, or logs containing that history can retain the secret and expose it to people and systems that do not need it.

A dedicated secrets system limits access to identities that need the value and records secret handling separately from source code. It also supports rotation without changing or rebuilding the code, configuration, and deployment artifacts that reference the secret.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
