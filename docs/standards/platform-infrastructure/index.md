# Platform & Infrastructure

## Overview
The infrastructure a workload runs on is chosen and managed according to what that workload actually needs. This section defines the engineering standards for provisioning and operating that infrastructure accordingly.

Choose a standard below to see its full requirements.

## Directory

#### Containerisation

> A container image is kept minimal, current, and operated with least privilege by default.

[Read more](containerisation.md).

#### Container Orchestration

> A containerised workload is right-sized, scales automatically with demand, and remains isolated from other workloads.

[Read more](container-orchestration.md).

#### Serverless

> A serverless function is sized to its workload, designed with portability in mind, and traceable as part of a distributed transaction.

[Read more](serverless.md).

#### Managed Services

> A managed service is configured and verified against the workload's own requirements, not the vendor's defaults.

[Read more](managed-services.md).

#### Environment Strategy

> Every environment has a purpose, with its operational cost justified.

[Read more](environment-strategy.md).

#### Infrastructure as Code

> Infrastructure is defined as versioned code, and changed only through an automated, reviewed pipeline.

[Read more](infrastructure-as-code.md).
