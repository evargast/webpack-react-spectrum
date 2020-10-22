import { addDecorator, addParameters } from "@storybook/react";

import { Provider, lightTheme } from "@adobe/react-spectrum";
import React from "react";
import { configureActions } from "@storybook/addon-actions";

configureActions({
    depth: 1,
});

addParameters({
    viewMode: "story",
});

addDecorator(storyFn => {
    return (
        <Provider theme={lightTheme} colorScheme={"light"}>
            {storyFn()}
        </Provider>
    );
});
