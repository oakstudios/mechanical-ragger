import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { Page } from "./Page";
import "../web-component-auto-register";
import global from 'global';
import { useEffect } from '@storybook/client-api';
import { withRunScript } from 'storybook-addon-run-script/html';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Web Component",
};

const sampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus. Enim neque volutpat ac tincidunt vitae semper quis lectus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Massa placerat duis ultricies lacus sed turpis tincidunt. Arcu cursus vitae congue mauris rhoncus. In massa tempor nec feugiat nisl pretium. Amet luctus venenatis lectus magna fringilla urna porttitor. Non blandit massa enim nec dui.`

export const Minimal = () =>
  `<mechanical-ragger>
    <p>${sampleText} ${sampleText}</p>
  </mechanical-ragger>`;


export const RaggingWidth = (args) =>
  `<mechanical-ragger style="--ragging-width: 6em">
    <p>${sampleText} ${sampleText}</p>
  </mechanical-ragger>`;

export const BottomRag = (args) =>
  `<div style="writing-mode: vertical-rl; text-align: left">
    <mechanical-ragger style="--ragging-width: 4em">
      <p>${sampleText} ${sampleText}</p>
    </mechanical-ragger>
  </div>`;
export const LeftRag = (args) =>
  `<div style="writing-mode: horizontal-tb; text-align: right">
    <mechanical-ragger style="--ragging-width: 4em">
      <p>${sampleText} ${sampleText}</p>
    </mechanical-ragger>
  </div>`;
export const TopRag = (args) =>
  `<div style="writing-mode: vertical-rl; text-align: right">
    <mechanical-ragger style="--ragging-width: 4em">
      <p>${sampleText} ${sampleText}</p>
    </mechanical-ragger>
  </div>`;

  export const SlottedElementStyles = (args) =>
  `<mechanical-ragger>
    <p>${sampleText} <a class="underlined" href="#">Link out</a>. ${sampleText}</p>
  </mechanical-ragger>
  <style>.underlined { border-bottom: 2px solid red }</style>
  `;

  export const DynamicUpdates = (args) =>
  `<mechanical-ragger>
    <p>${sampleText} ${sampleText}</p>
  </mechanical-ragger>
  <button id="dynamic-updates-button">Update</button>
  `;
  DynamicUpdates.decorators = [
    withRunScript(`
      const button = document.querySelector('#dynamic-updates-button');
      console.log(button)

      button.addEventListener('click', () => {
        const p = document.querySelector('mechanical-ragger p');
        console.log(p)
        p.innerHTML = '<strong>NEW</strong> ${sampleText} <strong>NEW</strong> ${sampleText} <strong>NEW</strong>';
      });
    `)
  ]
