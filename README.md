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
