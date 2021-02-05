/**
 * @package mechanical-ragger
 * @fileoverview React Component entry
 * @license MIT
 * @author Oak Studios
 */

import React from "react";
import MechanicalRaggerCore from "./core";

export const MechanicalRaggerReact = (props) => {
  const containerEl = React.useRef(null);
  const ragger = React.useRef();
  const [exclusionCSS, setExlusionCSS] = React.useState({});

  if (containerEl.current) {
  }
  React.useEffect(() => {
    ragger.current = new MechanicalRaggerCore({
      container: containerEl,
      onUpdate: setExlusionCSS,
    });
  }, []);

  React.useEffect(() => {
    ragger.current.width = props.width;
  }, [props.width]);

  return (
    <div ref={containerEl}>
      <div style={exclusionCSS} />
      {props.children}
    </div>
  );
};

export default MechanicalRaggerReact;
