import React, { useState } from "react";
import "./App.scss";
import TextRagger from "./components/TextRagger";

function App() {
  const [ragged, setRagging] = useState(true);
  return (
    <div className="App">
      <header className="grid">
        <div className="column-span-4">
          <h1>Mechanical Ragging Component</h1>
          <h1>First Edition</h1>
        </div>
        <div className="column-span-3">
          <h1>
            Developed by <a href="https://oak.is/">Oak Studios LLC</a>
          </h1>
        </div>
      </header>
      <section className="grid">
        <h1 className="column-span-2">Overview</h1>
        <p className="column-span-5">
          This site serves as a portfolio for the Mechanical Ragging Component
          developed by Oak Studios. The Ragging component adjusts paragraphs to
          be balanced, following the long-short-long-short sequence. This
          ragging style has a strong influence on printing media, and we decided
          to cut off the boundary and deliver it to the digital design world.
        </p>
      </section>
      <div className="minimal-hr" />
      <section className="grid">
        <h1 className="column-span-2">Reference</h1>
        <div className="column-span-2">
          <div class="slideshow-container">
            <div class="mySlides"></div>
            <img
              src="/Images/FOL_Chengcheng Hou.jpg"
              alt="FOL by Chengcheng Hou"
            ></img>
            <div class="text"></div>
          </div>
          <p>
            This site serves as a portfolio for the Mechanical Ragging
            Componentyarn developed by Oak Studios. The Ragging component
            adjusts paragraphs to be balanced, following the
            long-short-long-short sequence. This ragging style has a strong
            influence on printing media, and we decided to cut off the boundary
            and deliver it to the digital design world.
          </p>
        </div>
      </section>
      <div className="minimal-hr" />
      <section className="grid button-section">
        <div className="column-span-1">
          <h1>Toggle</h1>
          <h1>
            (Flip the circle to see the difference between ragged paragraph and
            default paragraph on the essay below.)
          </h1>
        </div>
        <div className="column-span-1"></div>
        <div className="column-span-3">
          <div className={"button-container " + (ragged && " ragged")}>
            <button
              className="circle-button rag-on"
              onClick={() => setRagging(true)}
            >
              Rag
            </button>
            <button
              className="circle-button rag-off"
              onClick={() => setRagging(false)}
            >
              Unrag
            </button>
          </div>
        </div>
      </section>
      <div className="minimal-hr" />
      <article className="grid">
        <div className="articleBody column-span-4">
          <header>
            <h1>Exposition of Text Ragged & Expansion in the Digital World</h1>
            <h1>
              <time>September, 2020</time>
            </h1>
          </header>
          <TextRagger width={ragged ? "2rem" : "0px"}>
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
            <hr className="ellipses-hr" />
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
              flow. B Some designers would prefer not to put a short word at the
              end of each line. For example, like "A, a, an, of, the, are, is"
              should not appear at the end of each line. (There are a few books
              that I suggest reading if any reader is interested: 1. Detail in
              Typography, by Jost Hochuli; 2. The Elements of Typographic Style,
              by Robert Bringhurst)
            </p>
            <p>
              Back to the point, typesetting in digital media is complicated.
              The interactive display is limitless; its size varies to fit in
              any mobile display. When web designers design a website, the
              website should perform its context functionally in all different
              screen sizes. This vitality brings convenience, but it is
              forbidden for typesetting. In some extreme context, the display
              screen would show one word at each line. Imagine reading a long
              article from a 40mm Apple Watch (394x324px); a medium lengthed
              paragraph would be divided into multiple lines, making it a
              difficult reading material regardless of its actual content.{" "}
            </p>
            <p className="paragraph-indent">
              The idea was inspired by book designs—specifically, regulated and
              balanced text ragging examples from modern swiss book designs.
              Examples of good typesetting from Excavating in Future City
              designed by Studio Lin, all editorial works from Kasper Florio and
              Sarah Discours. Understanding text ragging was
              straight&shy;forward, so our process started investigating the
              technical end—finding the right vehicle to establish the result.{" "}
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
          </TextRagger>
        </div>
      </article>
    </div>
  );
}

export default App;
