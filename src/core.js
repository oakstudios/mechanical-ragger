/**
 * @package mechanical-ragger
 * @fileoverview Core class
 * @license MIT
 * @author Oak Studios
 */

export class MechanicalRaggerCore {
  /**
   * @param {HTMLElement} container
   * @param {(value) => void} onUpdate
   */
  constructor({ container, onUpdate } = {}) {
    if (typeof window === "undefined") return;
    this.sizeListener = new ResizeObserver(this.sizeListenerCallback);

    this.containerBounds = {};
    this.container = container;

    this.updateCallback = onUpdate || function () {};
  }

  /**
   * Reference to the ResizeObserver target
   * @returns {HTMLElement}
   */
  get container() {
    return this._container;
  }
  set container(value) {
    this._container = value;

    this.attachSizeListener();
  }

  /**
   * The exclusion shape added to the styles of the container
   * @returns {string}
   */
  get exclusionPolygon() {
    const ragAxis = this.ragAxis;
    const containerStyles = document.defaultView.getComputedStyle(
      this.container,
      null
    );
    const leading = Math.floor(
      parseFloat(containerStyles.getPropertyValue("line-height"))
    );
    const writingMode = containerStyles.getPropertyValue("writing-mode");
    const lineCount = Math.floor(this.blockSize / leading);
    const lineArray = Array(lineCount).fill();
    let inlineStart = "0%",
      inlineEnd = "100%";
    if (this.ragDirection === "left" || this.ragDirection === "top") {
      inlineStart = "100%";
      inlineEnd = "0%";
    }
    const blockSize = this.blockSize;
    const scaleBlockPosition = (blockPosition) => {
      // vertical-rl is opposite the cartesian coordinates of our
      // point group calculation, so we invert the coordinates
      if (writingMode === "vertical-rl") {
        return blockSize - blockPosition;
      } else {
        return blockPosition;
      }
    };

    const pointGroups = [
      ...lineArray.map((line, i) => {
        const isEven = i % 2 === 0;
        const blockPosition0 = i * leading;
        const blockPosition1 = blockPosition0 + leading;
        const blockMidpoint = blockPosition0 + leading / 2;

        // shapes
        //  |
        // <
        //  |
        // <
        if (isEven) {
          // creates shape: |
          return [
            [inlineEnd, `${scaleBlockPosition(blockPosition0)}px`],
            [inlineEnd, `${scaleBlockPosition(blockPosition1)}px`],
          ];
        } else {
          // creates shape: <
          return [[inlineStart, `${scaleBlockPosition(blockMidpoint)}px`]];
        }
      }),
      // last point to prevent a wonky connection to first point
      [[inlineEnd, `${scaleBlockPosition(this.blockSize)}px`]],
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

  /**
   * The side of the container that the rag exclusion is going to be placed
   * @returns {string} "left" | "right" | "top" | "bottom"
   */
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

  /**
   * The axis along which the rag is excluding
   * @returns {string} "x" or "y"
   */
  get ragAxis() {
    if (this.ragDirection === "top" || this.ragDirection === "bottom") {
      return "y";
    } else {
      return "x";
    }
  }

  /**
   * The size of the container along the block axis
   * @returns {number} size in pixels
   */
  get blockSize() {
    if (this.ragAxis === "y") {
      return this.containerBounds.width;
    } else {
      return this.containerBounds.height;
    }
  }

  /**
   * The styles that needs to be applied to the exclusion element
   * @returns {CSSStyleDeclaration}
   */
  get cssProperties() {
    const shape = this.exclusionPolygon;
    const float = {
      right: "right",
      left: "left",
      bottom: "right",
      top: "left",
    }[this.ragDirection];

    return {
      clipPath: `polygon(${shape})`,
      shapeOutside: `polygon(${shape})`,
      inlineSize: "var(--ragging-width, 1em)",
      blockSize: `${this.blockSize}px`,
      float,
    };
  }

  /**
   * The function called when the container size changes
   * @param {ResizeObserverEntry[]} entries
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

  /**
   * Recalculates the exclusion shape
   */
  update = () => {
    const styles = this.cssProperties;
    if (styles) {
      this.updateCallback(styles);
    }
  };

  /**
   * Attaches a `ResizeObserver` to the instance's `container`
   */
  attachSizeListener = () => {
    this.sizeListener.observe(this.container);
  };

  /**
   * Disconnects the `ResizeObserver` from the instance's `container`.
   *
   * ⚠️ You only really need to call this if you're using the `core` package in an
   * unsupported environment.
   */
  destroy = () => {
    this.sizeListener.disconnect();
  };
}

export default MechanicalRaggerCore;
