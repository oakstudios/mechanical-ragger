// rollup.config.js
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "mechanical-ragger",
    },
    plugins: [terser()],
  },
  {
    input: "src/web-component-auto-register.js",
    output: {
      file: "dist/web-component-auto-register.js",
      format: "iife",
      name: "MechanicalRagger",
    },
    plugins: [terser()],
  },
];
