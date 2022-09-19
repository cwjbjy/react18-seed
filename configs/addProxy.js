const addProxy = () => (configFunction) => {
  configFunction.proxy = {
    "/juhe": {
      target: "http://v.juhe.cn",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/juhe": "",
      },
    },
  };
  return configFunction;
};

module.exports = addProxy;
