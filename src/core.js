/**
 * @package mechanical-ragger
 * @fileoverview Core class
 * @license MIT
 * @author Oak Studios
 */

export class MechanicalRaggerCore {
  constructor({ container, onUpdate } = {}) {
    if (typeof window === "undefined") return;
    this.sizeListener = new ResizeObserver(this.sizeListenerCallback);

    this.containerBounds = {};
    this.container = container;

    this.updateCallback = onUpdate || function () { };
  }

  /**
   * Public Properties
   */

  get container() {
    return this._container;
  }
  set container(value) {
    this._container = value;

    this.attachSizeListener();
  }

  /**
   * Derived Properties
   */

  get exclusionPolygon() {
    const containerLineHeight = document.defaultView
      .getComputedStyle(this.container, null)
      .getPropertyValue("line-height");

    const lineHeight = Math.floor(parseFloat(containerLineHeight));

    const lineCount = Math.floor(this.containerBounds.height / lineHeight);

    const lineArray = Array(lineCount).fill();

    return `${lineArray
      .map((line, i) => {
        const isEven = i % 2 === 0;
        const y0 = i * lineHeight;
        const y1 = y0 + lineHeight;
        const midpoint = y0 + lineHeight / 2;

        if (isEven) {
          return `100% ${y0}px, 100% ${y1}px,`;
        } else {
          return `0% ${midpoint}px, 0% ${midpoint}px,`;
        }
      })
      .join("")} 100% ${lineCount * lineHeight}px`;
  }

  get cssProperties() {
    const shape = this.exclusionPolygon;
    return {
      clipPath: `polygon(${shape})`,
      shapeOutside: `polygon(${shape})`,
      width: "var(--ragging-width, 1em)",
      height: `${this.containerBounds.height}px`,
      float: "right",
    };
  }

  /**
   * Methods
   */

  sizeListenerCallback = (entries) => {
    for (let entry of entries) {
      // TODO: use entry.contentBoxSize for vertical writing modes
      this.containerBounds = entry.contentRect;
    }
    this.update();
  };

  update = () => {
    const styles = this.cssProperties;
    if (styles) {
      this.updateCallback(styles);
    }
  };

  attachSizeListener = () => {
    this.sizeListener.observe(this.container);
  };

  destroy = () => {
    this.sizeListener.disconnect();
  };
}

export default MechanicalRaggerCore;
