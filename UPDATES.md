# MoonShip updates / 项目更新

## 2026-10-30 Infomarket public testnet / Infomarket 公开测试网

Status: Public testnet live; browser acceptance separate.
状态：公开测试网上线，浏览器验收另计。

Quotes now display as cents prices across the trading workspace. Read outages retry through
verified nodes; failed reads cannot authorize trades. Seventeen BTC/Monad
candidates support selection; initial simulated capital persists. Hosted checks
passed; browser acceptance, mainnet and audit remain separate.

交易工作台统一以美分展示报价。节点故障可切换恢复，读取失败时停止下单。
17条BTC／Monad候选供挑选，初始模拟资金保留。线上检查通过；
浏览器验收、主网与审计另计。

## 2026-10-26 Posts / 帖子互动

Status: Backend live; app installation deferred.
状态：后端已上线，手机稍后安装。

I added likes, unlikes and quote posts.
我加入了点赞、取消点赞和引用发帖。

## 2026-10-25 Homepage loading / 首页加载

Status: Backend deployed; native update installed.

状态：后端已上线，手机更新已安装。

Cached text appears first; updates run in the background.

先显示已缓存正文，后台更新数据。

## 2026-10-25 Mobile progress and rollout status / 移动端与发布状态

Status: Issuance and hosted migration verified; native build installed. User acceptance remains separate.
状态：发行更新与托管迁移已核对，手机开发包已安装，用户验收另计。

Spot confirmation, delivery states and profile reads improved; a small real spot
order settled. Discovery/chat repairs are live. Historical claims and fees remain;
no newly discussed fee split was enabled. Further UI checks and broader client
distribution have separate release stages.

改进现货确认、交付状态和资料读取，小额真实订单已结算。发现和聊天修复已上线。
保留历史领取与收费，未启用新讨论的分费方案；进一步界面验收与扩大分发另计。

## 2026-10-23 Request iOS access / 申请 iOS 体验

Status: Hosted web entry is live after focused form, storage/export, routing and production-build checks. Invitations remain an operator task; user acceptance is separate.

状态：已完成云端上线，表单、保存／导出、路由检查与网页构建通过；实际邀请仍由维护者发放，用户验收另行确认。

The web app now offers an email request entry for iOS access, available without a wallet login. Requests stay private for the operator to review and invite users.

网页新增 iOS 体验邮箱申请入口，无需钱包登录。申请名单仅供维护者私下查看，并由维护者后续发送邀请。

## 2026-10-23 Mobile chat continuity / 移动聊天连续性修复

Status: The corrective backend release is live. Runtime source and service readiness were verified; focused checks passed. Two-account device acceptance remains separate. Private implementation only.

状态：后端修复已上线，运行源码与服务就绪状态已核对，定向检查通过；双账号设备验收另行确认，完整实现保持私有。

Repair mobile chat eligibility feedback and retain existing conversation settings across protocol upgrades. Existing conversations continue to enforce current access rights; account login alone does not grant holder benefits. No trading fees or public contracts change in this maintenance release.

修复移动端聊天资格反馈，并在协议升级后延续已有会话设置。已有会话继续核对当前访问权益，登录账号本身不授予持有人权益。本次维护不改变交易收费或公开合约。

## 2026-10-23 Web market charts / 网页行情图

Status: Repair implemented; focused tests, application build and a real public-data read passed. Hosted rollout and user acceptance remain separate. Private source only.

状态：行情修复已实现，重点测试、网页构建与真实公开行情读取通过；云端上线与用户验收另行确认，完整源码私有。

Add public market-data fallback when the hosted data source is temporarily limited, with shared requests and caching. Charts retain exact asset matching and historical cutoffs. Executable trading quotes remain independent.

云端行情源暂时受限时，网页可降级读取公开行情并复用请求和缓存；保留精确资产匹配及历史截止时间。可执行交易报价继续独立。

## 2026-10-23 Capital discovery repair / 资金推荐修复

Status: The corrective backend release is live and public reads now return historically traded views. Focused checks passed; mobile user acceptance remains separate. Private implementation only.

状态：后端修复已上线，公开接口已恢复返回有历史成交的观点；针对性检查通过，手机端用户验收另行确认，完整实现保持私有。

