import React, { useState, useLayoutEffect, useEffect } from "react";
import "./App.scss";
import { MechanicalRaggerReact as MechanicalRagger } from "@oakstudios/mechanical-ragger";
import "./components/InvertCursor.js";
import useMeasure from "react-use-measure";

import PhotoSwipeRoot from "./components/PhotoSwipe";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default.js";
import "photoswipe/dist/photoswipe.css";
import "photoswipe/src/css/default-skin/default-skin.scss";

import appleWatchMessage from "./images/appleWatchMessage.png";
import friendship2 from "./images/friendship2.jpg";
import friendshipCover from "./images/friendshipCover.jpg";
import harmonia from "./images/harmonia.png";
import kaleidoscope from "./images/kaleidoscope.jpg";
import kaleidoscope2 from "./images/kaleidoscope2.jpg";
import oakLogo from "./images/oakLogo.png";
import raggerExample from "./images/raggerExample.png";
import spécimen from "./images/spécimen.jpg";
import spécimen2 from "./images/spécimen2.jpg";
import protest from "./images/protest.jpg";
import protest2 from "./images/protest2.jpg";
import tryingtobeHere from "./images/tryingtobeHere.jpg";
import tryingtobeHere2 from "./images/tryingtobeHere2.jpg";

const Essay = () => {
  const [ragged, setRagging] = useState(true);
  return (
    <div style={{ "--ragging-width": ragged ? "2rem" : "0px" }}>
      <section className="grid wrapper vertical-padder">
        <p className="column-span-4 overview">
          This site serves as a portfolio for Mechanical Ragging Component
          developed by <div className="hover-title">Oak Studios.</div>
          <div className="hover-image">
            {" "}
            <img src={oakLogo} alt="Oak Studios" />
          </div>
          The Ragging component adjusts paragraphs{" "}
          <div className="hover-title">to be balanced</div>
          <div className="hover-image">
            {" "}
            <img src={harmonia} alt="harmonia" />
          </div>
          , following the <div className="hover-title">long-short-long-short</div>
          <div className="hover-image">
            {" "}
            <img src={raggerExample} alt="RaggerExample" />
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
            <h1>The Road of Mechanical Component</h1>
            <h1>
              <time>September 18, 2020</time>
            </h1>
            <br></br>
          </header>
          <MechanicalRagger>
            <p>
              From Stop-motion to animating graphics with After Effects, carving
              letters on wood blocks to create scalable vectorized letters with
              Glyphs and FontLab Studios, design inventories accelerates faster
              than at any other time in history.
            </p>
            <p className="paragraph-indent">
              A couple of years ago, a collaboration on a design project that
              requires a team of designers was challenging. One designer focuses
              on the design, and the rest might be there offering leadership and
              giving guidance. No design tool supported multiple users to
              update, edit, and revise at the same time. This design era finally
              ended when collaborative design software emerged from the market
              around 2015 & 2016. Figma was one of the few that grabbed the
              golden spoon, interlinked designers and developers, produced the
              first site to assist designers participating in group projects
              without installation of extra software on a computer, and multiple
              designers can work on the same project at the same time, same
              speed, under the same setting.
            </p>
            <p>
              Since then, graphic design has been in a stage of steadfast
              development in many media, typography, printing, 3D design, AR VR,
              etc. Every design media advancing internationally and globally.
            </p>
            {/* <hr className="ellipses-hr" /> */}
            <p className="paragraph-indent">
              Nevertheless, typesetting design has been standing considerably
              distant from the modern design circles. By the norms, typesetting
              methodology has only been embedded in the field of print and old
              school design. In the digital world, it is almost invisible. It
              seems to make sense cause there are no convenient typeset editing
              methods in digital media under the current environment. Commonly,
              developers would be asked to apply a typeface on a web page,
              change font-size, and maybe justify the alignment and font-weight.
              If developers want to implement more advanced settings to a
              paragraph, like controlling the paragraph flow, they might hit a
              brick wall because the standard CSS style sheet (Cascading Style
              Sheets) cannot accommodate extensive typeset principles.
            </p>
            <p>
              For typesetting, its roles include visual displays, communication,
              coherence, and establishes provision on a systematic design. In
              the current digital world, the choice of typeface, font size, font
              leading, and type alignment are all within our authority. However,
              we do not have easy control over the flow of a paragraph.
            </p>
            <p className="paragraph-indent">
              The flow of a paragraph is related to only left-alignment,
              right-alignment, and align-center text; it does not relate to
              justified text, in which each line of the text stays the same
              length. A properly manual ragged paragraph would flow in a
              balanced composition—Long, short, long, short. It flows without
              running a hefty jump for the eyes, else interfering readability of
              the text. The more advanced typesetting would even consider the
              meaning of the text, associate it with the actual context. Even
              more, some designers would prefer not to put a short word at the
              end of each line for reading purposes. For example, “A, a, an, of,
              the, are, is...” should not appear at the end of each line.
            </p>
            <p>
              Back to our case, typesetting in digital media can be quite
              complicated. The interactive display is limitless, different than
              a static frame on a piece of paper; its size varies to fit in any
              mobile display. When web designers design a website, the website
              should perform its context functionally in all different screen
              sizes. This unlimited interactive screen view brings convenience,
              but it could be forbidden for typesetting. In some extreme
              context, the display screen would show one word at each line. Like{" "}
              <div className="hover-title"></div>
              <div className="hover-image">
                {" "}
                <img src={appleWatchMessage} alt="Apple Watch Message" />
              </div>
              reading a message from a 40mm Apple Watch (394x324px), a medium
              lengthed paragraph would be divided into multiple lines, produces
              a difficult reading material regardless of its actual content.
              Under such conditions, performing more of a balanced paragraph rag
              would reduce the difficulty in reading.{" "}
            </p>
            <p className="paragraph-indent">
              The idea of balanced paragraph text rag, or long-short-long-short
              ragging method, was probably originated by handwriting and
              20th-century book designs—specifically, regulated and balanced
              text ragging examples from modern swiss book designs. (See good
              examples of ragged text under Examples tag of the site) Some early
              Swiss books started to establish a well defined systematic design
              layout, and of course, typesettings are within their realm and
              playground. The Swiss design system later encourages more
              designers to take part in thinking of typesetting as a fundamental
              building block.
            </p>
            <p>
              Understanding text ragging was pretty straightforward, so we
              started by investigating the technical end and seeking the right
              vehicle to begin our digital ragging component concept.
            </p>
            <p className="paragraph-indent">
              After few weeks of research and development, it turned out that it
              is easier than we expected. The component’s final outcome is a
              javascript utility that accepts child text nodes, a
              sawtooth/rag-width property, it automatically trims the line
              endings. Put this more simply, each line of text was extracted and
              calculated, and the even lines were selected. After that,
              extrusion formulated coordinates the font size and its leading,
              matching the exact line spacing with the text.
            </p>
            <p>
              We named this web add-on as Mechanical Ragging Component, as you
              could tell, is currently very mechanical and has many
              disadvantages. For example, we do not have control over short
              letters hanging at the end of a line in a paragraph or typesetting
              a paragraph based on its context. But perhaps with AI technology,
              computers can calculate and map out the best ragging solution
              under different scenarios, solving complex problems that would
              previously require manual adjustment.
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
            [5] As the technology grows, people seem to move away from some
            principles that were guiding us in the past. Same situations have
            happened in almost all creative fields, for example, students are
            not taught how to write cursive anymore, tradition are replaced by
            fast and advanced technology. As we gaining new powers, we seem to
            also losing our identity.
          </p>
        </div>
      </article>
      <div className="minimal-hr" />
      <section className="grid wrapper vertical-padder">
        <div className="column-span-2">
          <p>About us</p>
        </div>
      </section>
      <div className="minimal-hr" />
      <section className="grid wrapper vertical-padder">
        <div className="column-span-4">
          <a href="https://oak.is/">Oak Studios LLC</a>
          <p>67 35th St b503, Brooklyn, NY 11232</p>
          <a href="mailto:info@oakmade.com">info@oakmade.com</a>
        </div>
        <div className="column-span-2">
          <p>Daniel Gamage</p>
          <p>Chengcheng Hou</p>
          <p>Mika Busante</p>
        </div>
        <div className="column-span-1">
          <a href="https://github.com/oakstudios/Mechanical-Text-Ragger">
            Github
          </a>
          <br></br>
          <a href="https://www.instagram.com/oakstudios/">Instagram</a>
        </div>
      </section>
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
          src={friendshipCover}
          alt="Freundschaft / Friendship by Hello Me"
        />
        <img
          className="gallery-image"
          src={friendship2}
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
        <img className="gallery-image" src={kaleidoscope} alt="KALEIDOSCOPE" />
        <img className="gallery-image" src={kaleidoscope2} alt="KALEIDOSCOPE" />
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
        <img className="gallery-image" src={spécimen} alt="SpécimenCover" />
        <img className="gallery-image" src={spécimen2} alt="SpécimenSpread" />
      </div>
    </article>
    <div className="minimal-hr" />
    <article className="grid wrapper">
      <div className="exmaple column-span-2">
        <p>Protest. The Aesthetics of Resistance</p>
      </div>
      <div className="exmaple column-span-2">
        <p>Lars Müller Publishers</p>
        <p>16 × 24 × 3 cm</p>
        <p>ISBN 978-3-03778-560-7</p>
      </div>
      <div className="exmaple column-span-3">
        <img className="gallery-image" src={protest2} alt="protestCover" />
        <img className="gallery-image" src={protest} alt="protestSpread" />
      </div>
    </article>
    <div className="minimal-hr" />
    <article className="grid wrapper">
      <div className="exmaple column-span-2">
        <p>Trying to be Here...</p>
      </div>
      <div className="exmaple column-span-2">
        <p>Samuel Bänziger; Jiajia Zhang</p>
        <p>125 × 195 mm</p>
        <p>ISBN 978-3-033-05571-1</p>
      </div>
      <div className="exmaple column-span-3">
        <img
          className="gallery-image"
          src={tryingtobeHere}
          alt="trying to be here spread"
        />
        <img
          className="gallery-image"
          src={tryingtobeHere2}
          alt="trying to be here spread 2"
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
    // console.log("bind", elementList.length, elementList);
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
      // console.log("unbind", elementList.length);

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
      <span className={`cursor state--${cursorSize}`} />
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
