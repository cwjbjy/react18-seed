const { override } = require("customize-cra");

const { addAlias, addLessConfig } = require("./configs");

module.exports = {
  webpack: override(...addAlias(), ...addLessConfig()),
};
