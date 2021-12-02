/**
 * @package mechanical-ragger
 * @fileoverview React Component entry
 * @license MIT
 * @author Oak Studios
 */

import React, { useState, useRef, useLayoutEffect } from "react";
import MechanicalRaggerCore from "./core";

const MechanicalRaggerReact = (props) => {
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
    return () => {
      if (ragger.current) {
        ragger.current.destroy();
      }
    };
  }, [containerEl.current]);

  return (
    <div ref={containerEl} data-testid="mechanical-ragger">
      <div style={exclusionCSS} />
      {props.children}
    </div>
  );
};

export default MechanicalRaggerReact;
