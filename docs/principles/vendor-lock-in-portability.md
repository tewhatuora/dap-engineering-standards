# Vendor Lock-in & Portability

## Summary

> Choose vendor dependencies deliberately, and preserve the ability to change.

## Principles

### Lock-in Risk Evaluation

The lock-in a technology or vendor choice introduces is identified and weighed as part of the decision, not an afterthought.

1. The degree of lock-in a candidate technology, vendor, or platform choice would introduce **MUST** be identified and considered as part of the decision.
2. Where two options meet a requirement equally well, the option introducing less lock-in **SHOULD** be preferred.

#### References

- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Justified Proprietary Coupling

A proprietary capability is adopted only where an explicit, genuine benefit justifies the lock-in it introduces.

1. A proprietary or vendor-specific capability, such as a vendor-managed service or serverless offering, **MAY** be adopted where it provides a genuine benefit, such as reduced operational cost or effort, that justifies the lock-in it introduces.
2. The justification for accepting a proprietary or vendor-specific capability **MUST** be explicit and **MUST NOT** rest solely on it being the default or most familiar option.

#### References

- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)

### Vendor Abstraction Layers

An abstraction shields a system from a vendor-specific dependency where it can, without adding disproportionate complexity.

1. Where an abstraction layer, such as a defined interface or adapter, can shield the rest of a system from a vendor-specific dependency without disproportionate cost or complexity, it **SHOULD** be used.
2. An abstraction introduced to reduce lock-in **MUST NOT** itself introduce disproportionate complexity relative to the lock-in risk it mitigates.

#### References

- [Data Access & Transaction Management](../standards/code-implementation/data-access-transaction-management.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)

### Data Portability & Export

Data held in a vendor or platform stays extractable in a usable, non-proprietary format, verified periodically.

1. Data held within a vendor or platform **MUST** be extractable in a usable, non-proprietary format, so it remains usable if that vendor or platform is later replaced.
2. The ability to export data from a vendor or platform **SHOULD** be verified periodically, rather than assumed to remain available and unchanged.

#### References

- [Observability Platform Integration](../standards/operations-observability/observability-platform-integration.md)

### Commitment Exit Paths

A costly-to-reverse commitment has its exit path considered before it is made, or its absence is accepted as a deliberate risk.

1. A commitment that would be prohibitively costly, slow, or disruptive to reverse, such as a multi-year contract or a deeply embedded vendor-specific capability, **MUST** have its exit or migration path considered before the commitment is made.
2. Where no practical exit path exists for a critical dependency, this **MUST** be recognised as a deliberately accepted risk, not an overlooked one.

### Ongoing Lock-in Reassessment

A lock-in decision is revisited as portable alternatives emerge or a vendor's terms change.

1. A lock-in decision made at design time **SHOULD** be revisited as portable alternatives emerge or as a vendor's pricing, terms, or strategic direction change, rather than treated as fixed indefinitely.
2. A material adverse change in a vendor's pricing, terms, or availability **SHOULD** trigger a reassessment of the lock-in it was accepted for.
