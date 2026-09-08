# Accessibility Testing

## Interface Scope

### Summary

Accessibility testing covers public, staff-facing, and administrative interfaces, with the applicable interface scope defined for each service.

### Standards

1. `std-qe-interface-scope-01` Accessibility testing **MUST** be applied to internal and administrative interfaces used by staff.
2. `std-qe-interface-scope-02` Staff-only usage **MUST NOT** be treated as grounds for exemption.
3. `std-qe-interface-scope-03` The scope of interfaces subject to accessibility testing **MUST** be defined for a service, so no user-facing surface is unintentionally excluded.

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)

## Conformance Mapping

### Summary

Each accessibility test maps to a specific success criterion and level, so a conformance claim is precise and demonstrable.

### Standards

1. `std-qe-conformance-mapping-01` Each accessibility test case **MUST** be mapped to the specific success criterion and conformance level it verifies, such as WCAG 2.2 success criterion 1.4.3 (Contrast Minimum) at level AA.
2. `std-qe-conformance-mapping-02` A user interface **MUST NOT** be described as conformant with an accessibility standard unless every applicable success criterion at its required level has been tested and recorded as passed.

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)
- [Testability](../../principles/quality/testability.md)

## Automated Scanning

### Summary

Automated accessibility scanning runs against every user interface change in the delivery pipeline and covers programmatically detectable success criteria.

### Standards

1. `std-qe-automated-scanning-01` An automated accessibility scanning tool **SHOULD** be integrated into a service's delivery pipeline and run against every change affecting a user interface.
2. `std-qe-automated-scanning-02` Automated accessibility scanning **MUST** cover, at minimum, the success criteria reliably detectable without human judgement, such as colour contrast, missing alternative text, and invalid markup.

### Related Standards

- [Continuous Integration](../delivery-release/continuous-integration.md)

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)

## Manual & Assistive Testing

### Summary

A user interface is manually tested with representative assistive technology by someone trained in its use and the success criteria being verified.

### Standards

1. `std-qe-manual-assistive-testing-01` A user interface **SHOULD** be manually tested using assistive technologies representative of its actual users, including a screen reader and keyboard-only navigation.
2. `std-qe-manual-assistive-testing-02` Manual and assistive technology testing **SHOULD** be performed by a person trained in the assistive technology being used and the success criteria being verified.

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)
- [Testability](../../principles/quality/testability.md)

## Independent Testing

### Summary

A service with a large user base or likely assistive technology use may undergo independent testing, which supplements team testing and should include lived assistive technology experience.

### Standards

1. `std-qe-independent-testing-01` A service with a large user base, or one more likely to be used by people who rely on assistive technology, **MAY** undergo accessibility testing performed by a party independent of the team that built it, such as an external provider.
2. `std-qe-independent-testing-02` Independent accessibility testing **SHOULD** include a person with lived experience of using assistive technology, so a barrier that a specialist might otherwise miss is still identified.
3. `std-qe-independent-testing-03` Independent verification **MUST** supplement a delivery team's own automated and manual testing and **MUST NOT** substitute for that testing.

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)

## Reverification

### Summary

Accessibility testing repeats after a material redesign, or whenever the adopted accessibility standard is updated.

### Standards

1. `std-qe-reverification-01` Manual and independent verification **SHOULD** be repeated after a material redesign or a change likely to affect conformance.
2. `std-qe-reverification-02` Accessibility testing **SHOULD** be repeated when the accessibility standard a service conforms to is updated to a new version.

### Implements These Principles

- [Accessibility](../../principles/quality/accessibility.md)
