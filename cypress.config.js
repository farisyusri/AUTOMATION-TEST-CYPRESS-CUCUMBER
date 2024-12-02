const webpack = require("@cypress/webpack-preprocessor");

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: require("./webpack.config"),
      };
      on("file:preprocessor", webpack(options));
      return config;
    },
    supportFile: false, //If the error occured, just put this syntax for the supportFile (if you didnt use any e2e.js on cypress/support/)
  },
};
