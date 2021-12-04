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

    this.updateCallback = onUpdate || function () {};
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
    const { height } = this.containerBounds;
    const ragAxis = this.ragAxis;
    const containerStyles = document.defaultView.getComputedStyle(
      this.container,
      null
    );
    const leading = Math.floor(
      parseFloat(containerStyles.getPropertyValue("line-height"))
    );
    const lineCount = Math.floor(height / leading);
    const lineArray = Array(lineCount).fill();
    let inlineStart = "0%",
      inlineEnd = "100%";
    if (this.ragDirection === "left" || this.ragDirection === "top") {
      inlineStart = "100%";
      inlineEnd = "0%";
    }

    const pointGroups = [
      ...lineArray.map((line, i) => {
        const isEven = i % 2 === 0;
        const blockPosition0 = i * leading;
        const blockPosition1 = blockPosition0 + leading;
        const blockMidpoint = blockPosition0 + leading / 2;

        if (isEven) {
          // creates shape: |
          return [
            [inlineEnd, `${blockPosition0}px`],
            [inlineEnd, `${blockPosition1}px`],
          ];
        } else {
          // creates shape: <
          return [[inlineStart, `${blockMidpoint}px`]];
        }
      }),
      // last point to prevent a wonky connection to first point
      [[inlineEnd, `${lineCount * leading}px`]],
    ];
    return pointGroups
      .map((pointGroup) => {
        return pointGroup.map((point) => {
          if (ragAxis === "y") {
            point.reverse();
          }
          return point.join(" ");
        });
      })
      .flat()
      .join(",");
  }

  get ragDirection() {
    const containerStyles = document.defaultView.getComputedStyle(
      this.container,
      null
    );

    const textAlign = containerStyles.getPropertyValue("text-align"),
      writingMode = containerStyles.getPropertyValue("writing-mode"),
      direction = containerStyles.getPropertyValue("direction");

    switch (writingMode) {
      case "vertical-lr":
      case "vertical-rl":
        // `left`/`right` don't care about `direction`
        if (textAlign === "left") {
          return "bottom";
        }
        if (textAlign === "right") {
          return "top";
        }
        if (direction === "ltr") {
          switch (textAlign) {
            case "start":
            case "left":
              return "bottom";
            case "end":
            case "right":
              return "top";
          }
        }
        if (direction === "rtl") {
          switch (textAlign) {
            case "start":
            case "left":
              return "top";
            case "end":
            case "right":
              return "bottom";
          }
        }
      case "horizontal-tb":
      default:
        // `left`/`right` don't care about `direction`
        if (textAlign === "left") {
          return "right";
        }
        if (textAlign === "right") {
          return "left";
        }
        if (direction === "ltr") {
          switch (textAlign) {
            case "start":
            case "left":
              return "right";
            case "end":
            case "right":
              return "left";
          }
        }
        if (direction === "rtl") {
          switch (textAlign) {
            case "start":
            case "left":
              return "left";
            case "end":
            case "right":
              return "right";
          }
        }
    }
  }

  get ragAxis() {
    if (this.ragDirection === "top" || this.ragDirection === "bottom") {
      return "y";
    } else {
      return "x";
    }
  }

  get cssProperties() {
    const shape = this.exclusionPolygon;
    const float = {
      right: "right",
      left: "left",
      bottom: "right",
      top: "left",
    }[this.ragDirection];
    const blockSize = ["right", "left"].includes(this.ragDirection)
      ? this.containerBounds.height
      : this.containerBounds.width;

    return {
      clipPath: `polygon(${shape})`,
      shapeOutside: `polygon(${shape})`,
      inlineSize: "var(--ragging-width, 1em)",
      blockSize: `${blockSize}px`,
      background: "blue",
      float,
    };
  }

  /**
   * Methods
   */

  sizeListenerCallback = (entries) => {
    for (let entry of entries) {
      /**
       * @todo use entry.contentBoxSize for vertical writing modes
       * when safari supports it
       */
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
