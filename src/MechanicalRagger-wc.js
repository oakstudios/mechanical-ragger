/**
 * mechanical-ragger
 * Oak Studios
 * Copyright 2021
 */
class MechanicalRaggerWC extends HTMLElement {
  static get observedAttributes() {
    return ["width"];
  }
  constructor() {
    super();
    this.width = this.attributes.width.value;

    const shadow = this.attachShadow({ mode: "closed" });

    shadow.appendChild(document.createElement("style"));

    this.exclusion = shadow.appendChild(document.createElement("div"));

    this.textRoot = shadow.appendChild(document.createElement("div"));
    this.textRoot.innerHTML = this.innerHTML;
  }

  connectedCallback() {
    Object.assign(this.exclusion.style, this.getCSSProperties());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "width") {
      console.log("attributeChangedCallback", { newValue });
      Object.assign(this.exclusion.style, { width: newValue });
    }
  }

  getExclusionPolygon() {
    const containerLineHeight = document.defaultView
      .getComputedStyle(this.textRoot, null)
      .getPropertyValue("line-height");

    const lineHeight = Math.floor(parseFloat(containerLineHeight));

    const lineCount = Math.floor(this.textRoot.clientHeight / lineHeight);

    const lineArray = Array(lineCount).fill();

    return `${lineArray
      .map((line, i) => {
        const isEven = i % 2 === 0;
        const y0 = i * lineHeight;
        const y1 = i * lineHeight + lineHeight;

        if (isEven) {
          return `100% ${y0}px, 100% ${y1}px,`;
        } else {
          return `0% ${y0}px, 0% ${y1}px,`;
        }
      })
      .join("")} 100% ${lineCount * lineHeight}px`;
  }

  getCSSProperties() {
    const shape = this.getExclusionPolygon();

    return {
      clipPath: `polygon(${shape})`,
      shapeOutside: `polygon(${shape})`,
      width: this.width,
      height: `${this.textRoot.clientHeight}px`,
      float: "right",
    };
  }
}

customElements.define("mechanical-ragger", MechanicalRaggerWC);
