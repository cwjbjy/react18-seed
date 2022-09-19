const { override } = require("customize-cra");

const {
  addAlias,
  addLessConfig,
  addCustomize,
  addWebpackPlugins,
} = require("./configs");

module.exports = {
  webpack: override(
    addCustomize(),
    ...addAlias(),
    ...addLessConfig(),
    ...addWebpackPlugins()
  ),
};
