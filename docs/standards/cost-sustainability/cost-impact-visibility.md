---
last_edited: 2026-09-14
---

# Cost & Impact Visibility

## Cost Attribution

### Summary

A service's recurring cost is measurable separately from aggregate spend, attributable through resource metadata, recorded over time, and accessible to its responsible team.

### Standards

1. A service's recurring infrastructure, platform, and managed-service cost **MUST** be measurable separately from aggregate organisational spend. `std-cost-cost-attribution-01`
2. A resource or managed service that supports metadata **MUST** have resource tags, labels, or equivalent metadata identifying its service, responsible team, and cost centre. `std-cost-cost-attribution-02`
3. A service's measured cost **MUST** be recorded over time so a sustained change in its spend can be identified. `std-cost-cost-attribution-03`
4. A service's measured cost **MUST** be included in reporting accessible to its responsible team. `std-cost-cost-attribution-04`

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Cost Alerting

### Summary

A service alerts its responsible team when measured or forecast cost exceeds a defined threshold, detects defined cost anomalies, and reassesses those criteria as spend drivers change.

### Standards

1. A service **MUST** have an automated alert that notifies its responsible team when measured or forecast cost exceeds a defined threshold comprising a cost amount and applicable period. `std-cost-cost-alerting-01`
2. A service **SHOULD** have an automated anomaly alert that notifies its responsible team when cost deviates from its expected baseline by a defined amount. `std-cost-cost-alerting-02`
3. A cost alert **MUST** identify the service, the measured or forecast cost, the applicable period, and the threshold or anomaly criterion that triggered it. `std-cost-cost-alerting-03`
4. A service's cost thresholds and anomaly criteria **SHOULD** be reassessed when its expected usage, architecture, or provider pricing changes. `std-cost-cost-alerting-04`

### Related Standards

- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Environmental Impact Records

### Summary

A service is expected to maintain a historical record of its measured energy consumption or estimated carbon footprint.

### Standards

1. A service **SHOULD** maintain a historical record of its measured energy consumption or estimated carbon footprint. `std-cost-environmental-impact-records-01`

### Related Standards

- [Resource Efficiency & Optimisation](resource-efficiency-optimisation.md)

### Implements These Principles

- [Sustainability](../../principles/cost-sustainability/sustainability.md)