Retain access to historically traded public views when recent recommendations are empty, with clear historical labels and unchanged recorded trade amounts and times. This maintenance patch does not change trading fees or deploy new contracts.

近期推荐为空时保留有历史成交的公开观点，并明确标识历史内容；记录中的成交金额和时间保持不变。本次维护不改变交易收费，也不部署新合约。

## 2026-10-23 Web and iOS together / 网页与 iOS 并行

Status: Web restoration implemented and the first hosted installation issue repaired. Clean installation, type checking and application build passed in an independent checkout. Hosted rollout and user acceptance remain separate. Private source only.

状态：网页恢复已实现，首轮云端安装问题已修复；独立目录中的干净安装、类型检查和网页构建通过，云端上线与用户验收仍另行确认，完整源码私有。

Restore browser access alongside the native iOS client, retaining current protocol configuration, historical participation and income. Existing mobile development continues independently. This restores the web application's prior spot and social functions; it does not claim native perpetual-feature parity or a new extension release.

恢复网页与原生 iOS 并行使用，沿用当前协议配置、历史参与记录和收入；移动端继续独立开发。本轮恢复网页既有现货与社交功能，不宣称已移植原生永续界面或发布新版插件。

## 2026-10-23 Mobile perpetual trading

Status: Private implementation and focused checks completed. A separate fee component is deployed and hosted configuration is verified. The updated signed iOS development build is installed; user acceptance remains separate.

状态：私有实现与重点检查已完成，独立费用组件已部署，云端配置已核对；新版 iOS 签名开发构建已安装，用户验收另行确认。

Added native perpetual trading and repaired market selection during account loading. Protocol fees use a separate payment and settlement flow, with visible reserves and refunds. Settlement is explicit in this version. Existing spot trading, historical holdings and accrued income are retained.

新增原生永续合约交易，修复账户加载时无法选择标的问题。协议费用使用独立支付与结算流程，可查看预留和退款；本版主动核对结算，保留现货交易、历史持仓及原有收入。

## 2026-10-22 Participation continuity

Status: Protocol rollout deployed; hosted migration verified; compatible iOS development build installed. User acceptance remains separate.

状态：协议已部署，云端迁移已核对，兼容的 iOS 开发构建已安装；用户验收另行确认。

Extended participation progression while retaining existing fees. Historical holdings
can be upgraded voluntarily; accrued income remains independently claimable. The
mobile client supports holdings, income and communication access across versions.

已延长参与激励进程，现有收费不变。历史持仓可自愿升级，原有收入继续单独领取；
移动端支持跨版本持仓、收入与通信准入。

## 2026-10-22 iOS

Status: Mobile UI updated; source private. No deployment.

状态：移动界面更新，源码私有；未部署。

## 2026-10-20 — App updates / 应用更新

Status: Simpler ideas, a holder opportunity inbox and plugin-store preview. Extension adds branded lists and compact controls; public profiles refresh during wallet recovery and work with Chrome public reads. Existing features retained. Checks passed; rollout and acceptance separate.

状态：应用更新涵盖简化观点、持有人独家机会收件列表及插件商店暂定页。插件加入自绘图标列表并精简界面；公开资料支持钱包恢复期间及Chrome公开读取。保留原有功能；检查通过，上线与验收另验。

## 2026-10-19 — Web presentation / 网页界面

Trading is primary: Swap opens the existing flow; posts express ideas. Unified responsive layouts and keyboard access. Released assets checked; browser review pending. Extension unchanged.

以交易为主操作，兑换进入原有流程，发帖仅承载观点。统一网页布局及键盘导航，线上资源已核对；浏览器另验，插件不变。

## 2026-10-19 — Robinhood Chain trading / Robinhood Chain 交易

Deployed and opened an initial set of ordinary and stock-token routes, with explicit USDC payment, USDG routing and possible USDG recovery. Web resources and the existing extension update were verified; earlier networks retained. Stock views show company/fund logos in both themes. Deployment and owned-fork delivery/recovery checks passed. Actual provider execution and user acceptance remain separate.

