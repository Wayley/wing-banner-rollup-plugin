import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/wing-banner-rollup-plugin.js",
      name: "wing-banner-rollup-plugin",
      format: "umd",
    },
    {
      file: "dist/wing-banner-rollup-plugin.esm.js",
      format: "esm",
    },
    {
      file: "dist/wing-banner-rollup-plugin.amd.js",
      format: "amd",
    },
    {
      file: "dist/wing-banner-rollup-plugin.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    terser(),
  ],
};
