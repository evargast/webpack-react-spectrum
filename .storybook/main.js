const path = require("path");
const custom = require("../webpack.common.js");
const webpack = require("webpack");

const webpackResolve = {
    alias: {
        "^components(.*)$": "../src/components$1",
        // Add aliases here if needed -->  `alias: path.resolve(__dirname, "../src/alias-path"),`
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".svg", ".css", ".json", ".mdx"],
};

module.exports = {
    stories: ["../src/**/*.story.@(tsx|mdx)"],
    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        "@storybook/addon-controls",
        "@storybook/addon-actions",
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(stories|story)\.[tj]sx?$/,
            loader: require.resolve("@storybook/source-loader"),
            exclude: [/node_modules/],
            enforce: "pre",
        });

        config.stats = {
            modules: false,
            warnings: false,
        };

        config.devServer = { stats: "errors-only" };

        config.resolve = webpackResolve;

        return { ...custom.config, ...config };
    },
};
