# Platform Alignment

## Summary

> Build on the organisation's shared platform by default, and justify any deviation from it.

## Principles

### Shared Platforms as the Default

> A new service is built on the organisation's shared platform from the start, not migrated onto it later.

1. Teams **MUST** use the organisation's designated shared platforms for compute and runtime hosting, container orchestration, and managed services as the default, rather than operating independent equivalents.
2. Environment provisioning and infrastructure delivery **SHOULD** use the organisation's shared environment strategy and infrastructure-as-code tooling.
3. A new service **SHOULD** be built on the shared platform from inception, rather than independently built and migrated onto it later.

#### References

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Containerisation](../../standards/platform-infrastructure/containerisation.md)
- [Serverless](../../standards/platform-infrastructure/serverless.md)
- [Container Orchestration](../../standards/platform-infrastructure/container-orchestration.md)
- [Managed Services](../../standards/platform-infrastructure/managed-services.md)
- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)
- [Infrastructure as Code](../../standards/platform-infrastructure/infrastructure-as-code.md)

### Platform as the Path of Least Resistance

> The shared platform stays the easiest, best-supported way to deliver software, so alignment needs no extra effort.

1. The shared platform route **SHOULD** be the easiest and best-supported way to deliver software, so that alignment is the natural choice rather than one requiring extra effort.
2. Friction encountered while using the shared platform **SHOULD** be treated as a defect to remediate, not an accepted cost of alignment.
3. Onboarding a new service onto the shared platform **SHOULD** require minimal manual setup.

### Governed Platform Deviation

> A deviation from the shared platform is justified by a genuine gap, approved, and reassessed periodically.

1. A deviation from the shared platform **MUST** be justified by a genuine, documented requirement the platform does not meet, not by individual or team preference.
2. A deviation **MUST** be approved through a defined governance process before it is adopted.
3. An approved deviation **SHOULD** be reassessed periodically, since the platform gap that justified it may later be resolved.

#### References

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)

### Fragmentation & Duplication

> Platform capability built independently by more than one team is identified and consolidated into one shared capability.

1. Platform capability built or operated independently by more than one team **SHOULD** be identified and consolidated into a single shared capability.
2. A new platform capability **SHOULD** be evaluated against existing shared capability before it is built, to avoid introducing an avoidable duplicate.

#### References

- [Reuse Before Reinvention](../engineering-practice/reuse-before-reinvention.md)

### Platform Capability Evaluation

> A new platform capability is trialled through a defined evaluation process, not adopted into production unilaterally.

1. A team **MAY** trial a new or alternative platform capability through a defined evaluation process rather than adopting it unilaterally into production.
2. A successful evaluation **SHOULD** be fed back into the shared platform for broader adoption, rather than remaining a one-off, team-specific exception.
3. An unsuccessful or discontinued evaluation **MUST** be decommissioned rather than left running unmanaged.

#### References

- [Technology Stack Governance](../../standards/architecture-system-design/technology-stack-governance.md)
