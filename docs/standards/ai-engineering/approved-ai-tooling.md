# Approved AI Tooling

## Summary

> Only vetted, organisation-provisioned AI tools **MAY** be used for engineering work.

## Objective

This standard defines the register of AI tools approved for engineering use, and the licensing and provisioning conditions under which they must be used. Engineering use of AI tools is limited to vetted, organisation-provisioned tooling, reducing the data, security, and compliance exposure created by unsanctioned AI use.

## Standards

### Approved Tooling Register

These requirements set out which AI tools are approved for engineering use; an unlisted AI tool **MUST NOT** be used for organisational work.

| Tool | Licence Tier | Data Classification Authorised |
|---|---|---|
| GitHub Copilot | Enterprise | General engineering data only (excludes PII and health data) |
| AWS Kiro | Pro | General engineering data only (excludes PII and health data) |

### Prohibition of Unapproved Tooling

These requirements address how use of an AI tool outside the Approved Tooling Register is prohibited.

1. Personnel **MUST NOT** use AI tools not on the Approved Tooling Register for any activity involving organisational code, data, or systems.
2. Use of unapproved ("shadow AI") tools, including consumer-grade or free public AI services, for organisational engineering work is prohibited.
3. Use of an unapproved tool **MUST NOT** be justified retroactively; a need for an additional tool **MUST** be raised for approval before use.

#### References

- [AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Licensing & Provisioning

These requirements describe how AI tooling access is tied to organisation-provisioned, individually attributable licences.

1. AI tools **MUST** only be used under licences provisioned and administered by Health New Zealand and tied to the individual's organisational identity.
2. Personal, free-tier, trial, or other independently obtained accounts **MUST NOT** be used to access AI tooling for organisational work, even where the tool is on the Approved Tooling Register.
3. Access to licensed AI tooling **MUST** be provisioned upon personnel onboarding, adjusted upon role change, and revoked upon offboarding.
