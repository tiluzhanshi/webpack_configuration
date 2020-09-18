
import webapp_test from "webapp_test?webapp";
import abcd from "abc";
import path from "path";
import d3 from "../d3"
import foo from './bar/index.js?externals';
import browser from "./browser";
// import jquery from "jquery";
import "./css/index.scss";
import txt from "./readme.txt";
// const { createProxyMiddleware } = require('http-proxy-middleware');
import varfile from "./varfile";

import url from "./url.png";
import abc from "./abc.png";
import other from "./other.png";

import json5 from "./file.json5";

import Foo from "./typescript.ts";


console.log(json5);


document.querySelector("#img").src = url;

console.log(url)
console.log(`<img src="./abc.png" alt="" id="img333">`)
console.log(foo);
console.log(123);
console.log("main12");
console.log(varfile); // 315360000000
console.log("aaaaaaaaaa", 1+4);