---
last_edited: 2026-10-23
---

# Automation

## Engineering and Operations Automation

### Summary

Automation is used for repeatable engineering and operational work, including delivery pipelines.

### Reasoning

Repeating engineering and operational tasks by hand takes time, and the results can vary depending on who performs them. Automation produces consistent results, speeds up routine responses, and reduces dependence on knowledge held by a few people.

Automation also takes effort to develop and maintain. Whether it is worthwhile depends on the effort it saves and the risk it removes.

### Implemented By These Standards

- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Runbooks](../../standards/operations-observability/runbooks.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Vulnerability & Dependency Management](../../standards/security-identity/vulnerability-dependency-management.md)

## Pipeline Automation

### Summary

Repeatable delivery pipeline tasks are automated by default, and automation is incomplete while steps that could be automated remain manual.

### Reasoning

Manual pipeline steps depend on someone taking the right action at the right time. This can delay delivery and make releases inconsistent. A missed or incorrectly performed step can change the result without leaving a clear record of what happened.

Automation runs the same steps each time and records the results consistently. Engineers receive faster feedback, can compare failures more easily, and spend less time performing routine pipeline steps.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Configuration Management](../../standards/code-implementation/configuration-management.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Build & Artifact Management](../../standards/delivery-release/build-artifact-management.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Rollback Strategy](../../standards/delivery-release/rollback-strategy.md)
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

Automation repeats the same logic on every run, including any defects. Version control lets engineers review changes and trace failures to the changes that caused them.

Automation can become outdated as the systems and tasks it supports change. Regular maintenance and testing keep it working as intended.

### Implemented By These Standards

- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Code Style & Formatting](../../standards/code-implementation/code-style-formatting.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Software Supply Chain Security](../../standards/security-identity/software-supply-chain-security.md)

## Automation Supports Human Judgement

### Summary

Automation checks predefined conditions consistently, while people judge whether a change is appropriate when context or trade-offs matter.

### Reasoning

Automated checks are limited to their rules and inputs. Passing those checks does not establish that a change is right for its users or the system.

Human review considers the intended outcome and wider consequences. It can challenge assumptions and weigh trade-offs that automated checks cannot resolve.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [Branching Strategy](../../standards/code-implementation/branching-strategy.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)
- [Software Supply Chain Security](../../standards/security-identity/software-supply-chain-security.md)
