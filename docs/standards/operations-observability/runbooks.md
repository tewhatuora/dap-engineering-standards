---
last_edited: 2026-09-14
---

# Runbooks

## Runbook Coverage

### Summary

A paging alert, known recurring failure mode, and high-risk procedure has a documented runbook used to guide the response.

### Standards

1. A paging alert **MUST** have a corresponding runbook describing its response. `std-ops-runbook-coverage-01`
2. A high-risk or recurring operational procedure, such as remediating a data quality issue or executing a standby failover, **MUST** be captured in a runbook. `std-ops-runbook-coverage-02`
3. A failure mode newly identified through an incident review **SHOULD** receive a runbook where it is reasonably likely to recur. `std-ops-runbook-coverage-03`
4. A responder **SHOULD** use an applicable runbook to guide the response and depart from it where incident conditions require different action. `std-ops-runbook-coverage-04`

### Related Standards

- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)
- [Backup & Disaster Recovery](backup-disaster-recovery.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Runbook Content

### Summary

A runbook describes its steps, applicability, resolution outcome, and escalation path in enough detail for a person or an AI tool to execute.

### Standards

1. A runbook **MUST** describe the steps needed to diagnose and resolve a failure mode or carry out an operational procedure, in enough detail to execute them. `std-ops-runbook-content-01`
2. A runbook **MUST** state the condition under which it applies and the outcome confirming the failure mode's resolution or the operational procedure's completion. `std-ops-runbook-content-02`
3. A runbook **SHOULD** identify the escalation path to follow where its documented steps do not resolve the failure mode or complete the operational procedure. `std-ops-runbook-content-03`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Runbook Maintenance

### Summary

A runbook is version-controlled, updated with relevant service changes, and removed from active use once it no longer applies.

### Standards

1. A runbook **MUST** be version-controlled in a discoverable location. `std-ops-runbook-maintenance-01`
2. A runbook **SHOULD** be updated in the same change that materially alters the procedure, service behaviour, or failure mode it documents. `std-ops-runbook-maintenance-02`
3. A runbook **MUST** be removed from active operational documentation once it no longer applies. `std-ops-runbook-maintenance-03`

### Related Standards

- [Code Review](../code-implementation/code-review.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Runbook Access

### Summary

An alert or dashboard links directly to its runbook, which remains accessible to responders without source-repository access.

### Standards

1. A paging alert or dashboard indicator tied to a known failure mode **SHOULD** link directly to the runbook covering it. `std-ops-runbook-access-01`
2. A runbook **MUST** be accessible to responders without requiring direct access to its source repository. `std-ops-runbook-access-02`

### Related Standards

- [Metrics, Monitoring & Alerting](metrics-monitoring-alerting.md)

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Runbook Automation

### Summary

A failure response is automated where possible, and its runbook still documents how to confirm and intervene in that automation.

### Standards

1. A failure mode's response or an operational procedure's execution **SHOULD** be automated where possible. `std-ops-runbook-automation-01`
2. A runbook for an automated failure response or operational procedure **MUST** document how to confirm the automation executed correctly and how to intervene where it does not. `std-ops-runbook-automation-02`

### Implements These Principles

- [Automation](../../principles/engineering-practice/automation.md)

## Runbook Validation

### Summary

A runbook is validated before responders rely on it; gaps found during testing are corrected promptly, and gaps found during an incident are tracked afterward.

### Standards

1. A runbook **MUST** be validated before operational use through testing or review appropriate to the procedure's risk, and **SHOULD** be revalidated after a material change. `std-ops-runbook-validation-01`
2. A gap or inaccuracy found while testing a runbook **SHOULD** be corrected promptly. `std-ops-runbook-validation-02`
3. A gap or inaccuracy found while a team member or an AI tool relies on a runbook during a real incident **MUST** be tracked for correction after the incident. `std-ops-runbook-validation-03`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
