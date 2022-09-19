const addLessLoader = require("customize-cra-less-loader");

const addLessConfig = () => {
  return [
    addLessLoader({
        lessLoaderOptions: {
          lessOptions: {
            strictMath: true,
            noIeCompat: true,
            modifyVars: {
              '@primary-color': "#1DA57A",
            },
            cssModules: {
              localIdentName:
                process.env.NODE_ENV === 'development'
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[sha512:hash:base64:7]',
            },
          },
        },
      }),
  ];
};

module.exports = addLessConfig;
