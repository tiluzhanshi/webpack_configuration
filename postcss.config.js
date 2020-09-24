module.exports = {
    plugins: [
        // "stylelint",
        require("precss")({}),
        require("autoprefixer"),
        // 允许你使用未来的 CSS 特性。
        require("postcss-preset-env"),
        // // 囊括了许多插件来支持类似 Sass 的特性，比如 CSS 变量，套嵌，mixins 等

        // // PreCSS由以下插件提供动力（按此顺序）：
        // // postcss-extend-rule
        // // postcss-advanced-variables
        // // postcss-preset-env
        // // postcss-atroot
        // // postcss-property-lookup
        // // postcss-nested

        // // require("postcss-sorting"),

        // // 自动重置合并相同的属性
        // require("postcss-autoreset"),
        // // 囊括了最常用的简写方式和书写帮助。
        // require("postcss-utilities"),
        // require("postcss-assets")({}),
        // // 能生成雪碧图。
        // require("postcss-sprites"),




    ]
};