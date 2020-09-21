const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    target: "web",
    mode: "development",
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: '[id].js',
        path: path.resolve(__dirname, "./dist"),
    },module: {
        rules: [
            /**
             * babel转换：ES2015,
             * babel-loader提供了自定义loader函数
             */
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    // 你也可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。这会将转译的结果缓存到文件系统中。
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }, ]

            },

        ],

    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
    ],

}