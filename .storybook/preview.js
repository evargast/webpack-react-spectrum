import { addDecorator, addParameters } from "@storybook/react";

import { Provider } from "@adobe/react-spectrum";
import React from "react";
import { configureActions } from "@storybook/addon-actions";
import { create } from "@storybook/theming";
import SpectrumWhiteTheme from "spectrum-white-theme";

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
});

addParameters({
    viewMode: "story",
});

addDecorator(storyFn => {
    return (
        <Provider theme={SpectrumWhiteTheme} colorScheme={"light"}>
            {storyFn()}
        </Provider>
    );
});
