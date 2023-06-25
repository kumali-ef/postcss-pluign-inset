/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  // Work with options here
  return {
    postcssPlugin: 'postcss-plugin-inset',
    Declaration: {
      inset: (decl, { list }) => {
        const values = list.space(decl.value);
        decl.cloneBefore({
          prop: 'top',
          value: values[0],
        });

        decl.cloneBefore({
          prop: 'right',
          value: values[1] ?? values[0],
        });

        decl.cloneBefore({
          prop: 'bottom',
          value: values[2] ?? values[0],
        });

        decl.cloneBefore({
          prop: 'left',
          value: values[3] ?? values[1] ?? values[0],
        });

        decl.remove();
      },
    },
  };
};

module.exports.postcss = true;
