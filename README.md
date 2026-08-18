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

The production build is a static export in `out/`. A Cloudflare Pages project
uses the **Next.js (Static HTML Export)** preset with:

```text
Build command:    bun run build
Build directory:  out
Production branch: main
```

Cloudflare supplies `CF_PAGES_URL` during the build. Set
`NEXT_PUBLIC_SITE_URL` only when a custom public origin should replace it in
generated metadata.
