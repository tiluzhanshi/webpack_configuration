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
        // chunkFilename:'[name].[ext]',
        chunkFilename: '[id].bundle.js',
    },
    module: {
        rules: [
            // {
            //     loader:["css-loader"],
            // },
            // {
            //     /**
            //      * 先匹配test，
            //      * 再匹配resourceQuery
            //      * 当两者都为true时
            //      * 执行下面的loader
            //      */
            //     resource: {
            //         test(source) {
            //             console.log(source);
            //             return false; // (new String(source).includes(".txt"));
            //         }
            //     },
            //     /**
            //      *  如果在引入模块后面不带参数是不会调用resourceQuery方法的；
            //      *  引入模块格式如下：
            //      *  import abc from "./demo.txt?asdfasdfa";
            //      */
            //     resourceQuery: query => {
            //         console.log(query);
            //         return true; ///abc/i.test(query)
            //     },
            //     // resourceQuery: /inline/,
            //     // loader: ["file-loader?name=[name].txt","extract-loader",  "raw-loader"]
            //     loader:["define-loader"],
            //     enforce:"post"
            //     // use: 'url-loader'
            // },
            // {
            //     resource:{
            //         test:(r) =>{

            //             return r.includes(".css")
            //         }
            //     },
            //     resourceQuery: (query)=>{
            //         // console.log(query)
            //         return query == "?inline"
            //     },
            //     use: [{
            //             loader: "define-loader",
            //             options: {
            //                 // enforce: "post"
            //             }
            //         }

            //     ],
            // },

            // {
            //     test: /\.css$/i,
            //     use: [{
            //             loader: "file-loader",
            //             options: {
            //                 //  enforce: "pre"
            //             },

            //         },
            //         {
            //             loader: "css-loader",
            //             options: {
            //                 // enforce: "pre"
            //             }

            //         }


            //     ]
            // },
            {
                test: /\.png$/i,
                loader: ["url-loader", {
                    loader: "url-loader",
                    options: {
                        limit: 1,
                    }
                }],
            },
            // {
            //     resource: {
            //         test: (r) => {

            //             return r.includes(".css")
            //         }
            //     },
            //     // resourceQuery: (query)=>{
            //     //     // console.log(query)
            //     //     return query == "?inline"
            //     // },
            //     use: [

            //     ],
            // },
            {
                resource: {
                    test: (r) => {

                        return r.includes(".css")
                    }
                },
                use: [{
                        loader: "define-loader2",
                        options: {
                            // enforce: "post"
                        }
                    }, {
                        loader: "define-loader",
                        options: {
                            // enforce: "post"
                        }
                    }

                ],
            },
            // {
            //     test: /\.vue$/i,
            //     use: ["vue-loader"]
            // },
            // ../node_modules/file-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../loaders/define-loader/index.js!../node_modules/vue-loader/lib/index.js?!./First.vue?vue&type=style&index=0&lang=css&
            // ../loaders/define-loader/index.js!../node_modules/file-loader/dist/cjs.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./First.vue?vue&type=style&index=0&lang=css&
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