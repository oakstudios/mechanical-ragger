import React from "react";
console.log("hello");
import Ragger from "./MechanicalRagger.js";
console.log("hello2");

console.log({ Ragger });

const TextRagger = (props) => {
  const containerEl = React.useRef(null);
  const ragger = React.useRef();
  const [exclusionCSS, setExlusionCSS] = React.useState({});

  React.useEffect(() => {
    ragger.current = new Ragger({
      container,
      width: props.width,
      onUpdate: setExlusionCSS,
    });
  }, []);

  React.useEffect(() => {
    ragger.current.width = props.width;
  }, [props.width]);

  React.useEffect(() => {
    ragger.current.container = containerEl;
  }, [containerEl]);

  return (
    <div ref={containerEl}>
      <div style={exclusionCSS} />
      {props.children}
    </div>
  );
};
export default TextRagger;
