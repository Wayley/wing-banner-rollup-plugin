import { rollup } from "rollup";
import { resolve, join } from "path";
import plugin from "../dist/wing-banner-rollup-plugin.esm";

const input = resolve(__dirname, "./samples/main.js");

// wingBannerRollupPlugin()
it("works with null options", async () => {
  const bundle = await rollup({ input, plugins: [plugin()] });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe('"const test = \\"TEST\\";\\n\\nexport { test };\\n"');
});

// wingBannerRollupPlugin(content)
it("works with options as content", async () => {
  const bundle = await rollup({
    input,
    plugins: [plugin("// This is content")],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe(
    '"// This is content\\nconst test = \\"TEST\\";\\n\\nexport { test };\\n"'
  );
});

// wingBannerRollupPlugin({})
it("works with options as empty object", async () => {
  const bundle = await rollup({
    input,
    plugins: [plugin({})],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe('"const test = \\"TEST\\";\\n\\nexport { test };\\n"');
});

// wingBannerRollupPlugin({ content: "// This is content" })
it("works with options( content only )", async () => {
  const bundle = await rollup({
    input,
    plugins: [plugin({ content: "// This is content" })],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe(
    '"// This is content\\nconst test = \\"TEST\\";\\n\\nexport { test };\\n"'
  );
});

// wingBannerRollupPlugin({ path: join(__dirname, "./samples/content.txt") })
it("works with options( path only )", async () => {
  const bundle = await rollup({
    input,
    plugins: [plugin({ path: join(__dirname, "./samples/content.txt") })],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe(
    '"// This is content from path\\nconst test = \\"TEST\\";\\n\\nexport { test };\\n"'
  );
});

// wingBannerRollupPlugin({ content: "// This is content", path: join(__dirname, "./samples/content.txt") })
it("works with options( both content and path )", async () => {
  const bundle = await rollup({
    input,
    plugins: [
      plugin({
        content: "// This is content",
        path: join(__dirname, "./samples/content.txt"),
      }),
    ],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe(
    '"// This is content\\nconst test = \\"TEST\\";\\n\\nexport { test };\\n"'
  );
});

// wingBannerRollupPlugin({ others: "xxxxx" })
it("works with options( neither content nor path, but others )", async () => {
  const bundle = await rollup({
    input,
    plugins: [
      plugin({
        others: "xxxxx",
      }),
    ],
  });
  const {
    output: [{ code }],
  } = await bundle.generate({ format: "esm" });
  let content = JSON.stringify(code);
  expect(content).toBe('"const test = \\"TEST\\";\\n\\nexport { test };\\n"');
});
