const { __DEV__ } = require('./util');

module.exports = {
  __DEV__,
  addAlias: require('./addAlias'),
  addLessConfig: require('./addLessConfig'),
  addCustomize:require('./addCustomize'),
  addWebpackPlugins: require('./addWebpackPlugins'),
  addSplitChunks: require('./addSplitChunks'),
  addFixImport: require('./addFixImports'),
  addBabelPlugins: require('./addBabelPlugins'),
  addProxy: require('./addProxy'),
};
