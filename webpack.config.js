const {
    merge
} = require("webpack-merge");
const loaderConfig = require('./configuration/loader.config');
const commonConfig = require("./configuration/common.config");
const pluginsConfig = require("./configuration/plugins.config");
module.exports = merge(commonConfig, loaderConfig, pluginsConfig);