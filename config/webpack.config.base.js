const path = require("path");

module.exports = {
  entry: path.join(__dirname, "../src/index.tsx"),
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        // See .babelrc for further babel config
      },
    ],
  },
};
