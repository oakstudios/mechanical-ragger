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

customElements.define("mechanical-ragger", MechanicalRagger);
test("the web component is created without errors.", async () => {
  const el = document.createElement("mechanical-ragger");
  expect(el).toHaveProperty("ragger");
});

test("the web component reflects updated content.", async () => {
  const container = document.createElement("div");
  container.innerHTML = "<mechanical-ragger>one</mechanical-ragger>";
  const el = container.querySelector("mechanical-ragger");
  el.innerHTML = "two";
  // el.shadowRoot seems like it's not thoroughly implemented in JSDOM.
  expect(el.shadowRoot).toHaveTextContent("two");
});
test("the web component's slot element inherit styles.", async () => {
  const container = document.createElement("div");
  const style = (document.createElement(
    "style"
  ).innerHTML = `a { border: 1px solid blue; }`);
  container.innerHTML =
    "<mechanical-ragger><a href='#'>one</a></mechanical-ragger>";
  document.body.append(container, style);
  const el = container.querySelector("mechanical-ragger a");
  // jsdom doessn't return anything from getComputedStyle beside visibility.
  const borderStyle = window.getComputedStyle(el).border;
  expect(borderStyle).toEqual("1px solid blue");
});
