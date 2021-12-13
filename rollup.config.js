// rollup.config.js
// import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

export default [
  {
    // @oakstudios/mechanical-ragger/core
    input: "src/core.ts",
    plugins: [typescript()],
    output: {
      dir: "./dist",
      format: "esm",
      name: "mechanical-ragger",
    },
  },
  {
    // @oakstudios/mechanical-ragger/react
    input: "src/react-component.tsx",
    plugins: [resolve(), peerDepsExternal(), typescript()],
    output: {
      dir: "./dist",
      format: "esm",
    },
  },
  {
    // @oakstudios/mechanical-ragger/web-component
    input: "src/web-component.ts",
    plugins: [typescript()],
    output: {
      dir: "./dist",
      format: "esm",
    },
  },
  {
    // @oakstudios/mechanical-ragger/web-component-auto-register
    input: "src/web-component-auto-register.ts",
    plugins: [typescript()],
    output: {
      dir: "./dist",
      format: "iife",
      name: "MechanicalRagger",
    },
  },
];
