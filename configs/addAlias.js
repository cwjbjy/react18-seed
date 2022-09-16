const path = require('path');
const { addWebpackAlias } = require('customize-cra');

const addAlias = () => {
  return [
    addWebpackAlias({
      '@': path.resolve(__dirname, '../src'),
    }),
  ];
};

module.exports = addAlias;
