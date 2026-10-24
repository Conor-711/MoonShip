# Implementation status

Updated 25 October 2026. This document separates implemented private functionality from source that is available in this public repository. Client distribution includes native iOS development and the restored web application; extension targets remain retired. Historical UI excerpts are not a deployable current client.

| Capability | Maintainer-recorded status | Public review surface |
| --- | --- | --- |
| Web application | Restored to run alongside iOS using the current client SDK; public web entry available; focused installation/build checks recorded, with end-to-end user acceptance separate; private source | [Dated updates](../UPDATES.md) |
| iOS protocol client | Native authentication, confirmation and recovery; improved spot controls, delivery states and profile/relationship reads; local signed builds installed. Broader distribution and user acceptance remain separate; source private | [Dated updates](../UPDATES.md) |
| Native perpetual trading | Implemented privately; market selection and focused checks passed. Independent fees deployed with hosted configuration verified; explicit settlement and refunds supported. Updated signed development build installed; user acceptance and perpetual relation issuance remain separate | [Dated updates](../UPDATES.md) |
| Stable subjects, wallet/X identity and subject profiles | Implemented; X-following discovery and claimed-avatar badges checked; full source private | Product explanation and live application |
| Source-selected asset purchases and settlement | Implemented; a small real spot order completed delivery and final settlement; additional routes and user acceptance remain separately verified; full source private | User journey and configured live product |
| Subject–asset Relation Tokens and received-fee participation | Issuance update activated onchain after finality checks; hosted migration verified; historical holdings and claims retained; full implementation private | Product-level explanation and application views |
| Public subject holdings | Implemented in the protocol mobile client; full source private | Holdings view and [dated updates](../UPDATES.md) |
| Capital metrics and personal economic graph | Implemented; full source private | Metric definitions, selected UI styles and application |
| X cashtag Moon entry, post statistics and profile modules | Implemented; full source private | Historical UI excerpts; extension target retired |
| Native posting, capital-driven native/X discovery and public post traders | Implemented; full source private | Product overview and Discover workspace |
| Asset-native trade ideas, charts and author updates | Implemented; hosted service updated; mobile user acceptance remains separate; full source private | Application and [dated updates](../UPDATES.md) |
| People / post discovery rankings and author post archives | Implemented; full source private | Feature summary and application |
| Relationship benefits: chats, amount/rank-gated groups and holder opportunities | Implemented; corrective chat backend release live; two-account device acceptance remains pending; full source private | Feature summary and application |
| Additional EVM chains | Activated for registered assets on BNB Chain, Base, Arbitrum, Optimism and Polygon; runtime/package checks verified; owner real-wallet acceptance pending | [Dated updates](../UPDATES.md) |
| Robinhood Chain ordinary and stock-token integration | Initial supported routes deployed and activated; company/fund logos added; historical web/extension release recorded; current mobile provider execution and user acceptance separate | [Dated updates](../UPDATES.md) |
| Network selection, test-token access, language and appearance settings | Implemented; full source private | Application settings and product explanation |

## Latest verification and pending acceptance

Homepage background-update improvements are deployed and read-only verified. The native cache update is installed; mobile user acceptance remains separate.

首页后台更新优化已上线并通过只读核对，本机缓存版本已安装；手机用户验收仍单独记录。

The existing mainnet/testnet health endpoints and web entry were reachable in the latest read-only check. The issuance update is activated onchain after local checks, rehearsal and finalized-receipt verification. Hosted configuration, runtime migration and service readiness are verified. Existing income claims remain independent. New fee-allocation proposals are not activated by discussion or by publishing these documents.

Mobile spot confirmation and delivery-progress improvements have focused checks and local device delivery. A small real order completed destination delivery and final protocol settlement. This individual observation does not establish arbitrary-route readiness, external adoption or repeat usage. Profile and relationship-view changes have targeted local checks; two-account chat and full external-user funding/exit acceptance remain separate. The integrated perpetual-funding implementation is not enabled in current public configuration.

最新只读核对中，现有主网／测试网健康接口和网页入口均可访问。新版发行改造已实现、完成本地检查与链上激活，托管迁移及服务就绪已核对，现有收费及历史收入领取路径保留。讨论中的新分费方案未启用。移动端确认与到账展示已有定向检查、设备交付和一笔小额真实现货闭环证据；双账号聊天、完整外部用户资金流程、外部分发及独立安全审阅仍需单独确认。新增的一体化永续资金通道尚未在公开配置启用。

## What supports these statements

The private codebase includes contracts, application clients, SDK packages, operational services, tests and development history. Its recorded validation includes local contract and application tests, actual compiled-bundle checks, and Monad-enabled Anvil integration demonstrations with local mocked exchange/bridge paths. Those checks establish their tested scope; they are not evidence of external adoption or an independent audit.

Publication of a link, a successful build, local integration and an individual user's successful wallet action are different observations. The live application may require account/wallet setup, network availability and actual eligibility. Reviewer access to the full source must be arranged with the owner.

## What has intentionally moved out of public view

Protocol mechanics, smart contracts, detailed SDK logic, transaction and signature processing, settlement verification, indexing internals, holder-accounting implementation, internal tests and deployment tooling are maintained privately. Text descriptions here replace those public implementation files; they do not represent unfinished placeholders.

Independent audit completion, external user counts, revenue and fundraising are not asserted by this document.

## Dated progress

See [development updates](../UPDATES.md) for dated product changes. Historical development dates and confirmed publication milestones are identified separately. Future synchronization publishes high-level Markdown updates only; core code and mechanism details remain private.
