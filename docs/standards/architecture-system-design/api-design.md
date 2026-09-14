---
last_edited: 2026-09-14
---

# API Design

> Developers and vendors delivering APIs for the organisation should also consult the [Health New Zealand API Standards](https://apistandards.digital.health.nz) for protocol-specific design and implementation guidance.

## Design Conventions

### Summary

An API is designed around business-meaningful resources, using a protocol and conventions consistent across the organisation.

### Standards

1. An API **SHOULD** expose resource-oriented, business-meaningful entities independently of its internal data structures and implementation details, at a granularity that avoids excessive fragmentation and coarseness. `std-arch-design-conventions-01`
2. An API **SHOULD** encapsulate a multi-step internal business process behind a single operation so the consumer does not have to orchestrate the steps. `std-arch-design-conventions-02`
3. Where a consumer-visible sequence of calls cannot be avoided, it **MUST** be included in the documented contract. `std-arch-design-conventions-03`
4. Naming, structure, and resource conventions **SHOULD** be consistent across an organisation's APIs, so a consumer's experience integrating with one API transfers to another. `std-arch-design-conventions-04`
5. An API for external or public consumption **SHOULD** use a widely-supported protocol compatible with external consumers, such as REST or GraphQL. `std-arch-design-conventions-05`
6. gRPC **MAY** be used internally where all consumers are within the organisation's control. `std-arch-design-conventions-06`
7. A new API **SHOULD NOT** be implemented using SOAP, a legacy protocol style. `std-arch-design-conventions-07`
8. An existing SOAP-based API **MAY** continue to operate where replacing it is not yet justified. `std-arch-design-conventions-08`
9. An HTTP-based API **SHOULD** use the standard status codes and headers defined in [RFC 9110](https://www.rfc-editor.org/info/rfc9110/) to convey a request's outcome and response metadata. `std-arch-design-conventions-09`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Contract-First Design

### Summary

An API's interface is defined in a machine-readable specification, kept current, and tested for conformance against it.

### Standards

1. An API's interface **MUST** be defined in a machine-readable specification, such as the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html). `std-arch-contract-first-design-01`
2. The specification **MUST** be kept current with the API's actual behaviour, so a consumer can rely on it without needing to seek guidance from the provider. `std-arch-contract-first-design-02`
3. An API's implementation **MUST** be tested for conformance against its own specification, so the two cannot silently diverge. `std-arch-contract-first-design-03`

### Related Standards

- [Integration Testing](../quality-engineering/integration-testing.md)

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Version Lifecycle

### Summary

A breaking API change is introduced in a new version, a deprecated version remains supported through its notice period, and unused API surface is retired.

### Standards

1. A published API version **MUST NOT** be changed in a way that breaks compatibility for its existing consumers. `std-arch-version-lifecycle-01`
2. A breaking change **MUST** instead be introduced as a new version. `std-arch-version-lifecycle-02`
3. An additive, non-breaking change **SHOULD** be preferred over introducing a new API version. `std-arch-version-lifecycle-03`
4. A deprecated API version **MUST** remain supported for a defined notice period before retirement, communicated to its known consumers. `std-arch-version-lifecycle-04`
5. A retirement date, once communicated, **SHOULD NOT** be brought forward. `std-arch-version-lifecycle-05`
6. An API **SHOULD NOT** continue to expose a resource or operation that is no longer in active use, since unused surface area still carries a compatibility and security cost. `std-arch-version-lifecycle-06`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)

## Authentication & Authorisation

### Summary

Every caller is authenticated and individually accountable by default, using a standards-based protocol.

### Standards

1. Every API **MUST** require authentication and authorisation by default. `std-arch-authentication-authorisation-01`
2. An API **MAY** be deliberately designed for anonymous access where public consumption is the intended use case. `std-arch-authentication-authorisation-02`
3. Anonymous access **MUST** be an explicit design decision. `std-arch-authentication-authorisation-03`
4. An API **SHOULD** use a recognised, standards-based authentication and authorisation protocol, such as [OAuth 2.0](https://www.rfc-editor.org/info/rfc6749/) or [OpenID Connect (OIDC)](https://openid.net/specs/openid-connect-core-1_0.html), with a standard token format such as [JSON Web Tokens (JWT)](https://www.rfc-editor.org/info/rfc7519/). `std-arch-authentication-authorisation-04`
5. A caller's identity **MUST** be individually attributable. `std-arch-authentication-authorisation-05`
6. Shared or anonymous credentials **MUST NOT** be used for authenticated access. `std-arch-authentication-authorisation-06`
7. Access granted to a caller **MUST** be limited to the specific resources and operations it requires. `std-arch-authentication-authorisation-07`

### Related Standards

- [Identity & Access Management](../security-identity/identity-access-management.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Data Access & Jurisdiction

### Summary

An API redacts what a caller is not authorised to see, and restricts data by the caller's jurisdiction.

### Standards

1. An API response **MUST NOT** include a confidential or sensitive field that the calling consumer is not authorised to view. `std-arch-data-access-jurisdiction-01`
2. A confidential or sensitive field that the calling consumer is not authorised to view **MUST** be redacted or omitted before the response is returned. `std-arch-data-access-jurisdiction-02`
3. An API exposing data subject to a residency or sovereignty requirement **MUST** be able to restrict access by the caller's jurisdiction. `std-arch-data-access-jurisdiction-03`
4. Data subject to a residency or sovereignty requirement **MUST NOT** be served to a consumer outside an approved jurisdiction unless that cross-border flow has been identified and approved as its own requirement. `std-arch-data-access-jurisdiction-04`

### Implements These Principles

- [Data Residency & Sovereignty](../../principles/data/data-residency-sovereignty.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Input Validation & Error Handling

### Summary

An API treats every input as untrusted, validates it, and returns errors through a consistent structure without leaking internal detail.

### Standards

1. An API **MUST** validate all input against its specification and reject input that does not conform. `std-arch-input-validation-error-handling-01`
2. Input received from a consumer **MUST** be treated as untrusted. `std-arch-input-validation-error-handling-02`
3. Where input is passed to a database, command shell, or other interpreter, it **MUST** be handled through parameterisation or an equivalent safe mechanism to prevent [injection](https://owasp.org/Top10/). `std-arch-input-validation-error-handling-03`
4. An API **MUST** return errors using a consistent, documented structure and status codes that a consumer can handle programmatically. `std-arch-input-validation-error-handling-04`
5. An error response **MUST NOT** expose internal implementation detail, such as a stack trace or internal identifier, to the caller. `std-arch-input-validation-error-handling-05`

### Implements These Principles

- [Data Quality & Integrity](../../principles/data/data-quality-integrity.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## Rate Limiting & Compression

### Summary

An API protects itself with a communicated rate limit, and compresses large responses without creating a side channel.

### Standards

1. An API **SHOULD** protect itself against excessive demand from a single consumer through rate limiting or throttling. `std-arch-rate-limiting-compression-01`
2. An API's rate limit or throttling threshold **MUST** be communicated to its consumers, so a consumer can design its own usage to remain within it. `std-arch-rate-limiting-compression-02`
3. A consumer that exceeds a rate limit **SHOULD** receive a response that clearly indicates the limit has been exceeded and when it may retry. `std-arch-rate-limiting-compression-03`
4. An API **SHOULD** support compression for large response payloads negotiated through standard HTTP content-coding headers. `std-arch-rate-limiting-compression-04`
5. Compression **MUST NOT** be applied to a response that mixes confidential data with content influenced by the caller, since doing so can create a compression-based side channel that leaks the confidential data. `std-arch-rate-limiting-compression-05`

### Implements These Principles

- [Reliability & Resilience](../../principles/reliability-operations/reliability-resilience.md)
- [Security Engineering](../../principles/security-privacy/security-engineering.md)

## API Documentation

### Summary

A published API is discoverable and has current documentation that a prospective consumer can understand unaided.

### Standards

1. A published API **MUST** be discoverable by a prospective consumer without requiring direct access to the provider's source code or engineering team. `std-arch-api-documentation-01`
2. Published documentation **MUST** describe the API's purpose, its resources and operations, and example usage. `std-arch-api-documentation-02`
3. Published documentation **MUST** be kept current with the API's actual behaviour. `std-arch-api-documentation-03`
4. Documentation **MUST** be published through an easily consumable mechanism, such as a web-accessible catalogue or portal. `std-arch-api-documentation-04`

### Implements These Principles

- [Interoperability](../../principles/architecture-platform/interoperability.md)
