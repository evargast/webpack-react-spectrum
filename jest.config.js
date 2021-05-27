const config = {
    roots: ["<rootDir>/src"],
    clearMocks: true,
    moduleFileExtensions: ["ts", "tsx", "js"],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect",
        "jest-styled-components",
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.svg$": "<rootDir>/src/test-utils/svgTransform.js",
    },
    moduleDirectories: ["<rootDir>/src", "node_modules"],
    moduleNameMapper: {
        "\\.css$": "identity-obj-proxy",
        "^components(.*)$": "<rootDir>/src/components$1",
        // Add aliases here ---> "^alias(.*)$": "<rootDir>/src/alias-path$1", <---
    },
};

module.exports = config;
