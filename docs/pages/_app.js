import React, { useState, useLayoutEffect } from "react";
import Head from "next/head";
import "../styles/globals.scss";
import "../utils/cursorPosition.js";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [cursorSize, setCursorSize] = useState("normal");

  const [ragged, setRagging] = useState(true);

  const [headerRef, headerBounds] = useMeasure();
  const router = useRouter();

  useLayoutEffect(() => {
    const elementList = [
      ...document.querySelectorAll("a, .toggle, .HoverImage"),
    ];
    const hoverCursor = () => setCursorSize("hovered");
    const resetCursor = () => setCursorSize("normal");
    elementList.forEach((element) => {
      element.addEventListener("mouseenter", hoverCursor);
      element.addEventListener("mouseleave", resetCursor);
    });

    return () => {
      elementList.forEach((element) => {
        element.removeEventListener("mouseenter", hoverCursor);
        element.removeEventListener("mouseleave", resetCursor);
      });
    };
  }, [router.asPath]);

  return (
    <div
      className="App"
      style={{
        "--header-height": `${headerBounds.height}px`,
        "--ragging-width": ragged ? "clamp(2rem, 10%, 3rem)" : "0px",
      }}
    >
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <span className={`cursor state--${cursorSize}`} />
      <header className="navigation vertical-padder" ref={headerRef}>
        <div className="grid wrapper">
          <h1 className="column-span-2 siteTitle">
            <Link href="/">
              <a>
                Mechanical Ragging Component
                <br />
                First Edition
              </a>
            </Link>
          </h1>
          <label className="column-span-2 toggle">
            <span>
              Ragging
              <br />
              <span>({ragged ? "enabled" : "disabled"})</span>
            </span>
            <span
              className={"button-container " + (ragged ? "ragged" : "unragged")}
            >
              <button
                className="circle-button"
                onClick={() => setRagging(!ragged)}
              >
                <svg viewBox="0 0 2 2">
                  <ellipse className="on-circle" rx="1" cx="1" ry="1" cy="1" />
                  <ellipse className="off-circle" rx="1" cx="1" ry="1" cy="1" />
                </svg>
                <span className="hidden">Toggle Ragging</span>
              </button>
            </span>
          </label>
          <div className="column-span-3 siteNav">
            <Link href="/">
              <a>Overview</a>
            </Link>
            {", "}
            <Link href="/examples">
              <a>Editorial Examples</a>
            </Link>
          </div>
        </div>
      </header>
      <div className="tabs">
        <div className="tab-content">
          <Component {...pageProps} />
          <div className="minimal-hr" />
          <button
            className="backtoTop"
            onClick={() => {
              document.body.scrollTop = 0; // For Safari
              document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
            }}
          >
            Back to the top
          </button>
          <div className="minimal-hr" />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
