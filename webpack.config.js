const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
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
        chunkFilename: '[name].chunk.js',
    },
    /**
     * 从webpack 4开始，会根据你选择的mode来执行不同的优化，不过所有的优化还是可以手动配置和重写
     */
    optimization: {
        // 告知webpack使用TerserPlugin或其他在optimization.minimizer 定义的插件压缩bundle。
        // production模式下，这里重置是true。
        // 使用 TerserPlugin开启压缩
        minimize: true,
        // [TerserPlugin] 或 [function (compiler)]
        // 允许您通过提供一个或多个定制过的TerserPlugin实例，覆盖覆盖压缩工具（minimizer）。
        minimizer: [
            new TerserPlugin({
                // 匹配文件:匹配编译后的文件
                // 类型：String|RegExp|Array<String|RegExp> 默认值：/\.m?js(\?.*)?$/i
                test: /\.m?js(\?.*)?$/i,
                // 类型：String|RegExp|Array<String|RegExp> 默认值：undefined
                // 同时，要包含的文件。
                include: undefined,
                // 型：String|RegExp|Array<String|RegExp> 默认值：undefined
                // 要排除的文件。
                exclude: undefined,
                // web在webpack 5中被忽略了！提取到了配置对象顶层了，请使用https://webpack.js.org/configuration/other-options/#cache。
                // 类型：Boolean|String 默认值：true
                // 启用文件缓存。缓存目录的默认路径：node_modules/.cache/terser-webpack-plugin。
                cache: true,
                // 启用文件缓存并设置缓存目录的路径。
                cache: 'cache/path/to',
                // web在webpack 5中被忽略了！请使用https://webpack.js.org/configuration/other-options/#cache。
                // 类型：Function<(defaultCacheKeys, file) -> Object> 默认值：defaultCacheKeys => defaultCacheKeys
                // 允许您覆盖默认的缓存键
                cacheKeys: defaultCacheKeys => defaultCacheKeys,
                // 类型：Boolean|Number 默认值：true
                // 使用多进程并行运行可提高构建速度。并发运行的默认次数：os.cpus().length - 1。
                // Para️并行化可以显着加快构建速度，因此强烈建议使用。
                // If️如果您使用Circle CI或任何其他不提供CPU实际可用数量的环境，则需要显式设置CPU数量以避免Error: Call retries were exceeded（请参阅＃143，＃202）。
                parallel: true,
                sourceMap: true, // 如果在生产环境中使用 source-maps，必须设置为 true
                // 类型：Function 默认值：undefined
                // 允许您覆盖默认的缩小功能。默认情况下，插件使用terser软件包。对于使用和测试未发布的版本或派生很有用。
                // enabled️ 启用选项时始终使用require内部minify功能parallel
                minify: undefined,
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    ecma: undefined,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                },
                // 类型：Boolean|String|RegExp|Function<(node, comment) -> Boolean|Object>|Object 默认值：true
                // 是否将评论提取到单独的文件中（请参阅详细信息）。默认情况下，仅使用/^\**!|@preserve|@license|@cc_on/iregexp条件提取注释，
                // 并删除其余注释。如果原始文件已命名foo.js，则注释将存储到foo.js.LICENSE.txt。该terserOptions.output.comments选项指定是否保留注释，
                // 即可以在提取其他注释时保留一些注释（例如注释），甚至保留已提取的注释。
                extractComments: true,
                extractComments: {
                    condition: 'some',
                    filename: (fileData) => {
                        // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
                        return `${fileData.filename}.LICENSE.txt${fileData.query}`;
                    },
                    banner: (licenseFile) => {
                        return `License information can be found in ${licenseFile}`;
                    },
                },

            }),
        ],


        splitChunks: {
            // 这表明将选择哪些块进行优化。当提供一个字符串，有效值为all，async和initial。
            // 提供all可能特别强大，因为这意味着即使在异步和非异步块之间也可以共享块。
            // chunks: all(default):string|async:string|initial:string
            // async:只把异步加载的模块打包
            chunks: 'initial',
            // chunks(chunk) {
            //     // exclude `my-excluded-chunk`
            //     return true; // chunk.name !== 'my-excluded-chunk';
            // }
            // minSize: default=>number = 20000 
            // 生成块的最小大小（以字节为单位）
            minSize: 1,
            // 告诉webpack尝试将大于maxSize字节的块拆分为较小的部分。零件的尺寸至少为minSize（旁边maxSize）。
            // 该算法是确定性的，对模块的更改只会产生局部影响。这样，在使用长期缓存时就可以使用它并且不需要记录。
            // maxSize只是一个提示，当模块大于maxSize或拆分将违反时可能被违反minSize。
            maxSize: 2,
            // 拆分块的名称。提供true将基于块和缓存组密钥自动生成一个名称。
            name: true,
            name: "good",



        },

        namedModules: true,
        runtimeChunk: true,
        runtimeChunk: {
            name: entrypoint => `1runtime~${entrypoint.name}`
        },
        runtimeChunk: {
            name: "runtime", // 用于为运行时块命名
        }

    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}