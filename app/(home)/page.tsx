import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-medium text-fd-muted-foreground">PhreshOS Documentation</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Build Programs that belong on the desktop.
      </h1>
      <p className="mt-5 max-w-xl text-balance text-fd-muted-foreground">
        Practical guides for creating, running, and integrating PhreshOS Programs.
      </p>
      <Link
        href="/docs"
        className="mt-8 rounded-lg bg-fd-primary px-5 py-2.5 font-medium text-fd-primary-foreground"
      >
        Get started
      </Link>
    </main>
  );
}
