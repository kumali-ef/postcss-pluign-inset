# postcss-plugin-inset
This plugin is used to convert `inset` to `left,top,right,bottom` to compatible with safari(ver<=14.1) or any other browsers which does not support `inset` property.

## Usage
add it to postcss.config.js
```js
/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    ...,
    'postcss-plugin-inset': {},
  },
};
```