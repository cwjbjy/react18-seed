const { addWebpackExternals } = require("customize-cra");

const addExternals = () => {
  return [
    addWebpackExternals({
      echarts: "echarts",
    }),
  ];
};

module.exports = addExternals;
