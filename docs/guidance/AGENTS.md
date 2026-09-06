# Agent Instructions: Guidance

Use these instructions when creating or converting a page under `docs/guidance/`.

## Purpose

Guidance shows a known-good way to meet a standard. It contains practical, technology-specific detail and links to the standards and principles it supports.

Guidance is advisory. It does not create obligations.

## Audience And Voice

Write for readers who already understand the engineering domain. Use direct, informative language and established domain terminology. Explain a term only when this repository gives it a meaning a knowledgeable reader would not infer.

Use advisory and descriptive language such as "Prefer X when...", "A common approach is...", or "This example assumes...". Every sentence must convey context, an approach, a decision, a trade-off, a risk, or an instruction.

Do not add slogans, metaphors, playful phrasing, conversational asides, rhetorical questions, motivational framing, or invented labels.

Guidance must not use RFC 2119 keywords to create an obligation. It may quote an existing standard when the quotation is attributed by tag and linked to its source.

## Page Format

A guidance file sits under `docs/guidance/<category>/` and uses this shape:

```markdown
---
reviewed: YYYY-MM-DD
---

# <Guidance Title>

`gdn-<category>-<guidance>`

## Summary

> <One sentence stating what this helps the reader do.>

## Supports

- [<Standard>](../../standards/<category>/<page>.md) - `<standard tag or grouping stem>`
- [<Principle>](../../principles/<page>.md)

## Context

<Assumptions, when the guidance applies, and when it does not. Include relevant tools and versions.>

## Approach

### <Task or decision>

<Steps, decisions, criteria, configuration, reference material, code blocks, tables, or Mermaid diagrams.>

## Alternatives & Trade-offs

<Optional viable alternatives and when each is appropriate.>

## Pitfalls

<Optional known failure modes and how to avoid them.>

## Related

- [<Related Page>](<relative-path>.md)
```

`Supports` must immediately follow `Summary` and name at least one standard or principle. Include both where both relationships exist.

Name Approach subsections for the task or decision they help the reader complete. Include `Alternatives & Trade-offs`, `Pitfalls`, and `Related` only when they add useful information. Where several approaches are legitimate, present the alternatives and when each is suitable.

The `reviewed` date records when the guidance was last checked against current practice. Delete or mark guidance superseded when it no longer reflects current practice.

## Guidance Tags

Guidance is cited by tag. Place one tag on its own line directly beneath the page title:

```text
gdn-<category>-<guidance>
```

The `gdn-` prefix distinguishes guidance from standards tagged with `std-`. The category abbreviates the containing folder. The guidance segment usually matches the filename without its extension.

- Write tags in lowercase `code`, separated by hyphens, with no spaces or underscores.
- Check the repository for a collision before issuing a tag.
- Never reuse or reassign an issued tag.
- Do not change a tag when its title, page, or path changes.

## Creating Guidance

Identify the standards and principles the guidance supports before writing the approach. Keep the approach practical and specific enough to apply. State assumptions, applicability, technologies, and versions in `Context` so readers can judge whether the guidance fits their situation.

Practical content may include commands, snippets, screenshots, tool configuration, worked procedures, decision criteria, and reference data. Guidance may describe one good route without making it the only acceptable route unless the linked standard requires that method.

## Converting Existing Pages

Produce finished documentation that is ready for review and publication.

- Preserve the source's intent, terminology, and level of certainty.
- Keep source information unless it is relocated deliberately within the same page.
- Add only what the new structure needs.
- Do not add unsupported background, examples, interpretation, or persuasion.
- Complete the conversion even when the source is unclear or does not fit the target format. Preserve the affected content and report concerns in the completion response.
- Do not create or update an audit file.

Existing pages are inputs, not templates for voice or structure. The page must not mention the source, conversion, previous wording, findings, or reviewers.

Classify existing references under `Supports` or `Related`. Do not add a weak relationship to fill a section. Report missing support relationships, unresolved references, unverifiable instructions, and outdated technology or version details.

## Guidance Indexes

Each guidance category uses this index shape:

```markdown
# <Category Name>

## Overview

<Why the category exists and what it covers.>

## Directory

#### <Page Title>

`<gdn-tag>`

<The page Summary sentence, copied verbatim.>

[Read more](<page>.md).
```

A new guidance category needs its own `index.md` and a `nav:` block in `mkdocs.yml`.

## Finish

Before completing the work:

- Confirm that required sections contain finished content and optional sections add value.
- Confirm that the tag is correctly formatted and unique across the repository.
- Confirm that every relative link resolves.
- Add new pages or categories to `mkdocs.yml` and update category indexes where required.
- Report what was added and list all concerns in the completion response.
