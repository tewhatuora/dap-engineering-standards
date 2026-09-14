---
last_edited: 2026-09-14
---

# Branching Strategy

## Branching Model

### Summary

A repository uses one explicitly defined branching model, documented and applied consistently to every kind of code it holds.

### Standards

1. A repository **MUST** use a single, explicitly defined branching model. `std-code-branching-model-01`
2. The branching model in use **MUST** be documented in the repository's `README` or a location linked from it. `std-code-branching-model-02`
3. The branching model **MUST** be applied consistently to application code, infrastructure code, and pipeline definitions held in the same repository. `std-code-branching-model-03`

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Approved Models

### Summary

A repository adopts trunk-based development or Gitflow according to its release model, manages environment behaviour outside branches, and uses feature flags for incomplete trunk-based work.

### Standards

1. A repository **SHOULD** adopt either trunk-based development or Gitflow as its branching model. `std-code-approved-models-01`
2. Under either branching model, a branch **MUST NOT** be created to represent a deployment environment, such as a staging or production branch. `std-code-approved-models-02`
3. Environment-specific behaviour **MUST** be managed independently of the branching model. `std-code-approved-models-03`
4. Trunk-based development **SHOULD** be used where a repository is released frequently and only one version is maintained in production at a time. `std-code-approved-models-04`
5. Where trunk-based development is used, incomplete work **SHOULD** be merged behind a feature flag so it is not exposed to users before it is ready. `std-code-approved-models-05`
6. Gitflow **SHOULD** be used where a repository must maintain multiple released versions in parallel, or where a release requires a formal stabilisation period before publication. `std-code-approved-models-06`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Implements These Principles

- [Version Control](../../principles/engineering-practice/version-control.md)

## Short-Lived Branches

### Summary

A branch merges within a few days and remains in sync with its integration branch to limit conflict risk.

### Standards

1. A branch created for a discrete unit of work, such as a feature, fix, or routine maintenance task, **SHOULD** be merged within a few days of creation, so its changes are integrated and tested while still fresh. `std-code-short-lived-branches-01`
2. A branch **SHOULD** be kept in sync with the integration branch it will merge into, through frequent rebasing or merging, to limit divergence and merge conflict risk. `std-code-short-lived-branches-02`
3. A branch that remains open longer than a few days **SHOULD** be investigated, and either merged, split into smaller units, or deleted if the work is no longer needed. `std-code-short-lived-branches-03`

### Implements These Principles

- [Fast Feedback](../../principles/engineering-practice/fast-feedback.md)
- [Version Control](../../principles/engineering-practice/version-control.md)

## Branch Naming

### Summary

A branch's name follows a consistent convention, so its purpose and origin are clear without further context.

### Standards

1. A branch name **SHOULD** follow the pattern below, using one of the recommended prefixes, and include a short, descriptive reference to the work it contains, such as a ticket or issue identifier: `std-code-branch-naming-01`

	```
	<prefix>[<identifier>-]<short-description>
	```

	| Prefix | Definition |
	| --- | --- |
	| `feat/` | New functionality or feature development |
	| `fix/` | Standard bug or defect correction |
	| `hotfix/` | Urgent production correction requiring immediate deployment |
	| `release/` | Tasks related to preparing and finalising a specific version release |
	| `refactor/` | Code restructuring that neither fixes a bug nor adds a feature |
	| `docs/` | Documentation-only changes |
	| `chore/` | Routine maintenance, dependency updates, or CI/CD configuration |
	| `test/` | Adding missing tests or correcting existing test suites |

2. A branch naming convention, once adopted, **MUST** be applied consistently across a repository so a branch's purpose and origin can be determined from its name alone. `std-code-branch-naming-02`

### Implements These Principles

- [Version Control](../../principles/engineering-practice/version-control.md)

## Protected Branches

### Summary

A protected branch changes only through a reviewed merge request that has passed its mandatory automated checks, with force-push and deletion access restricted to authorised accounts.

### Standards

1. An integration, release, or hotfix branch **MUST** be protected from direct pushes. `std-code-protected-branches-01`
2. A change **MUST** be merged only through a merge request that has received the review and approval required for the repository. `std-code-protected-branches-02`
3. A merge request **MUST NOT** be merged until its required automated checks, such as build, test, and static analysis, have passed. `std-code-protected-branches-03`
4. Force-pushing to, or deleting, a protected branch **MUST** be restricted to a limited, deliberately authorised set of accounts. `std-code-protected-branches-04`

### Related Standards

- [Code Review](code-review.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Static Code Analysis](static-code-analysis.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Automation](../../principles/engineering-practice/automation.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Merge Strategy & History

### Summary

A repository uses one documented merge strategy, and its commit history stays intact and traceable to every merge.

### Standards

1. A repository **MUST** use one defined merge strategy, such as squash merging or fast-forward merging, applied consistently for merges into a protected branch. `std-code-merge-strategy-history-01`
2. The merge strategy in use **MUST** be documented in the repository's `README` or a location linked from it. `std-code-merge-strategy-history-02`
3. The commit history of a protected branch **MUST NOT** be rewritten, such as through a force-push that alters existing commits, once another contributor may have based work on it. `std-code-merge-strategy-history-03`
4. A merge into a protected branch **MUST** remain traceable to the merge request that introduced it, including its review and approval record. `std-code-merge-strategy-history-04`

### Related Standards

- [Version Control](version-control.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Release & Hotfix Branches

### Summary

A release or hotfix branch starts from the relevant code state, remains temporary and limited to its purpose, and propagates a validated hotfix to every branch that requires it.

### Standards

1. A release branch **SHOULD** be created from a specific, identifiable point on the integration branch. `std-code-release-hotfix-branches-01`
2. A release branch **SHOULD** remain open only for the stabilisation period leading up to its release. `std-code-release-hotfix-branches-02`
3. A hotfix branch used to forward-fix a production issue **SHOULD** be created from the released state it is fixing. `std-code-release-hotfix-branches-03`
4. A hotfix branch's change **MUST** be merged back into every branch that requires the fix once validated. `std-code-release-hotfix-branches-04`
5. A code change unrelated to the release or fix being stabilised **MUST NOT** be merged into a release or hotfix branch. `std-code-release-hotfix-branches-05`

### Related Standards

- [Release Strategy](../delivery-release/release-strategy.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)

### Implements These Principles

- [Version Control](../../principles/engineering-practice/version-control.md)

## Branch Cleanup

### Summary

A merged branch is deleted, and a repository is reviewed periodically for stale, unmerged branches.

### Standards

1. A merged, unprotected branch **SHOULD** be deleted. `std-code-branch-cleanup-01`
2. A repository **SHOULD** be reviewed periodically for stale, unmerged branches. `std-code-branch-cleanup-02`
3. A branch with no active work **SHOULD** be merged, rebased, or deleted. `std-code-branch-cleanup-03`

### Implements These Principles

- [Simplicity & Maintainability](../../principles/engineering-practice/simplicity-maintainability.md)
- [Version Control](../../principles/engineering-practice/version-control.md)
