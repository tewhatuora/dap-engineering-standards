# API Design & Standards

## Summary

> Design and version every API contract-first, so a breaking change never surprises an existing consumer.

## Objective

This standard defines requirements for designing, versioning, securing, and operating an API consistently across the organisation, regardless of the protocol or specification style used. It keeps an API predictable, well-documented, and stable, so a consumer can integrate with confidence and a provider can evolve it without breaking existing consumers.

Developers and vendors delivering APIs for the organisation should also consult the [Health New Zealand | Te Whatu Ora API Standards](https://apistandards.digital.health.nz) for detailed, protocol-specific design and implementation guidance alongside the requirements set out here.

## Standards

### API Design Conventions

These requirements set out how an API is designed and which protocol it is built on, so its conventions remain consistent across the organisation.

1. An API should be designed around resource-oriented, business-meaningful entities rather than mirroring internal data structures or implementation detail, at a granularity that avoids both excessive fragmentation and excessive coarseness.
2. An API should encapsulate a multi-step internal business process behind a single operation rather than requiring a consumer to orchestrate the steps itself; where a consumer-visible sequence of calls cannot be avoided, it must be part of the documented contract rather than left for a consumer to discover.
3. Naming, structure, and resource conventions should be consistent across an organisation's APIs, so a consumer's experience integrating with one API transfers to another.
4. An API for external or public consumption should use a widely-supported protocol, such as REST or GraphQL, rather than gRPC, whose binary format and specialised tooling limit external interoperability; gRPC may be used internally where all consumers are within the organisation's control.
5. A new API must not be implemented using SOAP, a legacy protocol style; an existing SOAP-based API may continue to operate where replacing it is not yet justified.
6. An HTTP-based API should use standard status codes and headers, as defined in [RFC 9110](https://www.rfc-editor.org/info/rfc9110/), to convey a request's outcome and response metadata, rather than a bespoke convention.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Contract-First Design

These requirements address how an API's interface is specified and verified, so a consumer relies on accurate, up-to-date documentation of its behaviour.

1. An API's interface must be defined in a machine-readable specification, such as the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html).
2. The specification must be kept current with the API's actual behaviour, so a consumer can rely on it without needing to seek guidance from the provider.
3. An API's implementation must be tested for conformance against its own specification, so the two cannot silently diverge.

#### References

- [Integration Testing](../quality-engineering/integration-testing.md)

### Version Lifecycle

These requirements describe how a published API version changes, is deprecated, and is retired, so its existing consumers are not broken without notice.

1. A published API version must not be changed in a way that breaks compatibility for its existing consumers; a breaking change must instead be introduced as a new version.
2. An additive, non-breaking change should be preferred over introducing a new API version.
3. A deprecated API version must remain supported for a defined notice period before retirement, communicated to its known consumers.
4. A retirement date, once communicated, should not be brought forward.
5. An API should not continue to expose a resource or operation that is no longer in active use, since unused surface area still carries a compatibility and security cost.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Service Level Commitments

These requirements cover how a published API's availability and performance commitment is defined and communicated to its consumers, so a consumer knows what to expect before depending on it.

1. A published API must have a defined minimum availability and performance commitment, appropriate to the criticality of its consumers' dependence on it.
2. A material change to that commitment must be communicated to its known consumers before it takes effect.

### Authentication & Authorisation

These requirements guide how a caller is authenticated and authorised, so every caller remains individually accountable.

1. Every API must require authentication and authorisation by default; an API may be deliberately designed for anonymous access where public consumption is the intended use case, but this must be an explicit design decision, not a fallback.
2. An API should use a recognised, standards-based authentication and authorisation protocol, such as [OAuth 2.0](https://www.rfc-editor.org/info/rfc6749/) or [OpenID Connect (OIDC)](https://openid.net/specs/openid-connect-core-1_0.html) with a standard token format such as [JSON Web Tokens (JWT)](https://www.rfc-editor.org/info/rfc7519/), rather than a bespoke scheme or a static-credential mechanism such as HTTP Basic authentication.
3. A caller's identity must be individually attributable; shared or anonymous credentials must not be used for authenticated access.
4. Access granted to a caller must be limited to the specific resources and operations it requires.

#### References

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Data Redaction & Jurisdictional Controls

These requirements set out how data exposed to a caller is limited by their authorisation and jurisdiction.

1. An API response must not include a confidential or sensitive field that the calling consumer is not authorised to view; such a field must be redacted or omitted rather than returned and left for the consumer to disregard.
2. An API exposing data subject to a residency or sovereignty requirement must be able to restrict access by the caller's jurisdiction.
3. Data subject to a residency or sovereignty requirement must not be served to a consumer outside an approved jurisdiction unless that cross-border flow has been identified and approved as its own requirement.

#### References

- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Input Validation & Error Handling

These requirements address how an API's input is validated and how its errors are returned, so a consumer relies on it safely and predictably.

1. An API must validate all input against its specification and reject input that does not conform.
2. Input received from a consumer must be treated as untrusted; where it is passed to a database, command shell, or other interpreter, it must be handled through parameterisation or an equivalent safe mechanism, rather than relying on specification conformance alone to prevent [injection](https://owasp.org/Top10/).
3. An API must return errors using a consistent, documented structure and status codes, so a consumer can handle failure programmatically rather than by parsing free-text messages.
4. An error response must not expose internal implementation detail, such as a stack trace or internal identifier, to the caller.

#### References

- [Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)

### Rate Limiting & Response Compression

These requirements describe how demand and response size for an API are managed, so a consumer plans its own usage accordingly.

1. An API should protect itself against excessive demand from a single consumer through rate limiting or throttling.
2. An API's rate limit or throttling threshold must be communicated to its consumers, so a consumer can design its own usage to remain within it.
3. A consumer that exceeds a rate limit should receive a response that clearly indicates the limit has been exceeded and when it may retry.
4. An API should support compression for large response payloads, negotiated through standard HTTP content-coding headers rather than a bespoke scheme.
5. Compression must not be applied to a response that mixes confidential data with content influenced by the caller, since doing so can create a compression-based side channel that leaks the confidential data.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Discoverability & Documentation

These requirements cover how a published API is discovered and understood by a prospective consumer.

1. A published API must be discoverable by a prospective consumer without requiring direct access to the provider's source code or engineering team.
2. Published documentation must describe the API's purpose, its resources and operations, and example usage, and must be kept current with the API's actual behaviour.
3. Documentation must be published through an easily consumable mechanism, such as a web-accessible catalogue or portal.

#### References

- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
