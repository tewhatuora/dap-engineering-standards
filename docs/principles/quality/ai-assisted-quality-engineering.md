---
last_edited: 2026-10-27
---

# AI-Assisted Quality Engineering

## AI Broadens What QA Checks

### Summary

QA checks AI-produced work, functionality that utilizes AI, and AI-generated quality evidence.

### Reasoning

AI can influence requirements, designs, code, tests, test data, findings, and production decisions. An error introduced in one activity can be repeated by later AI-assisted activities and appear correct when each activity relies on the same assumptions.

QA checks each point where AI affects a product or quality decision. The finished product still has to meet existing quality expectations, and the AI inputs, outputs, tools, and dependencies are checked according to the harm they could cause.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)

## People Remain Responsible

### Summary

People remain responsible for quality goals, how AI-generated evidence is used, and decisions made from it.

### Reasoning

AI can propose tests, run checks, analyse results, and recommend actions, but it cannot take responsibility for a quality or risk decision. A person must decide whether an AI result is relevant, sufficient, and safe to act on.

Responsible people define the expected outcome, review the evidence in context, and decide whether the remaining risk is acceptable. They involve specialists when a decision needs clinical, security, privacy, accessibility, regulatory, or operational knowledge.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [Version Control](../../standards/code-implementation/version-control.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)

## Independent Checks of AI Work and Evidence

### Summary

AI-produced work, tests, findings, and conclusions are checked against another reliable source before they inform a quality decision.

### Reasoning

AI can produce test cases, expected results, classifications, and explanations that look correct but are wrong. Using AI to check work produced by AI can repeat the same assumptions and allow an error to pass unnoticed.

Checks against agreed requirements, observed system behaviour, repeatable tests, separately produced evidence, or human review show whether an AI-generated result can be trusted. Decisions with greater potential impact need stronger independent checks.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI-Assisted Incident Investigation](../../standards/ai-engineering/ai-assisted-incident-investigation.md)
- [Code Review](../../standards/code-implementation/code-review.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)

## Continuous Checks of Functionality That Utilizes AI

### Summary

Functionality that utilizes AI is checked against defined quality goals before release and while the product is in use.

### Reasoning

AI output can change with prompts, context, data, configuration, model behaviour, and provider updates. A test that passes once does not show that the system will remain acceptable under different conditions or after a dependency changes.

Tests cover common use, edge cases, and harmful inputs to show how the system behaves under different conditions. Comparing results over time and with evidence from production reveals new problems and changes in behaviour, so testing can change with the system.

### Implemented By These Standards

- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)

## Controlled and Traceable AI Agents

### Summary

AI agents work within clear limits, and their actions, evidence, and changes are recorded and can be reversed.

### Reasoning

An AI agent can perform a sequence of actions across tests, data, environments, and delivery controls without a person reviewing each step. If it misunderstands its task, it can change shared resources, consume capacity, or affect a delivery decision before a person intervenes.

Limits on access, actions, duration, and stop conditions reduce the harm an error can cause. Records of the agent's inputs, actions, outputs, and changes allow people to understand its work, review its evidence, and reverse unintended changes.

### Implemented By These Standards

- [AI-Assisted Development](../../standards/ai-engineering/ai-assisted-development.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)
- [Identity & Access Management](../../standards/security-identity/identity-access-management.md)

## Human Exploration and Expert Judgement

### Summary

AI supports repeatable testing and analysis, while people investigate uncertainty, apply expert knowledge, and challenge unexpected results.

### Reasoning

AI can increase the scale and speed of test design, execution, and analysis. Its output is limited by the information, instructions, and patterns available to it, so it can repeat an unstated assumption or miss a risk it has not been told about.

People can follow new evidence, recognise missing context, explore unexpected behaviour, and evaluate outcomes that require judgement. Human involvement prevents automated results from being treated as complete proof of quality and helps improve AI-assisted testing.

### Implemented By These Standards

- [Code Review](../../standards/code-implementation/code-review.md)
- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)

## Adoption Is Measured by Results

### Summary

AI use in quality engineering is judged by whether it improves quality, reduces risk, saves effort, and justifies its cost.

### Reasoning

Faster test creation, higher execution counts, and greater output volume measure activity rather than quality. AI can also introduce false results, review effort, maintenance cost, and new gaps that offset the time it appears to save.

Comparing results and total effort with the position before AI was introduced shows whether AI has improved the work or moved effort and risk elsewhere. This evidence supports decisions to expand, change, or stop an AI-assisted quality practice.

### Implemented By These Standards

- [AI-Assisted Quality Engineering](../../standards/quality-engineering/ai-assisted-quality-engineering.md)