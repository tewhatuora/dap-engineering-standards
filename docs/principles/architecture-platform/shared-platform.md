# Shared Platform

## Default Platform Adoption

### Summary

New services use the organisation's shared platform from inception as the default.

### Reasoning

Building on the shared platform from inception avoids the migration work and operational risk created by starting with independent equivalents.

Using the organisation's established environment strategy and infrastructure delivery approach keeps platform adoption consistent across services.

### Implemented By These Standards

- [Environment Strategy](../../standards/platform-infrastructure/environment-strategy.md)

## Justified Platform Alternatives

### Summary

An alternative to the shared platform is adopted only when a genuine, documented requirement cannot be met by the platform, and it remains in use only while that need persists.

### Reasoning

A limited evaluation tests an alternative against the unmet requirement without creating an unmanaged production dependency. A successful capability can then become part of the shared platform rather than remaining a team-specific exception.

An alternative creates technology and operating models that may not be supported consistently. Documenting the platform gap and reassessing it as capabilities and requirements change keeps the alternative exceptional and makes its continuing cost and risk visible.

An unsuccessful, discontinued, or no longer necessary capability continues to create cost, risk, and support obligations while it remains in use. Removing it prevents a temporary exception from becoming a permanent parallel capability.

### Implemented By These Standards

- [Runtime Architecture](../../standards/architecture-system-design/runtime-architecture.md)
- [Event-Driven Messaging](../../standards/architecture-system-design/event-driven-messaging.md)
