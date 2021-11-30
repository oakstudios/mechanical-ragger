/**
 * @package mechanical-ragger
 * @fileoverview React Component entry
 * @license MIT
 * @author Oak Studios
 */

import { useState, useRef, useLayoutEffect } from "react";
import MechanicalRaggerCore from "./core";

export const MechanicalRaggerReact = (props) => {
  const containerEl = useRef(null);
  const ragger = useRef();
  const [exclusionCSS, setExlusionCSS] = useState({});

  useLayoutEffect(() => {
    if (containerEl.current) {
      ragger.current = new MechanicalRaggerCore({
        container: containerEl.current,
        onUpdate: setExlusionCSS,
      });
    }
  }, []);

  return (
    <div ref={containerEl}>
      <div style={exclusionCSS} />
      {props.children}
    </div>
  );
};

export default MechanicalRaggerReact;
