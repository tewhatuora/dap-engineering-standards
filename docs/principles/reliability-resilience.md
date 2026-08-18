# Reliability & Resilience

## Summary

> Design every service assuming its dependencies will fail, and contain that failure before it spreads.

## Objective

This principle establishes the expectation that systems and services are designed to withstand, absorb, and recover from failure. It keeps a failure mode anticipated and its impact contained, so recovery stays fast and reliable when it occurs.

## Principles

### Designing for Failure

These principles set out how a service is designed on the assumption that its components and dependencies are subject to failure.

1. Services must be designed on the assumption that components, dependencies, and infrastructure can fail, rather than assuming continuous, uninterrupted availability.
2. A critical component must not constitute a single point of failure without redundancy proportionate to the criticality of the service it supports.
3. Failure modes should be identified and addressed during design.

### Dependency Failure Containment

These principles describe how the failure of a dependency call is bounded and contained, rather than waited on indefinitely.

1. A call to an internal or external dependency must have a bounded timeout; indefinite waiting on a dependency must not be permitted.
2. A retry of a failed dependency call must be bounded and should use backoff, so that retries do not amplify an existing failure.
3. A service should contain the failure of a dependency, such as through circuit breaking, so it does not cascade into unrelated functionality.

### Protecting Against Overload

These principles address how a service is protected from being overwhelmed by excess demand.

1. A service should protect itself against being overwhelmed by excess demand, such as through rate limiting, throttling, or load shedding, so that overload is contained rather than causing a full outage.
2. Where demand must be shed or delayed, lower-priority or non-critical requests should be affected before requests supporting critical functionality.
3. A service should isolate resource pools between distinct consumers or workloads, such as through bulkheading, so that excess demand from one does not exhaust capacity needed by another.

#### References

- [API Design & Standards](../standards/architecture-system-design/api-design-standards.md)

### Graceful Degradation

These principles set out how a service degrades to reduced functionality rather than failing completely.

1. Where full functionality cannot be sustained during a failure or overload, a service should degrade to reduced functionality rather than fail completely.
2. Non-critical functionality should be able to fail independently without affecting functionality that does not depend on it.

### Recovery Objectives & Testing

These principles cover how a service's recovery objectives are defined and its recovery capability is tested under realistic conditions.

1. A service must have defined recovery point objectives (RPO) and recovery time objectives (RTO) describing the maximum data loss and downtime it can sustain.
2. Recovery capability must be tested periodically under realistic conditions; an untested recovery process must not be assumed to meet its recovery objectives.

#### References

- [Backup & Disaster Recovery](../standards/operations-observability/backup-disaster-recovery.md)

### Deployment Risk Reduction

These principles describe how the risk a deployment introduces is reduced, through rollback capability, progressive rollout, and fast disablement.

1. A deployment must be able to be rolled back or safely forward-fixed if it introduces a failure.
2. The risk of a change should be reduced through progressive rollout rather than releasing it to all users at once, proportionate to the change's risk.
3. High-risk functionality should be able to be disabled quickly without requiring a full redeployment.

#### References

- [Rollback Strategy](../standards/delivery-release/rollback-strategy.md)
- [Progressive Delivery Strategies](../standards/delivery-release/progressive-delivery-strategies.md)
- [Feature Flagging](../standards/delivery-release/feature-flagging.md)

### Readiness & Incident Learning

These principles guide how a response procedure is documented and corrective action from an incident review is tracked.

1. A known failure mode should have a documented response procedure to support fast, consistent recovery during an incident.
2. An incident that causes a service outage, material data loss, or a breach of its defined recovery objectives must be followed by a review that identifies its root cause and contributing factors.
3. Corrective action identified by an incident review must be tracked to completion, not left as an unactioned recommendation.

#### References

- [Runbooks](../standards/operations-observability/runbooks.md)
