---
last_reviewed: 2026-09-09
review_cycle: 12 months
---

# Test Automation

## Investment in Automation

### Summary

Repeatable checks are automated where reliable execution and the expected reduction in risk or manual effort justify the cost of building, running, and maintaining them, with the scope of the resulting evidence and any known gaps kept visible.

### Standards

1. `std-qe-investment-in-automation-01` A team or vendor responsible for testing a product or service **MUST** identify repeatable checks that are candidates for automation and implement those where reliable execution and the expected reduction in risk or manual effort justify the cost over the automation's useful life.
2. `std-qe-investment-in-automation-02` Each automation candidate **SHOULD** be assessed against its risk and evidence value, execution frequency, expected useful life, stability, expected-result clarity, controllability, and expected build, execution, and maintenance cost.
3. `std-qe-investment-in-automation-03` A decision to retain a repeatable check as manual where it addresses an identified risk **MUST** record the reason, the resulting limitation, and the condition that would require the decision to be reassessed.
4. `std-qe-investment-in-automation-04` The behaviours and conditions covered by an automated test suite, and any known gaps in that coverage, **MUST** be identifiable from its version-controlled test assets or associated documentation.

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#investment-in-automation)

## Automation Is Considered Early

### Summary

Automation opportunities, testability needs, and constraints are identified during discovery and design, while the product or service can still be shaped to support reliable automated testing.

### Standards

1. `std-qe-automation-considered-early-01` A team or vendor responsible for delivering a product, service, or material change **MUST** consider opportunities for test automation during discovery and design, before implementation decisions constrain how the behaviour can be tested.
2. `std-qe-automation-considered-early-02` For each automation opportunity identified during discovery and design, the team or vendor **MUST** identify an owner, the expected outcome to verify, and the test level, data, environment, interfaces, dependencies, and tooling needed to produce reliable evidence.

### Related Standards

