# Test Automation

## Investment in Automation

### Summary

QA invests in automation where it can reliably replace repeatable manual checks, reducing the time and cost of future testing while keeping quality evidence current.

### Reasoning

Manual regression testing consumes time and cost each time it is repeated, and results can vary when checks are performed differently. Although automation requires an initial investment to design, build, and maintain, suitable automated tests can run the same checks after each relevant change with much less repeated effort. This shortens feedback, reduces long-term testing cost, and leaves more time for testing that requires exploration and judgement.

A passing automated suite only provides evidence for the behaviours and conditions it covers. QA keeps this scope and any known gaps visible so automation is not mistaken for complete assurance.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#investment-in-automation)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Automation Is Considered Early

### Summary

QA brings automation into discovery and design so opportunities, testability needs, and constraints are understood before implementation choices make automation costly or impractical.

### Reasoning

Considering automation only after a product has been built can reveal that behaviours are difficult to observe, dependencies cannot be controlled, or the required data and environments are unavailable. Correcting these constraints later creates rework or leaves repeatable testing dependent on continued manual effort.

Early consideration allows QA and the wider team to shape testable outcomes and identify suitable test levels, data, environments, interfaces, and tooling while options remain open. It does not mean every test is automated; the decision remains based on the risk, value, and expected cost of building and maintaining the automation.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#automation-is-considered-early)

## Risk and Value-Driven Automation

### Summary

QA prioritises automation where repeated execution or risk reduction justifies the cost of building and maintaining the tests.

### Reasoning

Automated tests need time to design, build, run, and maintain. They provide the most value for stable behaviours that are checked often or where failure would have serious consequences. Tests for short-lived, rapidly changing, or subjective outcomes can cost more to automate than the evidence is worth.

Choosing automation by test count or coverage alone can leave important risks untested. QA directs automation effort toward checks that provide useful evidence and reviews that choice as the product and its risks change.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#risk-and-value-driven-automation)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Appropriate Test Level

### Summary

QA places each automated check at the lowest test level that can reliably verify the target behaviour or risk.

### Reasoning

Unit and component tests are usually faster and make failures easier to diagnose. Integration and broader tests provide evidence that components and user journeys work together, but they take longer to run and have more possible causes of failure.

Using broader tests for behaviour that can be checked at a lower level slows feedback and increases maintenance. Using only lower-level tests leaves interfaces and end-to-end outcomes unverified. QA chooses the lowest level that can provide reliable evidence for the specific outcome the automated test is intended to verify, avoiding unnecessary cost and delay.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#appropriate-test-level)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)

## Test Assets Are Maintained as Code

### Summary

Automated test code follows the same coding, formatting, review, and maintenance standards as production code.

### Reasoning

Test code affects whether a change is accepted or blocked. Applying shared Engineering standards keeps production and test code consistent, readable, and maintainable across teams and vendors.

Poorly designed or outdated tests can reject valid changes, miss defects, or produce failures that are difficult to understand. Review, refactoring, and maintenance keep tests aligned with current behaviour. Obsolete or disabled tests create a false view of what is covered and reduce trust in the results.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#test-assets-are-maintained-as-code)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Code Review](../../standards/code-implementation/code-review.md)

## Accessible Automation Source

### Summary

Automated test code is stored in an accessible, authoritative repository with the product it tests or in a shared automation repository when it is designed for reuse.

### Reasoning

Test automation stored on a personal machine or in a private location cannot be reliably reviewed, run, maintained, or recovered by the wider team. Product-specific tests kept with the product can change alongside its behaviour and remain aligned with the version they verify.

Generic test components used across products need a shared repository with clear ownership. This gives teams one current source and avoids separate copies drifting apart.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#accessible-automation-source)
- [Version Control](../../standards/code-implementation/version-control.md)

## Reuse Before Duplication

### Summary

QA reuses suitable test components and designs common automation for reuse when the same testing need exists across products.

### Reasoning

Duplicated test helpers, libraries, and generic test cases increase maintenance and can produce different results for the same quality check. Reuse keeps common behaviour consistent and allows improvements and fixes to benefit every team that uses it.

Reuse remains tied to a genuine shared need. Forcing product-specific tests into a common component can make them harder to understand and change.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#reuse-before-duplication)

## Shared Automation Ownership

### Summary

The knowledge and access needed to run and maintain automated tests remain available to the team responsible for their ongoing ownership after the team that created them is no longer involved.

### Reasoning

Automation becomes a delivery risk when the team that creates it works in isolation and retains the knowledge or access needed to operate it. When that team is no longer involved, testing can be delayed, failures can remain unresolved, and the suite can be bypassed or abandoned.

Sharing the code, configuration, operating instructions, access requirements, and test-data setup with the team responsible for ongoing ownership allows that team to run tests locally and through the delivery pipeline, diagnose failures, and maintain the suite as the product changes.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#shared-automation-ownership)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Authoritative Test Results

### Summary

A failed or intermittent automated test is treated as an unresolved defect until its cause is fixed.

### Reasoning

A failed test can indicate a product defect, a test defect, or an uncontrolled test condition. Until the cause is understood, the result cannot provide reliable evidence for a quality decision. Re-running a test until it passes can allow the underlying problem to progress.

Repeatedly bypassing failures makes teams less likely to trust and act on test results. Temporary quarantine can protect the wider suite, but the test and the resulting gap in coverage remain visible until the problem is fixed.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#authoritative-test-results)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)

## Automation Complements Human Testing

### Summary

Automation handles repeatable checks, while human testing investigates risks that require exploration, context, and judgement.

### Reasoning

Automated tests compare actual results with expectations defined in advance. They cannot identify an important behaviour that no one considered or adapt their approach when an unexpected result appears.

Human testers can follow new information, explore uncertain risks, and assess outcomes that need judgement. Combining automation with human testing provides broader evidence and prevents a passing automated suite from being treated as complete assurance.

### Implemented By These Standards

- [Test Automation](../../standards/quality-engineering/test-automation.md#automation-complements-human-testing)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)