# Shared Platform

## Default Platform Adoption

### Summary

New services begin on the organisation's shared platform by default.

### Reasoning

Building on the shared platform from inception avoids the migration work and operational risk created by starting with independent equivalents.

A common platform gives services a consistent environment and infrastructure delivery model.

### Implemented By These Standards

- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)

## Justified Platform Alternatives

### Summary

An alternative to the shared platform is adopted only when the platform cannot meet a genuine requirement, and it remains in use only while that need persists.

### Reasoning

A limited evaluation tests an alternative against the unmet requirement before it becomes a production dependency. Incorporating a broadly useful capability into the shared platform avoids a team-specific parallel capability.

An alternative creates a separate technology and operating model with additional support costs and risks. Reassessment determines whether those costs and risks remain justified as platform capabilities and requirements change.

An alternative without a continuing need creates cost, risk, and support work while it remains in use. Removing it prevents a temporary exception from becoming a permanent parallel capability.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
