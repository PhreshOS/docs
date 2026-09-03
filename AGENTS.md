# Documentation Contract

These rules govern every file under this repository. The documentation is a
public representation of PhreshOS contracts, not a second source of truth and
not a collection of independently written articles.

## Establish the fact first

Before documenting behavior, verify it against the contract that owns it:

1. Core for shared domains, public types, and invariants.
2. The owning SDK or System boundary for environment-specific capability.
3. Tests and implementation for observable behavior, defaults, and failure
   semantics.

Do not derive a general contract from one consumer, example, transport, or
implementation. If the sources disagree, fix or report the disagreement; do
not choose the most convenient version for the prose.

## Put each fact in one domain

Every substantive fact has one canonical home:

| Area | Owns |
| --- | --- |
| Start | Orientation and ordered adoption workflows |
| Runtime | Program, Process, Endpoint, Service, Context, and communication contracts |
| System | System capabilities, authority, security, persistence, Desktop, and operation |
| SDKs | How Client, Server, React, Node, and CLI expose or compose existing contracts |

An index page defines its area's mental model and routes to its children. It
must not duplicate their detailed contracts. When another page needs an
existing fact, state only the context needed there and link to its canonical
page.

Add a page only for a concept with its own stable contract or a workflow with a
distinct outcome. Otherwise, add a section to the page that already owns the
subject. Keep every `meta.json` order explicit.

## Write one kind of page

Choose the page's role before writing it:

- An orientation page answers what the product or area is and maps its parts.
- A domain page defines one entity, its ownership, lifecycle, capabilities,
  and boundaries.
- A capability page defines one operation family, its inputs, result,
  authority, defaults, and failure behavior.
- An adapter page explains how one environment exposes shared contracts and
  only the differences introduced by that environment.
- A workflow page begins with prerequisites, gives ordered actions, and ends
  with an observable successful result.

Do not mix a tutorial, conceptual explanation, API inventory, and operational
reference merely to make a page look complete.

## Page structure

Every MDX page has accurate `title`, `description`, and `icon` frontmatter. Its
first paragraph directly defines the subject or outcome. The remaining
sections follow the concept's natural contract; headings exist only when they
separate meaningful concerns.

Uniformity is the default. Pages at the same level use the same naming grammar,
information order, component patterns, and level of detail. Begin with the
established sibling pattern and diverge only when the documented domain has a
real difference that the shared shape cannot express. Historical authorship,
implementation location, or available prose does not justify a different
structure.

Use PhreshOS domain names precisely and consistently: System, Program,
Process, Endpoint, Server Endpoint, Client Endpoint, Service, Context, Desktop,
and Window. Name the entity that owns state or behavior. Distinguish an
authoritative fact from a local representation and a contract from its
transport or adapter.

For an API operation, document only what a reader needs to use it correctly:

- the owning object and exact public name;
- accepted input and defaults;
- returned value or event sequence;
- lifecycle and side effects;
- authority or permission boundary; and
- meaningful rejection or absence behavior.

Omit bullets that do not apply. Never invent symmetry to fill a template.

## Examples

Examples use only current public APIs and must be minimal, realistic, and
copyable. Preserve the real asynchronous shape: do not hide a Promise, consume
a generator on the reader's behalf, or imply that a subscription returns
current state.

Use neutral identities and paths. Never use a contributor's name, machine,
home directory, secret, private URL, or unpublished internal import. Do not add
compatibility syntax, imaginary convenience methods, or implementation objects
to make an example shorter.

When several commands differ only by package manager, operating system, or one
other mutually exclusive variant, show them as variants of one example rather
than repeating the surrounding explanation.

## Fumadocs components

Components carry meaning and are not decoration:

- `Cards` navigate among peer concepts or the next deliberate choices.
- `Tabs` represent mutually exclusive variants of the same contract or step.
- `Steps` represent actions whose order is required.
- `Callout` marks a constraint, risk, exception, or critical clarification.
- `Files` shows a real file hierarchy that the reader will use.

Use plain prose or a code block when a component does not add structure. Do not
repeat the same information inside and outside a component.

## Style

Lead with the result or definition. Prefer short, concrete sentences over
marketing language, narration, or historical commentary. Explain why only
when it clarifies a contract or prevents a likely mistake. Do not describe
work that Codex performed, future intentions as present behavior, or internal
architecture that has no observable consequence.

## Change procedure

For every documentation change:

1. Identify the owning domain and canonical page.
2. Verify the fact from source and tests.
3. Update that page and only the summaries or links made inaccurate by it.
4. Add or move navigation only when the information architecture changed.
5. Run the documentation type check and inspect the resulting diff for
   duplication, unsupported claims, stale names, and personal data.

Before a repository-wide contract audit, inventory Core's public domains,
capabilities, operations, events, and permissions and map each item to its
current canonical page. Freeze that coverage matrix before editing. Finish by
rechecking the same matrix so an undocumented contract cannot remain invisible
and a repeated contract cannot acquire two competing homes.

Documentation changes with the public contract that made them necessary. A
code change is not complete when its canonical documentation now says
something false; unrelated pages are not rewritten merely because one fact
changed.
