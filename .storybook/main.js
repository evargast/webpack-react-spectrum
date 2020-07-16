const path = require("path");
const custom = require("../webpack.common.js");
const webpack = require("webpack");

module.exports = {
    stories: ["../src/**/*.story.tsx"],
    addons: [
        "@storybook/addon-actions/register",
        {
            name: "@storybook/addon-docs/preset",
            options: {
                configureJSX: true,
                babelOptions: {},
            },
        },
        //TODO: Update setup once Storybook 6.0 is released, it will support prop types table + code for TS OOTB
        // https://github.com/storybookjs/storybook/issues/9311
        {
            name: "@storybook/preset-typescript",
            options: {
                tsLoaderOptions: {
                    transpileOnly: true,
                    confiıgFile: path.resolve(__dirname, "../tsconfig.json"),
                },
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve("@storybook/source-loader"),
                },
            ],
        });

        config.stats = {
            modules: false,
            warnings: false,
        };
        config.devServer = { stats: "errors-only" };

        return { ...custom.config, ...config };
    },
};
