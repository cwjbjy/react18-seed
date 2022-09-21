const { addWebpackPlugin } = require("customize-cra");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const WebpackBar = require("webpackbar");
const minimist = require("minimist");
const CompressionPlugin = require("compression-webpack-plugin");
const webpack = require("webpack");

const { __DEV__ } = require("./util");

const options = minimist(process.argv.slice(2));

const addWebpackPlugins = () => {
  const configs = [
    addWebpackPlugin(
      new WebpackBar({
        name: __DEV__ ? "正在启动" : "正在打包",
        color: __DEV__ ? "#00ff00" : "#fa8c16",
      })
    ),
  ];

  //根据命令行参数打包vip模块的代码
  configs.push(
    addWebpackPlugin(
      new webpack.NormalModuleReplacementPlugin(
        /(.*)-APP_TARGET(\.*)/,
        function (resource) {
          let appTarget = options.vip ? "-vip" : "";
          resource.request = resource.request.replace(
            /-APP_TARGET/,
            `${appTarget}`
          );
        }
      )
    )
  );

  if (options.analyze) {
    configs.push(addWebpackPlugin(new BundleAnalyzerPlugin()));
  }
  if (!__DEV__) {
    configs.push(addWebpackPlugin(new CompressionPlugin()));
  }

  return configs;
};

module.exports = addWebpackPlugins;
