# chunkFilename属性使用
- filename 指列在 entry 中，打包后输出的文件的名称。
- chunkFilename 指未列在 entry 中，却又需要被打包出来的文件的名称(生成单独的文件名称)。

# 使用场景：
- import()方法请求资源的情况
- require.ensure()的情况下
- 在进行拆分文件时会把通用的代码打包到一起时;


# 模板字符串
|模板|	描述|
|--|--|
|[hash] |模块标识符（模块标识符）的哈希|
[contenthash] |文件内容hash，每个资源生成的hash都是不同的|
[chunkhash] |块内容的哈希|
[name] |块名称|
[id] |模块标识符（模块标识符）|
[query] |模块的查询，例如，文件名 ? 后面的字符串|
[function]| 该函数可以返回文件名[字符串]|

> [hash] 和 [chunkhash] 的长度可以使用 [hash:16]（默认为 20）来指定。或者，通过指定output.hashDigestLength 在全局配置长度。