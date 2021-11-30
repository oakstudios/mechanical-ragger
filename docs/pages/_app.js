import React, { useState, useLayoutEffect, useEffect } from "react";
import "../styles/globals.scss";
import "../utils/cursorPosition.js";
import useMeasure from "react-use-measure";
import Link from "next/link"
import { useRouter } from "next/router";

import PhotoSwipeRoot from "../components/PhotoSwipe";
// importing here because global CSS can't be imported in inner pages in Next.js
import "photoswipe/dist/photoswipe.css";
import "photoswipe/src/css/default-skin/default-skin.scss";

function MyApp({ Component, pageProps }) {
  const [cursorSize, setCursorSize] = useState("normal");

  const [headerRef, headerBounds] = useMeasure();
  const router = useRouter();

  useLayoutEffect(() => {
    console.log("layouteffect")
    const elementList = document.querySelectorAll(
      "img, a, button, .HoverImage"
    );
    const hoverCursor = () => setCursorSize("hovered");
    const resetCursor = () => setCursorSize("normal");
    [...elementList].map((element) => {
      element.addEventListener("mouseenter", hoverCursor);
      element.addEventListener("mouseleave", resetCursor);
      return true;
    });

    return () => {
      const elementList = document.querySelectorAll(
        "img, a, button, .hover-title"
      );

      [...elementList].map((element) => {
        element.removeEventListener("mouseenter", hoverCursor);
        element.removeEventListener("mouseleave", resetCursor);
        return true;
      });
    };
  }, [router.asPath]);

  return (
    <div
      className="App"
      style={{
        "--header-height": `${headerBounds.height}px`,
      }}
    >
      <span className={`cursor state--${cursorSize}`} />
      <header
        className="grid navigation wrapper vertical-padder"
        ref={headerRef}
      >
        <h1 className="column-span-4 siteTitle">
          <Link href="/">
            <a>
              Mechanical Ragging Component<br />
              First Edition
            </a>
          </Link>
        </h1>
        <div className="column-span-3 siteNav">
          <Link href="/"><a>Overview</a></Link>{", "}
          <Link href="/examples"><a>Editorial Examples</a></Link>
        </div>
      </header>
      <div className="tabs">
        <div className="tab-content">
          <Component {...pageProps} />
          <div className="minimal-hr" />
          <button className="backtoTop" onClick={() => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }}>Back to the top</button>
          <div className="minimal-hr" />
        </div>
      </div>
      <PhotoSwipeRoot />
    </div>
  );
}

export default MyApp
