"use strict";

const webpack = require("webpack");
const webpackHTMLPlugin = require("html-webpack-plugin");
const { merge: webpackMerge } = require("webpack-merge");

const webpackConfigBase = require("./webpack.config.base");

module.exports = webpackMerge(webpackConfigBase, {
  mode: "development",
  devServer: {
    open: true,
    hot: true,
    host: "0.0.0.0",
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": "dev",
    }),
    new webpackHTMLPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: true,
    }),
  ],
});
