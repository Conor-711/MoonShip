# MoonShip development updates / 项目更新

Updated 17 October 2026. These notes summarize user-facing progress. Core source,
algorithms, parameters and operational details remain private. A development date
is not an activation date. Retrospective entries below are based on the project's
development and release records; they were first collected here on 17 October.

更新于 2026 年 10 月 17 日。本页记录用户可感知的进展；核心代码、算法、参数与运行细节继续私有。
开发完成与实际开放分别记录。以下历史条目依据项目开发及发布记录，于 10 月 17 日首次汇总。

## 2026-10-17 — Clearer web wallet and relationships / 更清晰的网页钱包与关系视图

**Status: web release verified; extension package unchanged.**

- Swap is a prominent primary action in the web wallet, with secondary wallet
  actions grouped below it.
- Relationships uses a compact toolbar for Graph, Relation Tokens, search and
  scope controls, with clearer selected states and a small-screen layout.
- Web chat reuses the application login, removing the separate chat-signature
  step while preserving access checks.

**状态：网页发布已核对；插件安装包未更新。**

- 网页钱包突出兑换主操作，其他钱包操作收纳在下方。
- 关系页将图谱、关系代币视图切换与搜索、范围筛选整合，强化选中状态并适配小屏。
- 网页聊天复用应用登录，免去独立聊天签名，同时保留访问权限核验。

## 2026-10-17 — Product discovery and public progress / 发现体验与公开进展

**Status: released in the web application; current extension build prepared for user acceptance.**

- Discover brings posts, people and rankings into one workspace. Author profiles
  include their own post archives; users can explore posts through recorded
  economic activity.
- Native publishing and the combined native/X feed are implemented. Browsing
  content and confirming a trade remain separate user actions.
- The public repository now has dated bilingual progress notes alongside its
  feature summaries. Complete implementation is maintained in private MoonShipLab.

**状态：网页已发布；当前插件构建已准备，浏览器实际体验由用户验收。**

- 发现区整合帖子、主体和排行榜，主体主页提供自己的帖子归档，用户可依据经济活动发现内容。
- 已实现原生发帖与原生/X 内容聚合，浏览内容与确认交易保持独立操作。
- 公开仓库增加有日期的中英文更新说明；完整实现继续保存在私有 MoonShipLab。

## 2026-10-16 — Relationships, communities and continuity / 经济关系、社群与连接体验

**Status: web release verified.**

- Home presents economic relationships through a personal graph and a Relation
  Token view, with a switch between the two.
- Direct messages and communities default to relationship-holder access for
  eligible claimed subjects; subjects retain control over access settings.
- Refined page loading, scrolling, avatars and connection/session recovery.

**状态：网页发布已核对。**

- 首页以个人关系图谱和关系代币两种视图呈现经济关系，并支持切换。
- 符合条件且已认领的主体默认向关系代币持有者开放私聊与社群，主体可调整访问设置。
- 优化加载、滚动、头像，以及连接和会话恢复体验。

## 2026-10-14 — Additional-chain development / 多链开发

**Status: discovery and execution adapters implemented; additional-chain trading not deployed or activated.**

- Extended asset discovery to BNB Chain, Base, Arbitrum, Optimism and Polygon.
- Prepared additional-chain execution support and completed local integration,
  public read-only liquidity checks and authenticated quote validation.
- Deployment, actual execution/recovery validation and activation remain pending.
  Discoverable assets on these chains are not yet tradable through these routes.

**状态：资产发现与交易适配已实现；新增链交易尚未部署、未开放。**

- 资产发现扩展至 BNB Chain、Base、Arbitrum、Optimism 和 Polygon。
- 已准备新增链交易支持，完成本地集成、公开流动性只读检查及认证报价验证。
- 后续仍需部署、真实执行与恢复验证，以及正式启用；能发现资产不代表该链交易已经开放。

## 2026-10-13 — Relation Token participation / 关系代币参与

**Status: protocol release and configured product rollout recorded.**

- Introduced updated Relation Token participation and received-fee income views.
- Continued to connect subject-attributed activity, relationship records and
  holder participation across the configured execution environments.
- Implementation and mechanism details are maintained privately.

**状态：协议发布与已配置产品更新均有记录。**

- 更新关系代币参与功能与实际手续费收入展示。
- 在已配置的执行环境中连接主体归因活动、经济关系记录与持有者参与。
- 具体实现和机制细节保留在私有仓库。

## How these notes are maintained / 更新原则

Each private publication is followed by a reviewed public summary or factual
status refresh. Notes state what changed, the date and the verified stage.
Algorithm changes describe their purpose and observable effect only; formulas,
weights, thresholds and internal evaluation details are omitted. No algorithm
change is asserted without a corresponding implementation record.

每次私有仓库发布后，同步经过审阅的公开概要或状态更新，说明日期、变化与已核实阶段。
算法更新只描述目的与可感知效果，不披露公式、权重、阈值和内部评估细节；没有实现依据的变化不写入。

These are maintainer progress statements. Independent audit, user adoption and
source access remain separate matters. See [implementation status](docs/IMPLEMENTATION_STATUS.md).
