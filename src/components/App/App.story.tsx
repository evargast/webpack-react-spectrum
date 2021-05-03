/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

import { Story } from "@storybook/react";
import React, { ComponentProps, ReactElement } from "react";

import App from "./App";

export default {
    title: "TSX/App",
    component: App,
};

const TestStory: Story = (args: ComponentProps<typeof App>): ReactElement => {
    // Shared props may be passed here
    return <App {...args} />;
};

// Story specific props are passed here
const Welcome = TestStory.bind({});

export { Welcome };
