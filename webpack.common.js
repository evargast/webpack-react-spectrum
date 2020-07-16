const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createStyledComponentsTransformer = require("typescript-plugin-styled-components")
    .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
    entry: "./src/components/index.tsx",
    target: "web",
    mode: "development",
    output: {
        filename: "[name].[hash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer],
                    }),
                },
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf)$/,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Spectrum App",
            template: __dirname + "/public/index.html",
            inject: "body",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    devServer: {
        port: 1234,
        stats: {
            modules: false,
        },
        hot: true,
        writeToDisk: true,
    },

    performance: {
        hints: false,
    },
    stats: {
        modules: false,
        warnings: false,
    },
};