已部署并开放首批普通代币及股票代币路线，明确USDC付款、USDG中转及可能退回USDG。网页资源与原插件更新经过核对，原有网络保留，股票图标兼容明暗主题；自有分叉的交付／退款及最终部署核验通过。实际提供方执行与用户验收另行确认，完整源码私有。

## 2026-10-20 — Familiar people and capital discovery / 熟人发现与资本动态

Web onboarding matches public X following to existing subjects, including unclaimed profiles, with skip and remembered completion. Provider and regression checks passed; browser acceptance separate. Capital following remains distinct. Extension unchanged.

网页匹配公开X关注与已有主体，包括未认领者；可跳过并记住完成状态。接口及回归检查通过，浏览器另验；资本关注仍单独处理，插件不变。

## 2026-10-19 — Benefits communication UX / 权益沟通体验

Chats use a single-column flow and calmer layout, with drafts, pinning, loaded-message search and quick composing. Holder access and safe retries retained. Opportunities improve publishing and withdrawal. Web/extension releases checked; browser acceptance separate. Source private.

私聊／群聊改为单栏并整理排版，保留独立草稿、置顶、已加载消息搜索和快捷输入，沿用持有人准入及安全重试。交易机会完善发布与撤回。网页及原插件检查和发布资源已核对；浏览器另验，实现私有。

## 2026-10-19 — Web navigation and reading / 网页导航与阅读

Home/Discover/Profile navigation was reorganized; Profile combines the capital overview and complete Wallet. Benefits uses a rights icon and one title. Web scrolling covers the whole page and restores reading positions. Checked releases; browser acceptance separate, implementation private.

网页重整首页、发现和个人主页，个人主页整合资本概览与完整钱包；权益采用对应图标并去除重复标题。改为整页滚动并恢复阅读位置。发布经过核对，浏览器另验，实现私有。

## 2026-10-19 — Ranked holder groups / 持仓排名群聊

Groups support token-amount or top-holder access. Linked wallets count together; holder seats and owner management are separate, with access based on current eligibility. Admission, revocation and private-content checks passed; hosted and existing-extension releases verified. User acceptance separate; financial rules unchanged.

群聊支持关系代币数量或持仓排名门槛；关联钱包合并，持有人名额与群主管理分开，资格随持仓变化。准入、撤销及私有内容检查通过，云端与原插件发布已核对；用户另验，金融规则不变。

## 2026-10-20 — Vision and landing / 愿景与官网

Status: Bilingual landing leads with “The Hyperliquid of social trading,” explaining a shared, programmable network of people, relationships and ideas. Vision and current capabilities stay distinct. Checks passed; rollout and acceptance separate.

状态：双语官网首屏采用「社交交易领域的 Hyperliquid」，解释人、关系与观点可共享、可编程的网络愿景。愿景与现有能力分开；检查通过，上线与验收另验。

## 2026-10-19 — Capital-driven discovery / 资本驱动发现

Post modules reveal participating Subjects and settled amounts. Capital picks combines settled capital, participation breadth and recency; Latest remains available. Web and existing extension releases passed regression checks; browser and wallet acceptance remain separate. Subjects do not prove unique people. Formula and parameters stay private.

帖子可查看参与主体及已结算交易额；资本推荐结合成交资金、参与广度与时效，保留最新入口。网页及原插件发布经过回归核对，浏览器与真实钱包另验；主体不等于独立自然人。公式及参数私有。

## 2026-10-18 — Light appearance and graph readability / 白天模式与图谱可读性

The light theme improves neutral backgrounds, text/control contrast and graph labels. Outer gutters match the page. Regression, compiled interactions and deployed resources checked; browser acceptance separate, installed extension unchanged, full source private.

白天模式优化中性底色、文字与控件对比度，修复图谱标签，外侧留白与主页面统一。回归、编译交互与发布资源经过核对；浏览器另验，原插件不变，完整源码私有。

## 2026-10-18 — Calmer page boundaries / 精简页面分隔线

The web layout now removes redundant outer rules and repeated internal borders. Subtle main-column, tab and list separators remain; surfaces and spacing distinguish supporting sections. Existing appearance settings, controls and navigation are preserved.

The web release follows regression and deployed-resource checks. Browser visual acceptance is separate; the installed extension package is unchanged. Full source remains private.

