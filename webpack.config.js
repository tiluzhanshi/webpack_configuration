const path = require("path");const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    target: "web",
    mode: "development",
    context: path.resolve(__dirname, "../src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: '[name][id].js',
        path: path.resolve(__dirname, "../dist"),
    },
    devtool: "source-map",
    resolveLoader: {
        modules: [
            "node_modules",
            "./loaders"
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new VueLoaderPlugin(),
    ]
}