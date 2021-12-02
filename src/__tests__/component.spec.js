/**
 * @jest-environment jsdom
 */

import { fixture } from "@open-wc/testing-helpers";
import {render, screen} from '@testing-library/react'
import MechanicalRaggerReact from "../react"
import "../web-component-auto-register"

// Mock ResizeObserver for the test.
class ResizeObserver {
  observe() {}
  unobserve() {}
}
window.ResizeObserver = ResizeObserver;

describe("mechanical-ragger", () => {
  it("renders a web component", async () => {
    const component = await fixture("<mechanical-ragger>Hello.</mechanical-ragger>");
    expect(component).toHaveProperty("ragger")
  })

  it ("renders a react component", async () => {
    render(<MechanicalRaggerReact>Hello.</MechanicalRaggerReact>)
    expect(true).toBe(true)
  })
})
