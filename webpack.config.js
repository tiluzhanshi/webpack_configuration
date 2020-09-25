const path = require("path");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  context: path.resolve(__dirname, "./src"),
  entry: "./index.js",
  module: {
    rules: [
      {
        test: /\.png$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1,
              fallback: require.resolve('file-loader'),
              quality: 85,
              name:"[name].[ext]",
              publicPath:"/abc/",
              outputPath:"images"
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader:path.resolve(__dirname, "./src/css-loader.js"),
            
          // },
          {
            loader: "file-loader?name=[name].css"
          },
          {
            loader:"extract-loader",
          },
          {
            loader:"css-loader",
            options: {
              importLoaders: 1,
              url: true,
            }
          },
          {
            loader: "sass-loader",
          },
          {
            // 自动添加前缀
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}