const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const createStyledComponentsTransformer =
    require("typescript-plugin-styled-components").default;
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
        modules: ["src", "node_modules"],
        alias: {
            components: path.resolve(__dirname, "src/components"),
            // Add aliases here if needed -->  `alias: path.resolve(__dirname, "src/alias-path"),`
        },
        extensions: [".tsx", ".ts", ".js", ".jsx", ".svg", ".css", ".json"],
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
        new CleanWebpackPlugin(),
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
        hot: true,
    },

    performance: {
        hints: false,
    },

    stats: "minimal",
};
