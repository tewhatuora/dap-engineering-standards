# Runbooks

## Summary

> A runbook documents and validates the steps to resolve known failures and perform high-risk procedures.

## Standards

### Runbook Coverage

> A known failure mode or high-risk procedure has a documented runbook, followed as the response rather than reinvented each time.

1. A known or recurring failure mode referenced by an alert **MUST** have a corresponding runbook describing its response.
2. A high-risk or recurring operational procedure, such as remediating a data quality issue or executing a standby failover, **MUST** be captured in a runbook rather than left to informal or undocumented knowledge.
3. A failure mode newly identified through an incident review **MUST** receive a runbook where it is reasonably likely to recur.
4. Where a documented runbook exists for a failure mode or operational procedure, it **MUST** be followed as the response, rather than a team member or an AI tool diagnosing and resolving the condition independently each time.

#### References

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)

### Runbook Content

> A runbook spells out its steps, applicability, and resolution outcome in enough detail for a person or an AI tool to execute.

1. A runbook **MUST** describe the steps needed to diagnose and resolve a failure mode or carry out an operational procedure, in enough detail to execute them.
2. A runbook **MUST** state the condition under which it applies and the outcome confirming the failure mode's resolution or the operational procedure's completion.
3. A runbook **SHOULD** identify the escalation path to follow where its documented steps do not resolve the failure mode or complete the operational procedure.

#### References

- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)

### Runbook Currency

> A runbook is version-controlled alongside its service, updated in the same change, and retired once it no longer applies.

1. A runbook **MUST** be version-controlled as `Markdown` within the same repository as the service it is documented for.
2. A runbook **MUST** be updated in the same change that alters the procedure, service behaviour, or failure mode it documents.
3. A runbook **MUST** be retired once the failure mode or procedure it covers no longer applies, rather than left discoverable alongside current ones.

#### References

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Code Review](../code-implementation/code-review.md)
- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

### Runbook Discoverability

> An alert or dashboard links directly to its runbook, and every runbook is also published somewhere findable on its own.

1. An alert or dashboard indicator tied to a failure mode **MUST** link directly to the runbook covering it, rather than leaving its recipient, whether a team member or an AI tool, without direct access to the runbook.
2. A runbook **MUST** be published through one of the organisation's established documentation sites, so it can be found without requiring direct access to its source repository.

#### References

- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)
- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)
- [Engineering Documentation](../documentation-collaboration/engineering-documentation.md)

### Runbook Validation

> A runbook is tested in a representative environment, and any gap found is corrected immediately, not deferred.

1. A runbook **MUST** be tested in a representative non-production environment when first written and whenever the failure mode, procedure, or service it documents changes.
2. A gap or inaccuracy found while testing a runbook **MUST** be corrected immediately, in place, rather than deferred until the runbook is next relied on.
3. A gap or inaccuracy found while a team member or an AI tool relies on a runbook during a real incident **MUST** be tracked as a corrective action from that incident's review, rather than corrected while the incident is still being resolved.

#### References

- [Observability](../../principles/reliability-operations/observability.md)
- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)

### Runbook Automation

> A failure response is automated where possible, and its runbook still documents how to confirm and intervene in that automation.

1. A failure mode's response or an operational procedure's execution **SHOULD** be automated rather than a runbook continuing to depend on a team member or an AI tool to carry out its steps manually.
2. Where automated, the runbook **MUST** document how to confirm the automation executed correctly and how to intervene where it does not, rather than being discarded.

#### References

- [Automation](../../principles/engineering-practice/automation.md)
- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)
