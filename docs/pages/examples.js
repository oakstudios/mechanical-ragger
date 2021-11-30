import React, { useState, useLayoutEffect, useEffect } from "react";
import Image from "../components/Image"
import friendship2 from "../public/images/friendship2.webp";
import friendshipCover from "../public/images/friendshipCover.webp";
import kaleidoscope from "../public/images/kaleidoscope.webp";
import kaleidoscope2 from "../public/images/kaleidoscope2.webp";
import spécimen from "../public/images/spécimen.webp";
import spécimen2 from "../public/images/spécimen2.webp";
import protest from "../public/images/protest.webp";
import protest2 from "../public/images/protest2.webp";
import tryingtobeHere from "../public/images/tryingtobeHere.webp";
import tryingtobeHere2 from "../public/images/tryingtobeHere2.webp";

export const Examples = () => (
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
        <Image
          className="gallery-image"
          src={friendshipCover}
          alt="Freundschaft / Friendship by Hello Me"
        />
        <Image
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
        <Image className="gallery-image" src={kaleidoscope} alt="KALEIDOSCOPE" />
        <Image className="gallery-image" src={kaleidoscope2} alt="KALEIDOSCOPE" />
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
        <Image className="gallery-image" src={spécimen} alt="SpécimenCover" />
        <Image className="gallery-image" src={spécimen2} alt="SpécimenSpread" />
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
        <Image className="gallery-image" src={protest2} alt="protestCover" />
        <Image className="gallery-image" src={protest} alt="protestSpread" />
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
        <Image
          className="gallery-image"
          src={tryingtobeHere}
          alt="trying to be here spread"
        />
        <Image
          className="gallery-image"
          src={tryingtobeHere2}
          alt="trying to be here spread 2"
        />
      </div>
    </article>
  </div>
);
export default Examples
