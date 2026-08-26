# Accessibility Testing

## Summary

> Verify accessibility with automated scanning and real assistive technology, across every interface including internal ones.

## Standards

### Automated Scanning in Delivery Pipelines

These requirements set out how automated accessibility scanning is integrated into a service's delivery pipeline, so a programmatically detectable defect is caught before release.

1. An automated accessibility scanning tool **SHOULD** be integrated into a service's delivery pipeline and run against every change affecting a user interface.
2. Automated accessibility scanning **MUST** cover, at minimum, the success criteria reliably detectable without human judgement, such as colour contrast, missing alternative text, and invalid markup.

#### References

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Manual & Assistive Technology Verification

These requirements address how a user interface is verified using real assistive technologies, so a defect beyond automated scanning's reach is still found.

1. A user interface **SHOULD** be manually tested using assistive technologies representative of its actual users, including a screen reader and keyboard-only navigation.
2. Manual and assistive technology testing **SHOULD** be performed by a person trained in the assistive technology being used and the success criteria being verified.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)
- [Testability by Design](../../principles/testability-by-design.md)

### Independent Verification

These requirements describe how a service's accessibility conformance is independently verified, beyond its own delivery team's self-assessment.

1. A service with a large user base, or one more likely to be used by people who rely on assistive technology, **MAY** undergo accessibility testing performed by a party independent of the team that built it, such as an external provider.
2. Independent accessibility testing **SHOULD** include a person with lived experience of using assistive technology, so a barrier that a specialist might otherwise miss is still identified.
3. Independent verification supplements a delivery team's own automated and manual testing; it **MUST NOT** substitute for it.

### Conformance Criteria & Test Mapping

These requirements set out how a test case is mapped to the specific success criterion and conformance level it verifies, so a conformance claim stays precise and demonstrable.

1. Each accessibility test case **MUST** be mapped to the specific success criterion and conformance level it verifies, such as WCAG 2.2 success criterion 1.4.3 (Contrast Minimum) at level AA.
2. A user interface **MUST NOT** be described as conformant with an accessibility standard unless every applicable success criterion at its required level has been tested and recorded as passed.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)

### Internal Interface Scope

These requirements cover how accessibility testing's scope extends to an internal or administrative interface, not only a public-facing service.

1. Accessibility testing **MUST** be applied to internal and administrative interfaces used by staff; staff-only usage **MUST NOT** be treated as grounds for exemption.
2. The scope of interfaces subject to accessibility testing **MUST** be defined for a service, so no user-facing surface is unintentionally excluded.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)

### Re-verification Triggers

These requirements guide how an interface's accessibility conformance is re-verified beyond routine automated scanning, when a material change occurs or the adopted standard is updated.

1. Manual and independent verification **SHOULD** be repeated after a material redesign or a change likely to affect conformance.
2. Accessibility testing **SHOULD** be repeated when the accessibility standard a service conforms to is updated to a new version.

#### References

- [Accessibility by Design](../../principles/accessibility-by-design.md)
