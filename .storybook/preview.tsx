import { addDecorator, addParameters } from "@storybook/react";

import { Provider, lightTheme } from "@adobe/react-spectrum";
import React from "react";

addParameters({
    viewMode: "story",
});

addDecorator(Story => {
    return (
        <Provider theme={lightTheme} colorScheme={"light"}>
            <Story />
        </Provider>
    );
});
