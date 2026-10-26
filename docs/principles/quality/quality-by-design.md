---
last_edited: 2026-10-23
---

# Quality by Design

## Shared Quality Ownership

### Summary

Quality is a shared responsibility across the people who define, build, test, release, operate, and support a product or service.

### Reasoning

Quality is weakened when it is treated as the responsibility of QA alone. Requirements, design, implementation, release, and operational decisions each affect whether a product meets the needs of its users and remains safe, reliable, secure, accessible, and maintainable.

Shared ownership gives each contributor responsibility for the quality consequences of their decisions. QA provides specialist assurance and an independent perspective, while product, business, engineering, delivery, operations, and vendors remain accountable for quality within their own work.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Quality Roles & Responsibilities](../../standards/quality-engineering/quality-roles-responsibilities.md)

## Shift-Left Quality Involvement

### Summary

QA contributes from discovery and design onward so quality risks, expected outcomes, testability, data, environments, and evidence needs are addressed before implementation decisions become costly to change.

### Reasoning

When QA is involved only after implementation, unclear outcomes and design constraints can first become visible during test execution. At that stage, correcting an untestable design, missing control, unsuitable environment, or misunderstood requirement can require substantial rework and delay.

Early QA involvement brings questions about risk and verification into decisions while options remain open. It complements the expertise of product, business, engineering, security, operations, and other specialists without transferring ownership of their decisions to QA.

### Implemented By These Standards

- [Outcome Driven Assurance](../../standards/quality-engineering/outcome-driven-assurance.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)

## Quality Failure Prevention

### Summary

Preventive design and development are a major source of product and service quality, and QA validates their effectiveness and identifies where they can improve.

### Reasoning

Quality is created through requirements, design, implementation, configuration, and operational decisions before formal testing begins. Clear contracts, appropriate controls, reviewable designs, and early engineering checks prevent avoidable failures and make remaining problems less costly to correct.

QA uses testing, findings, trends, and operational evidence to evaluate how effectively these preventive practices work. It identifies gaps and opportunities for improvement, while the people responsible for product, design, engineering, and operations remain accountable for deciding and implementing the appropriate changes.

### Implemented By These Standards

- [API Design](../../standards/architecture-system-design/api-design.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Schema Design & Evolution](../../standards/architecture-system-design/schema-design-evolution.md)
- [Branching Strategy](../../standards/code-implementation/branching-strategy.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [Database Migration Tooling](../../standards/code-implementation/database-migration-tooling.md)
- [Dependency & Runtime Management](../../standards/code-implementation/dependency-runtime-management.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)
- [Application Security Testing](../../standards/quality-engineering/application-security-testing.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Outcome Driven Assurance](../../standards/quality-engineering/outcome-driven-assurance.md)
- [Test Automation](../../standards/quality-engineering/test-automation.md)
- [Unit Testing](../../standards/quality-engineering/unit-testing.md)

## End-to-End Quality Outcomes

### Summary

Quality covers the complete user or service outcome across every component, team, and organisation involved.

### Reasoning

A product or service can work correctly in separate parts but still fail when those parts work together. Differences in interfaces, data, dependencies, timing, or responsibilities can prevent the expected outcome from being achieved.

Teams define complete outcomes early and consider every part involved. Assurance verifies the individual parts and their combined behaviour so gaps between them remain visible.

### Implemented By These Standards

- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
- [Health Data Interoperability](../../standards/architecture-system-design/health-data-interoperability.md)
- [Service & Domain Design](../../standards/architecture-system-design/service-domain-design.md)
- [Integration Testing](../../standards/quality-engineering/integration-testing.md)
- [Performance & Load Testing](../../standards/quality-engineering/performance-load-testing.md)