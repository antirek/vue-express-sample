const path = require("path");

module.exports = {
//  outputDir: path.resolve(__dirname, "../public/dist"),
//  assetsDir: "../dist",
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  filenameHashing: false,
  pages: {
    app: {
      entry: "src/main.js",
      filename: "index.html"
    }
  }
};
