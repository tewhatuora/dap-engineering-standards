# Accessibility by Design

## Summary

> Design for assistive technology from a feature's earliest stage, and verify conformance through testing, not assumption.

## Objective

This principle establishes the expectation that software is designed and built to be usable by people with a wide range of abilities, including those relying on assistive technologies. It keeps accessibility requirements measurable and verified through testing, so a barrier is remediated as a routine part of the engineering lifecycle.

## Principles

### Early Accessibility Requirements

These principles set out how assistive technology needs are identified and designed for from a feature's earliest stage.

1. The needs of people using assistive technologies **MUST** be identified and designed for from a feature's earliest wireframes or specifications.
2. Implementation of a user-facing feature **MUST NOT** begin before its accessibility requirements have been defined.

### Accessibility Conformance Level

These principles describe how a feature conforms to an explicit, measurable accessibility standard.

1. User-facing software **MUST** conform to a defined minimum level of a recognised accessibility standard, such as the Web Content Accessibility Guidelines (WCAG).
2. The applicable accessibility conformance level **MUST** be defined as an explicit, measurable requirement during design.

### Assistive Technology Compatibility

These principles address how a user interface remains operable and understandable through assistive technologies.

1. A user interface **MUST** be operable using assistive technologies, including screen readers and keyboard-only navigation, without relying solely on pointer-based interaction.
2. Information conveyed visually, such as through colour, icon, or layout alone, **MUST** also be conveyed through a means compatible with assistive technologies.

### Accessible Defaults

These principles set out how the most accessible option remains the default, not an opt-in.

1. Default presentation settings, including colour contrast, text sizing, and captioning, **MUST** be the most accessible option available.
2. Reducing an accessibility-related default **MUST** require an explicit, deliberate action; it **MUST NOT** occur implicitly or by omission.

### Staff-Facing Interfaces

These principles describe how accessibility requirements apply to internal and administrative interfaces, not solely to public-facing services.

1. Accessibility requirements **MUST** apply to internal and administrative interfaces used by staff, not solely to citizen-facing services.
2. An internal tool **MUST NOT** be exempted from accessibility requirements solely because its users are staff rather than the public.

### Continuous Accessibility Verification

These principles cover how accessibility conformance is verified through testing rather than assumed from implementation alone.

1. Accessibility conformance **MUST** be verified through automated and manual testing proportionate to an interface's complexity and risk, rather than assumed to be met because it was implemented.
2. Accessibility testing **SHOULD** be performed throughout the lifecycle, so conformance is not silently lost as an interface evolves.

#### References

- [Accessibility Testing](../standards/quality-engineering/accessibility-testing.md)
- [Testability by Design](testability-by-design.md)

### Accessibility Barrier Remediation

These principles set out how an identified accessibility barrier is remediated proportionate to its impact.

1. An identified accessibility barrier **MUST** be remediated proportionate to its impact on affected users; it **MUST NOT** be deferred indefinitely without a remediation plan.
2. A remediation plan for a known accessibility barrier **SHOULD** define a target timeframe commensurate with its severity.

### Conformance Re-Verification Triggers

These principles describe how accessibility conformance is re-verified as an interface or the standard it conforms to changes.

1. Accessibility conformance established at release **SHOULD** be re-verified as functionality changes or as the accessibility standard it conforms to is updated, rather than assumed to remain valid indefinitely from a single check at initial release.
2. A material redesign of a user interface **SHOULD** trigger a re-confirmation of its accessibility conformance.
