---
last_edited: 2026-09-22
---

# Identity & Access Management

## Individual Access

### Summary

An individual's routine production access may be standing but remains read-only and role-scoped, with production data store access granted separately.

### Standards

1. An individual's access to a production environment **MUST** be read-only and scoped only to what their role requires, such as reading logs or checking service health. `std-sec-individual-access-01`
2. An individual's access to a production environment **MAY** be held on a standing basis. `std-sec-individual-access-02`
3. An individual's access to a production data store **MUST** be authorised separately from their routine production environment access. `std-sec-individual-access-03`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## AI Agent Access

### Summary

An AI agent has no write access to a production data store, and its read access and approved production actions remain scoped to specific tasks.

### Standards

1. An AI agent **MUST NOT** be granted write access to a production data store. `std-sec-ai-agent-access-01`
2. An AI agent **MAY** make an approved change to a production environment by assuming a role or identity issued by the hosting platform at the point of approval, scoped to that action. `std-sec-ai-agent-access-02`
3. An AI agent's read access to a production environment or data store **MUST** be scoped to its task. `std-sec-ai-agent-access-03`

### Related Standards

- [AI-Assisted Incident Investigation](../ai-engineering/ai-assisted-incident-investigation.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)
- [Controlled and Traceable AI Agents](../../principles/quality/ai-assisted-quality-engineering.md#controlled-and-traceable-ai-agents)

## Automated Process Access

### Summary

An automated process's access is scoped to its predefined task, with a production credential kept distinct from its non-production one.

### Standards

1. An automated process **MAY** be granted read or write access to a production environment or a production data store, scoped to the specific, predefined task it performs. `std-sec-automated-process-access-01`
2. Where an automated process can deploy to or otherwise affect more than one environment, its credential for a production environment **MUST** be distinct from, and no broader than, its credential for a non-production environment. `std-sec-automated-process-access-02`

### Related Standards

- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Privileged & Emergency Access

### Summary

Privileged access is separately authorised, scoped, time-bound, and auditable, with emergency access reserved for urgent recovery.

### Standards

1. Privileged access to a production environment **MUST** be separately authorised, scoped to the required action, time-bound, and attributable to an individual. `std-sec-privileged-emergency-access-01`
2. An individual's access to a production data store **MUST** be limited to the required operations, with read and write permissions authorised independently. `std-sec-privileged-emergency-access-02`
3. A planned data fix to a production data store **SHOULD** use reviewable migration tooling; direct emergency write access **SHOULD** be reserved for an urgent fix that cannot wait for migration tooling. `std-sec-privileged-emergency-access-03`

### Related Standards

- [Database Migration Tooling](../code-implementation/database-migration-tooling.md)
- [Environment Strategy](../platform-infrastructure/environment-strategy.md)

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
- [Data Privacy](../../principles/security-privacy/data-privacy.md)

## Access Review & Audit

### Summary

Standing production access is reviewed and revoked when no longer justified, and elevated activity records the responsible individual and time for audit.

### Standards

1. Standing access to a production environment or data store, by an individual, an AI agent, or an automated process, **MUST** be reviewed on a defined recurring schedule and revoked when no longer justified. `std-sec-access-review-audit-01`
2. Activity performed under a privileged or emergency access grant **MUST** record the action, the identity of the individual responsible, and the time it occurred. `std-sec-access-review-audit-02`

### Implements These Principles

- [Security Engineering](../../principles/security-privacy/security-engineering.md)
