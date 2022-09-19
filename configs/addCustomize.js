const addCustomize = () => (config) => {
  if (process.env.NODE_ENV === "production") config.devtool = false;
  return config;
};

module.exports = addCustomize;
