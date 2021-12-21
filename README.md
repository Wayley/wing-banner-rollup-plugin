# wing-banner-rollup-plugin

wing banner rollup plugin

## Install

- yarn

```shell
$ yarn add --dev wing-banner-rollup-plugin
```

- npm

```shell
$ npm install --save-dev wing-banner-rollup-plugin
```

## Usage

```js
// rollup.config.js

import wingBannerRollupPlugin from "wing-banner-rollup-plugin";

export default {
  // ... other configs
  plugins: [
    // ...other plugins
    wingBannerRollupPlugin(options), // you can get api options below
  ],
};
```

## API

```js
wingBannerRollupPlugin(OPTIONS<undefined||null||string||object>);

// wingBannerRollupPlugin(),
// wingBannerRollupPlugin(null),
// wingBannerRollupPlugin(content),
// wingBannerRollupPlugin({}),
// wingBannerRollupPlugin({ content }),
// wingBannerRollupPlugin({ path: path.join(__dirname, "content.txt") }),
// wingBannerRollupPlugin({ content, path: path.join(__dirname, "content.txt") }),
// wingBannerRollupPlugin({ others: "xxxxx" }),
// wingBannerRollupPlugin({ content, others: "xxxxx" })
```

## Examples

see [examples](./examples/rollup.config.js)
