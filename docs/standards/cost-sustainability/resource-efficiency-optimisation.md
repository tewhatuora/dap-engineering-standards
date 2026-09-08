# Resource Efficiency & Optimisation

Compute and storage resources, telemetry, and stored data are managed to meet service requirements without unnecessary cost or resource consumption.

## Resource Sizing

### Summary

Provisioned compute and storage capacity matches measured peak demand plus the headroom required for scaling, reliability, and performance.

### Standards

1. `std-cost-resource-sizing-01` A workload's compute or storage usage **MUST** be monitored against its provisioned capacity.
2. `std-cost-resource-sizing-02` A workload **MUST** define the capacity headroom required for scaling, reliability, and performance.
3. `std-cost-resource-sizing-03` Provisioned compute or storage capacity **SHOULD NOT** exceed a workload's measured peak demand plus its defined headroom.
4. `std-cost-resource-sizing-04` Provisioned compute or storage capacity **SHOULD** be adjusted when it no longer matches a workload's measured peak demand plus its defined headroom.

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

1. `std-cost-resource-lifecycle-01` Each provisioned compute or storage resource **MUST** have an identified owner and serve a current workload or retention requirement.
2. `std-cost-resource-lifecycle-02` A compute or storage resource **MUST** be decommissioned when it no longer serves a workload or retention requirement.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Telemetry Volume

### Summary

A service collects only the telemetry needed to support incident response and meet compliance requirements.

### Standards

1. `std-cost-telemetry-volume-01` A service **SHOULD** define the telemetry needed to support incident response and meet compliance requirements.
2. `std-cost-telemetry-volume-02` A service **SHOULD NOT** collect or retain telemetry beyond those needs.

### Related Standards

- [Observability Platform Integration](../operations-observability/observability-platform-integration.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)

## Storage Tiering

### Summary

Stored data uses the lowest-cost storage tier that meets its access and compliance requirements.

### Standards

1. `std-cost-storage-tiering-01` A service **SHOULD** define the access and compliance requirements for its stored data.
2. `std-cost-storage-tiering-02` Stored data **SHOULD** use the lowest-cost storage tier that meets its defined access and compliance requirements.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Sustainability](../../principles/cost-sustainability/sustainability.md)
