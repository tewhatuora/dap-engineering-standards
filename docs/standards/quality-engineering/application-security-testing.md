# Application Security Testing

## Summary

> Catch each class of vulnerability using the technique best suited to detect it, and verify every finding's fix.

## Standards

### Static Application Security Testing (SAST)

SAST scans every proposed change automatically in the build pipeline, kept current with newly disclosed vulnerability classes.

1. A service's source code **MUST** be scanned for security weaknesses using SAST tooling, automatically, as part of its build pipeline.
2. SAST **MUST** be triggered by every proposed code change, so a weakness is identified before the change is merged.
3. SAST tooling and its rule sets **MUST** be kept current with newly disclosed vulnerability classes.

#### References

- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Security by Design](../../principles/security-by-design.md)

### Dynamic Application Security Testing (DAST)

DAST tests a service's running production instance automatically after release, and on a recurring schedule after that.

1. A service exposing a network-reachable interface **MUST** be tested using DAST tooling against its running production instance.
2. DAST **MUST** be performed automatically as part of a service's release pipeline, after it reaches production.
3. DAST **MUST** also be repeated on a recurring, risk-proportionate schedule, so a continuously deployed service remains verified between releases.
4. DAST scope **MUST** cover every externally reachable interface and API a service exposes, not only its primary user-facing entry point.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)
- [Security by Design](../../principles/security-by-design.md)

### Fuzz Testing

Fuzz testing targets a service that parses untrusted input or holds memory-unsafe code, running automatically as its code changes.

1. A service that parses untrusted input or contains memory-unsafe code **SHOULD** be tested using fuzz testing to uncover crashes, memory-safety weaknesses, or unhandled exceptions that static and dynamic testing may not surface.
2. Where fuzz testing is used, it **MUST** be integrated into a service's build or test pipeline, so it runs automatically as the service's code changes.

#### References

- [Test Data Management](test-data-management.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Penetration Testing

A service handling sensitive data or attack surface undergoes independent penetration testing before release, and after each material change.

1. Penetration testing **MUST** be performed by a party independent of the team that designed or built the service under test, whether an internal specialist function or an accredited external provider.
2. A service that introduces attack surface, handles sensitive functionality, or processes sensitive data **MUST** undergo penetration testing before its initial release to production.
3. Penetration testing **MUST** be repeated whenever a material change to a service's architecture or attack surface occurs after that release.

#### References

- [Security by Design](../../principles/security-by-design.md)

### Findings Lifecycle

A finding is classified by severity, blocks release while critical or high, and stays open until its fix is verified.

1. Findings **MUST** be classified by severity using a recognised scoring method, such as the Common Vulnerability Scoring System (CVSS).
2. A critical or high-severity finding identified before a release **MUST** have that release blocked until the finding is remediated or formally risk-accepted; a finding identified after deployment **MUST** instead be triaged and mitigated according to the response process required for a post-deployment finding.
3. Remediation of a finding **MUST** be verified using the same technique that identified it, before the finding is closed.

#### References

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)
