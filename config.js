/**
 * webpack v4+将在生产模式下默认缩小你的代码。
 * 虽然生产环境下默认使用 TerserPlugin ，并且也是代码压缩方面比较好的选择，但是还有一些其他可选择项。
 * 以下有几个同样很受欢迎的插件： 
 *      BabelMinifyWebpackPlugin 
 *      ClosureWebpackPlugin
 * 
 * 如果决定尝试一些其他压缩插件，只要确保新插件也会按照treeShake 
 * 指南中所陈述的具有删除未引用代码(dead code)的能力，
 * 并将它作为 optimization.minimizer。
 */
const {
    merge
} = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const path = require("path");
module.exports = function (env) {

    /**
  [Arguments] {
  '0': undefined, 第一个参数
  '1': { 第二个参数
    _: [],
    cache: null,
    bail: null,
    profile: null,
    color: { level: 3, hasBasic: true, has256: true, has16m: true },
    colors: { level: 3, hasBasic: true, has256: true, has16m: true },
    config: 'config.js',
    'info-verbosity': 'info',
    infoVerbosity: 'info',
    '$0': 'node_modules/.bin/webpack'
  }
}

/**
 * ./node_modules/.bin/webpack 
 * --config  config.js  
 * --mode development  
 * --progress  
 * 如果这个配置返回一个module.exports = fun；第一个参数就是env变量；
 * webpack 命令行 环境配置 的 --env 参数，可以允许你传入任意数量的环境变量。
 * 而在 webpack.config.js 中可以访问到这些环境变量。
 * 例如，--env.production 或 --env.NODE_ENV=local（NODE_ENV 通常约定用于定义环境类型，查看 这里）。
 * --env.production  
 * --env.NODE_ENV=LOCAL  
 * --env.abc=123  
 * --env.cde 444
 */
    console.log(env);
    // console.log(arguments);
    // console.log(process);
    return {
        mode: "development",
        // context:path.resolve(__dirname, "./src"),
        resolve: {
        //    extensions:["js","json"]
        }
    }
}