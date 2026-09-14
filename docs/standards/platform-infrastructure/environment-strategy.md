---
last_edited: 2026-09-14
---

# Environment Strategy

## Environment Tiers

### Summary

Environment tiers support development, testing, production-like validation, and production workloads; environments represent relevant production characteristics, reduce cost while not in use, and are decommissioned when no longer needed.

### Standards

1. Environment tiers **SHOULD** include a tier for early development work, such as `dev`. `std-plat-environment-tiers-01`
2. Environment tiers **SHOULD** include one or more tiers for functional and integration testing, such as `tst`, `int`, `sit`, or `qa`. `std-plat-environment-tiers-02`
3. Environment tiers **SHOULD** include a production-like tier for final validation before deployment to production, such as `uat`. `std-plat-environment-tiers-03`
4. Where production workloads are operated, an environment tier for them **MUST** be defined, such as `prod`. `std-plat-environment-tiers-04`
5. Environment tiers **SHOULD** include a production-like tier for reproducing or verifying a fix against a production issue without affecting production itself, such as `prod-support`. `std-plat-environment-tiers-05`
6. An environment used for production-like validation **MUST** represent the production characteristics relevant to that validation, such as topology, configuration, or scale. `std-plat-environment-tiers-06`
7. A team **SHOULD NOT** maintain more environment tiers than are genuinely necessary, so cost is not incurred for a tier it does not need. `std-plat-environment-tiers-07`
8. A non-production environment in a tier not required continuously, such as `dev`, **SHOULD** incur reduced or no cost outside business hours, such as by being scaled down or torn down and provisioned again on demand. `std-plat-environment-tiers-08`
9. An environment instance no longer needed **SHOULD** be decommissioned. `std-plat-environment-tiers-09`

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Testability](../../principles/quality/testability.md)

## Environment Provisioning

### Summary

Every environment is provisioned through established infrastructure-as-code tooling and can be rebuilt from its code definition.

### Standards

1. An environment, whether persistent or ephemeral, **MUST** be provisioned and configured through the organisation's established infrastructure-as-code definitions and tooling. `std-plat-environment-provisioning-01`
2. An environment's ability to be rebuilt from its code definition **SHOULD** be periodically exercised to verify its reproducibility. `std-plat-environment-provisioning-02`

### Related Standards

- [Infrastructure as Code](infrastructure-as-code.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Production Isolation

### Summary

Production access is separately authorised, and experimentation uses a non-production environment where it can be performed safely.

### Standards

1. Access granted to a non-production environment **MUST NOT** extend to production by default. `std-plat-production-isolation-01`
2. Access to production **MUST** be separately authorised and independently controlled. `std-plat-production-isolation-02`
3. Production **SHOULD NOT** be used for experimentation or ad hoc testing that can be performed safely in a non-production environment. `std-plat-production-isolation-03`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)

## Ephemeral Environments

### Summary

An environment created for a bounded purpose provisions and tears down automatically, within a defined maximum lifetime.

### Standards

1. An environment created for a bounded purpose, such as a performance test, **SHOULD** be provisioned on demand and torn down once that purpose concludes. `std-plat-ephemeral-environments-01`
2. Provisioning and tear-down of an ephemeral environment **MUST** be automated, so creating one does not depend on a manual setup step or coordination with another team. `std-plat-ephemeral-environments-02`
3. An ephemeral environment **MUST** have a maximum lifetime after which it is automatically terminated, so an environment left running past its purpose does not accumulate cost silently. `std-plat-ephemeral-environments-03`

### Related Standards

- [Infrastructure as Code](infrastructure-as-code.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Automation](../../principles/engineering-practice/automation.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
