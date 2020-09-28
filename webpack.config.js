const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

const VueLoadersPlugin = require("vue-loader/lib/plugin");

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
          // "eslint-loader"
        ]
      },
      {
        test:/\.vue$/i,
        use:[
          "vue-loader",
          // "eslint-loader"
        ]
      },
      {
        test:/\.css$/i,
        use:[
          "style-loader",
         // "extract-loader",
          "css-loader"
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoadersPlugin(),

  ],
  devtool: "source-map"
}