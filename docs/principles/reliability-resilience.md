# Reliability & Resilience

## Objective

Reliability & Resilience establishes the expectation that systems and services are designed to withstand, absorb, and recover from failure, rather than assuming continuous, uninterrupted operation. It directs engineering effort toward anticipating failure modes, containing their impact, and enabling fast, reliable recovery when they occur.

## Principles

### Designing for Failure

These principles design a service on the assumption that its components and dependencies can fail.

1. Services must be designed on the assumption that components, dependencies, and infrastructure can fail, rather than assuming continuous, uninterrupted availability.
2. A critical component must not constitute a single point of failure without redundancy proportionate to the criticality of the service it supports.
3. Failure modes should be identified and addressed during design.

### Resilient Handling of Dependencies

These principles bound and contain the failure of a dependency call, rather than waiting on it indefinitely.

1. A call to an internal or external dependency must have a bounded timeout; indefinite waiting on a dependency must not be permitted.
2. A retry of a failed dependency call must be bounded and should use backoff, so that retries do not amplify an existing failure.
3. A service should contain the failure of a dependency, such as through circuit breaking, so it does not cascade into unrelated functionality.

### Protecting Against Overload

These principles protect a service from being overwhelmed by excess demand.

1. A service should protect itself against being overwhelmed by excess demand, such as through rate limiting, throttling, or load shedding, so that overload is contained rather than causing a full outage.
2. Where demand must be shed or delayed, lower-priority or non-critical requests should be affected before requests supporting critical functionality.
3. A service should isolate resource pools between distinct consumers or workloads, such as through bulkheading, so that excess demand from one does not exhaust capacity needed by another.

#### References

[API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Graceful Degradation

These principles degrade a service to reduced functionality rather than fail it completely.

1. Where full functionality cannot be sustained during a failure or overload, a service should degrade to reduced functionality rather than fail completely.
2. Non-critical functionality should be able to fail independently without affecting functionality that does not depend on it.

### Recovery Objectives & Validated Disaster Recovery

These principles define a service's recovery objectives and test its recovery capability under realistic conditions.

1. A service must have defined recovery point objectives (RPO) and recovery time objectives (RTO) describing the maximum data loss and downtime it can sustain.
2. Recovery capability must be tested periodically under realistic conditions; an untested recovery process must not be assumed to meet its recovery objectives.

#### References

[Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Reducing the Risk of Change

These principles reduce the risk a deployment introduces, through rollback capability, progressive rollout, and fast disablement.

1. A deployment must be able to be rolled back or safely forward-fixed if it introduces a failure.
2. The risk of a change should be reduced through progressive rollout rather than releasing it to all users at once, proportionate to the change's risk.
3. High-risk functionality should be able to be disabled quickly without requiring a full redeployment.

#### References

[Rollback Strategy](../standards/delivery-release/rollback-strategy.md)\
[Progressive Delivery Strategies (Blue/Green, Canary)](../standards/delivery-release/progressive-delivery-strategies.md)\
[Feature Flagging](../standards/delivery-release/feature-flagging.md)

### Operational Readiness & Learning from Failure

These principles document a response procedure and track corrective action from an incident review.

1. A known failure mode should have a documented response procedure to support fast, consistent recovery during an incident.
2. An incident that causes a service outage, material data loss, or a breach of its defined recovery objectives must be followed by a review that identifies its root cause and contributing factors.
3. Corrective action identified by an incident review must be tracked to completion, not left as an unactioned recommendation.

#### References

[Runbooks](../standards/operations-observability/runbooks.md)
