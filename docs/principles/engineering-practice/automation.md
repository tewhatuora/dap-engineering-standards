---
last_edited: 2026-09-11
---

# Automation

## Pipeline Automation

### Summary

Repeatable delivery pipeline work is automated by default, and feasible manual steps are treated as incomplete automation.

### Reasoning

Manual pipeline steps depend on someone performing the correct action at the correct time, which introduces avoidable delay and variation between releases. A missed or inconsistent step can affect the result without leaving a clear explanation of why one pipeline run differed from another.

Automation applies the same steps on every run and records their results in a consistent form. This gives engineers faster feedback, makes failures easier to compare and investigate, and reserves their time for changes that require judgement.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Engineering and Operations Automation

### Summary

Automation applies across delivery pipelines and other repeatable engineering and operational work.

### Reasoning

Repeated manual engineering and operational work consumes time and produces results that can vary with the person performing it. Automation makes execution consistent, shortens routine response times, and reduces reliance on knowledge held by a small number of people.

Automation also introduces software, dependencies, and failure modes that require maintenance. Matching the approach to the task's frequency, complexity, and impact prevents a simple manual cost from being replaced by a greater operational burden.

### Implemented By These Standards

- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Automation as Code

### Summary

Automation logic is kept in version control and maintained like other engineering code.

### Reasoning

A change to automation can affect every later run, so an undocumented or unreviewed change can repeat the same defect across many executions. Version control preserves what changed and why, allowing engineers to review the change and trace a later failure to its source.

Automation can also become outdated as the systems and tasks around it change. Ongoing maintenance, testing, and validation show whether it still behaves as intended, with stronger evidence needed where one repeated defect could have greater impact.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

## Automation and Human Judgement

### Summary

Automation handles repeatable mechanical checks, while human judgement and review cover decisions that depend on context or novel tradeoffs.

### Reasoning

Pipeline gates apply known rules consistently and stop recognised failures from progressing. Passing a gate shows that a change satisfied those rules, but it does not establish that the change has the right intent, handles an unanticipated exception, or fits the wider system.

Code review and approval bring product, design, and system context to decisions that cannot be fully expressed as repeatable checks. Keeping that judgement with people allows automation to support engineering decisions without being treated as a substitute for them.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)
- [Branching Strategy](../../standards/code-implementation/branching-strategy.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
