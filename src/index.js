import { readFileSync } from "fs";
function isPlainString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function isDef(v) {
  return v !== undefined && v !== null;
}
export default function wingBannerRollupPlugin(options) {
  return {
    name: "wing-banner-rollup-plugin",
    renderChunk(source) {
      try {
        if (!options) return source; // wingBannerRollupPlugin()
        if (isPlainString(options)) {
          return [options, source].join("\n"); // wingBannerRollupPlugin("// bannner")
        } else if (isPlainObject(options)) {
          const { content, path } = options;
          if (isDef(content)) return [content, source].join("\n"); // wingBannerRollupPlugin({ content: "// banner" })
          if (isDef(path)) {
            const fileContent = readFileSync(path);
            return [fileContent, source].join("\n"); // wingBannerRollupPlugin({ path: join(__dirname, "content.txt") })
          }
          return source;
        } else {
          return source;
        }
      } catch (error) {
        return source;
      }
    },
  };
}
