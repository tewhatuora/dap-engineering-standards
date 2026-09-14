---
last_edited: 2026-09-14
---

# Resource Efficiency & Optimisation

## Resource Sizing

### Summary

Provisioned compute and storage capacity matches measured peak demand plus the headroom required for scaling, reliability, and performance.

### Standards

1. A workload's compute or storage usage **MUST** be monitored against its provisioned capacity. `std-cost-resource-sizing-01`
2. A workload **MUST** define the capacity headroom required for scaling, reliability, and performance. `std-cost-resource-sizing-02`
3. Provisioned compute or storage capacity **SHOULD NOT** exceed a workload's measured peak demand plus its defined headroom. `std-cost-resource-sizing-03`
4. Provisioned compute or storage capacity **SHOULD** be adjusted when it no longer matches a workload's measured peak demand plus its defined headroom. `std-cost-resource-sizing-04`

### Related Standards

- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
- [Performance & Scalability](../../principles/reliability-operations/performance-scalability.md)

## Resource Lifecycle

### Summary

Compute and storage resources are decommissioned when they no longer serve a workload or retention requirement, avoiding unnecessary cost.

### Standards

1. Each provisioned compute or storage resource **MUST** have an identified owner and serve a current workload or retention requirement. `std-cost-resource-lifecycle-01`
2. A compute or storage resource **MUST** be decommissioned when it no longer serves a workload or retention requirement. `std-cost-resource-lifecycle-02`

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Telemetry Volume

### Summary

A service collects only the telemetry needed to support incident response and meet compliance requirements.

### Standards

1. A service **SHOULD** define the telemetry needed to support incident response and meet compliance requirements. `std-cost-telemetry-volume-01`
2. A service **SHOULD NOT** collect or retain telemetry beyond those needs. `std-cost-telemetry-volume-02`

### Related Standards

- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Storage Tiering

### Summary

Stored data uses the lowest-cost storage tier that meets its access and compliance requirements.

### Standards

1. A service **SHOULD** define the access and compliance requirements for its stored data. `std-cost-storage-tiering-01`
2. Stored data **SHOULD** use the lowest-cost storage tier that meets its defined access and compliance requirements. `std-cost-storage-tiering-02`

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
