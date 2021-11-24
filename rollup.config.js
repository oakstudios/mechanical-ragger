// rollup.config.js
import { terser } from "rollup-plugin-terser";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";

export default [
  {
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
  {
    input: "src/web-component-auto-register.js",
    plugins: [terser()],
    external: ["react"],
    output: {
      file: "dist/web-component-auto-register.js",
      format: "iife",
      name: "MechanicalRagger",
    },
  },
];
