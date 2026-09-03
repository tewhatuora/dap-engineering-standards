# Security & Identity

## Overview
Securing a system requires controlling who can access it and protecting the dependencies and artifacts used to build and operate it. This section defines the engineering standards for identity, access, vulnerability remediation, and software supply chain integrity.

Choose a standard below to see its full requirements.

## Directory

#### Identity & Access Management

> Production access is scoped to an identity's current role, and elevated access always goes through a break-glass role.

[Read more](identity-access-management.md).

#### Vulnerability & Dependency Management

> Continuous scanning detects vulnerabilities, and remediation follows within a timeframe proportionate to their severity.

[Read more](vulnerability-dependency-management.md).

#### Software Supply Chain Security

> Protect the supply chain by isolating internal namespaces, pinning build dependencies immutably, and quarantining compromised packages.

[Read more](software-supply-chain-security.md).
