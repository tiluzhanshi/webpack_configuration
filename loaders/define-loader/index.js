module.exports = function (code) {

    console.log("define-loader1")
    // return `require("./demo.txt");`;

    return code;
}

module.exports.pitch = function() {
    console.log("pitch1")
    console.log(this.loaders);
    // let request = "/Users/work/workSpace/github/webpack_configuration/node_modules/css-loader/dist/cjs.js!/Users/work/workSpace/github/webpack_configuration/src/main.css?inline";
    // return `import mod from ${request}; export default mod; export * from ${request}`;
    // return `require("../node_modules/css-loader/dist/cjs.js!./main.css?inline");`;

   // return `require("file-loader!./demo.txt?sefaf");`;
//    return ""
}