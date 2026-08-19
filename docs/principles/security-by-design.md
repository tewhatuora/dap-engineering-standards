# Security by Design

## Summary

> Build in least privilege and secure defaults from the outset, and verify every control through testing.

## Objective

This principle establishes the expectation that protection against unauthorised access, misuse, and compromise is built into systems and services from the outset. It keeps attack surface reduced, the impact of a compromise limited, and security controls verifiable throughout the engineering lifecycle.

## Principles

### Early Threat Modelling

These principles set out how a threat model or security design review happens before implementation begins for higher-risk work.

1. A service or feature that introduces new attack surface, handles sensitive functionality, or processes sensitive data **MUST** undergo a security design review or threat model before implementation begins.
2. Security requirements identified through this review **MUST** be addressed as part of the design.

### Least Privilege by Default

These principles describe how a service or identity is granted only the access its defined function requires.

1. A service or identity **MUST** be granted only the access and permissions required to perform its defined function.
2. Default access configuration **MUST** deny access unless explicitly granted.
3. Access no longer required for a service or identity to perform its function **MUST** be revoked.

#### References

- [Identity & Access Management](../standards/security-identity/identity-access-management.md)

### Secure Defaults & Attack Surface

These principles address how the most secure configuration remains the default and what a service does not need is removed.

1. Default configuration **MUST** be the most secure option available; reducing a security default **MUST** require an explicit, deliberate action and **MUST NOT** occur implicitly or by omission.
2. Data in transit and at rest **MUST** be encrypted by default.
3. A feature, port, endpoint, or account not required for a service's function **MUST** be disabled or removed rather than left available unused.

### Defence in Depth & Compromise Containment

These principles set out how independent controls are layered so no single failure results in compromise.

1. Security **MUST NOT** rely on a single control; independent, layered controls **SHOULD** be used so the failure of one does not by itself result in compromise.
2. Services **SHOULD** be designed to limit the impact of a compromise, such as through segmentation or isolation, rather than relying solely on preventing every possible attack.

### Secure Development Practices

These principles cover how secure coding, static analysis, and review scrutiny are applied across the whole lifecycle.

1. Secure coding practices **MUST** be applied across design, build, test, and deployment.
2. Static analysis **MUST** be used to identify security weaknesses in code as it is written.
3. A security-relevant change **SHOULD** receive the same review scrutiny as any other change, with reviewers able to identify common security weaknesses.

#### References

- [Secure Software Development Practices](../standards/security-identity/secure-software-development-practices.md)
- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)
- [Code Review](../standards/code-implementation/code-review.md)

### Continuous Security Verification

These principles describe how security controls are verified through testing rather than assumed correct because implemented.

1. Security controls **MUST** be verified through testing, including static, dynamic, or penetration testing as appropriate to risk, rather than assumed correct because they were implemented.
2. Security testing **SHOULD** be performed regularly throughout the lifecycle, so that security is not silently lost as a service evolves.

#### References

- [Application Security Testing](../standards/quality-engineering/application-security-testing.md)

### Vulnerability & Supply Chain Risk

These principles guide how dependencies and build tooling remain current, scanned, and protected against tampering.

1. Dependencies **MUST** be kept up to date and scanned for known vulnerabilities, with critical vulnerabilities remediated within a risk-proportionate timeframe.
2. Build and deployment tooling, and the third-party components a service depends on, **MUST** be protected against tampering.

#### References

- [Vulnerability & Dependency Management](../standards/security-identity/vulnerability-dependency-management.md)
- [Software Supply Chain Security](../standards/security-identity/software-supply-chain-security.md)

### Secrets Management

These principles address how credentials, keys, and tokens stay out of source control and are managed through a dedicated mechanism.

1. Credentials, keys, and tokens **MUST NOT** be hardcoded or stored in source control.
2. Credentials, keys, and tokens **MUST** be managed through a dedicated secrets management mechanism, with access restricted and rotation supported.

#### References

- [Secrets Management & Scanning](../standards/security-identity/secrets-management-scanning.md)
