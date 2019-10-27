const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: "./src/index.js", vender: "./src/vender.js" },
  plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
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
