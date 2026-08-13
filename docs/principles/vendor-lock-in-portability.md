# Vendor Lock-in & Portability

## Objective

This principle establishes the expectation that dependence on a specific vendor, platform, or proprietary technology is a deliberate, risk-assessed engineering decision. It keeps a proportionate, practical ability to migrate or operate without a given vendor, so a vendor's pricing, availability, or strategic changes do not leave a system unable to adapt.

## Principles

### Lock-in Risk Evaluation

These principles set out how the lock-in a technology, vendor, or platform choice would introduce is weighed as part of the decision.

1. The degree of lock-in a candidate technology, vendor, or platform choice would introduce must be identified and considered as part of the decision.
2. Where two options meet a requirement equally well, the option introducing less lock-in should be preferred.

#### References

- [Technology Stack Governance](../standards/architecture-system-design/technology-stack-governance.md)

### Justified Proprietary Coupling

These principles describe how proprietary coupling is accepted only where a genuine, explicit benefit justifies it.

1. A proprietary or vendor-specific capability, such as a vendor-managed service or serverless offering, may be adopted where it provides a genuine benefit, such as reduced operational cost or effort, that justifies the lock-in it introduces.
2. The justification for accepting a proprietary or vendor-specific capability must be explicit and must not rest solely on it being the default or most familiar option.

#### References

- [Managed Services Standards](../standards/platform-infrastructure/managed-services-standards.md)
- [Serverless Standards](../standards/platform-infrastructure/serverless-standards.md)
- [Runtime Architecture](../standards/architecture-system-design/runtime-architecture.md)

### Vendor Abstraction Layers

These principles address how a system is shielded from a vendor-specific dependency through an abstraction, where practical.

1. Where an abstraction layer, such as a defined interface or adapter, can shield the rest of a system from a vendor-specific dependency without disproportionate cost or complexity, it should be used.
2. An abstraction introduced to reduce lock-in must not itself introduce disproportionate complexity relative to the lock-in risk it mitigates.

### Data Portability & Export

These principles set out how data remains extractable in a usable, non-proprietary format, verified periodically.

1. Data held within a vendor or platform must be extractable in a usable, non-proprietary format, so it remains usable if that vendor or platform is later replaced.
2. The ability to export data from a vendor or platform should be verified periodically, rather than assumed to remain available and unchanged.

### Commitment Exit Paths

These principles cover how a commitment's exit path is considered before it is made, or its absence is recognised as a deliberate risk.

1. A commitment that would be prohibitively costly, slow, or disruptive to reverse, such as a multi-year contract or a deeply embedded vendor-specific capability, must have its exit or migration path considered before the commitment is made.
2. Where no practical exit path exists for a critical dependency, this must be recognised as a deliberately accepted risk, not an overlooked one.

### Ongoing Lock-in Reassessment

These principles describe how a lock-in decision is revisited as alternatives emerge or a vendor's terms change.

1. A lock-in decision made at design time should be revisited as portable alternatives emerge or as a vendor's pricing, terms, or strategic direction change, rather than treated as fixed indefinitely.
2. A material adverse change in a vendor's pricing, terms, or availability should trigger a reassessment of the lock-in it was accepted for.
