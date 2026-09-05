# Architecture & Platform

## Overview

Architecture and platform decisions determine how readily systems can integrate, scale, and change. These principles favour shared capabilities while preserving clear interfaces, technology choice, and independence from individual service instances.

Choose a principle below to read its full reasoning.

## Principles

### Shared Platform

Shared platforms are the default, and alternatives require deliberate evaluation and justification.

[Read more](shared-platform.md).

### Vendor Lock-in & Portability

Technology choices account for lock-in and preserve practical options to change providers, platforms, and dependencies.

[Read more](vendor-lock-in-portability.md).

### Interoperability

Services exchange data and functionality through explicit, standards-based contracts that can evolve without breaking consumers.

[Read more](interoperability.md).

### Stateless Architecture

Services keep request handling independent of individual instances so they can scale, recover, and retry safely.

[Read more](stateless-architecture.md).
