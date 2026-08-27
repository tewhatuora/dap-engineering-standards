# API Design & Standards

## Summary

> Design and version every API contract-first, so a breaking change never surprises an existing consumer.

## External Standards

Developers and vendors delivering APIs for the organisation **SHOULD** also consult the [Health New Zealand | Te Whatu Ora API Standards](https://apistandards.digital.health.nz) for detailed, protocol-specific design and implementation guidance alongside the requirements set out here.

## Standards

### API Design Conventions

An API is designed around business-meaningful resources, using a protocol and conventions consistent across the organisation.

1. An API **SHOULD** be designed around resource-oriented, business-meaningful entities rather than mirroring internal data structures or implementation detail, at a granularity that avoids both excessive fragmentation and excessive coarseness.
2. An API **SHOULD** encapsulate a multi-step internal business process behind a single operation rather than requiring a consumer to orchestrate the steps itself; where a consumer-visible sequence of calls cannot be avoided, it **MUST** be part of the documented contract rather than left for a consumer to discover.
3. Naming, structure, and resource conventions **SHOULD** be consistent across an organisation's APIs, so a consumer's experience integrating with one API transfers to another.
4. An API for external or public consumption **SHOULD** use a widely-supported protocol, such as REST or GraphQL, rather than gRPC, whose binary format and specialised tooling limit external interoperability; gRPC **MAY** be used internally where all consumers are within the organisation's control.
5. A new API **MUST NOT** be implemented using SOAP, a legacy protocol style; an existing SOAP-based API **MAY** continue to operate where replacing it is not yet justified.
6. An HTTP-based API **SHOULD** use standard status codes and headers, as defined in [RFC 9110](https://www.rfc-editor.org/info/rfc9110/), to convey a request's outcome and response metadata, rather than a bespoke convention.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Contract-First Design

An API's interface is defined in a machine-readable specification, kept current, and tested for conformance against it.

1. An API's interface **MUST** be defined in a machine-readable specification, such as the [OpenAPI Specification](https://spec.openapis.org/oas/latest.html).
2. The specification **MUST** be kept current with the API's actual behaviour, so a consumer can rely on it without needing to seek guidance from the provider.
3. An API's implementation **MUST** be tested for conformance against its own specification, so the two cannot silently diverge.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)
- [Integration Testing](../quality-engineering/integration-testing.md)

### Version Lifecycle

A breaking API change ships as a new version, and a deprecated version stays supported through its notice period.

1. A published API version **MUST NOT** be changed in a way that breaks compatibility for its existing consumers; a breaking change **MUST** instead be introduced as a new version.
2. An additive, non-breaking change **SHOULD** be preferred over introducing a new API version.
3. A deprecated API version **MUST** remain supported for a defined notice period before retirement, communicated to its known consumers.
4. A retirement date, once communicated, **SHOULD NOT** be brought forward.
5. An API **SHOULD NOT** continue to expose a resource or operation that is no longer in active use, since unused surface area still carries a compatibility and security cost.

#### References

- [Interoperability by Design](../../principles/interoperability-by-design.md)

### Service Level Commitments

A published API's availability and performance commitment is defined, and any change to it communicated in advance.

1. A published API **MUST** have a defined minimum availability and performance commitment, appropriate to the criticality of its consumers' dependence on it.
2. A material change to that commitment **MUST** be communicated to its known consumers before it takes effect.

### Authentication & Authorisation

Every caller is authenticated and individually accountable by default, using a standards-based protocol.

1. Every API **MUST** require authentication and authorisation by default; an API **MAY** be deliberately designed for anonymous access where public consumption is the intended use case, but this **MUST** be an explicit design decision, not a fallback.
2. An API **SHOULD** use a recognised, standards-based authentication and authorisation protocol, such as [OAuth 2.0](https://www.rfc-editor.org/info/rfc6749/) or [OpenID Connect (OIDC)](https://openid.net/specs/openid-connect-core-1_0.html) with a standard token format such as [JSON Web Tokens (JWT)](https://www.rfc-editor.org/info/rfc7519/), rather than a bespoke scheme or a static-credential mechanism such as HTTP Basic authentication.
3. A caller's identity **MUST** be individually attributable; shared or anonymous credentials **MUST NOT** be used for authenticated access.
4. Access granted to a caller **MUST** be limited to the specific resources and operations it requires.

#### References

- [Security by Design](../../principles/security-by-design.md)
- [Identity & Access Management](../security-identity/identity-access-management.md)

### Data Redaction & Jurisdictional Controls

An API redacts what a caller is not authorised to see, and restricts data by the caller's jurisdiction.

1. An API response **MUST NOT** include a confidential or sensitive field that the calling consumer is not authorised to view; such a field **MUST** be redacted or omitted rather than returned and left for the consumer to disregard.
2. An API exposing data subject to a residency or sovereignty requirement **MUST** be able to restrict access by the caller's jurisdiction.
3. Data subject to a residency or sovereignty requirement **MUST NOT** be served to a consumer outside an approved jurisdiction unless that cross-border flow has been identified and approved as its own requirement.

#### References

- [Data Residency & Sovereignty](../../principles/data-residency-sovereignty.md)

### Input Validation & Error Handling

An API validates every input as untrusted, and returns errors through a consistent structure without leaking internal detail.

1. An API **MUST** validate all input against its specification and reject input that does not conform.
2. Input received from a consumer **MUST** be treated as untrusted; where it is passed to a database, command shell, or other interpreter, it **MUST** be handled through parameterisation or an equivalent safe mechanism, rather than relying on specification conformance alone to prevent [injection](https://owasp.org/Top10/).
3. An API **MUST** return errors using a consistent, documented structure and status codes, so a consumer can handle failure programmatically rather than by parsing free-text messages.
4. An error response **MUST NOT** expose internal implementation detail, such as a stack trace or internal identifier, to the caller.

#### References

- [Data Quality & Integrity by Design](../../principles/data-quality-integrity-by-design.md)

### Rate Limiting & Response Compression

An API protects itself with a communicated rate limit, and compresses large responses without creating a side channel.

1. An API **SHOULD** protect itself against excessive demand from a single consumer through rate limiting or throttling.
2. An API's rate limit or throttling threshold **MUST** be communicated to its consumers, so a consumer can design its own usage to remain within it.
3. A consumer that exceeds a rate limit **SHOULD** receive a response that clearly indicates the limit has been exceeded and when it may retry.
4. An API **SHOULD** support compression for large response payloads, negotiated through standard HTTP content-coding headers rather than a bespoke scheme.
5. Compression **MUST NOT** be applied to a response that mixes confidential data with content influenced by the caller, since doing so can create a compression-based side channel that leaks the confidential data.

#### References

- [Reliability & Resilience](../../principles/reliability-resilience.md)

### Discoverability & Documentation

A published API is discoverable and documented well enough for a prospective consumer to understand it unaided.

1. A published API **MUST** be discoverable by a prospective consumer without requiring direct access to the provider's source code or engineering team.
2. Published documentation **MUST** describe the API's purpose, its resources and operations, and example usage, and **MUST** be kept current with the API's actual behaviour.
3. Documentation **MUST** be published through an easily consumable mechanism, such as a web-accessible catalogue or portal.

#### References

- [Reuse Before Reinvention](../../principles/reuse-before-reinvention.md)
