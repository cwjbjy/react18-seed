const { override,overrideDevServer } = require("customize-cra");

const {
  addAlias,
  addLessConfig,
  addCustomize,
  addWebpackPlugins,
  addSplitChunks,
  addFixImport,
  addBabelPlugins,
  addProxy,
} = require("./configs");

module.exports = {
  webpack: override(
    addCustomize(),
    ...addAlias(),
    ...addLessConfig(),
    ...addWebpackPlugins(),
    ...addSplitChunks(),
    ...addFixImport(),
    ...addBabelPlugins()
  ),
  devServer: overrideDevServer(addProxy()),
};
