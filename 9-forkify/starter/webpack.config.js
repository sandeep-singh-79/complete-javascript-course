const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.export = {
  entry: {
    index: path.resolve(__dirname, "src", "js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  // to run the dev server in the background
  // this will refresh the page automatically whenever the code changes
  devServer: {
    contentBase: "./dist",
  },
  // copy the index.html from src to dist and inject bundle.js in to the index
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
