# Identity & Access Management

## Summary

> Production access is scoped to an identity's current role, and elevated access always goes through a break-glass role.

## Standards

### Individual Production Access

> An individual's routine production access stays read-only and scoped to their role, and never extends to a data store.

1. An individual's access to a production environment **MUST** be read-only and scoped only to what their role requires, such as reading logs or checking service health; it **MAY** be held on a standing basis.
2. An individual's access to a production environment does not extend to a production data store; access to a data store requires its own separate grant.

#### References

- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### AI Agent Production Access

> An AI agent never writes to a production data store, and its access stays scoped to the specific task or approved action.

1. An AI agent **MUST NOT** be granted write access to a production data store.
2. An AI agent **MAY** make an approved change to a production environment by assuming a role or identity issued by the hosting platform at the point of approval, scoped to that action.
3. An AI agent's read access to a production environment or data store **MUST** be scoped to its task, for example through a narrowly scoped tool exposed via a protocol such as the Model Context Protocol (MCP), rather than a broad credential.

#### References

- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)

### Automated Process Production Access

> An automated process's access is scoped to its predefined task, with a production credential kept distinct from its non-production one.

1. An automated process **MAY** be granted read or write access to a production environment or a production data store, scoped to the specific, predefined task it performs.
2. Where an automated process can deploy to or otherwise affect more than one environment, its credential for a production environment **MUST** be distinct from, and no broader than, its credential for a non-production environment.

#### References

- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Privileged & Emergency Access

> Elevated or data store access always goes through a break-glass role, never a standing credential.

1. Access carrying an elevated risk, such as administrative access to a production environment, **MUST** always be granted to an individual through a break-glass role, never a standing credential.
2. Access to a production data store **MUST** always be granted to an individual through a break-glass role, using separate read-only and write roles, never a standing credential.
3. A planned data fix to a production data store **SHOULD** be made through migration tooling rather than a direct write; the write break-glass role is reserved for a fix that cannot wait for migration tooling during an active incident.

#### References

- [Security by Design](../../principles/security-privacy/security-by-design.md)
- [Privacy by Design](../../principles/security-privacy/privacy-by-design.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)
- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)

### Audit

> Standing access is reviewed on a recurring basis, and elevated activity is logged by who and when for audit.

1. Standing access to a production environment or data store, by an individual, an AI agent, or an automated process, **MUST** be reviewed on a recurring basis, and revoked if no longer justified.
2. Activity performed under an elevated access grant, including use of a break-glass role, **MUST** be logged with the identity of the individual responsible and the time the activity took place, so it is auditable.

#### References

- [Security by Design](../../principles/security-privacy/security-by-design.md)
