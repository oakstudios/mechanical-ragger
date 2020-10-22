import React from "react";
import useMeasure from "react-use-measure";
import mergeRefs from "react-merge-refs";

const TextRagger = (props) => {
  const containerEl = React.useRef(null);
  const [containerBoundsRef, containerBounds] = useMeasure();

  if (containerEl.current) {
    const lineHeight = Math.floor(
      parseFloat(
        document.defaultView
          .getComputedStyle(containerEl.current, null)
          .getPropertyValue("line-height")
      )
    );

    const lineCount = Math.floor(containerBounds.height / lineHeight);
    // console.log({ lineCount, containerBounds, lineHeight });
    const lineArray = Array(lineCount).fill();
    const shapeAuto = `${lineArray
      .map((line, i) => {
        const isEven = i % 2 === 0;
        if (isEven) {
          return `
          100% ${i * lineHeight}px, 100% ${i * lineHeight + lineHeight}px,
        `;
        } else {
          return `
          0% ${i * lineHeight}px, 0% ${i * lineHeight + lineHeight}px,
        `;
        }
      })
      .join("")} 100% ${lineCount * lineHeight}px`;

    return (
      <div ref={mergeRefs([containerEl, containerBoundsRef])}>
        <div
          style={{
            clipPath: `polygon(${shapeAuto})`,
            shapeOutside: `polygon(${shapeAuto})`,
            width: props.width,
            height: `${containerBounds.height}px`,
            float: "right",
          }}
        />
        {props.children}
      </div>
    );
  } else {
    return (
      <div ref={mergeRefs([containerEl, containerBoundsRef])}>
        {props.children}
      </div>
    );
  }
};
export default TextRagger;
