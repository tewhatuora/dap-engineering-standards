# Automation First

## Summary

> Automate every repeatable task by default, and reserve human judgement for what automation genuinely cannot decide.

## Objective

This principle establishes automation as the default approach for repeatable engineering and operational work. It reduces reliance on manual execution and keeps engineering effort focused on the design, judgement, and improvement work automation cannot replace.

## Principles

### Delivery Pipeline Automation

These principles set out how automation is the default approach for repeatable delivery pipeline work.

1. Repeatable, well-defined delivery pipeline tasks must be automated where technically feasible, including build and test execution, release and deployment, and infrastructure provisioning.
2. Automation must be the default approach considered before adopting a manual process for a new or recurring delivery pipeline task.
3. A repeatable delivery pipeline task still performed manually must be treated as a gap to remediate, not an accepted practice.

#### References

- [Continuous Integration](../standards/delivery-release/continuous-integration.md)
- [Continuous Delivery & Deployment](../standards/delivery-release/continuous-delivery-deployment.md)
- [Infrastructure as Code](../standards/platform-infrastructure/infrastructure-as-code.md)

### Automation Beyond the Delivery Pipeline

These principles describe how automation extends to any repeatable engineering or operational task, not just the delivery pipeline.

1. Automation First must not be limited to build, test, and deployment activity; it extends to any repeatable engineering or operational task, including scheduled reporting, batch data processing, and alerting workflows.
2. A recurring task in these areas should be automated using tooling proportionate to its complexity, such as a scheduled job or script, rather than performed manually.

### Automated Gates & Human Review

These principles address how mechanical, rule-based checks are automated without reducing the human review and approval still required.

1. Mechanical, rule-based checks, such as linting, test execution, and static analysis, should be enforced through automated gates integrated into the delivery pipeline, rather than relying solely on manual review.
2. Passing automated gates must not be treated as a substitute for mandatory human code review and approval; a change, including AI-generated or AI-assisted code, still requires human review and approval regardless of automated results.
3. Manual review effort should focus on judgement calls automated checks cannot make, not on reducing the human review and approval still required.
4. An automated gate failure must block progression through the delivery pipeline until resolved.

#### References

- [Static Code Analysis](../standards/code-implementation/static-code-analysis.md)
- [Code Review](../standards/code-implementation/code-review.md)
- [AI Usage & Verification in Code Review](../standards/ai-engineering/ai-usage-verification-in-code-review.md)

### Reducing Operational Toil

These principles set out how repetitive operational work is continually identified and automated.

1. Teams should continually identify and automate manual, repetitive operational work, including deployment steps, environment setup, and data correction.
2. Recurring manual interventions required to keep a service running should be tracked and prioritised for automation, not deferred indefinitely.
3. Automation effort should be prioritised toward the tasks with the highest frequency, risk, or engineering time cost.

### Automation as an Engineering Artifact

These principles cover how automation logic remains version-controlled and maintained like any other engineering artifact.

1. Automation logic, including scripts, pipelines, and tooling configuration, must be version-controlled and maintained as a first-class engineering artifact.
2. Automation must be kept up to date and must not be allowed to silently drift from the process it is intended to enforce.
3. Automated processes should include test coverage or validation checks proportionate to the risk of the task they perform.

#### References

- [Everything as Code](everything-as-code.md)

### Irreplaceable Human Judgement

These principles describe how genuine human judgement is reserved for decisions requiring it, such as novel design tradeoffs or unanticipated exceptions.

1. Automation must not substitute for decisions requiring genuine human judgement, such as novel design tradeoffs or unanticipated exceptions.
2. Automation should free engineering capacity from repetitive execution for higher-value design, judgement, and problem-solving work.

### Retained Manual Steps

These principles guide how a manual step remains acceptable where automation is not feasible or a deliberate checkpoint is required.

1. A manual step may be retained where automation is not technically feasible or a deliberate human checkpoint is required for a high-risk action.
2. A retained manual step should be documented, including the reason automation was not applied, and reassessed periodically as tooling and feasibility change.
