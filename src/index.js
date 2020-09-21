import component from "./component";
import bar from "./bar";
import "./main.css"
console.log("okok");

const fn = require.context("./modules/", false, /\.js$/);
console.dir(fn);
console.log(fn.keys().map(fn));

function importAll(r) {
    console.log(r);
    r.keys().forEach(r);
}

importAll(fn);
console.log("abc");

// if (module.hot) {
//     module.hot.accept('./component.js', function () {
//         console.log('Accepting the updated printMe module!');
//     })
// }