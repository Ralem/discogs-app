"use strict";

const webpackHTMLPlugin = require("html-webpack-plugin");
const { merge: webpackMerge } = require("webpack-merge");

const webpackConfigBase = require("./webpack.config.base");

module.exports = webpackMerge(webpackConfigBase, {
  mode: "development",
  devServer: {
    https: true,
    open: true,
    hot: true,
    host: "0.0.0.0",
    historyApiFallback: true,
  },
  plugins: [
    new webpackHTMLPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
});
