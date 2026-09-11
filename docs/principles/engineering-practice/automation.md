---
last_edited: 2026-09-11
---

# Automation

## Engineering and Operations Automation

### Summary

Automation applies across delivery pipelines and other repeatable engineering and operational work.

### Reasoning

Repeated manual engineering and operational work consumes time and can produce different results depending on who performs it. Automation makes the outcome consistent, shortens routine response times, and reduces reliance on knowledge held by a few people.

Automation requires development and maintenance of its own. Whether it is worthwhile depends on the effort it saves and the risk it removes.

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

## Pipeline Automation

### Summary

Repeatable delivery pipeline work is automated by default, and a manual step that can be automated is considered incomplete automation.

### Reasoning

Manual pipeline steps depend on someone acting correctly at the right time. This can delay delivery and introduce variation between releases. A missed or inconsistent step can change the result without leaving a clear record of what happened.

Automation runs the same steps each time and records the results consistently. Engineers receive faster feedback, can compare failures more easily, and spend less time on routine work.

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

## Automation as Code

### Summary

Automation logic is kept in version control and maintained like any other engineering code.

### Reasoning

Automation repeats its logic on every run, including any defects it contains. Version control makes changes reviewable and helps engineers trace a failure to the change that introduced it.

Automation can become outdated as the systems and tasks it supports change. Regular maintenance and testing keep its behaviour aligned with those changes.

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

## Automation Supports Human Judgement

### Summary

Automation checks predefined conditions consistently, while people decide whether a change is appropriate when the decision depends on context or trade-offs.

### Reasoning

Automated checks are limited to the rules and inputs they are given. A passing result shows that those rules were satisfied, but not that the change is right for its users or the system.

Human review considers the intended outcome and wider consequences. It can challenge assumptions and weigh trade-offs that automated checks cannot resolve.

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
