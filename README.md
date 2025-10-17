---
title: Syrius SIG
outline: deep
lastUpdated: true
---

# Syrius SIG — HyperCore One
*Cross-platform non-custodial wallet*

## Contact & Meetings

- **Matrix:** `#sig-syrius:hc1.chat`  
- **Chair:** @?:hc1.chat  
- **Meetings:** Ad-hoc (announced in Matrix room)

All contributors are welcome to join discussions and participate in meetings. Notes and decisions will be published in the `hc1-sig-archive` repository.

## Overview

The Syrius SIG operates under the **HyperCore One (HC1)** organization as part of the broader effort to strengthen the **Zenon Network** ecosystem through structured open collaboration.

The **Syrius Special Interest Group (SIG)** focuses on the ongoing development, maintenance, and improvement of **Syrius**, the flagship cross-platform non-custodial wallet for the Zenon Network.

This SIG provides a structured environment for open collaboration, design discussions, issue triage, and roadmap alignment related to Syrius core functionality.

## Mission

To ensure **Syrius** remains a secure, reliable, and user-friendly wallet that supports the long-term sustainability and adoption of the Zenon Network.

The Syrius SIG aims to:
- Maintain and improve the Syrius codebase.
- Discuss and document wallet architecture, UX, and platform consistency.
- Facilitate coordination between developers, designers, and community contributors.
- Support transparent development through public discussions and documented decisions.

## Scope

The Syrius SIG focuses exclusively on the **core Syrius application** and its direct dependencies.

**In scope:**
- Core wallet UX and UI.  
- Transaction, account, and key management.  
- Cross-platform builds and CI/CD processes.  
- Security, encryption, and integration with the Dart SDK.
- Unit, widget, and integration tests; test infra and coverage targets.
- Documentation and contributor onboarding.  

**Out of scope:**
- Plugin framework and third-party integrations (may become part of future SIGs).

## Governance

The Syrius SIG is an **open working group** under HC1’s governance structure.  
All contributors may propose, review, and discuss changes through GitHub issues or pull requests.

Governance follows the guidelines and decision-making framework established by the [SDLC SIG](https://github.com/hypercore-one/sig-sdlc).  
These include expectations for participation, proposal lifecycle, and consensus-driven approvals.

- **Decision Process:** Defined according to [SDLC SIG Governance](https://github.com/hypercore-one/sig-sdlc).  
- **Code of Conduct:** Inherits from the [HyperCore One community guidelines](https://github.com/hypercore-one/.github/blob/master/CODE_OF_CONDUCT.md).

## Owned Repositories

| Repository | Description |
|-------------|--------------|
| [`hypercore-one/sig-syrius`](https://github.com/hypercore-one/sig-syrius) | Syrius SIG documentation and meeting notes. |

## Related Repositories

| Repository | Description |
|-------------|-------------|
| [`zenon-network/syrius`](https://github.com/zenon-network/syrius) | Syrius main wallet repository. |
| [`zenon-network/znn_sdk_dart`](https://github.com/zenon-network/znn_sdk_dart) | Dart SDK for interacting with the Zenon network. |
| [`zenon-network/znn_ledger_dart`](https://github.com/zenon-network/znn_ledger_dart) | Ledger wallet integration for Dart SDK. |
| [`zenon-network/argon2_ffi`](https://github.com/zenon-network/argon2_ffi) | C++ Argon2 FFI library for secure key derivation. |
| [`zenon-network/znn-pow-links-cpp`](https://github.com/zenon-network/znn-pow-links-cpp) | C++ implementation of Zenon PoW Links library. |
| [`zenon-network/ledger_ffi_rs`](https://github.com/zenon-network/ledger_ffi_rs) | Rust FFI bridge for Ledger Nano S/X communication. |
| [`zenon-network/zenon-node-database`](https://github.com/zenon-network/zenon-node-database) | Curated list of public RPC endpoints for the Zenon Network. |

## Initial Focus Areas

- Wallet stability and performance improvements  
- UI/UX refinements for cross-platform consistency  
- Build system modernization (Flutter/Dart)  
- Continuous integration and testing improvements  
- Security review and key management best practices  

## Active Initiatives

These are the current working streams or major efforts under the Syrius SIG. They provide focus, allow contributors to pick up tasks with clear orientation, and can evolve over time.

> Full list: **[/initiatives](/initiatives)**

| ID | Title | Description |
|---:|---|---|
| Syrius-001 | [Bloc Refactor](/initiatives/syrius-001) | Refactor Syrius to a modular **Bloc** architecture, modernize storage, dependencies, build flavors, analyzer rules, concurrency, and testing to enable long-term maintainability (mobile + desktop). |