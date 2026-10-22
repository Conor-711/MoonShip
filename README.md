<p align="center"><img src="assets/moonship.png" width="180" alt="MoonShip"></p>

# MoonShip

**An open onchain network of capital influence and economic relationships, and a platform for discovering people and information through capital.**

[中文说明](README.zh-CN.md) · [Development updates](UPDATES.md)

Current client: native iOS in development distribution. The protocol and hosted
services are deployed; the retired standalone web application and extension are
not current product entry points. App Store release and user acceptance are separate.

> **Public repository scope — 17 October 2026**
>
> MoonShip's core functionality has been implemented. To protect project intellectual property and sensitive operational details, the core implementation is now maintained in the private [MoonShipLab](https://github.com/Conor-711/MoonShipLab) repository. This public repository intentionally contains only a project overview, implementation-status descriptions, diagrams, brand assets and selected presentation-layer source. It is not the complete implementation or a deployable copy of MoonShip.
>
> A feature marked **implemented / private source** below refers to an implementation maintained privately; its source is intentionally omitted here. This distinction is important when reviewing the project. Implementation descriptions are maintainer statements; independent code review and a security audit are separate activities.

## What we are building

1. **A network that makes people's capital influence and their economic relationships visible.** Profiles and graphs show who acts through whom, the capital involved, and the relationships created by completed economic activity.
2. **An open platform where capital helps discover people and information, and contributors to discovery can be rewarded.** People can discover posts and sources through economic activity, act from that source, and participate through Relation Tokens, received-fee income and holder communities.

## The primitive

**Alice chooses Bob as the source for an asset purchase. The completed trade connects Alice and Bob.**

```mermaid
flowchart LR
  P[Bob or a post by Bob] --> D[Alice discovers an asset]
  D --> T[Alice chooses Bob and confirms a trade]
  T --> S[Completed protocol settlement]
  S --> R[Alice → Bob economic relationship]
  S --> K[Bob–Asset Relation Token]
  R --> G[Capital profiles and graph]
  R --> F[Post statistics and discovery]
  K --> B[Holder participation and communities]
```

Posts are part of their author's economic relationships. Starting from a post or from its author uses the same subject attribution and Relation Token flow; the post adds its own statistics. A source selection records the trader's explicit choice.

## Implemented product areas

| Area | Current implementation | Source in this repository |
| --- | --- | --- |
| Protocol | Subject identities, attributed settlement, relationship records, Relation Tokens and received-fee accounting | Summary only; core implementation private |
| iOS client | Native profiles, feeds, holdings, wallet and income views with protocol integration; compatible development build installed | Summary only; client source private |
| Historical web / X extension | Retired standalone targets; selected presentation excerpts retained for context | Selected historical visual source only |
| Discover | Capital-driven native/settled-X feed, public post traders, people / post rankings and author archives | Summary only; application and indexing implementation private |
| Relationship benefits | Direct messages, amount- or rank-gated holder groups and holder-only opportunity sharing | Summary only; access and service implementation private |
| Environments | Configured Monad / Ethereum paths, additional EVM routes for registered assets, and separate testing environments | Runtime setup and operations private |

Read [implementation status](docs/IMPLEMENTATION_STATUS.md), [the product overview](docs/PRODUCT_OVERVIEW.md), and [the source boundary](SOURCE_SCOPE.md).

## What is available here

- `frontend/`: selected existing UI icons and styles, with original source paths and hashes.
- `assets/`: the project's existing brand artwork.
- `docs/`: product behavior and implementation-status summaries, without core mechanism code.

The full application depends on private packages and services, so these excerpts do not provide a standalone build. No stub contract, mock backend or fabricated implementation is presented as the actual protocol.

## Reviewing MoonShip

The iOS client currently uses development distribution. Full-source review requires the owner's explicit access grant to the private repository; a private repository returning 404 without that grant is expected. Please contact the project owner through the existing submission or collaboration channel to arrange a review.

The omission of source here does not establish independent correctness, product adoption, revenue or a completed security audit. This repository contains no claim of external user counts, fundraising or guaranteed returns.
