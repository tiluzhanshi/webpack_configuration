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
    optimization: {
        // splitChunks: {
        //     // 这表明将选择哪些块进行优化。当提供一个字符串，有效值为all，async和initial。
        //     // 提供all可能特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
        //     // chunks: all(default):string|async:string|initial:string
        //     // async:只把异步加载的模块打包
        //     chunks: 'initial',
        //     // chunks(chunk) {
        //     //     // exclude `my-excluded-chunk`
        //     //     return true; // chunk.name !== 'my-excluded-chunk';
        //     // }
        //     // minSize: default=>number = 20000 
        //     // 生成块的最小大小（以字节为单位）
        //     minSize: 1,
        //     // 告诉webpack尝试将大于maxSize字节的块拆分为较小的部分。零件的尺寸至少为minSize（旁边maxSize）。
        //     // 该算法是确定性的，对模块的更改只会产生局部影响。这样，在使用长期缓存时就可以使用它并且不需要记录。
        //     // maxSize只是一个提示，当模块大于maxSize或拆分将违反时可能被违反minSize。
        //     maxSize: 2,
        //     // 拆分块的名称。提供true将基于块和缓存组密钥自动生成一个名称。
        //     name: true,
        //     name: "good",



        // },

        // namedModules: true,
        // runtimeChunk: true,
        // runtimeChunk: {
        //     name: entrypoint => `1runtime~${entrypoint.name}`
        // },
        // runtimeChunk: {
        //     name: "runtime", // 用于为运行时块命名
        // }

    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}