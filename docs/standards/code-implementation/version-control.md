# Version Control

## Objective

Version Control establishes the version-controlled repository as a codebase's sole authoritative source, holding every change to it in a history that stays clean, accurate, and free of sensitive or extraneous content. It keeps a codebase's current state and its complete history of change verifiable and attributable, so how a codebase reached its present form is never in doubt.

## Standards

### Mandatory, Authoritative Repository

These requirements set out how a codebase is held to a single, authoritative version-controlled repository.

1. A codebase's source code, infrastructure definitions, and pipeline definitions must be held in one designated, Git-based repository, which serves as the definitive record for that codebase's current and historical state.
2. A fork, mirror, or local copy of a repository must never be treated as an alternative source of truth; a change intended for adoption must be merged back into the designated repository.
3. The designated repository must be recoverable from a backup or equivalent mechanism independent of any single contributor's local clone, so accidental deletion or corruption does not result in permanent loss of the codebase's history.

#### References

[Everything as Code](../../principles/everything-as-code.md)\
[Reliability & Resilience](../../principles/reliability-resilience.md)\
[Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Atomic, Well-Described Commits

These requirements address how a commit is scoped to one coherent logical change and described clearly enough to remain part of a repository's history as a meaningful record.

1. A commit should represent one coherent, logical change; an unrelated change must not be combined into the same commit.
2. A commit message must describe the change's purpose and effect clearly enough to be understood without consulting its author directly.
3. A commit message should follow a structured, consistent convention, such as [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), so a repository's history can be processed automatically, for example to generate a `CHANGELOG`.
4. A commit message that is generic or non-descriptive, such as one stating only that work is in progress or that a fix was made without describing it, must not be used.
5. A correction to content already merged into a protected branch must be made through a new, subsequent commit; the historical record of the original change must not be altered or deleted to make the correction.

#### References

[Coding Standards & Formatting](coding-standards-formatting.md)\
[Database Migration Tooling](database-migration-tooling.md)\
[Branching Strategy](branching-strategy.md)

### Commit Authorship Integrity

These requirements cover how every commit is tied to the individual or automated process that actually authored it.

1. A commit must be attributable to the individual engineer or the specific automated process, such as Dependabot, that authored it; a shared, generic, or anonymous account must not be used to author a commit.
2. Where a repository supports commit verification, such as a signature tied to its author's identity, it should be enabled for a protected branch.
3. An automated process that commits changes, such as a routine dependency or content update, must be identifiable as distinct from a human author.

#### References

[Identity & Access Management](../security-identity/identity-access-management.md)\
[AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Change Traceability

These requirements describe how a change stays traceable through every stage of a repository's history, from the branch that introduced it to the point it is released.

1. A change must remain traceable from the branch that introduced it, through the merge request that proposed it and the commit that integrated it into a protected branch, to the tag that marks its release where one applies.
2. A tag marking a released or published state must be immutable once created; it must not be moved, deleted, or reused to reference different content.
3. Where an AI tool materially contributed to a change, the record of that change must retain enough context to identify the human accountable for it.

#### References

[Branching Strategy](branching-strategy.md)\
[Code Review](code-review.md)\
[Release Strategy](../delivery-release/release-strategy.md)\
[AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Repository Hygiene & Exclusions

These requirements guide how a repository's tracked history is kept free of content that does not belong in version control.

1. A file that is generated or built from a repository's own tracked source, such as a compiled artifact or an installed dependency directory, or that is specific to an individual's editor, operating system, or workstation, must be excluded from version control through an ignore mechanism rather than committed.
2. A binary asset not reproducible from source and large enough to degrade a repository's performance, such as a media file or dataset, should be stored through a mechanism designed for that content, not committed directly to a repository.

### No Sensitive Data

These requirements set out how a secret, credential, or other sensitive value is kept out of a repository entirely, including its historical commits.

1. A secret, credential, private key, or other sensitive value must not be committed to a repository; removing it from a later commit does not remove it from the repository's history, so it must never be introduced in the first place.
2. This prohibition extends beyond file content to a repository's metadata, such as a commit message, branch name, tag, or change description; a sensitive value must not be placed in any of these either.
3. A repository must be scanned automatically for a sensitive value before it is committed or merged, so an accidental commit is caught before it reaches shared history.
4. Where a sensitive value is found to have been committed, it must be rotated immediately and purged from the repository's history, not merely removed from its current state.

#### References

[Security by Design](../../principles/security-by-design.md)\
[Automation First](../../principles/automation-first.md)\
[Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
