import React, { useState, useLayoutEffect, useEffect } from "react";
import "./App.scss";
import MechanicalRagger from "./components/MechanicalRagger";
import "./components/InvertCursor.js";
import PhotoSwipeRoot from "./components/PhotoSwipe";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default.js";
import useMeasure from "react-use-measure";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/src/css/default-skin/default-skin.scss";
import appleWatchMessage from "./images/appleWatchMessage.png";
import "./images/detailinTypography.jpg";
import "./images/elementsofTypographicStyle.jpg";
import "./images/friendship.jpg";
import "./images/friendship2.jpg";
import "./images/friendshipCover.jpg";
import "./images/harmonia.png";
import "./images/kaleidoscope.jpg";
import "./images/kaleidoscope2.jpg";
import oakLogo from "./images/oakLogo.png";
import "./images/raggerExample.png";
import "./images/spécimen.jpg";
import "./images/spécimen2.jpg";

const Essay = () => {
  const [ragged, setRagging] = useState(true);
  return (
    <div>
      <section className="grid wrapper vertical-padder">
        <p className="column-span-4 overview">
          This site serves as a portfolio for Mechanical Ragging Component
          developed by <div class="hover-title">Oak Studios.</div>
          <div class="hover-image">
            {" "}
            <img src={oakLogo} alt="Oak Logo" />
          </div>
          The Ragging component adjusts paragraphs{" "}
          <div class="hover-title">to be balanced</div>
          <div class="hover-image">
            {" "}
            <img src="/images/harmonia.png" alt="harmonia" />
          </div>
          , following the <div class="hover-title">long-short-long-short</div>
          <div class="hover-image">
            {" "}
            <img src="/images/raggerExample.png" alt="RaggerExample" />
          </div>{" "}
          sequence. Paragraph ragging has a strong influence on print media, and
          furthermore we cut off the boundary and deliver it to the digital
          design world.
        </p>
      </section>
      <div className="minimal-hr" />
      <section className="grid wrapper vertical-padder">
        <h1 className="column-span-2">Reference</h1>
      </section>
      <div className="minimal-hr" />
      <section className="grid button-section wrapper vertical-padder">
        <div className="column-span-2">
          <h1>Toggle</h1>
          <h1>
            (Flip the circle to see the difference between ragged paragraph and
            default paragraph on the essay below.)
          </h1>
        </div>
        <div className="column-span-5">
          <div className={"button-container " + (ragged && "ragged")}>
            <button
              className="circle-button rag-on"
              onClick={() => setRagging(true)}
            >
              Text currently unragged
            </button>
            <button
              className="circle-button rag-off"
              onClick={() => setRagging(false)}
            >
              Text currently ragged
            </button>
          </div>
        </div>
      </section>
      <div className="minimal-hr" />
      <article className="grid wrapper">
        <div className="articleBody column-span-4">
          <header>
            <h1>Exposition of Text Ragged & Expansion in the Digital World</h1>
            <h1>
              <time>September 18, 2020</time>
            </h1>
            <br></br>
          </header>
          <MechanicalRagger width={ragged ? "2rem" : "0px"}>
            <p>
              From Stop-motion to animating graphics with After Effects1,
              carving letters on wood blocks to generate scalable vectorized
              letters with Glyphs and FontLab Studios2, design inventories
              accelerates faster than at any other time in history.
            </p>
            <p className="paragraph-indent">
              A couple of years ago, collaboration on UI or any other design
              project that requires an alliance of designers was daring. One
              designer might focus on the design, and the rest might be there
              proffering leadership and giving guidance. This system changed
              until the appearance of collaborative design software emerged from
              around 2015 to 2016. Figma3 was one of the few that grabbed the
              golden spoon, interlinked designers and developers, and produced
              the first site to assist designers in participating in group
              projects without extra software on a computer.
            </p>
            <p>
              Our design phase is in a stage of steadfast developments and
              changes, including typography, printing, 3D design, AR VR, etc.
              Every media is advancing in godspeed internationally and globally.
            </p>
            {/* <hr className="ellipses-hr" /> */}
            <p className="paragraph-indent">
              However, typesetting design has been standing considerably distant
              from the modern design circles and lost its relevance. From our
              view, typesetting has only been embedded in the realm of print and
              old school design. In the digital world, it stands almost
              invisible.
            </p>
            <p>
              Funny, the first thing that came up in my mind is not about
              typesetting, but rather the Principle of Sufficient Reason from
              Gottfried Wilhelm Leibniz5—Consequently, everything exists for
              reasons. For typesetting, its reasons are for visual display,
              communication, coherence, and establishing provision on a
              systematic design. In the current digital world, we currently have
              control over the choice of typeface, font size, font leading, type
              alignment, etc. However, we do not have any authority over the
              flow of a paragraph.
            </p>
            <p className="paragraph-indent">
              The flow of a paragraph is related to only left-alignment,
              right-alignment, and align-center text; it does not relate to
              justified text, in which the length of each line of the text stays
              the same. A properly manual ragged paragraph would flow in a
              balanced composition—Long, short, long, short. It should flow
              without running a hefty jump for the eye, else interfering
              readability of the text. It is just the fundamental instruction of
              paragraph flow, the more advanced typesetting would even consider
              the meaning of the text, associate the actual context and its
              flow. Some designers would prefer not to put a short word at the
              end of each line. For example, like "A, a, an, of, the, are, is"
              should not appear at the end of each line. (There are a few books
              that are recommended for reading if any reader is interested in
              more information about typography and layout: 1.{" "}
              <div class="hover-title">Detail in Typography</div>
              <div class="hover-image">
                {" "}
                <img
                  src="/images/detailinTypography.jpg"
                  alt="Detail in Typography"
                />
              </div>
              , by Jost Hochuli; 2.{" "}
              <div class="hover-title">The Elements of Typographic Style</div>
              <div class="hover-image">
                {" "}
                <img
                  src="/images/elementsofTypographicStyle.jpg"
                  alt="Elements of Typographic Style"
                />
              </div>
              , by Robert Bringhurst)
            </p>
            <p>
              Back to the point, typesetting in digital media is complicated.
              The interactive display is limitless; its size varies to fit in
              any mobile display. When web designers design a website, the
              website should perform its context functionally in all different
              screen sizes. This vitality brings convenience, but it is
              forbidden for typesetting. In some extreme context, the display
              screen would show one word at each line. like{" "}
              <div class="hover-title">
                reading message from a 40mm Apple Watch (394x324px)
              </div>
              <div class="hover-image">
                {" "}
                <img src={appleWatchMessage} alt="Apple Watch Message" />
              </div>
              ; a medium lengthed paragraph would be divided into multiple
              lines, making it a difficult reading material regardless of its
              actual content. Under such conditions, performing more of a
              balanced paragraph ragging would reduce the difficulty in reading.{" "}
            </p>
            <p className="paragraph-indent">
              The idea was inspired by book designs—specifically, regulated and
              balanced text ragging examples from modern swiss book designs.
              (See good examples of ragged text under Examples tag of the site)
              Understanding text ragging was straight&shy;forward, so our
              process started investigating the technical end—finding the right
              vehicle to establish the result.{" "}
            </p>
            <p>
              It turns out that it was easier than we expected. The component's
              outcome is a javascript utility that accepts child text nodes, a
              sawtooth/rag-width property, and automatically trims the line
              endings. Put this more simply, each line of text was extracted
              first, and only the odd lines were selected. After that, extrusion
              formulated coordinates the font size and its leading, matching the
              exact line spacing with the text, and here it goes our ragging
              component.{" "}
            </p>
            <p className="paragraph-indent">
              What we did was only a small step in the design industry. There
              are many pros and cons to the current ragging component. In the
              future, hopefully, ragging text would be much simpler. Perhaps
              with future AI technology, computers can calculate and map out the
              best ragging solution under different situations, like
              understanding not to put a single letter at the end of each line,
              or solving any other problems that require manual adjustment.{" "}
            </p>
          </MechanicalRagger>
        </div>
        <div className="footnote column-span-3">
          <p>
            [1] Adobe After Effects is a digital visual effects, motion
            graphics, and compositing application developed by Adobe Systems and
            used in the post-production process of film making, video games and
            television production. Among other things, After Effects can be used
            for keying, tracking, compositing, and animation.
          </p>
          <p>
            [2] Both Glyph and FontLab are the current popular digital font
            design software.
          </p>
          <p>
            [3] Figma is a vector graphics editor and prototyping tool which is
            primarily web-based, with additional offline features enabled by
            desktop applications for macOS and Windows. The Figma Mirror
            companion apps for Android and iOS allow viewing Figma prototypes on
            mobile devices.
          </p>
          <p>
            [4] Typesetting is the composition of text by means of arranging
            physical types or the digital equivalents. Stored letters and other
            symbols are retrieved and ordered according to a language's
            orthography for visual display.
          </p>
          <p>
            [5] The principle of sufficient reason states that everything must
            have a reason or a cause. The modern formulation of the principle is
            usually attributed to Gottfried Leibniz, although the idea was
            conceived of and utilized by various philosophers who preceded him,
            including Anaximander, Parmenides, Archimedes, Plato and Aristotle,
            Cicero, Avicenna, Thomas Aquinas, and Spinoza. Some philosophers
            have associated the principle of sufficient reason with “ex nihilo
            nihil fit”. Hamilton identified the laws of inference modus ponens
            with the “law of Sufficient Reason, or of Reason and Consequent” and
            modus tollens with its contrapositive expression.
          </p>
          <p>
            [6] Gottfried Wilhelm Leibniz was a prominent German polymath and
            one of the most important logicians, mathematicians and natural
            philosophers of the Enlightenment.
          </p>
        </div>
      </article>
      <div className="minimal-hr" />
      <div className="backtoTop">
        <a href="#essay">Back to the top</a>
      </div>
      <div className="minimal-hr" />
    </div>
  );
};

