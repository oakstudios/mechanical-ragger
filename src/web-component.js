/**
 * @package mechanical-ragger
 * @fileoverview Web Component entry
 * @license MIT
 * @author Oak Studios
 */

import MechanicalRaggerCore from "./core";

/**
 * <mechanical-ragger>
 *   #shadow-root
 *     <this.exclusion />
 *     <this.textRoot />
 * </mechanical-ragger>
 */
export class MechanicalRaggerWC extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });

    this.exclusion = shadow.appendChild(document.createElement("div"));

    this.textRoot = shadow.appendChild(document.createElement("div"));
    this.textRoot.innerHTML = this.innerHTML;

    this.ragger = new MechanicalRaggerCore({
      container: this.textRoot,
      onUpdate: this.setExclusionStyles,
    });
  }

  connectedCallback = () => {
    this.ragger.update();
  };
  disconnectedCallback = () => {
    this.ragger.destroy();
  };

  setExclusionStyles = (value) => {
    Object.assign(this.exclusion.style, value);
  };
}

export default MechanicalRaggerWC;
