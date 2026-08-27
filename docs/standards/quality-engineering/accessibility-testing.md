# Accessibility Testing

## Summary

> Verify accessibility with automated scanning and real assistive technology, across every interface including internal ones.

## Standards

### Automated Scanning in Delivery Pipelines

Automated accessibility scanning runs in the delivery pipeline, catching a programmatically detectable defect before release.

1. An automated accessibility scanning tool **SHOULD** be integrated into a service's delivery pipeline and run against every change affecting a user interface.
2. Automated accessibility scanning **MUST** cover, at minimum, the success criteria reliably detectable without human judgement, such as colour contrast, missing alternative text, and invalid markup.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)
- [Continuous Integration](../delivery-release/continuous-integration.md)

### Manual & Assistive Technology Verification

A user interface is manually tested with real assistive technology, by someone trained in using it.

1. A user interface **SHOULD** be manually tested using assistive technologies representative of its actual users, including a screen reader and keyboard-only navigation.
2. Manual and assistive technology testing **SHOULD** be performed by a person trained in the assistive technology being used and the success criteria being verified.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)
- [Testability by Design](../../principles/testability-by-design.md)

### Independent Verification

A higher-reach service's accessibility is independently verified, including by someone with lived assistive technology experience.

1. A service with a large user base, or one more likely to be used by people who rely on assistive technology, **MAY** undergo accessibility testing performed by a party independent of the team that built it, such as an external provider.
2. Independent accessibility testing **SHOULD** include a person with lived experience of using assistive technology, so a barrier that a specialist might otherwise miss is still identified.
3. Independent verification supplements a delivery team's own automated and manual testing; it **MUST NOT** substitute for it.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)

### Conformance Criteria & Test Mapping

Each accessibility test maps to a specific success criterion and level, so a conformance claim is precise and demonstrable.

1. Each accessibility test case **MUST** be mapped to the specific success criterion and conformance level it verifies, such as WCAG 2.2 success criterion 1.4.3 (Contrast Minimum) at level AA.
2. A user interface **MUST NOT** be described as conformant with an accessibility standard unless every applicable success criterion at its required level has been tested and recorded as passed.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)

### Internal Interface Scope

Accessibility testing covers every staff-facing and administrative interface too, not only a public-facing service.

1. Accessibility testing **MUST** be applied to internal and administrative interfaces used by staff; staff-only usage **MUST NOT** be treated as grounds for exemption.
2. The scope of interfaces subject to accessibility testing **MUST** be defined for a service, so no user-facing surface is unintentionally excluded.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)

### Re-verification Triggers

Accessibility testing repeats after a material redesign, or whenever the adopted accessibility standard is updated.

1. Manual and independent verification **SHOULD** be repeated after a material redesign or a change likely to affect conformance.
2. Accessibility testing **SHOULD** be repeated when the accessibility standard a service conforms to is updated to a new version.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)
