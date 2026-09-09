---
last_edited: 2026-09-09
---

# Environment Strategy

## Environment Tiers

### Summary

Environment tiers support development, testing, production-like validation, and production workloads; environments represent relevant production characteristics, reduce cost while not in use, and are decommissioned when no longer needed.

### Standards

1. `std-plat-environment-tiers-01` Environment tiers **SHOULD** include a tier for early development work, such as `dev`.
2. `std-plat-environment-tiers-02` Environment tiers **SHOULD** include one or more tiers for functional and integration testing, such as `tst`, `int`, `sit`, or `qa`.
3. `std-plat-environment-tiers-03` Environment tiers **SHOULD** include a production-like tier for final validation before deployment to production, such as `uat`.
4. `std-plat-environment-tiers-04` Where production workloads are operated, an environment tier for them **MUST** be defined, such as `prod`.
5. `std-plat-environment-tiers-05` Environment tiers **SHOULD** include a production-like tier for reproducing or verifying a fix against a production issue without affecting production itself, such as `prod-support`.
6. `std-plat-environment-tiers-06` An environment used for production-like validation **MUST** represent the production characteristics relevant to that validation, such as topology, configuration, or scale.
7. `std-plat-environment-tiers-07` A team **SHOULD NOT** maintain more environment tiers than are genuinely necessary, so cost is not incurred for a tier it does not need.
8. `std-plat-environment-tiers-08` A non-production environment in a tier not required continuously, such as `dev`, **SHOULD** incur reduced or no cost outside business hours, such as by being scaled down or torn down and provisioned again on demand.
9. `std-plat-environment-tiers-09` An environment instance no longer needed **SHOULD** be decommissioned.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Testability](../../principles/quality/testability.md)

## Environment Provisioning

### Summary

Every environment is provisioned through established infrastructure-as-code tooling and can be rebuilt from its code definition.

### Standards

1. `std-plat-environment-provisioning-01` An environment, whether persistent or ephemeral, **MUST** be provisioned and configured through the organisation's established infrastructure-as-code definitions and tooling.
2. `std-plat-environment-provisioning-02` An environment's ability to be rebuilt from its code definition **SHOULD** be periodically exercised to verify its reproducibility.

### Related Standards

- [Infrastructure as Code](infrastructure-as-code.md)

### Implements These Principles

- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)

## Production Isolation

### Summary

Production access is separately authorised, and experimentation uses a non-production environment where it can be performed safely.

### Standards

1. `std-plat-production-isolation-01` Access granted to a non-production environment **MUST NOT** extend to production by default.
2. `std-plat-production-isolation-02` Access to production **MUST** be separately authorised and independently controlled.
3. `std-plat-production-isolation-03` Production **SHOULD NOT** be used for experimentation or ad hoc testing that can be performed safely in a non-production environment.

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Testability](../../principles/quality/testability.md)

## Ephemeral Environments

### Summary

An environment created for a bounded purpose provisions and tears down automatically, within a defined maximum lifetime.

### Standards

1. `std-plat-ephemeral-environments-01` An environment created for a bounded purpose, such as a performance test, **SHOULD** be provisioned on demand and torn down once that purpose concludes.
2. `std-plat-ephemeral-environments-02` Provisioning and tear-down of an ephemeral environment **MUST** be automated, so creating one does not depend on a manual setup step or coordination with another team.
3. `std-plat-ephemeral-environments-03` An ephemeral environment **MUST** have a maximum lifetime after which it is automatically terminated, so an environment left running past its purpose does not accumulate cost silently.

### Related Standards

- [Infrastructure as Code](infrastructure-as-code.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Automation](../../principles/engineering-practice/automation.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
