import { storiesOf } from "@storybook/react";
import React from "react";

import App from "./App";

const stories = storiesOf("Storybook!", module);

stories.add("App story", () => <App text="This is a story" />);
