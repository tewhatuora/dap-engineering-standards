# Automation First

## Summary

> Automate every repeatable task, and reserve human judgement for decisions automation cannot make.

## Principles

### Delivery Pipeline Automation

> Repeatable delivery pipeline work is automated by default, and a manual step left in place is treated as a gap to close.

1. Repeatable, well-defined delivery pipeline tasks **MUST** be automated where technically feasible, including build and test execution, release and deployment, and infrastructure provisioning.
2. Automation **MUST** be the default approach considered before adopting a manual process for a new or recurring delivery pipeline task.
3. A repeatable delivery pipeline task still performed manually **MUST** be treated as a gap to remediate, not an accepted practice.

#### References

- [Continuous Integration](../../standards/delivery-release/continuous-integration.md)
- [Continuous Delivery & Deployment](../../standards/delivery-release/continuous-delivery-deployment.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

### Automation Beyond the Delivery Pipeline

> Automation extends to any repeatable engineering or operational task, not only build, test, and deployment.

1. Automation First **MUST NOT** be limited to build, test, and deployment activity; it extends to any repeatable engineering or operational task, including scheduled reporting, batch data processing, and alerting workflows.
2. A recurring task in these areas **SHOULD** be automated using tooling proportionate to its complexity, such as a scheduled job or script, rather than performed manually.

### Automated Gates & Human Review

> Mechanical checks run through automated gates, and human review still applies on top, never replaced by a passing gate.

1. Mechanical, rule-based checks, such as linting, test execution, and static analysis, **SHOULD** be enforced through automated gates integrated into the delivery pipeline, rather than relying solely on manual review.
2. Passing automated gates **MUST NOT** be treated as a substitute for mandatory human code review and approval; a change, including AI-generated or AI-assisted code, still requires human review and approval regardless of automated results.
3. Manual review effort **SHOULD** focus on judgement calls automated checks cannot make, not on reducing the human review and approval still required.
4. An automated gate failure **MUST** block progression through the delivery pipeline until resolved.

#### References

- [Static Code Analysis](../../standards/code-implementation/static-code-analysis.md)
- [Linting & Style Enforcement](../../standards/code-implementation/linting-style-enforcement.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [AI Usage & Verification in Code Review](../../standards/ai-engineering/ai-usage-verification-in-code-review.md)

### Reducing Operational Toil

> Repetitive operational work is continually identified, tracked, and prioritised for automation, not left to accumulate.

1. Teams **SHOULD** continually identify and automate manual, repetitive operational work, including deployment steps, environment setup, and data correction.
2. Recurring manual interventions required to keep a service running **SHOULD** be tracked and prioritised for automation, not deferred indefinitely.
3. Automation effort **SHOULD** be prioritised toward the tasks with the highest frequency, risk, or engineering time cost.

### Automation as an Engineering Artifact

> Automation logic is version-controlled and kept current like any other engineering artifact, never left to silently drift.

1. Automation logic, including scripts, pipelines, and tooling configuration, **MUST** be version-controlled and maintained as a first-class engineering artifact.
2. Automation **MUST** be kept up to date and **MUST NOT** be allowed to silently drift from the process it is intended to enforce.
3. Automated processes **SHOULD** include test coverage or validation checks proportionate to the risk of the task they perform.

#### References

- [Everything as Code](everything-as-code.md)

### Irreplaceable Human Judgement

> Automation never substitutes for a decision that genuinely needs human judgement, such as a novel tradeoff or exception.

1. Automation **MUST NOT** substitute for decisions requiring genuine human judgement, such as novel design tradeoffs or unanticipated exceptions.
2. Automation **SHOULD** free engineering capacity from repetitive execution for higher-value design, judgement, and problem-solving work.

### Retained Manual Steps

> A manual step stays acceptable only where automation genuinely is not feasible, documented and reassessed periodically.

1. A manual step **MAY** be retained where automation is not technically feasible or a deliberate human checkpoint is required for a high-risk action.
2. A retained manual step **SHOULD** be documented, including the reason automation was not applied, and reassessed periodically as tooling and feasibility change.
