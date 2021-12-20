import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
import wingBannerRollupPlugin from "../src/index";
import { name, version } from "./package.json";
import { join } from "path";

const content = ["/**", ` * ${name} v${version}`, " * ", " */"].join("\n");

export default {
  input: "index.js",
  output: [
    {
      file: "dist/bundle.js",
      name: "bundle",
      format: "umd",
    },
    {
      file: "dist/bundle.es.js",
      format: "es",
    },
    {
      file: "dist/bundle.amd.js",
      format: "amd",
    },
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
    },
  ],
  plugins: [
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    terser(),
    // wingBannerRollupPlugin(),
    // wingBannerRollupPlugin(content),
    // wingBannerRollupPlugin({}),
    // wingBannerRollupPlugin({ content }),
    // wingBannerRollupPlugin({ path: join(__dirname, "content.txt") }),
    wingBannerRollupPlugin({ content, path: join(__dirname, "content.txt") }),
    // wingBannerRollupPlugin({ others: "xxxxx" }),
    // wingBannerRollupPlugin({ content, others: "xxxxx" }),
  ],
};
