const { setWebpackOptimizationSplitChunks } = require('customize-cra');
const { __DEV__ } = require('./util');

const addSplitChunks = () => {
  if (!__DEV__) {
    return [
      setWebpackOptimizationSplitChunks({
        chunks: 'all',
        name: false,
        cacheGroups: {
          'd3.vendor': {
            chunks: 'async',
            test: /[\\/]node_modules[\\/](d3|d3-.+)[\\/]/,
            name: 'd3.vendor',
            priority: 40,
          },
          'html2canvas.vendor': {
            chunks: 'async',
            test: /[\\/]node_modules[\\/](html2canvas)[\\/]/,
            name: 'h2c.vendor',
            priority: 40,
          },
          vendors: {
            name: 'react-antd',
            priority: 40,
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|redux|react-redux|react-helmet|react-activation|antd|@ant-design|rc-.+)[\\/]/,
            chunks: 'all',
          },
          'echarts.vendor': {
            name: 'echarts.vendor',
            priority: 40,
            test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
            chunks: 'all',
          },
          lodash: {
            name: "lodash",
            chunks: "all",
            test: /[\\/]node_modules[\\/]lodash[\\/]/,
            priority: 40,
          },
          'async-common': {
            chunks: 'async',
            minChunks: 2,
            name: 'async-commons',
            priority: 30,
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 2,
            priority: 20,
          },
        },
      }),
    ];
  }
  return [];
};

module.exports = addSplitChunks;
