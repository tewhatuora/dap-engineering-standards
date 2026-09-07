# Environment Strategy

## Summary

> Every environment has a purpose, with its operational cost justified.

## Standards

### Environment Tiers

> Environment tiers stay limited to what is actually in use, and an environment no longer needed is decommissioned.

1. Environment tiers **SHOULD** include a tier for early development work, such as `dev`.
2. Environment tiers **SHOULD** include one or more tiers for functional and integration testing, such as `tst`, `int`, `sit`, or `qa`.
3. Environment tiers **SHOULD** include a production-like tier for final validation before deployment to production, such as `uat`.
4. Environment tiers **MUST** include a tier for running production workloads, such as `prod`.
5. Environment tiers **SHOULD** include a production-like tier for reproducing or verifying a fix against a production issue without affecting production itself, such as `prod-support`.
6. An environment used for production-like validation **MUST** represent the production characteristics relevant to that validation, such as topology, configuration, or scale.
7. A team **SHOULD NOT** maintain more environment tiers than are genuinely necessary, so cost is not incurred for a tier it does not need.
8. A non-production environment in a tier not required continuously, such as `dev`, **SHOULD** incur reduced or no cost outside business hours, such as by being scaled down or torn down and provisioned again on demand.
9. An environment instance no longer needed **SHOULD** be decommissioned.

#### References

- [Automation](../../principles/engineering-practice/automation.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Production Isolation

> Production access is separately authorised, and experimentation stays confined to a non-production environment.

1. Access granted to a non-production environment **MUST NOT** extend to production by default; access to production **MUST** be separately authorised and independently controlled.
2. Production **SHOULD NOT** be used for experimentation or ad hoc testing that can be performed safely in a non-production environment.

#### References

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Ephemeral Environments

> An environment created for a bounded purpose provisions and tears down automatically, within a defined maximum lifetime.

1. An environment created for a bounded purpose, such as a performance test, **SHOULD** be provisioned on demand and torn down once that purpose concludes.
2. Provisioning and tear-down of an ephemeral environment **MUST** be automated, so creating one does not depend on a manual setup step or coordination with another team.
3. An ephemeral environment **MUST** have a maximum lifetime after which it is automatically terminated, so an environment left running past its purpose does not accumulate cost silently.

#### References

- [Automation](../../principles/engineering-practice/automation.md)
- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

### Environment as Code

> Provision every environment through infrastructure as code, and periodically prove it can actually be rebuilt.

1. An environment, whether persistent or ephemeral, **MUST** be provisioned and configured through the organisation's established infrastructure-as-code definitions and tooling, rather than manual setup.
2. An environment's ability to be rebuilt from its code definition **SHOULD** be periodically exercised, so its reproducibility is proven rather than assumed.

#### References

- [Infrastructure as Code](infrastructure-as-code.md)
- [Everything as Code](../../principles/engineering-practice/everything-as-code.md)
- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
