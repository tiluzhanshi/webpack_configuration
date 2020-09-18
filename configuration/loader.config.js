module.exports = {
    module: {
        rules: [
            /**
             * 每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。
             * { test: Condition }：匹配特定条件。一般是提供一个正则表达式或正则表达式的数组，但这不是强制的。

                { include: Condition }：匹配特定条件。一般是提供一个字符串或者字符串数组，但这不是强制的。

                { exclude: Condition }：排除特定条件。一般是提供一个字符串或字符串数组，但这不是强制的。

                { and: [Condition] }：必须匹配数组中的所有条件

                { or: [Condition] }：匹配数组中任何一个条件

                { not: [Condition] }：必须排除这个条件
             */
            // {
            //     test: /\.js$/i,
            //     // loader: "file-loader",//启用了它会生成一个xxxxxx.js文件
            //     parser: {
            //         amd: false, // 禁用 AMD
            //         commonjs: false, // 禁用 CommonJS
            //         system: false, // 禁用 SystemJS
            //         harmony: true, // 禁用 ES2015 Harmony import/export
            //         requireInclude: false, // 禁用 require.include
            //         requireEnsure: false, // 禁用 require.ensure
            //         requireContext: false, // 禁用 require.context
            //         browserify: false, // 禁用特殊处理的 browserify bundle
            //         requireJs: false, // 禁用 requirejs.*
            //         node: false, // 禁用 __dirname, __filename, module, require.extensions, require.main 等。
            //     },
            // },

            // 测试通过
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    'sass-loader',
                ]
            },
            {
                test: /\.txt$/i,
                loader: "raw-loader" // 一个webpack的加载器，允许以字符串的形式导入文件。
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                        loader: "file-loader", // webpack的加载器，它将文件转换为base64 uri。
                        options: {
                            // 默认情况下，您指定的路径和名称将在同一目录中输出该文件，并且还将使用相同的URI路径来访问该文件。
                            name: '[hash][name].[ext]', // name属性值：可以接收字符串或下面的函数
                            name(resourcePath, resourceQuery) {
                                // `resourcePath` - `/absolute/path/to/file.js`
                                // `resourceQuery` - `?foo=bar`
                                if (process.env.NODE_ENV === 'development') {
                                    return '[path][name]1.[ext]';
                                }
                                return '[name]2.[ext]';
                            },
                            // outputPath: String | function
                            outputPath: "images", // 指定资源输出到的目录
                            /**
                             * 
                             * @param {*} url 上面name属性的路径 
                             * @param {*} resourcePath 资源的绝对路径
                             * @param {*} context 是一个目录，有关存放资源的目录
                             */
                            outputPath(url, resourcePath, context) {
                                // `resourcePath` is original absolute path to asset
                                // `context` is directory where stored asset (`rootContext`) or `context` option

                                // To get relative path you can use
                                // const relativePath = path.relative(context, resourcePath);

                                // console.log("=================")
                                // console.log(url);
                                // console.log(resourcePath);
                                // console.log(context)

                                if (/url\.png/.test(resourcePath)) {
                                    return `url/${url}`;
                                }

                                if (/abc\.png/.test(resourcePath)) {
                                    return `abc/${url}`;
                                }

                                return `other/${url}`;
                            },
                            // 这个是在页面加载资源时的路径,上面的是生成资源存储时的目录
                            // 如果不配置这个属性，请求资源的路径就和outputPath的配置一致；
                            // publicPath: String|Function Default: __webpack_public_path__+outputPath
                            // Specifies a custom public path for the target file(s).
                            publicPath: 'assets',
                            publicPath: (url, resourcePath, context) => {
                                // `resourcePath` is original absolute path to asset
                                // `context` is directory where stored asset (`rootContext`) or `context` option

                                // To get relative path you can use
                                // const relativePath = path.relative(context, resourcePath);

                                /**
                                 * 在使用此访问时遇到的问题是不能正确地在资源的路径上显示正确的路径问题，
                                 * 原因在于把file-loader放到了url-loader的后面了，导致不能正常的解析路径
                                 */

                                if (/url\.png/.test(resourcePath)) {
                                    return `url/${url}`;
                                }

                                if (/abc\.png/.test(resourcePath)) {
                                    return `abc/${url}`;
                                }

                                return `other/${url}`;
                            },
                            /**
                             * postTransformPublicPath和上面的publicPath配合使用。
                             * 
                             * 指定一个自定义函数来对生成的公共路径进行后处理。
                             * 这可以用来前置或追加只有在运行时可用的动态全局变量，
                             * 如剩余的__webpack_public_path__。
                             * 仅使用publicPath是不可能实现这一点的，因为它将值绑定。
                             * 
                             * 可以实现动态指定url，根据开发环境或生产环境，参考地址：
                             * https://webpack.docschina.org/loaders/file-loader/#dynamic-public-path-depending-on-environment-variable-at-run-time
                             * 
                             * @param {*} 显示解析正确的文件路径名，这个名称是publicPath中定义的
                             */
                            postTransformPublicPath(p) {
                                console.log("postTransformPublicPath", p);
                                return `__webpack_public_path__ + ${p}`;
                            },
                            // 指定自定义文件上下文
                            content: "project",
                            emitFile: false,
                            // 在打包后，true:显示的是__webpack_require__, false:是使用的commonjs格式；
                            esModule: true,


                        },
                    },
                    {
                        loader: "url-loader", // webpack的加载器，它将文件转换为base64 uri。
                        options: {
                            limit: 1, //  url-loader的工作原理类似于url-loader，但是如果文件小于字节限制，则可以返回DataURL。
                        },
                    },
                ]
            },

            // 测试不通过
            {
                // loader: "var-loader", // 以模块的形式执行代码，并将导出看作JS代码
                test: /varfile\.js$/i,
                use: [{
                    loader: "var-loader",
                    options: {
                        years: 10,
                    },
                }], // 以模块的形式执行代码，并将导出看作JS代码
            },

            // // 测试通过
            // {
            //     resource: {
            //         test: /\.js$/i,
            //     },
            //     use: [
            //         {
            //             loader: "file-loader"
            //         }
            //     ]
            // },

            // // 测试通过
            // {
            //     test: /\.js$/i,
            //     oneOf: [
            //         {
            //             resourceQuery: /webapp/,
            //             loader: "file-loader"
            //         },
            //         {
            //             resourceQuery: /externals/,
            //             loader: "file-loader"
            //         },
            //         {
            //            // loader: "file-loader"
            //         }
            //     ]
            // },

            // // 测试通过
            // {
            //     test: /\.js$/i,
            //     resourceQuery: /webapp/,//resourceQuery：和resource用法一样，不过针对的是匹配结果'?'后面的路径参数，可以调用resource中的text等
            //     loader: "file-loader",

            // },
        ],
        /**
         * noParse
         * 防止 webpack 解析那些任何与给定正则表达式相匹配的文件。
         * 忽略的文件中不应该含有 import, require, define 的调用，
         * 或任何其他导入机制。忽略大型的 library 可以提高构建性能。} 
         */
        // 通过测试
        noParse: function (content) {
            return /jquery|lodash/.test(content);
        }
    }
}