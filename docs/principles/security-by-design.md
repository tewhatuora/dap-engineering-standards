# Security by Design

## Objective

Security by Design establishes the expectation that protection against unauthorised access, misuse, and compromise is built into systems and services from the outset, rather than added afterward or treated only as a pre-release check. It directs engineering effort toward reducing attack surface, limiting the impact of a compromise, and maintaining verifiable security controls throughout the engineering lifecycle.

## Principles

### Threat Modelling Before Implementation Begins

These principles require a threat model or security design review before implementation begins for higher-risk work.

1. A service or feature that introduces new attack surface, handles sensitive functionality, or processes sensitive data must undergo a security design review or threat model before implementation begins.
2. Security requirements identified through this review must be addressed as part of the design.

### Least Privilege by Default

These principles grant a service or identity only the access its defined function requires.

1. A service or identity must be granted only the access and permissions required to perform its defined function.
2. Default access configuration must deny access unless explicitly granted.
3. Access no longer required for a service or identity to perform its function must be revoked.

#### References

[Identity & Access Management](../standards/security-identity/identity-access-management.md)

### Secure Defaults & Minimising Attack Surface

These principles make the most secure configuration the default and remove what a service does not need.

1. Default configuration must be the most secure option available; reducing a security default must require an explicit, deliberate action and must not occur implicitly or by omission.
2. Data in transit and at rest must be encrypted by default.
3. A feature, port, endpoint, or account not required for a service's function must be disabled or removed rather than left available unused.

### Defence in Depth & Containing Compromise

These principles layer independent controls so no single failure results in compromise.

1. Security must not rely on a single control; independent, layered controls should be used so the failure of one does not by itself result in compromise.
2. Services should be designed to limit the impact of a compromise, such as through segmentation or isolation, rather than relying solely on preventing every possible attack.

### Secure Development Practices Integrated Into the Lifecycle

These principles apply secure coding, static analysis, and review scrutiny across the whole lifecycle.

1. Secure coding practices must be applied across design, build, test, and deployment.
2. Static analysis must be used to identify security weaknesses in code as it is written.
3. A security-relevant change should receive the same review scrutiny as any other change, with reviewers able to identify common security weaknesses.

#### References

[Secure Software Development Practices](../standards/security-identity/secure-software-development-practices.md)\
[Static Code Analysis](../standards/code-implementation/static-code-analysis.md)\
[Code Review](../standards/code-implementation/code-review.md)

### Verifying Security Through Testing

These principles verify security controls through testing rather than assuming them correct because implemented.

1. Security controls must be verified through testing, including static, dynamic, or penetration testing as appropriate to risk, rather than assumed correct because they were implemented.
2. Security testing should be performed regularly throughout the lifecycle, so that security is not silently lost as a service evolves.

#### References

[Application Security Testing](../standards/quality-engineering/application-security-testing.md)

### Managing Vulnerability & Supply Chain Risk

These principles keep dependencies and build tooling current, scanned, and protected against tampering.

1. Dependencies must be kept up to date and scanned for known vulnerabilities, with critical vulnerabilities remediated within a risk-proportionate timeframe.
2. Build and deployment tooling, and the third-party components a service depends on, must be protected against tampering.

#### References

[Vulnerability & Dependency Management](../standards/security-identity/vulnerability-dependency-management.md)\
[Software Supply Chain Security](../standards/security-identity/software-supply-chain-security.md)

### Protection of Secrets & Credentials

These principles keep credentials, keys, and tokens out of source control and managed through a dedicated mechanism.

1. Credentials, keys, and tokens must not be hardcoded or stored in source control.
2. Credentials, keys, and tokens must be managed through a dedicated secrets management mechanism, with access restricted and rotation supported.

#### References

[Secrets Management & Scanning](../standards/security-identity/secrets-management-scanning.md)
