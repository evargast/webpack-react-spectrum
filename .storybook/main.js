const custom = require("../webpack.common.js");

const webpackResolve = {
    alias: {
        "^components(.*)$": "../src/components$1",
        // Add aliases here if needed -->  `alias: path.resolve(__dirname, "../src/alias-path"),`
    },
    extensions: [".tsx", ".ts", ".js", ".jsx", ".svg", ".css", ".json"],
};

module.exports = {
    core: {
        builder: "webpack5",
    },
    stories: ["../src/**/*.story.tsx"],
    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                configureJSX: true,
                babelOptions: { loose: true },
                sourceLoaderOptions: null,
            },
        },
        "@storybook/addon-controls",
        "@storybook/addon-actions",
    ],
    typescript: {
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
            compilerOptions: {
                allowSyntheticDefaultImports: false,
                esModuleInterop: false,
            },
        },
    },
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(stories|story)\.[tj]sx?$/,
            loader: require.resolve("@storybook/source-loader"),
            exclude: [/node_modules/],
            enforce: "pre",
        });

        config.resolve = webpackResolve;

        return { ...custom.config, ...config };
    },
};
