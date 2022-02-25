/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MechanicalRaggerReact from "../react";
import MechanicalRagger from "../web-component";

// Mock ResizeObserver for the test.
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;
class DOMRect {
  x = 0;
  y = 0;
  width = 0;
  height = 0;
}
window.DOMRect = DOMRect;
test("the React component renders without errors.", () => {
  render(<MechanicalRaggerReact>Hello there.</MechanicalRaggerReact>);
  expect(screen.getByTestId("mechanical-ragger")).toHaveTextContent(
    "Hello there."
  );
});

test("the web component is created without errors.", async () => {
  customElements.define("mechanical-ragger", MechanicalRagger);
  const el = document.createElement("mechanical-ragger");
  expect(el).toHaveProperty("ragger");
});
