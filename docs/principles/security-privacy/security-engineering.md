---
last_edited: 2026-09-10
---

# Security Engineering

## Least Privilege

### Summary

Services and identities receive only the access needed for their defined function, with access denied by default and removed when no longer required.

### Reasoning

Every permission increases the systems, actions, and data available to a service or identity. Access beyond the current function allows a mistake, misuse, or compromise to affect resources that the legitimate work does not require.

Denying access by default prevents permissions from being granted through omission. Narrow grants limit the immediate impact of a failure, while removing them when the need ends prevents old access from remaining available unnoticed.

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
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Elevated Access

### Summary

Elevated production access is granted separately for a specific need, is never held permanently, and remains attributable to the person using it.

### Reasoning

Administrative actions and access to production data can have greater impact than routine operational work. If routine credentials also carry that authority, their misuse or compromise can change critical systems and expose sensitive data without any additional barrier.

Granting elevated access separately limits how long that capability exists and makes its use visible. Individual attribution preserves the evidence needed to understand who performed an action and investigate its effect.

### Implemented By These Standards

- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Secure Defaults

### Summary

The most secure configuration applies by default, and reducing that protection requires an explicit decision.

### Reasoning

Configuration often remains in its initial state, so an insecure default can expose a service or its data without anyone deciding that the risk is acceptable. A secure starting point protects the system when a setting is overlooked or left unchanged.

Requiring an explicit change makes any reduction in protection visible. The person making it must decide that the less secure configuration is needed rather than receiving it through omission.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Attack Surface Reduction

### Summary

Capabilities and components that a service does not need are disabled or removed.

### Reasoning

Every exposed capability or installed component adds code, configuration, and access that can contain a weakness or be misused. Retaining functionality that the service does not need creates this exposure without supporting a current requirement.

Removing unused capabilities reduces the behaviour that must be secured, monitored, updated, and understood during an incident. It also limits the options available to someone attempting to compromise the service.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Defence in Depth

### Summary

Independent layers of security controls limit how far one control failure or compromise can spread.

### Reasoning

Any security control can fail, be misconfigured, or be bypassed. When protection depends on one control, that failure can expose every system and item of data behind it.

Independent controls require a compromise to overcome more than one form of protection. Segmentation and isolation also restrict what can be reached, limiting the impact even when an earlier control has failed.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)

## Secure Development

### Summary

Secure coding, automated analysis, and informed review address security weaknesses throughout development and delivery.

### Reasoning

Security weaknesses become more costly to correct after other code depends on them or they reach production. Secure coding practices reduce the chance that these weaknesses are introduced, while early detection allows them to be corrected with less rework and user impact.

Automated analysis can find known patterns consistently across each change. Informed review adds the design and system context needed to identify risks that a tool cannot determine from code alone.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [API Design](../../standards/architecture-system-design/api-design.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)

## Security Verification

### Summary

Security controls are tested throughout development and operation to provide continuing evidence that they work.

### Reasoning

A security control can be present without preventing the behaviour it was designed to stop. Testing shows whether the control works under the conditions it is expected to handle rather than treating its configuration as proof of effectiveness.

Services and threats change over time, so evidence from an earlier test does not remain sufficient indefinitely. Repeated testing detects regressions and weaknesses introduced as the service, its dependencies, and its operating environment evolve.

### Implemented By These Standards

- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)

## Time-Bound Security Exceptions

### Summary

A temporary security exception is explicit, justified, protected by compensating controls, and returned to active remediation when it expires.

### Reasoning

Immediate remediation is not always feasible, but the unresolved weakness continues to expose the affected systems and data. An informal exception obscures that exposure, while an indefinite one allows temporary acceptance to become a permanent gap in protection.

Recording the scope, justification, and compensating controls makes the accepted risk clear and shows how it is limited in the meantime. An expiry bounds how long remediation can be deferred and returns the weakness to active work when that period ends.

### Implemented By These Standards

- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Supply Chain Security

### Summary

Dependencies are kept current and scanned for known vulnerabilities, while delivery tooling and third-party components are protected against tampering.

### Reasoning

Dependencies and delivery tooling allow externally maintained code and systems to influence a service and the artifacts it runs. A known vulnerability or compromised component can therefore enter through the supply chain even when the service's own code is secure.

Keeping dependencies current and scanning them makes known weaknesses visible and supports timely correction. Protecting component sources, build tooling, and artifact integrity reduces the opportunity for tampered code to enter or remain in the delivery path.

### Implemented By These Standards

- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Software Supply Chain Security](../../standards/security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Secrets Management

### Summary

Secrets remain outside source control and are managed in a dedicated system that restricts access and supports rotation.

### Reasoning

A secret committed to source control remains in repository history even after it is removed from the latest version. Every clone, backup, artifact, or log containing that history can preserve the value and expose it to people and systems that do not need it.

A dedicated secrets system limits access to the identities that require the value and records secret handling separately from source code. It also supports rotation without changing or rebuilding the code, configuration, and deployment artifacts that refer to the secret.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
