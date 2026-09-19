# Documentation Contract

These rules govern every file under this repository. The documentation explains
how PhreshOS is used, and the contracts that make that usage mean something.
It is one explanation in several sections, not a second source of truth and
not a collection of independently written articles.

## Purpose

Write for a reader who wants to use the system. Show how to do the thing, and
in the same movement say what the thing is. Do not split theory from practice
into separate manuals. Do not write an API inventory whose meaning is left to
the code, and do not write a usage recipe whose meaning is postponed.

The code is the technical record. This documentation is the human-language
account of the public contracts and of the actions those contracts make
possible.

Write the system that exists. Do not write a change to the documentation, a
correction of earlier prose, or a comparison with a previous explanation.
A reader who has never seen another version must still receive a complete
account of the contract.

## Establish the fact from the system

The system is the only source for what to write: Core for shared domains, the
owning SDK or System boundary for environment-specific capability, and tests
for observable defaults and failure semantics.

Do not use existing documentation to decide what a page should say, how a
contract should be phrased, or which facts belong. Existing pages may be
replaced; they are not a source. Do not derive a general contract from one
consumer, example, transport, or implementation. If sources disagree, report
the disagreement; do not choose the most convenient version for the prose.

## One method

Explain similar things in the same way and with the same structure, even when
they live in different sections. Change the method only when the thing itself
is different, and that difference must be real. Similarity is the default;
difference is what needs a reason.

A later mention of an earlier contract does not re-teach it. State only the
context needed on this page and link to the page that owns the meaning.

A name may appear before its full explanation when the surrounding idea
requires it. Say that it is explained later, or link to that section. Prefer
an order in which each idea can be understood from what came before, without
treating that order as a ban on forward reference.

## Put each fact in one domain

Every substantive fact has one canonical home:

| Area | Owns |
| --- | --- |
| Start | What PhreshOS is, how to install it, and how a first Program enters the system |
| Runtime | Program, Process, Endpoint, Service, Context, and communication |
| System | Authority, Desktop, Appearance, storage, network, shell, security, and permissions |
| SDKs | How each environment reaches the same contracts, and only the differences that environment introduces |

An index page defines its area and routes to its children. It must not
duplicate their detailed contracts.

Add a page only for a concept with its own stable contract or a workflow with
a distinct outcome. Otherwise, add a section to the page that already owns the
subject. Keep every `meta.json` order explicit.

## Page structure

Every MDX page has accurate `title`, `description`, and `icon` frontmatter when
the area uses icons. Its first paragraph directly defines the subject.

The remaining sections follow the contract: what the thing is, how you use it,
what it owns, and the boundaries that matter. Headings exist only when they
separate meaningful concerns.

Pages at the same level use the same naming grammar, information order, and
level of detail. Begin with the established sibling pattern.

Use PhreshOS domain names precisely: System, Program, Process, Endpoint,
Server Endpoint, Client Endpoint, Service, Context, Desktop, and Window.

For an operation, document what a reader needs in order to use it correctly:
the owning object and public name, accepted input and defaults, the result,
lifecycle, authority, and meaningful rejection or absence. Omit bullets that
do not apply.

## Examples

Examples use only current public APIs. They are short, realistic, and copyable.
Preserve the real asynchronous shape. An example exists to make one contract
obvious. Do not burden it with production hardening.

Use neutral identities and paths. Never use a contributor's name, machine,
home directory, secret, or unpublished internal import. Do not add imaginary
convenience methods.

When several commands differ only by package manager, operating system, or
one other mutually exclusive variant, show them as variants of one example.

## Fumadocs components

Components carry meaning and are not decoration:

- `Cards` navigate among peer concepts or the next deliberate choices.
- `Tabs` represent mutually exclusive variants of the same contract or step.
- `Steps` represent actions whose order is required.
- `Callout` marks a constraint, risk, exception, or critical clarification.
- `Files` shows a real file hierarchy that the reader will use.

Use plain prose or a code block when a component does not add structure.

## Style

Lead with the result or definition. Prefer short, concrete sentences. Explain
why only when it clarifies a contract or prevents a likely mistake. Do not
describe internal architecture that has no observable consequence, and do not
contaminate the explanation with the history of the documentation or the
system.

Do not document a fact merely because it is true. Omit what is already obvious
from the contract just stated. A negative guarantee still belongs when it
materially defines how the contract may be used.

## Change procedure

For every documentation change:

1. Identify the owning domain and canonical page.
2. Verify the fact from the system.
3. Update that page and only the summaries or links made inaccurate by it.
4. Add or move navigation only when the information architecture changed.
5. Run the documentation type check and inspect the resulting diff for
   duplication, unsupported claims, stale names, and personal data.

Documentation changes with the public contract that made them necessary.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
