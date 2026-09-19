// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, expect, test, vi } from "vitest"
import { ButtonShowcase, OverlayShowcase, WindowShowcase } from "../components/showcase/examples"

const docsTheme = vi.hoisted(() => ({ resolvedTheme: "dark" as "dark" | "light" }))

vi.mock("fumadocs-ui/provider/base", () => ({
  useTheme: () => ({ resolvedTheme: docsTheme.resolvedTheme }),
}))

afterEach(() => {
  cleanup()
  docsTheme.resolvedTheme = "dark"
})

test("the button showcase puts the action in a window and applies controls", () => {
  render(<ButtonShowcase />)
  expect(document.querySelector<HTMLElement>(".component-showcase-stage")?.style.backgroundImage)
    .toContain("/component-preview/dark.png")
  expect(screen.getByLabelText("Properties")).toBeTruthy()
  expect(screen.getByText("Notes")).toBeTruthy()
  expect(screen.getByRole("button", { name: "Save" })).toBeTruthy()
  fireEvent.click(screen.getByLabelText("Disabled"))
  expect((screen.getByRole("button", { name: "Save" }) as HTMLButtonElement).disabled).toBe(true)
})

test("the Window showcase uses the complete Window composition", () => {
  render(<WindowShowcase />)

  const content = screen.getByText("Window provides the Surface, header, and remaining content area.")
  const window = content.parentElement?.parentElement
  expect(window?.style.display).toBe("flex")
  expect(window?.style.flexDirection).toBe("column")
  expect(screen.getByRole("button", { name: "Maximize" })).toBeTruthy()
})

test("the preview stage follows the light documentation theme", () => {
  docsTheme.resolvedTheme = "light"
  render(<ButtonShowcase />)

  expect(document.querySelector<HTMLElement>(".component-showcase-stage")?.style.backgroundImage)
    .toContain("/component-preview/light.png")
})

test("the overlay showcase includes an operable context menu", () => {
  render(<OverlayShowcase />)

  fireEvent.contextMenu(screen.getByRole("button", { name: "Context actions" }))

  expect(screen.getByRole("menu", { name: "Context actions" })).toBeTruthy()
  expect(screen.getByRole("menuitem", { name: "Open" })).toBeTruthy()
})