### 中文

网页移除最外侧多余竖线与重复的内部边框，仅保留较淡的主栏、Tab及列表分隔；辅助模块通过底色与间距区分。沿用原有主题、控件和导航。

完成回归与线上资源核对后更新网页，浏览器视觉验收另行进行；原插件安装包保持不变，完整源码继续私有。

## 2026-10-18 — Compact social workspace / 紧凑的社交式布局

The web application now uses a centered three-column layout with readable content width, tighter spacing and a public people sidebar. Existing profile, discovery and swap entries remain accessible, while narrower screens retain the mobile navigation. Language, appearance and page state are preserved.

The web update follows regression and deployed-resource checks. Browser visual acceptance remains separate; full implementation stays private. The existing local extension package is unchanged.

### 中文

网页改为居中的三栏布局，收紧主内容宽度与留白，增加真实主体列表和快捷入口；窄屏保留移动导航，沿用原有中英文、明暗主题与页面状态。

完成回归及线上资源核对后更新网页。浏览器视觉验收另行进行，完整实现继续私有，原插件安装包保持不变。

## 2026-10-18 — Relationship benefits and holder opportunities / 关系权益与持有人交易机会

Relationship benefits now groups Chats and groups with Trading opportunities. Authors can share and withdraw opportunities for their Relation Token holders, while eligible holders can browse the private updates. Existing chat sessions and drafts are preserved when switching subpages.

The web application and existing local extension have been updated after regression and release-resource checks. Verification covers author control, holder access, withdrawal, retry and route compatibility. Browser acceptance and store publication remain separate; full implementation stays private.

### 中文

「关系权益」整合「聊天和群组」与「交易机会」。主体可面向自己的关系代币持有人分享或撤回机会，符合资格的持有人可浏览这些内容；切换子页面保留原聊天会话和草稿。

完成回归及发布资源核对后更新网页与原自用插件，检查覆盖作者权限、持有人访问、撤回、重试及旧链接兼容。浏览器验收与商店发布另行记录，完整实现继续私有。

## 2026-10-18 — Relation Token fee-share visibility / 关系代币手续费份额展示

Held Relation Tokens now show the wallet's estimated share of the corresponding subject's fee income in lists and details. The view supports English and Chinese, follows confirmed holdings, and distinguishes unavailable data and versions that do not participate.

The web application and existing local extension have been updated following regression checks, a live read and release verification. This is a display update to existing participation rights. Core implementation remains private; store publication is separate.

### 中文

关系代币持仓列表与详情新增当前钱包对应的主体手续费份额百分比，支持中英文，并依据已确认持仓更新；无法读取的数据与未参与分润的版本明确区分。

完成回归检查、线上只读及发布核对后更新网页和原自用插件。本次展示已有参与权益，完整实现继续私有；商店发布另行记录。

## 2026-10-18 — Clearer subject lists and Discover layout / 优化主体列表与发现页

Subject lists now keep circular avatars, names and profile links aligned, including longer display names. Discover uses one Feed title, with refresh beside the tabs, while retaining posting, pagination and tab state.

The web application and existing local extension have been updated after regression checks and released-resource verification. Full source remains private; store publication is separate.

### 中文

修复主体列表头像被横向拉伸的问题，统一头像、姓名与主页入口的对齐，长名称保持在文字区域内。发现页只保留一处 Feed 标题，将刷新放到 Tab 同一行，保留发帖、分页与切换状态。

完成回归检查和发布资源核对后更新网页及原自用插件，完整源码继续私有；商店发布另行记录。

## 2026-10-18 — More reliable holdings refresh / 修复持仓刷新

Improved historical holdings reads and explicit refresh. Unavailable trade history is now distinguished from active syncing, and partial results are no longer presented as an endless sync. Holdings continue to show current quantities and reference values without PNL.

The web application and existing local extension have been updated after regression and live-read checks. Full source remains private.

### 中文

改善持仓历史数据读取与手动刷新，明确区分历史读取失败和正在同步的状态，避免不完整结果一直显示为“同步中”。持仓继续展示当前数量与参考市值，不展示 PNL。

完成回归与线上只读核验后更新网页及原自用插件，完整源码继续私有。

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