const Examples = () => (
  <div>
    <section className="grid wrapper ">
      <h1 className="column-span-2">Examples</h1>
    </section>
    <div className="minimal-hr" />
    <article className="grid wrapper">
      <div className="exmaple column-span-2">
        <p>Freundschaft / Friendship</p>
      </div>
      <div className="exmaple column-span-2">
        <p>Hello Me Studio</p>
        <p>144 pages, 135 × 203 mm</p>
        <p>ISBN 978-3-7356-0640-2</p>
      </div>
      <div className="exmaple column-span-3">
        <img
          className="gallery-image"
          src="/images/friendshipCover.jpg"
          alt="Freundschaft / Friendship by Hello Me"
        />
        <img
          className="gallery-image"
          src="/images/friendship2.jpg"
          alt="Freundschaft / Friendship by Hello Me"
        />
      </div>
    </article>
    <div className="minimal-hr" />
    <article className="grid wrapper">
      <div className="exmaple column-span-2">
        <p>Kaleidoscope (series)</p>
      </div>
      <div className="exmaple column-span-2">
        <p>Kasper Florio</p>
        <p>230 × 300 mm, 348 p</p>
        <p>ISSN 2038-4807</p>
      </div>
      <div className="exmaple column-span-3">
        <img
          className="gallery-image"
          src="/images/kaleidoscope.jpg"
          alt="KALEIDOSCOPE"
        />
        <img
          className="gallery-image"
          src="/images/kaleidoscope2.jpg"
          alt="KALEIDOSCOPE"
        />
      </div>
    </article>
    <div className="minimal-hr" />
    <article className="grid wrapper">
      <div className="exmaple column-span-2">
        <p>Spécimen</p>
      </div>
      <div className="exmaple column-span-2">
        <p>Thomas Bizzarri & Alain Rodriguez</p>
        <p>240 × 310 mm</p>
        <p>ISBN 978-2-9541294-6-4</p>
      </div>
      <div className="exmaple column-span-3">
        <img
          className="gallery-image"
          src="/images/spécimen.jpg"
          alt="SpécimenCover"
        />
        <img
          className="gallery-image"
          src="/images/spécimen2.jpg"
          alt="SpécimenSpread"
        />
      </div>
    </article>
    <div className="minimal-hr" />
    <div className="backtoTop">
      <a href="#examples"> Back to the top</a>
    </div>
    <div className="minimal-hr" />
  </div>
);

