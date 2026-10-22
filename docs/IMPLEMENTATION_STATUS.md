# Implementation status

Updated 23 October 2026. This document separates implemented private functionality from source that is available in this public repository. Current client distribution is native iOS development; standalone web and extension targets are retired. Historical UI excerpts are not a deployable current client.

| Capability | Maintainer-recorded status | Public review surface |
| --- | --- | --- |
| iOS protocol client | React Native interface with native authentication, wallet confirmation and recovery; legacy UI cleanup and profile/following improvements implemented; compatible signed development build installed; source private. User acceptance and App Store distribution remain separate | [Dated updates](../UPDATES.md) |
| Native perpetual trading | Implemented privately; market selection and focused checks passed. Independent fees deployed with hosted configuration verified; explicit settlement and refunds supported. Updated signed development build installed; user acceptance and perpetual relation issuance remain separate | [Dated updates](../UPDATES.md) |
| Stable subjects, wallet/X identity and subject profiles | Implemented; X-following discovery and claimed-avatar badges checked; full source private | Product explanation and live application |
| Source-selected asset purchases and settlement | Implemented; full source private | User journey and configured live product |
| Subject–asset Relation Tokens and received-fee participation | Extended participation progression deployed; historical holdings, independent income claims and voluntary upgrades retained; full source private | Product-level explanation and application views |
| Public subject holdings | Implemented in the protocol mobile client; full source private | Holdings view and [dated updates](../UPDATES.md) |
| Capital metrics and personal economic graph | Implemented; full source private | Metric definitions, selected UI styles and application |
| X cashtag Moon entry, post statistics and profile modules | Implemented; full source private | Historical UI excerpts; extension target retired |
| Native posting, capital-driven native/X discovery and public post traders | Implemented; full source private | Product overview and Discover workspace |
| Asset-native trade ideas, charts and author updates | Implemented; hosted service updated; mobile user acceptance remains separate; full source private | Application and [dated updates](../UPDATES.md) |
| People / post discovery rankings and author post archives | Implemented; full source private | Feature summary and application |
| Relationship benefits: chats, amount/rank-gated groups and holder opportunities | Implemented; single-column messenger UX checked; full source private | Feature summary and application |
| Additional EVM chains | Activated for registered assets on BNB Chain, Base, Arbitrum, Optimism and Polygon; runtime/package checks verified; owner real-wallet acceptance pending | [Dated updates](../UPDATES.md) |
| Robinhood Chain ordinary and stock-token integration | Initial supported routes deployed and activated; company/fund logos added; historical web/extension release recorded; current mobile provider execution and user acceptance separate | [Dated updates](../UPDATES.md) |
| Network selection, test-token access, language and appearance settings | Implemented; full source private | Application settings and product explanation |

## What supports these statements

The private codebase includes contracts, application clients, SDK packages, operational services, tests and development history. Its recorded validation includes local contract and application tests, actual compiled-bundle checks, and Monad-enabled Anvil integration demonstrations with local mocked exchange/bridge paths. Those checks establish their tested scope; they are not evidence of external adoption or an independent audit.

Publication of a link, a successful build, local integration and an individual user's successful wallet action are different observations. The live application may require account/wallet setup, network availability and actual eligibility. Reviewer access to the full source must be arranged with the owner.

## What has intentionally moved out of public view

Protocol mechanics, smart contracts, detailed SDK logic, transaction and signature processing, settlement verification, indexing internals, holder-accounting implementation, internal tests and deployment tooling are maintained privately. Text descriptions here replace those public implementation files; they do not represent unfinished placeholders.

Independent audit completion, external user counts, revenue and fundraising are not asserted by this document.

## Dated progress

See [development updates](../UPDATES.md) for dated product changes. Historical development dates and confirmed publication milestones are identified separately. Future synchronization publishes high-level Markdown updates only; core code and mechanism details remain private.
