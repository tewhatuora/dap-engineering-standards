# Operations & Observability

## Overview
Operating services reliably in production requires visibility into their behaviour and the ability to respond when things go wrong. This section defines the engineering standards for observability, operational response, and recovery.

Choose a standard below to see its full requirements.

## Directory

#### Structured Logging

> A service's log output is structured, traceable, and free of sensitive data or unnecessary detail.

[Read more](structured-logging.md).

#### Metrics, Monitoring & Alerting

> Keep a service's metrics accurate, visible, and bounded, with alerts that remain automated and actionable.

[Read more](metrics-monitoring-alerting.md).

#### Distributed Tracing

> Propagate trace context end-to-end, structure spans accurately, and sample deliberately.

[Read more](distributed-tracing.md).

#### Telemetry Instrumentation Standards

> Telemetry remains consistent across services, safe to introduce, and delivered alongside the change it observes.

[Read more](telemetry-instrumentation-standards.md).

#### Observability Platform Integration

> Centralise telemetry, preserve portability, and engineer for resilient observability.

[Read more](observability-platform-integration.md).

#### Backup & Disaster Recovery

> Design and validate recovery against defined objectives.

[Read more](backup-disaster-recovery.md).

#### Runbooks

> A runbook documents and validates the steps to resolve known failures and perform high-risk procedures.

[Read more](runbooks.md).
