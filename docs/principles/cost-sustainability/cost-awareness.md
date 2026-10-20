---
last_edited: 2026-10-21
---

# Cost Awareness

## Lifecycle Cost Decisions

### Summary

Engineers compare viable design and technology options by lifecycle cost and delivered value before making a long-term commitment.

### Reasoning

Design and technology decisions set development, operation, support, and replacement costs that can be hard to change once a service is built. Comparing these costs before committing shows whether a more expensive option delivers enough value to justify its ongoing cost.

An option that costs less initially may cost more to operate or replace. Paying more initially may reduce work elsewhere. Considering the full lifecycle gives cost the same attention as reliability, performance, and security, rather than letting the purchase or build cost alone decide the choice.

Building a capability that already exists adds development and maintenance work without necessarily adding distinct value. Comparing existing and custom solutions on the same basis shows whether custom development is justified.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)

## Spend Aligned with Demand and Value

### Summary

A service's spending and resource use reflect its demand and value while preserving the capacity and controls needed for reliability, performance, and security.

### Reasoning

The capacity, resilience, and redundancy a service needs depend on its demand, criticality, and recovery objectives. Providing more than it needs adds recurring cost without a matching reduction in risk. Cutting below those needs can remove capacity or protection the service depends on.

Assessing spending against demand, value, and required service outcomes keeps cost reduction from becoming a goal on its own. Necessary protection stays in place, while excess capacity, idle resources, and retained storage are visible as costs that no longer add value.

Usage-based engineering tools add variable costs because each request or operation may have a price. Matching the tool's capability and use to the task keeps higher-cost options available where they add needed value, without paying that cost for every activity.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
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

## Cost Visibility and Attribution

### Summary

A service is designed so its cost can be measured and attributed to the team responsible for it.

### Reasoning

Total spending does not show which service incurred a cost, which change affected it, or who can act on it. Without that detail, teams cannot distinguish expected growth from waste or link spending to the service behaviour that caused it.

Designing for cost measurement and attribution links spending to the engineering decisions that control it. The responsible team can then spot cost changes and assess whether the service's usage and value still justify them.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)

## Cost Change Detection

### Summary

The responsible team receives alerts when service spending no longer matches expected usage and pricing or changes without a known cause.

### Reasoning

Service costs can change quickly with demand, configuration, architecture, or provider pricing. If unexpected costs stay hidden until routine reporting or billing, unintended spending can continue long after the decision or fault that caused it.

Early detection gives the responsible team time to find the cause and decide whether the new cost reflects useful demand or a problem needing action. The team can then limit further spending while keeping the capacity and protection the service still needs.

### Implemented By These Standards

- [Cost & Impact Visibility](../../standards/cost-sustainability/cost-impact-visibility.md)

## Cost Reassessment

### Summary

Engineers reassess cost decisions as actual usage, spending, and vendor pricing change.

### Reasoning

Cost assumptions made during design can become outdated as usage, scale, access patterns, or vendor pricing change. A choice that once matched the expected usage and value may become unnecessarily expensive or stop delivering that value.

Comparing actual operation and spending with the original assumptions reveals those changes. Engineers can then identify resources and technology choices to resize, replace, or reconsider before their cost is accepted as fixed.

### Implemented By These Standards

- [AI Tooling Cost Management](../../standards/ai-engineering/ai-tooling-cost-management.md)
- [Resource Efficiency & Optimisation](../../standards/cost-sustainability/resource-efficiency-optimisation.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
