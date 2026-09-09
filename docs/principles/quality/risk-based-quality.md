---
last_edited: 2026-09-09
---

# Risk-Based Quality

## Quality Risks Shape Assurance

### Summary

QA identifies the risks that matter to the product, service, and its users before deciding what assurance is needed.

### Reasoning

Testing based only on available test cases or familiar techniques can miss the failures that would cause the greatest harm. Quality risks can relate to functionality, clinical or patient safety, security, privacy, accessibility, performance, operations, and user experience.

Understanding these risks gives QA a clear basis for deciding what needs to be tested and where stronger evidence is required. It also helps the wider team understand why assurance effort is focused on particular areas.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Highest Risks First

### Summary

QA prioritises testing according to the likelihood of failure and the impact it would have on users, services, data, and operations.

### Reasoning

Time and testing capacity are limited, so treating every area as equally important can leave serious risks without enough attention. Testing the highest risks first provides useful evidence sooner and leaves more time to correct significant problems.

Lower priority does not mean no testing is needed. It means the amount and timing of testing reflect the risk while important lower-level risks remain visible.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Proportionate Assurance

### Summary

The scope, depth, techniques, expertise, and frequency of assurance increase with the risk and criticality of the work.

### Reasoning

A single testing approach cannot provide the right confidence for every change. High-risk work may need broader coverage, specialist input, realistic environments, independent testing, or more frequent verification. Applying the same level of assurance everywhere can under-test critical areas while spending too much effort on low-risk changes.

Proportionate assurance matches the strength of the evidence to the possible harm. This keeps effort focused without lowering the level of confidence needed for important outcomes.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Risk Is Reassessed

### Summary

QA reassesses risk and adjusts assurance when the product, its use, or the available evidence changes.

### Reasoning

A risk assessment can become outdated when functionality, architecture, dependencies, users, demand, or regulations change. Production incidents and new findings can also reveal risks that were not understood earlier.

Reassessment keeps testing focused on the product as it exists now. It allows QA to add, remove, or change assurance activities when earlier assumptions no longer hold.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Remaining Risk Stays Visible

### Summary

Untested areas, unresolved findings, and gaps in assurance remain visible, and any acceptance of the resulting risk is explicit, recorded, and made by someone accountable for the affected outcome.

### Reasoning

Testing cannot remove every risk. Hiding an untested area, disabled test, unresolved defect, or exception creates false confidence and prevents informed decisions about release and further work.

QA makes the remaining risk and its supporting evidence clear. A person accountable for the affected product, service, or business outcome decides whether to reduce, accept, or continue investigating that risk and records the basis and scope of any acceptance. Silence, delivery pressure, or incomplete testing does not constitute approval.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)
- [Release Strategy](../../standards/delivery-release/release-strategy.md)