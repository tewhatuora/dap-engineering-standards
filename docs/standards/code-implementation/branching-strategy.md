# Branching Strategy

## Objective

Branching Strategy establishes a consistent model for creating, integrating, and retiring branches within a version-controlled repository. It keeps a change moving through a defined path from branch to merge, so work can be reviewed and integrated before it diverges from the rest of the repository.

## Standards

### Deliberate, Documented Branching Model

These requirements keep a repository's branching model explicit, documented, and applied consistently to every kind of code it holds.

1. A repository must use a single, explicitly defined branching model.
2. The branching model in use must be documented in the repository's `README` or a location linked from it.
3. The branching model must be applied consistently to application code, infrastructure code, and pipeline definitions held in the same repository.

#### References

[Everything as Code](../../principles/everything-as-code.md)

### Approved Branching Models

These requirements limit a repository to trunk-based development or Gitflow, matching the model to its release pattern.

1. A repository must adopt either trunk-based development or Gitflow as its branching model.
2. Under either branching model, a branch must not be created to represent a deployment environment, such as a staging or production branch; environment-specific behaviour must be managed independently of the branching model.
3. Trunk-based development should be used where a repository is released frequently and only one version is maintained in production at a time.
4. Where trunk-based development is used, incomplete work should be merged behind a feature flag so it is not exposed to users before it is ready.
5. Gitflow should be used where a repository must maintain multiple released versions in parallel, or where a release requires a formal stabilisation period before publication.

#### References

[Environment Strategy](../platform-infrastructure/environment-strategy.md)\
[Feature Flagging](../delivery-release/feature-flagging.md)

### Short-Lived Branches

These requirements merge a branch quickly and keep it in sync with the branch it will merge into.

1. A branch created for a discrete unit of work, such as a feature, fix, or routine maintenance task, should be merged within a few days of creation, so its changes are integrated and tested while still fresh.
2. A branch should be kept in sync with the integration branch it will merge into, through frequent rebasing or merging, to limit divergence and merge conflict risk.
3. A branch that remains open longer than a few days should be investigated, and either merged, split into smaller units, or deleted if the work is no longer needed.

### Branch Naming Conventions

These requirements make a branch's purpose and origin identifiable from its name alone.

1. A branch name should follow the pattern below, using one of the recommended prefixes, and include a short, descriptive reference to the work it contains, such as a ticket or issue identifier.
2. A branch naming convention, once adopted, must be applied consistently across a repository so a branch's purpose and origin can be determined from its name alone.

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

These requirements protect a branch from direct pushes and require its checks and approvals before merge.

1. An integration, release, or hotfix branch must be protected from direct pushes; a change must be merged only through a merge request that has received the review and approval required for the repository.
2. A merge request must not be merged until its required automated checks, such as build, test, and static analysis, have passed.
3. Force-pushing to, or deleting, a protected branch must be restricted to a limited, deliberately authorised set of accounts.

#### References

[Code Review](code-review.md)\
[Automation First](../../principles/automation-first.md)\
[Continuous Integration](../delivery-release/continuous-integration.md)\
[Static Code Analysis](static-code-analysis.md)\
[Security by Design](../../principles/security-by-design.md)\
[Identity & Access Management](../security-identity/identity-access-management.md)

### Merge Strategy & Commit History Integrity

These requirements define a repository's merge strategy, document it, and keep commit history intact.

1. A repository must use one defined merge strategy, such as squash merging or fast-forward merging, applied consistently for merges into a protected branch.
2. The merge strategy in use must be documented in the repository's `README` or a location linked from it.
3. The commit history of a protected branch must not be rewritten, such as through a force-push that alters existing commits, once another contributor may have based work on it.
4. A merge into a protected branch should remain traceable to the merge request that introduced it, including its review and approval record.

#### References

[Version Control](version-control.md)

### Release & Hotfix Branches

These requirements govern how a release or hotfix branch is created, scoped, and merged back.

1. Where a release branch is used, it should be created from a specific, identifiable point on the integration branch, and should remain open only for the stabilisation period leading up to that release.
2. Where a hotfix branch is used to forward-fix a production issue rather than resolve it through a rollback, it should be created from the released state it is fixing, and its change must be merged back into every branch that requires the fix once validated.
3. A code change unrelated to the release or fix being stabilised must not be merged into a release or hotfix branch.

#### References

[Release Strategy](../delivery-release/release-strategy.md)\
[Rollback Strategy](../delivery-release/rollback-strategy.md)

### Branch Cleanup & Staleness Review

These requirements remove a merged branch and periodically review a repository for stale ones.

1. A branch must be deleted once it has been merged, unless it is a protected branch.
2. A repository should be reviewed periodically for stale, unmerged branches, and a branch with no active work should be merged, rebased, or deleted.
