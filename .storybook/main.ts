import path from "path";
import custom from "../webpack.common.js";
import webpack from "webpack";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const config = {
    stories: ["../src/**/*.story.tsx"],
    addons: ["@storybook/addon-actions"],

    framework: "@storybook/react",
    webpackFinal: async (config: any) => {
        config.devServer = { stats: "errors-only" };

        if (config?.resolve?.plugins) {
            config.resolve = {
                ...config.resolve,
                plugins: [new TsconfigPathsPlugin()],
            };
        }

        return config;
    },
};

module.exports = config;
