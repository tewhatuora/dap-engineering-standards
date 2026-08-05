# Accessibility Testing

## Objective

Accessibility Testing establishes the practices used to verify that a service's user interface conforms to its adopted accessibility standard. It directs engineering effort toward automated, manual, and independent testing, so an accessibility barrier is identified before it reaches production.

## Standards

### Automated Scanning in Delivery Pipelines

These requirements integrate automated accessibility scanning into a service's delivery pipeline, so a programmatically detectable defect is caught before release.

1. An automated accessibility scanning tool should be integrated into a service's delivery pipeline and run against every change affecting a user interface.
2. Automated accessibility scanning must cover, at minimum, the success criteria reliably detectable without human judgement, such as colour contrast, missing alternative text, and invalid markup.

#### References

[Continuous Integration](../delivery-release/continuous-integration.md)

### Manual & Assistive Technology Verification

These requirements use real assistive technologies to verify a user interface, so a defect that automated scanning cannot detect is still found.

1. A user interface should be manually tested using assistive technologies representative of its actual users, including a screen reader and keyboard-only navigation.
2. Manual and assistive technology testing should be performed by a person trained in the assistive technology being used and the success criteria being verified.

#### References

[Accessibility by Design](../../principles/accessibility-by-design.md)\
[Testability by Design](../../principles/testability-by-design.md)

### Independent & Third-Party Verification

These requirements apply independent verification to a service's accessibility conformance, beyond what its own delivery team self-assesses.

1. A service with a large user base, or one more likely to be used by people who rely on assistive technology, may undergo accessibility testing performed by a party independent of the team that built it, such as an external provider.
2. Independent accessibility testing should include a person with lived experience of using assistive technology, so a barrier that a specialist might otherwise miss is still identified.
3. Independent verification supplements a delivery team's own automated and manual testing; it must not substitute for it.

### Conformance Criteria & Test Mapping

These requirements tie a test case to a specific success criterion of the adopted accessibility standard, keeping conformance precise and demonstrable.

1. Each accessibility test case must be mapped to the specific success criterion and conformance level it verifies, such as WCAG 2.2 success criterion 1.4.3 (Contrast Minimum) at level AA.
2. A user interface must not be described as conformant with an accessibility standard unless every applicable success criterion at its required level has been tested and recorded as passed.

#### References

[Accessibility by Design](../../principles/accessibility-by-design.md)

### Public-Facing & Internal Interface Scope

These requirements extend accessibility testing to an internal or administrative interface, not solely a public-facing service.

1. Accessibility testing must be applied to internal and administrative interfaces used by staff; staff-only usage must not be treated as grounds for exemption.
2. The scope of interfaces subject to accessibility testing must be defined for a service, so no user-facing surface is unintentionally excluded.

#### References

[Accessibility by Design](../../principles/accessibility-by-design.md)

### Re-verification After Change or Standard Update

These requirements re-verify accessibility beyond routine automated scanning, as an interface changes or the adopted standard evolves.

1. Manual and independent verification should be repeated after a material redesign or a change likely to affect conformance.
2. Accessibility testing should be repeated when the accessibility standard a service conforms to is updated to a new version.

#### References

[Accessibility by Design](../../principles/accessibility-by-design.md)
