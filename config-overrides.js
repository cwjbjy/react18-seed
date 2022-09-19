const { override } = require("customize-cra");

const {
  addAlias,
  addLessConfig,
  addCustomize,
  addWebpackPlugins,
  addSplitChunks,
  addFixImport,
} = require("./configs");

module.exports = {
  webpack: override(
    addCustomize(),
    ...addAlias(),
    ...addLessConfig(),
    ...addWebpackPlugins(),
    ...addSplitChunks(),
    ...addFixImport()
  ),
};
