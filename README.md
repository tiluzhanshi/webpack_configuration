# 配置  
development(开发环境) 和 production(生产环境) 这两个环境下的构建目标存在着巨大差异。
- 在开发环境中，我们需要：强大的 source map 和一个有着 live reloading(实时重新加载) 或 hot module replacement(热模块替换) 能力的 localhost server。
- 生产环境目标则转移至其他方面，关注点在于压缩 bundle、更轻量的 source map、资源优化等，通过这些优化方式改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

# 环境变量
```javascript
/**
 * ./node_modules/.bin/webpack 
 * --config config.js  
 * --mode development  
 * --progress  
 * 如果这个配置返回一个module.exports = fun(env)；第一个参数就是env变量；
 * webpack 命令行 环境配置 的 --env 参数，可以允许你传入任意数量的环境变量。
 * 而在 webpack.config.js 中可以访问到这些环境变量。
 * 例如，--env.production 或 --env.NODE_ENV=local（NODE_ENV 通常约定用于定义环境类型）。
 * --env.production  
 * --env.NODE_ENV=LOCAL  
 * --env.abc=123 可以用等号来赋值
 * --env.cde 444 也可以用空格来赋值
 * 
 * 对于我们的 webpack 配置，有一个必须要修改之处。通常，module.exports 指向配置对象。要使用 env 变量，你必须将 module.exports 转换成一个函数：
 */
./node_modules/.bin/webpack --config  config.js  --mode development  --progress  --env.production --env.NODE_ENV=LOCAL  --env.abc=123  --env.cde
```
# 性能优化  

## 以下步骤可以提高解析速度：

- 减少 resolve.modules, resolve.extensions, resolve.mainFiles, resolve.descriptionFiles 中条目数量，因为他们会增加文件系统调用的次数。
- 如果你不使用 symlinks（例如 npm link 或者 yarn link），可以设置 resolve.symlinks: false。
- 如果你使用自定义 resolve plugin 规则，并且没有指定 context 上下文，可以设置 resolve.cacheWithContext: false。

## 避免在生产环境下才会用到的工具 
某些 utility, plugin 和 loader 都只用于生产环境。例如，在开发环境下使用 TerserPlugin 来 minify(压缩) 和 mangle(混淆破坏) 代码是没有意义的。通常在开发环境下，应该排除以下这些工具：  

- TerserPlugin  
- ExtractTextPlugin  
- [hash]/[chunkhash]  
- AggressiveSplittingPlugin  
- AggressiveMergingPlugin  
- ModuleConcatenationPlugin  

## 避免额外的优化步骤 
webpack 通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能：  
```javascript
module.exports = {
  // ...
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
};
```
## 输出结果不携带路径信息 
webpack 会在输出的 bundle 中生成路径信息。然而，在打包数千个模块的项目中，这会导致造成垃圾回收性能压力。在 options.output.pathinfo 设置中关闭：
```javascript 
module.exports = {
  // ...
  output: {
    pathinfo: false,
  },
};
```

## TypeScript loader 
你可以为 loader 传入 transpileOnly 选项，以缩短使用 ts-loader 时的构建时间。使用此选项，会关闭类型检查。如果要再次开启类型检查，请使用 ForkTsCheckerWebpackPlugin。使用此插件会将检查过程移至单独的进程，可以加快 TypeScript 的类型检查和 ESLint 插入的速度。
```javascript
module.exports = {
  // ...
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      },
    },
  ],
};
```
