const path = require("path");
require("@babel/register")({
  // ...
});
let path1 = path.join(__dirname,",,","./.","","???");

console.log(path1);

let path2 = path.resolve(__dirname,",,");

console.log(__dirname);

let foo = () => true;

