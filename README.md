# 常用loader列表

# loader
webpack允许使用加载程序来预处理文件。这使您可以捆绑JavaScript以外的任何静态资源。您可以使用Node.js轻松编写自己的加载程序。

加载程序是通过loadername!在require()语句中使用前缀来激活的，或者是通过webpack配置中的regex自动应用的-请参见configuration。

# Files 
raw-loader 加载文件的原始内容（utf-8）  
val-loader 将代码作为模块执行，并将导出视为JS代码  
url-loader类似于文件加载器，但如果文件小于限制，则可以返回数据URL  
file-loader 将文件发射到输出文件夹中并返回（相对）URL  
ref-loader 手动在任何文件之间创建依赖关系  
# JSON格式 
json5-loader加载和转译JSON 5文件  
cson-loader加载和转译CSON文件
# 转换
babel-loader使用Babel加载ES2015 +代码并转换为ES5  
buble-loader使用Bublé将ES2015 +代码加载并转换为ES5  
traceur-loader使用Traceur将ES2015 +代码加载并转换为ES5  
ts-loader像JavaScript一样加载TypeScript 2.0+  
coffee-loader像JavaScript一样加载CoffeeScript  
fengari-loader使用fengari加载Lua代码  
elm-webpack-loader像JavaScript一样加载Elm  
# 模板化 
html-loader 将HTML导出为字符串，需要引用静态资源  
pug-loader 加载Pug和Jade模板并返回一个函数  
markdown-loader 将Markdown编译为HTML  
react-markdown-loader 使用markdown-parse解析器将Markdown编译为React组件  
posthtml-loader使用PostHTML加载和转换HTML文件  
handlebars-loader 将车把编译为HTML 
markup-inline-loader将SVG / MathML文件内嵌到HTML。在将图标字体或  CSS动画应用于SVG时，此功能很有用。  
twig-loader 编译Twig模板并返回一个函数 
# Styling 
style-loader 将模块导出作为样式添加到DOM  
css-loader 使用已解析的导入加载CSS文件并返回CSS代码  
less-loader 加载和编译LESS文件 
sass-loader 加载并编译SASS / SCSS文件   
postcss-loader使用PostCSS加载和转换CSS / SSS文件   
stylus-loader 加载并编译手写笔文件  
# Linting && Testing 
mocha-loader使用Mocha进行测试（浏览器/ NodeJS）  
eslint-loader使用ESLint整理代码的PreLoader  
# 框架 
vue-loader加载和编译Vue组件    
polymer-loader使用首选的预处理器和require()一流组件等Web组件处理HTML和CSS    
angular2-template-loader加载和编译角度组件    