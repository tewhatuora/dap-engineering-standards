# Quality Engineering

## Overview

Finding defects early makes them cheaper to address before they reach production. This section defines the engineering standards for verifying that changes are correct, performant, secure, and accessible.

Choose a standard below to read it in full.

## Standards

### Unit Testing

Verify one unit of code in isolation, with external dependencies replaced by controlled test doubles.

[Read more](unit-testing.md).

### Integration Testing

Verify that components work correctly together in a fresh, isolated, and repeatable environment.

[Read more](integration-testing.md).

### Test Data Management

Populate non-production environments with synthetic, de-identified, or purpose-built data, never unmodified production data.

[Read more](test-data-management.md).

### Performance & Load Testing

Validate a service against its defined performance and capacity targets under realistic, representative demand.

[Read more](performance-load-testing.md).

### Application Security Testing

Catch each class of vulnerability using the technique best suited to detect it, and verify every finding's fix.

[Read more](application-security-testing.md).

### Accessibility Testing

Verify accessibility with automated scanning and real assistive technology, across every interface including internal ones.

[Read more](accessibility-testing.md).
