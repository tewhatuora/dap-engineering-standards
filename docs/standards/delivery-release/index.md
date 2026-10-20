---
last_edited: 2026-10-20
---

# Delivery & Release

## Overview

Delivery and release standards require software changes to move from build to release through verified, automated, and reversible practices.

Choose a standard below to read it in full.

## Standards

### [Continuous Integration](continuous-integration.md)

A change affecting deployable software is built, tested, and scanned before merge so security and quality issues are identified early.

### [Build & Artifact Management](build-artifact-management.md)

Each deployable artifact is built once and used unchanged in every environment to which it is promoted.

### [Continuous Delivery & Deployment](continuous-delivery-deployment.md)

Planned deployments are automated, repeatable, verified, and recoverable.

### [Progressive Delivery](progressive-delivery.md)

A production deployment proceeds in stages that verify the new version before full rollout.

### [Feature Flagging](feature-flagging.md)

Feature flags decouple deploying code from releasing it.

### [Release Strategy](release-strategy.md)

A release is a deliberate decision distinct from pipeline completion.

### [Rollback Strategy](rollback-strategy.md)

Recovery from a failed deployment follows a fast, rehearsed process.
