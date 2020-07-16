import "./storybook.css";

import { addDecorator, addParameters } from "@storybook/react";

import { defaultTheme, Provider } from "@adobe/react-spectrum";
import React from "react";
import { configureActions } from "@storybook/addon-actions";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import { create } from "@storybook/theming";

configureActions({
    depth: 1,
});

addParameters({
    options: {
        theme: create({
            base: "light",
            brandUrl: "https://github.com/evargast/webpack-react-spectrum",
        }),
    },
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});

addDecorator(storyFn => {
    return <Provider theme={defaultTheme}>{storyFn()}</Provider>;
});
