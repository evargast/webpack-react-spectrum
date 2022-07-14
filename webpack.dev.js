const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devConfig = {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
    },
};

module.exports = env => {
    return merge(commonConfig(env), devConfig);
};
