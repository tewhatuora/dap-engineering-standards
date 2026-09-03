# Architecture & Platform

## Overview
Architecture and platform choices shape how a system can scale, integrate, and change over time. This section defines the principles for aligning with shared platforms while preserving interoperability, portability, and stateless operation.

Choose a principle below to read its full reasoning.

## Directory

#### Platform Alignment

> Build on the organisation's shared platform by default, and justify any deviation from it.

[Read more](platform-alignment.md).

#### Vendor Lock-in & Portability

> Choose vendor dependencies deliberately, and preserve the ability to change.

[Read more](vendor-lock-in-portability.md).

#### Interoperability by Design

> Expose what a service shares through a documented interface, using open standards and preserving compatibility as it evolves.

[Read more](interoperability-by-design.md).

#### Stateless First

> Any instance can serve any request, with necessary state held externally.

[Read more](stateless-first.md).
