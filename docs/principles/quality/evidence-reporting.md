# Evidence & Reporting

## Accessible Quality Evidence

### Summary

Quality evidence is stored where the responsible team and decision-makers can find and review it when needed.

### Reasoning

Evidence held in personal files, messages, or an isolated tool can be lost or become unavailable when a person leaves or access changes. This prevents the team from reviewing earlier results and can lead to testing being repeated unnecessarily.

Accessible evidence gives the team a shared view of quality and allows others to verify the basis for a decision without depending on the person who performed the testing.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)

## Complete Quality Reporting

### Summary

Quality reporting shows the tested scope, outcomes, gaps, open findings, and accepted risks relevant to the decision being made.

### Reasoning

Reporting only successful tests or headline measures can create a false view of quality. A high pass rate or coverage percentage does not show which important areas were not tested, which findings remain open, or where evidence is incomplete.

A complete report makes both confidence and uncertainty visible. This allows the team to make a decision with a clear understanding of what is known, what is unresolved, and what risk remains.

### Implemented By These Standards

- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Regression Test Automation](../../standards/quality-engineering/regression-test-automation.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Reporting for the Audience

### Summary

QA presents quality information in language and detail suited to the audience and the decision they need to make.

### Reasoning

Engineers need enough detail to diagnose and correct a problem, while product owners, leaders, assurance functions, and vendors may need a clear view of impact, confidence, and remaining risk. One report can be too technical for one audience and too limited for another.

Audience-focused reporting explains what matters without removing access to the supporting evidence. This helps each audience understand the quality position and act within its responsibility.

### Implemented By These Standards

- [Release Strategy](../../standards/delivery-release/release-strategy.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)

## Actionable Findings

### Summary

Quality findings explain the observed problem, expected outcome, affected area, impact, and supporting evidence, and make the required or recommended follow-up clear.

### Reasoning

A finding that states only that a test failed moves investigation work to the person receiving it. Missing severity, context, and diagnostic information delays triage and can cause an important issue to be misunderstood or ignored.

An actionable finding gives the team enough information to understand the problem, judge its priority, and begin the next step. It makes the required or recommended follow-up clear, such as investigation, correction, a risk decision, or retesting, while leaving implementation decisions with the people responsible for the affected area.

### Implemented By These Standards

- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Shared Defect Standard

### Summary

Delivery teams and vendors define and follow a shared standard for recording, classifying, prioritising, managing, verifying, and closing defects.

### Reasoning

Without a shared standard, teams can use different definitions, severity ratings, priorities, statuses, and closure criteria for the same type of issue. Incomplete records and inconsistent handling slow triage, obscure ownership and accepted risk, and make reporting across products and vendors unreliable.

A shared standard establishes a common vocabulary, minimum record content, and lifecycle for defects. It distinguishes the impact represented by severity from the order in which work is addressed, and requires remediation to be verified before closure. The standard defines the information and decisions needed to manage a defect while leaving the technical solution to the engineers responsible for the affected area.

### Implemented By These Standards

- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Current and Traceable Evidence

### Summary

Quality evidence is linked to the change, build, test run, environment, and product version it covers.

### Reasoning

Evidence becomes unreliable when the team cannot tell which version or conditions were tested. A later change can make an earlier result outdated, while a result from a different environment may not support the same conclusion.

Current, traceable evidence shows where a result can be applied and allows the team to verify its source. This prevents old or unrelated results from being used to support a current quality decision.

### Implemented By These Standards

- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Version Control](../../standards/code-implementation/version-control.md)