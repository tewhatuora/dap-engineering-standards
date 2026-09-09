---
last_edited: 2026-09-09
---

# Automation

## Pipeline Automation

### Summary

Repeatable delivery pipeline work is automated by default, and feasible manual steps represent incomplete automation.

### Reasoning

Manual execution of repeatable delivery work consumes engineering time and permits avoidable variation. Automation provides repeatable execution and prevents recurring manual steps from becoming accepted practice.

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

Automation applies to repeatable engineering and operational work beyond delivery pipelines.

### Reasoning

Repeatable work outside delivery pipelines has the same consistency and efficiency concerns as delivery activity. Matching the automation approach to the task's complexity avoids introducing unnecessary operational burden.

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

Automation logic is version-controlled and maintained as an engineering artifact.

### Reasoning

Version control makes automation definitions reviewable and traceable. Ongoing maintenance prevents automation from drifting from the processes it enforces.

Risk-proportionate testing and validation provide evidence that automation remains current and behaves as intended.

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

Automation performs repeatable mechanical checks, while decisions that require context or novel tradeoffs remain subject to human judgement and review.

### Reasoning

Novel design tradeoffs and unanticipated exceptions require context and judgement that a repeatable automated process cannot supply. Automation frees engineering capacity for these decisions by taking on repetitive execution.

Automated delivery pipeline gates apply rule-based checks consistently and stop known failures from progressing. Passing gates do not replace human code review and approval, which remains focused on the judgement calls that automated checks cannot make.

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
