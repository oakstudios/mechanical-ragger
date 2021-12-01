// rollup.config.js
// import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  { // @oakstudios/mechanical-ragger/core
    input: "src/core.js",
    plugins: [
      resolve(),
      babel({
        extensions: [".jsx", ".js", ".tsx"],
        babelHelpers: "bundled"
      }),
      terser(),
    ],
    output: {
      file: "./dist/core.js",
      format: "esm",
      name: "mechanical-ragger",
    },
  },
  { // @oakstudios/mechanical-ragger/react
    input: "src/react.jsx",
    plugins: [
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: "bundled"
      }),
      peerDepsExternal(),
      resolve(),
    ],
    external: ["react"],
    output: {
      file: "./dist/react.jsx",
      format: "esm",
    },
  },
  { // @oakstudios/mechanical-ragger/web-component
    input: "src/web-component.js",
    plugins: [
      resolve(),
      babel({
        extensions: [".jsx", ".js", ".tsx"],
        babelHelpers: "bundled"
      }),
      terser(),
    ],
    output: {
      file: "./dist/web-component.js",
      format: "esm",
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
    },
  },
  { // @oakstudios/mechanical-ragger/web-component-auto-register
    input: "src/web-component-auto-register.js",
    plugins: [
      resolve(),
      terser()
    ],
    output: {
      file: "./dist/web-component-auto-register.js",
      format: "iife",
      name: "MechanicalRagger",
    },
  },
];
