# Version Control

## Summary

> Keep every codebase in one authoritative, traceable repository, and keep secrets out of its history.

## Standards

### Mandatory, Authoritative Repository

A codebase lives in exactly one authoritative, backed-up Git repository; no fork or local copy is ever a source of truth.

1. A codebase's source code, infrastructure definitions, and pipeline definitions **MUST** be held in one designated, Git-based repository, which serves as the definitive record for that codebase's current and historical state.
2. A fork, mirror, or local copy of a repository **MUST** never be treated as an alternative source of truth; a change intended for adoption **MUST** be merged back into the designated repository.
3. The designated repository **MUST** be recoverable from a backup or equivalent mechanism independent of any single contributor's local clone, so accidental deletion or corruption does not result in permanent loss of the codebase's history.

#### References

- [Everything as Code](../../principles/everything-as-code.md)
- [Reliability & Resilience](../../principles/reliability-resilience.md)
- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Atomic, Well-Described Commits

A commit represents one coherent change, described clearly enough to stand alone as part of the repository's history.

1. A commit **SHOULD** represent one coherent, logical change; an unrelated change **MUST NOT** be combined into the same commit.
2. A commit message **MUST** describe the change's purpose and effect clearly enough to be understood without consulting its author directly.
3. A commit message **SHOULD** follow a structured, consistent convention, such as [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), so a repository's history can be processed automatically, for example to generate a `CHANGELOG.md`.
4. An adopted commit message convention **MUST** distinguish a user-facing change from an internal one, such as Conventional Commits' `feat`/`fix` versus `chore`/`docs`/`refactor` types, to drive automated changelog generation.
5. A commit message that is generic or non-descriptive, such as one stating only that work is in progress or that a fix was made without describing it, **MUST NOT** be used.
6. A correction to content already merged into a protected branch **MUST** be made through a new, subsequent commit; the historical record of the original change **MUST NOT** be altered or deleted to make the correction.

#### References

- [Coding Standards & Formatting](coding-standards-formatting.md)
- [Branching Strategy](branching-strategy.md)
- [Release Strategy](../delivery-release/release-strategy.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Commit Authorship Integrity

Every commit is attributable to the individual or automated process that actually authored it, never a shared account.

1. A commit **MUST** be attributable to the individual engineer or the specific automated process, such as Dependabot, that authored it; a shared, generic, or anonymous account **MUST NOT** be used to author a commit.
2. Where a repository supports commit verification, such as a signature tied to its author's identity, it **SHOULD** be enabled for a protected branch.
3. An automated process that commits changes, such as a routine dependency or content update, **MUST** be identifiable as distinct from a human author.

#### References

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Change Traceability

A change stays traceable from the branch that introduced it through to the tag that marks its release.

1. A change **MUST** remain traceable from the branch that introduced it, through the merge request that proposed it and the commit that integrated it into a protected branch, to the tag that marks its release where one applies.
2. A tag marking a released or published state **MUST** be immutable once created; it **MUST NOT** be moved, deleted, or reused to reference different content.
3. Where an AI tool materially contributed to a change, the record of that change **MUST** retain enough context to identify the human accountable for it.

#### References

- [Branching Strategy](branching-strategy.md)
- [Code Review](code-review.md)
- [Release Strategy](../delivery-release/release-strategy.md)
- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Repository Hygiene & Exclusions

Generated, editor-specific, and large binary content stays out of a repository's tracked history.

1. A file that is generated or built from a repository's own tracked source, such as a compiled artifact or an installed dependency directory, or that is specific to an individual's editor, operating system, or workstation, **MUST** be excluded from version control through an ignore mechanism rather than committed.
2. A binary asset not reproducible from source and large enough to degrade a repository's performance, such as a media file or dataset, **SHOULD** be stored through a mechanism designed for that content, not committed directly to a repository.

### No Sensitive Data

A secret never enters a repository, not even its metadata, and is rotated immediately if one ever is merged.

1. A secret, credential, private key, or other sensitive value **MUST NOT** be committed to a repository; removing it from a later commit does not remove it from the repository's history, so it **MUST** never be introduced in the first place.
2. This prohibition extends beyond file content to a repository's metadata, such as a commit message, branch name, tag, or change description; a sensitive value **MUST NOT** be placed in any of these either.
3. A merge request **MUST** be scanned automatically for a sensitive value before it can be merged, so sensitive data is never accidentally merged into a protected branch.
4. Where a sensitive value is found to have been merged, it **MUST** be rotated immediately and purged from the repository's history, not merely removed from its current state.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Automation First](../../principles/automation-first.md)
- [Secrets Management & Scanning](../security-identity/secrets-management-scanning.md)
