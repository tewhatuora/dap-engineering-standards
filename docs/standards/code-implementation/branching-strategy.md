# Branching Strategy

## Summary

> Every repository follows one defined branching model, with short-lived branches merged through reviewed and verified changes.

## Standards

### Defined Branching Model

These requirements describe how a repository's branching model stays deliberate and documented.

1. A repository **MUST** use a single, explicitly defined branching model.
2. The branching model in use **MUST** be documented in the repository's `README` or a location linked from it.
3. The branching model **MUST** be applied consistently to application code, infrastructure code, and pipeline definitions held in the same repository.

#### References

- [Everything as Code](../../principles/everything-as-code.md)

### Approved Branching Models

These requirements address how a branching model is chosen to match a repository's release pattern.

1. A repository **MUST** adopt either trunk-based development or Gitflow as its branching model.
2. Under either branching model, a branch **MUST NOT** be created to represent a deployment environment, such as a staging or production branch; environment-specific behaviour **MUST** be managed independently of the branching model.
3. Trunk-based development **SHOULD** be used where a repository is released frequently and only one version is maintained in production at a time.
4. Where trunk-based development is used, incomplete work **SHOULD** be merged behind a feature flag so it is not exposed to users before it is ready.
5. Gitflow **SHOULD** be used where a repository must maintain multiple released versions in parallel, or where a release requires a formal stabilisation period before publication.

#### References

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Feature Flagging](../delivery-release/feature-flagging.md)

### Short-Lived Branches

These requirements cover how a branch stays short-lived and in sync with the branch it will merge into.

1. A branch created for a discrete unit of work, such as a feature, fix, or routine maintenance task, **SHOULD** be merged within a few days of creation, so its changes are integrated and tested while still fresh.
2. A branch **SHOULD** be kept in sync with the integration branch it will merge into, through frequent rebasing or merging, to limit divergence and merge conflict risk.
3. A branch that remains open longer than a few days **SHOULD** be investigated, and either merged, split into smaller units, or deleted if the work is no longer needed.

### Branch Naming Conventions

These requirements set out how a branch's name makes its purpose and origin identifiable.

1. A branch name **SHOULD** follow the pattern below, using one of the recommended prefixes, and include a short, descriptive reference to the work it contains, such as a ticket or issue identifier.
2. A branch naming convention, once adopted, **MUST** be applied consistently across a repository so a branch's purpose and origin can be determined from its name alone.

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

### Protected Branches & Required Checks

These requirements guide how a protected branch is changed only through a reviewed merge request that has passed its required checks.

1. An integration, release, or hotfix branch **MUST** be protected from direct pushes; a change **MUST** be merged only through a merge request that has received the review and approval required for the repository.
2. A merge request **MUST NOT** be merged until its required automated checks, such as build, test, and static analysis, have passed.
3. Force-pushing to, or deleting, a protected branch **MUST** be restricted to a limited, deliberately authorised set of accounts.

#### References

- [Code Review](code-review.md)
- [Automation First](../../principles/automation-first.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)
- [Static Code Analysis](static-code-analysis.md)
- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Merge Strategy & History Integrity

These requirements describe how a repository's commit history stays intact and traceable under one documented merge strategy.

1. A repository **MUST** use one defined merge strategy, such as squash merging or fast-forward merging, applied consistently for merges into a protected branch.
2. The merge strategy in use **MUST** be documented in the repository's `README` or a location linked from it.
3. The commit history of a protected branch **MUST NOT** be rewritten, such as through a force-push that alters existing commits, once another contributor may have based work on it.
4. A merge into a protected branch **MUST** remain traceable to the merge request that introduced it, including its review and approval record.

#### References

- [Version Control](version-control.md)

### Release & Hotfix Branches

These requirements address how a release or hotfix branch stays scoped to the work it was created to stabilise or fix.

1. Where a release branch is used, it **SHOULD** be created from a specific, identifiable point on the integration branch, and **SHOULD** remain open only for the stabilisation period leading up to that release.
2. Where a hotfix branch is used to forward-fix a production issue rather than resolve it through a rollback, it **SHOULD** be created from the released state it is fixing, and its change **MUST** be merged back into every branch that requires the fix once validated.
3. A code change unrelated to the release or fix being stabilised **MUST NOT** be merged into a release or hotfix branch.

#### References

- [Release Strategy](../delivery-release/release-strategy.md)
- [Rollback Strategy](../delivery-release/rollback-strategy.md)

### Branch Cleanup & Staleness Review

These requirements cover how a repository stays free of merged and stale branches.

1. A branch **MUST** be deleted once it has been merged, unless it is a protected branch.
2. A repository **SHOULD** be reviewed periodically for stale, unmerged branches, and a branch with no active work **SHOULD** be merged, rebased, or deleted.
