# PhreshOS Documentation

The canonical public explanation of PhreshOS contracts and workflows.

[Read the documentation](https://docs.phreshos.com) ·
[PhreshOS](https://github.com/PhreshOS) ·
[Source](https://github.com/PhreshOS/docs)

## Role

This repository explains the public System, runtime, SDK, CLI, and Program
authoring contracts. Core and the owning runtime boundaries remain the source of
truth for behavior; documentation represents those contracts and never creates
a competing model.

Content has four explicit domains:

```text
content/docs/
├── (start)  Orientation and ordered workflows
├── runtime  Program, Process, Endpoint, Service, and Context
├── system   Capabilities, authority, persistence, and Desktop
└── sdks     Environment adapters and CLI
```

The complete authoring contract is recorded in [AGENTS.md](AGENTS.md).

## Development

```sh
bun install --frozen-lockfile
bun run types:check
bun run build
bun run dev
```

The static site is emitted to `out/`.

## Deployment

```sh
bun run deploy
```

Cloudflare Workers serves the static export. `NEXT_PUBLIC_SITE_URL` sets the
canonical public origin used by generated metadata.

## Related repositories

- [`@phreshos/core`](https://github.com/PhreshOS/core) is the source of truth
  for shared public contracts.
- [PhreshOS System](https://github.com/PhreshOS/system) owns authoritative
  runtime behavior and Desktop implementation.
- [PhreshOS Website](https://github.com/PhreshOS/website) owns the public
  product presentation and directs readers here for technical material.

## License

Licensed under the [MIT License](LICENSE). Copyright © 2026 Zohayr SLILEH.