- [Test Data Management](test-data-management.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#automation-is-considered-early)

## Risk and Value-Driven Automation

### Summary

Automation effort is prioritised according to the risk addressed, the value and frequency of the resulting evidence, and the cost of maintaining it over its expected useful life.

### Standards

1. `std-qe-risk-value-driven-automation-01` A team or vendor **SHOULD** prioritise automation candidates according to the likelihood and consequence of the risk addressed, the value and expected frequency of the resulting evidence, and the expected build and maintenance cost over each candidate's useful life.
2. `std-qe-risk-value-driven-automation-02` Test count or percentage coverage **MUST NOT** be the sole basis for prioritising automation work.
3. `std-qe-risk-value-driven-automation-03` The priority of an automation candidate **SHOULD** be reassessed when a material change to the product, its risks, execution frequency, expected useful life, or maintenance cost changes its expected value.

### Related Standards

- [Unit Testing](unit-testing.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#risk-and-value-driven-automation)

## Appropriate Test Level

### Summary

Each automated check runs at the lowest test level that can reliably verify its target behaviour or risk, while interactions and broader outcomes are verified at the level where they occur.

### Standards

1. `std-qe-appropriate-test-level-01` An automated check **SHOULD** be implemented at the lowest test level that can reliably verify its target behaviour or risk.
2. `std-qe-appropriate-test-level-03` A broader automated test **SHOULD NOT** duplicate behaviour already verified reliably at a lower test level unless it provides distinct evidence about an interaction or outcome that the lower-level test cannot provide.

### Related Standards

- [Unit Testing](unit-testing.md)
- [Integration Testing](integration-testing.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#appropriate-test-level)

## Test Assets Are Maintained as Code

### Summary

Automated test code follows the same coding, formatting, review, and maintenance standards as production code and remains aligned with current behaviour.

### Standards

1. `std-qe-test-assets-maintained-as-code-01` Automated test code **MUST** comply with the coding, formatting, and review standards that apply to the production code it verifies.
2. `std-qe-test-assets-maintained-as-code-02` A change to product or service behaviour **SHOULD** include any corresponding change required to keep affected automated tests aligned with that behaviour.
3. `std-qe-test-assets-maintained-as-code-03` An automated test that no longer verifies current behaviour **SHOULD** be updated or removed.
4. `std-qe-test-assets-maintained-as-code-04` The reason for removing an automated test as no longer relevant **MUST** be recorded in the change that removes it.

### Related Standards

- [Unit Testing](unit-testing.md)
- [Integration Testing](integration-testing.md)
- [Code Style & Formatting](../code-implementation/code-style-formatting.md)
- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#test-assets-are-maintained-as-code)

## Accessible Automation Source

### Summary

Automated test assets are held in an accessible, authoritative repository with the product they verify or in a shared repository when designed for reuse.

### Standards

1. `std-qe-accessible-automation-source-01` Automated test code, configuration, and supporting assets **MUST** be stored in a designated, version-controlled repository accessible to the team responsible for running and maintaining them.
2. `std-qe-accessible-automation-source-02` Product-specific automated test assets **SHOULD** be stored in the same repository as the product or service they verify.
3. `std-qe-accessible-automation-source-03` Where product-specific automated test assets are stored separately, the product or service version each test revision verifies **MUST** be identifiable.
4. `std-qe-accessible-automation-source-04` Automated test components designed for reuse across products **SHOULD** be maintained from one shared, authoritative repository with a defined owning team.

### Related Standards

- [Version Control](../code-implementation/version-control.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#accessible-automation-source)

## Reuse Before Duplication

### Summary

Suitable test components are reused, and common automation is designed for reuse only where products share a genuine testing need.

### Standards

1. `std-qe-reuse-before-duplication-01` Existing test helpers, libraries, and other reusable automation components **SHOULD** be evaluated before a new equivalent component is created.
2. `std-qe-reuse-before-duplication-02` A suitable existing test component **SHOULD** be reused where it meets the testing need without introducing product-specific behaviour or coupling that makes the component harder to understand or maintain.
3. `std-qe-reuse-before-duplication-03` A test component intended for use across products **SHOULD** address a testing need shared by those products and expose a documented interface through which they can use it.

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#reuse-before-duplication)
- [Reuse](../../principles/engineering-practice/reuse.md)

## Shared Automation Ownership

### Summary

Each automated test suite has an accountable owning team with the information and access needed to run, diagnose, and maintain it after the team or vendor that delivered it is no longer available.

### Standards

1. `std-qe-shared-automation-ownership-01` Each automated test suite **MUST** have an accountable owning team.
2. `std-qe-shared-automation-ownership-02` A team or vendor delivering an automated test suite **MUST** make the code, configuration, instructions, test-data setup, and access requirements needed to run, diagnose, and maintain the suite available to its accountable owning team.
3. `std-qe-shared-automation-ownership-03` An automated test suite **MUST NOT** depend on information, permissions, or resources retained only by the team or vendor that delivered it.

### Related Standards

- [Version Control](../code-implementation/version-control.md)
- [Unit Testing](unit-testing.md)
- [Test Data Management](test-data-management.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#shared-automation-ownership)

## Authoritative Test Results

### Summary

A failed or intermittent automated test remains unresolved until its cause is identified and addressed, while any temporary quarantine and resulting gap in coverage remain visible.

### Standards

1. `std-qe-authoritative-test-results-01` A failed or intermittent automated test **MUST** be treated as unresolved until its cause is identified and the product defect, test defect, or uncontrolled test condition responsible is addressed.
2. `std-qe-authoritative-test-results-02` Re-running an automated test until it passes **MUST NOT** substitute for investigating and resolving its failure.
3. `std-qe-authoritative-test-results-03` A quarantined automated test **MUST** be visibly identified and tracked through remediation, with the reason for quarantine and resulting gap in coverage recorded.

### Related Standards

- [Unit Testing](unit-testing.md)
- [Integration Testing](integration-testing.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#authoritative-test-results)

## Automation Complements Human Testing

### Summary

Automated checks provide repeatable evidence, while risks requiring exploration, context, or judgement are evaluated through human testing.

### Standards

1. `std-qe-automation-complements-human-testing-01` A passing automated test suite **MUST NOT** be treated as complete assurance when identified risks or behaviours remain outside its coverage.
2. `std-qe-automation-complements-human-testing-02` An identified risk whose outcome cannot be evaluated reliably through predefined assertions **SHOULD** be evaluated through human testing that can apply exploration, context, or judgement.
3. `std-qe-automation-complements-human-testing-03` A repeatable check identified through human testing **SHOULD** be assessed as a candidate for automation.

### Related Standards

- [Accessibility Testing](accessibility-testing.md)
- [Application Security Testing](application-security-testing.md)

### Implements These Principles

- [Test Automation](../../principles/quality/test-automation.md#automation-complements-human-testing)