const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
module.exports = {
    target: "web",
    mode: "development",
    context: path.resolve(__dirname, "../src"),
    entry: {
        index: "./index.js"
    },
    output: {
        filename: '[id].js',
        path: path.resolve(__dirname, "../dist"),
        // publicPath: '/', // 资源请求路径
        // libraryTarget: 'commonjs2',
    },
    // devtool: "source-map",
    resolve: {
        alias: {
            "abc$": "./bar/index.js"
        },
        // 这三个字段在package.json文件中配置的；browser中的键值对和alias一样
        aliasFields: ["browser", "webapp"],
        // mainFields:["module", "main"], // 此选项将决定在 package.json 中使用哪个字段导入模块
        // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在
        extensions: [".js", ".json"],
        /**
         * 用于描述的JSON文件，resolve对象中需要在package.json配置，默认是package.json;
         * 
         */
        descriptionFiles: ["package.json", 'test_resolve.json'],
        // 从node_modules目录是搜索模块,也可以从其他地方引入模块，如component
        modules: ["node_modules"],
        cachePredicate: function ({
            path,
            request
        }) {
            if (request.includes("index.js")) {
                // return true;
            }
            // console.log(path);
            // console.log("=" + request)

            return true; // 这个是默认值
        },
        // 默认是false, 强制让require("/foo.js")模块带上扩展名,针对node_modules以外的模块定义
        enforceExtension: false,
        // 默认是false,对模块是否需要使用的扩展（例如 loader），只针对node_modules目录下
        enforceModuleExtension: false,
        unsafeCache: true, // 启用，会主动缓存模块，但并不安全。传递 true 将缓存一切。默认：
    },
    resolveLoader: {
        modules: [
            "node_modules"
        ],
        extensions: ['.js', '.json'],
        mainFields: ['loader', 'main']
    },
    watch: false,
    watchOptions: {
        // 当第一个文件更改，会在重新构建前增加延迟。这个选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。以毫秒为单位：
        aggregateTimeout: 300,
        // 对于某些系统，监听大量文件系统会导致大量的 CPU 或内存占用。这个选项可以排除一些巨大的文件夹，例如 node_modules：
        ignored: /node_modules/,
        // 通过传递 true 开启 polling，或者指定毫秒为单位进行轮询。
        poll: 1000,
    },
    externals: {
        // 键（包名）:值（引用值）；
        // jquery: "jquery",
        // subtract: ['./math', 'subtract'] 转换为父子结构，其中 ./math 是父模块，而 bundle 只引用 subtract 变量下的子集。
        subtract: ['./math', 'subtract'],
        // 此语法用于描述外部 library 所有可用的访问方式。
        // 这里 lodash 这个外部 library 可以在 AMD 和 CommonJS 模块系统中通过 lodash 访问，
        // 但在全局变量形式下用 _ 访问。
        lodash: {
            commonjs: "lodash",
            amd: "lodash",
            root: "_" // 指向全局变量
        },
    },
    // 通过测试
    performance: {
        // 打开/关闭提示。此外，当找到提示时，告诉 webpack 抛出一个错误或警告。此属性默认设置为 "warning"。
        // value: false | "error" | "warning"
        hints: "error",
        // entry对象中指定的入口文件，对于所有资源，要充分利用初始加载时(initial load time)期间。
        // 此选项根据入口起点的最大体积，控制 webpack 何时生成性能提示。
        // 默认值是：250000 (bytes)。
        // 控制入口文件的大小，在浏览器中加载优化初始加载文件过大；
        maxEntrypointSize: 10000000000,
        // 资源(asset)是从 webpack 生成的任何文件。此选项根据单个资源体积，
        // 控制 webpack 何时生成性能提示。
        // 默认值是：250000 (bytes)。
        // 单个资源文件最大体积
        maxAssetSize: 100000000000,
        // 此属性允许 webpack 控制用于计算性能提示的文件。默认函数如下
        assetFilter: function (assetFilename) {
            // 不是.map后缀的文件都会进行性能检测
            return !(/\.map$/.test(assetFilename))
        },
        // 示例将只给出 .js 文件的性能提示。
        assetFilter: function (assetFilename) {
            console.log(assetFilename);
            return assetFilename.endsWith('.js');
        },
    },
    // 这个在控制台输出的信息类型
    // stats: "normal",
    // recordsPath: path.join(__dirname, 'records.json'),
    // recordsInputPath: path.join(__dirname, 'records.json'),
    // recordsOutputPath: path.join(__dirname, 'newRecords.json'),
    devServer: {
        // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问，指定如下：
        host: "192.168.101.8",
        // 此选项使浏览器可以使用您的本地IP打开。和上面的host配合使用
        useLocalIp: true,
        // 启用 webpack 的模块热替换特性：
        hot: true,
        // 启用热模块替换（请参阅devServer.hot参考资料），而不会在构建失败时将页面刷新作为后备
        hotOnly: true,
        // https:true,
        port: 9000,
        compress: true,
        // 当启用 lazy 时，dev-server只有在请求时才编译包(bundle)。这意味着 webpack 不会监视任何文件改动。我们称之为“惰性模式”。
        lazy: false,
        // 启用 noInfo 后，诸如「启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
        noInfo: false,
        // 静态文件路径，此路径下的打包文件可在浏览器中访问。
        publicPath: "/",
        // 当使用内联模式(inline mode)并代理 dev-server 时，内联的客户端脚本并不总是知道要连接到什么地方。
        // 它会尝试根据 window.location 来猜测服务器的 URL，但是如果失败，你需要这样。
        // 这个会直接在打开默认的地址
        // public: "www.tiluzhanshi.com:80",
        // 默认打开的文件名
        index: 'index.html',
        // 指定打开浏览器时要浏览的页面。
        openPage: 'index.html',
        // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。默认禁用。如果只想显示编译器错误：
        overlay: true,
        // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。
        // devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
        // 但是也可以从多个目录提供内容
        contentBase: path.join(__dirname, "dist"),
        open: true,
        // 提供在服务器内部执行所有其他中间件之后执行自定义中间件的能力。
        after(app) {
            console.log(app)
        },
        // 提供在服务器内部先于所有其他中间件执行自定义中间件的功能。这可以用于定义自定义处理程序，例如：
        before(app) {
            console.log(app);
        },
        // 通过此选项，您可以将允许访问开发服务器的服务列入白名单。
        allowedHosts: [
            "192.168.101.8",
            '.host.com',
            'subdomain.host.com',
            'subdomain2.host.com',
            '.host2.com'
        ],
        // 在所有响应中添加首部内容：
        headers: {
            "X-Custom-Foo": "bar"
        },
        // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
        historyApiFallback: true,
        // 通过传入一个对象，比如使用 rewrites 这个选项，此行为可进一步地控制：
        historyApiFallback: {
            rewrites: [{
                    from: /^\/$/,
                    to: '/views/landing.html'
                },
                {
                    from: /^\/subpage/,
                    to: '/index.html'
                },
                {
                    from: /./,
                    to: '/views/404.html'
                }
            ]
        },
        // stats: "errors-only", //和stats文档是的相
        staticOptions: {
            redirect: true
        },
        // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
        quiet: false,
        // clientLogLevel: "none",
        proxy: [{
                context: ["/auth", "/api"],
                target: "http://localhost:9000",
                bypass: function (req, res, proxyOptions) {
                    console.log("Skipping proxy for browser request.");
                    console.log(proxyOptions);
                    // res.headers["xxxxx-aaa"] = "123;";
                    // console.log(req);
                    return "/index.html";

                }
            },

        ],
        // 通过测试
        // proxy: {
        //     "/apis": {
        //         target: "http://localhost:9000",
        //         pathRewrite: { "^/api": "" },
        //         // http://192.168.101.8:9000/api/index.html 定位到 http://192.168.101.8:9000/index.html
        //         bypass: function (req, res, proxyOptions) {
        //             console.log("Skipping proxy for browser request.");
        //             return "/index.html";
        //         }
        //     }
        // },

    }
}