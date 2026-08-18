# PhreshOS Documentation

The practical documentation application for building and operating PhreshOS
Programs. Documentation content lives in `content/docs`; the surrounding
Next.js application renders it with Fumadocs.

## Development

Install dependencies and start the local documentation site:

```sh
bun install
bun run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed origin when building outside local
development so generated social-image URLs use the public documentation host.

Before committing, verify both types and the production build:

```sh
bun run types:check
bun run build
```

The production build is a static export in `out/` and is deployed by an
assets-only Cloudflare Worker:

```text
Build command:       bun run build
Deploy command:      bun run deploy
Production branch:   main
BUN_VERSION:         1.3.14
NEXT_PUBLIC_SITE_URL: the canonical documentation origin
```

`NEXT_PUBLIC_SITE_URL` is a build variable used for generated metadata; it is
not a Worker runtime variable.
