const id = 'vue-loader1-plugin'
const NS = 'vue-loader1'

module.exports = function Foo() {
    this.apply = function(compiler) {
        // console.log(arguments);
        // console.log(ar);
        console.log("plugins.js");

        if (compiler.hooks) {
            // webpack 4
            compiler.hooks.compilation.tap(id, compilation => {
              console.log("custom-loader/plugins.js");
            //   console.log(compilation);
              const normalModuleLoader = compilation.hooks.normalModuleLoader
              normalModuleLoader.tap(id, loaderContext => {
                loaderContext[NS] = true
              })
            })
          }
      
    }
    // console.log(arguments);
    // console.log(this);
}