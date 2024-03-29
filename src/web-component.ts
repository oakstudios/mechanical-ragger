/**
 * @package mechanical-ragger
 * @fileoverview Web Component entry
 * @license MIT
 * @author Oak Studios
 */

import MechanicalRaggerCore from "./core";

/**
 * MechanicalRagger web component
 *
 * ```
 * <mechanical-ragger>
 *   #shadow-root
 *     <this.exclusion />
 *     <this.textRoot />
 * </mechanical-ragger>
 * ```
 *
 * @example ### Basic Usage
 * ```html
 *   <p>
 *     <mechanical-ragger>
 *       Lorem ipsum, dolor sit amet consectetur adipisicing elit.
 *     </mechanical-ragger>
 *   </p>
 * ```
 *
 * @example ### Manual Updating
 * Mechanical Ragger's core package is exposed on `mechanical-ragger.ragger`:
 *
 * ```js
 *   const component = document.querySelector("mechanical-ragger")
 *   if (component) { component.ragger.update() }
 * ```
 *
 */
export class MechanicalRaggerWC extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    this.exclusion = shadow.appendChild(document.createElement("div"));

    this.textRoot = shadow.appendChild(document.createElement("div"));
    this.textRoot.innerHTML += `<slot></slot>`;
  }

  exclusion: HTMLDivElement;
  textRoot: HTMLDivElement;
  ragger: InstanceType<typeof MechanicalRaggerCore>;

  connectedCallback () {
    this.ragger = new MechanicalRaggerCore({
      container: this.textRoot,
      onUpdate: this.setExclusionStyles,
    });
  };
  disconnectedCallback () {
    this.ragger.destroy();
  };

  setExclusionStyles = (value: Partial<CSSStyleDeclaration>) => {
    Object.assign(this.exclusion.style, value);
  };
}

export default MechanicalRaggerWC;
