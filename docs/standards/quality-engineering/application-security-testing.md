---
last_edited: 2026-09-09
---

# Application Security Testing

## Static Testing (SAST)

### Summary

Supported SAST tooling and rule sets automatically scan every proposed code change in the build pipeline.

### Standards

1. `std-qe-static-testing-sast-01` A service's source code **MUST** be scanned for security weaknesses using SAST tooling, automatically, as part of its build pipeline.
2. `std-qe-static-testing-sast-02` SAST **MUST** be triggered by every proposed code change, so a weakness can be identified before the change is merged.
3. `std-qe-static-testing-sast-03` SAST tooling and its rule sets **MUST** use supported versions that receive security and vulnerability-detection updates.

### Related Standards

- [Static Code Analysis](../code-implementation/static-code-analysis.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Fuzz Testing

### Summary

Fuzz testing targets a service that parses untrusted input or contains memory-unsafe code and runs automatically as its code changes.

### Standards

1. `std-qe-fuzz-testing-01` A service that parses untrusted input or contains memory-unsafe code **SHOULD** be tested using fuzz testing to uncover crashes, memory-safety weaknesses, or unhandled exceptions that static and dynamic testing may not surface.
2. `std-qe-fuzz-testing-02` Where used, fuzz testing **MUST** be integrated into a service's build or test pipeline, so it runs automatically as the service's code changes.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Penetration Testing

### Summary

A service that introduces attack surface, handles sensitive functionality, or processes sensitive data undergoes independent penetration testing before release and after each material change.

### Standards

1. `std-qe-penetration-testing-01` Penetration testing **MUST** be performed by a party independent of the team that designed or built the service under test, whether an internal specialist function or an accredited external provider.
2. `std-qe-penetration-testing-02` A service that introduces attack surface, handles sensitive functionality, or processes sensitive data **MUST** undergo penetration testing before its initial release to production.
3. `std-qe-penetration-testing-03` Penetration testing **MUST** be repeated whenever a material change to a service's architecture or attack surface occurs after the service's initial release to production.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)

## Dynamic Testing (DAST)

### Summary

DAST automatically tests every externally reachable interface of a running production service after release and on a recurring, risk-proportionate schedule.

### Standards

1. `std-qe-dynamic-testing-dast-01` A service exposing a network-reachable interface **MUST** be tested using DAST tooling against its running production instance.
2. `std-qe-dynamic-testing-dast-02` DAST **MUST** be performed automatically as part of a service's release pipeline, after it reaches production.
3. `std-qe-dynamic-testing-dast-03` DAST **MUST** also be repeated on a recurring, risk-proportionate schedule, so a continuously deployed service remains verified between releases.
4. `std-qe-dynamic-testing-dast-04` DAST scope **MUST** cover every externally reachable interface and API a service exposes.

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Security Findings

### Summary

Findings are classified by severity; critical or high pre-release findings block release until remediated or risk-accepted, post-deployment findings are triaged and mitigated, and remediation is verified before closure.

### Standards

1. `std-qe-security-findings-01` Findings **MUST** be classified by severity using a recognised scoring method, such as the Common Vulnerability Scoring System (CVSS).
2. `std-qe-security-findings-02` A critical or high-severity finding identified before a release **MUST** have that release blocked until the finding is remediated or formally risk-accepted.
3. `std-qe-security-findings-03` A finding identified after deployment **MUST** instead be triaged and mitigated according to the response process required for a post-deployment finding.
4. `std-qe-security-findings-04` Remediation of a finding **MUST** be verified using the same technique that identified it, before the finding is closed.

### Related Standards

- [Vulnerability & Dependency Management](../security-identity/vulnerability-dependency-management.md)
- [Continuous Delivery & Deployment](../delivery-release/continuous-delivery-deployment.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
