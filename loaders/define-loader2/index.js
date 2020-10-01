module.exports = function (code) {
    console.log("define-loader2")
    return code;
}
module.exports.pitch = function () {
    console.log("pitch2")
    // // return ""
    // console.log(this.loaders)

}