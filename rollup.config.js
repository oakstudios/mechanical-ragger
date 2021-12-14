// rollup.config.js
// import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import merge from "lodash/merge";

const defaultOptions = {
  plugins: [resolve(), peerDepsExternal(), typescript()],
  output: {
    dir: "./dist",
    format: "esm",
    plugins: [terser()],
  },
};

const configs = [
  {
    // @oakstudios/mechanical-ragger/core
    input: "src/core.ts",
  },
  {
    // @oakstudios/mechanical-ragger/react
    input: "src/react-component.tsx",
  },
  {
    // @oakstudios/mechanical-ragger/web-component
    input: "src/web-component.ts",
  },
  {
    // @oakstudios/mechanical-ragger/web-component-auto-register
    input: "src/web-component-auto-register.ts",
    output: {
      format: "iife",
      name: "MechanicalRagger",
    },
  },
].map((config) => {
  return merge(config, defaultOptions);
});

export default configs;
