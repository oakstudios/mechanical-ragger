import React, { useState } from "react";
import Link from "next/link";
import HoverImage from "../components/HoverImage.js";
import appleWatchMessage from "../public/images/appleWatchMessage.webp";
import harmonia from "../public/images/harmonia.webp";
import oakLogo from "../public/images/oakLogo.webp";
import raggerExample from "../public/images/raggerExample.webp";
import MechanicalRagger from "@oakstudios/mechanical-ragger/react";
console.log({ MechanicalRagger });

export default function Home() {
  return (
    <div>
      <section className="grid wrapper vertical-padder">
        <div className="column-span-4 overview">
          <p className="overview-lede">
            <MechanicalRagger>
              This site serves as a demonstration of Mechanical Ragger, a
              component developed by{" "}
              <HoverImage src={oakLogo} alt="Oak Studios">
                Oak Studios
              </HoverImage>
              . Mechanical Ragger adjusts paragraphs{" "}
              <HoverImage src={harmonia} alt="harmonia">
                to be balanced
              </HoverImage>
              , following the{" "}
              <HoverImage src={raggerExample} alt="RaggerExample">
                long-short-long-short
              </HoverImage>{" "}
              sequence. Paragraph ragging has a strong influence on print media,
              so we have cut off the boundary and delivered it to the digital
              design world.
            </MechanicalRagger>
          </p>
          <p>
            <a href="https://oak.is/thinking/mechanical-ragger/">
              Read the announcement on oak.is.
            </a>
          </p>
        </div>
      </section>
      <div className="minimal-hr" />
      <section className="grid wrapper vertical-padder">
        <h1 className="column-span-2">Reference</h1>
      </section>
      <div className="minimal-hr" />
      <article className="grid wrapper">
        <div className="articleBody column-span-4">
          <header>
            <h1>The Road to a Mechanical Ragging Component</h1>
            <br></br>
          </header>
          <MechanicalRagger>
            <p>
              From stop motion to animating graphics with After Effects, carving
              letters on wood blocks to create scalable vector&shy;ized letters
              with Glyphs, RoboFont, or&nbsp;FontLab, design tooling is
              accel&shy;erating faster than at any other time in history.
            </p>
            <p>
              A few years ago, team collab&shy;oration on design projects was
              challen&shy;ging. One&nbsp;designer focused on the design, while
              others might be giving feed&shy;back on snapshots of their work,
              but no design tool allowed multiple users to update a design at
              the same time. Figma emerged as one of the most popular design
              appli&shy;cations thanks to its focus on collab&shy;oration and
              porta&shy;bility. It&nbsp;gave entire teams the ability to work on
              a project at the same time, without needing to sync assets or even
              install&nbsp;it.
            </p>
            <p>
              Since then, graphic design has been in a stage of steadfast
              development in many media; typography, printing, 3D design, AR/VR,
              etc. Every design media is advancing inter&shy;natio&shy;nally and
              globally.
            </p>
            {/* <hr className="ellipses-hr" /> */}
            <p>
              Nevertheless, type&shy;setting has been standing considerably
              distant from the modern digital design circles. Typically,
              type&shy;setting metho&shy;dology has only been leveraged in the
              field of print and traditional design. In&nbsp;the digital world,
              it is almost invisible. It&nbsp;makes sense; there are no
              con&shy;venient typeset editing methods in web environ&shy;ments.
              Typically, developers would be asked to apply a typeface on a
              website, adjust the font-size, and maybe justify the alignment and
              font-weight. If&nbsp;developers want to implement more advanced
              settings to a paragraph, like controlling the paragraph flow, they
              might hit a brick wall because standard{" "}
              <abbr
                title="Cascading Style
              Sheets"
              >
                CSS
              </abbr>{" "}
              cannot accommodate these&nbsp;features.
            </p>
            <p>
              For type&shy;setting, its roles include visual displays,
              communication, coherence, and establishing a framework for the
              design. In&nbsp;the current digital world, the choice of typeface,
              font size, font leading, and type alignment are all within our
              purview. However, we do not have ready control over the flow of
              a&nbsp;paragraph.
            </p>
            <p>
              The flow of a paragraph is limited to only left-aligned,
              right-aligned, and center-aligned text; it does not relate to
              justified text, in which each line of the text stays the same
              length. A&nbsp;properly manual ragged paragraph would flow in a
              balanced composition of alter&shy;nating line lengths; one long,
              one short. It&nbsp;flows without forcing the eyes to jump, which
              would hamper the reada&shy;bility of the text. More advanced
              type&shy;setting would even consider the meaning of the text and
              associate it with the actual appearance. Even further, some
              designers would prefer not to put a short word at the end of each
              line for better readability. Short words like “a, an, of, the,
              are, is...” should not appear at the end of each line by
              this&nbsp;logic.
            </p>
            <p>
              Back to our case, typesetting on the web can be quite complicated.
              The interactive display is limitless, different than a static
              frame on a piece of paper; its size varies to fit in any display.
              When web designers design a website, the website should reflow
              functionally across all different screen sizes. This interactive
              medium brings convenience, but it could be forbidden for
              typesetting. In some extreme contexts, the display screen might
              show only one word on each line. Reading a message from a{" "}
              <HoverImage src={appleWatchMessage} alt="Apple Watch Message">
                40mm Apple Watch
              </HoverImage>
              &nbsp;(394x324px), a medium-length paragraph would be divided into
              multiple lines, produces a difficult reading experience regardless
              of its actual content. Under such conditions, using a more
              balanced paragraph rag would reduce the difficulty
              in&nbsp;reading.{" "}
            </p>
            <p>
              The idea of balanced text rag, or long-short-long-short ragging
              method, likely originated in handwriting and 20th-century book
              designs, along with regulated and balanced text ragging examples
              from modern swiss book designs. (See examples of ragged text at
              the <Link href="/examples">Examples</Link> page) Some early Swiss
              books establish a clear systematic design layout, and of course,
              typesetting is within their realm. Swiss design systems later
              encourage more designers to take part in thinking of typesetting
              as a fundamental building block of&nbsp;design.
            </p>
            <p>
              Text ragging is well-defined, so we started by investigating the
              technical end and seeking the right vehicle to begin our digital
              ragging componentv&nbsp;concept.
            </p>
            <p>
              After few weeks of research and development, we decided on a
              JavaScript component that automatically trims the line endings.
              Put this more simply, each line of text was extracted and
              calculated, and the even lines were selected. After that,
              extrusion formulated coordinates the font size and its leading,
              matching the exact line spacing with the&nbsp;text.
            </p>
            <p>
              We named this web add-on as Mechanical Ragger. As the name
              implies, it is a very mechanical enhancement. It does not do some
              of the optimizations mentioned above like removing short letters
              at the end of a line or typesetting a paragraph based on its
              content. In the future, though, we may find ways to handle these
              tasks&nbsp;automatically.
            </p>
          </MechanicalRagger>
        </div>
        <div className="footnote column-span-3">
          <MechanicalRagger>
            <p>
              [1] Adobe After Effects is a digital visual effects, motion
              graphics, and compositing application developed by Adobe and used
              in the post-production process of film making, video games and
              television production. Among other things, After Effects can be
              used for keying, tracking, compositing, and animation.
            </p>
            <p>
              [2] Glyphs, FontLab, and RoboFont are all popular digital font
              design applications.
            </p>
            <p>
              [3] Figma is a vector graphics editor and prototyping tool which
              is primarily web-based, with additional offline features enabled
              by desktop applications for macOS and Windows. The Figma Mirror
              companion apps for Android and iOS allow viewing Figma prototypes
              on mobile devices.
            </p>
            <p>
              [4] Typesetting is the composition of text by means of arranging
              physical types or the digital equivalents. Stored letters and
              other symbols are retrieved and ordered according to a
              language&apos;s orthography for visual display.
            </p>
            <p>
              [5] As the technology grows, people seem to move away from some
              principles that were guiding us in the past. The same progression
              has happened in almost all creative fields. For example, students
              are not taught how to write cursive anymore, tradition are
              replaced by technology. As we gain new abilities, we seem to also
              lose our identity.
            </p>
          </MechanicalRagger>
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
          <a href="https://oak.is/">Oak Studios, LLC</a>
          <p>Brooklyn, New York</p>
          <a href="mailto:info@oakmade.com">info@oak.is</a>
        </div>
        <div className="column-span-2">
          <p>Daniel Gamage</p>
          <p>Chengcheng Hou</p>
          <p>Mika Busante</p>
        </div>
        <div className="column-span-1">
          <a href="https://github.com/oakstudios/mechanical-ragger">GitHub</a>
          <br></br>
          <a href="https://oak.is/thinking/mechanical-ragger/">Announcement</a>
        </div>
      </section>
    </div>
  );
}
