---
last_edited: 2026-09-09
---

# Assessing an Automation Candidate

`gdn-qe-automation-candidate`

## Summary

> How to assess whether a specific test is a worthwhile automation candidate, and what to record when it is not.

## Supports

- [Test Automation](../../principles/quality/test-automation.md)

## Context

Use this assessment when deciding whether a test is a worthwhile automation candidate or
should remain manual.

Assess one candidate at a time: a test, workflow, API, data rule, integration, or
scenario. An application or a project is not a candidate.

## Approach

### Rate each criterion

Rate each criterion and record the reason. The reasons are the output that matters while the
ratings only summarise them.

| Rating | Meaning |
| --- | --- |
| Strong | Clearly supports automation. |
| Conditional | May support automation, subject to an uncertainty or dependency. |
| Weak | Provides limited support for automation. |
| Not applicable | Does not apply to this candidate. |

| Criterion | What to consider |
| --- | --- |
| Purpose and expected value | Is there a defined testing need or delivery outcome? Will automation give useful repeatability, earlier feedback, or stronger evidence? |
| Risk and evidence value | Does the scenario address a meaningful business, clinical, technical, or operational risk? Would repeatable evidence improve release decisions? |
| Execution frequency | Is it performed often enough, or across enough conditions, for repeated execution to be worth having? |
| Scenario stability | Are the workflow, interface, and expected behaviour settled enough for the automation to stay useful? |
| Expected-result clarity | Can the expected outcome be defined and evaluated consistently, without relying mainly on subjective judgement? |
| Repeatability and controllability | Can inputs, dependencies, and state be controlled well enough to get the same answer each run? |
| Maintenance proportion | Is the likely build and maintenance effort proportionate to the value and the useful life of what it covers? |
| Diagnostic value | Will a failure say enough to act on, or will it start an investigation? |

### Reach an outcome

Weigh the criteria together rather than counting them. Expected-result clarity and
repeatability and controllability behave as gates rather than weights: Weak on either
produces automation that fails for reasons unrelated to the risk it covers, whatever the
rest of the assessment says.

| Outcome | Use when | Next action |
| --- | --- | --- |
| Strong candidate | Clear purpose and evidence value, repeatable and stable, proportionate ongoing benefit. | Continue to the readiness checklist and plan the work. |
| Candidate with dependencies | Valuable, but suitability depends on resolving an uncertainty, a constraint, or a design decision. | Record the dependencies and their owners, then reassess or proceed with the conditions stated. |
| Better kept manual | Better served by exploration, judgement, usability assessment, or infrequent execution. | Keep it in the wider testing approach and record why it remains manual. |
| Not recommended | Low expected value, a result that would not be reliable or actionable, or effort disproportionate to the benefit. | Record the reasons and do not progress unless the context materially changes. |

A positive outcome means the candidate is worth automating, not that the work is ready to
start.

### Record the decision

| Field | Decision |
| --- | --- |
| Overall outcome | Better kept manual |
| Key reasons | Risk and evidence value Strong — a card declined at the provider's 3DS challenge can leave the order marked paid, charging a customer for an order never fulfilled. Repeatability and controllability Weak — the sandbox cannot force a decline at the challenge step, so the scenario cannot be driven to the state under test. |
| Dependencies or conditions | Forced-decline test cards in the provider's sandbox. |
| Risks or limitations | The check stays manual and depends on one physical test card, so it runs at major releases only. |
| Agreed next action | Keep in the release pack as a manual check. |
| Owner | Payments team lead |
| Review trigger | The provider publishes forced-decline sandbox cards. |

Where the outcome is *Better kept manual* or *Not recommended*, record the risk covered,
why automating it was judged not worth the cost, and the condition that reopens the
judgement.

## Pitfalls

**Rating every candidate Strong.** If the assessment never produces a Weak rating or a
*Better kept manual* outcome, it is not being used to decide anything. The suite then
grows with tests that were never worth having, and every one of them still has to be
maintained.

**Automating something that is still being built.** A screen or a rule that changes every
sprint will break the test every sprint, and the team ends up spending more time fixing
tests than the tests save. Rate stability honestly and wait if necessary.

**Counting the cost of writing the test but not of upkeep.** Writing it once is the
cheap part. Someone has to update it when the interface changes, investigate it when it
fails, and keep its test data valid. Rate maintenance on the whole life of the test, not
the first day of it.

**Setting a date to look again instead of a condition.** "Review in six months" gets
reviewed in six months, and runs the risk of being found unchanged, and pushed out another
six. "When the payment sandbox supports declined cards" names the thing to watch for, and
anyone can check whether it has happened.

## Related

- [Test Data Management](../../standards/quality-engineering/test-data-management.md)
