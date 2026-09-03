# Accessibility by Design

## Summary

> Design for assistive technology from the earliest stage, and verify conformance through testing, not assumption.

## Principles

### Early Accessibility Requirements

> Assistive technology needs are identified and designed for from a feature's earliest wireframes, before implementation begins.

1. The needs of people using assistive technologies **MUST** be identified and designed for from a feature's earliest wireframes or specifications.
2. Implementation of a user-facing feature **MUST NOT** begin before its accessibility requirements have been defined.

### Accessibility Conformance Level

> User-facing software conforms to an explicit, measurable accessibility standard, defined during design.

1. User-facing software **MUST** conform to a defined minimum level of a recognised accessibility standard, such as the Web Content Accessibility Guidelines (WCAG).
2. The applicable accessibility conformance level **MUST** be defined as an explicit, measurable requirement during design.

#### References

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)

### Assistive Technology Compatibility

> A user interface works with a screen reader and keyboard alone, and nothing is conveyed through colour or icon alone.

1. A user interface **MUST** be operable using assistive technologies, including screen readers and keyboard-only navigation, without relying solely on pointer-based interaction.
2. Information conveyed visually, such as through colour, icon, or layout alone, **MUST** also be conveyed through a means compatible with assistive technologies.

#### References

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)

### Accessible Defaults

> The most accessible option is the default; reducing it takes an explicit, deliberate action, never an implicit one.

1. Default presentation settings, including colour contrast, text sizing, and captioning, **MUST** be the most accessible option available.
2. Reducing an accessibility-related default **MUST** require an explicit, deliberate action; it **MUST NOT** occur implicitly or by omission.

### Staff-Facing Interfaces

> Accessibility requirements apply to a staff-only internal tool just as much as a public-facing service.

1. Accessibility requirements **MUST** apply to internal and administrative interfaces used by staff, not solely to citizen-facing services.
2. An internal tool **MUST NOT** be exempted from accessibility requirements solely because its users are staff rather than the public.

#### References

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)

### Continuous Accessibility Verification

> Accessibility conformance is verified through testing throughout the lifecycle, never assumed from implementation alone.

1. Accessibility conformance **MUST** be verified through automated and manual testing proportionate to an interface's complexity and risk, rather than assumed to be met because it was implemented.
2. Accessibility testing **SHOULD** be performed throughout the lifecycle, so conformance is not silently lost as an interface evolves.

#### References

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
- [Testability by Design](testability-by-design.md)

### Accessibility Barrier Remediation

> An accessibility barrier is remediated proportionate to its impact, with a target timeframe, not deferred indefinitely.

1. An identified accessibility barrier **MUST** be remediated proportionate to its impact on affected users; it **MUST NOT** be deferred indefinitely without a remediation plan.
2. A remediation plan for a known accessibility barrier **SHOULD** define a target timeframe commensurate with its severity.

### Conformance Re-Verification Triggers

> Accessibility conformance is re-verified after a material redesign or whenever the adopted standard is updated.

1. Accessibility conformance established at release **SHOULD** be re-verified as functionality changes or as the accessibility standard it conforms to is updated, rather than assumed to remain valid indefinitely from a single check at initial release.
2. A material redesign of a user interface **SHOULD** trigger a re-confirmation of its accessibility conformance.

#### References

- [Accessibility Testing](../../standards/quality-engineering/accessibility-testing.md)
