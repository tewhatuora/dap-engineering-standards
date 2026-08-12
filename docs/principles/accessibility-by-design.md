# Accessibility by Design

## Objective

Accessibility by Design establishes the expectation that software is designed and built to be usable by people with a wide range of abilities, including those relying on assistive technologies, rather than made accessible only after release or in response to a complaint or audit finding. It directs engineering effort toward defining measurable accessibility requirements, verifying conformance through testing, and remediating identified barriers as a routine part of the engineering lifecycle.

## Principles

### Designing for Assistive Technology Needs From the Start

These principles require assistive technology needs to be identified and designed for from a feature's earliest stage.

1. The needs of people using assistive technologies must be identified and designed for from a feature's earliest wireframes or specifications.
2. Implementation of a user-facing feature must not begin before its accessibility requirements have been defined.

### Conformance to a Recognised Accessibility Standard

These principles set an explicit, measurable accessibility standard a feature must conform to.

1. User-facing software must conform to a defined minimum level of a recognised accessibility standard, such as the Web Content Accessibility Guidelines (WCAG).
2. The applicable accessibility conformance level must be defined as an explicit, measurable requirement during design.

### Assistive Technology Compatibility

These principles keep a user interface operable and understandable through assistive technologies.

1. A user interface must be operable using assistive technologies, including screen readers and keyboard-only navigation, without relying solely on pointer-based interaction.
2. Information conveyed visually, such as through colour, icon, or layout alone, must also be conveyed through a means compatible with assistive technologies.

### Inclusive Default Configuration

These principles make the most accessible option the default, not an opt-in.

1. Default presentation settings, including colour contrast, text sizing, and captioning, must be the most accessible option available.
2. Reducing an accessibility-related default must require an explicit, deliberate action; it must not occur implicitly or by omission.

### Applies Beyond Public-Facing Services

These principles extend accessibility requirements to internal and administrative interfaces, not just public-facing ones.

1. Accessibility requirements must apply to internal and administrative interfaces used by staff, not solely to citizen-facing services.
2. An internal tool must not be exempted from accessibility requirements solely because its users are staff rather than the public.

### Verifying Accessibility Through Testing

These principles verify accessibility conformance through testing rather than assuming it from implementation alone.

1. Accessibility conformance must be verified through automated and manual testing proportionate to an interface's complexity and risk, rather than assumed to be met because it was implemented.
2. Accessibility testing should be performed throughout the lifecycle, so conformance is not silently lost as an interface evolves.

#### References

- [Accessibility Testing](../standards/quality-engineering/accessibility-testing.md)
- [Testability by Design](testability-by-design.md)

### Remediating Identified Accessibility Barriers

These principles remediate an identified accessibility barrier proportionate to its impact.

1. An identified accessibility barrier must be remediated proportionate to its impact on affected users; it must not be deferred indefinitely without a remediation plan.
2. A remediation plan for a known accessibility barrier should define a target timeframe commensurate with its severity.

### Keeping Pace With Interface and Guidance Changes

These principles re-verify accessibility conformance as an interface or the standard it conforms to changes.

1. Accessibility conformance established at release should be re-verified as functionality changes or as the accessibility standard it conforms to is updated, rather than assumed to remain valid indefinitely from a single check at initial release.
2. A material redesign of a user interface should trigger a re-confirmation of its accessibility conformance.
