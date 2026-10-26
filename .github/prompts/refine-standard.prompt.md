---
name: refine-standard
description: "Refine one engineering standards page for actionable, human-verifiable obligations, complete principle coverage, and consistent prose and references."
argument-hint: "Provide one docs/standards/<category>/<page>.md path, or attach the standards page."
agent: agent
---

# Refine one standards page

Revise the single standards page supplied with this request into finished documentation ready for human review. Complete the prose, principle-coverage, and reference work together. This is a substantive content revision, not just an audit or a mechanical format conversion.

## Target and scope

- Use the one standards page supplied as a path or attachment. If the target is missing or ambiguous, ask for exactly one page. Do not use this prompt file as the target.
- If an attachment is a read-only snapshot, locate its workspace counterpart before editing. Never edit the snapshot.
- Work on one primary standards page at a time. Related principles, indexes, and reciprocal references may need changes, but do not batch-rewrite other standards pages.
- Preserve unrelated worktree changes. Leave the result uncommitted for review.

## Read the conventions first

Read the applicable repository instructions, including:

- [Standards instructions](../../docs/standards/AGENTS.md)
- [Principles instructions](../../docs/principles/AGENTS.md)
- [Contributing guide](../../CONTRIBUTING.md)

Read neighbouring standards and principles to establish the existing prose and presentation conventions. Follow those conventions rather than introducing a new voice or link format.

## Preserve effective wording

- Review all existing content, but retain wording that already meets the goals and repository conventions. Reword only where it materially improves correctness, clarity, actionability, or coverage. This applies to obligations, Summaries, Reasoning, and principle prose.
- Do not paraphrase existing lines, swap synonyms, or restructure clear prose merely for stylistic preference or to make the page look revised. Keep necessary edits local and leave unaffected lines unchanged. A thorough review does not require a rewrite of every line.

## Make every standard actionable and human-verifiable

For every numbered obligation, apply this test:

> Can an engineer determine what action or state satisfies this requirement, and can another person inspect evidence and reach a defensible compliance decision without asking what the author intended?

- State a clear subject, required outcome, scope, and applicability condition. Keep each numbered item to one independently assessable obligation.
- Human judgement is acceptable when the judgement has clear boundaries. Do not require automation or numerical thresholds where professional review is sufficient.
- Replace vague triggers, ambiguous controls, and unsupported guarantees with observable conditions. Distinguish performing a check from enforcing its result.
- Where a limit, deadline, convention, or other criterion is necessary, reuse an existing definition when one genuinely applies. Otherwise ask about the policy choice; do not invent a global threshold or deadline. If a requirement relies on a documented criterion, make its existence and discoverability assessable.
- Preserve the intended policy, scope, and RFC 2119 obligation strength unless the user approves a change. Necessary rewording must not silently strengthen or weaken an obligation.
- Preserve existing standard tags. When splitting a compound obligation requires a new tag, check for collisions, retain the existing tag, and report the additional tag. Do not reuse or renumber issued tags.
- Make each Summary match the scope, conditions, and obligation strength of its standards. A Summary must not turn a SHOULD recommendation into an unconditional requirement.
- Prefer required outcomes over procedures unless the method is itself the point. Do not add implementation tutorials, slogans, or undefined sections.

Inspect the existing material before asking questions. Batch genuine policy decisions into a small, focused clarification rather than repeatedly interrupting the work.

## Establish genuine principle coverage

Assess the numbered obligations against the actual Summary and Reasoning of candidate principles, not just their titles, categories, or existing links.

