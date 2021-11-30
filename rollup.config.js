// rollup.config.js
import { terser } from "rollup-plugin-terser";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  { // @oakstudios/mechanical-ragger
    input: "src/index.js",
    plugins: [
      babel({
        presets: ["@babel/preset-react"],
        extensions: [".jsx", ".js", ".tsx"],
      }),
      terser(),
    ],
    external: ["react"],
    output: {
      file: "dist/index.js",
      format: "esm",
      name: "mechanical-ragger",
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
    },
  },
  { // @oakstudios/mechanical-ragger/core
    input: "src/core.js",
    plugins: [
      babel({
        extensions: [".jsx", ".js", ".tsx"],
      }),
      terser(),
    ],
    output: {
      file: "./dist/core.js",
      format: "esm",
      name: "mechanical-ragger",
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
    },
  },
  { // @oakstudios/mechanical-ragger/react
    input: "src/react.jsx",
    plugins: [
      babel({
        presets: ["@babel/preset-react"],
        extensions: [".jsx", ".js", ".tsx"],
      }),
      terser(),
    ],
    external: ["react"],
    output: {
      file: "./dist/react.js",
      format: "esm",
      name: "mechanical-ragger",
    },
  },
  { // @oakstudios/mechanical-ragger/web-component
    input: "src/web-component.js",
    plugins: [
      babel({
        extensions: [".jsx", ".js", ".tsx"],
      }),
      terser(),
    ],
    output: {
      file: "./dist/web-component.js",
      format: "esm",
      name: "mechanical-ragger",
      plugins: [getBabelOutputPlugin({ presets: ["@babel/preset-env"] })],
    },
  },
  { // @oakstudios/mechanical-ragger/web-component-auto-register
    input: "src/web-component-auto-register.js",
    plugins: [terser()],
    output: {
      file: "./dist/web-component-auto-register.js",
      format: "iife",
      name: "MechanicalRagger",
    },
  },
];
