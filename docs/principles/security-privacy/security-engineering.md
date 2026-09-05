# Security Engineering

## Least Privilege

### Summary

A service or identity receives only the access its defined function needs, access is denied by default, and grants are revoked when no longer required.

### Reasoning

Access beyond a service's or identity's current function increases what an error, misuse, or compromise can affect. Denying access by default prevents implicit grants, while narrowly scoped access and timely revocation limit the available paths to systems and data.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Data Access & Transaction Management](../../standards/code-implementation/data-access-transaction-management.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Secure Defaults

### Summary

The most secure configuration is the default, and reducing that protection requires an explicit decision.

### Reasoning

Secure defaults prevent an omitted configuration decision from exposing a service or its data. Requiring deliberate action to reduce a security default makes that change explicit rather than an effect of omission.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Attack Surface Reduction

### Summary

Features, ports, endpoints, accounts, packages, and tools not required for a service's function are disabled or removed.

### Reasoning

Every exposed capability or unnecessary component creates another path through which a service can be compromised. Removing what the service does not need reduces the paths that must be secured, monitored, and maintained.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)

## Defence in Depth

### Summary

Independent, layered security controls limit how far a single control failure or compromise can spread.

### Reasoning

Any security control can fail or be bypassed. Independent controls prevent one failure from exposing the whole service, while segmentation and isolation constrain the systems and data that a compromise can reach.

### Implemented By These Standards

- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)

## Secure Development

### Summary

Secure coding and static analysis apply across the engineering lifecycle, and security-relevant changes receive the same review scrutiny as other changes from reviewers able to identify common security weaknesses.

### Reasoning

Applying secure coding practices through design, build, test, and deployment identifies weaknesses before they become part of a released service. Static analysis detects known weakness patterns as code is written, while review by people able to identify common security weaknesses addresses concerns that automated analysis cannot determine from code alone.

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

Security controls are verified through testing throughout the lifecycle and are not assumed to remain effective because they were implemented.

### Reasoning

A security control can be present but ineffective because of an implementation defect, configuration error, or later change. Static, dynamic, and penetration testing provide evidence that controls work, while repeated testing detects regressions as a service evolves.

### Implemented By These Standards

- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)

## Supply Chain Security

### Summary

Dependencies remain current and scanned for known vulnerabilities, and build and deployment tooling and third-party components are protected against tampering.

### Reasoning

Dependencies and build and deployment tooling extend a service's trust boundary to externally maintained code and systems. Routine updates and scanning reduce exposure to known vulnerabilities, while immutable references, governed sources, and risk-proportionate remediation limit the opportunity for compromised components to enter or remain in the delivery path.

### Implemented By These Standards

- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Software Supply Chain Security](../../standards/security-identity/software-supply-chain-security.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Secrets Management

### Summary

Credentials, keys, and tokens stay out of source control and are managed through dedicated mechanisms that restrict access and support rotation.

### Reasoning

A secret committed to source control persists in repository history and is distributed to every copy of that history. Dedicated secrets management limits access to the identities that require it and supports rotation without embedding the value in code, configuration, or deployment artifacts.

### Implemented By These Standards

- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
