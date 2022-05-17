/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MechanicalRaggerReact from "../react";
import MechanicalRagger from "../web-component";

// Mock ResizeObserver for the test.
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
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

customElements.define("mechanical-ragger", MechanicalRagger);
test("the web component is created without errors.", async () => {
  const el = document.createElement("mechanical-ragger");
  document.body.appendChild(el);
  expect(el).toHaveProperty("ragger");
});

test("the web component calls unobserve when it's removed from the DOM.", async () => {
  const el = document.createElement("mechanical-ragger");
  document.body.appendChild(el);
  el.remove();
  expect(el.ragger.sizeListener.disconnect).toHaveBeenCalled();
});
