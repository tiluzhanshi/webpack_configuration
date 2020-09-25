const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  context: path.resolve(__dirname, "./src"),
  entry: "./index.js",
  module: {
    rules: [
      {
        test:/\.js$/i,
        use:[
          "babel-loader",
          "eslint-loader"
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}