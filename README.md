# PhreshOS Documentation

The public documentation for understanding, building, and operating PhreshOS.

The repository contains the canonical user-facing model of the System, runtime,
SDKs, CLI, and Program authoring workflow. Fumadocs renders the authored MDX
content as a statically exported documentation application.

## Content

```text
content/docs/
├── (start)
├── system
├── runtime
└── sdks
```

Documentation describes the public model rather than repository history or
private implementation. API names and examples must match the released
contracts they teach.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

Verify the type surface and production export:

```sh
bun run types:check
bun run build
```

The static site is emitted to `out/`.

## Deployment

```sh
bun run deploy
```

Cloudflare Workers serves the static export. Set `NEXT_PUBLIC_SITE_URL` to the
canonical deployed origin during production builds so generated metadata uses
the public documentation address.

## Repository boundary

This repository owns public PhreshOS documentation and its presentation. It
does not own the contracts or runtime behavior described by that documentation;
those remain in their respective repositories.

## License

Licensed under the [MIT License](LICENSE). Copyright © 2026 Zohayr SLILEH.