- Every grouping needs a non-empty `Implements These Principles` section, and every obligation needs a defensible basis in the linked values.
- A broader principle can support a specific obligation without using identical terminology. However, a shared topic, enabling capability, or broadly compatible intent is not sufficient evidence of implementation.
- Be able to identify the numbered obligation that justifies each principle reference. Do not use umbrella citations to hide gaps.
- If no existing principle states the necessary engineering value, draft the minimum necessary new principle or carefully scoped extension for review. Prefer an appropriate existing principle page over a new page.
- One coherent principle may support several standard groupings. Do not create one principle per standard merely to fill the sections, or restate detailed standards as principles.
- New principles state an independent engineering position and explain why it is valued. They do not contain RFC 2119 obligations, tool or vendor choices, thresholds, or worked procedures.
- Match the existing prose: concrete subjects, direct declarative sentences, established terminology, and clear explanations of practical consequences. Avoid abstract wording where ordinary engineering language is clearer.
- Preserve existing principles' positions. Do not stretch a principle or invent a new position merely to justify a questionable obligation. Ask when resolving the gap requires an unresolved policy choice.
- Check for contradictions and competing requirements. Preserve genuine boundaries, including cases where security or privacy remediation overrides normal retention or change-control expectations.

Do not remove weak principle citations and then declare the page finished with uncovered groupings. Resolve the foundation, or explicitly identify the unresolved decision as a blocker.

## Audit and wire the relationships

Read the actual obligations in every proposed Related Standards grouping. Retain only direct, useful relationships; retarget or remove references that are merely topical.

For each new or substantively changed principle, search the full standards collection for genuine implementations. Add the corresponding references in both directions. Keep changes to other standards limited to the necessary references and metadata; do not rewrite their obligations as a side effect.

Follow these directional conventions:

| Location | Link text | Target |
| --- | --- | --- |
| Standards: `Related Standards` | `<Standard Page>: <Standard Grouping>` | Standard page plus its relevant grouping anchor |
| Standards: `Implements These Principles` | Specific principle heading | Principle page plus that principle's heading anchor |
| Principles: `Implemented By These Standards` | Standard page title | Standard page only, without a section anchor |

In `Related Standards`, take the page title and grouping title from the destination's actual headings, joined by a colon and a space. Include both titles for every anchored link, even when the page appears only once. Use separate bullets for different groupings on the same page:

```markdown
### Related Standards

- [Code Review: Independent Review](../code-implementation/code-review.md#independent-review)
- [Code Review: Risk-Based Review](../code-implementation/code-review.md#risk-based-review)
```

Within each principle's `Implemented By These Standards` section, list each implementing standard page once. Use only the page title, without `Page: Grouping` labels or a duplicate page for each implementing grouping. Keep the exact obligation-to-principle mapping in your working analysis, not in the published prose or a new audit file.

Update materially changed pages' metadata. Update a principle index description when its page's position has broadened, using one concise unifying statement rather than a list of sections. Change navigation only if a new page actually requires it.

## Verify the complete outcome

Before declaring the work complete, confirm:

- Every target obligation is actionable and human-verifiable as written.
- Every grouping has genuine principle coverage, and every retained relationship is justified by the linked content.
- Principle prose matches the surrounding pages and remains distinct from normative standards.
- Summaries, conditions, exceptions, and related obligations are consistent.
- Existing effective wording is preserved; each prose change adds concrete value beyond stylistic preference.
- Local links and heading anchors resolve; anchored Related Standards labels match `<Standard Page>: <Standard Grouping>` using the destination's actual headings; reference sections are not empty; principle backlinks have no duplicate pages or section anchors.
- Reciprocal references are present using the intentionally different page-level and grouping-level conventions above.
- Existing tags and intended obligation strengths are preserved. Secondary standards have not changed outside the necessary references and metadata.

Use the repository's existing documentation checks appropriate to the changes. If building the site, use temporary output outside the tracked generated site and clean it up afterward. Do not regenerate or edit the published site, add validation tooling unnecessarily, commit, or publish.

Finish with a concise review summary covering the substantive changes, any added or extended principles, additional tags or approved policy changes, and validation results. Identify unresolved decisions honestly; do not claim complete coverage when a foundation is still missing.
