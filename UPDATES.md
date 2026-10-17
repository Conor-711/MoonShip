# MoonShip development updates / 项目更新

Updated 18 October 2026. These notes summarize user-facing progress. Core source,
algorithms, parameters and operational details remain private. A development date
is not an activation date. Retrospective entries below are based on the project's
development and release records; they were first collected here on 17 October.

更新于 2026 年 10 月 18 日。本页记录用户可感知的进展；核心代码、算法、参数与运行细节继续私有。
开发完成与实际开放分别记录。以下历史条目依据项目开发及发布记录，于 10 月 17 日首次汇总。

## 2026-10-18 — Public holdings / 公开持仓

Profiles now include a Holdings view for assets acquired through settled MoonShip trades. Users can view their own and other people's current quantities and reference market values, with missing data clearly identified. The view is available in English and Chinese.

The web application and existing local extension installation have been updated. Validation covers holdings scope, balance reads, incomplete data, both languages and released resources. Store publication is separate; full implementation remains private.

### 中文

主体资料新增「持仓」，可查看本人及他人通过 MoonShip 已结算交易涉及资产的当前数量和参考市值，无法读取的数据明确标记。支持中文与英文。

网页应用与原自用插件已更新。核验覆盖持仓范围、余额读取、不完整数据、双语展示与发布资源；商店发布另行记录，完整实现继续私有。

## 2026-10-17 — More reliable asset search and trading availability / 改善资产搜索与交易可用性

Asset search has clearer availability checks, localized errors and recovery from temporary reads. Routing coverage has expanded within supported markets, and additional common assets, including AERO on Base and UNI on Ethereum, have been enabled. A searchable asset is distinguished from an available trading route.

The web release and existing local extension installation are updated. Verification covers route and availability checks, isolated application tests and finalized administrative admissions. Store publication and real wallet execution acceptance remain separate.

### 中文

改善资产搜索、临时读取失败的恢复和中英文提示，扩大已支持市场内的路由覆盖，并补充开放 Base AERO、Ethereum UNI 等常用资产。搜索结果与实际可交易状态明确区分。

网页和原自用插件已更新。核验覆盖路由与可用性、隔离应用检查及最终确认的管理操作；商店发布和真实钱包成交验收分别记录。

## 2026-10-17 — Additional-chain trading routes activated / 新增链交易开放

BNB Chain, Base, Arbitrum, Optimism and Polygon routes are enabled in the web application for registered assets and included in the updated extension build. The existing MoonShip flow now provides these network choices alongside its existing routes.

On-chain activation, public API availability, released web assets and the updated extension package were verified. The existing local extension installation was updated; store publication is tracked separately. Successful delivery and failure recovery were checked on isolated mainnet forks with a simulated bridge. The owner will verify real wallet execution through personal use; that acceptance remains separate from activation and local checks.

### 中文

网页已开放 BNB Chain、Base、Arbitrum、Optimism、Polygon 的已登记资产交易入口，新版插件构建已接入相同路线，用户可在原有 MoonShip 流程中选择这些网络。

链上启用、公开接口、线上网页文件和新版插件包已核对；原自用插件安装目录已更新，商店发布另行记录。独立主网分叉完成成功到账与失败恢复核验，其中跨链转发为模拟。真实钱包交易由项目方本人使用验收，与启用及本地核验分别记录。

## 2026-10-17 — Profile-centered relationship graph

The web relationship graph now centers on the user's own profile while keeping All as the default. Initial display, zoom and reset retain that center and fit the full displayed network. Avatar and name spacing stays in place; a profile without relationships can appear without adding any relationship or trading activity.

Graph geometry, profile rendering and compiled web interactions were checked, and the released web files were verified against the tested build. The installed extension and financial behavior are unchanged.

### 中文

网页关系图谱以用户本人为中心，默认仍展示全部关系。初始打开、缩放与重置保持本人居中，同时适配完整网络；继续保留头像和名字间距，没有关系的个人节点也可展示，不增加任何关系或交易事实。

验证覆盖图谱几何、资料展示和编译后网页交互，线上文件已与测试构建核对。已安装插件和资金流程保持原状。

## 2026-10-17 — Readable full relationship graph

The web relationship graph opens on All by default. Subjects are distributed more clearly, with space for avatars and names and an initial view that includes the full displayed network. Placement remains stable when the same data is refreshed. The Mine view stays available. The personal trading metric is now labeled Capital Deployed alongside Capital Moved.

Validation covers different graph shapes, longer names, larger networks and compiled web interactions. The web release was checked against its tested build; the installed extension and financial behavior are unchanged.

### 中文

网页关系图谱默认展示全部主体，优化头像、名字之间的间距和初始视野，让已展示网络更清楚；相同数据刷新时保持稳定排布，仍可切换「我的」。个人交易金额指标更名为 Capital Deployed，与 Capital Moved 配对。

验证覆盖不同关系形态、长名字、更多主体和编译后网页交互；网页发布文件已与测试构建核对。已安装插件及资金流程保持原状。

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

## 2026-10-17 — Additional-chain contracts deployed / 多链合约部署

**Status: deployments finalized and verified; additional-chain trading not yet activated.**

- Completed contract deployment for BNB Chain, Base, Arbitrum, Optimism and Polygon,
  with their corresponding protocol components on Monad.
- Verified all deployment receipts, deployed runtime code and initial bindings.
- Trading remains closed while execution/recovery acceptance and activation are
  completed separately. Core implementation and deployment internals stay private.

**状态：合约部署已最终确认并核验；新增链交易尚未开放。**

- 完成 BNB Chain、Base、Arbitrum、Optimism、Polygon 及 Monad 上对应协议组件的合约部署。
- 部署收据、运行时代码和初始绑定均已核对。
- 真实执行／恢复验收与正式启用分开推进；核心实现与部署内部细节继续私有。

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

**Status as of 14 October: discovery and execution adapters implemented; additional-chain trading not deployed or activated. See the 17 October deployment update above.**

- Extended asset discovery to BNB Chain, Base, Arbitrum, Optimism and Polygon.
- Prepared additional-chain execution support and completed local integration,
  public read-only liquidity checks and authenticated quote validation.
- Deployment, actual execution/recovery validation and activation remain pending.
  Discoverable assets on these chains are not yet tradable through these routes.

**截至10月14日：资产发现与交易适配已实现；当时新增链交易尚未部署、未开放。后续部署进展见上方10月17日更新。**

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
