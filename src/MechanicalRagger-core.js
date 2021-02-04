/**
 * mechanical-ragger
 * Oak Studios
 * Copyright 2021
 */
class MechanicalRaggerCore {
  constructor({ container, width, onUpdate } = {}) {
    this.container = container;
    this.width = width;
    this.containerBounds = {};
    this.updateCallback = onUpdate || function () {};

    this.attachSizeListener();

    this.sizeListener = new ResizeObserver(this.sizeListener);
  }

  /**
   * Setters
   */

  set container(value) {
    this.container = value;

    this.attachSizeListener();
  }
  set width(value) {
    this.width = value;

    this.update();
  }
  set containerBounds(value) {
    this.containerBounds = value;
  }

  /**
   * Getters
   */

  get lineHeight() {
    const containerLineHeight = document.defaultView
      .getComputedStyle(this.container, null)
      .getPropertyValue("line-height");

    return Math.floor(parseFloat(containerLineHeight));
  }

  get lineCount() {
    return Math.floor(this.containerBounds.height / this.lineHeight);
  }

  get exclusionPolygon() {
    const lineArray = Array(this.lineCount).fill();

    return `${lineArray
      .map((line, i) => {
        const isEven = i % 2 === 0;
        const y0 = i * this.lineHeight;
        const y1 = i * this.lineHeight + this.lineHeight;

        if (isEven) {
          return `100% ${y0}px, 100% ${y1}px,`;
        } else {
          return `0% ${y0}px, 0% ${y1}px,`;
        }
      })
      .join("")} 100% ${this.lineCount * this.lineHeight}px`;
  }

  get cssProperties() {
    return {
      clipPath: `polygon(${this.exclusionPolygon})`,
      shapeOutside: `polygon(${this.exclusionPolygon})`,
      width: this.width,
      height: `${this.containerBounds.height}px`,
      float: "right",
    };
  }

  /**
   * Methods
   */

  sizeListener(entries) {
    for (let entry of entries) {
      // TODO: use entry.contentBoxSize for vertical writing modes
      this.containerBounds = entry.contentRect;
    }
    this.update();
  }

  update() {
    this.updateCallback(this.cssProperties);
  }

  attachSizeListener() {
    this.sizeListener.observe(this.container);
  }
}

module.exports = MechanicalRaggerCore;
