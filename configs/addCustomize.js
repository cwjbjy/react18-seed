const { __DEV__ } = require('./util');

const addCustomize = () => (config) => {
  if (__DEV__) {
    config.devtool = 'eval-cheap-module-source-map';
    config.resolve.extensions = ['.tsx', '.js', '.ts', '.jsx', '.json'];
  }
  if (process.env.NODE_ENV === "production") config.devtool = false;
  return config;
};

module.exports = addCustomize;
