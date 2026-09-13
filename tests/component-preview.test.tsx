// @vitest-environment jsdom
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { hydrateRoot } from "react-dom/client"
import { renderToString } from "react-dom/server"
import { afterEach, expect, test, vi } from "vitest"
import { useTheme } from "@phreshos/react-ui"
import { ComponentPreview, Preview, PreviewCode } from "../components/component-preview"

const docsTheme = vi.hoisted(() => ({ resolvedTheme: "dark" }))
vi.mock("fumadocs-ui/provider/base", () => ({ useTheme: () => docsTheme }))

afterEach(cleanup)

function ThemeProbe() {
  return <output aria-label="Preview theme">{useTheme()}</output>
}

function Example() {
  return <ComponentPreview>
    <Preview><ThemeProbe /></Preview>
    <PreviewCode>Example source</PreviewCode>
  </ComponentPreview>
}

test("the preview follows the docs theme and switches between result and source", () => {
  docsTheme.resolvedTheme = "dark"
  const view = render(<Example />)
  expect(screen.getByLabelText("Preview theme").textContent).toBe("dark")
  docsTheme.resolvedTheme = "light"
  view.rerender(<Example />)
  expect(screen.getByLabelText("Preview theme").textContent).toBe("light")
  fireEvent.click(screen.getByRole("tab", { name: "Code" }))
  expect(screen.getByRole("tabpanel").textContent).toBe("Example source")
  fireEvent.click(screen.getByRole("tab", { name: "Preview" }))
  expect(screen.getByLabelText("Preview theme").textContent).toBe("light")
})

test("server markup hydrates without a theme mismatch before adopting the docs theme", async () => {
  docsTheme.resolvedTheme = "dark"
  const container = document.createElement("div")
  container.innerHTML = renderToString(<Example />)
  const errors: unknown[] = []
  let root: ReturnType<typeof hydrateRoot> | undefined
  try {
    await act(async () => {
      root = hydrateRoot(container, <Example />, { onRecoverableError: error => errors.push(error) })
    })
    expect(errors).toEqual([])
    expect(container.querySelector("output")?.textContent).toBe("dark")
  } finally {
    await act(async () => root?.unmount())
  }
})
