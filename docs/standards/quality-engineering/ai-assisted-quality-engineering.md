---
last_edited: 2026-09-22
---

# AI-Assisted Quality Engineering

## QA Scope for AI Use

### Summary

Each use of AI that affects engineering work, product functionality, or quality evidence is included in the relevant quality and testing scope.

### Standards

1. A team or vendor **MUST** identify each use of AI that produces or modifies engineering work, forms part of product functionality, or creates, analyses, or interprets quality evidence. `std-qe-ai-quality-scope-01`
2. Each identified use of AI **MUST** be included in the scope of the relevant quality and testing activities, including the inputs, outputs, tools, and dependencies that can affect its outcome. `std-qe-ai-quality-scope-02`
3. Tests and quality evidence **MUST** identify the use of AI and the quality goal, requirement, or risk being assessed. `std-qe-ai-quality-scope-03`

### Related Standards

- [Outcome Driven Assurance](outcome-driven-assurance.md#clear-test-outcomes)
- [Quality Roles & Responsibilities](quality-roles-responsibilities.md#qa-oversight-across-quality-activities)
- [AI-Assisted Development](../ai-engineering/ai-assisted-development.md#quality-testing-security)

### Implements These Principles

- [AI Broadens What QA Checks](../../principles/quality/ai-assisted-quality-engineering.md#ai-broadens-what-qa-checks)

## Responsibility for AI-Informed Quality Decisions

### Summary

Every quality decision informed by AI-generated evidence is made by an identified person who has reviewed the evidence and its limits.

### Standards

1. The responsibility model for quality and testing activities **MUST** identify the role accountable for each quality, risk acceptance, and release decision informed by AI-generated evidence. `std-qe-ai-quality-accountability-01`
2. An AI tool or agent **MUST NOT** be assigned accountability for approving quality evidence, accepting risk, or authorising a release. `std-qe-ai-quality-accountability-02`
3. The accountable person **MUST** review the AI-generated evidence, its source, and any known gaps before making the decision. `std-qe-ai-quality-accountability-03`
4. AI-generated evidence affecting a clinical decision, patient-safety function, security control, privacy requirement, accessibility requirement, or regulatory requirement **MUST** be reviewed by a person with relevant expertise before it informs a quality decision. `std-qe-ai-quality-accountability-04`

### Related Standards

- [Quality Roles & Responsibilities](quality-roles-responsibilities.md#defined-quality-roles-and-responsibilities)
- [AI-Assisted Development](../ai-engineering/ai-assisted-development.md#high-risk-use)

### Implements These Principles

- [People Remain Responsible](../../principles/quality/ai-assisted-quality-engineering.md#people-remain-responsible)

## Independent Checks of AI Work and Evidence

### Summary

AI-produced work and AI-generated evidence are checked against a reliable source that does not depend only on the output or assumptions being checked.

### Standards

1. AI-produced work and AI-generated evidence **MUST** be checked against at least one source that does not depend only on the output or assumptions being checked before they inform a quality decision. `std-qe-independent-ai-checks-01`
2. An independent check **MUST** compare the AI-produced work or evidence with an agreed requirement, observed system behaviour, a repeatable test, separately produced evidence, or review by a person with relevant knowledge. `std-qe-independent-ai-checks-02`
3. A quality decision **MUST NOT** rely only on AI-produced checks when the work being checked was produced from the same instructions, context, or AI output. `std-qe-independent-ai-checks-03`
4. The retained quality evidence **MUST** identify the source and result of each independent check on which the decision relies. `std-qe-independent-ai-checks-04`

### Related Standards

- [AI-Assisted Development](../ai-engineering/ai-assisted-development.md#quality-testing-security)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md#pre-submission-verification)
- [Evidence & Reporting](evidence-reporting.md#current-and-traceable-evidence)

### Implements These Principles

- [Independent Checks of AI Work and Evidence](../../principles/quality/ai-assisted-quality-engineering.md#independent-checks-of-ai-work-and-evidence)

## Testing Functionality That Utilizes AI

### Summary

Functionality that utilizes AI is tested against defined quality goals under varied conditions before release and while in use.

### Standards

1. Functionality that utilizes AI **MUST** have observable quality goals and acceptance criteria defined before release. `std-qe-ai-functionality-evaluation-01`
2. Pre-release testing **MUST** cover expected use, relevant edge cases, and relevant harmful or misuse inputs. `std-qe-ai-functionality-evaluation-02`
3. Test evidence for functionality where the same input can produce different outputs **MUST** include results from repeated executions and show the observed variation against the defined quality goals. `std-qe-ai-functionality-evaluation-03`
4. Functionality that utilizes AI in production **MUST** produce or collect evidence that shows whether it continues to meet its defined quality goals. `std-qe-ai-functionality-evaluation-04`
5. Functionality that utilizes AI **MUST** be tested again when a change to its prompt, context, data, configuration, model, or provider dependency can affect its behaviour, or when production evidence shows unexpected or changed behaviour. `std-qe-ai-functionality-evaluation-05`

### Related Standards

- [Outcome Driven Assurance](outcome-driven-assurance.md#quality-acceptance-criteria)
- [Evidence & Reporting](evidence-reporting.md#current-and-traceable-evidence)
- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md#dashboards)

### Implements These Principles

- [Continuous Checks of Functionality That Utilizes AI](../../principles/quality/ai-assisted-quality-engineering.md#continuous-checks-of-functionality-that-utilizes-ai)

## Controlled and Traceable AI Agents

### Summary

An AI agent performing quality activities works within recorded limits, produces traceable evidence, and makes only changes that can be reversed.

### Standards

1. Before an AI agent begins a quality activity, the responsible team or vendor **MUST** record its assigned task, permitted systems, permitted data, permitted actions, completion condition, and stop conditions. `std-qe-agentic-testing-controls-01`
2. Each AI agent run **MUST** record the agent and tool version, instructions, input references, systems accessed, actions performed, outputs, changes made, start and end time, and final result. `std-qe-agentic-testing-controls-02`
3. Quality evidence produced by an AI agent **MUST** be traceable to the agent run that produced it. `std-qe-agentic-testing-controls-03`
4. Before an AI agent is permitted to change a test asset, test data, configuration, or environment, the responsible team or vendor **MUST** establish how each permitted change will be identified and reversed. `std-qe-agentic-testing-controls-04`

### Related Standards

- [AI-Assisted Development](../ai-engineering/ai-assisted-development.md#ai-agent-access)
- [Identity & Access Management](../security-identity/identity-access-management.md#ai-agent-access)
- [Evidence & Reporting](evidence-reporting.md#current-and-traceable-evidence)

### Implements These Principles

- [Controlled and Traceable AI Agents](../../principles/quality/ai-assisted-quality-engineering.md#controlled-and-traceable-ai-agents)

## Human Exploration and Expert Judgement

### Summary

People investigate risks and results that need exploration, context, or expert judgement when AI supports testing or analysis.

### Standards

1. A team or vendor using AI for testing or quality analysis **MUST** identify risks and outcomes that cannot be evaluated reliably through predefined checks and assign them to a person with the knowledge needed to test or assess them. `std-qe-human-ai-testing-01`
2. A passing AI-generated or AI-executed test suite **MUST NOT** be treated as complete evidence when an identified risk or required outcome remains outside its coverage. `std-qe-human-ai-testing-02`
3. An unexpected, uncertain, or conflicting result produced by AI **MUST** be reviewed by a person with relevant knowledge before the result is accepted or dismissed. `std-qe-human-ai-testing-03`

### Related Standards

- [Test Automation](test-automation.md#automation-complements-human-testing)
- [AI Usage & Verification in Code Review](../ai-engineering/ai-usage-verification-in-code-review.md#ai-assisted-review)
- [AI-Assisted Development](../ai-engineering/ai-assisted-development.md#high-risk-use)

### Implements These Principles

- [Human Exploration and Expert Judgement](../../principles/quality/ai-assisted-quality-engineering.md#human-exploration-and-expert-judgement)

## Measuring AI Adoption

### Summary

AI use in quality engineering is compared with defined quality, risk, effort, and cost outcomes before it is expanded or continued.

### Standards

1. Before introducing an AI-assisted quality practice, its expected effect on quality, risk, effort, and cost **MUST** be defined against recorded results from the current practice or another recorded comparison point. `std-qe-ai-adoption-results-01`
2. Measurement of an AI-assisted quality practice **MUST** include the effort and cost of reviewing, correcting, maintaining, and investigating its outputs. `std-qe-ai-adoption-results-02`
3. Test count, execution count, output volume, pass rate, or time saved **MUST NOT** be the sole measure used to judge an AI-assisted quality practice. `std-qe-ai-adoption-results-03`
4. A decision to expand, change, continue, or stop an AI-assisted quality practice **MUST** have a recorded basis that compares its measured results with the expected outcomes and comparison point. `std-qe-ai-adoption-results-04`

### Related Standards

- [Evidence & Reporting](evidence-reporting.md#complete-quality-reporting)
- [AI Tooling Cost Management](../ai-engineering/ai-tooling-cost-management.md#cost-optimisation-review)

### Implements These Principles

- [Adoption Is Measured by Results](../../principles/quality/ai-assisted-quality-engineering.md#adoption-is-measured-by-results)