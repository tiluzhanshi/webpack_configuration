const {
    merge
} = require("webpack-merge");
const loaderConfig = require('./configuration/loader.config');
const pluginConfig = require("./configuration/plugins.config");
const commonConfig = require("./configuration/common.config");
module.exports = merge(commonConfig, loaderConfig, pluginConfig);