# webpack_configuration

## 安装@babel/plugin-transform-classes插件
在`babel.config.json`或者`.babelrc.json`文件中提供以下内容
```json
{
    "plugins": ["@babel/plugin-transform-classes"]
}
```
或者
```json
{
    "plugins": [
      ["@babel/plugin-transform-classes", {
        "loose": true
      }]
    ]
  }
```
在`babel.config.js`中配置
```javascript
module.exports = {
    presets: [
      "@babel/preset-env"
    ],
    plugins: [
    ]
  }
```
在`package.json`文件中提供以下内容
```json
  "babel": {
      "plugins": ["@babel/plugin-transform-classes"]
  }
```

## 完整babel配置文件
```json
{
  "plugins": [
    [
      "@babel/plugin-transform-classes",
      {
        "loose": true
      }
    ]
  ],
  // 这个配置不能和browserlistrc同时存在, 在babel-loader中的options中配置preset-env不能和browserlistrc同时存在
    "presets": [
      ["@babel/preset-env", {
        "loose": true,
        "modules": false
      }]
    ]
}
```

## babel插件和预设区别
- babel插件如果想要支持一个ES的新特性，就可以使用babel提供的插件，需要多个就写多个插件；
- babel预设，如果一个一个的安装插件太麻烦，可以使用预设一起把所有的新特性添加进来；

## Browserslist集成  
对于基于浏览器或Electron的项目，我们建议使用.browserslistrc文件来指定目标。您可能已经拥有此配置文件，因为该文件已被生态系统中的许多工具所使用，例如autoprefixer，stylelint，eslint-plugin-compat等。  
除非设置了target或ignoreBrowserslistConfig选项，否则默认情况下@babel/preset-env将使用browserslist配置源 。  
例如，仅包括浏览器具有> 0.25％市场份额的用户所需的polyfill和代码转换（忽略没有安全更新的浏览器，如IE 10和BlackBerry）  

### .browserslistrc配置文件
```txt
defaults
not IE 11
not IE_Mob 11
maintained node versions
```

## Browserslist将使用来自以下来源之一的浏览器和Node.js版本查询：

- browserslist键入package.json当前目录或父目录中的文件。 我们建议采用这种方式。
- .browserslistrc 当前目录或父目录中的配置文件。
- browserslist 当前目录或父目录中的配置文件。
- BROWSERSLIST 环境变量。
- 如果上述方法未产生有效结果，则Browserslist将使用默认值： > 0.5%, last 2 versions, Firefox ESR, not dead。
查询：`https://github.com/browserslist/browserslist#queries`







