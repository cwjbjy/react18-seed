const { override } = require("customize-cra");

const { addAlias } = require("./configs");

module.exports = {
  webpack: override(...addAlias()),
};
