# Cost & Impact Visibility

## Cost Attribution

### Summary

A service's recurring cost is measurable separately from aggregate spend, attributable through resource metadata, recorded over time, and accessible to its responsible team.

### Standards

1. `std-cost-cost-attribution-01` A service's recurring infrastructure, platform, and managed-service cost **MUST** be measurable separately from aggregate organisational spend.
2. `std-cost-cost-attribution-02` A resource or managed service that supports metadata **MUST** have resource tags, labels, or equivalent metadata identifying its service, responsible team, and cost centre.
3. `std-cost-cost-attribution-03` A service's measured cost **MUST** be recorded over time so a sustained change in its spend can be identified.
4. `std-cost-cost-attribution-04` A service's measured cost **MUST** be included in reporting accessible to its responsible team.

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)

## Cost Alerting

### Summary

A service alerts its responsible team when measured or forecast cost exceeds a defined threshold, detects defined cost anomalies, and reassesses those criteria as spend drivers change.

### Standards

1. `std-cost-cost-alerting-01` A service **MUST** have an automated alert that notifies its responsible team when measured or forecast cost exceeds a defined threshold comprising a cost amount and applicable period.
2. `std-cost-cost-alerting-02` A service **SHOULD** have an automated anomaly alert that notifies its responsible team when cost deviates from its expected baseline by a defined amount.
3. `std-cost-cost-alerting-03` A cost alert **MUST** identify the service, the measured or forecast cost, the applicable period, and the threshold or anomaly criterion that triggered it.
4. `std-cost-cost-alerting-04` A service's cost thresholds and anomaly criteria **SHOULD** be reassessed when its expected usage, architecture, or provider pricing changes.

### Related Standards

- [Metrics, Monitoring & Alerting](../operations-observability/metrics-monitoring-alerting.md)

### Implements These Principles

- [Cost Awareness](../../principles/cost-sustainability/cost-awareness.md)
- [Automation](../../principles/engineering-practice/automation.md)

## Environmental Impact Records

### Summary

A service is expected to maintain a historical record of its measured energy consumption or estimated carbon footprint.

### Standards

1. `std-cost-environmental-impact-records-01` A service **SHOULD** maintain a historical record of its measured energy consumption or estimated carbon footprint.

### Related Standards

- [Resource Efficiency & Optimisation](resource-efficiency-optimisation.md)

### Implements These Principles

- [Sustainability](../../principles/cost-sustainability/sustainability.md)