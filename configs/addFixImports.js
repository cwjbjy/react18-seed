const { fixBabelImports } = require('customize-cra');
const addFixImports = () => {
  return [
    fixBabelImports('lodash', {
      libraryName: 'lodash',
      libraryDirectory: '',
      camel2DashComponentName: false,
    }),
  ];
};

module.exports = addFixImports;
