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
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    // 你也可以通过使用 cacheDirectory 选项，将 babel-loader 提速至少两倍。这会将转译的结果缓存到文件系统中。
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        // 重要的是要注意，@babel/preset-env它不支持stage-x插件。
                        // 如果设置了.browserlistrc配置文件后，不需要在这里再配置presets了
                        // presets: ['@babel/preset-env']
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