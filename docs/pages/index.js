import React, { useState, useLayoutEffect, useEffect } from "react";
import HoverImage from "../components/HoverImage.js";
import appleWatchMessage from "../public/images/appleWatchMessage.webp";
import harmonia from "../public/images/harmonia.webp";
import oakLogo from "../public/images/oakLogo.webp";
import raggerExample from "../public/images/raggerExample.webp";

export default function Home() {
  const [ragged, setRagging] = useState(true);
  return (
    <div style={{ "--ragging-width": ragged ? "2rem" : "0px" }}>
      <section className="grid wrapper vertical-padder">
        <p className="column-span-4 overview">
          This site serves as a portfolio for Mechanical Ragging Component
          developed by <HoverImage src={oakLogo} alt="Oak Studios">Oak Studios</HoverImage>.
          The Ragging component adjusts paragraphs{" "}
          <HoverImage src={harmonia} alt="harmonia">to be balanced</HoverImage>,
          following the <HoverImage src={raggerExample} alt="RaggerExample">long-short-long-short</HoverImage>{" "}
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
          {/* <MechanicalRagger> */}
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
            context, the display screen would show one word at each line.
            Like reading a message from a
            <HoverImage src={appleWatchMessage} alt="Apple Watch Message">40mm Apple Watch</HoverImage>{" "}
            (394x324px), a medium lengthed paragraph would be divided into
            multiple lines, produces a difficult reading material regardless of
            its actual content. Under such conditions, performing more of a
            balanced paragraph rag would reduce the difficulty in reading.{" "}
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
          {/* </MechanicalRagger> */}
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
            symbols are retrieved and ordered according to a language&apos;s
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
    </div>
  );
};
