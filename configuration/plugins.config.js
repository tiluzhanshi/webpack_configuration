const path = require("path");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require("webpack");
module.exports = {
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html"
        }),
        new VueLoaderPlugin(),
        // 自动加载，而不必在文件中引入import或require；
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        /**
         * 在ProgressPlugin提供了一种方式来定制进展如何编译期间报告。
         * webpack执行进度报告
         */
        new webpack.ProgressPlugin({
            /**
             * 
             * @param {*} percentage 0到1之间的数字，指示编译的完成百分比
             * @param {*} message 当前正在执行的钩子的简短描述
             * @param  {...any} args 零个或多个描述当前进度的附加字符串
             */
            handler(percentage /**百分比**/ , message, ...args) {
                // e.g. Output each progress message directly to the console:
                console.info(Number.parseInt(percentage * 100) + "%", message, ...args);
            },
            // activeModules（boolean = false）：显示活动模块计数和一个活动模块进行中消息。
            // activeModules: true,
            // entries（boolean = true）：显示正在进行条目计数的消息。
            entries: false,
            // modules（boolean = true）：显示模块计数进行中消息。
            modules: false,
            // modulesCount（number = 5000）：最小模块数开始。modules启用属性后生效。
            modulesCount: 1,
            // profile（boolean = false）：告诉ProgressPlugin您收集配置文件数据以进行进度。
            profile: true,
            // dependencies（boolean = true）：显示正在进行的依赖项计数消息。
            // dependenciesCount（number = 10000）：最小依赖项计数开始。dependencies启用属性后生效。
            // percentBy（string = null: 'entries' | 'dependencies' | 'modules' | null）：ProgressPlugin说明如何计算进度百分比。
            // percentBy:"entries",

        }),
        // 通过合并小于的块，使块大小保持在指定限制以上minChunkSize
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 12 // Minimum number of characters
        }),
        // 该插件将导致哈希基于模块的相对路径，生成一个四个字符串作为模块ID。建议用于生产中
        new webpack.HashedModuleIdsPlugin({
            /**
             * context：用于创建名称的上下文目录（绝对路径）。
             * hashFunction：要使用的哈希算法，默认为'md4'。crypto.createHash支持Node.JS中的所有功能。
             * hashDigest：生成哈希时使用的编码，默认为'base64'。hash.digest支持来自Node.JS的所有编码。
             * hashDigestLength：要使用的哈希摘要的前缀长度，默认为4。请注意，为了避免模块ID冲突，某些生成的ID可能比此处指定的ID长
             */
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        // 生成包含插件执行时间的Chrome配置文件。events.json默认情况下输出文件。可以使用outputPath选项提供自定义文件路径。
        // 注意：ProfilingPlugin仅接受绝对路径。
        new webpack.debug.ProfilingPlugin({
            // outputPath：自定义输出文件（json）的绝对路径
            outputPath: 'profiling/profileEvents.json'
            /**
             * 为了查看配置文件：
             * 使用运行Webpack ProfilingPlugin。
             * 转到Chrome，打开DevTools，然后转到Performance选项卡（以前为Timeline）。
             * 将生成的文件（events.json默认情况下）拖放到探查器中。
             * 然后它将显示时间轴统计信息和每个插件的调用！
             */
        }),
        /**
         * DllPlugin和“使用DllReferencePlugin某种方法实现了分解捆绑，同时还大幅度提高了发展的速度。”“ DLL”一词代表微软最初发布的动态链接库。
         * DllPlugin :此插件会在一个单独的webpack配置中创建一个dll-only-bundle。此插件会生成一个称为manifest.json的文件，
         * 这个文件是用于让DllReferencePlugin能够映射到相应的依赖上。
         * 
         * 选项
         * context（任选）：manifest文件中请求的context（替代webpack的context）
         * format（boolean = false）：如果为true，则manifest json文件（输出文件）将被格式化。
         * name：暴露出的DLL的函数名（TemplatePaths：[hash]＆[name]）
         * path：manifest.json文件的绝对路径（输出文件）
         * entryOnly（boolean = true）：如果为true，则仅暴露入口
         * type：dll bundle的类型
         */
        // new webpack.DllPlugin({
        //     context: __dirname,
        //     name: '[name]_[hash]',
        //     path: path.join(__dirname, 'manifest.json'),
        // }),
        /**
         * DefinePlugin允许在编译时创建配置的常量常量，这在需要区分开发模式与生产模式进行不同的操作时，非常有用。
         * 例如，如果想在开发集成中进行日志记录，而不在生产集成中进行，就可以定义这就是DefinePlugin的发光之处，
         * 设置好它，就可以忘掉开发环境和生产环境的制定规则。
         * 
         * 
         * 请注意，由于本插件会直接替换文本，因此提供的值必须在串联本身中再包含一个实际的引号。
         * 通常，可以使用类似'"production"'这样的替换引号，或者直接用JSON.stringify('production')。
         */
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'typeof window': JSON.stringify('object'),
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        /**
         * 准备资产的压缩版本，以使用Content-Encoding服务。
         */
        new CompressionPlugin({
            filename: '[path].gz[query]',
        }),
        new webpack.BannerPlugin({
            banner: 'hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]'
        }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
    ],
};