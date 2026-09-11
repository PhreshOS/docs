# SDK coverage matrix

Frozen from the public package entry points on 2026-09-11. This is an audit
artifact, not public documentation. Every listed export or command family must
have one canonical public home. Detailed shared domain behavior remains in
Runtime or System; an SDK page documents how its environment exposes it.

## Required sidebar structure

This tree is the authoritative SDK information architecture. Its labels and
grouping are part of the plan, not suggestions to reinterpret while writing.

```text
SDKs
├── Core
│   ├── Overview
│   ├── Program configuration
│   ├── Domain contracts
│   └── Validation and utilities
├── Client
│   ├── Overview
│   ├── Context
│   ├── Desktop
│   ├── System access
│   └── Permissions
├── Server
│   ├── Overview
│   ├── Context
│   ├── System access
│   └── Execution environments
├── Node
│   ├── Overview
│   ├── Connection
│   ├── System access
│   └── Project
├── React
│   ├── Overview
│   ├── Providers
│   ├── Domain hooks
│   └── Subscription hooks
└── CLI
    ├── Overview
    ├── Project commands
    ├── Runtime commands
    ├── System commands
    └── Contract discovery
```

Do not substitute nearby labels, merge these pages into one article, or create
additional siblings without first changing this plan for a concrete domain
reason. Content depth belongs inside this stable structure.

| Package | Public surface | Canonical documentation |
| --- | --- | --- |
| Core | `JsonValue`, `WritableContent` | Runtime / Communication |
| Core | `Message`, `Cleanup`, `Capture`, `Captures`, `CaptureSubscriber`, `EventMessage`, `EventName`, `EventOptions`, `EventSubscriber`, `Subscribable`, `SubscribableEvents`, `SubscribableFallback`, `Publishable`, `Timeoutable`, `Askable`, `TimedAskable` | Runtime / Communication |
| Core | `Endpoint`, `ServerEndpoint`, `ClientEndpoint`, endpoint traffic, lifecycle, ask, answer, and capture types | Runtime / Endpoints and Communication |
| Core | `Program` and all Program declaration, process, startup, command, event, and icon types | Runtime / Programs |
| Core | `Process`, `Exit`, `ProcessEvents` | Runtime / Processes |
| Core | `Service`, `ServerService`, `ClientService`, `ServiceKey`, `isServiceKey` | Runtime / Services |
| Core | `Context`, `EndpointContext`, `ClientContext`, `ServerContext`, `ContextMessage`, `ContextEvents`, `ContextCapture`, `Answerer` | Runtime / Context |
| Core | `Window`, `LocalWindow`, their operations, state, events, geometry, layers, launch values, and transactions | System / Desktop |
| Core | `Desktop`, surface snapshots and events, preferences, themes, and writable preference contracts | System / Desktop and Appearance |
| Core | `Appearance` and all appearance value, source, event, limit, default, and trait exports | System / Appearance |
| Core | `Storage`, `StorageFile`, file/stat/read/write/transfer/list/space/watch/change/scope types and scope parsers | System / Storage |
| Core | `SystemUploads`, `Upload`, `isUploadFile` | System / Storage |
| Core | `System`, `SystemProgram`, `SystemProcess`, definitions, shell types, events, and `parseShellEvent` | System capability pages |
| Core | Permission catalog, definitions, declarations, values, requests, stores, guards, and parsers | System / Security |
| Core | Network scope, parser, and containment operation | System / Network and Security |
| Core | `LogKind`, `LogRecord`, `LogSource`, `ProgramSql` | Runtime / Programs |
| Core | `defineConfig`, `Config`, Client and Server configuration and development types | SDKs / Core |
| Client | `context` | SDKs / Client; shared behavior in Runtime / Context |
| Client | `desktop` | SDKs / Client; shared behavior in System / Desktop |
| Client | `system` | SDKs / Client; capabilities in System pages |
| Server | `context` | SDKs / Server; shared behavior in Runtime / Context |
| Server | `system` | SDKs / Server; capabilities in System pages |
| Node | `System` | SDKs / Node; capabilities in System pages |
| Node | `Project`, `ProjectMode`, `ProjectOptions`, `ProjectRunOptions`, `Manifest`, `PackedProject` | SDKs / Node |
| Node | `resolveHome`, `gatewayAddress` | SDKs / Node |
| React | `ContextProvider`, `ContextProviderProperties`, `useContext`, `useProgram`, `useProcess`, `useParent` | SDKs / React |
| React | `SystemProvider`, `SystemProviderProperties`, `useSystem`, `useSystemAppearance` | SDKs / React |
| React | `DesktopProvider`, `DesktopProviderProperties`, `useDesktop`, `useDesktopSurface`, `useDesktopPreferences` | SDKs / React |
| React | `useProgramState`, `ProgramState`, `useProcessState`, `ProcessState`, `useEndpointState`, `EndpointState`, `useServiceState`, `ServiceState`, `useWindowState` | SDKs / React |
| React | `useSubscribe`, `useSubscribeAsks`, `AskSubscribable`, `useSubscribeAnswers`, `AnswerSubscribable` | SDKs / React |
| CLI | Project families: `create`, `init`, `dev`, `start`, `install`, `uninstall`, `pack` | SDKs / CLI |
| CLI | Runtime families: `program`, `process`, `endpoint`, `window` and every declared child command | SDKs / CLI |
| CLI | System lifecycle family: `install`, `uninstall`, `status`, `version`, `start`, `stop`, `enable`, `disable` | SDKs / CLI |
| CLI | Contract discovery: `describe` | SDKs / CLI |

## Completion rule

An item is covered only when its canonical page states its exact public name,
input and defaults, result, relevant lifetime or side effects, authority and
failure behavior, and a current example where an example materially helps.
Cross-links count for shared behavior; duplicated explanations do not.
