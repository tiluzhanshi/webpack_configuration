const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    target: "node",
    mode: "development",
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "./dist"),
        chunkFilename: '[hash:8].chunk.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
