---
last_edited: 2026-09-09
---

# Version Control

## Authoritative Repository

### Summary

A codebase has exactly one authoritative, backed-up Git repository, and adopted changes are merged into it.

### Standards

1. `std-code-authoritative-repository-01` A codebase's source code, infrastructure definitions, and pipeline definitions **MUST** be held in one designated, Git-based repository, which serves as the definitive record for that codebase's current and historical state.
2. `std-code-authoritative-repository-02` A fork, mirror, or local copy of a repository **MUST NOT** be treated as an alternative source of truth.
3. `std-code-authoritative-repository-03` A change intended for adoption **MUST** be merged back into the designated repository.
4. `std-code-authoritative-repository-04` The designated repository **MUST** be recoverable from a backup or equivalent mechanism independent of any single contributor's local clone, so accidental deletion or corruption does not result in permanent loss of the codebase's history.

### Related Standards

- [Backup & Disaster Recovery](../operations-observability/backup-disaster-recovery.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)

## Repository Hygiene

### Summary

Generated, editor-specific, and large binary content stays out of a repository's tracked history.

### Standards

1. `std-code-repository-hygiene-01` A file that is generated or built from a repository's own tracked source, such as a compiled artifact or an installed dependency directory, or that is specific to an individual's editor, operating system, or workstation, **SHOULD** be excluded from version control through an ignore mechanism.
2. `std-code-repository-hygiene-02` A binary asset not reproducible from source and large enough to degrade a repository's performance, such as a media file or dataset, **SHOULD** be stored through a mechanism designed for that content.

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)

## Sensitive Data

### Summary

A secret is excluded from repository content and metadata; any merged secret is immediately rotated and purged from history.

### Standards

1. `std-code-sensitive-data-01` A secret, credential, private key, or other sensitive value **MUST NOT** be committed to a repository.
2. `std-code-sensitive-data-02` A sensitive value **MUST NOT** be placed in repository metadata, such as a commit message, branch name, tag, or change description.
3. `std-code-sensitive-data-03` A merge request **MUST** be scanned automatically for a sensitive value before it can be merged, so sensitive data is never accidentally merged into a protected branch.
4. `std-code-sensitive-data-04` A merged sensitive value **MUST** be rotated immediately and purged from the repository's history.

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Commit Quality

### Summary

A commit represents one coherent change, describes its purpose and effect through the adopted message convention, distinguishes user-facing changes, and is corrected through a subsequent commit without altering protected history.

### Standards

1. `std-code-commit-quality-01` A commit **SHOULD** represent one coherent, logical change.
2. `std-code-commit-quality-02` A commit message **MUST** describe the change's purpose and effect clearly enough to be understood without consulting its author directly.
3. `std-code-commit-quality-03` A commit message **SHOULD** follow a structured, consistent convention, such as [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), so a repository's history can be processed automatically, for example to generate a `CHANGELOG.md`.
4. `std-code-commit-quality-04` An adopted commit message convention **SHOULD** distinguish a user-facing change from an internal one where the distinction drives automated changelog generation.
5. `std-code-commit-quality-05` A commit message that is generic or non-descriptive, such as one stating only that work is in progress or that a fix was made without describing it, **MUST NOT** be used.
6. `std-code-commit-quality-06` A correction to content already merged into a protected branch **MUST** be made through a new, subsequent commit.

### Related Standards

- [Code Style & Formatting](code-style-formatting.md)
- [Branching Strategy](branching-strategy.md)
- [Release Strategy](../delivery-release/release-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Commit Authorship

### Summary

Every commit is attributable to the individual or identifiable automated process that authored it, with verification enabled where supported.

### Standards

1. `std-code-commit-authorship-01` A commit **MUST** be attributable to the individual engineer or the specific automated process, such as Dependabot, that authored it.
2. `std-code-commit-authorship-02` A shared, generic, or anonymous account **MUST NOT** be used to author a commit.
3. `std-code-commit-authorship-03` A protected branch **SHOULD** enable commit verification where the repository supports signatures tied to an author's identity.
4. `std-code-commit-authorship-04` An automated process that commits changes, such as a routine dependency or content update, **MUST** be identifiable as distinct from a human author.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Change Traceability

### Summary

A change remains traceable from its branch through its merge request and commit to an immutable release tag, with an accountable human identified for material AI contributions.

### Standards

1. `std-code-change-traceability-01` A change **MUST** remain traceable from the branch that introduced it, through the merge request that proposed it and the commit that integrated it into a protected branch, to the tag that marks its release where one applies.
2. `std-code-change-traceability-02` A tag marking a released or published state **MUST NOT** be moved, deleted, or reused to reference different content.
3. `std-code-change-traceability-03` Where an AI tool materially contributed to a change, the record of that change **MUST** retain enough context to identify the human accountable for it.

### Related Standards

- [Branching Strategy](branching-strategy.md)
- [Code Review](code-review.md)
- [Release Strategy](../delivery-release/release-strategy.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [AI-Assisted Engineering](../../principles/engineering-practice/ai-assisted-engineering.md)

- [Automation](../../principles/engineering-practice/automation.md)
