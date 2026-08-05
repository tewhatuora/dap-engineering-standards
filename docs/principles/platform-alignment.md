# Platform Alignment

## Objective

Platform Alignment establishes the organisation's shared platforms and tooling as the default foundation for delivering software, rather than each team independently building or operating bespoke equivalents. It directs engineering effort toward adopting and improving shared platform capability, reducing duplicated infrastructure effort and fragmented operational practice across teams.

## Principles

### Shared Platforms as the Default

These principles make the organisation's shared platforms the default for compute, orchestration, and managed services.

1. Teams must use the organisation's designated shared platforms for compute and runtime hosting, container orchestration, and managed services as the default, rather than operating independent equivalents.
2. Environment provisioning and infrastructure delivery should use the organisation's shared environment strategy and infrastructure-as-code tooling.
3. A new service should be built on the shared platform from inception, rather than independently built and migrated onto it later.

#### References

[Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)\
[Containerisation Standards](../standards/platform-infrastructure/containerisation-standards.md)\
[Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)\
[Container Orchestration](../standards/platform-infrastructure/container-orchestration.md)\
[Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)\
[Environment Strategy](../standards/platform-infrastructure/environment-strategy.md)\
[Infrastructure as Code](../standards/platform-infrastructure/infrastructure-as-code.md)

### Platform as the Path of Least Resistance

These principles keep the shared platform the easiest, best-supported way to deliver software.

1. The shared platform route should be the easiest and best-supported way to deliver software, so that alignment is the natural choice rather than one requiring extra effort.
2. Friction encountered while using the shared platform should be treated as a defect to remediate, not an accepted cost of alignment.
3. Onboarding a new service onto the shared platform should require minimal manual setup.

### Justified, Approved Deviation

These principles require a deviation from the shared platform to be justified, approved, and periodically reassessed.

1. A deviation from the shared platform must be justified by a genuine, documented requirement the platform does not meet, not by individual or team preference.
2. A deviation must be approved through a defined governance process before it is adopted.
3. An approved deviation should be reassessed periodically, since the platform gap that justified it may later be resolved.

#### References

[Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Reducing Fragmentation & Duplication

These principles consolidate platform capability built independently by more than one team.

1. Platform capability built or operated independently by more than one team should be identified and consolidated into a single shared capability.
2. A new platform capability should be evaluated against existing shared capability before it is built, to avoid introducing an avoidable duplicate.

#### References

[Reuse Before Reinvention](reuse-before-reinvention.md)

### Evaluating New or Alternative Capability

These principles evaluate a new platform capability through a defined process before wider adoption.

1. A team may trial a new or alternative platform capability through a defined evaluation process rather than adopting it unilaterally into production.
2. A successful evaluation should be fed back into the shared platform for broader adoption, rather than remaining a one-off, team-specific exception.
3. An unsuccessful or discontinued evaluation must be decommissioned rather than left running unmanaged.
