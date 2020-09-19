import "./a.js";
import "./b.js";
/**
 * @license  aaa
 */
module.exports = function () {
    console.log("插件代码.......");

    import("./async.js?query=tiluzhanshi").then((a) => {
        console.log(1);
    });

    window.fooc=4;
    
}