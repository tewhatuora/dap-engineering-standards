---
last_edited: 2026-10-20
---

# Principles

## Overview

Principles state what is valued and why, giving standards their basis and guiding engineering decisions that no specific standard covers.

## Inspiration

These principles are informed by well-known guidance for modern software engineering and DevOps. The DORA research programme, including the [State of DevOps reports](https://www.devops-research.com/research.html) and [Accelerate: The Science of Lean Software and DevOps](https://www.amazon.co.uk/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339) use research based evidence to show that teams with strong quality, automation, and learning habits tend to deliver with more speed and less risk.

The [12-factor app methodology](https://12factor.net/) sets out practical patterns for building software that is portable, scalable, and easier to operate in the cloud. 12 Factor apps are well suited to containerisation and serverless computing.

The [CD Foundation's best-practice guidance](https://bestpractices.cd.foundation/learn/) for adopting Continuous Delivery.

## Our Philosophy

These commitments guide how we design, build, deliver, and operate software and services for Health New Zealand.

### We Share Responsibility for Quality and Demonstrate It Through Evidence

We share responsibility for quality throughout discovery, design, delivery, and operation. We define clear outcomes and focus assurance on the risks that matter to users and services. QA provides oversight and independent challenge, making the strength and limits of our evidence clear.

We maintain traceability from expected outcomes through tests, findings, and release decisions, with evidence tied to the version and conditions tested. Gaps and unresolved risks remain visible, and risk acceptance is explicit, recorded, and owned by an accountable person.

### We Prioritise Simplicity and Maintainability

We choose the simplest solution that meets requirements and justify additional complexity. We introduce abstractions and configuration options to solve identified problems, not speculative future requirements, because each adds behaviour to test and maintain.

We define clear domain boundaries to limit coupling and write readable code so engineers can understand and assess changes. We track and prioritise technical debt according to its effect on maintenance, reliability, and delivery, and address it as part of ongoing engineering work.

### We Prioritise Reuse and Shared Platforms

We evaluate existing components and shared platforms before building bespoke solutions. We assess their functional fit, support, security, and integration requirements before adopting them. Reusing a suitable solution avoids duplicating implementation and maintenance, while shared platforms provide capabilities that teams would otherwise build and operate separately.

We introduce new technology when its benefits justify the additional maintenance, security, and operational overhead. We favour a consistent set of established technologies for similar problems so teams can share expertise and tooling.

### We Design for Interoperability

We use agreed interface contracts and shared data standards so services can exchange and correctly interpret data. We define the meaning of identifiers, values, and units as well as their format, and specify the behaviour consumers can rely on.

We keep contracts current and verify that implementations conform to them. We preserve compatibility for existing consumers and provide a versioned migration path when breaking changes are necessary, so providers and consumers can release changes independently.

### We Preserve Portability and Manage Vendor Lock-In

We consider vendor lock-in and migration costs when selecting technologies and services. We weigh the benefits of vendor-specific capabilities against the effort and cost of replacing them.

We preserve the ability to export data, migrate services, and replace dependencies. We assess the code changes, data conversion, and operational work needed for migration. We use portability abstractions only when the reduction in migration effort justifies their implementation and maintenance cost.

### We Account for Cost and Sustainability Throughout the Lifecycle

We assess cost and environmental impact during design and operation. We include ongoing support and maintenance costs, not just infrastructure spending.

We track spending and resource use against service demand and the value the service provides, and reduce unnecessary consumption. We use demand and utilisation data to size capacity while meeting reliability and performance requirements. We assess environmental impact separately from price, because lower spending does not necessarily mean lower resource consumption or emissions.

### We Design for Security and Privacy

We build security and privacy into service design, limit access to authorised users and systems, and minimise the personal and health information we collect and retain. We assess threats and privacy risks during design and use the findings to select appropriate controls.

We apply software supply chain security controls to our dependencies, build and delivery pipelines, and artifacts. We test that controls work as intended, address identified vulnerabilities, and review protections as services, threats, and dependencies change.

### We Engineer for Reliability, Resilience, and Performance

We design services to meet expected demand and withstand dependency failures. We set reliability, performance, and recovery targets according to user needs and the consequences of disruption. We account for peak demand, contain failures, and design for graceful degradation to preserve essential functionality where possible.

We test performance, scaling, failure containment, and recovery under conditions representative of production before deployment. We use test results to identify capacity limits, recovery constraints, and failure modes, and prioritise improvements needed to meet the agreed targets.

### We Design for Testability and Fast Feedback

We prevent failures through clear requirements and early feedback. We design behaviour to be observable and test conditions to be controllable and repeatable. We treat test assets as maintained and accessible code: reviewed, versioned, and reusable where appropriate.

We invest in automation where it provides lasting value, alongside human exploration and judgement. We investigate unreliable tests rather than bypassing them, and use findings, and user feedback to improve both our systems and our assurance. We measure success by useful evidence, reduced risk, and better outcomes, not testing activity alone.

### We Manage Everything as Code

We keep software, infrastructure, configuration, tests, and pipeline definitions in version control. These definitions are the source of truth for the intended system state. We review changes, retain their history, and reproduce environments from these definitions rather than relying on undocumented manual steps.

We keep secrets out of source control and version non-secret configuration for each environment. We detect and resolve differences between deployed environments and their definitions so subsequent deployments do not depend on unrecorded changes.

### We Retain Accountability for AI-Assisted Engineering

We use approved AI tools for development, testing, and investigation without exposing sensitive information. We review and verify AI-assisted work against the same engineering standards as other work and remain responsible for it.

We challenge assumptions in AI-generated output and check technical claims against the codebase and authoritative documentation. We verify that generated tests exercise the intended requirements, not simply reproduce assumptions in the implementation. Engineers must understand and be able to maintain the changes they accept.

### We Document Decisions and Share Engineering Knowledge

We share knowledge through code review and documentation. We record the context, constraints, and reasoning behind significant design decisions so engineers can reassess them when requirements change.

We keep design decisions, interface contracts, and operational guidance up to date and accessible so delivery, maintenance, and support do not depend on one person's knowledge. We update documentation alongside changes to the system and check that operational guidance reflects how the service is actually deployed, diagnosed, and recovered.

### We Practise Continuous Integration and Delivery

We integrate small changes frequently and use automated CI/CD pipelines to build, test, and deliver software. Small changes make integration failures easier to diagnose and reduce the work needed to resolve conflicting changes. We keep pipeline feedback timely and reliable, and address failed checks before further changes obscure the cause.

We build each artifact once and promote it unchanged through delivery environments so verification applies to the artifact we deploy. We keep software deployable without relying on manual build or packaging steps.

### We Control Releases and Plan for Recovery

We separate deployment from release and use feature flags and progressive delivery where appropriate to control which users or traffic receive a change. We define the conditions for continuing or stopping a rollout and check service behaviour against them.

We plan recovery before changing production, accounting for compatibility between application versions, configuration, and persisted data. We verify that the service can be restored to an acceptable operating state, rather than assuming that deploying an earlier version will reverse every change.

### We Design for Observability and Learn from Production

We instrument services so engineers can understand request processing, dependency interactions, and failures from production telemetry. We correlate logs, metrics, and traces to diagnose faults and investigate incidents.

We monitor service behaviour against reliability and performance targets, not just infrastructure health. We configure actionable alerts with enough context to support investigation and recovery. We use production data, defect trends, and user feedback to improve services, refine test coverage, and reproduce failure conditions that earlier testing did not expose.

### We Maintain Services Throughout Their Lifecycle

We assess dependencies before adopting them and use supported runtimes. We consider maintenance activity, security support, and compatibility when selecting dependencies, and plan upgrades before support ends.

We keep the technology stack up to date through routine updates, planned upgrades, and vulnerability fixes for as long as the service runs. We test updates for regressions and incompatibilities before deployment. When a service is retired, we account for its consumers and data retention obligations before removing it.
