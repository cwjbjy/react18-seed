const { addBabelPlugin } = require("customize-cra");
const { __DEV__ } = require("./util");

const addBabelPlugins = () => {
  const configs = [
    // addBabelPlugin(['react-activation/babel']),
  ];
  if (!__DEV__) {
    configs.push(
      addBabelPlugin([
        "babel-plugin-transform-remove-console",
        { exclude: ["error", "warn"] },
      ])
    );
  }

  return configs;
};

module.exports = addBabelPlugins;
