# Approved AI Tooling

## Objective

This standard defines the register of AI tools approved for engineering use, and the licensing and provisioning conditions under which they must be used. It limits AI tool usage to vetted, organisation-provisioned tooling, reducing the data, security, and compliance exposure created by unsanctioned AI use.

## Standards

### Approved Tooling Register

The following AI tools are the exhaustive list approved for engineering use; an unlisted AI tool must not be used for organisational work.

| Tool | Licence Tier | Data Classification Authorised |
|---|---|---|
| GitHub Copilot | Enterprise | General engineering data only (excludes PII and health data) |
| AWS Kiro | Pro | General engineering data only (excludes PII and health data) |

### Prohibition of Unapproved Tooling

These requirements prohibit using an AI tool that is not on the Approved Tooling Register.

1. Personnel must not use AI tools not on the Approved Tooling Register for any activity involving organisational code, data, or systems.
2. Use of unapproved ("shadow AI") tools, including consumer-grade or free public AI services, for organisational engineering work is prohibited.
3. Use of an unapproved tool must not be justified retroactively; a need for an additional tool must be raised for approval before use.

#### References

[AI-Assisted Engineering Accountability](../../principles/ai-assisted-engineering-accountability.md)

### Licensing & Provisioning Requirements

These requirements keep AI tooling access tied to organisation-provisioned, individually attributable licences.

1. AI tools must only be used under licences provisioned and administered by Health New Zealand and tied to the individual's organisational identity.
2. Personal, free-tier, trial, or other independently obtained accounts must not be used to access AI tooling for organisational work, even where the tool is on the Approved Tooling Register.
3. Access to licensed AI tooling must be provisioned upon personnel onboarding, adjusted upon role change, and revoked upon offboarding.
