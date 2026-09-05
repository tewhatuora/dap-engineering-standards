# Resource Efficiency & Optimisation

Align provisioned compute and storage with measured demand, use storage tiers suited to access patterns, reassess sustainability assumptions as conditions change, and remove resources when their purpose ends.

## Resource Sizing

### Summary

Provisioned compute and storage capacity matches measured demand and the headroom required by the workload.

### Standards

1. A workload's compute and storage usage **MUST** be measured against its provisioned capacity.
2. The capacity headroom required to meet a workload's scaling, reliability, and performance requirements **MUST** be defined.
3. A workload's provisioned compute and storage capacity **SHOULD NOT** exceed its measured peak demand plus its defined capacity headroom.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Storage Tiering

### Summary

Infrequently accessed data uses a lower-energy storage tier that still meets its retention and retrieval requirements.

### Standards

1. Infrequently accessed data **SHOULD** be moved to a lower-energy storage tier that meets its retention and retrieval requirements.

### Implements These Principles

- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Sustainability Reassessment

### Summary

Sustainability assumptions are revisited when changes in usage, scale, technology, or provider offerings could alter resource consumption or environmental impact.

### Standards

1. A workload's sustainability assumptions **SHOULD** be reassessed when changes in usage, scale, technology, or provider offerings could alter its resource consumption or environmental impact.
2. A material, sustained increase in a workload's resource consumption or environmental impact **SHOULD** trigger reassessment of its design against current usage.

### Implements These Principles

- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Resource Lifecycle

### Summary

A compute or storage resource is removed when no workload or retention requirement depends on it.

### Standards

1. A compute or storage resource **MUST** be decommissioned when no workload or retention requirement depends on it.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
