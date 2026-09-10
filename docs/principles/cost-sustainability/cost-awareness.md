---
last_edited: 2026-09-10
---

# Cost Awareness

## Lifecycle Cost Decisions

### Summary

Design and technology choices compare viable options by lifecycle cost and delivered value before creating a long-term commitment.

### Reasoning

Design and technology decisions establish development, operation, support, and replacement costs that can become difficult to change after implementation. Comparing these costs before commitment shows whether a higher-cost option provides enough value to justify its continuing impact.

An option with a lower initial price may cost more to operate or replace, while a higher initial cost may reduce work elsewhere. Considering the full lifecycle gives cost the same attention as reliability, performance, and security instead of allowing the purchase or build cost alone to determine the choice.

Building a capability that an existing solution already provides creates development and maintenance work without necessarily delivering distinct value. Comparing existing and custom solutions on the same basis establishes whether custom development is justified.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

## Proportionate Service Spend

### Summary

A service's spend and resource use remain proportionate to its demand, risk, and value without creating unacceptable reliability, performance, or security risk.

### Reasoning

The capacity, resilience, and redundancy a service requires depend on its demand, criticality, and recovery objectives. Provisioning beyond those needs creates recurring cost without a corresponding reduction in risk, while cutting further can remove capacity or protection on which the service depends.

Assessing spend against service value and risk prevents cost reduction from being treated as an objective in isolation. It keeps necessary protection in place while making excess capacity, idle resources, and retained storage visible as costs that no longer deliver value.

Usage-based engineering tools add another form of variable spend because each request or operation can carry a cost. Matching the selected capability and its use to the task preserves higher-cost options where their additional value is needed without applying that cost to every activity.

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

A service is designed so its cost can be measured and attributed to the team responsible for it.

### Reasoning

Aggregate spend does not show which service produced a cost, which change affected it, or who can act on it. Without that detail, teams cannot distinguish expected growth from waste or relate spending to the service behaviour that caused it.

Designing for measurement and attribution connects spend to the engineering decisions that control it. The responsible team can then identify changes in cost and assess whether the service's usage and value continue to justify them.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Cost Change Detection

### Summary

The responsible team is alerted to a material or unexpected change in service spend early enough to limit further unintended cost.

### Reasoning

Service cost can change quickly when demand, configuration, architecture, or provider pricing changes. If the increase remains hidden until routine reporting or billing, unintended spend can continue long after the decision or fault that caused it.

Early detection gives the responsible team time to identify the cause and determine whether the new cost reflects useful demand or an issue requiring action. It also allows the team to limit further spend while preserving capacity and protection that the service still needs.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Cost Reassessment

### Summary

Cost decisions are reassessed as actual usage, spend, and vendor pricing change.

### Reasoning

A cost assumption made during design can stop reflecting the service as usage, scale, access patterns, or vendor pricing change. A choice that was proportionate at adoption may therefore become unnecessarily expensive or no longer provide the expected value.

Comparing actual operation and spend with the original basis for the decision makes that change visible. It identifies resources and technology choices that should be resized, replaced, or otherwise reconsidered before their cost becomes accepted as fixed.

### Implemented By These Standards

- [AI Tooling Cost Management](../../standards/ai-engineering/ai-tooling-cost-management.md)
- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
