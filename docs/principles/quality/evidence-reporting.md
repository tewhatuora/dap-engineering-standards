---
last_edited: 2026-10-21
---

# Evidence & Reporting

## Accessible Quality Evidence

### Summary

Quality evidence is stored where the responsible team and decision-makers can find and review it when needed.

### Reasoning

Evidence held in personal files, messages, or an isolated tool can be lost or become unavailable when a person leaves or access changes. This prevents the team from reviewing earlier results and can lead to testing being repeated unnecessarily.

Accessible evidence gives the team a shared view of quality and allows others to verify the basis for a decision without depending on the person who performed the testing.

### Implemented By These Standards

- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Evidence & Reporting](../../standards/quality-engineering/evidence-reporting.md)
- [Outcome Driven Assurance](../../standards/quality-engineering/outcome-driven-assurance.md)
- [Quality Roles & Responsibilities](../../standards/quality-engineering/quality-roles-responsibilities.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Complete Quality Reporting

### Summary

Quality reporting shows the tested scope, outcomes, gaps, open findings, and accepted risks relevant to the decision being made.

### Reasoning

Reporting only successful tests or headline measures can create a false view of quality. A high pass rate or coverage percentage does not show which important areas were not tested, which findings remain open, or where evidence is incomplete.

A complete report makes both confidence and uncertainty visible. This allows the team to make a decision with a clear understanding of what is known, what is unresolved, and what risk remains.

### Implemented By These Standards

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Evidence & Reporting](../../standards/quality-engineering/evidence-reporting.md)
- [Outcome Driven Assurance](../../standards/quality-engineering/outcome-driven-assurance.md)
- [Quality Roles & Responsibilities](../../standards/quality-engineering/quality-roles-responsibilities.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)

## Actionable Findings

### Summary

Quality findings explain the observed problem, expected outcome, affected area, impact, and supporting evidence, and make the required or recommended follow-up clear.

### Reasoning

A finding that states only that a test failed moves investigation work to the person receiving it. Missing severity, context, and diagnostic information delays triage and can cause an important issue to be misunderstood or ignored.

An actionable finding gives the team enough information to understand the problem, judge its priority, and begin the next step. It makes the required or recommended follow-up clear, such as investigation, correction, a risk decision, or retesting, while leaving implementation decisions with the people responsible for the affected area.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [Evidence & Reporting](../../standards/quality-engineering/evidence-reporting.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## Shared Defect Standard

### Summary

Delivery teams and vendors define and follow a shared standard for recording, classifying, prioritising, managing, verifying, and closing defects.

### Reasoning

Without a shared standard, teams can use different definitions, severity ratings, priorities, statuses, and closure criteria for the same type of issue. Incomplete records and inconsistent handling slow triage, obscure ownership and accepted risk, and make reporting across products and vendors unreliable.

A shared standard establishes a common vocabulary, minimum record content, and lifecycle for defects. It distinguishes the impact represented by severity from the order in which work is addressed, and requires remediation to be verified before closure. The standard defines the information and decisions needed to manage a defect while leaving the technical solution to the engineers responsible for the affected area.

### Implemented By These Standards

- [Evidence & Reporting](../../standards/quality-engineering/evidence-reporting.md)

## Current and Traceable Evidence

### Summary

Quality evidence is linked to the change, build, test run, environment, and product version it covers.

### Reasoning

Evidence becomes unreliable when the team cannot tell which version or conditions were tested. A later change can make an earlier result outdated, while a result from a different environment may not support the same conclusion.

Current, traceable evidence shows where a result can be applied and allows the team to verify its source. This prevents old or unrelated results from being used to support a current quality decision.

### Implemented By These Standards

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)
- [Evidence & Reporting](../../standards/quality-engineering/evidence-reporting.md)
- [Outcome Driven Assurance](../../standards/quality-engineering/outcome-driven-assurance.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)