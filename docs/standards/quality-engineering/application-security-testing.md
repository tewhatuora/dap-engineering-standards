# Application Security Testing

## Objective

Application Security Testing verifies that a service's code and running behaviour are free of exploitable security weaknesses, combining static analysis, dynamic testing, fuzz testing, and penetration testing so each class of vulnerability is caught by the technique best suited to it, with findings remediated before they reach production.

## Standards

### Static Application Security Testing (SAST)

These requirements integrate automated static analysis into a service's build pipeline, so a security weakness in its source code is surfaced as early in the lifecycle as possible.

1. A service's source code must be scanned for security weaknesses using SAST tooling, automatically, as part of its build pipeline.
2. SAST must be triggered by every proposed code change, so a weakness is identified before the change is merged.
3. SAST tooling and its rule sets must be kept current with newly disclosed vulnerability classes.

#### References

[Static Code Analysis](../code-implementation/static-code-analysis.md)\
[Continuous Integration](../delivery-release/continuous-integration.md)\
[Security by Design](../../principles/security-by-design.md)

### Dynamic Application Security Testing (DAST)

These requirements test a running instance of a service for vulnerabilities that only become exploitable at runtime.

1. A service exposing a network-reachable interface must be tested using DAST tooling against a running instance, in an environment isolated from production but representative of it.
2. DAST must be performed automatically as part of a service's release pipeline, before it reaches production.
3. DAST must also be repeated on a recurring, risk-proportionate schedule, so a continuously deployed service remains verified between releases.
4. DAST scope must cover every externally reachable interface and API a service exposes, not only its primary user-facing entry point.

#### References

[Environment Strategy](../platform-infrastructure/environment-strategy.md)\
[Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)\
[Security by Design](../../principles/security-by-design.md)

### Fuzz Testing

These requirements apply automated fuzz testing to a service where its input handling makes the technique valuable, complementing SAST and DAST with generated and malformed inputs.

1. A service that parses untrusted input or contains memory-unsafe code should be tested using fuzz testing to uncover crashes, memory-safety weaknesses, or unhandled exceptions that static and dynamic testing may not surface.
2. Where fuzz testing is used, it must be integrated into a service's build or test pipeline, so it runs automatically as the service's code changes.

#### References

[Test Data Management](test-data-management.md)\
[Continuous Integration](../delivery-release/continuous-integration.md)

### Penetration Testing

These requirements apply independent, specialist testing to a service beyond what automated tooling alone can verify.

1. Penetration testing must be performed by a party independent of the team that designed or built the service under test, whether an internal specialist function or an accredited external provider.
2. A service that introduces attack surface, handles sensitive functionality, or processes sensitive data must undergo penetration testing before its initial release to production.
3. Penetration testing must be repeated whenever a material change to a service's architecture or attack surface occurs after that release.

#### References

[Security by Design](../../principles/security-by-design.md)

### Findings Classification, Remediation & Release Gating

These requirements define how findings are classified, remediated, and verified before a service is released.

1. Findings must be classified by severity using a recognised scoring method, such as the Common Vulnerability Scoring System (CVSS).
2. A critical or high-severity finding must be remediated within a risk-proportionate timeframe, and its release must be blocked until it is remediated or formally risk-accepted.
3. Remediation of a finding must be verified using the same technique that identified it, before the finding is closed.

#### References

[Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
