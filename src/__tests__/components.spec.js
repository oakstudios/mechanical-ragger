/**
 * @jest-environment jsdom
 */

import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import MechanicalRaggerReact from "../react"

// Mock ResizeObserver for the test.
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect(){}
}
window.ResizeObserver = ResizeObserver;

test("the React component renders without errors.", () => {
  render(<MechanicalRaggerReact>Hello there.</MechanicalRaggerReact>)
  expect(screen.getByTestId("mechanical-ragger")).toHaveTextContent("Hello there.")
});