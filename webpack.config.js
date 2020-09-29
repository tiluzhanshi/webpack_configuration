const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    target: "web",
    mode: "development",
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [{
                /**
                 * 先匹配test，
                 * 再匹配resourceQuery
                 * 当两者都为true时
                 * 执行下面的loader
                 */
                resource: {
                    test(source) {
                        console.log("resource", source);
                        return (new String(source).includes(".txt"));
                    }
                },
                /**
                 *  如果在引入模块后面不带参数是不会调用resourceQuery方法的；
                 *  引入模块格式如下：
                 *  import abc from "./demo.txt?asdfasdfa";
                 */
                resourceQuery: query => {
                    console.log(query);
                    return /abc/i.test(query)
                },
                // resourceQuery: /inline/,
                loader: ["file-loader?name=[name].txt","extract-loader",  "raw-loader"]
                // use: 'url-loader'
            },
            {
                test: /\.css$/i,
                loader: ["file-loader?name=[name].css", "extract-loader", "css-loader"]
            },

            {
                test: /\.vue$/i,
                use: ["vue-loader"]
            },
        ]
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