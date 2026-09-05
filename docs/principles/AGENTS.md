# Agent Instructions: Principles

Use these instructions when creating or converting a page under `docs/principles/`.

## Purpose

A principle states what is valued and why. It gives standards something to implement and
gives teams a basis for decisions that no standard covers.

Principles are cited by links and do not carry tags. Use `Implemented By These Standards` to
name standards that genuinely implement the principle.

## Audience And Voice

Write for readers who already understand the engineering domain. Use direct, informative
language and established domain terminology. Explain a term only when this repository gives it
a meaning a knowledgeable reader would not infer.

Use declarative present tense and state each position as fact. Every sentence must convey a
position or reason. Do not add slogans, metaphors, playful phrasing, conversational asides,
rhetorical questions, motivational framing, or invented labels.

Principles do not contain RFC 2119 obligations. They also do not name vendors, products,
tools, versions, or thresholds. Internal governance and process are out of scope, as defined
in [`CONTRIBUTING.md`](../../CONTRIBUTING.md#scope).

## Page Format

A file is a topic and may contain several principles. Keep each principle separate within the
file:

```markdown
# <Topic Name>

## <Principle Name>

### Summary

<One declarative sentence stating the position.>

### Reasoning

<Why the position is held.>

### Implemented By These Standards

- [<Standard>](../standards/<category>/<page>.md)
```

`Summary` and `Reasoning` are required. `Reasoning` is prose. Include implementing standards
only where genuine implementation relationships exist. Principle pages do not include a
`Related Principles` section or other links to related principles.

Do not introduce other headings or combine several positions into one principle.

## Creating Principles

State one position in each principle. Write a Summary that expresses the position and
Reasoning that explains the problem it prevents, what it optimises for, and the experience or
evidence behind it.

Use one short paragraph for each reason or closely related set of reasons. One to three
paragraphs is normally enough. Exclude duplicated reasons, illustrative examples, closing
summaries, and background knowledge the intended reader already has.

Search the standards collection for every standard that makes an aspect of the principle
verifiable. Assess the numbered obligations within a standard, not only its page title,
summary, category, or existing references.

A standard belongs under `Implemented By These Standards` only when at least one of its
numbered obligations directly requires an outcome stated by the principle. A shared subject,
related concern, enabling capability, or broadly compatible intent is not an implementation
relationship. Be able to identify the exact obligation that justifies every link, but do not
add that evidence to the principle page.

Include every genuine implementation found across the collection. Do not limit the search to
the principle's domain, the most obvious standard pages, or the references already present in
the source. Do not restate standards in the principle or add a weak relationship to fill the
section.

## Converting Existing Pages

Complete the structural conversion and produce finished documentation for review.

- Preserve the source position, including its subject, breadth, strength, and intent.
- Keep every source grouping in the same file. Do not delete or merge groupings or absorb one
  into another.
- Add only what the target format requires.
- Complete the conversion even when the source is unclear or does not fit the target format.
  Report concerns in the completion response rather than blocking the conversion.

Where the source does not state its reasoning, write the least expansive interpretation that
supports the position. Report any uncertainty in the completion response. Reasoning must not
widen, soften, strengthen, or redirect the position.

Preserve the source's terminology and level of certainty. Add only what the new structure
needs. Do not add unsupported background, examples, interpretation, or persuasion. Existing
pages are inputs, not templates for voice or structure.

Treat each existing `###` grouping as a separate principle:

1. Keep the page title as `#`.
2. Promote each grouping name to `##`.
3. Give each grouping its own `### Summary`, `### Reasoning`,
  and `### Implemented By These Standards` sections, in that order.
4. Assess each existing standard reference against the implementation test and retain every
  qualifying link. Do not carry principle-to-principle references into the converted page.
5. Search the full standards collection for additional implementing standards. Existing
  references are inputs to assess, not an exhaustive implementation list.

Write in declarative present tense as settled documentation. The page must not mention the
source, the conversion, previous wording, findings, or reviewers.

In conversion-written prose:

- Use ordinary punctuation instead of em dashes standing in for commas, colons, or full stops.
- Avoid contrast constructions such as "X, not Y" when the direct statement is sufficient.
- Do not pad lists to create groups of three.
- Avoid *robust*, *seamless*, *leverage*, *ensure*, *crucial*, *comprehensive*, *delve*,
  *foster*, *underscore*, and *landscape* where a plain term is available.
- Do not end a paragraph by restating it or force paragraphs and lists into a uniform rhythm.
- Use bold only where emphasis is necessary.

### Source Content That Does Not Fit

Do not silently discard source content. If numbered obligations or other material have no
valid destination in the principle format, retain them in their grouping, complete the rest of
the conversion, and report the concern in the completion response.

Apply the numbered-obligation test under `Implemented By These Standards` to every link,
including links inherited from the source. Before reporting that no standard implements a
principle, search the full standards collection using the principle's subject, outcomes, and
reasoning, and inspect candidate obligations. Do not add a weak link merely to fill the
section. Report when no standard passes this test or when a linked standard is only a stub.

Also report unclear positions, duplicated obligations, non-obligation numbered items, and
source claims that appear incorrect. Do not silently correct them during conversion.

## Principles Index

Each category index under `docs/principles/` uses this shape:

```markdown
# <Category Name>

## Overview

<Why the category exists and what it covers.>

Choose a principle below to read its full reasoning.

## Principles

### <Page Title>

<One short sentence stating the page's core principle.>

[Read more](<page>.md).
```

The root `docs/principles/index.md` uses the same structure with `# Principles`,
`## Categories`, and a sentence directing the reader to choose a category.

Write a concise tagline that states the page's unifying position. Do not summarise its sections
or list the topics it covers. Principle index entries do not carry tags.

## Finish

Before completing the work:

- Confirm that every source grouping remains and has been converted separately.
- Confirm that each section contains finished documentation and every relative link resolves.
- Add new pages to `mkdocs.yml` and update `index.md` where required.
- Report what was added and list all concerns in the completion response.
