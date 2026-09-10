---
last_edited: 2026-09-10
---

# Accessibility

## Universal Accessibility

### Summary

Accessibility requirements apply to all public, internal, and administrative interfaces.

### Reasoning

The need for accessible interaction does not depend on whether an interface serves the public, employees, or administrators. Excluding an interface because of its audience can prevent people from completing the same work or accessing the same information as other users.

Internal and administrative interfaces also support the delivery and operation of services. Barriers in those interfaces restrict who can perform that work and can make an otherwise accessible service depend on inaccessible supporting activity.

### Implemented By These Standards

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)

## Accessibility Lifecycle Verification

### Summary

Accessibility conformance is verified throughout an interface's lifecycle through proportionate automated and manual testing and re-verified when the interface or applicable criteria change.

### Reasoning

Implementation alone does not demonstrate that an interface meets its accessibility requirements. Automated checks can identify defects that are expressed in code, while manual testing assesses interactions and outcomes that require human judgement or use of assistive technology.

Using both forms of testing provides broader evidence than either can provide alone, with effort proportionate to the interface and the risk of exclusion. Repeating the checks as the interface evolves detects barriers introduced by changes to functionality, content, or design.

Conformance evidence applies only to the interface and criteria that were tested. Re-verification after either changes establishes whether the current interface still meets the requirements instead of relying on evidence for an earlier version.

### Implemented By These Standards

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)