const path = require("path");
module.export = {
    mode: "development",
    entry: [path.resolve(__dirname, "src/js/index.js")],
    output: {
      path: path.resolve(__dirname, "dist/js"),
      filename: "bundle.js",
    },
  };