function App() {
  const tab = window.location.hash;
  const [cursorSize, setCursorSize] = useState("normal");

  const [headerRef, headerBounds] = useMeasure();

  useEffect(() => {
    if (!window.location.hash) {
      window.history.pushState({ tab: "#essay" }, "", "#essay");
    }
  }, []);

  useLayoutEffect(() => {
    var pswpElement = document.querySelectorAll(".pswp")[0];

    // build items array
    const galleryImages = [...document.querySelectorAll(".gallery-image")];

    const items = galleryImages.map((element) => ({
      src: element.src,
      w: 1600,
      h: 989,
    }));

    const openPhotoSwipe = (index) => {
      // define options (if needed)
      const options = {
        // optionName: 'option value'
        // for example:
        getThumbBoundsFn: function (index) {
          // find thumbnail element
          var thumbnail = document.querySelectorAll(".gallery-image")[index];

          // get window scroll Y
          var pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll

          // get position of element relative to viewport
          var rect = thumbnail.getBoundingClientRect();

          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };

          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        },
        index, // start at first slide
        shareEl: false,
      };

      const gallery = new PhotoSwipe(
        pswpElement,
        PhotoSwipeUI_Default,
        items,
        options
      );

      gallery.init();
    };

    galleryImages.forEach((element, index) => {
      element.addEventListener("click", () => openPhotoSwipe(index));
    });
  }, []);

  useLayoutEffect(() => {
    const elementList = document.querySelectorAll(
      "img, a, button, .hover-title"
    );
    console.log("bind", elementList.length, elementList);
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
      console.log("unbind", elementList.length);

      [...elementList].map((element) => {
        element.removeEventListener("mouseenter", hoverCursor);
        element.removeEventListener("mouseleave", resetCursor);
        return true;
      });
    };
  }, [tab]);

  return (
    <div
      className="App"
      style={{
        "--header-height": `${headerBounds.height}px`,
      }}
    >
      <span class={`cursor state--${cursorSize}`} />
      <header
        className="grid navigation wrapper vertical-padder"
        ref={headerRef}
      >
        <div className="column-span-4 siteTitle">
          <h1>Mechanical Ragging Component</h1>
          <h1>First Edition</h1>
        </div>
        <div className="column-span-3 siteNav">
          <h1>
            <a href="#essay">Overview</a>,{" "}
            <a href="#examples">Editorial Examples</a>
          </h1>
        </div>
      </header>
      <div className="tabs">
        <div id="essay" className="tab-content">
          <Essay></Essay>
        </div>
        <div id="examples" className="tab-content">
          <Examples></Examples>
        </div>
      </div>
      <PhotoSwipeRoot></PhotoSwipeRoot>
    </div>
  );
}

export default App;
