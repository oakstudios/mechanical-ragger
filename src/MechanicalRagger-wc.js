/**
 * mechanical-ragger
 * Oak Studios
 * Copyright 2021
 */

import MechanicalRaggerCore from "./MechanicalRagger-core";

class MechanicalRaggerWC extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });

    this.exclusion = shadow.appendChild(document.createElement("div"));

    this.textRoot = shadow.appendChild(document.createElement("div"));
    this.textRoot.innerHTML = this.innerHTML;

    this.ragger = new MechanicalRaggerCore({
      container: this.textRoot,
      onUpdate: this.setStyles,
    });
  }

  connectedCallback = () => {};

  setStyles = (value) => {
    Object.assign(this.exclusion.style, value);
  };
}

customElements.define("mechanical-ragger", MechanicalRaggerWC);
