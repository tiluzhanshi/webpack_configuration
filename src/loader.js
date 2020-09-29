
const plugin = require('./plugins.js')

function foo(content) {
    return content;
}
module.exports = foo;
module.exports.pitch = function () {
    console.log(111111)
}


// module.exports.VueLoaderPlugin = plugin;