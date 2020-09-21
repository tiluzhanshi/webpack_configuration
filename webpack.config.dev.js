const {
    merge
} = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
module.exports = merge(commonConfig, {
    mode: "development",
    // 这个会编译到代码中和eval在一起
    devtool: "eval-cheap-module-source-map",
    // 这个会单独编译到一行
    // devtool:"inline-source-map",
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      },
      
      devServer: {
          open: true,
          hot: true,
          index:"index.html",
          hotOnly: true
      }

})