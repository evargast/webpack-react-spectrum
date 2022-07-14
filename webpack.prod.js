const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const prodConfig = {
    mode: "production",
};

module.exports = env => {
    return merge(commonConfig(env), prodConfig);
};
