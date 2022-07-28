"use strict";

const path = require("path");
const { merge: webpackMerge } = require("webpack-merge");
const {
  CleanWebpackPlugin: webpackCleanPlugin,
} = require("clean-webpack-plugin");
const webpackCopyPlugin = require("copy-webpack-plugin");
const webpackHTMLPlugin = require("html-webpack-plugin");

const webpackConfigBase = require("./webpack.config.base");

const OUTPUT_DIR = "../dist";
const PUBLIC_PATH = "/discogs-app";
const STATIC_DIR = "static";

module.exports = webpackMerge(webpackConfigBase, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, OUTPUT_DIR),
    publicPath: PUBLIC_PATH,
    filename: `${STATIC_DIR}/js/[name].[chunkhash].js`,
  },
  optimization: {
    minimizer: [
      new (require("terser-webpack-plugin"))({ extractComments: false }),
    ],
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    // remove prev output folder
    new webpackCleanPlugin({
      dry: false,
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    // copy static files
    new webpackCopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../static"),
          to: STATIC_DIR,
          toType: "dir",
          globOptions: {
            dot: false,
            gitignore: false,
            ignore: ["**/.*"],
          },
        },
      ],
    }),
    new webpackHTMLPlugin({
      filename: path.resolve(__dirname, `${OUTPUT_DIR}/index.html`),
      template: path.resolve(__dirname, "../src/index.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: "auto",
    }),
  ],
});
