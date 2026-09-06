# Agent Instructions: Standards

Use these instructions when creating or converting a page under `docs/standards/`.

## Purpose

A standard turns one aspect of a principle into an unambiguous, verifiable obligation. Standards state what must be true. Guidance provides practical ways to meet them. Use `Implements These Principles` to name principles the grouping genuinely implements.

## Audience And Voice

Write for readers who already understand the engineering domain. Use direct, informative language and established domain terminology. Explain a term only when this repository gives it a meaning a knowledgeable reader would not infer.

Every sentence must convey an obligation, boundary, or instruction. Do not add slogans, metaphors, playful phrasing, conversational asides, rhetorical questions, motivational framing, or invented labels.

Use RFC 2119 keywords for obligations. Name the subject of each obligation and prefer the required outcome over a required method unless the method is itself the point.

Internal governance and process are out of scope, as defined in [`CONTRIBUTING.md`](../../CONTRIBUTING.md#scope).

## Page Format

A standards file sits under `docs/standards/<category>/`. A file is a topic and may contain several standard groupings. Keep each grouping separate within the file:

```markdown
# <Topic Name>

<One sentence describing the topic.>

## <Standard Grouping Name>

### Summary

<One sentence stating the required outcome.>

### Standards

#### <Optional subheading where the list needs dividing>

1. `std-<category>-<grouping>-01` <One verifiable obligation using an RFC 2119 keyword.>

### Exceptions

<Optional and omitted by default. State a genuine exception not already expressed by the Summary or standards.>

### Related Standards

- [<Standard>](../<category>/<page>.md)

### Implements These Principles

- [<Principle>](../../principles/<page>.md)
```

Do not add a page-level tag or introduce `Scope`, `Verification`, or other undefined sections. Use `####` beneath `### Standards` only when the numbered list needs subdivisions. Include `Related Standards` only where another standard has a genuine relationship to the grouping.

## Creating Standards

Each numbered item contains one obligation, is verifiable as written, and serves the outcome in its grouping's Summary.

Scope must be readable from the grouping's Summary and the named subject of each obligation. An exclusion belongs with the obligation it limits.

### Exceptions

Omit `Exceptions` by default. Include it only where a genuine exception exists that is not already expressed by the Summary or standards.

The latitude carried by **SHOULD** is not a separate exception. A boundary or condition already stated by an obligation is also not a separate exception.

## Standard Tags

Standards are cited by tag, not by position. Every numbered standard starts with a tag in this form:

```text
std-<category>-<grouping>-<nn>
```

The `std-` prefix distinguishes a standard from guidance tagged with `gdn-`. The category abbreviates the containing folder. The grouping names the individual grouping rather than the page. Numbering starts at `01` for each grouping. The stem without its number, `std-<category>-<grouping>`, cites the grouping as a whole.

- Write tags in lowercase `code`, separated by hyphens, with no spaces or underscores.
- Check the repository for a collision before issuing a tag.
- Never reuse or reassign an issued tag, including after withdrawal.
- Do not change a tag when its title, page, or path changes.
- Mark a withdrawn standard as withdrawn instead of deleting it so citations continue to resolve.

## Converting Existing Pages

Produce finished documentation that is ready for review and publication.

- Preserve each grouping's subject, scope, strength, and intent.
- Preserve standard wording, RFC 2119 keywords, order, and tags.
- Keep every source grouping and numbered item in the same file. Do not delete, merge, relocate, weaken, or strengthen standards.
- Add only what the target format requires.
- Complete the conversion even when the source is unclear, incorrect, or unverifiable. Report concerns in the completion response rather than blocking the conversion.
- Do not create or update an audit file.

Write each grouping's Summary to the same reach as its standards. Do not grant an exception that the source does not support or cite a principle from which the standards do not genuinely derive. Where intent is uncertain, use the least expansive interpretation and report the uncertainty.

Preserve the source's terminology and level of certainty. Add only what the new structure needs. Do not add unsupported background, examples, interpretation, or persuasion. Existing pages are inputs, not templates for voice or structure.

Treat each existing `###` grouping as a separate grouping:

1. Keep the page title as `#`.
2. Move the existing page summary beneath the title as an unheaded tagline.
3. Promote each grouping name to `##`.
4. Give each grouping its own `### Summary`, `### Standards`, and `### Implements These Principles` sections, in that order.
5. Include `### Exceptions` only for a genuine exception and `### Related Standards` only for a genuine standard relationship. Place either section before `### Implements These Principles`, in that order when both are present.
6. Use `####` beneath `### Standards` only when the numbered list needs subdivisions.

Write in present tense as settled documentation. The page must not mention the source, the conversion, previous wording, findings, or reviewers.

Where an existing exception is present, evaluate it against the Exceptions rules rather than carrying it across automatically.

### Conversion-Written Prose

Keep conversion-written prose consistent with the source's vocabulary and level of certainty.

In conversion-written prose:

- Use ordinary punctuation instead of em dashes standing in for commas, colons, or full stops.
- Avoid contrast constructions such as "X, not Y" when the direct statement is sufficient.
- Do not pad lists to create groups of three.
- Avoid *robust*, *seamless*, *leverage*, *ensure*, *crucial*, *comprehensive*, *delve*, *foster*, *underscore*, and *landscape* where a plain term is available.
- Do not force paragraphs and lists into a uniform rhythm.
- Reserve bold for RFC 2119 keywords.

### Conversion Concerns

Convert standards that are not verifiable as written without rewriting their obligations, and report them in the completion response.

Every standard must serve the outcome in its grouping's Summary. Report mismatches rather than moving standards between groupings.

- Split a compound item only when both obligations can retain their original wording. Report the split so any new tags can be reviewed deliberately.

Move existing principle links to `Implements These Principles` as bare links and preserve every one. Do not add a weak principle link when none genuinely applies; report the missing relationship instead.

Links to other standards have no destination in the target format. Preserve them in their grouping, complete the conversion, and report the concern.

Preserve the following source content during conversion and report where it belongs:

- Commands, snippets, screenshots, configuration, and worked procedures belong in guidance.
- Reference data belongs in guidance; its governing obligation remains a standard.
- Restated principle text should be replaced by a principle link through separate content work.
- Duplicated obligations require a deliberate decision about which page is authoritative.

Do not silently correct, remove, or relocate this material during conversion.

## Standards Indexes

Each standards category has an `index.md` using this shape:

```markdown
# <Category Name>

## Overview

<Why the category exists and what it covers.>

Choose a standard below to read it in full.

## Standards

### <Page Title>

<The linked page's tagline, copied verbatim.>

[Read more](<page>.md).
```

The root `docs/standards/index.md` uses the same structure with `# Standards`, `## Categories`, and a sentence directing the reader to choose a category.

Standards index entries do not carry tags because each page contains several tagged standards. A new category needs its own index and a `nav:` block in `mkdocs.yml`.

## Finish

Before completing the work:

- Confirm that every source grouping and numbered item remains.
- Confirm that sections follow the target order and every relative link resolves.
- Confirm that tags are correctly formatted and unique across the repository.
- Add new pages or categories to `mkdocs.yml` and update category indexes where required.
- Report what was added and list all concerns in the completion response.
