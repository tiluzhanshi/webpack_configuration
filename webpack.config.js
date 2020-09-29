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
        rules: [
            // {
            //     use: [
            //         {
            //             loader: "define-loader",
            //         },
            //     ]
            // },
            {
                // test: /\.css$/i,
                resource: {
                    test(source) {
                        console.log(source);
                        return true;
                    }
                },
                resourceQuery: query => {
                    console.log(query);
                    return true;
                },
                // include: [],
                loader: ["file-loader?name=main.css", "extract-loader", "css-loader"]
            },
            // {
            //     test: /\.vue$/i,
            //     use: ["vue-loader"]
            // },
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
        // new VueLoaderPlugin(),
    ]
}