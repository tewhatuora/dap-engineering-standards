# Quality Engineering

## Overview
A defect is cheaper to fix before a change reaches production than afterwards, and this section sets out the standards that ensure a change is correct, performant, secure, and accessible.

Choose a standard below to see its full requirements.

## Directory

#### Unit Testing

> Verify one unit of code in isolation, with every external dependency replaced by a test double.

[Read more](unit-testing.md).

#### Integration Testing

> Verify that components work correctly together, in a fresh, isolated environment created for each test run.

[Read more](integration-testing.md).

#### Test Data Management

> Populate a non-production environment only with synthetic, de-identified, or purpose-built data, never raw production data.

[Read more](test-data-management.md).

#### Performance & Load Testing

> Validate a service against its defined performance and capacity targets under realistic, representative demand.

[Read more](performance-load-testing.md).

#### Application Security Testing

> Catch each class of vulnerability using the technique suited to detect it, and verify every finding's fix.

[Read more](application-security-testing.md).

#### Accessibility Testing

> Verify accessibility with both automated scanning and real assistive technology, across every interface, including internal ones.

[Read more](accessibility-testing.md).
