const path = require("path");
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
        /**
         * 
         * output.libraryTarget选项不同，output.library选项将具有不同的含义。
         * "var" | "assign" | "this" | "window" | "self" | "global" | "commonjs" | "commonjs2" | "commonjs-module" | "amd" | "amd-require" | "umd" | "umd2" | "jsonp" | "system"
         */
        library:"xxxxx",
        // 这个是编译的代码是给一个变量
        libraryTarget: 'var',
        // 编译后的代码可以是 AMD,CommonJS,window
        // library键值将在AMD和window中定义
        libraryTarget: "umd",
        // 入口的返回值是this，library是this["xxxxx"]
        libraryTarget: "this",
        // 入口的返回值是 window，library是window["xxxxx"]
        libraryTarget: "window",
        // 入口的返回根据target属性，web:window, node:global
        libraryTarget: "global",
        // commonjs2情况下，library将被忽略
        libraryTarget: "commonjs2",
        libraryTarget: "system",
       // ecmaVersion: 5,


    },
    resolve: {},
    resolveLoader: {

    },
    watch: false,
    watchOptions: {

    },
    externals: {

    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}