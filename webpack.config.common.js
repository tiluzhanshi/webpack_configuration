const path = require("path");
// CleanWebpackPlugin NOTE: Node v8+ and webpack v3+ are supported and tested.
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
/**
 * 每当我们更改output文件中的文件名时webpack.config.js，
 * 我们还必须更改在文件中的script标记中引用的文件名index.html。
 * 如果webpack可以为我们管理这不是很好吗？
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    ProgressPlugin,
    HotModuleReplacementPlugin
} = require("webpack");
module.exports = {
    context: path.resolve(__dirname, "./src"),
    entry: {
        index: "./index.js"
    },
    output: {
        pathinfo: false,
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                }]
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        // 不检查构建类型
                        transpileOnly: true
                    },
                }, ],
            }
        ]
    },
    resolve: {
        extensions: ['.wasm', '.mjs', '.js', '.json', ".tsx"]
    },
    plugins: [
        new CleanWebpackPlugin({

        }),
        new HotModuleReplacementPlugin({
            // Options...
        }),
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            title: "first title",
            // 可以带上路径如： dir/index.html
            filename: "index.html",
            // webpack到模板的相对或绝对路径。默认情况下，它将使用src/index。如果存在ejs。详情请参阅文档
            template: "main.html",
            meta: {
                viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
            },
            inject: true,
            // templateContent: `
            //     <body>

            //     </body>
            // `
            // minify: {
            //     collapseWhitespace: true,
            //     removeComments: true,
            //     removeRedundantAttributes: true,
            //     removeScriptTypeAttributes: true,
            //     removeStyleLinkTypeAttributes: true,
            //     useShortDoctype: true
            // },
            'base': {
                'href': '/',
                'target': '_blank'
            },
            // chunks: ['app'],有问题，会导致无法导入js

        }),


    ]
}