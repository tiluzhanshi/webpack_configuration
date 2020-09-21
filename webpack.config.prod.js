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
module.exports = merge(commonConfig, {
    mode: "production",
    // 避免在生产中使用 inline-*** 和 eval-***，因为它们会增加 bundle 体积大小，并降低整体性能
    devtool: "source-map",


})