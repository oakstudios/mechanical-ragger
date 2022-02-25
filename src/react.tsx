/**
 * @package mechanical-ragger
 * @fileoverview React Component entry
 * @license MIT
 * @author Oak Studios
 */

import * as React from "react";
import MechanicalRaggerCore from "./core";
/**
 * Mechanical Ragger React Component
 */
export const MechanicalRaggerReact = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerEl = React.useRef<HTMLDivElement | null>(null);
  const ragger = React.useRef<InstanceType<typeof MechanicalRaggerCore> | null>(
    null
  );
  const [exclusionCSS, setExlusionCSS] = React.useState({});

  React.useLayoutEffect(() => {
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
      {children}
    </div>
  );
};

export default MechanicalRaggerReact;
