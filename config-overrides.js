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
  addExternals,
} = require("./configs");

module.exports = {
  webpack: override(
    addCustomize(),
    ...addAlias(),
    ...addLessConfig(),
    ...addWebpackPlugins(),
    ...addSplitChunks(),
    ...addFixImport(),
    ...addBabelPlugins(),
    ...addExternals()
  ),
  devServer: overrideDevServer(addProxy()),
};
