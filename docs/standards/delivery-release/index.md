# Delivery & Release

## Overview
Software changes move from build to release through verified, automated, and reversible delivery practices. This section defines the engineering standards for traceable builds, progressive delivery, deliberate release, and rapid recovery when things go wrong.

Choose a standard below to see its full requirements.

## Directory

#### Continuous Integration

> Build, test, and scan every change before it merges, catching security and quality issues early.

[Read more](continuous-integration.md).

#### Build & Artifact Management

> Build once, and run that same artifact everywhere.

[Read more](build-artifact-management.md).

#### Continuous Delivery & Deployment

> Make deployment routine, automated, and low-risk, not a rare, high-stakes event.

[Read more](continuous-delivery-deployment.md).

#### Progressive Delivery Strategies

> Limit a new change to a small share of production traffic before it reaches everyone.

[Read more](progressive-delivery-strategies.md).

#### Feature Flagging

> Decouple deploying code from releasing it.

[Read more](feature-flagging.md).

#### Release Strategy

> A release is a deliberate decision, not a side effect of a pipeline finishing.

[Read more](release-strategy.md).

#### Rollback Strategy

> Recovery from a failed deployment is fast and rehearsed, not improvised under pressure.

[Read more](rollback-strategy.md).
