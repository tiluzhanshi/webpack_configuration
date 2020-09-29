const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");

const CustomPlugin  = require("../src/plugins.js");
module.exports  = {

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new VueLoaderPlugin(),
        new CustomPlugin(),
        
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
};