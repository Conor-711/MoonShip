# Implementation status

Updated 18 October 2026. This document separates implemented private functionality from source that is available in this public repository.

| Capability | Maintainer-recorded status | Public review surface |
| --- | --- | --- |
| Stable subjects, wallet/X identity and subject profiles | Implemented; full source private | Product explanation and live application |
| Source-selected asset purchases and settlement | Implemented; full source private | User journey and configured live product |
| Subject–asset Relation Tokens and received-fee participation | Implemented; full source private | Product-level explanation and application views |
| Public subject holdings | Implemented; web and local extension updated; full source private | Holdings view and [dated updates](../UPDATES.md) |
| Capital metrics and personal economic graph | Implemented; full source private | Metric definitions, selected UI styles and application |
| X cashtag Moon entry, post statistics and profile modules | Implemented; full source private | Public Chrome extension entry and UI excerpts |
| Native posting and combined native/X discovery feed | Implemented; full source private | Product overview and Discover workspace |
| People / post discovery rankings and author post archives | Implemented; full source private | Feature summary and application |
| Relationship benefits: chats, groups and holder opportunities | Implemented; full source private | Feature summary and application |
| Additional EVM chains | Activated for registered assets on BNB Chain, Base, Arbitrum, Optimism and Polygon; runtime/package checks verified; owner real-wallet acceptance pending | [Dated updates](../UPDATES.md) |
| Network selection, test-token access, language and appearance settings | Implemented; full source private | Application settings and product explanation |

## What supports these statements

The private codebase includes contracts, application clients, SDK packages, operational services, tests and development history. Its recorded validation includes local contract and application tests, actual compiled-bundle checks, and Monad-enabled Anvil integration demonstrations with local mocked exchange/bridge paths. Those checks establish their tested scope; they are not evidence of external adoption or an independent audit.

Publication of a link, a successful build, local integration and an individual user's successful wallet action are different observations. The live application may require account/wallet setup, network availability and actual eligibility. Reviewer access to the full source must be arranged with the owner.

## What has intentionally moved out of public view

Protocol mechanics, smart contracts, detailed SDK logic, transaction and signature processing, settlement verification, indexing internals, holder-accounting implementation, internal tests and deployment tooling are maintained privately. Text descriptions here replace those public implementation files; they do not represent unfinished placeholders.

Independent audit completion, external user counts, revenue and fundraising are not asserted by this document.

## Dated progress

See [development updates](../UPDATES.md) for dated product changes. Historical development dates and confirmed publication milestones are identified separately. Future synchronization publishes high-level Markdown updates only; core code and mechanism details remain private.
