---
last_edited: 2026-09-09
---

# Cost Awareness

## Lifecycle Cost Decisions

### Summary

Design and technology choices compare viable options by total lifecycle cost and delivered value before creating a long-term commitment.

### Reasoning

Design and technology decisions establish recurring costs that can become difficult to change after implementation. Comparing lifecycle cost and value before commitment allows lower-cost alternatives to be assessed, establishes whether a higher recurring cost is justified, and gives cost the same scrutiny as reliability, performance, and security.

Building a capability that an existing solution already provides creates development and maintenance work that may not deliver distinct value. Comparing existing and custom solutions across their full lifecycle establishes whether custom development is justified and prevents upfront price alone from determining the choice.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Proportionate Cost Decisions

### Summary

Service spend and resource use remain proportionate to its demand, risk, and value without creating disproportionate risk to reliability, performance, or security.

### Reasoning

The capacity, resilience, and redundancy a service requires depend on its criticality and recovery objectives. Provisioning beyond those needs creates recurring cost without a corresponding reduction in risk, while reducing them further can remove capacity or protection that the service depends on. Assessing cost against risk and value keeps both spend and protection proportionate.

Idle, over-provisioned, or unnecessarily retained resources incur cost without delivering corresponding value. Sizing resources to actual demand and removing them when their purpose ends keeps compute and storage consumption aligned with the workload.

Usage-based engineering tooling can incur cost with every request or operation. Scoping its use and selecting capabilities according to the task keeps that spend proportionate while preserving higher-cost options where their additional capability has value.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
- [AI Tooling Cost Management](../../standards/ai-engineering/ai-tooling-cost-management.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Backup & Disaster Recovery](../../standards/operations-observability/backup-disaster-recovery.md)
- [Metrics, Monitoring & Alerting](../../standards/operations-observability/metrics-monitoring-alerting.md)
- [Observability Platform Integration](../../standards/operations-observability/observability-platform-integration.md)
- [Structured Logging](../../standards/operations-observability/structured-logging.md)
- [Distributed Tracing](../../standards/operations-observability/distributed-tracing.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Test Data Management](../../standards/quality-engineering/test-data-management.md)

## Cost Visibility & Attribution

### Summary

A service is designed from the outset so its cost can be measured and attributed to its responsible team.

### Reasoning

Aggregate spend does not show which service produced a cost or which team can act on it. Designing for measurement from the outset attributes spend to the decisions that control it, reveals changes in cost, and allows the responsible team to assess whether the cost remains justified by the service's usage and value.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Cost Change Detection

### Summary

A material or unexpected change in a service's spend is brought to its responsible team's attention early enough to limit further unintended cost.

### Reasoning

Service cost can change rapidly through demand, configuration, architecture, or provider pricing changes. Detecting a material or unexpected change when it emerges allows the responsible team to identify its cause and assess whether the resulting spend remains proportionate to the service's usage and value.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Cost Reassessment

### Summary

Cost decisions are reassessed against actual usage, spend, and vendor pricing as these change.

### Reasoning

A cost assumption made during design can cease to reflect a service once its usage, scale, access patterns, or vendor pricing change. Comparing actual operation and spend with that assumption identifies resources and technology choices whose cost no longer matches their value.

### Implemented By These Standards

- [AI Tooling Cost Management](../../standards/ai-engineering/ai-tooling-cost-management.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
