const path = require("path");

module.exports = {
  entry: { main: "./src/index.js", vender: "./src/vender.js" },

  module: {
    rules: [
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.(svg|png|gif|jpg)$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[hash].[ext]", outputPath: "imgs" }
        }
      }
    ]
  }
};
